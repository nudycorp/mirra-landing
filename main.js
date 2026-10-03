(function () {
  var DIR = 'assets/cases/';

  // type: real | demo. size: ширина в 12 колоночной сетке.
  // shots: [имя файла без расширения, подпись]. Расширение подбирается само: jpg, png, webp, jpeg.
  // flow: текстовый кейс без скриншотов.
  var CASES = [
    {
      n: '01', size: 'c-8', type: 'real', title: 'Sales CRM',
      sub: 'Мини CRM для отдела продаж',
      desc: 'Единая система для работы с лидами, клиентами, статусами и сделками.',
      pts: ['Dashboard', 'Список клиентов', 'Карточка клиента', 'Статусы сделок'],
      flow: [
        ['Лиды', 'Новые обращения собираются в одном месте'],
        ['Клиенты', 'У каждого клиента своя карточка с историей работы'],
        ['Сделки', 'Статусы показывают, на каком этапе каждая сделка']
      ],
      shots: []
    },
    {
      n: '02', size: 'c-4', type: 'real', title: 'Marketplace Analytics',
      sub: 'Автоматизированный мониторинг данных',
      desc: 'Система на Wildberries: автоматически собирает данные о товарах, хранит их в базе и сравнивает изменения показателей по дням.',
      pts: ['Товары', 'Графики', 'Динамика просмотров', 'Фильтры'],
      flow: [
        ['Сбор', 'Данные о товарах Wildberries поступают автоматически'],
        ['Хранение', 'Всё складывается в базу данных, история не теряется'],
        ['Сравнение', 'Показатели сопоставляются по дням: просмотры, динамика, изменения']
      ],
      shots: []
    },
    {
      n: '03', size: 'c-12', type: 'real', title: 'Telegram Monitoring',
      sub: 'Поиск владельцев и админов Telegram каналов',
      desc: 'Бот разбирает участников каналов и чатов, находит среди них администраторов и владельцев собственных Telegram каналов и показывает эти каналы.',
      pts: ['Участники каналов и чатов', 'Админы и владельцы', 'Их Telegram каналы'],
      shots: [
        ['telegram-monitoring-01', 'Процесс мониторинга'],
        ['telegram-monitoring-02', 'Результат работы']
      ]
    },
    {
      n: '04', size: 'c-7', type: 'demo', title: 'DETAILLY',
      sub: 'Лендинг для локального сервиса, нацеленный на заявки',
      desc: 'Детейлинг центр: понятный первый экран, линейка услуг с ценами и подбор услуги под автомобиль клиента.',
      pts: ['Первый экран', 'Услуги и цены', 'Подбор услуги', 'Запись'],
      shots: [
        ['detailly-01', 'Первый экран и описание кейса'],
        ['detailly-02', 'Услуги'],
        ['detailly-03', 'Подбор услуги']
      ]
    },
    {
      n: '05', size: 'c-5', type: 'demo', title: 'STOCKPULSE',
      sub: 'B2B дашборд мониторинга для онлайн торговли',
      desc: 'Дашборд для контроля ключевых показателей магазина: метрики, графики, таблица и фильтры.',
      pts: ['Dashboard', 'Графики', 'Таблица', 'Фильтры'],
      flow: [
        ['Показатели', 'Ключевые метрики магазина собраны на одном экране'],
        ['Динамика', 'Графики показывают, как показатели меняются по дням'],
        ['Контроль', 'Таблица и фильтры помогают быстро найти отклонения']
      ],
      shots: []
    },
    {
      n: '06', size: 'c-7', type: 'demo', title: 'HOMEFLOW',
      sub: 'Telegram бот и lead workflow для недвижимости',
      desc: 'Бот задаёт клиенту уточняющие вопросы, подбирает объекты из базы и передаёт заявку менеджеру. В кабинете видны сводка, лиды и объекты.',
      note: 'Demonstration case: концепт рабочего сценария. Живого бота на сайте нет, показан кабинет менеджера.',
      pts: ['Логика диалога', 'Сводка', 'Лиды', 'Объекты'],
      shots: [
        ['homeflow-01', 'Сводка и логика бота'],
        ['homeflow-02', 'Лиды из Telegram'],
        ['homeflow-03', 'База объектов']
      ]
    },
    {
      n: '07', size: 'c-5', type: 'demo', title: 'CLIENTDOCK',
      sub: 'Клиентский портал как быстрый B2B MVP',
      desc: 'Проекты, задачи, файлы и переписка в одном кабинете. Клиент видит только свои проекты.',
      pts: ['Проекты', 'Задачи', 'Файлы', 'Переписка'],
      shots: [
        ['clientdock-01', 'Список проектов'],
        ['clientdock-02', 'Проект: айдентика'],
        ['clientdock-03', 'Проект: сайт']
      ]
    }
  ];

  var grid = document.getElementById('casesGrid');
  var dlg = document.getElementById('lightbox');
  var dlgImg = dlg.querySelector('img');
  var dlgCap = dlg.querySelector('p');

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  grid.innerHTML = CASES.map(function (c) {
    var badge = c.type === 'real'
      ? '<span class="badge real">Real project</span>'
      : '<span class="badge demo">Demo case / Concept</span>';
    var shots = c.shots.map(function (s) {
      var alt = c.title + ', ' + s[1];
      return '<figure class="shot empty' + (s[2] ? ' ' + s[2] : '') + '" data-cap="' + esc(alt) + '">' +
        '<div class="ph"><b>' + esc(s[1]) + '</b><i>' + esc(s[0]) + '</i></div>' +
        '<img src="' + DIR + s[0] + '.jpg" data-base="' + s[0] + '" alt="' + esc(alt) + '" decoding="async"></figure>';
    }).join('');
    var visual = c.flow
      ? '<ol class="flow">' + c.flow.map(function (f, i) {
          return '<li><span>' + (i + 1) + '</span><div><b>' + esc(f[0]) + '</b><p>' + esc(f[1]) + '</p></div></li>';
        }).join('') + '</ol>'
      : '<div class="shots n' + c.shots.length + '">' + shots + '</div>';
    return '<article class="case ' + c.size + (c.flow ? ' text-case' : '') + '">' + visual +
      '<div class="case-head"><span class="c-num">' + c.n + '</span>' +
      '<div><h3 class="c-title">' + esc(c.title) + '</h3>' + badge + '</div></div>' +
      '<p class="c-desc"><b style="font-weight:500;color:var(--fg)">' + esc(c.sub) + '.</b> ' + esc(c.desc) + '</p>' +
      (c.note ? '<p class="c-note">' + esc(c.note) + '</p>' : '') +
      '<ul class="c-pts">' + c.pts.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
      '</article>';
  }).join('');

  // Placeholder -> реальный скриншот, когда файл найден
  grid.querySelectorAll('.shot').forEach(function (fig) {
    var img = fig.querySelector('img');
    var exts = ['jpg', 'png', 'webp', 'jpeg'], k = 0;
    function ok() { fig.classList.remove('empty'); fig.classList.add('loaded'); fig.tabIndex = 0; fig.setAttribute('role', 'button'); }
    if (img.complete && img.naturalWidth) ok();
    else img.addEventListener('load', ok);
    img.addEventListener('error', function () {
      k++;
      if (k < exts.length) img.src = DIR + img.dataset.base + '.' + exts[k];
      else fig.classList.add('empty');
    });
  });

  // Lightbox
  function open(fig) {
    if (!fig.classList.contains('loaded')) return;
    dlgImg.src = fig.querySelector('img').src;
    dlgImg.alt = fig.dataset.cap;
    dlgCap.textContent = fig.dataset.cap;
    dlg.showModal();
  }
  grid.addEventListener('click', function (e) { var f = e.target.closest('.shot'); if (f) open(f); });
  grid.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var f = e.target.closest('.shot'); if (f) { e.preventDefault(); open(f); }
  });
  dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.classList.contains('lb-close')) dlg.close(); });

  // Появление блоков при прокрутке (один раз, без дёрганья)
  document.documentElement.classList.add('js');
  var targets = document.querySelectorAll('.sec-title, .sec-note, .services li, .case, .steps li, .cta, .ftr');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      var sib = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty('--d', (el.matches('.services li, .steps li') ? sib * 80 : 0) + 'ms');
      io.observe(el);
    });
  }
})();
