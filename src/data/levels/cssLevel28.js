import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const display = getRuleValue(styleText, '.grid', 'display');

  if (display?.replace(/\s+/g, '') !== 'grid') {
    return {
      success: false,
      message: { ru: 'В .grid добавь display: grid;.', uz: '.grid ga display: grid; qo‘sh.' },
    };
  }

  if (getRuleValue(styleText, '.grid', 'grid-template-columns') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'display: grid есть. Добавь ещё grid-template-columns, например repeat(3, 1fr).',
      uz: 'display: grid bor. Yana grid-template-columns qo‘sh, masalan repeat(3, 1fr).',
    },
  };
}

export const cssLevel28 = {
  id: 'css-basics-28',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 28: Сетка display: grid', uz: '28-dars: display: grid katak' },
  filename: 'style-28.html',
  explanation: {
    ru: 'display: grid; строит настоящую таблицу-сетку из строк и столбцов. grid-template-columns описывает столбцы: repeat(3, 1fr) — три равные колонки. Флексбокс лучше для одного ряда, grid — для двумерных раскладок.',
    uz: 'display: grid; qator va ustunlardan haqiqiy jadval-katak quradi. grid-template-columns ustunlarni tasvirlaydi: repeat(3, 1fr) — uchta teng ustun. Fleksboks bitta qator uchun, grid esa ikki o‘lchamli joylashuvlar uchun yaxshiroq.',
  },
  example: '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n  }\n</style>\n<div class="grid">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n</div>',
  goals: {
    ru: ['В .grid добавь display: grid;.', 'Добавь grid-template-columns.'],
    uz: ['.grid ga display: grid; qo‘sh.', 'grid-template-columns qo‘sh.'],
  },
  hints: ['.grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}'],
  starterCode: '<style>\n  .grid {\n    gap: 10px;\n    /* Включи grid и задай колонки */\n  }\n</style>\n<div class="grid">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n</div>',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь строить настоящие сетки.',
    uz: 'Ajoyib! Endi haqiqiy katakli tuzilmalar qurishni bilasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
