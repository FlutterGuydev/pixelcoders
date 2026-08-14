import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.box', 'padding') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле .box добавь padding с любым значением, например 16px.',
      uz: '.box qoidasiga istalgan qiymat bilan padding qo‘sh, masalan 16px.',
    },
  };
}

export const cssLevel9 = {
  id: 'css-basics-9',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 9: Внутренний отступ padding', uz: '9-dars: padding ichki bo‘shliq' },
  filename: 'style-9.html',
  explanation: {
    ru: 'padding — расстояние внутри элемента, между его границей и содержимым. margin отодвигает элемент от соседей снаружи, а padding отодвигает содержимое от края того же элемента изнутри.',
    uz: 'padding — element ichidagi, uning chegarasi bilan mazmuni orasidagi masofa. margin elementni tashqaridan qo‘shnilaridan uzoqlashtiradi, padding esa mazmunni o‘sha elementning ichidan chetidan uzoqlashtiradi.',
  },
  example: '<style>\n  .box {\n    background-color: khaki;\n    padding: 24px;\n  }\n</style>\n<div class="box">Текст с воздухом вокруг</div>',
  goals: {
    ru: ['В правиле .box добавь padding с любым значением в px.'],
    uz: ['.box qoidasiga px da istalgan qiymat bilan padding qo‘sh.'],
  },
  hints: ['.box {\n  padding: 20px;\n}'],
  starterCode: '<style>\n  .box {\n    background-color: khaki;\n    /* Добавь padding здесь */\n  }\n</style>\n<div class="box">Тесно прижатый текст</div>',
  successMessage: {
    ru: 'Отлично! Теперь у текста есть «воздух» вокруг внутри коробки.',
    uz: 'Ajoyib! Endi matn atrofida quti ichida «havo» bor.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
