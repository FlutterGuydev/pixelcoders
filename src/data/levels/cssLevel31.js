import { extractStyleContent, getRuleBlock } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const firstRule = getRuleBlock(styleText, 'li:first-child');
  const lastRule = getRuleBlock(styleText, 'li:last-child');

  if (firstRule && firstRule.trim().length > 0 && lastRule && lastRule.trim().length > 0) {
    return { success: true };
  }

  if (!firstRule || firstRule.trim().length === 0) {
    return {
      success: false,
      message: {
        ru: 'Добавь правило li:first-child { ... } хотя бы с одним свойством.',
        uz: 'li:first-child { ... } qoidasini kamida bitta xususiyat bilan qo‘sh.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'first-child есть. Добавь ещё li:last-child { ... } с хотя бы одним свойством.',
      uz: 'first-child bor. Yana li:last-child { ... } ni kamida bitta xususiyat bilan qo‘sh.',
    },
  };
}

export const cssLevel31 = {
  id: 'css-basics-31',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 31: :first-child и :last-child', uz: '31-dars: :first-child va :last-child' },
  filename: 'style-31.html',
  explanation: {
    ru: 'Псевдоклассы :first-child и :last-child выбирают первый и последний элемент среди братьев-элементов — без class и без JavaScript. Есть и :nth-child(2) — конкретный элемент по номеру.',
    uz: ':first-child va :last-child psevdo-sinflari qo‘shni elementlar orasidan birinchi va oxirgisini tanlaydi — class va JavaScript’siz. Yana :nth-child(2) ham bor — raqami bo‘yicha aniq element.',
  },
  example: '<style>\n  li:first-child {\n    font-weight: bold;\n  }\n  li:last-child {\n    color: crimson;\n  }\n</style>\n<ul>\n  <li>Первый</li>\n  <li>Средний</li>\n  <li>Последний</li>\n</ul>',
  goals: {
    ru: ['Добавь правило li:first-child.', 'Добавь правило li:last-child.'],
    uz: ['li:first-child qoidasini qo‘sh.', 'li:last-child qoidasini qo‘sh.'],
  },
  hints: ['li:first-child {\n  font-weight: bold;\n}', 'li:last-child {\n  color: crimson;\n}'],
  starterCode: '<style>\n  /* Стилизуй первый и последний пункты по-разному */\n\n</style>\n<ul>\n  <li>Первый</li>\n  <li>Средний</li>\n  <li>Последний</li>\n</ul>',
  successMessage: {
    ru: 'Отлично! Ты выбрал элементы по их месту в списке, а не по классу.',
    uz: 'Ajoyib! Elementlarni klassi bo‘yicha emas, ro‘yxatdagi o‘rni bo‘yicha tanlading.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
