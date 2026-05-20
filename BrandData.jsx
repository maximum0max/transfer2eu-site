// Single source of truth for routes, brand constants, and CTA message text.
// Pattern adopted from the alicante-transfers project (CLAUDE.md "Data Layer").
// Phone/email/wa intentionally kept to the existing transfer2eu numbers per
// site owner — do not swap to the alicante-transfers number.

export const BRAND = {
  name:      'Transfer2EU',
  domain:    'transfer2eu.com',
  phone:     '+34 651 011 911',
  phoneRaw:  '34651011911',
  tel:       '+34651011911',
  email:     'transfers2eu@gmail.com',
  wa:        'https://wa.me/34651011911',
  copy:      '© 2026 Transfer2EU',
};

export const TRUST = [
  { icon: '⭐', text: '5 лет на рынке' },
  { icon: '🚗', text: '3 000+ поездок' },
  { icon: '💬', text: 'Русскоязычный водитель' },
  { icon: '💳', text: 'Фиксированная цена' },
];

export const ROUTE_GROUPS = [
  {
    label: 'Близкие направления', emoji: '📍',
    routes: [
      { slug: 'taxi-aeroport-alicante',     city: 'Alicante',       ru: 'Аликанте',     price: 30, emoji: '🏙', time: 15 },
      { slug: 'gran-alacant',               city: 'Gran Alacant',   ru: 'Гран Алакант', price: 30, emoji: '🏖', time: 10 },
      { slug: 'san-juan-playa',             city: 'San Juan Playa', ru: 'Сан-Хуан',     price: 45, emoji: '🏖', time: 20 },
      { slug: 'santa-pola',                 city: 'Santa Pola',     ru: 'Санта-Пола',   price: 40, emoji: '⛵', time: 20 },
      { slug: 'la-marina',                  city: 'La Marina',      ru: 'Ла-Марина',    price: 35, emoji: '🌴', time: 25 },
      { slug: 'los-balcones',               city: 'Los Balcones',   ru: 'Лос-Балконес', price: 50, emoji: '🏡', time: 30 },
      { slug: 'el-campello',                city: 'El Campello',    ru: 'Эль-Кампельо', price: 45, emoji: '🌊', time: 30 },
    ],
  },
  {
    label: 'Коста-Бланка', emoji: '🌊',
    routes: [
      { slug: 'villajoyosa',                city: 'Villajoyosa', ru: 'Вильяхойоса', price: 50, emoji: '🌊', time: 40 },
      { slug: 'la-nucia',                   city: 'La Nucia',    ru: 'Ла-Нусия',    price: 45, emoji: '🏡', time: 45 },
      { slug: 'finestrat',                  city: 'Finestrat',   ru: 'Финестрат',   price: 60, emoji: '🏔', time: 45 },
      { slug: 'taksi-alikante-benidorm',    city: 'Benidorm',    ru: 'Бенидорм',    price: 60, emoji: '🏖', time: 50 },
      { slug: 'taksi-iz-alikante-v-kalpe',  city: 'Calpe',       ru: 'Кальпе',      price: 80, emoji: '⛰', time: 60 },
      { slug: 'albir',                      city: 'Albir',       ru: 'Альбир',      price: 65, emoji: '🌅', time: 60 },
      { slug: 'altea',                      city: 'Altea',       ru: 'Альтеа',      price: 65, emoji: '⛵', time: 65 },
    ],
  },
  {
    label: 'Южное побережье', emoji: '☀️',
    routes: [
      { slug: 'playa-flamenca',             city: 'Playa Flamenca', ru: 'Пляя-Фламенка', price: 50, emoji: '🏖', time: 40 },
      { slug: 'quesada',                    city: 'Quesada',        ru: 'Кесада',         price: 45, emoji: '🌿', time: 45 },
      { slug: 'guardamar',                  city: 'Guardamar',      ru: 'Гуардамар',      price: 45, emoji: '🌊', time: 35 },
      { slug: 'la-zenia',                   city: 'La Zenia',       ru: 'Ла-Сения',       price: 60, emoji: '🌴', time: 45 },
      { slug: 'punta-prima',                city: 'Punta Prima',    ru: 'Пунта-Прима',    price: 55, emoji: '🏖', time: 50 },
      { slug: 'transfer-alicante-torrevieja', city: 'Torrevieja',   ru: 'Торревьеха',     price: 50, emoji: '🦩', time: 55 },
      { slug: 'cabo-roig',                  city: 'Cabo Roig',      ru: 'Кабо-Ройг',      price: 60, emoji: '⛵', time: 50 },
      { slug: 'campoverde',                 city: 'Campoverde',     ru: 'Камповерде',     price: 65, emoji: '🌿', time: 55 },
    ],
  },
  {
    label: 'Мурсия и юг', emoji: '🌹',
    routes: [
      { slug: 'orihuela',                   city: 'Orihuela',              ru: 'Ориуэла',              price: 60,  emoji: '🏛', time: 50  },
      { slug: 'mil-palmeras',               city: 'Mil Palmeras',          ru: 'Миль-Пальмерас',       price: 60,  emoji: '🌴', time: 55  },
      { slug: 'pilar-de-la-horadada',       city: 'Pilar de la Horadada',  ru: 'Пилар-де-ла-Орадада',  price: 70,  emoji: '🌊', time: 60  },
      { slug: 'san-pedro',                  city: 'San Pedro del Pinatar', ru: 'Сан-Педро',            price: 70,  emoji: '⛵', time: 70  },
      { slug: 'taxi-alicante-murcia',       city: 'Murcia',                ru: 'Мурсия',                price: 75,  emoji: '🌹', time: 75  },
      { slug: 'san-javier',                 city: 'San Javier',            ru: 'Сан-Хавьер',            price: 75,  emoji: '✈',  time: 75  },
      { slug: 'los-alcazares',              city: 'Los Alcazares',         ru: 'Лос-Алькасарес',        price: 90,  emoji: '🌊', time: 85  },
      { slug: 'cartagena',                  city: 'Cartagena',             ru: 'Картахена',             price: 120, emoji: '⚓', time: 95  },
      { slug: 'taksi-alikante-la-manga',    city: 'La Manga',              ru: 'Ла-Манга',              price: 135, emoji: '🌴', time: 110 },
    ],
  },
  {
    label: 'Север', emoji: '🏔',
    routes: [
      { slug: 'alcoy',                      city: 'Alcoy',   ru: 'Алькой',  price: 65,  emoji: '🏔', time: 55  },
      { slug: 'moraira',                    city: 'Moraira', ru: 'Морайра', price: 90,  emoji: '⛰',  time: 75  },
      { slug: 'denia',                      city: 'Denia',   ru: 'Дения',   price: 95,  emoji: '⛵', time: 85  },
      { slug: 'javea',                      city: 'Javea',   ru: 'Хавеа',   price: 90,  emoji: '🌊', time: 90  },
      { slug: 'oliva',                      city: 'Oliva',   ru: 'Олива',   price: 95,  emoji: '🌿', time: 95  },
      { slug: 'gandia',                     city: 'Gandia',  ru: 'Гандия',  price: 115, emoji: '🏖', time: 105 },
    ],
  },
  {
    label: 'Крупные города', emoji: '🏙',
    routes: [
      { slug: 'taxi-alicante-valencia',     city: 'Valencia',  ru: 'Валенсия',  price: 160, emoji: '🏛', time: 90  },
      { slug: 'madrid',                     city: 'Madrid',    ru: 'Мадрид',    price: 320, emoji: '👑', time: 240 },
      { slug: 'barcelona',                  city: 'Barcelona', ru: 'Барселона', price: 350, emoji: '🎨', time: 300 },
      { slug: 'malaga',                     city: 'Malaga',    ru: 'Малага',    price: 350, emoji: '☀️', time: 290 },
    ],
  },
];

