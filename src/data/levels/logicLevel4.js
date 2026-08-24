// Pattern Puzzle: a fixed sequence of swatches with 1-2 slots missing at
// the end. Each option supplies that many items at once, so a "pick" can
// represent a multi-item continuation once two rules interleave (round 3).
const TEAL = 'var(--accent-teal)';
const GOLD = 'var(--accent-gold)';
const RED = 'var(--accent-red)';
const PURPLE = '#a78bfa';

export const PATTERN_ROUNDS = [
  {
    // Simple repeating rule: color alternates, size constant.
    sequence: [
      { size: 30, color: TEAL },
      { size: 30, color: GOLD },
      { size: 30, color: TEAL },
      { size: 30, color: GOLD },
    ],
    missingCount: 1,
    options: [
      { id: 'teal', correct: true, items: [{ size: 30, color: TEAL }] },
      { id: 'gold', correct: false, items: [{ size: 30, color: GOLD }] },
      { id: 'red', correct: false, items: [{ size: 30, color: RED }] },
      { id: 'purple', correct: false, items: [{ size: 30, color: PURPLE }] },
    ],
  },
  {
    // Simple rule: size increases by 8px each step, color constant.
    sequence: [
      { size: 18, color: TEAL },
      { size: 26, color: TEAL },
      { size: 34, color: TEAL },
      { size: 42, color: TEAL },
    ],
    missingCount: 1,
    options: [
      { id: '50', correct: true, items: [{ size: 50, color: TEAL }] },
      { id: '42', correct: false, items: [{ size: 42, color: TEAL }] },
      { id: '58', correct: false, items: [{ size: 58, color: TEAL }] },
      { id: '34', correct: false, items: [{ size: 34, color: TEAL }] },
    ],
  },
  {
    // Two interleaved rules: color alternates AND size grows +8px.
    // Distractors each break exactly one rule.
    sequence: [
      { size: 18, color: TEAL },
      { size: 26, color: GOLD },
      { size: 34, color: TEAL },
      { size: 42, color: GOLD },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 50, color: TEAL },
          { size: 58, color: GOLD },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 50, color: GOLD },
          { size: 58, color: TEAL },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 42, color: TEAL },
          { size: 42, color: GOLD },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 58, color: TEAL },
          { size: 50, color: GOLD },
        ],
      },
    ],
  },
];

export const logicLevel4 = {
  id: 'logic-4',
  trackId: 'logic',
  wingLabel: { ru: 'Логические комнаты', uz: 'Mantiq xonalari' },
  title: { ru: 'Найди узор', uz: 'Naqshni top' },
  goals: {
    ru: ['Разгадай правило узора и выбери, что идёт дальше.'],
    uz: ['Naqsh qoidasini top va davomini tanla.'],
  },
  successMessage: {
    ru: 'Ты видишь закономерности насквозь!',
    uz: 'Sen naqshlarni tom ma’noda ko‘ryapsan!',
  },
  rounds: PATTERN_ROUNDS,
};
