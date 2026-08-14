import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.box', 'margin') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле .box добавь margin с любым значением, например 20px.',
      uz: '.box qoidasiga istalgan qiymat bilan margin qo‘sh, masalan 20px.',
    },
  };
}

export const cssLevel8 = {
  id: 'css-basics-8',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 8: Внешний отступ margin', uz: '8-dars: margin tashqi bo‘shliq' },
  filename: 'style-8.html',
  explanation: {
    ru: 'margin — это расстояние снаружи элемента, между ним и соседями. Чем больше значение, тем дальше элемент отодвигается от того, что рядом. Значение задаётся в px.',
    uz: 'margin — element tashqarisidagi, u bilan qo‘shnilari orasidagi masofa. Qiymat qancha katta bo‘lsa, element yonidagilardan shuncha uzoqlashadi. Qiymat px da beriladi.',
  },
  example: '<style>\n  .box {\n    background-color: lightblue;\n    margin: 30px;\n  }\n</style>\n<div class="box">У меня есть margin</div>',
  goals: {
    ru: ['В правиле .box добавь margin с любым значением в px.'],
    uz: ['.box qoidasiga px da istalgan qiymat bilan margin qo‘sh.'],
  },
  hints: ['.box {\n  margin: 24px;\n}'],
  starterCode: '<style>\n  .box {\n    background-color: lightblue;\n    /* Добавь margin здесь */\n  }\n</style>\n<div class="box">Первая коробка</div>\n<div class="box">Вторая коробка</div>',
  successMessage: {
    ru: 'Отлично! Смотри, как коробки отодвинулись друг от друга.',
    uz: 'Ajoyib! Qutilar bir-biridan qanday uzoqlashganini ko‘r.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
