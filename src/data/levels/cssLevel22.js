import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const value = getRuleValue(styleText, 'span', 'display');

  if (value != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле для <span> добавь display: block или inline-block.',
      uz: '<span> qoidasiga display: block yoki inline-block qo‘sh.',
    },
  };
}

export const cssLevel22 = {
  id: 'css-basics-22',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 22: display block/inline/inline-block', uz: '22-dars: display block/inline/inline-block' },
  filename: 'style-22.html',
  explanation: {
    ru: 'У каждого тега есть тип отображения по умолчанию: <div> — block (своя строка, на всю ширину), <span> — inline (внутри строки, ширину и высоту не задать). display: inline-block; берёт лучшее от обоих: держится в строке, но можно задать width/height.',
    uz: 'Har bir tegning standart ko‘rinish turi bor: <div> — block (o‘z qatori, butun kenglik), <span> — inline (qator ichida, kenglik va bo‘yni belgilab bo‘lmaydi). display: inline-block; ikkalasining eng yaxshisini oladi: qatorda turadi, lekin width/height belgilash mumkin.',
  },
  example: '<style>\n  span {\n    display: inline-block;\n    width: 60px;\n    background-color: gold;\n  }\n</style>\n<span>A</span><span>B</span>',
  goals: {
    ru: ['В правиле для <span> добавь свойство display.'],
    uz: ['<span> qoidasiga display xususiyatini qo‘sh.'],
  },
  hints: ['span {\n  display: inline-block;\n  width: 50px;\n}'],
  starterCode: '<style>\n  span {\n    background-color: gold;\n    width: 50px;\n    /* width не работает без правильного display! Почини это */\n  }\n</style>\n<span>Раз</span><span>Два</span>',
  successMessage: {
    ru: 'Отлично! Теперь ты понимаешь разницу между block, inline и inline-block.',
    uz: 'Ajoyib! Endi block, inline va inline-block farqini tushunasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
