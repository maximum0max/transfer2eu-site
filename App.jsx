import React, { useState, useEffect, lazy, Suspense } from 'react'
import { findRoute } from './BrandData.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Hero from './Hero.jsx'
import PopularRoutes from './PopularRoutes.jsx'
import WhyUs from './WhyUs.jsx'
import HowItWorks from './HowItWorks.jsx'
import Testimonial from './Testimonial.jsx'
import FAQ from './FAQ.jsx'
import CTABanner from './CTABanner.jsx'
import HomeBookingSection from './HomeBookingSection.jsx'
import Reveal from './Reveal.jsx'

// Sub-pages aren't needed for the first paint of the home view — split
// them into separate chunks so they download on-navigation, not upfront.
const RoutesPage   = lazy(() => import('./Routes.jsx'));
const PricesPage   = lazy(() => import('./Prices.jsx'));
const ContactsPage = lazy(() => import('./Contacts.jsx'));
const DriversPage  = lazy(() => import('./Drivers.jsx'));
const RoutePage    = lazy(() => import('./RoutePage.jsx'));
const ReviewsPage  = lazy(() => import('./Reviews.jsx'));
const NewsList     = lazy(() => import('./NewsList.jsx'));
const NewsPost     = lazy(() => import('./NewsPost.jsx'));
// Secret guest-registration form — reachable ONLY at /#registro. Not linked
// in any nav. Hash routing means crawlers never see it as a separate page.
const GuestRegistration = lazy(() => import('./GuestRegistration.jsx'));

const SECRET_GUEST_HASH = 'registro';
function readSecretView() {
  if (typeof window === 'undefined') return null;
  const h = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  return h === SECRET_GUEST_HASH ? 'registro' : null;
}

// Per-view document.title — improves UX and is read by crawlers. Kept concise
// (~60 chars) with the brand suffix.
const TITLES = {
  'home':      'Трансфер из аэропорта Аликанте от 30€ — Transfer2EU',
  'routes':    'Маршруты трансфера из Аликанте — 40+ городов | Transfer2EU',
  'price':     'Цены на трансфер из аэропорта Аликанте — от 30€ | Transfer2EU',
  'contacts':  'Контакты Transfer2EU — заказ трансфера в WhatsApp 24/7',
  'drivers':   'Работа водителем трансфера в Аликанте — вакансия | Transfer2EU',
  'route':     'Трансфер Аликанте · Transfer2EU',
  'reviews':   'Отзывы о трансфере из Аликанте — 4.9★ | Transfer2EU',
  'registro':  'Регистрация гостя · Transfer2EU',
  'news':      'Гайды по Costa Blanca и трансферу из Аликанте | Transfer2EU',
  'news-post': 'Материал · Transfer2EU',
};

// Per-view meta description — kept in sync with <title> so crawlers that
// render JS pick up a relevant, compelling snippet (~150–160 chars) per view.
const DESCRIPTIONS = {
  'home':      'Частный трансфер из аэропорта Аликанте (ALC): Бенидорм 60€, Торревьеха 50€, Кальпе 80€, Валенсия 160€. Фиксированная цена за авто, русскоязычный водитель, встреча с табличкой, заказ в WhatsApp 24/7.',
  'routes':    'Трансфер из аэропорта Аликанте по 40+ городам Costa Blanca, Мурсии и Валенсии. Выберите направление — узнаете фиксированную цену за автомобиль сразу, без скрытых доплат.',
  'price':     'Сколько стоит трансфер из аэропорта Аликанте: фиксированная цена за авто (седан), без доплат за пробки и платные дороги. Бенидорм 60€, Кальпе 80€, Торревьеха 50€, Валенсия 160€.',
  'contacts':  'Закажите трансфер из аэропорта Аликанте: WhatsApp и телефон +34 651 011 911, e-mail. Бронирование 24/7, ответ за 15 минут, поддержка на русском.',
  'drivers':   'Работа водителем трансфера в Аликанте: стабильные заказы из аэропорта круглый год, прозрачные еженедельные выплаты, поддержка диспетчера. Заполните анкету онлайн.',
  'reviews':   'Реальные отзывы туристов о трансфере из аэропорта Аликанте — средняя оценка 4.9 из 5. Истории поездок по Costa Blanca и форма, чтобы оставить свой отзыв.',
  'news':      'Полезные гайды о трансфере, аэропорте Аликанте и отдыхе на Costa Blanca — советы и ответы на частые вопросы от Transfer2EU.',
};

