import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const display = getRuleValue(styleText, '.row', 'display');

  if (display == null || display.replace(/\s+/g, '') !== 'flex') {
    return {
      success: false,
      message: {
        ru: 'В правиле .row добавь display: flex; — это включает флекс-раскладку.',
        uz: '.row qoidasiga display: flex; qo‘sh — bu fleks-joylashuvni yoqadi.',
      },
    };
  }

  const justify = getRuleValue(styleText, '.row', 'justify-content');
  const align = getRuleValue(styleText, '.row', 'align-items');
  if (justify != null || align != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'display: flex есть. Добавь ещё justify-content или align-items с любым значением.',
      uz: 'display: flex bor. Yana justify-content yoki align-items ni istalgan qiymat bilan qo‘sh.',
    },
  };
}

export const cssLevel13 = {
  id: 'css-basics-13',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 13: Флексбокс display: flex', uz: '13-dars: display: flex fleksboks' },
  filename: 'style-13.html',
  explanation: {
    ru: 'display: flex превращает элемент в гибкий контейнер: его дети выстраиваются в ряд и их легко выравнивать. justify-content управляет расположением по горизонтали (center, space-between...), align-items — по вертикали (center, flex-start...).',
    uz: 'display: flex elementni moslashuvchan konteynerga aylantiradi: uning bolalari qatorga tizilib, ularni tekislash oson bo‘ladi. justify-content gorizontal joylashuvni (center, space-between...), align-items esa vertikalni (center, flex-start...) boshqaradi.',
  },
  example: '<style>\n  .row {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n  }\n</style>\n<div class="row">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>',
  goals: {
    ru: ['В правиле .row добавь display: flex;.', 'Добавь justify-content или align-items с любым значением.'],
    uz: ['.row qoidasiga display: flex; qo‘sh.', 'justify-content yoki align-items ni istalgan qiymat bilan qo‘sh.'],
  },
  hints: ['.row {\n  display: flex;\n  justify-content: center;\n}'],
  starterCode: '<style>\n  .row {\n    /* Включи флекс и выровняй элементы */\n  }\n</style>\n<div class="row">\n  <div>Один</div>\n  <div>Два</div>\n  <div>Три</div>\n</div>',
  successMessage: {
    ru: 'Отлично! Флексбокс — самый мощный инструмент для раскладки элементов.',
    uz: 'Ajoyib! Fleksboks — elementlarni joylashtirish uchun eng kuchli vosita.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
