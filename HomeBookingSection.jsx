import React from 'react'
import BookingForm from './BookingForm.jsx'
// Bottom-of-home booking band — a second chance to book for visitors who
// scrolled past the Hero form without engaging. Mirrors the booking band on
// the Contacts page so the look is consistent across the site.
//
// Mobile: horizontal padding compresses in two steps (≤760 → 20px, ≤480
// → 14px) so the form card stays close to viewport edges on phones without
// the surrounding white band wasting screen width.

function HomeBookingSection() {
  const bookWrap = { background: '#fff', padding: '56px 32px' };
  const bookInner = { maxWidth: 880, margin: '0 auto' };
  const bookHead = { textAlign: 'center', marginBottom: 28 };
  const bookEyebrow = { fontSize: 12, fontWeight: 700, color: 'var(--t2-red)', letterSpacing: '.12em', textTransform: 'uppercase' };
  const bookH2 = { fontFamily: "'Onest',sans-serif", fontSize: 'clamp(24px, 5.2vw, 34px)', fontWeight: 800, color: 'var(--t2-ink)', margin: '8px 0 6px', letterSpacing: '-.02em', lineHeight: 1.15 };
  const bookLede = { fontSize: 15, lineHeight: 1.5, color: 'var(--t2-ink-3)', margin: 0 };

  return (
    <div style={bookWrap} className="t2-home-book">
      <div style={bookInner}>
        <div style={bookHead} className="t2-home-book-head">
          <div style={bookEyebrow}>📋 Быстрая заявка</div>
          <h2 style={bookH2}>Готовы забронировать поездку?</h2>
          <p style={bookLede}>Заполните форму — получите подтверждение в WhatsApp за 15 минут.</p>
        </div>
        <BookingForm />
      </div>

      <style>{`
        @media (max-width: 760px) {
          .t2-home-book { padding: 44px 20px !important; }
          .t2-home-book-head { margin-bottom: 22px !important; }
        }
        @media (max-width: 480px) {
          .t2-home-book { padding: 36px 14px !important; }
          .t2-home-book-head { margin-bottom: 18px !important; }
        }
      `}</style>
    </div>
  );
}

export default HomeBookingSection;
