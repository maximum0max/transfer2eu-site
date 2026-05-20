import React from 'react'
import { FORMS_API } from './Reviews.data.jsx'
// Secret guest-registration form (Guardia Civil / Real Decreto 933/2021).
// Reached ONLY via the hash route #registro — it's not linked anywhere in the
// site nav, so the public never sees it; the host shares the link privately
// with guests. Submissions e-mail transfers2eu@gmail.com via formsubmit.co.
//
// NOTE: this collects sensitive ID data. "Hidden URL" is obscurity, not
// security — anyone with the link can open it. Field VALUES are sent to the
// owner in Spanish (the form's legal language) regardless of the UI language
// the guest picked, so the data is ready for the official register.

const COUNTRIES = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria',
  'Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia',
  'Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada',
  'Cape Verde','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo (Brazzaville)','Congo (Kinshasa)',
  'Costa Rica','Croatia','Cuba','Cyprus','Czechia','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt',
  'El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia',
  'Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary',
  'Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Ivory Coast','Jamaica','Japan','Jordan','Kazakhstan',
  'Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein',
  'Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania',
  'Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia',
  'Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman',
  'Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar',
  'Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino',
  'Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia',
  'Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden',
  'Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago',
  'Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States',
  'Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe',
];

// Document-type and sex options. `value` is the canonical Spanish term sent to
// the owner; labels are localised per language.
const DOC_TYPES = ['NIE', 'DNI', 'Pasaporte'];
const DOC_LABELS = {
  ru: { NIE: 'NIE', DNI: 'DNI', Pasaporte: 'Паспорт' },
  es: { NIE: 'NIE', DNI: 'DNI', Pasaporte: 'Pasaporte' },
  en: { NIE: 'NIE', DNI: 'DNI', Pasaporte: 'Passport' },
};
const SEX_VALUES = ['Hombre', 'Mujer', 'Prefiero no decirlo', 'Otro'];
const SEX_LABELS = {
  ru: { Hombre: 'Мужской', Mujer: 'Женский', 'Prefiero no decirlo': 'Не указывать', Otro: 'Другое' },
  es: { Hombre: 'Hombre', Mujer: 'Mujer', 'Prefiero no decirlo': 'Prefiero no decirlo', Otro: 'Otro' },
  en: { Hombre: 'Male', Mujer: 'Female', 'Prefiero no decirlo': 'Prefer not to say', Otro: 'Other' },
};

