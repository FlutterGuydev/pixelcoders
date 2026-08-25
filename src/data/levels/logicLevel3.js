// Code Sort: real HTML markup shown scrambled as draggable chips. The
// live preview renders whatever the *current* (possibly wrong) order
// produces, so cause-and-effect is visible while dragging, not just on
// submit. Correct order is auto-detected — there's no submit button.
// `lines` must already be written in the *correct* order (index 0 is the
// true first line); `scrambledOrder` is the shuffled starting arrangement
// and must never equal the identity order. `payoff` picks which dungeon
// flourish celebrates a solved round ('door' | 'torch' | anything else
// falls back to the hero sprite).
export const CODE_SORT_ROUNDS = [
  {
    filename: 'list.html',
    payoff: 'door',
    lines: {
      ru: ['<ul>', '  <li>Молоко</li>', '  <li>Хлеб</li>', '</ul>'],
      uz: ['<ul>', '  <li>Sut</li>', '  <li>Non</li>', '</ul>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'card.html',
    payoff: 'torch',
    lines: {
      ru: ['<div class="card">', '  <h3>Готово!</h3>', '  <p>Ты справился</p>', '  <button>Дальше</button>', '</div>'],
      uz: ['<div class="card">', '  <h3>Tayyor!</h3>', '  <p>Sen uddalading</p>', '  <button>Keyingisi</button>', '</div>'],
    },
    scrambledOrder: [3, 0, 4, 1, 2],
  },
  {
    filename: 'header.html',
    payoff: 'hero',
    lines: {
      ru: ['<header>', '  <nav>', '    <a href="/">Главная</a>', '    <a href="/about">О нас</a>', '  </nav>', '</header>'],
      uz: ['<header>', '  <nav>', '    <a href="/">Bosh sahifa</a>', '    <a href="/about">Biz haqimizda</a>', '  </nav>', '</header>'],
    },
    scrambledOrder: [5, 2, 0, 4, 1, 3],
  },
  {
    filename: 'profile.html',
    payoff: 'torch',
    lines: {
      ru: ['<div class="profile">', '  <img src="user.jpg" alt="Аватар">', '  <h3>Анна</h3>', '</div>'],
      uz: ['<div class="profile">', '  <img src="user.jpg" alt="Avatar">', '  <h3>Anora</h3>', '</div>'],
    },
    scrambledOrder: [3, 1, 0, 2],
  },
  {
    filename: 'alert.html',
    payoff: 'hero',
    lines: {
      ru: ['<div class="alert">', '  <strong>Внимание!</strong>', '  <p>Заполните все поля</p>', '</div>'],
      uz: ['<div class="alert">', '  <strong>Diqqat!</strong>', '  <p>Barcha maydonlarni to‘ldiring</p>', '</div>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'quote.html',
    payoff: 'door',
    lines: {
      ru: ['<blockquote>', '  <p>Код — это поэзия логики.</p>', '  <cite>— Аноним</cite>', '</blockquote>'],
      uz: ['<blockquote>', '  <p>Kod — bu mantiq she’riyati.</p>', '  <cite>— Muallif noma’lum</cite>', '</blockquote>'],
    },
    scrambledOrder: [1, 3, 0, 2],
  },
  {
    filename: 'breadcrumb.html',
    payoff: 'torch',
    lines: {
      ru: ['<nav class="breadcrumb">', '  <a href="/">Главная</a>', '  <span>/</span>', '  <a href="/blog">Блог</a>', '</nav>'],
      uz: ['<nav class="breadcrumb">', '  <a href="/">Bosh sahifa</a>', '  <span>/</span>', '  <a href="/blog">Blog</a>', '</nav>'],
    },
    scrambledOrder: [4, 1, 0, 3, 2],
  },
  {
    filename: 'gallery-item.html',
    payoff: 'hero',
    lines: {
      ru: ['<figure>', '  <img src="art.jpg" alt="Картина">', '  <figcaption>Автопортрет</figcaption>', '</figure>'],
      uz: ['<figure>', '  <img src="art.jpg" alt="Rasm">', '  <figcaption>Avtoportret</figcaption>', '</figure>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'definition.html',
    payoff: 'door',
    lines: {
      ru: ['<dl>', '  <dt>HTML</dt>', '  <dd>Язык разметки</dd>', '</dl>'],
      uz: ['<dl>', '  <dt>HTML</dt>', '  <dd>Belgilash tili</dd>', '</dl>'],
    },
    scrambledOrder: [3, 1, 0, 2],
  },
  {
    filename: 'pricing.html',
    payoff: 'torch',
    lines: {
      ru: [
        '<div class="price-card">',
        '  <h3>Базовый</h3>',
        '  <p class="price">$9</p>',
        '  <ul><li>10 ГБ места</li></ul>',
        '  <button>Купить</button>',
        '</div>',
      ],
      uz: [
        '<div class="price-card">',
        '  <h3>Boshlang‘ich</h3>',
        '  <p class="price">$9</p>',
        '  <ul><li>10 GB joy</li></ul>',
        '  <button>Sotib olish</button>',
        '</div>',
      ],
    },
    scrambledOrder: [5, 2, 0, 4, 1, 3],
  },
  {
    filename: 'testimonial.html',
    payoff: 'hero',
    lines: {
      ru: ['<div class="testimonial">', '  <p>Отличный курс!</p>', '  <span>— Дилноза</span>', '  <span class="stars">★★★★★</span>', '</div>'],
      uz: ['<div class="testimonial">', '  <p>Ajoyib kurs!</p>', '  <span>— Dilnoza</span>', '  <span class="stars">★★★★★</span>', '</div>'],
    },
    scrambledOrder: [4, 1, 3, 0, 2],
  },
  {
    filename: 'stats.html',
    payoff: 'door',
    lines: {
      ru: ['<div class="stats">', '  <strong>1200</strong>', '  <span>студентов</span>', '</div>'],
      uz: ['<div class="stats">', '  <strong>1200</strong>', '  <span>talaba</span>', '</div>'],
    },
    scrambledOrder: [3, 0, 2, 1],
  },
  {
    filename: 'cta.html',
    payoff: 'torch',
    lines: {
      ru: ['<section class="cta">', '  <h2>Готов начать?</h2>', '  <p>Присоединяйся сегодня</p>', '  <a href="/signup">Регистрация</a>', '</section>'],
      uz: ['<section class="cta">', '  <h2>Boshlashga tayyormisiz?</h2>', '  <p>Bugun qo‘shil</p>', '  <a href="/signup">Ro‘yxatdan o‘tish</a>', '</section>'],
    },
    scrambledOrder: [2, 4, 0, 3, 1],
  },
  {
    filename: 'media.html',
    payoff: 'hero',
    lines: {
      ru: ['<div class="media">', '  <img src="icon.png" alt="Icon">', '  <div class="media-body">', '    <p>Новое сообщение</p>', '  </div>', '</div>'],
      uz: ['<div class="media">', '  <img src="icon.png" alt="Icon">', '  <div class="media-body">', '    <p>Yangi xabar</p>', '  </div>', '</div>'],
    },
    scrambledOrder: [3, 0, 5, 1, 4, 2],
  },
  {
    filename: 'footer-links.html',
    payoff: 'door',
    lines: {
      ru: ['<footer>', '  <a href="/privacy">Конфиденциальность</a>', '  <a href="/terms">Условия</a>', '  <a href="/contact">Контакты</a>', '</footer>'],
      uz: ['<footer>', '  <a href="/privacy">Maxfiylik</a>', '  <a href="/terms">Shartlar</a>', '  <a href="/contact">Aloqa</a>', '</footer>'],
    },
    scrambledOrder: [4, 2, 0, 3, 1],
  },
  {
    filename: 'accordion.html',
    payoff: 'torch',
    lines: {
      ru: ['<details>', '  <summary>Часто задаваемые вопросы</summary>', '  <p>Ответ здесь</p>', '</details>'],
      uz: ['<details>', '  <summary>Tez-tez so‘raladigan savollar</summary>', '  <p>Javob shu yerda</p>', '</details>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'progress.html',
    payoff: 'hero',
    lines: {
      ru: ['<div class="progress-track">', '  <div class="progress-fill" style="width:60%"></div>', '  <span>60%</span>', '</div>'],
      uz: ['<div class="progress-track">', '  <div class="progress-fill" style="width:60%"></div>', '  <span>60%</span>', '</div>'],
    },
    scrambledOrder: [3, 1, 0, 2],
  },
  {
    filename: 'video-card.html',
    payoff: 'door',
    lines: {
      ru: ['<article class="video-card">', '  <img src="thumb.jpg" alt="Превью">', '  <h4>Урок 1: Основы</h4>', '  <span class="duration">5:32</span>', '</article>'],
      uz: ['<article class="video-card">', '  <img src="thumb.jpg" alt="Old ko‘rinish">', '  <h4>1-dars: Asoslar</h4>', '  <span class="duration">5:32</span>', '</article>'],
    },
    scrambledOrder: [4, 2, 0, 3, 1],
  },
  {
    filename: 'faq.html',
    payoff: 'hero',
    lines: {
      ru: ['<div class="faq">', '  <h4>Вопрос</h4>', '  <p>Ответ</p>', '</div>'],
      uz: ['<div class="faq">', '  <h4>Savol</h4>', '  <p>Javob</p>', '</div>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'social.html',
    payoff: 'door',
    lines: {
      ru: ['<div class="social">', '  <a href="/tw">Twitter</a>', '  <a href="/fb">Facebook</a>', '  <a href="/ig">Instagram</a>', '</div>'],
      uz: ['<div class="social">', '  <a href="/tw">Twitter</a>', '  <a href="/fb">Facebook</a>', '  <a href="/ig">Instagram</a>', '</div>'],
    },
    scrambledOrder: [4, 1, 0, 3, 2],
  },
  {
    filename: 'rating.html',
    payoff: 'hero',
    lines: {
      ru: ['<div class="rating">', '  <span>★★★★☆</span>', '  <p>4.0 из 5</p>', '</div>'],
      uz: ['<div class="rating">', '  <span>★★★★☆</span>', '  <p>4.0 dan 5</p>', '</div>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'banner2.html',
    payoff: 'door',
    lines: {
      ru: ['<div class="banner">', '  <h2>Скидка 20%</h2>', '  <a href="/sale">Смотреть</a>', '</div>'],
      uz: ['<div class="banner">', '  <h2>20% chegirma</h2>', '  <a href="/sale">Ko‘rish</a>', '</div>'],
    },
    scrambledOrder: [3, 1, 0, 2],
  },
  {
    filename: 'newsletter.html',
    payoff: 'torch',
    lines: {
      ru: ['<form class="newsletter">', '  <label>Email</label>', '  <input type="email">', '  <button>Подписаться</button>', '</form>'],
      uz: ['<form class="newsletter">', '  <label>Email</label>', '  <input type="email">', '  <button>Obuna bo‘lish</button>', '</form>'],
    },
    scrambledOrder: [4, 2, 0, 3, 1],
  },
  {
    filename: 'avatar-group.html',
    payoff: 'hero',
    lines: {
      ru: ['<div class="avatars">', '  <img src="u1.jpg" alt="Пользователь 1">', '  <img src="u2.jpg" alt="Пользователь 2">', '</div>'],
      uz: ['<div class="avatars">', '  <img src="u1.jpg" alt="Foydalanuvchi 1">', '  <img src="u2.jpg" alt="Foydalanuvchi 2">', '</div>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'steps.html',
    payoff: 'door',
    lines: {
      ru: ['<ol class="steps">', '  <li>Зарегистрируйся</li>', '  <li>Подтверди почту</li>', '  <li>Начни учиться</li>', '</ol>'],
      uz: ['<ol class="steps">', '  <li>Ro‘yxatdan o‘t</li>', '  <li>Pochtani tasdiqla</li>', '  <li>O‘qishni boshla</li>', '</ol>'],
    },
    scrambledOrder: [4, 1, 0, 3, 2],
  },
  {
    filename: 'tooltip.html',
    payoff: 'torch',
    lines: {
      ru: ['<span class="tooltip-wrap">', '  <button>?</button>', '  <span class="tooltip-text">Подсказка</span>', '</span>'],
      uz: ['<span class="tooltip-wrap">', '  <button>?</button>', '  <span class="tooltip-text">Maslahat</span>', '</span>'],
    },
    scrambledOrder: [3, 0, 2, 1],
  },
  {
    filename: 'search.html',
    payoff: 'hero',
    lines: {
      ru: ['<form class="search">', '  <input type="search" placeholder="Поиск...">', '  <button>🔍</button>', '</form>'],
      uz: ['<form class="search">', '  <input type="search" placeholder="Qidiruv...">', '  <button>🔍</button>', '</form>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'tag-list.html',
    payoff: 'door',
    lines: {
      ru: ['<div class="tags">', '  <span class="tag">HTML</span>', '  <span class="tag">CSS</span>', '</div>'],
      uz: ['<div class="tags">', '  <span class="tag">HTML</span>', '  <span class="tag">CSS</span>', '</div>'],
    },
    scrambledOrder: [3, 1, 0, 2],
  },
  {
    filename: 'timer.html',
    payoff: 'torch',
    lines: {
      ru: ['<div class="timer">', '  <span id="mins">05</span>', '  <span id="secs">00</span>', '</div>'],
      uz: ['<div class="timer">', '  <span id="mins">05</span>', '  <span id="secs">00</span>', '</div>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'review-card.html',
    payoff: 'hero',
    lines: {
      ru: [
        '<article class="review">',
        '  <img src="user.jpg" alt="Пользователь">',
        '  <h4>Отличный курс</h4>',
        '  <p>Рекомендую всем</p>',
        '  <span class="stars">★★★★★</span>',
        '</article>',
      ],
      uz: [
        '<article class="review">',
        '  <img src="user.jpg" alt="Foydalanuvchi">',
        '  <h4>Ajoyib kurs</h4>',
        '  <p>Hammaga tavsiya qilaman</p>',
        '  <span class="stars">★★★★★</span>',
        '</article>',
      ],
    },
    scrambledOrder: [5, 2, 0, 4, 1, 3],
  },
  {
    filename: 'chat-bubble.html',
    payoff: 'door',
    lines: {
      ru: ['<div class="chat-bubble">', '  <p>Привет! Как дела?</p>', '  <span class="time">12:04</span>', '</div>'],
      uz: ['<div class="chat-bubble">', '  <p>Salom! Ishlar qalay?</p>', '  <span class="time">12:04</span>', '</div>'],
    },
    scrambledOrder: [3, 0, 2, 1],
  },
  {
    filename: 'warning.html',
    payoff: 'torch',
    lines: {
      ru: ['<div class="warning">', '  <span>⚠️</span>', '  <p>Проверь соединение</p>', '</div>'],
      uz: ['<div class="warning">', '  <span>⚠️</span>', '  <p>Ulanishni tekshiring</p>', '</div>'],
    },
    scrambledOrder: [2, 0, 3, 1],
  },
  {
    filename: 'skill-bar.html',
    payoff: 'hero',
    lines: {
      ru: ['<div class="skill">', '  <span>HTML — 90%</span>', '  <div class="bar" style="width:90%"></div>', '</div>'],
      uz: ['<div class="skill">', '  <span>HTML — 90%</span>', '  <div class="bar" style="width:90%"></div>', '</div>'],
    },
    scrambledOrder: [3, 1, 0, 2],
  },
  {
    filename: 'share.html',
    payoff: 'door',
    lines: {
      ru: ['<div class="share">', '  <button>Твиттер</button>', '  <button>Фейсбук</button>', '  <button>Копировать</button>', '</div>'],
      uz: ['<div class="share">', '  <button>Twitter</button>', '  <button>Facebook</button>', '  <button>Nusxalash</button>', '</div>'],
    },
    scrambledOrder: [4, 1, 0, 3, 2],
  },
];
