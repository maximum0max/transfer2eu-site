/*****************************************************************************
 * Transfer2EU — Forms backend (Google Apps Script)
 *
 * ONE web app handles ALL site forms (reviews, driver applications, guest
 * registration). The website POSTs JSON with a "type" field; this routes it:
 *   • type:"review" → "Reviews" sheet (Approved=FALSE) + e-mail w/ approve link
 *   • type:"driver" → "Drivers" sheet + e-mail
 *   • type:"guest"  → "Guests"  sheet + e-mail (Guardia Civil registration)
 * doGet returns APPROVED reviews as JSON (the website reads this to show them).
 *
 * Each notification e-mail includes a direct link to the relevant sheet tab,
 * so you can open it and (for reviews) set Approved = TRUE in one click.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * SETUP / RE-DEPLOY  (do this once, and again whenever you change this code)
 *   1. Open your Google Sheet → Extensions → Apps Script.
 *   2. Replace ALL the code with this file, save (💾).
 *   3. Deploy → Manage deployments → ✏️ Edit the existing deployment
 *        • Execute as:      Me
 *        • Who has access:  Anyone        ←← MUST be "Anyone" (not "Only myself"
 *                                            and not "Anyone with Google account")
 *        • Version:         New version
 *        • Deploy → Authorize access if asked.
 *   4. The /exec URL stays the same — no change needed in the website.
 *      (Only if you create a NEW deployment does the URL change; then paste it
 *       into Reviews.data.jsx → REVIEWS_API.)
 *
 * VERIFY: open the /exec URL in a browser — you should see [] or a JSON list,
 * NOT "Access denied / Acceso denegado".
 *****************************************************************************/

var NOTIFY_EMAIL = 'transfers2eu@gmail.com';

function ss_() { return SpreadsheetApp.getActiveSpreadsheet(); }

function sheetFor_(name, headers) {
  var ss = ss_();
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Direct link to a specific sheet tab.
function tabUrl_(sh) {
  return ss_().getUrl() + '#gid=' + sh.getSheetId();
}

// Direct link that opens the sheet AND jumps to a specific cell (e.g. "G5"),
// so you land right on the Approved cell of the new review.
function cellUrl_(sh, a1) {
  return ss_().getUrl() + '#gid=' + sh.getSheetId() + '&range=' + a1;
}

// ── Website reads approved reviews here ────────────────────────────────────
function doGet() {
  var sh = sheetFor_('Reviews', ['Timestamp', 'Name', 'Trip', 'Rating', 'Text', 'Date', 'Approved']);
  var rows = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < rows.length; i++) {
    var r = rows[i];
    var ok = r[6] === true || String(r[6]).trim().toUpperCase() === 'TRUE';
    if (ok && r[1] && r[4]) {
      out.push({ name: r[1], trip: r[2], rating: Number(r[3]) || 5, text: r[4], date: r[5] ? String(r[5]) : '' });
    }
  }
  out.reverse(); // newest first
  return json_(out);
}

// ── Website submits any form here ──────────────────────────────────────────
function doPost(e) {
  var d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) { d = {}; }
  // Booking form intentionally NOT handled here — it goes only to WhatsApp.
  var type = String(d.type || 'review');
  if (type === 'driver') return handleDriver_(d);
  if (type === 'guest')  return handleGuest_(d);
  return handleReview_(d);
}

function handleReview_(d) {
  var name = String(d.name || '').slice(0, 80).trim();
  var text = String(d.text || '').slice(0, 1500).trim();
  if (!name || !text) return json_({ ok: false, error: 'missing fields' });
  var trip = String(d.trip || '').slice(0, 80).trim();
  var rating = Math.min(5, Math.max(1, Math.round(Number(d.rating) || 5)));
  var sh = sheetFor_('Reviews', ['Timestamp', 'Name', 'Trip', 'Rating', 'Text', 'Date', 'Approved']);
  var date = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'MMM yyyy');
  sh.appendRow([new Date(), name, trip, rating, text, date, false]);
  var row = sh.getLastRow();           // the row we just added
  var approveLink = cellUrl_(sh, 'G' + row); // G = "Approved" column
  try {
    MailApp.sendEmail(
      NOTIFY_EMAIL,
      'Новый отзыв на модерацию: ' + name + ' (' + rating + '★)',
      'Имя: ' + name + '\n' +
      'Маршрут: ' + (trip || '—') + '\n' +
      'Оценка: ' + rating + ' / 5\n\n' +
      text + '\n\n' +
      '▶ ОПУБЛИКОВАТЬ: откройте ссылку (курсор встанет на ячейку Approved этого\n' +
      'отзыва) и впишите TRUE — отзыв появится на сайте:\n' + approveLink +
      '\n\nВся таблица отзывов: ' + tabUrl_(sh)
    );
  } catch (err) {}
  return json_({ ok: true });
}

function handleDriver_(d) {
  // E-mail only — no sheet logging for driver applications (by request).
  try {
    MailApp.sendEmail(
      NOTIFY_EMAIL,
      'Анкета водителя: ' + (d.name || ''),
      'Имя: ' + (d.name || '') + '\n' +
      'Телефон: ' + (d.phone || '') + '\n' +
      'Email: ' + (d.email || '') + '\n' +
      'Марка авто: ' + (d.car || '') + '\n' +
      'Год выпуска: ' + (d.year || '') + '\n' +
      'Регион: ' + (d.region || '')
    );
  } catch (err) {}
  return json_({ ok: true });
}

function handleGuest_(d) {
  var sh = sheetFor_('Guests', [
    'Timestamp', 'Nombre', 'Primer apellido', 'Segundo apellido', 'Fecha nacimiento',
    'Nacionalidad', 'Tipo doc', 'Nº documento', 'Fecha expedición', 'Alojamiento',
    'Entrada', 'Salida', 'Sexo', 'Residencia',
  ]);
  sh.appendRow([
    new Date(), d.nombre || '', d.apellido1 || '', d.apellido2 || '', d.nacimiento || '',
    d.nacionalidad || '', d.tipoDoc || '', d.numDoc || '', d.fechaExpedicion || '',
    d.alojamiento || '', d.fechaEntrada || '', d.fechaSalida || '', d.sexo || '', d.residencia || '',
  ]);
  try {
    MailApp.sendEmail(
      NOTIFY_EMAIL,
      'Registro de huésped (Guardia Civil): ' + (d.nombre || '') + ' ' + (d.apellido1 || ''),
      'Nombre: ' + (d.nombre || '') + ' ' + (d.apellido1 || '') + ' ' + (d.apellido2 || '') + '\n' +
      'Fecha de nacimiento: ' + (d.nacimiento || '') + '\n' +
      'Nacionalidad: ' + (d.nacionalidad || '') + '\n' +
      'Documento: ' + (d.tipoDoc || '') + ' ' + (d.numDoc || '') + ' (expedido ' + (d.fechaExpedicion || '') + ')\n' +
      'Alojamiento: ' + (d.alojamiento || '') + '\n' +
      'Entrada: ' + (d.fechaEntrada || '') + '  ·  Salida: ' + (d.fechaSalida || '') + '\n' +
      'Sexo: ' + (d.sexo || '') + '\n' +
      'País de residencia: ' + (d.residencia || '') + '\n\n' +
      'Tabla de huéspedes:\n' + tabUrl_(sh)
    );
  } catch (err) {}
  return json_({ ok: true });
}
