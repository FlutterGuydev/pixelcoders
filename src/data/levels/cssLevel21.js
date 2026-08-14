import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.box', 'background-image') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле .box добавь background-image, например url("картинка.jpg").',
      uz: '.box qoidasiga background-image qo‘sh, masalan url("rasm.jpg").',
    },
  };
}

export const cssLevel21 = {
  id: 'css-basics-21',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 21: Фоновая картинка background-image', uz: '21-dars: background-image fon rasmi' },
  filename: 'style-21.html',
  explanation: {
    ru: 'background-image ставит картинку фоном элемента вместо обычного цвета. Значение — url("путь к файлу"). Часто её сочетают с background-size: cover;, чтобы картинка заполнила всю область.',
    uz: 'background-image element foniga oddiy rang o‘rniga rasm qo‘yadi. Qiymati — url("fayl manzili"). Ko‘pincha rasm butun maydonni to‘ldirishi uchun background-size: cover; bilan birga ishlatiladi.',
  },
  example: '<style>\n  .box {\n    width: 200px;\n    height: 120px;\n    background-image: url("photo.jpg");\n    background-size: cover;\n  }\n</style>\n<div class="box"></div>',
  goals: {
    ru: ['В правиле .box добавь background-image с любым путём.'],
    uz: ['.box qoidasiga istalgan manzil bilan background-image qo‘sh.'],
  },
  hints: ['.box {\n  background-image: url("photo.jpg");\n  background-size: cover;\n}'],
  starterCode: '<style>\n  .box {\n    width: 200px;\n    height: 120px;\n    /* Добавь фоновую картинку */\n  }\n</style>\n<div class="box"></div>',
  successMessage: {
    ru: 'Отлично! Даже если картинка не загрузится, ты знаешь синтаксис.',
    uz: 'Ajoyib! Rasm yuklanmasa ham, sintaksisni bilasan.',
  },
  pageCaption: { ru: 'Реальная картинка нужна для показа, но правило уже верное:', uz: 'Ko‘rsatish uchun haqiqiy rasm kerak, lekin qoida allaqachon to‘g‘ri:' },
  validate,
};
