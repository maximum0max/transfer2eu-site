import React from 'react'

// Reviews source of truth for the Testimonial (home) section and the Отзывы
// page. Two layers:
//   1. SEED reviews below — always shown, curated by hand.
//   2. Google Sheet backend (optional) — once REVIEWS_API is set, the site
//      also fetches approved reviews submitted through the form. Flow:
//      submit → row added to the Sheet (Approved=FALSE) + you get an e-mail →
//      you tick Approved=TRUE → it appears on the site automatically.
//
// To add a seed review by hand, paste an object into REVIEWS:
//   { name: 'Имя Ф.', trip: 'ALC → Город', rating: 5, date: 'Май 2026', text: '…' }
// (`bg` avatar gradient is optional — auto-assigned from the name if omitted.)

// ── Reviews backend ───────────────────────────────────────────────────────
// Paste your deployed Google Apps Script Web App URL here (see
// google-apps-script-reviews.gs for the script + step-by-step setup).
// Leave '' to keep the site on seed-only reviews + the e-mail fallback.
export const REVIEWS_API = 'https://script.google.com/macros/s/AKfycbxjws-xbUSYe55wplb6mU3GV3DMJalOwnJQMUe4D8r4kiIp12zfzY6ukKxeUtFhnDCp/exec';

// ALL site forms (reviews, driver applications, guest registration) POST to
// this same Apps Script endpoint — it routes by a "type" field. One URL to
// manage. (formsubmit.co was dropped — it was unreliable and went down.)
export const FORMS_API = REVIEWS_API;

export const REVIEWS = [
  {
    name: 'Анна Н.', trip: 'ALC → Бенидорм', rating: 5, date: 'Май 2026',
    bg: 'linear-gradient(135deg,#c9a980,#7a5a3a)',
    text: 'С двумя детьми и горой багажа. Водитель встретил с табличкой, детские кресла стояли. Без пробок и языкового барьера.',
  },
  {
    name: 'Олег К.', trip: 'ALC → Кальпе', rating: 5, date: 'Апрель 2026',
    bg: 'linear-gradient(135deg,#7c3aed,#4338ca)',
    text: 'Заказывал по WhatsApp за час до посадки. Подача вовремя, цена ровно как сказали. В этом году повторю.',
  },
  {
    name: 'Мария С.', trip: 'ALC → Торревьеха', rating: 5, date: 'Апрель 2026',
    bg: 'linear-gradient(135deg,#0ea5e9,#0369a1)',
    text: 'Прилёт задержали на час, водитель ждал спокойно. Дочка уснула в кресле — приехали как в такси к дому. Спасибо!',
  },
  {
    name: 'Дмитрий В.', trip: 'ALC → Валенсия', rating: 5, date: 'Март 2026',
    bg: 'linear-gradient(135deg,#16a34a,#15803d)',
    text: 'Ехали вчетвером в Валенсию. Машина чистая, водитель показал по дороге пару мест, где остановиться. Доехали быстрее, чем обещали.',
  },
  {
    name: 'Екатерина Л.', trip: 'ALC → Аликанте', rating: 5, date: 'Март 2026',
    bg: 'linear-gradient(135deg,#db2777,#9d174d)',
    text: 'Короткий трансфер до отеля в центре. Всё чётко: написала в WhatsApp, прислали данные водителя, утром он уже ждал. Рекомендую.',
  },
  {
    name: 'Сергей и Ольга', trip: 'ALC → Хавеа', rating: 5, date: 'Февраль 2026',
    bg: 'linear-gradient(135deg,#0891b2,#155e75)',
    text: 'Дорога в Хавеу неблизкая, но в комфортном авто пролетела незаметно. Цена фиксированная, никаких доплат за платную трассу.',
  },
  {
    name: 'Игорь П.', trip: 'ALC → Аликанте', rating: 5, date: 'Февраль 2026',
    bg: 'linear-gradient(135deg,#ea580c,#9a3412)',
    text: 'Прилетел поздно ночью, переживал что не встретят. Водитель уже стоял с табличкой. Оплата по факту, всё честно.',
  },
  {
    name: 'Наталья Р.', trip: 'ALC → Дения', rating: 5, date: 'Январь 2026',
    bg: 'linear-gradient(135deg,#9333ea,#6b21a8)',
    text: 'Заказывала трансфер для родителей. Им за 70, переживала за дорогу. Водитель помог с чемоданами, был очень вежлив. Спасибо большое!',
  },
];

// Aggregate rating shown in the summary band. Keep in sync with the JSON-LD
// AggregateRating in index.html if you change it.
export const REVIEW_STATS = {
  rating: 4.9,
  count: 127,
};

// Initials from a full name: "Анна Н." → "АН", "Сергей и Ольга" → "СО".
export const initialsOf = (name) =>
  (name || '')
    .replace(/[^\p{L}\s]/gu, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

// Deterministic avatar gradient from a name — so fetched reviews (which have
// no `bg`) still get a stable, varied colour.
const BG_PALETTE = [
  'linear-gradient(135deg,#c9a980,#7a5a3a)',
  'linear-gradient(135deg,#7c3aed,#4338ca)',
  'linear-gradient(135deg,#0ea5e9,#0369a1)',
  'linear-gradient(135deg,#16a34a,#15803d)',
  'linear-gradient(135deg,#db2777,#9d174d)',
  'linear-gradient(135deg,#ea580c,#9a3412)',
  'linear-gradient(135deg,#0891b2,#155e75)',
  'linear-gradient(135deg,#9333ea,#6b21a8)',
];
export const bgFor = (name) => {
  let h = 0;
  const s = String(name || '');
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return BG_PALETTE[h % BG_PALETTE.length];
};

// Google Sheets often stores the date cell as a real Date, so the backend can
// return a long timestamp ("Fri May 01 2026 02:00:00 GMT+0200 …"). Normalize
// any parseable date to a clean "Май 2026"; leave already-clean labels as-is.
function formatReviewDate(raw) {
  if (!raw) return '';
  const s = String(raw);
  const t = Date.parse(s);
  if (Number.isNaN(t)) return s; // e.g. seed labels like "Май 2026" (Cyrillic)
  const out = new Date(t).toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });
  return out.charAt(0).toUpperCase() + out.slice(1);
}

// Returns the reviews to render: seed reviews always, plus any approved ones
// fetched from the Google Sheet backend (newest first). Falls back silently
// to seed-only if the backend isn't configured or the fetch fails.
export function useReviews() {
  const [reviews, setReviews] = React.useState(REVIEWS);
  React.useEffect(() => {
    if (!REVIEWS_API) return;
    let alive = true;
    fetch(REVIEWS_API)
      .then((r) => r.json())
      .then((data) => {
        if (!alive || !Array.isArray(data) || !data.length) return;
        const fetched = data
          .filter((d) => d && d.name && d.text)
          .map((d) => ({
            name: String(d.name), trip: d.trip || '', text: String(d.text),
            rating: Number(d.rating) || 5, date: formatReviewDate(d.date),
          }));
        if (fetched.length) setReviews([...fetched, ...REVIEWS]);
      })
      .catch(() => {}); // keep seed reviews on any failure
    return () => { alive = false; };
  }, []);
  return reviews;
}
