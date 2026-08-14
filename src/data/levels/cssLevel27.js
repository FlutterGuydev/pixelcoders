import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.row', 'gap') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В .row добавь gap с любым значением, например 16px.',
      uz: '.row ga istalgan qiymat bilan gap qo‘sh, masalan 16px.',
    },
  };
}

export const cssLevel27 = {
  id: 'css-basics-27',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 27: Промежутки gap', uz: '27-dars: gap oraliqlar' },
  filename: 'style-27.html',
  explanation: {
    ru: 'gap задаёт равные промежутки между элементами flex-контейнера сразу — не нужно ставить margin на каждый элемент по отдельности. Это самый простой способ развести элементы во флексбоксе.',
    uz: 'gap flex-konteyner elementlari orasidagi bir xil oraliqlarni darhol belgilaydi — har bir elementga alohida margin qo‘yish shart emas. Bu fleksboksda elementlarni ajratishning eng oddiy usuli.',
  },
  example: '<style>\n  .row {\n    display: flex;\n    gap: 20px;\n  }\n</style>\n<div class="row">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>',
  goals: {
    ru: ['В .row добавь gap с любым значением.'],
    uz: ['.row ga istalgan qiymat bilan gap qo‘sh.'],
  },
  hints: ['.row {\n  display: flex;\n  gap: 12px;\n}'],
  starterCode: '<style>\n  .row {\n    display: flex;\n    /* Разведи элементы через gap */\n  }\n</style>\n<div class="row">\n  <div>Один</div>\n  <div>Два</div>\n  <div>Три</div>\n</div>',
  successMessage: {
    ru: 'Отлично! Один gap заменяет margin на каждом элементе.',
    uz: 'Ajoyib! Bitta gap har bir elementdagi marginni almashtiradi.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
