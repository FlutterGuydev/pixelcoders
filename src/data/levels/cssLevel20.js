import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.box', 'opacity') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле .box добавь opacity со значением от 0 до 1, например 0.5.',
      uz: '.box qoidasiga 0 dan 1 gacha qiymat bilan opacity qo‘sh, masalan 0.5.',
    },
  };
}

export const cssLevel20 = {
  id: 'css-basics-20',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 20: Прозрачность opacity', uz: '20-dars: opacity shaffoflik' },
  filename: 'style-20.html',
  explanation: {
    ru: 'opacity задаёт прозрачность всего элемента: 1 — полностью виден, 0 — полностью прозрачен (но всё ещё занимает место), 0.5 — наполовину прозрачен.',
    uz: 'opacity butun elementning shaffofligini belgilaydi: 1 — to‘liq ko‘rinadi, 0 — to‘liq shaffof (lekin baribir joy egallaydi), 0.5 — yarim shaffof.',
  },
  example: '<style>\n  .box {\n    background-color: purple;\n    opacity: 0.5;\n  }\n</style>\n<div class="box"></div>',
  goals: {
    ru: ['В правиле .box добавь opacity со значением от 0 до 1.'],
    uz: ['.box qoidasiga 0 dan 1 gacha qiymat bilan opacity qo‘sh.'],
  },
  hints: ['.box {\n  opacity: 0.4;\n}'],
  starterCode: '<style>\n  .box {\n    width: 120px;\n    height: 80px;\n    background-color: purple;\n    /* Сделай коробку полупрозрачной */\n  }\n</style>\n<div class="box"></div>',
  successMessage: {
    ru: 'Отлично! Теперь ты управляешь прозрачностью элементов.',
    uz: 'Ajoyib! Endi elementlar shaffofligini boshqara olasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
