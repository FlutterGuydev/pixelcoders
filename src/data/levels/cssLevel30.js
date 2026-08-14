import { extractStyleContent, getRuleBlock } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const rule = getRuleBlock(styleText, '.box:hover');

  if (rule && /transform\s*:/.test(rule)) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правило .box:hover добавь transform, например scale(1.1) или rotate(10deg).',
      uz: '.box:hover qoidasiga transform qo‘sh, masalan scale(1.1) yoki rotate(10deg).',
    },
  };
}

export const cssLevel30 = {
  id: 'css-basics-30',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 30: Трансформация transform', uz: '30-dars: transform o‘zgartirish' },
  filename: 'style-30.html',
  explanation: {
    ru: 'transform двигает, вращает или масштабирует элемент, не влияя на соседей. scale(1.1) — увеличить на 10%, rotate(10deg) — повернуть на 10 градусов. В паре с transition получается плавная анимация при наведении.',
    uz: 'transform qo‘shnilariga ta’sir qilmasdan elementni siljitadi, aylantiradi yoki masshtablaydi. scale(1.1) — 10% ga kattalashtirish, rotate(10deg) — 10 gradusga burish. transition bilan birga sichqoncha ustida yumshoq animatsiya hosil bo‘ladi.',
  },
  example: '<style>\n  .box {\n    background-color: teal;\n    transition: transform 0.3s;\n  }\n  .box:hover {\n    transform: scale(1.15);\n  }\n</style>\n<div class="box">Наведи на меня</div>',
  goals: {
    ru: ['В .box:hover добавь transform: scale(...) или rotate(...).'],
    uz: ['.box:hover ga transform: scale(...) yoki rotate(...) qo‘sh.'],
  },
  hints: ['.box:hover {\n  transform: scale(1.1);\n}', '.box:hover {\n  transform: rotate(5deg);\n}'],
  starterCode: '<style>\n  .box {\n    width: 100px;\n    height: 100px;\n    background-color: teal;\n    transition: transform 0.3s;\n  }\n  .box:hover {\n    /* Увеличь или поверни меня */\n  }\n</style>\n<div class="box"></div>',
  successMessage: {
    ru: 'Отлично! Наведи мышку на коробку в превью, чтобы увидеть эффект.',
    uz: 'Ajoyib! Effektni ko‘rish uchun oldindan ko‘rishda quti ustiga sichqonchani olib bor.',
  },
  pageCaption: { ru: 'Наведи мышку в превью, чтобы увидеть трансформацию:', uz: 'Transformatsiyani ko‘rish uchun oldindan ko‘rishda sichqonchani olib bor:' },
  validate,
};
