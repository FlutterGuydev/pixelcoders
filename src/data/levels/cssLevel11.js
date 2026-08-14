import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.box', 'border-radius') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле .box добавь border-radius с любым значением, например 12px.',
      uz: '.box qoidasiga istalgan qiymat bilan border-radius qo‘sh, masalan 12px.',
    },
  };
}

export const cssLevel11 = {
  id: 'css-basics-11',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 11: Скруглённые углы border-radius', uz: '11-dars: border-radius yumaloq burchaklar' },
  filename: 'style-11.html',
  explanation: {
    ru: 'border-radius скругляет углы элемента. Небольшое значение (8px) даёт мягкие уголки, большое (50%) превращает квадратную коробку в круг.',
    uz: 'border-radius element burchaklarini yumaloqlaydi. Kichik qiymat (8px) yumshoq burchak beradi, katta qiymat (50%) esa kvadrat qutini doiraga aylantiradi.',
  },
  example: '<style>\n  .box {\n    background-color: plum;\n    border-radius: 16px;\n  }\n</style>\n<div class="box">Скруглённая коробка</div>',
  goals: {
    ru: ['В правиле .box добавь border-radius с любым значением.'],
    uz: ['.box qoidasiga istalgan qiymat bilan border-radius qo‘sh.'],
  },
  hints: ['.box {\n  border-radius: 20px;\n}', '.box {\n  border-radius: 50%;\n}'],
  starterCode: '<style>\n  .box {\n    background-color: plum;\n    padding: 20px;\n    /* Скругли углы */\n  }\n</style>\n<div class="box">Скругли мои углы</div>',
  successMessage: {
    ru: 'Отлично! Резкие углы остались в прошлом.',
    uz: 'Ajoyib! Keskin burchaklar o‘tmishda qoldi.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