export const ALL_ROUTES = ROUTE_GROUPS.flatMap(g => g.routes);

// Wikimedia Commons thumbnails, served straight from Wikimedia's CDN — no
// third-party proxy (we tried images.weserv.nl but it rate-limits hard and
// proved unreliable). Wikimedia rewrites originals to /thumb/.../NNNpx-FILE,
// but since 2024 only a fixed set of widths is allowed — an arbitrary width
// returns HTTP 400. These four are confirmed-valid across all our images:
const WIKI_WIDTHS = [250, 960, 1280, 1920];
const snapWidth = (w) => WIKI_WIDTHS.find((a) => a >= w) || WIKI_WIDTHS[WIKI_WIDTHS.length - 1];

export function wikiThumb(url, width = 960) {
  if (!url || !url.includes('/wikipedia/commons/') || url.includes('/thumb/')) return url;
  const marker = '/wikipedia/commons/';
  const i = url.indexOf(marker);
  const rest = url.slice(i + marker.length);           // e.g. "c/c5/Murcia_Cathedral.jpg"
  const file = rest.slice(rest.lastIndexOf('/') + 1);  // e.g. "Murcia_Cathedral.jpg"
  const w = snapWidth(width);
  return `${url.slice(0, i)}${marker}thumb/${rest}/${w}px-${file}`;
}
// srcset for in-grid / card / teaser images (960 covers mobile + ~2x retina;
// 1280 keeps it crisp on larger cards).
export function wikiSrcset(url) {
  return [960, 1280].map((w) => `${wikiThumb(url, w)} ${w}w`).join(', ');
}
// Wider srcset for full-bleed hero banners (large + retina screens).
export function wikiSrcsetWide(url) {
  return [1280, 1920].map((w) => `${wikiThumb(url, w)} ${w}w`).join(', ');
}

