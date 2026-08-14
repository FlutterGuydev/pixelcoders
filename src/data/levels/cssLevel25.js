import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.box', 'overflow') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле .box добавь overflow, например hidden, scroll или auto.',
      uz: '.box qoidasiga overflow qo‘sh, masalan hidden, scroll yoki auto.',
    },
  };
}

export const cssLevel25 = {
  id: 'css-basics-25',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 25: Переполнение overflow', uz: '25-dars: overflow toshib ketish' },
  filename: 'style-25.html',
  explanation: {
    ru: 'Когда содержимое не помещается в заданный размер, оно «вылезает» наружу. overflow решает, что делать: hidden — обрезать лишнее, scroll — всегда показывать полосу прокрутки, auto — показывать её только когда нужно.',
    uz: 'Mazmun berilgan o‘lchamga sig‘masa, u tashqariga «chiqib» ketadi. overflow nima qilishni hal qiladi: hidden — ortiqchasini kesib tashlash, scroll — doim aylantirish chizig‘ini ko‘rsatish, auto — faqat kerak bo‘lganda ko‘rsatish.',
  },
  example: '<style>\n  .box {\n    width: 150px;\n    height: 60px;\n    overflow: auto;\n  }\n</style>\n<div class="box">Очень длинный текст, который не помещается в маленькую коробку целиком.</div>',
  goals: {
    ru: ['В правиле .box добавь overflow с любым значением.'],
    uz: ['.box qoidasiga istalgan qiymat bilan overflow qo‘sh.'],
  },
  hints: ['.box {\n  overflow: hidden;\n}', '.box {\n  overflow: auto;\n}'],
  starterCode: '<style>\n  .box {\n    width: 150px;\n    height: 60px;\n    border: 1px solid black;\n    /* Реши, что делать с лишним текстом */\n  }\n</style>\n<div class="box">Очень длинный текст, который точно не помещается в такую маленькую коробку.</div>',
  successMessage: {
    ru: 'Отлично! Теперь лишнее содержимое под контролем.',
    uz: 'Ajoyib! Endi ortiqcha mazmun nazorat ostida.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
