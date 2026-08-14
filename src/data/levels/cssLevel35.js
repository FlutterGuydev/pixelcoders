import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.button', 'cursor') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В .button добавь cursor, например pointer.',
      uz: '.button ga cursor qo‘sh, masalan pointer.',
    },
  };
}

export const cssLevel35 = {
  id: 'css-basics-35',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 35: Курсор мыши cursor', uz: '35-dars: cursor sichqoncha kursori' },
  filename: 'style-35.html',
  explanation: {
    ru: 'cursor меняет вид курсора мыши над элементом. cursor: pointer; показывает «руку», как над обычной ссылкой — подсказывает, что на элемент можно кликнуть, даже если это не тег <a>.',
    uz: 'cursor element ustidagi sichqoncha kursori ko‘rinishini o‘zgartiradi. cursor: pointer; oddiy havola ustidagidek «qo‘l»ni ko‘rsatadi — bu <a> tegi bo‘lmasa ham, elementni bosish mumkinligini bildiradi.',
  },
  example: '<style>\n  .button {\n    background-color: teal;\n    padding: 10px 20px;\n    cursor: pointer;\n  }\n</style>\n<div class="button">Похоже на кнопку</div>',
  goals: {
    ru: ['В .button добавь cursor: pointer.'],
    uz: ['.button ga cursor: pointer qo‘sh.'],
  },
  hints: ['.button {\n  cursor: pointer;\n}'],
  starterCode: '<style>\n  .button {\n    background-color: teal;\n    color: white;\n    padding: 10px 20px;\n    /* Покажи, что это кликабельно */\n  }\n</style>\n<div class="button">Наведи на меня в превью</div>',
  successMessage: {
    ru: 'Отлично! Наведи мышку на кнопку в превью — курсор изменится.',
    uz: 'Ajoyib! Oldindan ko‘rishda tugma ustiga sichqonchani olib bor — kursor o‘zgaradi.',
  },
  pageCaption: { ru: 'Наведи мышку в превью, чтобы увидеть курсор:', uz: 'Kursorni ko‘rish uchun oldindan ko‘rishda sichqonchani olib bor:' },
  validate,
};
