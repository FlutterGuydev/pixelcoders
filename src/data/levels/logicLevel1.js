// Bug Hunt: a short read-only snippet per round with exactly one broken
// line. Rounds escalate by making the broken line look more and more like
// its neighbors (round 1: an unrelated tag typo; round 3: a one-letter
// attribute-name typo buried in near-identical lines).
export const BUG_HUNT_ROUNDS = [
  {
    filename: 'card.html',
    buggyIndex: 3,
    lines: {
      ru: ['<div class="card">', '  <h2>Заголовок</h2>', '  <p>Текст карточки</p>', '  <p>Ещё текст<p>', '</div>'],
      uz: ['<div class="card">', '  <h2>Sarlavha</h2>', '  <p>Kartochka matni</p>', '  <p>Yana matn<p>', '</div>'],
    },
  },
  {
    filename: 'card.css',
    buggyIndex: 3,
    lines: {
      ru: ['.card {', '  color: #222;', '  background-color: #fff;', '  border-radius: 8px', '  padding: 12px;', '}'],
      uz: ['.card {', '  color: #222;', '  background-color: #fff;', '  border-radius: 8px', '  padding: 12px;', '}'],
    },
  },
  {
    filename: 'nav.html',
    buggyIndex: 2,
    lines: {
      ru: [
        '<a href="/home" class="nav-link">Главная</a>',
        '<a href="/about" class="nav-link">О нас</a>',
        '<a hraf="/contact" class="nav-link">Контакты</a>',
        '<a href="/blog" class="nav-link">Блог</a>',
      ],
      uz: [
        '<a href="/home" class="nav-link">Bosh sahifa</a>',
        '<a href="/about" class="nav-link">Biz haqimizda</a>',
        '<a hraf="/contact" class="nav-link">Aloqa</a>',
        '<a href="/blog" class="nav-link">Blog</a>',
      ],
    },
  },
];

export const logicLevel1 = {
  id: 'logic-1',
  trackId: 'logic',
  wingLabel: { ru: 'Логические комнаты', uz: 'Mantiq xonalari' },
  title: { ru: 'Охота на баг', uz: 'Xato ovi' },
  goals: {
    ru: ['В каждом раунде спрятана одна сломанная строка — найди и кликни на неё.'],
    uz: ['Har bir bosqichda bitta buzilgan qator yashiringan — uni topib bos.'],
  },
  successMessage: {
    ru: 'Все баги пойманы! Отличный глаз.',
    uz: 'Barcha xatolar tutildi! Ajoyib kuzatuvchanlik.',
  },
  rounds: BUG_HUNT_ROUNDS,
};
