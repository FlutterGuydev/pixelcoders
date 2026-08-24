// Predict the Output: the player commits an answer *before* seeing the
// code run, then watches the real outcome play out. Rounds escalate from
// a literal value read, to an indirect CSS-variable lookup, to reasoning
// about a transform's direction.
export const PREDICT_ROUNDS = [
  {
    type: 'color',
    filename: 'box.css',
    code: {
      ru: ['.box {', '  background-color: tomato;', '}'],
      uz: ['.box {', '  background-color: tomato;', '}'],
    },
    question: {
      ru: 'Какого цвета будет фон коробки?',
      uz: 'Quti foni qanday rangda bo‘ladi?',
    },
    correctColor: '#ff6347',
    correctOptionId: 'tomato',
    options: [
      { id: 'tomato', color: '#ff6347' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gray', color: '#6b7280' },
    ],
  },
  {
    type: 'color',
    filename: 'badge.css',
    code: {
      ru: [':root {', '  --warn: #fbbf24;', '}', '.badge {', '  background: var(--warn);', '}'],
      uz: [':root {', '  --warn: #fbbf24;', '}', '.badge {', '  background: var(--warn);', '}'],
    },
    question: {
      ru: 'Какого цвета будет фон значка?',
      uz: 'Nishon foni qanday rangda bo‘ladi?',
    },
    correctColor: '#fbbf24',
    correctOptionId: 'gold',
    options: [
      { id: 'gold', color: '#fbbf24' },
      { id: 'red', color: '#ef4444' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'purple', color: '#a78bfa' },
    ],
  },
  {
    type: 'direction',
    filename: 'hero.css',
    code: {
      ru: ['.hero {', '  transform: translateX(40px);', '}'],
      uz: ['.hero {', '  transform: translateX(40px);', '}'],
    },
    question: {
      ru: 'В какую сторону сдвинется герой?',
      uz: 'Qahramon qaysi tomonga suriladi?',
    },
    correctOptionId: 'right',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
];

export const logicLevel2 = {
  id: 'logic-2',
  trackId: 'logic',
  wingLabel: { ru: 'Логические комнаты', uz: 'Mantiq xonalari' },
  title: { ru: 'Угадай результат', uz: 'Natijani top' },
  goals: {
    ru: ['Прочитай код и выбери ответ до запуска — потом проверь себя.'],
    uz: ['Kodni o‘qi va ishga tushirishdan oldin javobni tanla — keyin o‘zingni tekshir.'],
  },
  successMessage: {
    ru: 'Отличное чтение кода — ты предсказал всё верно (или почти)!',
    uz: 'Kodni ajoyib o‘qiding — deyarli hammasini to‘g‘ri taxmin qilding!',
  },
  rounds: PREDICT_ROUNDS,
};
