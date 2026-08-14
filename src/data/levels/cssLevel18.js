import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const value = getRuleValue(styleText, 'a', 'text-decoration');

  if (value != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле для <a> добавь text-decoration, например none.',
      uz: '<a> qoidasiga text-decoration qo‘sh, masalan none.',
    },
  };
}

export const cssLevel18 = {
  id: 'css-basics-18',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 18: Оформление текста text-decoration', uz: '18-dars: text-decoration matn bezagi' },
  filename: 'style-18.html',
  explanation: {
    ru: 'Ссылки <a> по умолчанию подчёркнуты. text-decoration: none; убирает подчёркивание — так часто делают на кнопках-ссылках. text-decoration: underline; наоборот, добавляет подчёркивание к любому тексту.',
    uz: '<a> havolalari standart holatda ostiga chizilgan bo‘ladi. text-decoration: none; ostiga chizishni olib tashlaydi — bu ko‘pincha tugma-havolalarda qilinadi. text-decoration: underline; esa aksincha, istalgan matn ostiga chiziq qo‘shadi.',
  },
  example: '<style>\n  a {\n    text-decoration: none;\n    color: teal;\n  }\n</style>\n<a href="#">Ссылка без подчёркивания</a>',
  goals: {
    ru: ['В правиле для <a> добавь text-decoration: none или underline.'],
    uz: ['<a> qoidasiga text-decoration: none yoki underline qo‘sh.'],
  },
  hints: ['a {\n  text-decoration: none;\n}'],
  starterCode: '<style>\n  a {\n    color: teal;\n    /* Убери или добавь подчёркивание */\n  }\n</style>\n<a href="#">Стилизуй мою ссылку</a>',
  successMessage: {
    ru: 'Отлично! Теперь ссылки выглядят так, как ты хочешь.',
    uz: 'Ajoyib! Endi havolalar xohlaganingdek ko‘rinadi.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