const I18N = {
  ru: {
    eyebrow: 'Регистрация гостя',
    title: 'Данные гостя для регистрации в Guardia Civil',
    subtitle: 'Обязательная регистрация для туристического жилья в Испании. Данные передаются только в органы и обрабатываются конфиденциально.',
    nombre: 'Имя', apellido1: 'Первая фамилия', apellido2: 'Вторая фамилия (если есть)',
    nacimiento: 'Дата рождения', nacionalidad: 'Гражданство',
    tipoDoc: 'Тип документа', numDoc: 'Номер документа', fechaExpedicion: 'Дата выдачи документа',
    alojamiento: 'Название жилья', fechaEntrada: 'Дата заезда', fechaSalida: 'Дата выезда',
    sexo: 'Пол', residencia: 'Страна постоянного проживания',
    optional: '(необязательно)', selectPlaceholder: '— Выберите —',
    submit: 'Отправить регистрацию', sending: 'Отправляем…',
    successTitle: 'Спасибо! Данные отправлены',
    successText: 'Регистрация получена. Если потребуется, мы свяжемся с вами.',
    error: 'Не удалось отправить. Проверьте соединение и попробуйте ещё раз.',
    required: 'Обязательные поля',
    privacy: 'Данные используются только для регистрации в Guardia Civil согласно Real Decreto 933/2021 и не передаются третьим лицам.',
  },
  es: {
    eyebrow: 'Registro de huésped',
    title: 'Datos obligatorios del huésped para el registro en Guardia Civil',
    subtitle: 'Registro obligatorio para alojamientos turísticos en España. Los datos se comunican únicamente a las autoridades y se tratan de forma confidencial.',
    nombre: 'Nombre', apellido1: 'Primer apellido', apellido2: 'Segundo apellido (si lo tiene)',
    nacimiento: 'Fecha de nacimiento', nacionalidad: 'Nacionalidad',
    tipoDoc: 'Tipo de documento', numDoc: 'Número de documento', fechaExpedicion: 'Fecha de expedición del documento',
    alojamiento: 'Nombre del alojamiento', fechaEntrada: 'Fecha de entrada al alojamiento', fechaSalida: 'Fecha de salida del alojamiento',
    sexo: 'Sexo', residencia: 'País de residencia habitual',
    optional: '(opcional)', selectPlaceholder: '— Seleccione —',
    submit: 'Enviar registro', sending: 'Enviando…',
    successTitle: '¡Gracias! Datos enviados',
    successText: 'Hemos recibido el registro. Le contactaremos si fuera necesario.',
    error: 'No se pudo enviar. Compruebe la conexión e inténtelo de nuevo.',
    required: 'Campos obligatorios',
    privacy: 'Los datos se usan solo para el registro en la Guardia Civil conforme al Real Decreto 933/2021 y no se ceden a terceros.',
  },
  en: {
    eyebrow: 'Guest registration',
    title: 'Mandatory guest data for Guardia Civil registration',
    subtitle: 'Required registration for tourist accommodation in Spain. Data is reported only to the authorities and handled confidentially.',
    nombre: 'First name', apellido1: 'First surname', apellido2: 'Second surname (if any)',
    nacimiento: 'Date of birth', nacionalidad: 'Nationality',
    tipoDoc: 'Document type', numDoc: 'Document number', fechaExpedicion: 'Document issue date',
    alojamiento: 'Accommodation name', fechaEntrada: 'Check-in date', fechaSalida: 'Check-out date',
    sexo: 'Sex', residencia: 'Country of usual residence',
    optional: '(optional)', selectPlaceholder: '— Select —',
    submit: 'Submit registration', sending: 'Sending…',
    successTitle: 'Thank you! Data submitted',
    successText: 'We have received the registration and will contact you if needed.',
    error: 'Could not send. Check your connection and try again.',
    required: 'Required fields',
    privacy: 'Data is used only for the Guardia Civil register under Real Decreto 933/2021 and is not shared with third parties.',
  },
};

const EMPTY = {
  nombre: '', apellido1: '', apellido2: '', nacimiento: '', nacionalidad: '',
  tipoDoc: '', numDoc: '', fechaExpedicion: '', alojamiento: '',
  fechaEntrada: '', fechaSalida: '', sexo: '', residencia: '',
};

