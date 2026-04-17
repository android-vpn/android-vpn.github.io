const vpns = [
  {
    rank: 1, name: 'VPNTYPE', logoImg: 'vpntype-icon.png', logoClass: 'logo-vt', pinned: true,
    badge: 'Выбор редакции',
    staticTags: ['VLESS + Shadowsocks — обходит ТСПУ', '10 устройств · Безлимит · No-logs'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Работает в РФ','Высокая скорость','Без логов'],
    free: '5 дней за 1 ₽. Дальше — от 299 ₽/мес. Безлимитный трафик.',
    whyTitle: 'VLESS и Shadowsocks — обходит блокировки там, где другие не могут',
    whyText: 'Семь протоколов включая VLESS, VMESS, Shadowsocks и XRAY — именно они обходят глубокую инспекцию трафика (DPI) российских провайдеров. Где обычный WireGuard замедляется, VLESS работает стабильно. Проверено 72 часа на Samsung и Xiaomi в сетях МТС и Ростелеком.',
    pros: ['VLESS, VMESS, Shadowsocks, XRAY — обходят DPI и ТСПУ провайдеров РФ', '10 устройств по одному аккаунту: Android, iPhone, Windows, MacOS', 'Безлимитный трафик, шифрование AES-256, политика no-logs', 'Русскоязычный интерфейс и поддержка, оплата картой РФ'],
    cons: ['Нет постоянного бесплатного тарифа — только 5 дней за 1 ₽', 'Нет в Google Play — устанавливается через APK с официального сайта'],
    speed: 100, maxSpeed: 100,
    price: 'от 299 ₽/мес',
    review: '"Подключил VLESS — YouTube 4K и Telegram заработали сразу. До этого три других VPN не справлялись с Ростелекомом."',
    lifehack: 'Если WireGuard тормозит у вашего провайдера — переключитесь на VLESS или Shadowsocks в настройках VPNTYPE. Эти протоколы маскируют VPN-трафик под обычный HTTPS и обходят блокировки ТСПУ.',
    link: 'https://vk.cc/cUpjZq', ctaClass: 'cta-primary', ctaText: 'Попробовать за 1 ₽'
  },
  {
    rank: 2, name: 'AdGuard VPN', logoImg: 'adguard-icon.svg', logoClass: 'logo-ag', pinned: true,
    badge: null,
    staticTags: ['Блокировка рекламы YouTube', '3 ГБ/мес бесплатно на Android'],
    tags: ['Для YouTube','Для Telegram','Работает в РФ','Бесплатный'],
    free: '3 ГБ/мес бесплатно — около 3 часов YouTube в HD.',
    whyTitle: 'VPN + блокировка рекламы на Android',
    whyText: 'Единственный VPN в рейтинге, который одновременно убирает рекламу на YouTube. 92 Мбит/с — уверенный 1080p и 4K. Приложение на русском языке, работает в один клик. Проверен на Pixel 7 в сети Билайн.',
    pros: ['YouTube без рекламы — встроенный адблок работает на уровне DNS', '92 Мбит/с — уверенный 1080p и 4K на Android', 'Официальное приложение в Google Play', 'Русскоязычный интерфейс, понятный для новичков'],
    cons: ['3 ГБ/мес бесплатно — расходуется примерно за 3 часа YouTube в HD', 'No-logs политика не подтверждена независимым аудитом'],
    speed: 92, maxSpeed: 100,
    price: 'от 329 ₽/мес',
    review: '"Реклама на YouTube пропала полностью, VPN стабильный. Два в одном — отличное решение."',
    lifehack: 'На бесплатном тарифе переключите качество YouTube на 480p — трафик расходуется втрое медленнее, и 3 ГБ хватает на 9+ часов просмотра.',
    link: 'https://vk.cc/cUxOkm', ctaClass: 'cta-secondary', ctaText: 'Перейти к AdGuard VPN'
  },
  {
    rank: 3, name: 'HideMy.Name', logoImg: 'hidemyname-icon.svg', logoClass: 'logo-hn', pinned: true,
    badge: null,
    staticTags: ['В России с 2014 года — надёжно', '94 Мбит/с — 4K без буферизации'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Работает в РФ','Высокая скорость'],
    free: '1 день бесплатно. Дальше — от 330 ₽/мес.',
    whyTitle: 'Надёжный VPN для Android с 2014 года',
    whyText: 'Работает в России без перерывов более 10 лет. 94 Мбит/с — хватает для 4K YouTube и стабильных Telegram-звонков. Приложение есть в Google Play и в виде APK. Тестировал на OnePlus 11 в сети МТС.',
    pros: ['Работает в России стабильно с 2014 года — проверено временем', '94 Мбит/с — 4K YouTube без буферизации в час пик', '80+ стран серверов, есть Германия и Финляндия', 'Русскоязычная поддержка 24/7, отвечают быстро'],
    cons: ['Нет постоянного бесплатного тарифа — только 1 день бесплатного теста', 'No-logs политика не подтверждена внешним аудитом'],
    speed: 94, maxSpeed: 100,
    price: 'от 330 ₽/мес',
    review: '"Telegram и YouTube каждый день уже год — ни одного сбоя. Меняю сервер раз в несколько месяцев."',
    lifehack: 'Серверы в Нидерландах или Германии дают минимальный пинг из России — идеально для YouTube и онлайн-игр на Android.',
    link: 'https://vk.cc/cUxOxl', ctaClass: 'cta-tertiary', ctaText: 'Перейти к HideMy.Name'
  },
  {
    rank: 4, name: 'Proton VPN', logo: 'PV', logoClass: 'logo-pv', pinned: false,
    badge: null,
    staticTags: ['Безлимитный бесплатный впн', 'No-logs + аудит, Швейцария'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Без логов'],
    free: 'Безлимитный бесплатный тариф — без ограничений по трафику.',
    whyTitle: 'Лучший бесплатный VPN для Android с безлимитом',
    whyText: 'Единственный VPN с настоящим безлимитом на бесплатном тарифе. Открытый исходный код, аудит no-logs, швейцарская юрисдикция. Telegram работает отлично, YouTube в HD — с небольшой задержкой в час пик.',
    pros: ['Безлимитный трафик бесплатно — без ограничений', 'No-logs политика подтверждена независимым аудитом', 'Open-source — исходный код проверен сообществом', 'Официальное приложение в Google Play'],
    cons: ['На бесплатном тарифе — один сервер, в вечерние часы перегружен', 'Скорость ниже, чем у платных сервисов (~75 Мбит/с)', 'Дорогой платный тариф по меркам рынка'],
    speed: 75, maxSpeed: 100,
    price: 'от 6 €/мес (~600 ₽)',
    review: '"Telegram работает без нареканий. YouTube в 720p — нормально. Для 4K скорости иногда не хватает."',
    lifehack: 'Подключайтесь к Proton VPN утром или в первой половине дня — бесплатный сервер менее загружен, скорость заметно выше.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Proton VPN'
  },
  {
    rank: 5, name: 'Windscribe', logo: 'WS', logoClass: 'logo-ws', pinned: false,
    badge: null,
    staticTags: ['10 ГБ/мес бесплатно на Android', 'Kill switch + WireGuard'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Бесплатный','Без логов'],
    free: '10 ГБ/мес бесплатно (при регистрации по email).',
    whyTitle: 'Лучший бесплатный тариф по объёму трафика',
    whyText: '10 ГБ/мес — это около 10 часов YouTube в 720p или несколько недель работы в Telegram. WireGuard, kill switch, строгая no-logs политика. Хороший вариант для тех, кто смотрит YouTube несколько раз в неделю.',
    pros: ['10 ГБ/мес бесплатно — больше, чем у большинства конкурентов', 'Kill switch — разрывает интернет при отключении VPN', 'WireGuard на Android — быстро и экономно для батареи', 'No-logs политика с проверяемой историей'],
    cons: ['В России работает нестабильно — иногда нужно менять сервер', 'Приложение и поддержка только на английском языке', 'Бесплатный тариф: скорость в пиковые часы снижается'],
    speed: 85, maxSpeed: 100,
    price: 'от $5.75/мес (~540 ₽)',
    review: '"10 ГБ хватает на Telegram весь месяц плюс пару вечеров YouTube. Для регулярного просмотра нужен платный тариф."',
    lifehack: 'Подтвердите email при регистрации — получите 10 ГБ вместо базовых 2 ГБ. Без подтверждения лимит урезан в пять раз.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Windscribe'
  },
  {
    rank: 6, name: 'Psiphon', logo: 'PS', logoClass: 'logo-ps', pinned: false,
    badge: null,
    staticTags: ['Бесплатный впн без регистрации', 'Безлимитный — работает в России'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Без регистрации','Работает в РФ'],
    free: 'Полностью бесплатный, без ограничений по трафику.',
    whyTitle: 'Бесплатный VPN для Android без регистрации',
    whyText: 'Работает без аккаунта — скачал APK с официального сайта, запустил, готово. Скорость ~30 Мбит/с: достаточно для Telegram и YouTube в 480p. Популярен в России именно благодаря простоте старта.',
    pros: ['Без регистрации — скачал и сразу работает', 'Безлимитный трафик на Android', 'Официальный APK с проверяемого источника', 'Стабильно работает в России'],
    cons: ['~30 Мбит/с — YouTube только в SD/480p, для HD не хватит', 'Нет kill switch — при разрыве VPN трафик идёт напрямую', 'Нет политики no-logs — данные могут логироваться'],
    speed: 30, maxSpeed: 100,
    price: 'Бесплатно',
    review: '"Telegram работает нормально. YouTube в 480p смотрю без проблем. Для HD нужно что-то мощнее."',
    lifehack: 'В настройках Psiphon выберите протокол L2TP — в ряде регионов России он работает стабильнее режима по умолчанию.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Psiphon'
  },
  {
    rank: 7, name: 'NordVPN', logo: 'NV', logoClass: 'logo-nv', pinned: false,
    badge: null,
    staticTags: ['96 Мбит/с, 6 устройств сразу', 'Obfuscated серверы для РФ'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Высокая скорость','Без логов'],
    free: 'Нет. 30 дней — гарантия возврата денег.',
    whyTitle: '96 Мбит/с и Obfuscated серверы для России',
    whyText: 'Один из наиболее надёжных международных сервисов. 96 Мбит/с, 6 устройств по одной подписке, Double VPN, серверы с обфускацией для обхода ТСПУ. На Android требует ручного выбора Obfuscated-сервера для стабильной работы в РФ.',
    pros: ['96 Мбит/с — уверенный 4K на Android', 'No-logs подтверждён независимым аудитом PricewaterhouseCoopers', '6 устройств одновременно по одной подписке', 'Obfuscated серверы для обхода блокировок'],
    cons: ['Нет бесплатного тарифа или пробного периода', 'В России нестабилен без ручного выбора Obfuscated-сервера', 'Оплата картой РФ затруднена — нужна иностранная карта'],
    speed: 96, maxSpeed: 100,
    price: 'от $3.99/мес (~370 ₽)',
    review: '"YouTube 4K — идеально. В России иногда нужно переключить сервер, но в целом стабильно работает."',
    lifehack: 'В приложении NordVPN на Android выберите Obfuscated Servers в разделе Specialty Servers — они лучше обходят блокировки российских провайдеров.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к NordVPN'
  },
  {
    rank: 8, name: 'ExpressVPN', logo: 'EV', logoClass: 'logo-ev', pinned: false,
    badge: null,
    staticTags: ['98 Мбит/с — рекорд скорости', 'Lightway + split tunneling Android'],
    tags: ['Для YouTube','Для Telegram','Высокая скорость','Без логов'],
    free: 'Нет. 30 дней — гарантия возврата денег.',
    whyTitle: '98 Мбит/с — рекорд скорости в тесте',
    whyText: 'Самый быстрый результат в нашем тесте — 98 Мбит/с на Android. Протокол Lightway оптимизирован для мобильных сетей: быстро переподключается при смене сети. Split tunneling позволяет пустить через VPN только нужные приложения.',
    pros: ['98 Мбит/с — лучший результат скорости в тесте', 'Lightway: быстро переподключается при смене Wi-Fi ↔ 4G', 'Split tunneling на Android — VPN только для нужных приложений', '160+ стран серверов'],
    cons: ['Самый дорогой в рейтинге — оправдан только для частых поездок', 'Нет бесплатного тарифа', 'Оплата из РФ затруднена'],
    speed: 98, maxSpeed: 100,
    price: 'от $8.32/мес (~780 ₽)',
    review: '"Lightway переключается между Wi-Fi и 4G незаметно — VPN не прерывается. Для Android идеально, но дорого."',
    lifehack: 'Включите split tunneling в настройках ExpressVPN на Android — пустите через VPN только YouTube и Telegram, остальное пойдёт напрямую.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к ExpressVPN'
  },
  {
    rank: 9, name: 'Outline VPN', logo: 'OL', logoClass: 'logo-ol', pinned: false,
    badge: null,
    staticTags: ['Shadowsocks — обходит блокировки', 'Бесплатный open-source впн'],
    tags: ['Бесплатный','Для YouTube','Без логов'],
    free: 'Полностью бесплатный — нужен собственный VPS.',
    whyTitle: 'Бесплатно и без посредников — для технарей',
    whyText: 'Open-source VPN на базе Shadowsocks — никаких посредников между вами и сервером. Скорость зависит от вашего VPS, а не от загрузки чужих серверов. На Android устанавливается через Google Play. Требует базовых навыков работы с VPS.',
    pros: ['Полностью бесплатный при наличии VPS', 'Открытый код — исходники проверяемы', 'Shadowsocks хорошо обходит глубокую инспекцию трафика', 'Официальное приложение в Google Play'],
    cons: ['Нужен собственный VPS — от $5/мес на Oracle Cloud или DigitalOcean', 'Сложная первоначальная настройка — не для новичков', 'Нет встроенного kill switch'],
    speed: 80, maxSpeed: 100,
    price: 'Бесплатно (нужен VPS)',
    review: '"Настроил на бесплатном Oracle Cloud за час. YouTube 4K летит. Полный контроль — никаких сторонних серверов."',
    lifehack: 'Oracle Cloud предлагает бесплатный VPS навсегда (Always Free tier) — идеальная основа для Outline VPN без ежемесячных расходов.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Outline VPN'
  },
  {
    rank: 10, name: 'Lantern', logo: 'LA', logoClass: 'logo-la', pinned: false,
    badge: null,
    staticTags: ['Без регистрации — сразу работает', 'Бесплатный впн для андроид'],
    tags: ['Бесплатный','Без регистрации','Работает в РФ'],
    free: '500 МБ/мес бесплатно — только для срочного доступа.',
    whyTitle: 'Быстрый старт без аккаунта — аварийный вариант',
    whyText: 'Скачал APK, запустил — работает без регистрации. ~60 Мбит/с — достаточно для Telegram и короткого YouTube. 500 МБ/мес — это примерно 5 минут HD-видео или несколько часов Telegram. Подходит как аварийный вариант.',
    pros: ['Без регистрации — запускается сразу', '~60 Мбит/с — выше, чем у Psiphon', 'Работает в России', 'Простой минималистичный интерфейс'],
    cons: ['500 МБ/мес — катастрофически мало для регулярного YouTube', 'Нет приложения в Google Play — только APK', 'Нет политики no-logs'],
    speed: 60, maxSpeed: 100,
    price: 'от $3/мес (~280 ₽)',
    review: '"Открыл Telegram в экстренной ситуации — работает сразу. На постоянной основе 500 МБ не хватает."',
    lifehack: 'Используйте Lantern только как аварийный вариант при срочной нужде — 500 МБ уйдут за несколько минут YouTube, но для быстрого доступа к Telegram этого достаточно.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Lantern'
  }
];

function getRankBadge(rank) {
  if (rank === 1) return '<span class="card-rank-badge rank-gold">🥇 ТОП-1 · Выбор редакции</span>';
  if (rank === 2) return '<span class="card-rank-badge rank-silver">🥈 ТОП-2</span>';
  if (rank === 3) return '<span class="card-rank-badge rank-bronze">🥉 ТОП-3</span>';
  return `<span class="card-rank-badge rank-default">#${rank}</span>`;
}

function renderCard(vpn) {
  const speedPct = Math.round((vpn.speed / 100) * 100);
  const cardTags = vpn.staticTags.map(t => `<span class="card-tag card-tag-static">${t}</span>`).join('');
  const pros = vpn.pros.map(p => `<li>${p}</li>`).join('');
  const cons = vpn.cons.map(c => `<li>${c}</li>`).join('');

  const logoHtml = vpn.logoImg
    ? `<img src="${vpn.logoImg}" alt="${vpn.name}" class="card-logo-img">`
    : `<div class="card-logo ${vpn.logoClass}">${vpn.logo}</div>`;

  return `
  <div class="vpn-card rank-${vpn.rank}" data-tags='${JSON.stringify(vpn.tags)}' data-pinned="${vpn.pinned}">
    <div class="card-header">
      ${logoHtml}
      <div class="card-title-area">
        ${getRankBadge(vpn.rank)}
        <div class="card-name">${vpn.name}</div>
        <div class="card-tags-row">${cardTags}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="free-badge"><div class="free-badge-icon">🎁</div><div><span>Бесплатно / тест:</span> ${vpn.free}</div></div>
      <div class="why-block">
        <h4>${vpn.whyTitle}</h4>
        <p>${vpn.whyText}</p>
      </div>
      <div class="pros-cons">
        <div class="pros-cons-col pros-col">
          <h5>Плюсы</h5>
          <ul>${pros}</ul>
        </div>
        <div class="pros-cons-col cons-col">
          <h5>Минусы</h5>
          <ul>${cons}</ul>
        </div>
      </div>
      <div class="speed-price">
        <div class="metric">
          <div class="metric-label">Скорость</div>
          <div class="metric-value">${vpn.speed}</div>
          <div class="metric-unit">Мбит/с</div>
          <div class="speed-bar-wrap"><div class="speed-bar"><div class="speed-bar-fill" style="width:${speedPct}%"></div></div></div>
        </div>
        <div class="metric">
          <div class="metric-label">Цена</div>
          <div class="metric-value" style="font-size:14px;padding-top:4px">${vpn.price}</div>
        </div>
      </div>
      <div class="review-block">${vpn.review}</div>
      <div class="lifehack">
        <div class="lifehack-icon">💡</div>
        <div><div class="lifehack-label">Совет</div><p>${vpn.lifehack}</p></div>
      </div>
    </div>
    ${vpn.pinned ? `<div class="card-cta"><a href="${vpn.link}" class="cta-btn ${vpn.ctaClass}" target="_blank" rel="nofollow">${vpn.ctaText} →</a></div>` : ''}
  </div>`;
}

function renderGrid(activeTag) {
  const grid = document.getElementById('ratingGrid');
  const pinned = vpns.filter(v => v.pinned);
  const rest = vpns.filter(v => !v.pinned);

  const matchTag = (vpn) => {
    if (activeTag === 'all') return true;
    return vpn.tags.includes(activeTag);
  };

  const pinnedFiltered = pinned.filter(matchTag);
  const restFiltered = rest.filter(matchTag);

  let html = '';

  if (pinnedFiltered.length > 0) {
    html += `<div class="pinned-label">Выбор редакции — ТОП-3</div>`;
    html += `<div class="cards-grid" id="pinnedGrid">`;
    pinnedFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (restFiltered.length > 0) {
    html += `<div class="rest-label">Позиции 4–10</div>`;
    html += `<div class="cards-grid-two" id="restGrid">`;
    restFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (pinnedFiltered.length === 0 && restFiltered.length === 0) {
    html = `<div style="padding:32px;text-align:center;color:var(--text-muted);background:var(--card);border-radius:var(--radius)">По этому фильтру VPN не найдено</div>`;
  }

  grid.innerHTML = html;
}

renderGrid('all');

document.getElementById('filterTags').addEventListener('click', function(e) {
  const btn = e.target.closest('.filter-tag');
  if (!btn) return;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(btn.dataset.tag);
});

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

const burger = document.getElementById('headerBurger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    });
  });
}

const navSections = ['rating','table','methodology','faq','reviews']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
navSections.forEach(el => sectionObserver.observe(el));
