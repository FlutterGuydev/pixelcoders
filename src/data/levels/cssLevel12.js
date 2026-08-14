import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.box', 'box-shadow') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле .box добавь box-shadow, например box-shadow: 0 4px 12px rgba(0,0,0,0.3);.',
      uz: '.box qoidasiga box-shadow qo‘sh, masalan box-shadow: 0 4px 12px rgba(0,0,0,0.3);.',
    },
  };
}

export const cssLevel12 = {
  id: 'css-basics-12',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 12: Тень box-shadow', uz: '12-dars: box-shadow soya' },
  filename: 'style-12.html',
  explanation: {
    ru: 'box-shadow добавляет тень вокруг элемента, будто он приподнят над страницей. Значения по порядку: сдвиг вправо, сдвиг вниз, размытие, цвет. box-shadow: 0 4px 12px rgba(0,0,0,0.3); — мягкая тень снизу.',
    uz: 'box-shadow element atrofiga, u sahifadan ko‘tarilgandek soya qo‘shadi. Qiymatlar tartibi: o‘ngga siljish, pastga siljish, xiralashtirish, rang. box-shadow: 0 4px 12px rgba(0,0,0,0.3); — pastdan yumshoq soya.',
  },
  example: '<style>\n  .box {\n    box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n  }\n</style>\n<div class="box">Я парю над страницей</div>',
  goals: {
    ru: ['В правиле .box добавь box-shadow с любыми значениями.'],
    uz: ['.box qoidasiga istalgan qiymatlar bilan box-shadow qo‘sh.'],
  },
  hints: ['.box {\n  box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n}'],
  starterCode: '<style>\n  .box {\n    background-color: white;\n    padding: 20px;\n    /* Добавь тень */\n  }\n</style>\n<div class="box">Добавь мне тень</div>',
  successMessage: {
    ru: 'Отлично! Твоя коробка теперь выглядит объёмной.',
    uz: 'Ajoyib! Quting endi hajmli ko‘rinmoqda.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