// Image + gradient fallback per destination — used by PopularRoutes cards
// and route hero banners. The gradient renders behind the <img> so the card
// still looks intentional if the photo 404s.
//
// All URLs are verified against Wikimedia Commons (or substituted from the
// Wikipedia REST summary API). Images are served via `wikiThumb()` which
// proxies through images.weserv.nl for on-the-fly resize + WebP encoding —
// Wikimedia rejects arbitrary thumbnail widths (HTTP 400) so we can't hit
// /thumb/ directly. Cities without a verified URL render the fallback emoji
// card in DestinationTeaser — looks intentional, not "empty".
export const ROUTE_IMAGES = {
  // — Popular cards on the home grid —
  'taksi-alikante-benidorm':       { img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Benidorm-pano-160410.jpg',                                                alt: 'Панорама Бенидорма с моря',                   gradient: 'linear-gradient(135deg,#0ea5e9 0%,#0369a1 60%,#0c4a6e 100%)' },
  'transfer-alicante-torrevieja':  { img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Salinas_Lagune_Rose_de_Torrevieja.jpg',                                  alt: 'Розовое солёное озеро Торревьехи',            gradient: 'linear-gradient(135deg,#fb7185 0%,#e11d48 60%,#9f1239 100%)' },
  'taksi-iz-alikante-v-kalpe':     { img: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/View_on_Pe%C3%B1on_de_Ifach%2C_Calpe_beach.jpg',                         alt: 'Скала Пеньон-де-Ифач и пляж Кальпе',          gradient: 'linear-gradient(135deg,#64748b 0%,#1e3a8a 60%,#0c4a6e 100%)' },
  'denia':                         { img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Castillo_de_Denia.jpg',                                                   alt: 'Замок Дении на холме над городом',            gradient: 'linear-gradient(135deg,#fbbf24 0%,#d97706 60%,#92400e 100%)' },
  'taxi-alicante-murcia':          { img: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Murcia_Cathedral.jpg',                                                    alt: 'Барочный фасад кафедрального собора Мурсии',  gradient: 'linear-gradient(135deg,#f472b6 0%,#be185d 60%,#831843 100%)' },
  'taxi-alicante-valencia':        { img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Ciudad_de_las_Ciencias_y_las_Artes_de_Valencia.jpg',                      alt: 'Город искусств и наук в Валенсии',            gradient: 'linear-gradient(135deg,#7c3aed 0%,#4338ca 60%,#1e1b4b 100%)' },
  'taksi-alikante-la-manga':       { img: 'https://upload.wikimedia.org/wikipedia/commons/d/de/La_Manga_by_Mar_Menor_in_Spain-3.JPG',                                    alt: 'Песчаная коса Ла-Манга между двумя морями',   gradient: 'linear-gradient(135deg,#14b8a6 0%,#0d9488 60%,#134e4a 100%)' },
  'cartagena':                     { img: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Teatro_Romano_Cartagena_vista_panor%C3%A1mica.jpg',                       alt: 'Античный римский театр в Картахене',          gradient: 'linear-gradient(135deg,#a16207 0%,#854d0e 60%,#422006 100%)' },

  // — Close to airport —
  'taxi-aeroport-alicante':        { img: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Alicante%2C_Spain.jpg',                                                   alt: 'Панорама Аликанте с замка Санта-Барбара',     gradient: 'linear-gradient(135deg,#0ea5e9 0%,#0369a1 60%,#0c4a6e 100%)' },
  'san-juan-playa':                { img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Foto_san_juan_de_alicante.JPG',                                           alt: 'Пляж Сан-Хуан в Аликанте',                    gradient: 'linear-gradient(135deg,#38bdf8 0%,#0284c7 60%,#075985 100%)' },
  'santa-pola':                    { img: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Santa_Pola_Castillo-Fortaleza%28detalle%29.jpg',                          alt: 'Крепость-замок XVI века в Санта-Поле',        gradient: 'linear-gradient(135deg,#fbbf24 0%,#ea580c 60%,#9a3412 100%)' },
  'el-campello':                   { img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/El_Campello%2C_Alicante%2C_Spain_%28RLHPA150011%29.JPG',                  alt: 'Эль-Кампельо — приморский город',             gradient: 'linear-gradient(135deg,#06b6d4 0%,#0e7490 60%,#164e63 100%)' },

  // — Costa Blanca —
  'villajoyosa':                   { img: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Villajoyosa%2C_Espa%C3%B1a%2C_2014-07-03%2C_DD_35.JPG',                   alt: 'Разноцветные дома Вильяхойосы у моря',        gradient: 'linear-gradient(135deg,#f97316 0%,#c2410c 60%,#7c2d12 100%)' },
  'finestrat':                     { img: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Vista_de_Finestrat_des_del_Puig_Campana.jpg',                             alt: 'Деревня Финестрат у горы Пуч-Кампана',        gradient: 'linear-gradient(135deg,#84cc16 0%,#4d7c0f 60%,#365314 100%)' },
  'altea':                         { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Altea_costa.JPG',                                                         alt: 'Бело-синяя церковь Альтеи на холме',          gradient: 'linear-gradient(135deg,#22d3ee 0%,#0e7490 60%,#155e75 100%)' },

  // — South coast (extra) —
  'guardamar':                     { img: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Ayuntamiento_de_Guardamar_del_Segura.jpg',                                alt: 'Гуардамар-дель-Сегура — ратуша',              gradient: 'linear-gradient(135deg,#facc15 0%,#ca8a04 60%,#713f12 100%)' },

  // — Murcia region —
  'orihuela':                      { img: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Conjunto_hist%C3%B3rico_de_Orihuela.jpg',                                 alt: 'Исторический центр Ориуэлы',                  gradient: 'linear-gradient(135deg,#fbbf24 0%,#b45309 60%,#451a03 100%)' },

  // — North coast —
  'alcoy':                         { img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Alcoi.jpg',                                                                alt: 'Алькой в горной долине',                      gradient: 'linear-gradient(135deg,#84cc16 0%,#4d7c0f 60%,#1a2e05 100%)' },
  'moraira':                       { img: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Moraira1.jpg',                                                             alt: 'Бухта Морайры с видом на Средиземное море',   gradient: 'linear-gradient(135deg,#22d3ee 0%,#0e7490 60%,#164e63 100%)' },
  'javea':                         { img: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/J%C3%A1vea_desde_el_Montg%C3%B3.jpg',                                     alt: 'Хавеа с горы Монго',                          gradient: 'linear-gradient(135deg,#06b6d4 0%,#0891b2 60%,#155e75 100%)' },
  'gandia':                        { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Gandia%2C_pla%C3%A7a_del_Prat.JPG',                                       alt: 'Гандия — площадь Прат',                       gradient: 'linear-gradient(135deg,#0ea5e9 0%,#0284c7 60%,#0c4a6e 100%)' },
};

// Featured 6 routes on the home grid (alicante-transfers `popular` list).
export const POPULAR = ['Benidorm', 'Torrevieja', 'Calpe', 'Denia', 'Murcia', 'Valencia', 'La Manga', 'Cartagena']
  .map(name => {
    const r = ALL_ROUTES.find(x => x.city === name);
    if (!r) return null;
    const meta = ROUTE_IMAGES[r.slug];
    return meta ? { ...r, img: meta.img, alt: meta.alt, gradient: meta.gradient } : r;
  })
  .filter(Boolean);

// Rich per-city SEO content. Keyed by the city's Russian name (matches r.ru).
// `intro` is a 1-2 sentence summary; `body` is a longer SEO paragraph that
// targets common search phrases ("трансфер аэропорт Аликанте Бенидорм",
// "сколько ехать", "что посмотреть"). `highlights` feeds the bullet list.
export const CITY_INFO = {
  'Аликанте': {
    intro: 'Столица провинции Costa Blanca — Аликанте — расположена в 12 км от аэропорта ALC. Город с тёплой набережной Эспланада, замком Санта-Барбара и старым кварталом Санта-Крус.',
    body: 'Аликанте — главный туристический и транспортный узел юго-востока Испании. Из аэропорта Эль-Альтет (ALC) до центра города всего 12 км, дорога занимает 15–20 минут даже в час пик. Большинство отелей расположены вдоль набережной Postiguet и Эспланада-де-Эспанья — фиксированная цена трансфера за автомобиль одинаково покрывает все районы города.',
    highlights: [
      { icon: '🏰', title: 'Замок Санта-Барбара',  text: 'Главная крепость X века с панорамой на всё побережье.' },
      { icon: '🏖', title: 'Пляж Постигет',        text: 'Городской пляж с золотым песком в шаге от центра.' },
      { icon: '🌴', title: 'Эспланада-де-Эспанья', text: 'Знаменитая мозаичная набережная с пальмами.' },
      { icon: '🍤', title: 'Кварталы тапас',       text: 'Бары и таверны в старом городе Санта-Крус.' },
    ],
  },
  'Гран Алакант': {
    intro: 'Жилой и курортный район в 12 минутах от аэропорта Аликанте. Тихие пляжи Карабасси, дюны и сосновые рощи в стороне от шумных туристических маршрутов.',
    body: 'Гран Алакант (Gran Alacant) — современный посёлок прямо рядом с аэропортом ALC. Идеальный выбор для тех, кто прилетает поздно или вылетает рано: трансфер занимает всего 10 минут. Здесь длинный песчаный пляж Карабасси, природный парк Кларес и удобное сообщение с Санта-Полой и Эльче.',
    highlights: [
      { icon: '🏖', title: 'Пляж Карабасси',   text: 'Полтора километра золотого песка и дюн.' },
      { icon: '🌲', title: 'Природный парк',   text: 'Сосновый лес Кларес для прогулок и велосипеда.' },
      { icon: '🛍', title: 'Торговый центр',   text: 'Gran Alacant Plaza — супермаркеты, рестораны.' },
    ],
  },
  'Сан-Хуан': {
    intro: 'Сан-Хуан-де-Аликанте — северный пригород с лучшим городским пляжем региона: 7 км белого песка и пологого входа в море.',
    body: 'San Juan Playa — это длинная курортная зона к северу от Аликанте. От аэропорта 20 минут на машине. Сюда едут за широким семейным пляжем, спокойным морем и развитой инфраструктурой: рестораны Mediterranea, променад и трамвай TRAM до центра Аликанте за 25 минут.',
    highlights: [
      { icon: '🏖', title: 'Пляж 7 км',     text: 'Самый длинный городской пляж провинции.' },
      { icon: '🚊', title: 'Трамвай TRAM',  text: 'Прямое сообщение с Аликанте и Бенидормом.' },
      { icon: '🥗', title: 'Mediterranea',  text: 'Кулинарный квартал с десятками ресторанов.' },
    ],
  },
  'Санта-Пола': {
    intro: 'Рыбацкий город в 20 минутах от ALC: средневековая крепость, маяк, лучшие морепродукты Costa Blanca и паромы на остров Табарка.',
    body: 'Санта-Пола (Santa Pola) — настоящая рыбацкая Испания в 18 км от аэропорта Аликанте. Каждый вечер в порту проходит «лонха» — публичный аукцион свежей рыбы. Отсюда отправляются паромы на остров Табарка, единственный обитаемый остров Валенсийского региона, объявленный морским заповедником.',
    highlights: [
      { icon: '🏰', title: 'Замок-крепость', text: 'Каменная цитадель XVI века в центре города.' },
      { icon: '⛵', title: 'Остров Табарка', text: 'Морской заповедник в 30 минутах на пароме.' },
      { icon: '🦞', title: 'Рыбный аукцион',text: 'Свежий улов на закате прямо в порту.' },
    ],
  },
  'Ла-Марина': {
    intro: 'Тихий курорт между Санта-Полой и Гуардамаром: длинный пляж, сосны, спокойный отдых для семей с детьми.',
    body: 'La Marina — посёлок с одним из самых чистых пляжей региона, отмеченным Голубым флагом. От аэропорта ALC ехать 25 минут. Сюда выбирают апартаменты те, кто хочет отдохнуть от толпы Бенидорма и Торревьехи.',
    highlights: [
      { icon: '🏖', title: 'Голубой флаг',  text: 'Чистый широкий пляж с пологим входом.' },
      { icon: '🌲', title: 'Сосновый бор',  text: 'Дюны и хвойный лес у самого пляжа.' },
    ],
  },
  'Лос-Балконес': {
    intro: 'Жилой район Торревьехи рядом с двумя солёными лагунами. Тихо, зелено, рядом гольф-клубы и крупные торговые центры.',
    body: 'Los Balcones — спальный район в 30 минутах от ALC. Локация ценится за близость к озёрам Ла-Мата и Торревьехи, гольф-полю Villamartín и торговому центру Zenia Boulevard.',
    highlights: [
      { icon: '⛳', title: 'Гольф Villamartín', text: 'Один из старейших гольф-клубов Costa Blanca.' },
      { icon: '🛍', title: 'Zenia Boulevard',  text: 'Крупнейший ТЦ региона — 150+ магазинов.' },
    ],
  },
  'Эль-Кампельо': {
    intro: 'Уютный приморский городок к северу от Аликанте с башней-маяком XVI века, рыбацким портом и тихими пляжами.',
    body: 'El Campello — это альтернатива шумному Сан-Хуану. От аэропорта 30 минут. Старая башня Иллета, набережная вдоль моря, рыбный рынок в порту и трамвай TRAM, который за 15 минут довезёт в центр Аликанте.',
    highlights: [
      { icon: '🗼', title: 'Башня Иллета',   text: 'Дозорная башня XVI века на скалистом мысу.' },
      { icon: '🐟', title: 'Рыбный порт',    text: 'Свежие морепродукты прямо из лодок.' },
      { icon: '🏖', title: 'Пляж Мучависта', text: 'Спокойный песчаный пляж с пальмами.' },
    ],
  },
  'Вильяхойоса': {
    intro: 'Город разноцветных домов и шоколадных фабрик. 40 минут от ALC, начало курортной зоны Бенидорма.',
    body: 'Vila Joiosa (Вильяхойоса) знаменита своими ярко раскрашенными фасадами на побережье — рыбаки красили дома, чтобы видеть их с моря. Здесь работает фабрика шоколада Valor с дегустационным музеем. До аэропорта Аликанте 47 км по платной трассе AP-7.',
    highlights: [
      { icon: '🏘', title: 'Цветные дома',    text: 'Главный фотосимвол Costa Blanca.' },
      { icon: '🍫', title: 'Музей Valor',     text: 'Шоколадная фабрика с дегустацией.' },
      { icon: '🏖', title: 'Пляж Сентро',     text: 'Городской пляж с тёмным вулканическим песком.' },
    ],
  },
  'Ла-Нусия': {
    intro: 'Тихий городок в горах над Бенидормом. Чистый воздух, спортивный центр Camilo Cano и панорамные виды.',
    body: 'La Nucia популярна у тех, кто живёт в Испании постоянно: тут спокойно, тихо и при этом 10 минут до пляжей Бенидорма. От ALC дорога займёт 50 минут. В городе огромный спортивный комплекс олимпийского уровня и воскресный сельский рынок.',
    highlights: [
      { icon: '🏟', title: 'Camilo Cano',      text: 'Спорткомплекс олимпийского масштаба.' },
      { icon: '🛒', title: 'Воскресный рынок', text: 'Самый большой open-air рынок региона.' },
    ],
  },
  'Финестрат': {
    intro: 'Средневековая деревня в тени горы Пуч-Кампана с белеными домами и панорамным видом на море.',
    body: 'Finestrat — посёлок-открытка над Бенидормом, на высоте 320 м. От ALC дорога 50 минут. Узкие улочки, церковь XVIII века, и сразу за деревней — выходные пляжи Cala Finestrat и большой ТЦ La Marina.',
    highlights: [
      { icon: '⛰', title: 'Пуч-Кампана',    text: 'Гора-символ Costa Blanca высотой 1406 м.' },
      { icon: '🏘', title: 'Старый центр',  text: 'Беленые домики на скале.' },
      { icon: '🏖', title: 'Cala Finestrat',text: 'Бухта между скал в 5 минутах от деревни.' },
    ],
  },
  'Бенидорм': {
    intro: 'Курортная столица Costa Blanca: небоскрёбы, два главных пляжа Леванте и Понъенте, парки развлечений и круглогодичная жизнь.',
    body: 'Бенидорм — самый известный курорт побережья. Расстояние от аэропорта Аликанте — 60 км по AP-7, дорога 50 минут. Город делится на две пляжные зоны: Levante (тусовка и небоскрёбы) и Poniente (тише, для семей). Рядом — Terra Mítica, Aqualandia, Mundomar и подводный заповедник Серра-Граделла.',
    highlights: [
      { icon: '🏖', title: 'Levante и Poniente', text: 'Два пляжа по 3 км с золотым песком.' },
      { icon: '🎢', title: 'Terra Mítica',       text: 'Тематический парк на 30 аттракционов.' },
      { icon: '🌃', title: 'Ночная жизнь',       text: 'Старый город — бары, тапас, live-музыка.' },
      { icon: '🐬', title: 'Mundomar',           text: 'Дельфинарий и контактный зоопарк.' },
    ],
  },
  'Кальпе': {
    intro: 'Кальпе известен скалой Пеньон-де-Ифач высотой 332 м, рыбным рынком и средиземноморскими бухтами для снорклинга.',
    body: 'Calpe находится в 80 км от ALC. Дорога 60 минут по AP-7. Главная достопримечательность — Пеньон-де-Ифач, торчащая из моря скала-заповедник. С её вершины открывается вид от Дении до Альтеи. В городе сохранились римские соляные ванны и средневековый рыбный квартал.',
    highlights: [
      { icon: '⛰',  title: "Penyal d'Ifac",   text: 'Скала-символ Средиземноморья, высота 332 м.' },
      { icon: '🐟', title: 'Рыбный рынок',     text: 'Самый аутентичный аукцион улова на побережье.' },
      { icon: '🛶', title: 'Снорклинг',        text: 'Прозрачная вода вокруг бухты Calalga.' },
      { icon: '🏛', title: 'Римские бани',     text: 'Археологические руины I века в центре.' },
    ],
  },
  'Альбир': {
    intro: 'Курортный посёлок-сад с галечной набережной и природным парком Сьерра-Эльда — лучшие закаты на побережье.',
    body: 'Albir — это «Беверли-Хиллс» Costa Blanca: широкая пешеходная улица Av. del Albir, шикарные виллы, парк Sierra Helada с маяком и тропа до точки обзора всего залива. 60 минут от ALC.',
    highlights: [
      { icon: '🗼', title: 'Маяк l\'Albir',  text: 'Тропа 2,5 км через природный парк.' },
      { icon: '🌳', title: 'Авенида-парк',  text: 'Главная пешеходная аллея с пальмами.' },
      { icon: '🌅', title: 'Точка заката',  text: 'Лучшие виды на залив Альтеи.' },
    ],
  },
  'Альтеа': {
    intro: 'Бело-синяя жемчужина побережья: куполами церкви Богоматери и узкими лестницами старого города.',
    body: 'Altea — один из самых живописных городков Costa Blanca, в 65 минутах от ALC. Старая часть на холме полностью побелена; над крышами поднимаются два сине-белых купола церкви Nuestra Señora del Consuelo. Внизу — галечная набережная, яхт-марина и арт-галереи.',
    highlights: [
      { icon: '⛪', title: 'Сине-белая церковь', text: 'Главный символ городка на холме.' },
      { icon: '🎨', title: 'Арт-квартал',       text: 'Студии художников и мастерские.' },
      { icon: '⛵', title: 'Яхт-марина',         text: 'Уютная гавань с ресторанами.' },
    ],
  },
  'Пляя-Фламенка': {
    intro: 'Курортный посёлок южнее Торревьехи с длинным пляжем La Mosca и бывшими «соляными» лагунами.',
    body: 'Playa Flamenca — застроенная вилами зона в 40 минутах от ALC. Здесь два пляжа с Голубым флагом, воскресный рынок «Zoco» и в 5 минутах — крупнейший ТЦ Zenia Boulevard.',
    highlights: [
      { icon: '🏖', title: 'La Mosca',        text: 'Длинный песчаный пляж с скалистыми бухтами.' },
      { icon: '🛒', title: 'Рынок Zoco',      text: 'Один из крупнейших рынков юга страны.' },
    ],
  },
  'Кесада': {
    intro: 'Сьюдад-Кесада — спокойный курортный район Рохалеса в зелени гольф-полей и рядом с природным парком La Mata.',
    body: 'Ciudad Quesada привлекает россиян и северных европейцев: тихо, безопасно, много апартаментов и вилл. До ALC ехать 45 минут. Рядом — солёное озеро La Mata с тропами и аквапарк.',
    highlights: [
      { icon: '🌿', title: 'Парк La Mata', text: 'Природный заповедник с фламинго.' },
      { icon: '⛳', title: 'Гольф',         text: 'La Marquesa Golf — 18 лунок.' },
      { icon: '🤿', title: 'Аквапарк',     text: 'Семейный комплекс с горками.' },
    ],
  },
  'Гуардамар': {
    intro: 'Тихий приморский город с лучшими пляжами Costa Blanca: 11 км белого песка и сосновые дюны.',
    body: 'Guardamar del Segura — это 11 километров пляжей с Голубым флагом и сосновым лесом, посаженным в XIX веке для остановки дюн. От ALC дорога 35 минут. В городе работают археологический парк с финикийскими руинами и крепость X века.',
    highlights: [
      { icon: '🏖', title: '11 км пляжа',     text: 'Длинная полоса белого песка и дюн.' },
      { icon: '🌲', title: 'Сосновый парк',   text: 'Тенистый маршрут вдоль всего побережья.' },
      { icon: '🏛', title: 'Финикийские руины',text: 'Археологический парк на холме.' },
    ],
  },
  'Ла-Сения': {
    intro: 'Курортный район Ориуэлы рядом с самым большим торговым центром региона Zenia Boulevard.',
    body: 'La Zenia — туристический посёлок южнее Торревьехи, в 45 минутах от ALC. Песчаный пляж La Zenia (Голубой флаг), рядом скалистые бухты Cala Capitán и Cala Cerrada. В 5 минутах — Zenia Boulevard с 150+ магазинами.',
    highlights: [
      { icon: '🛍', title: 'Zenia Boulevard',text: 'Главный шопинг-молл Costa Blanca.' },
      { icon: '🏖', title: 'Пляж La Zenia',   text: 'Семейный пляж с пологим входом.' },
      { icon: '🪨', title: 'Скалистые бухты', text: 'Прозрачная вода для снорклинга.' },
    ],
  },
  'Пунта-Прима': {
    intro: 'Курортная зона на южной оконечности Торревьехи: тихие бухты, прибрежная тропа и спокойный отдых.',
    body: 'Punta Prima — район Торревьехи с длинным променадом вдоль моря, который ведёт до самой La Zenia. 50 минут от ALC. Здесь меньше шума и больше зелени, чем в самом центре Торревьехи.',
    highlights: [
      { icon: '🚶', title: 'Прибрежная тропа',text: '4 км променада до La Zenia.' },
      { icon: '🏖', title: 'Пляж Punta Prima',text: 'Спокойный песчаный пляж.' },
    ],
  },
  'Торревьеха': {
    intro: 'Курортный город с двумя солёными озёрами (одно — розовое!) и 20 км пляжей с золотым песком.',
    body: 'Torrevieja — город солевых озёр и фламинго. От аэропорта ALC ехать 55 минут. Розовая лагуна Salinas — главная фотолокация Costa Blanca, цвет даёт микроводоросль Dunaliella salina. В городе работает большой воскресный рынок и аквапарк Aquopolis.',
    highlights: [
      { icon: '🦩', title: 'Розовое озеро',       text: 'Соляная лагуна с фламинго.' },
      { icon: '🏝', title: 'Длинная пляжная коса', text: 'Кесада, Ла-Мата, Ла-Сения в радиусе 15 минут.' },
      { icon: '🛒', title: 'Воскресный маркет',   text: 'Огромный рынок на 1000+ прилавков.' },
      { icon: '🤿', title: 'Aquopolis',           text: 'Аквапарк с большим бассейном.' },
    ],
  },
  'Кабо-Ройг': {
    intro: 'Скалистый мыс в Ориуэле с двумя «голубофлажными» бухтами и марина-портом.',
    body: 'Cabo Roig — престижный район Ориуэла-Коста, 50 минут от ALC. На небольшом мысу — старая башня XVI века, рестораны вдоль порта и кристально чистая вода в бухтах.',
    highlights: [
      { icon: '⛵', title: 'Марина',         text: 'Уютный яхт-порт с морепродуктами.' },
      { icon: '🏖', title: 'Cala Capitán',  text: 'Прозрачная бухта с лёгким входом.' },
      { icon: '🗼', title: 'Башня XVI века',text: 'Историческая дозорная башня.' },
    ],
  },
  'Камповерде': {
    intro: 'Тихий жилой район Пилар-де-ла-Орадада с гольф-клубами и прямым выходом к пляжам Мил-Пальмерас.',
    body: 'Campoverde — современный посёлок в 55 минутах от ALC. Спокойный отдых, гольф, рядом песчаные пляжи Mil Palmeras и Torre de la Horadada.',
    highlights: [
      { icon: '⛳', title: 'Гольф-клубы',   text: 'Два поля на 18 лунок поблизости.' },
      { icon: '🏖', title: 'Mil Palmeras', text: 'Длинный пляж в 10 минутах езды.' },
    ],
  },
  'Ориуэла': {
    intro: 'Историческая столица провинции с готическим собором, мавританскими стенами и архивом Мигеля Эрнандеса.',
    body: 'Orihuela — древний город в долине реки Сегура. От ALC 50 минут. Здесь сохранились готический кафедральный собор Сан-Сальвадор, монастырь Санто-Доминго и арабский квартал. Параллельно у города есть курортная зона Orihuela Costa с пляжами La Zenia и Cabo Roig.',
    highlights: [
      { icon: '⛪', title: 'Кафедральный собор',text: 'Готический шедевр XIV века.' },
      { icon: '🏛', title: 'Монастырь',         text: 'Santo Domingo — старейший университет региона.' },
      { icon: '🌴', title: 'Пальмовый сад',     text: 'Второй по величине в Европе после Эльче.' },
    ],
  },
  'Миль-Пальмерас': {
    intro: 'Курортный посёлок с километровым пляжем мелкого песка и сосновым променадом.',
    body: 'Mil Palmeras — самая южная курортная зона Аликанте, граница с Мурсией. От ALC 55 минут. Длинный песчаный пляж, набережная под пальмами, спокойный семейный отдых.',
    highlights: [
      { icon: '🌴', title: 'Пальмовая аллея', text: 'Тенистая набережная вдоль всего пляжа.' },
      { icon: '🏖', title: 'Мелкий песок',    text: 'Пляж с пологим входом, для детей.' },
    ],
  },
  'Пилар-де-ла-Орадада': {
    intro: 'Самый южный город провинции Аликанте: 4 пляжа с Голубым флагом и сосновые рощи у моря.',
    body: 'Pilar de la Horadada — граница между Costa Blanca и Costa Cálida, 60 минут от ALC. Город соединяет несколько курортных зон: Torre de la Horadada, Mil Palmeras, El Mojón и Las Higuericas.',
    highlights: [
      { icon: '🏖', title: '4 Голубых флага', text: 'Чистые пляжи в шаговой доступности.' },
      { icon: '🗼', title: 'Torre Horadada',  text: 'Сторожевая башня XIV века на скале.' },
    ],
  },
  'Сан-Педро': {
    intro: 'Сан-Педро-дель-Пинатар — ворота к Мар-Менор и грязевым лечебницам с природным заповедником.',
    body: 'San Pedro del Pinatar в Мурсии, 70 минут от ALC. Город знаменит природным парком Salinas y Arenales: солёные пруды с фламинго, целебные грязи, в которые туристы намазываются прямо на берегу.',
    highlights: [
      { icon: '🦩', title: 'Соляные пруды', text: 'Розовые лагуны с фламинго.' },
      { icon: '💆', title: 'Грязевые ванны',text: 'Бесплатные природные SPA.' },
      { icon: '⛵', title: 'Lo Pagán',       text: 'Набережная Мар-Менор и порт.' },
    ],
  },
  'Мурсия': {
    intro: 'Столица одноимённой области: барочный собор, тапас-бары и фруктовые сады Уэрта-де-Мурсия.',
    body: 'Мурсия — крупный город в 75 минутах от ALC по AP-7. Барочный кафедральный собор XVIII века, площадь Кардинала Бельюги, пешеходная улица Trapería. Регион — главный овощной поставщик Европы, поэтому гастрономия здесь на высоте.',
    highlights: [
      { icon: '⛪', title: 'Кафедральный собор',  text: 'Барокко XVIII века в самом центре.' },
      { icon: '🌹', title: 'Площадь Кардинала',   text: 'Главная площадь со старинными фасадами.' },
      { icon: '🍴', title: 'Гастрономия',         text: 'Овощи Региона + морепродукты — лучшее меню юга.' },
      { icon: '🛍', title: 'Calle Trapería',      text: 'Главная торговая пешеходная улица.' },
    ],
  },
  'Сан-Хавьер': {
    intro: 'Аэропортный город Мурсии у северной оконечности лагуны Мар-Менор и пляжей Ла-Манги.',
    body: 'San Javier — здесь расположен второй аэропорт региона (Murcia–San Javier). От ALC 75 минут. Рядом курортные зоны Santiago de la Ribera и Ла-Манга, лагуна Мар-Менор и водные виды спорта.',
    highlights: [
      { icon: '🌊', title: 'Мар-Менор',     text: 'Лагуна с мелкой тёплой водой круглый год.' },
      { icon: '⛵', title: 'Яхтенная школа',text: 'Лучшие условия для виндсёрфинга.' },
    ],
  },
  'Лос-Алькасарес': {
    intro: 'Курортный город на западном берегу Мар-Менор: мелкое тёплое море, набережная 7 км и римские бани.',
    body: 'Los Alcázares — самый «семейный» курорт Мар-Менор, 85 минут от ALC. Море тёплое уже в апреле и до ноября, глубина по пояс на 100+ метров от берега. Прогулочная зона вдоль воды тянется на 7 км.',
    highlights: [
      { icon: '🌊', title: 'Тёплое море', text: 'Купание с апреля по ноябрь.' },
      { icon: '🏛', title: 'Римские бани',text: 'Археологические руины I века.' },
      { icon: '🚶', title: 'Променад 7 км',text: 'Длинная пешеходная набережная.' },
    ],
  },
  'Картахена': {
    intro: 'Античный портовый город с римским театром, военной верфью и фестивалем «Карфагенцы и римляне».',
    body: 'Cartagena — один из старейших городов Испании. 95 минут от ALC. Здесь сохранился великолепный римский театр I века до н.э., модернистские здания начала XX века и действующая военно-морская база. Каждый сентябрь — масштабный фестиваль реконструкции пунических войн.',
    highlights: [
      { icon: '🏛', title: 'Римский театр',         text: 'Великолепно сохранившийся театр I в. до н.э.' },
      { icon: '⚓', title: 'Военный порт',          text: 'Главная база ВМС Испании на Средиземном море.' },
      { icon: '🏰', title: 'Замок Концепсьон',      text: 'Крепость на холме с панорамой города.' },
      { icon: '🎭', title: 'Карфагенцы и римляне',  text: 'Сентябрьский исторический фестиваль.' },
    ],
  },
  'Ла-Манга': {
    intro: 'Уникальная 22-км песчаная коса, разделяющая Мар-Менор и Средиземное море — пляжи с двух сторон в шаге друг от друга.',
    body: 'La Manga del Mar Menor — природный феномен, узкая полоска земли с двумя морями: с одной стороны лагуна Мар-Менор с тёплой водой и пляжем, с другой — открытое Средиземное море. 110 минут от ALC. Всё застроено отелями и апартаментами, идеально для пляжного отдыха.',
    highlights: [
      { icon: '🌊', title: 'Два моря',        text: 'Лагуна и Средиземное море в 50 м друг от друга.' },
      { icon: '⛵', title: 'Водные виды',     text: 'Лучшее место в Европе для виндсёрфинга и кайтинга.' },
      { icon: '🏖', title: '22 км пляжа',    text: 'Песчаная коса с пляжами по обе стороны.' },
    ],
  },
  'Алькой': {
    intro: 'Горный город в долине между трёх рек с модернистскими мостами и индустриальным наследием.',
    body: 'Alcoy (Alcoi) — город в горах, 55 минут от ALC. Известен фестивалем «Мавры и христиане» (с XVI века, ЮНЕСКО), модернистским мостом Pont de Sant Jordi и индустриальной архитектурой XIX века.',
    highlights: [
      { icon: '🌉', title: 'Pont de Sant Jordi', text: 'Модернистский мост-символ города.' },
      { icon: '⚔', title: 'Мавры и христиане',  text: 'Главный фестиваль реконструкции в стране.' },
      { icon: '🏞', title: 'Сьерра-Маригуэта',  text: 'Природный парк в окрестностях.' },
    ],
  },
  'Морайра': {
    intro: 'Элитный приморский посёлок с белоснежной архитектурой, средневековой крепостью и тихими бухтами.',
    body: 'Moraira — престижный курорт между Кальпе и Хавеей, 75 минут от ALC. Все здания не выше 4 этажей, белой штукатурки. Крепость XVIII века на пляже, винодельни и кристально чистая вода в бухтах.',
    highlights: [
      { icon: '🏰', title: 'Прибрежная крепость',text: 'Castell de Moraira XVIII века на песке.' },
      { icon: '🍷', title: 'Винодельни',         text: 'Местное вино Moscatel DO Alicante.' },
      { icon: '🏖', title: 'Cala l\'Ampolla',    text: 'Главный песчаный пляж посёлка.' },
    ],
  },
  'Дения': {
    intro: 'Портовый город у горы Монго с замком на скале и паромами на Балеарские острова.',
    body: 'Denia — самый северный город провинции Аликанте, 85 минут от ALC. Замок XII века на холме над городом, длинные пляжи Las Marinas (песок) и Las Rotas (галька + кораллы для снорклинга). Отсюда отправляются паромы на Ибицу, Майорку и Форментеру.',
    highlights: [
      { icon: '🏰', title: 'Замок XII века',    text: 'Главная достопримечательность над городом.' },
      { icon: '⛵', title: 'Марина и паромы',   text: 'Один из лучших яхт-портов на Costa Blanca, паромы на Балеары.' },
      { icon: '🌳', title: 'Парк Montgó',       text: 'Заповедник с панорамами на 360°.' },
      { icon: '🍴', title: 'Гастрономия',       text: 'Город ЮНЕСКО в области гастрономии.' },
    ],
  },
  'Хавеа': {
    intro: 'Курортный город между мысами Сан-Антонио и Ла-Нао: бирюзовые бухты, дайвинг и панорамные виды.',
    body: 'Jávea (Xàbia) — один из самых красивых городов побережья, 90 минут от ALC. Три отдельные зоны: старый город на холме, порт с рыбаками и пляж Arenal с туристической инфраструктурой. Бухты Granadella и Portitxol — лучшие места для дайвинга на Costa Blanca.',
    highlights: [
      { icon: '🪨', title: 'Cala Granadella',   text: 'Лучший пляж Испании по версии многих рейтингов.' },
      { icon: '🌅', title: 'Кабо-де-ла-Нао',     text: 'Маяк и обзорная точка над морем.' },
      { icon: '🤿', title: 'Дайвинг-сайты',      text: 'Подводные пещеры и кораллы.' },
    ],
  },
  'Олива': {
    intro: 'Тихий курорт с длиннейшими пляжами на побережье и историческим арабским кварталом в горах.',
    body: 'Oliva — город в провинции Валенсия, 95 минут от ALC. 12 километров пляжей с Голубым флагом и почти нет туристической застройки в первой линии. В историческом центре — арабский квартал Vila со старинными белёными домами.',
    highlights: [
      { icon: '🏖', title: '12 км пляжей',  text: 'Дикие и пустынные пляжи без отелей.' },
      { icon: '🏘', title: 'Арабский квартал',text: 'Старинный центр в горах.' },
    ],
  },
  'Гандия': {
    intro: 'Курортная столица Валенсии с длинным семейным пляжем, набережной и герцогским дворцом семьи Борджиа.',
    body: 'Gandia — главный курорт провинции Валенсия, 105 минут от ALC. Песчаный пляж 3 км с пологим входом, променад с пальмами, ночная жизнь летом. В историческом центре — Палау Дукаль, дворец герцогов Борджиа.',
    highlights: [
      { icon: '🏖', title: 'Пляж 3 км',     text: 'Семейный пляж с белым песком.' },
      { icon: '🏛', title: 'Palau Ducal',   text: 'Дворец герцогов Борджиа в центре.' },
      { icon: '🌃', title: 'Ночная жизнь',  text: 'Летом — главная тусовка побережья Валенсии.' },
    ],
  },
  'Валенсия': {
    intro: 'Третий по величине город Испании: родина паэльи, Город искусств и наук, превращённая в парк река Турия.',
    body: 'Valencia — третий город Испании, 90 минут от ALC по AP-7. Здесь родилась паэлья. Главные достопримечательности — футуристический комплекс Город искусств и наук (Calatrava), готический шёлковый рынок Lonja (ЮНЕСКО), старое русло реки Турия, превращённое в 9-километровый парк.',
    highlights: [
      { icon: '🏛', title: 'Город искусств и наук', text: 'Футуристический комплекс Калатравы.' },
      { icon: '🥘', title: 'Родина паэльи',         text: 'Лучшее блюдо Испании — здесь и сейчас.' },
      { icon: '🌳', title: 'Парк Турии',            text: 'Реку превратили в зелёный парк — 9 км пешком.' },
      { icon: '⛪', title: 'Кафедральный собор',    text: 'Чаша Святого Грааля — главная реликвия.' },
    ],
  },
  'Мадрид': {
    intro: 'Столица Испании с королевским дворцом, музеем Прадо и легендарной площадью Пласа-Майор.',
    body: 'Madrid — столица в 4 часах от ALC. Музей Прадо с шедеврами Веласкеса и Гойи, Королевский дворец, Пласа-Майор XVII века, кварталы тапас La Latina и Cava Baja, парк Ретиро. Трансфер на дальние расстояния — единственный способ доехать с большим багажом или с детьми без пересадок.',
    highlights: [
      { icon: '🖼', title: 'Музей Прадо',     text: 'Главная коллекция испанской живописи.' },
      { icon: '👑', title: 'Королевский дворец',text: 'Действующая резиденция королевской семьи.' },
      { icon: '🥘', title: 'Тапас La Latina', text: 'Лучшие тапас-бары столицы.' },
    ],
  },
  'Барселона': {
    intro: 'Город Гауди с Саграда-Фамилия, парком Гуэль и пляжем Барселонета прямо у центра.',
    body: 'Barcelona — 5 часов от ALC. Архитектура Гауди (Саграда-Фамилия, Парк Гуэль, Каса-Батльо), готический квартал, бульвар Рамбла, морской район Барселонета с пляжем. Дальний трансфер — комфортная альтернатива поезду с пересадками.',
    highlights: [
      { icon: '⛪', title: 'Саграда-Фамилия', text: 'Главный шедевр Гауди, до сих пор строится.' },
      { icon: '🌳', title: 'Парк Гуэль',     text: 'Сказочный парк с мозаичной саламандрой.' },
      { icon: '🏖', title: 'Барселонета',    text: 'Городской пляж в шаге от центра.' },
    ],
  },
  'Малага': {
    intro: 'Родина Пикассо и ворота Costa del Sol: кафедральный собор, римский театр и пляж Малагета.',
    body: 'Málaga — главный город Costa del Sol, около 5 часов от ALC. Кафедральный собор XVI века, римский театр у стен крепости Алькасаба, музей Пикассо, городской пляж Malagueta. Дальняя поездка по AP-7 / A-7 с одной остановкой на отдых.',
    highlights: [
      { icon: '⛪', title: 'Кафедральный собор', text: 'Незаконченный фасад — символ города.' },
      { icon: '🏛', title: 'Алькасаба',         text: 'Мавританская крепость в центре.' },
      { icon: '🎨', title: 'Музей Пикассо',     text: 'Родина художника, лучшая ретроспектива.' },
    ],
  },
};

export const findRoute = (slug) => {
  const r = ALL_ROUTES.find(x => x.slug === slug);
  if (!r) return null;
  const meta = ROUTE_IMAGES[r.slug];
  const info = CITY_INFO[r.ru];
  const out = meta ? { ...r, img: meta.img, alt: meta.alt, gradient: meta.gradient } : { ...r };
  if (info) out.info = info;
  return out;
};

export const waLink = (msg) =>
  BRAND.wa + '?text=' + encodeURIComponent(msg || 'Здравствуйте! Хочу заказать трансфер из аэропорта Аликанте.');

export const routeWaLink = (r) =>
  waLink(`Здравствуйте! Хочу заказать трансфер Аликанте → ${r.ru} за ${r.price}€`);