function GuestRegistration({ onNav }) {
  const { useState } = React;
  const [lang, setLang] = useState('ru');
  const [form, setForm] = useState(EMPTY);
  const [hp, setHp] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const t = I18N[lang];

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const valid =
    form.nombre.trim() && form.apellido1.trim() && form.nacimiento && form.nacionalidad &&
    form.tipoDoc && form.numDoc.trim() && form.fechaExpedicion && form.alojamiento.trim() &&
    form.fechaEntrada && form.fechaSalida && form.sexo && form.residencia;

  /* styles — match the site's form chrome */
  const page = { background: 'var(--t2-bg-2)', minHeight: '70vh' };
  const wrap = { maxWidth: 720, margin: '0 auto', padding: '56px 24px 72px' };
  const top = { textAlign: 'center', marginBottom: 24 };
  const stripe = { height: 4, background: 'linear-gradient(90deg, var(--t2-red) 0%, #c01928 100%)' };
  const eyebrow = { fontSize: 12, fontWeight: 700, color: 'var(--t2-red)', letterSpacing: '.12em', textTransform: 'uppercase' };
  const h1 = { fontFamily: "'Onest',sans-serif", fontWeight: 800, fontSize: 'clamp(22px, 3.4vw, 30px)', color: 'var(--t2-ink)', margin: '8px 0 10px', letterSpacing: '-.02em', lineHeight: 1.15 };
  const sub = { fontSize: 14, lineHeight: 1.55, color: 'var(--t2-ink-3)', margin: '0 auto', maxWidth: 560 };

  const langRow = { display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 22 };
  const langBtn = (on) => ({
    padding: '7px 16px', borderRadius: 999, cursor: 'pointer', fontFamily: "'Inter',system-ui",
    fontWeight: 700, fontSize: 13, border: '1px solid ' + (on ? 'var(--t2-ink)' : 'var(--t2-line)'),
    background: on ? 'var(--t2-ink)' : '#fff', color: on ? '#fff' : 'var(--t2-ink-2)',
  });

  const card = { background: '#fff', border: '1px solid var(--t2-line)', borderRadius: 20, padding: '26px 26px', boxShadow: 'var(--t2-sh-1)' };
  const rows = { display: 'flex', flexDirection: 'column', gap: 16 };
  const two = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 };
  const label = { display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--t2-ink-3)', marginBottom: 7 };
  const req = { color: 'var(--t2-red)' };
  const opt = { color: 'var(--t2-ink-3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 };
  const field = { width: '100%', fontSize: 16, fontFamily: "'Inter',system-ui", padding: '12px 14px', borderRadius: 12, border: '1px solid var(--t2-line)', background: '#fff', color: 'var(--t2-ink)', outline: 'none', boxSizing: 'border-box' };
  const seg = { display: 'flex', gap: 8, flexWrap: 'wrap' };
  const chip = (on) => ({
    padding: '10px 16px', borderRadius: 10, cursor: 'pointer', fontFamily: "'Inter',system-ui",
    fontWeight: 700, fontSize: 14, border: '1px solid ' + (on ? 'var(--t2-red)' : 'var(--t2-line)'),
    background: on ? 'var(--t2-red)' : 'var(--t2-bg-2)', color: on ? '#fff' : 'var(--t2-ink-2)',
  });
  const hint = { fontSize: 11, marginTop: 12, color: 'var(--t2-ink-3)', textAlign: 'center', lineHeight: 1.5 };
  const btn = (enabled) => ({
    width: '100%', padding: '15px', borderRadius: 14, marginTop: 6, border: 0,
    fontFamily: "'Inter',system-ui", fontWeight: 700, fontSize: 15,
    background: enabled ? 'linear-gradient(135deg, var(--t2-red), #c01928)' : 'var(--t2-bg-2)',
    color: enabled ? '#fff' : 'var(--t2-ink-3)',
    cursor: enabled ? 'pointer' : 'not-allowed',
    boxShadow: enabled ? '0 14px 28px rgba(238,46,61,.25)' : 'none',
  });

  const submit = async (e) => {
    e.preventDefault();
    if (!valid || sending) return;
    if (hp) { setDone(true); return; } // honeypot — silently drop bots
    if (!FORMS_API) { setError(t.error); return; }
    setSending(true); setError('');
    try {
      // Sent to the Apps Script backend (type:"guest"). no-cors fire-and-forget:
      // Apps Script doesn't return CORS headers, so the response can't be read;
      // the row is written + e-mailed regardless. text/plain keeps it a simple
      // request so no-cors permits it. A true network failure still rejects.
      await fetch(FORMS_API, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          type: 'guest',
          nombre: form.nombre,
          apellido1: form.apellido1,
          apellido2: form.apellido2,
          nacimiento: form.nacimiento,
          nacionalidad: form.nacionalidad,
          tipoDoc: form.tipoDoc,
          numDoc: form.numDoc,
          fechaExpedicion: form.fechaExpedicion,
          alojamiento: form.alojamiento,
          fechaEntrada: form.fechaEntrada,
          fechaSalida: form.fechaSalida,
          sexo: form.sexo,
          residencia: form.residencia,
        }),
      });
      setDone(true);
    } catch (err) {
      setError(t.error);
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div style={page}>
        <div style={stripe} />
        <div style={wrap}>
          <div style={{ ...card, textAlign: 'center', padding: '44px 28px' }}>
            <div style={{ fontSize: 54, marginBottom: 14 }}>✅</div>
            <h1 style={{ ...h1, margin: '0 0 8px' }}>{t.successTitle}</h1>
            <p style={{ fontSize: 14, color: 'var(--t2-ink-3)', margin: 0, lineHeight: 1.6 }}>{t.successText}</p>
          </div>
        </div>
      </div>
    );
  }

  const reqMark = <span style={req}> *</span>;

  return (
    <div style={page}>
      <div style={stripe} />
      <div style={wrap}>
        <div style={top}>
          <div style={eyebrow}>{t.eyebrow}</div>
          <h1 style={h1}>{t.title}</h1>
          <p style={sub}>{t.subtitle}</p>
        </div>

        <div style={langRow}>
          {[['ru', 'Русский'], ['es', 'Español'], ['en', 'English']].map(([code, name]) => (
            <button key={code} type="button" onClick={() => setLang(code)} style={langBtn(lang === code)}>{name}</button>
          ))}
        </div>

        <form style={card} onSubmit={submit}>
          <div style={rows}>
            <div style={two} className="t2-reg-two">
              <div>
                <label style={label}>{t.nombre}{reqMark}</label>
                <input style={field} value={form.nombre} onChange={e => set('nombre', e.target.value)} autoComplete="given-name" />
              </div>
              <div>
                <label style={label}>{t.apellido1}{reqMark}</label>
                <input style={field} value={form.apellido1} onChange={e => set('apellido1', e.target.value)} autoComplete="family-name" />
              </div>
            </div>

            <div>
              <label style={label}>{t.apellido2} <span style={opt}>{t.optional}</span></label>
              <input style={field} value={form.apellido2} onChange={e => set('apellido2', e.target.value)} />
            </div>

            <div style={two} className="t2-reg-two">
              <div>
                <label style={label}>{t.nacimiento}{reqMark}</label>
                <input type="date" style={field} value={form.nacimiento} onChange={e => set('nacimiento', e.target.value)} />
              </div>
              <div>
                <label style={label}>{t.nacionalidad}{reqMark}</label>
                <select style={field} value={form.nacionalidad} onChange={e => set('nacionalidad', e.target.value)}>
                  <option value="">{t.selectPlaceholder}</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label style={label}>{t.tipoDoc}{reqMark}</label>
              <div style={seg}>
                {DOC_TYPES.map(d => (
                  <button key={d} type="button" onClick={() => set('tipoDoc', d)} style={chip(form.tipoDoc === d)}>
                    {DOC_LABELS[lang][d]}
                  </button>
                ))}
              </div>
            </div>

            <div style={two} className="t2-reg-two">
              <div>
                <label style={label}>{t.numDoc}{reqMark}</label>
                <input style={field} value={form.numDoc} onChange={e => set('numDoc', e.target.value)} />
              </div>
              <div>
                <label style={label}>{t.fechaExpedicion}{reqMark}</label>
                <input type="date" style={field} value={form.fechaExpedicion} onChange={e => set('fechaExpedicion', e.target.value)} />
              </div>
            </div>

            <div>
              <label style={label}>{t.alojamiento}{reqMark}</label>
              <input style={field} value={form.alojamiento} onChange={e => set('alojamiento', e.target.value)} placeholder="Hotel / apartamento" />
            </div>

            <div style={two} className="t2-reg-two">
              <div>
                <label style={label}>{t.fechaEntrada}{reqMark}</label>
                <input type="date" style={field} value={form.fechaEntrada} onChange={e => set('fechaEntrada', e.target.value)} />
              </div>
              <div>
                <label style={label}>{t.fechaSalida}{reqMark}</label>
                <input type="date" style={field} value={form.fechaSalida} onChange={e => set('fechaSalida', e.target.value)} />
              </div>
            </div>

            <div>
              <label style={label}>{t.sexo}{reqMark}</label>
              <div style={seg}>
                {SEX_VALUES.map(s => (
                  <button key={s} type="button" onClick={() => set('sexo', s)} style={chip(form.sexo === s)}>
                    {SEX_LABELS[lang][s]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={label}>{t.residencia}{reqMark}</label>
              <select style={field} value={form.residencia} onChange={e => set('residencia', e.target.value)}>
                <option value="">{t.selectPlaceholder}</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Honeypot — off-screen; bots fill it, humans don't */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
            <input type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={e => setHp(e.target.value)} />
          </div>

          <button type="submit" disabled={!valid || sending} style={btn(valid && !sending)}>
            {sending ? t.sending : t.submit}
          </button>
          {error && <p style={{ ...hint, color: 'var(--t2-danger)' }}>{error}</p>}
          <p style={hint}><span style={req}>*</span> {t.required} · {t.privacy}</p>
        </form>
      </div>

      <style>{`
        @media (max-width: 520px) { .t2-reg-two { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

export default GuestRegistration;
