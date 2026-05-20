import React from 'react'
import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import Reveal from './Reveal.jsx'
import { REVIEW_STATS, REVIEWS_API, initialsOf, bgFor, useReviews } from './Reviews.data.jsx'
// Отзывы page — rating summary, the full approved-reviews wall, and a
// moderated submission form. Submissions e-mail the owner (formsubmit.co);
// nothing posted here appears on the site until it's added to Reviews.data.jsx
// by hand. That's the anti-spam guarantee — the public wall is curated.

function ReviewsPage({ onNav }) {
  return (
    <>
      <PageHero
        eyebrow="⭐ Отзывы"
        title="Что говорят пассажиры"
        subtitle="Реальные отзывы туристов, которых мы встречали в аэропорту Аликанте. Оставьте свой — он появится после проверки." />

      <RatingSummary />
      <Reveal><ReviewsWall /></Reveal>
      <Reveal><ReviewForm /></Reveal>
      <CTABanner onNav={onNav} />
    </>
  );
}

/* ============ Rating summary band ============ */
function RatingSummary() {
  const wrap = { background: '#fff', padding: '48px 32px 8px' };
  const inner = { maxWidth: 880, margin: '0 auto' };
  const card = {
    display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28, alignItems: 'center',
    background: 'var(--t2-bg-2)', border: '1px solid var(--t2-line)', borderRadius: 20, padding: '28px 32px',
  };
  const big = { textAlign: 'center' };
  const bigNum = { fontFamily: "'Onest',sans-serif", fontWeight: 800, fontSize: 56, lineHeight: 1, color: 'var(--t2-ink)', fontVariantNumeric: 'tabular-nums' };
  const bigStars = { color: '#f59e0b', fontSize: 18, marginTop: 6, letterSpacing: 2 };
  const bigCount = { fontSize: 12, color: 'var(--t2-ink-3)', marginTop: 6 };
  const right = {};
  const rightTitle = { fontFamily: "'Onest',sans-serif", fontWeight: 700, fontSize: 18, color: 'var(--t2-ink)', margin: '0 0 8px' };
  const rightText = { fontSize: 14, lineHeight: 1.55, color: 'var(--t2-ink-3)', margin: 0 };

  return (
    <section style={wrap}>
      <div style={inner}>
        <div style={card} className="t2-rating-card">
          <div style={big}>
            <div style={bigNum}>{REVIEW_STATS.rating.toFixed(1)}</div>
            <div style={bigStars}>{'★'.repeat(5)}</div>
            <div style={bigCount}>{REVIEW_STATS.count}+ оценок</div>
          </div>
          <div style={right}>
            <h2 style={rightTitle}>Средняя оценка {REVIEW_STATS.rating} из 5</h2>
            <p style={rightText}>
              Мы растём на «сарафане» — поэтому каждая поездка важна. Все отзывы ниже
              оставили реальные клиенты. Спам мы не публикуем: новые отзывы проходят
              ручную проверку перед публикацией.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 560px) {
          .t2-rating-card { grid-template-columns: 1fr !important; text-align: center; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}

/* ============ Reviews wall ============ */
function ReviewsWall() {
  const reviews = useReviews();
  const wrap = { background: '#fff', padding: '32px 32px 72px' };
  const inner = { maxWidth: 1100, margin: '0 auto' };
  const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 18 };

  return (
    <section style={wrap}>
      <div style={inner}>
        <div style={grid}>
          {reviews.map((r, i) => <ReviewCard key={i} r={r} />)}
        </div>
      </div>
    </section>
  );
}

export function ReviewCard({ r }) {
  const card = {
    background: 'var(--t2-bg-2)', border: '1px solid var(--t2-line)', borderRadius: 20,
    padding: '24px 26px', position: 'relative', display: 'flex', flexDirection: 'column', gap: 16,
  };
  const quoteMark = { position: 'absolute', top: 16, right: 22, fontFamily: 'Georgia, serif', fontSize: 56, lineHeight: .8, color: 'var(--t2-red-soft)', userSelect: 'none', pointerEvents: 'none' };
  const stars = { display: 'inline-flex', gap: 2, color: '#f59e0b', fontSize: 14 };
  const quote = { fontFamily: "'Inter',system-ui", fontSize: 15, lineHeight: 1.55, color: 'var(--t2-ink)', margin: 0, flex: 1 };
  const meta = { display: 'flex', alignItems: 'center', gap: 12, paddingTop: 14, borderTop: '1px solid var(--t2-line)' };
  const av = { width: 38, height: 38, borderRadius: '50%', background: r.bg || bgFor(r.name), color: '#fff', fontFamily: "'Onest',sans-serif", fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 };
  const metaName = { fontFamily: "'Onest',sans-serif", fontWeight: 700, fontSize: 14, color: 'var(--t2-ink)' };
  const metaTrip = { fontSize: 11, color: 'var(--t2-ink-3)', marginTop: 2, fontFamily: "'Inter',system-ui" };
  const tripBadge = { display: 'inline-flex', padding: '3px 9px', borderRadius: 999, background: 'var(--t2-red-soft)', color: 'var(--t2-red)', fontSize: 10, fontWeight: 700, letterSpacing: '.04em', marginLeft: 'auto', flexShrink: 0 };

  return (
    <article style={card}>
      <span style={quoteMark}>“</span>
      <div style={stars}>{'★'.repeat(r.rating || 5)}</div>
      <p style={quote}>{r.text}</p>
      <div style={meta}>
        <div style={av}>{initialsOf(r.name)}</div>
        <div>
          <div style={metaName}>{r.name}</div>
          <div style={metaTrip}>{r.trip}{r.date ? ` · ${r.date}` : ''}</div>
        </div>
        <span style={tripBadge}>ALC</span>
      </div>
    </article>
  );
}

/* ============ Moderated submission form ============ */
function ReviewForm() {
  const { useState } = React;
  const [form, setForm] = useState({ name: '', trip: '', rating: 5, text: '' });
  const [hp, setHp] = useState(''); // honeypot — bots fill it, humans don't
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const valid = form.name.trim().length >= 2 && form.text.trim().length >= 10;

  const wrap = { background: 'var(--t2-bg-2)', padding: '64px 32px' };
  const inner = { maxWidth: 720, margin: '0 auto' };
  const head = { textAlign: 'center', marginBottom: 28 };
  const eyebrow = { fontSize: 12, fontWeight: 700, color: 'var(--t2-red)', letterSpacing: '.12em', textTransform: 'uppercase' };
  const h2 = { fontFamily: "'Onest',sans-serif", fontWeight: 800, fontSize: 'clamp(24px, 3vw, 32px)', color: 'var(--t2-ink)', margin: '8px 0 6px', letterSpacing: '-.02em', lineHeight: 1.1 };
  const lede = { fontSize: 14, color: 'var(--t2-ink-3)', margin: 0 };

  const card = { background: '#fff', border: '1px solid var(--t2-line)', borderRadius: 20, padding: '28px 28px', boxShadow: 'var(--t2-sh-1)' };
  const label = { display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--t2-ink-3)', marginBottom: 7 };
  const field = { width: '100%', fontSize: 16, fontFamily: "'Inter',system-ui", padding: '12px 14px', borderRadius: 12, border: '1px solid var(--t2-line)', background: '#fff', color: 'var(--t2-ink)', outline: 'none', boxSizing: 'border-box' };
  const row = { display: 'flex', flexDirection: 'column', gap: 16 };
  const hint = { fontSize: 11, marginTop: 10, color: 'var(--t2-ink-3)', textAlign: 'center' };

  const starPick = { display: 'inline-flex', gap: 4 };
  const starBtn = (on) => ({ background: 'transparent', border: 0, cursor: 'pointer', fontSize: 28, lineHeight: 1, padding: 0, color: on ? '#f59e0b' : 'var(--t2-ink-5)' });

  const btn = (enabled) => ({
    width: '100%', padding: '15px', borderRadius: 14, marginTop: 4, border: 0,
    fontFamily: "'Inter',system-ui", fontWeight: 700, fontSize: 15,
    background: enabled ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'var(--t2-bg-2)',
    color: enabled ? '#fff' : 'var(--t2-ink-3)',
    boxShadow: enabled ? '0 14px 28px rgba(34,197,94,.30)' : 'none',
    cursor: enabled ? 'pointer' : 'not-allowed',
  });

  const submit = async (e) => {
    e.preventDefault();
    if (!valid || sending) return;
    if (hp) { setDone(true); return; } // silently swallow bots
    setSending(true);
    setError('');
    try {
      if (REVIEWS_API) {
        // Google Sheet backend: saved as pending (Approved=FALSE) + e-mails the
        // owner. text/plain avoids a CORS preflight against Apps Script.
        await fetch(REVIEWS_API, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ name: form.name, trip: form.trip, rating: form.rating, text: form.text }),
        });
      } else {
        // Fallback before the Sheet backend is configured: just e-mail it.
        const res = await fetch('https://formsubmit.co/ajax/transfers2eu@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `Новый отзыв на сайте: ${form.name} (${form.rating}★)`,
            _template: 'table',
            _captcha: 'false',
            Тип: 'ОТЗЫВ — на модерацию',
            Имя: form.name,
            Маршрут: form.trip || '—',
            Оценка: `${form.rating} / 5`,
            Отзыв: form.text,
          }),
        });
        if (!res.ok) throw new Error('bad status');
      }
      setDone(true);
    } catch (err) {
      setError('Не удалось отправить. Напишите отзыв нам в WhatsApp — мы добавим его вручную.');
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <section style={wrap}>
        <div style={inner}>
          <div style={{ ...card, textAlign: 'center', padding: '40px 28px' }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>🙏</div>
            <h2 style={{ fontFamily: "'Onest',sans-serif", fontWeight: 800, fontSize: 22, color: 'var(--t2-ink)', margin: '0 0 8px' }}>
              Спасибо за отзыв!
            </h2>
            <p style={{ fontSize: 14, color: 'var(--t2-ink-3)', margin: 0, lineHeight: 1.6 }}>
              Мы получили ваш отзыв и опубликуем его после короткой проверки.
              Это защищает страницу от спама — спасибо за понимание.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={wrap}>
      <div style={inner}>
        <div style={head}>
          <div style={eyebrow}>Оставить отзыв</div>
          <h2 style={h2}>Поделитесь впечатлением</h2>
          <p style={lede}>Расскажите о поездке — это помогает другим туристам. Отзыв публикуется после проверки.</p>
        </div>

        <form style={card} onSubmit={submit}>
          <div style={row}>
            <div>
              <label style={label}>Имя <span style={{ color: 'var(--t2-red)' }}>*</span></label>
              <input type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Например: Анна Н." autoComplete="name" style={field} />
            </div>
            <div>
              <label style={label}>Маршрут <span style={{ color: 'var(--t2-ink-3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(необязательно)</span></label>
              <input type="text" value={form.trip} onChange={e => set('trip', e.target.value)} placeholder="Например: ALC → Бенидорм" style={field} />
            </div>
            <div>
              <label style={label}>Оценка</label>
              <div style={starPick} role="radiogroup" aria-label="Оценка от 1 до 5">
                {[1, 2, 3, 4, 5].map(n => (
                  <button key={n} type="button" onClick={() => set('rating', n)}
                    aria-label={`${n} из 5`} aria-checked={form.rating === n} role="radio"
                    style={starBtn(n <= form.rating)}>★</button>
                ))}
              </div>
            </div>
            <div>
              <label style={label}>Ваш отзыв <span style={{ color: 'var(--t2-red)' }}>*</span></label>
              <textarea value={form.text} onChange={e => set('text', e.target.value)}
                placeholder="Как прошла поездка? Что понравилось?" rows={4}
                style={{ ...field, resize: 'none', lineHeight: 1.6 }} />
            </div>
          </div>

          {/* Honeypot — visually hidden, off-screen. Real users never fill it. */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
            <label>Не заполняйте это поле
              <input type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={e => setHp(e.target.value)} />
            </label>
          </div>

          <button type="submit" disabled={!valid || sending} style={btn(valid && !sending)}>
            {sending ? 'Отправляем…' : 'Отправить отзыв'}
          </button>
          {error && <p style={{ ...hint, color: 'var(--t2-danger)' }}>{error}</p>}
          <p style={hint}>Отзыв появится на сайте после ручной проверки модератором.</p>
        </form>
      </div>
    </section>
  );
}

export default ReviewsPage;
