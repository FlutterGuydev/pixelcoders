import { extractStyleContent } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (styleText && /@media[^{]*\{/i.test(styleText)) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Добавь @media (max-width: 600px) { ... } с каким-нибудь правилом внутри.',
      uz: 'Ichida biror qoida bilan @media (max-width: 600px) { ... } qo‘sh.',
    },
  };
}

export const cssLevel34 = {
  id: 'css-basics-34',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 34: Медиазапросы @media', uz: '34-dars: @media so‘rovlari' },
  filename: 'style-34.html',
  explanation: {
    ru: '@media позволяет применять CSS только при определённых условиях — чаще всего по ширине экрана. @media (max-width: 600px) { ... } — стили сработают, только если экран уже 600px. Это основа адаптивной вёрстки для телефонов.',
    uz: '@media CSS ni faqat aniq shartlarda qo‘llash imkonini beradi — ko‘pincha ekran kengligi bo‘yicha. @media (max-width: 600px) { ... } — stillar faqat ekran 600px dan tor bo‘lsa ishlaydi. Bu telefonlar uchun moslashuvchan dizaynning asosi.',
  },
  example: '<style>\n  .box {\n    background-color: teal;\n  }\n  @media (max-width: 600px) {\n    .box {\n      background-color: crimson;\n    }\n  }\n</style>\n<div class="box">Смени размер окна превью</div>',
  goals: {
    ru: ['Добавь @media (max-width: ...px) { ... }.', 'Внутри него напиши хотя бы одно CSS-правило.'],
    uz: ['@media (max-width: ...px) { ... } qo‘sh.', 'Ichiga kamida bitta CSS qoidasi yoz.'],
  },
  hints: ['@media (max-width: 500px) {\n  .box {\n    background-color: crimson;\n  }\n}'],
  starterCode: '<style>\n  .box {\n    background-color: teal;\n    padding: 20px;\n  }\n  /* Добавь @media здесь */\n\n</style>\n<div class="box">На узком экране я стану другого цвета</div>',
  successMessage: {
    ru: 'Отлично! Это первый шаг к адаптивным сайтам, которые подстраиваются под экран.',
    uz: 'Ajoyib! Bu ekranga moslashadigan saytlar tomon birinchi qadam.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
