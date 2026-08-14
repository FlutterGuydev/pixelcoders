import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, 'p', 'line-height') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле для <p> добавь line-height с любым значением, например 1.6.',
      uz: '<p> qoidasiga istalgan qiymat bilan line-height qo‘sh, masalan 1.6.',
    },
  };
}

export const cssLevel19 = {
  id: 'css-basics-19',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 19: Межстрочный интервал line-height', uz: '19-dars: line-height qator oralig‘i' },
  filename: 'style-19.html',
  explanation: {
    ru: 'line-height задаёт расстояние между строками текста. Число без единиц (например, 1.6) означает «в 1.6 раза больше размера шрифта» — так текст легче читать, особенно длинные абзацы.',
    uz: 'line-height matn qatorlari orasidagi masofani belgilaydi. Birliksiz son (masalan, 1.6) «shrift o‘lchamidan 1.6 barobar katta» degani — bu matnni, ayniqsa uzun abzatslarni o‘qishni osonlashtiradi.',
  },
  example: '<style>\n  p {\n    line-height: 1.8;\n  }\n</style>\n<p>Длинный текст с удобным расстоянием между строками читать намного приятнее.</p>',
  goals: {
    ru: ['В правиле для <p> добавь line-height с любым значением.'],
    uz: ['<p> qoidasiga istalgan qiymat bilan line-height qo‘sh.'],
  },
  hints: ['p {\n  line-height: 1.6;\n}'],
  starterCode: '<style>\n  p {\n    /* Сделай текст удобнее для чтения */\n  }\n</style>\n<p>Длинный текст, который трудно читать без нормального межстрочного интервала.</p>',
  successMessage: {
    ru: 'Отлично! Текст теперь дышит между строк.',
    uz: 'Ajoyib! Matn endi qatorlar orasida «nafas oladi».',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
