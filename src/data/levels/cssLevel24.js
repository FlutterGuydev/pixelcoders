import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.front', 'z-index') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле .front добавь z-index с числом, например 10.',
      uz: '.front qoidasiga son bilan z-index qo‘sh, masalan 10.',
    },
  };
}

export const cssLevel24 = {
  id: 'css-basics-24',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 24: Порядок слоёв z-index', uz: '24-dars: z-index qatlamlar tartibi' },
  filename: 'style-24.html',
  explanation: {
    ru: 'Когда элементы перекрываются (например, через position), z-index решает, кто окажется сверху. Чем больше число, тем ближе к зрителю элемент. z-index работает только на элементах с position, отличным от static.',
    uz: 'Elementlar bir-birini qoplaganda (masalan, position orqali), z-index kim tepada bo‘lishini hal qiladi. Son qancha katta bo‘lsa, element tomoshabinga shuncha yaqin bo‘ladi. z-index faqat position static bo‘lmagan elementlarda ishlaydi.',
  },
  example: '<style>\n  .back, .front {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n  }\n  .back { background-color: gray; top: 0; left: 0; }\n  .front { background-color: gold; top: 20px; left: 20px; z-index: 10; }\n</style>\n<div class="back"></div>\n<div class="front"></div>',
  goals: {
    ru: ['В правиле .front добавь z-index с числом больше, чем у .back.'],
    uz: ['.front qoidasiga .back dan katta son bilan z-index qo‘sh.'],
  },
  hints: ['.front {\n  z-index: 5;\n}'],
  starterCode: '<style>\n  .back, .front {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n  }\n  .back {\n    background-color: gray;\n    top: 0;\n    left: 0;\n  }\n  .front {\n    background-color: gold;\n    top: 20px;\n    left: 20px;\n    /* Подними меня наверх слоёв */\n  }\n</style>\n<div class="back"></div>\n<div class="front"></div>',
  successMessage: {
    ru: 'Отлично! Теперь ты управляешь тем, что оказывается сверху.',
    uz: 'Ajoyib! Endi nima tepada bo‘lishini boshqara olasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
