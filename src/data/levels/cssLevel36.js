import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const value = getRuleValue(styleText, '.box', 'box-sizing');

  if (value?.trim() === 'border-box') return { success: true };

  return {
    success: false,
    message: {
      ru: 'В .box добавь box-sizing: border-box;.',
      uz: '.box ga box-sizing: border-box; qo‘sh.',
    },
  };
}

export const cssLevel36 = {
  id: 'css-basics-36',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 36: Модель коробки box-sizing', uz: '36-dars: box-sizing quti modeli' },
  filename: 'style-36.html',
  explanation: {
    ru: 'По умолчанию border и padding увеличивают итоговый размер элемента сверх заданного width — это часто ломает раскладку. box-sizing: border-box; включает их внутрь заданной ширины, так что width всегда остаётся точным.',
    uz: 'Standart holatda border va padding elementning yakuniy o‘lchamini berilgan width dan tashqariga oshiradi — bu ko‘pincha joylashuvni buzadi. box-sizing: border-box; ularni berilgan kenglik ichiga oladi, shunda width doim aniq bo‘lib qoladi.',
  },
  example: '<style>\n  .box {\n    box-sizing: border-box;\n    width: 200px;\n    padding: 20px;\n    border: 5px solid black;\n  }\n</style>\n<div class="box">Ширина всё ещё 200px</div>',
  goals: {
    ru: ['В .box добавь box-sizing: border-box;.'],
    uz: ['.box ga box-sizing: border-box; qo‘sh.'],
  },
  hints: ['.box {\n  box-sizing: border-box;\n}'],
  starterCode: '<style>\n  .box {\n    width: 200px;\n    padding: 20px;\n    border: 5px solid black;\n    /* Сделай так, чтобы width не «уплывал» */\n  }\n</style>\n<div class="box">Почини мою ширину</div>',
  successMessage: {
    ru: 'Отлично! Это одно из самых полезных правил в реальной вёрстке.',
    uz: 'Ajoyib! Bu haqiqiy dizaynda eng foydali qoidalardan biri.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
