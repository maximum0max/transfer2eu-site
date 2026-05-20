/*****************************************************************************
 * Transfer2EU — Reviews backend (Google Apps Script)
 *
 * WHAT IT DOES
 *   • doPost  — a visitor submits a review on the site → a row is added to the
 *               "Reviews" sheet with Approved = FALSE, and you get an e-mail.
 *   • doGet   — the website reads this and shows ONLY rows where Approved = TRUE.
 *
 * So the flow is:  submit → e-mail to you + pending row → you tick Approved =
 * TRUE in the sheet → the review appears on the site automatically (no code).
 *
 * ──────────────────────────────────────────────────────────────────────────
 * ONE-TIME SETUP  (≈ 5 minutes)
 *   1. Go to https://sheets.google.com and create a new blank spreadsheet.
 *      Name it e.g. "Transfer2EU Reviews".
 *   2. In that sheet: menu  Extensions → Apps Script.
 *   3. Delete whatever code is there, paste THIS ENTIRE FILE, and save (💾).
 *   4. (Optional) change NOTIFY_EMAIL below if you want notices elsewhere.
 *   5. Click  Deploy → New deployment.
 *        • Click the gear ⚙ → select "Web app".
 *        • Description: anything (e.g. "reviews v1").
 *        • Execute as:        Me
 *        • Who has access:    Anyone
 *        • Click Deploy, then "Authorize access" and allow the permissions.
 *   6. Copy the "Web app URL" it shows (ends with /exec).
 *   7. Open  Reviews.data.jsx  in the site and paste that URL into:
 *        export const REVIEWS_API = 'PASTE_URL_HERE';
 *   8. Done. The sheet auto-creates a "Reviews" tab on the first submission.
 *      To publish a review, set its "Approved" cell to TRUE (a checkbox or the
 *      word TRUE). To hide one, set it back to FALSE.
 *
 * NOTE: if you ever CHANGE this script, do Deploy → Manage deployments → edit
 * the existing one → "New version" so the same URL keeps working.
 *****************************************************************************/

var SHEET_NAME   = 'Reviews';
var NOTIFY_EMAIL = 'transfers2eu@gmail.com';
var HEADERS      = ['Timestamp', 'Name', 'Trip', 'Rating', 'Text', 'Date', 'Approved'];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Website reads approved reviews here.
function doGet() {
  var sheet = getSheet_();
  var rows = sheet.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < rows.length; i++) {
    var r = rows[i];
    var approved = r[6];
    var ok = approved === true || String(approved).trim().toUpperCase() === 'TRUE';
    if (ok && r[1] && r[4]) {
      out.push({
        name:   r[1],
        trip:   r[2],
        rating: Number(r[3]) || 5,
        text:   r[4],
        date:   r[5] ? String(r[5]) : '',
      });
    }
  }
  out.reverse(); // newest first
  return json_(out);
}

// Website submits a new (pending) review here.
function doPost(e) {
  var data = {};
  try { data = JSON.parse(e.postData.contents); } catch (err) { data = {}; }

  var name = String(data.name || '').slice(0, 80).trim();
  var trip = String(data.trip || '').slice(0, 80).trim();
  var text = String(data.text || '').slice(0, 1500).trim();
  var rating = Math.min(5, Math.max(1, Math.round(Number(data.rating) || 5)));

  if (!name || !text) return json_({ ok: false, error: 'missing fields' });

  var sheet = getSheet_();
  var tz = Session.getScriptTimeZone();
  var dateLabel = Utilities.formatDate(new Date(), tz, 'MMM yyyy');
  // Columns: Timestamp, Name, Trip, Rating, Text, Date, Approved(FALSE)
  sheet.appendRow([new Date(), name, trip, rating, text, dateLabel, false]);

  try {
    MailApp.sendEmail(
      NOTIFY_EMAIL,
      'Новый отзыв на модерацию: ' + name + ' (' + rating + '★)',
      'Имя: ' + name + '\n' +
      'Маршрут: ' + (trip || '—') + '\n' +
      'Оценка: ' + rating + ' / 5\n\n' +
      text + '\n\n' +
      '— Чтобы опубликовать, откройте таблицу "' + SHEET_NAME +
      '" и поставьте Approved = TRUE в этой строке.'
    );
  } catch (mailErr) { /* sheet row is saved even if e-mail fails */ }

  return json_({ ok: true });
}
