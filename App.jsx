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

// Per-view document.title — improves UX and is read by some AI crawlers.
const TITLES = {
  'home':      'Трансфер из аэропорта Аликанте (ALC) от 30€ · Transfer2EU',
  'routes':    'Маршруты трансфера из Аликанте — 40+ направлений · Transfer2EU',
  'price':     'Цены на трансфер из аэропорта Аликанте · Transfer2EU',
  'contacts':  'Контакты Transfer2EU — WhatsApp, телефон, e-mail',
  'drivers':   'Водителям — присоединяйтесь к команде · Transfer2EU',
  'route':     'Трансфер Аликанте · Transfer2EU',
  'reviews':   'Отзывы пассажиров — Transfer2EU',
  'registro':  'Регистрация гостя · Transfer2EU',
  'news':      'Полезное — новости и гайды · Transfer2EU',
  'news-post': 'Материал · Transfer2EU',
};

// Per-view meta description — kept in sync with <title> so crawlers that
// render JS pick up a relevant snippet for each view.
const DESCRIPTIONS = {
  'home':      'Частный трансфер из аэропорта Аликанте (ALC) в Бенидорм 60€, Кальпе 80€, Торревьеху 50€, Валенсию 160€ и 40+ городов Costa Blanca. Фиксированная цена, русскоязычный водитель, встреча с табличкой, работаем 24/7.',
  'routes':    'Все направления трансфера из аэропорта Аликанте — 40+ городов Costa Blanca, Мурсии и Валенсии. Фиксированная цена за автомобиль, русскоязычный водитель, оплата по факту.',
  'price':     'Цены на трансфер из аэропорта Аликанте: Бенидорм 60€, Кальпе 80€, Торревьеха 50€, Валенсия 160€. Фиксированная стоимость за автомобиль (седан), без скрытых доплат.',
  'contacts':  'Контакты Transfer2EU: WhatsApp и телефон +34 651 011 911, e-mail. Ответ за 15 минут, бронирование 24/7, русскоязычная поддержка.',
  'drivers':   'Водителям: присоединяйтесь к Transfer2EU. Стабильный поток заказов из аэропорта Аликанте, прозрачные еженедельные выплаты, поддержка диспетчера.',
  'reviews':   'Отзывы пассажиров Transfer2EU — средняя оценка 4.9 из 5. Реальные истории туристов о трансфере из аэропорта Аликанте по Costa Blanca.',
  'news':      'Полезные материалы и гайды о трансфере и отдыхе на Costa Blanca от Transfer2EU.',
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
            {view === 'registro'  && <GuestRegistration onNav={onNav} />}
            {view === 'news'      && <NewsList onOpenPost={onOpenPost} onNav={onNav} />}
            {view === 'news-post' && <NewsPost slug={postSlug} onNav={onNav} />}
          </Suspense>
        )}
      </main>
      <Footer onNav={onNav} onSelectRoute={onSelectRoute} />
    </div>
  );
}
