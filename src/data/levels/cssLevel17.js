import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, 'p', 'font-family') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле для <p> добавь font-family с любым названием шрифта.',
      uz: '<p> qoidasiga istalgan shrift nomi bilan font-family qo‘sh.',
    },
  };
}

export const cssLevel17 = {
  id: 'css-basics-17',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 17: Шрифт font-family', uz: '17-dars: font-family shrift' },
  filename: 'style-17.html',
  explanation: {
    ru: 'font-family выбирает шрифт для текста. Можно перечислить несколько через запятую — браузер использует первый доступный: font-family: Georgia, serif;. Последним обычно пишут общий тип (serif, sans-serif, monospace) на случай, если остальных нет.',
    uz: 'font-family matn uchun shriftni tanlaydi. Vergul bilan bir nechtasini sanab o‘tish mumkin — brauzer birinchi mavjudini ishlatadi: font-family: Georgia, serif;. Oxiriga odatda umumiy turi (serif, sans-serif, monospace) yoziladi, boshqalari bo‘lmasa deb.',
  },
  example: '<style>\n  p {\n    font-family: Georgia, serif;\n  }\n</style>\n<p>Текст другим шрифтом</p>',
  goals: {
    ru: ['В правиле для <p> добавь font-family с любым шрифтом.'],
    uz: ['<p> qoidasiga istalgan shrift bilan font-family qo‘sh.'],
  },
  hints: ['p {\n  font-family: "Courier New", monospace;\n}'],
  starterCode: '<style>\n  p {\n    /* Выбери шрифт */\n  }\n</style>\n<p>Смени мой шрифт</p>',
  successMessage: {
    ru: 'Отлично! Теперь ты выбираешь, каким шрифтом говорит твоя страница.',
    uz: 'Ajoyib! Endi sahifang qaysi shrift bilan «gapirishini» tanlaysan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
