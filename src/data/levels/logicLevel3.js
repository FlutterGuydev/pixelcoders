// Code Sort: real HTML markup shown scrambled as draggable chips. The
// live preview renders whatever the *current* (possibly wrong) order
// produces, so cause-and-effect is visible while dragging, not just on
// submit. Correct order is auto-detected — there's no submit button.
// `payoff` picks which dungeon flourish celebrates a solved round.
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
];

export const logicLevel3 = {
  id: 'logic-3',
  trackId: 'logic',
  wingLabel: { ru: 'Логические комнаты', uz: 'Mantiq xonalari' },
  title: { ru: 'Собери порядок', uz: 'Tartibni yig‘' },
  goals: {
    ru: ['Перетаскивай строки, пока живой предпросмотр не станет правильным.'],
    uz: ['Jonli ko‘rinish to‘g‘ri bo‘lguncha qatorlarni torting.'],
  },
  successMessage: {
    ru: 'Порядок имеет значение — и ты это доказал!',
    uz: 'Tartib muhim — va sen buni isbotlading!',
  },
  rounds: CODE_SORT_ROUNDS,
};