// Update a <meta> tag's content in place (description / OG / Twitter).
function setMetaContent(selector, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute('content', value);
}

export default function App() {
  const [view, setView]           = useState(() => readSecretView() || 'home');
  const [routeSlug, setRouteSlug] = useState(null);
  const [postSlug, setPostSlug]   = useState(null);

  useEffect(() => {
    let title = TITLES[view] || TITLES.home;
    let desc = DESCRIPTIONS[view] || DESCRIPTIONS.home;
    if (view === 'route') {
      const r = findRoute(routeSlug);
      if (r) {
        title = `Трансфер Аликанте → ${r.ru} от ${r.price}€ · Transfer2EU`;
        desc = `Частный трансфер из аэропорта Аликанте (ALC) в ${r.ru} от ${r.price}€ за автомобиль — ${r.time} мин в пути. Русскоязычный водитель, фиксированная цена, встреча с табличкой.`;
      }
    }
    document.title = title;
    setMetaContent('meta[name="description"]', desc);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', desc);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', desc);
  }, [view, routeSlug]);

  // If the secret hash is pasted while the app is already open, switch to it.
  useEffect(() => {
    const onHash = () => { const v = readSecretView(); if (v) { setView(v); window.scrollTo(0, 0); } };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const onNav = (v) => {
    setView(v);
    // Drop the secret hash on normal navigation so a reload doesn't reopen it.
    if (window.location.hash) history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  };
  const onSelectRoute = (slug) => { setRouteSlug(slug); setView('route'); window.scrollTo(0, 0); };
  const onOpenPost    = (slug) => { setPostSlug(slug); setView('news-post'); window.scrollTo(0, 0); };

  // Secret guest-registration page is fully standalone — no header, footer or
  // nav, so guests can only fill the form, not browse the marketing site.
  if (view === 'registro') {
    return (
      <div data-screen-label="registro">
        <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--t2-bg-2)' }} />}>
          <GuestRegistration />
        </Suspense>
      </div>
    );
  }

  return (
    <div data-screen-label={view}>
      <Header view={view} onNav={onNav} />
      <main>
        {view === 'home' && (
          <>
            <Hero onBook={() => onNav('routes')} />
            <Reveal><PopularRoutes onSelectRoute={onSelectRoute} onNav={onNav} /></Reveal>
            <Reveal><WhyUs /></Reveal>
            <Reveal><HowItWorks /></Reveal>
            <Reveal><Testimonial onNav={onNav} /></Reveal>
            <Reveal><FAQ /></Reveal>
            <Reveal><HomeBookingSection /></Reveal>
            <Reveal><CTABanner onNav={onNav} /></Reveal>
          </>
        )}
        {view !== 'home' && (
          <Suspense fallback={<div style={{ minHeight: 480 }} />}>
            {view === 'routes'    && <RoutesPage   onNav={onNav} onSelectRoute={onSelectRoute} />}
            {view === 'price'     && <PricesPage   onNav={onNav} onSelectRoute={onSelectRoute} />}
            {view === 'contacts'  && <ContactsPage onNav={onNav} />}
            {view === 'drivers'   && <DriversPage  onNav={onNav} />}
            {view === 'route'     && <RoutePage slug={routeSlug} onNav={onNav} onSelectRoute={onSelectRoute} />}
            {view === 'reviews'   && <ReviewsPage onNav={onNav} />}
            {view === 'news'      && <NewsList onOpenPost={onOpenPost} onNav={onNav} />}
            {view === 'news-post' && <NewsPost slug={postSlug} onNav={onNav} />}
          </Suspense>
        )}
      </main>
      <Footer onNav={onNav} onSelectRoute={onSelectRoute} />
    </div>
  );
}
