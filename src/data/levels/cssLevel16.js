import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const width = getRuleValue(styleText, '.box', 'width');
  const height = getRuleValue(styleText, '.box', 'height');

  if (width != null && height != null) return { success: true };

  if (width == null) {
    return {
      success: false,
      message: { ru: 'В правиле .box добавь width с любым значением.', uz: '.box qoidasiga istalgan qiymat bilan width qo‘sh.' },
    };
  }

  return {
    success: false,
    message: { ru: 'width есть. Теперь добавь height с любым значением.', uz: 'width bor. Endi istalgan qiymat bilan height qo‘sh.' },
  };
}

export const cssLevel16 = {
  id: 'css-basics-16',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 16: Размер width и height', uz: '16-dars: width va height o‘lchami' },
  filename: 'style-16.html',
  explanation: {
    ru: 'width и height задают ширину и высоту элемента напрямую, в px, % или других единицах. Без них блочные элементы (как div) сами растягиваются на всю ширину.',
    uz: 'width va height element eni va bo‘yini to‘g‘ridan-to‘g‘ri, px, % yoki boshqa birliklarda belgilaydi. Ularsiz blok elementlar (div kabi) o‘zlari butun kenglikka cho‘ziladi.',
  },
  example: '<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-color: coral;\n  }\n</style>\n<div class="box"></div>',
  goals: {
    ru: ['В правиле .box задай width.', 'Задай height.'],
    uz: ['.box qoidasida width ber.', 'height ber.'],
  },
  hints: ['.box {\n  width: 150px;\n  height: 150px;\n}'],
  starterCode: '<style>\n  .box {\n    background-color: coral;\n    /* Задай width и height */\n  }\n</style>\n<div class="box"></div>',
  successMessage: {
    ru: 'Отлично! Теперь ты управляешь точным размером коробки.',
    uz: 'Ajoyib! Endi qutining aniq o‘lchamini boshqara olasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
