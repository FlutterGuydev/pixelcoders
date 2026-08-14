import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.button', 'transition') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В .button добавь transition, например all 0.3s.',
      uz: '.button ga transition qo‘sh, masalan all 0.3s.',
    },
  };
}

export const cssLevel29 = {
  id: 'css-basics-29',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 29: Плавность transition', uz: '29-dars: transition yumshoqlik' },
  filename: 'style-29.html',
  explanation: {
    ru: 'Без transition изменения (например, при :hover) происходят мгновенно и резко. transition: all 0.3s; говорит браузеру плавно анимировать любое изменение свойств за 0.3 секунды — цвет, размер, положение.',
    uz: 'transition bo‘lmasa, o‘zgarishlar (masalan, :hover paytida) darhol va keskin sodir bo‘ladi. transition: all 0.3s; brauzerga har qanday xususiyat o‘zgarishini 0.3 soniyada yumshoq animatsiya qilishni aytadi — rang, o‘lcham, joylashuv.',
  },
  example: '<style>\n  .button {\n    background-color: teal;\n    transition: all 0.3s;\n  }\n  .button:hover {\n    background-color: crimson;\n  }\n</style>\n<div class="button">Наведи плавно</div>',
  goals: {
    ru: ['В .button добавь transition с любым значением.'],
    uz: ['.button ga istalgan qiymat bilan transition qo‘sh.'],
  },
  hints: ['.button {\n  transition: all 0.3s;\n}'],
  starterCode: '<style>\n  .button {\n    background-color: teal;\n    padding: 10px 20px;\n    color: white;\n    /* Сделай изменения плавными */\n  }\n  .button:hover {\n    background-color: crimson;\n  }\n</style>\n<div class="button">Наведи на меня</div>',
  successMessage: {
    ru: 'Отлично! Наведи мышку на кнопку в превью — почувствуй разницу.',
    uz: 'Ajoyib! Farqni his qilish uchun oldindan ko‘rishda tugma ustiga sichqonchani olib bor.',
  },
  pageCaption: { ru: 'Наведи мышку в превью, чтобы увидеть плавный переход:', uz: 'Yumshoq o‘tishni ko‘rish uchun oldindan ko‘rishda sichqonchani olib bor:' },
  validate,
};
