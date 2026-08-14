import { extractStyleContent, getRuleBlock } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const rule = getRuleBlock(styleText, '.button:hover');

  if (rule && rule.trim().length > 0) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Добавь правило .button:hover { ... } хотя бы с одним свойством.',
      uz: '.button:hover { ... } qoidasini kamida bitta xususiyat bilan qo‘sh.',
    },
  };
}

export const cssLevel14 = {
  id: 'css-basics-14',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 14: Наведение мыши :hover', uz: '14-dars: :hover sichqoncha ustida' },
  filename: 'style-14.html',
  explanation: {
    ru: ':hover — это псевдокласс: он добавляется к селектору через двоеточие и применяет стили, только пока курсор наведён на элемент. .button:hover { ... } сработает, когда мышка окажется над кнопкой — без единой строки JavaScript.',
    uz: ':hover — bu psevdo-sinf: u selektorga ikki nuqta orqali qo‘shiladi va faqat kursor element ustida turgandagina stillarni qo‘llaydi. .button:hover { ... } sichqoncha tugma ustida bo‘lganda ishlaydi — bitta ham JavaScript satrisiz.',
  },
  example: '<style>\n  .button {\n    background-color: teal;\n    padding: 10px 20px;\n  }\n  .button:hover {\n    background-color: darkslategray;\n  }\n</style>\n<div class="button">Наведи на меня</div>',
  goals: {
    ru: ['Добавь правило .button:hover.', 'Задай в нём хотя бы одно свойство — оно изменится при наведении.'],
    uz: ['.button:hover qoidasini qo‘sh.', 'Unda kamida bitta xususiyat ber — u sichqoncha ustida o‘zgaradi.'],
  },
  hints: ['.button:hover {\n  background-color: navy;\n}'],
  starterCode: '<style>\n  .button {\n    background-color: teal;\n    padding: 10px 20px;\n    color: white;\n  }\n  /* Добавь .button:hover здесь */\n\n</style>\n<div class="button">Наведи на меня в превью</div>',
  successMessage: {
    ru: 'Отлично! Наведи мышку на кнопку в превью — увидишь изменение вживую.',
    uz: 'Ajoyib! Oldindan ko‘rishda tugma ustiga sichqonchani olib bor — o‘zgarishni jonli ko‘rasan.',
  },
  pageCaption: { ru: 'Наведи мышку на кнопку в превью, чтобы увидеть эффект:', uz: 'Effektni ko‘rish uchun oldindan ko‘rishda tugma ustiga sichqonchani olib bor:' },
  validate,
};
