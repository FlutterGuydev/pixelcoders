import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);

  for (const property of ['border-radius', 'box-shadow', 'transition']) {
    if (getRuleValue(styleText, '.card', property) == null) {
      return {
        success: false,
        message: {
          ru: `В правиле .card не хватает свойства ${property}.`,
          uz: `.card qoidasida ${property} xususiyati yetishmayapti.`,
        },
      };
    }
  }

  if (!styleText || !/var\(\s*--[a-z0-9-]+/i.test(styleText)) {
    return {
      success: false,
      message: {
        ru: 'Объяви CSS-переменную в :root и используй её через var(--имя) хотя бы раз.',
        uz: ':root ichida CSS o‘zgaruvchisini e’lon qil va uni var(--nom) orqali kamida bir marta ishlat.',
      },
    };
  }

  if (!/@media[^{]*\{/i.test(styleText)) {
    return {
      success: false,
      message: {
        ru: 'Добавь @media (max-width: ...px) { ... } — карточка должна подстраиваться под узкий экран.',
        uz: '@media (max-width: ...px) { ... } qo‘sh — kartochka tor ekranga moslashishi kerak.',
      },
    };
  }

  return { success: true };
}

export const cssLevel38 = {
  id: 'css-basics-38',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 38: Итоговая карточка', uz: '38-dars: Yakuniy kartochka' },
  filename: 'style-38.html',
  explanation: {
    ru: 'Финальный урок этого курса: собери карточку, которая использует всё сразу — скругление, тень, плавный переход, CSS-переменную для цвета и медиазапрос, чтобы карточка подстраивалась под узкий экран. Именно так стилизуют настоящие компоненты сайтов.',
    uz: 'Bu kursning yakuniy darsi: hammasini birdaniga ishlatadigan kartochka yig‘ — yumaloqlash, soya, yumshoq o‘tish, rang uchun CSS o‘zgaruvchisi va tor ekranga moslashish uchun media so‘rov. Haqiqiy sayt komponentlari aynan shunday stillanadi.',
  },
  example:
    '<style>\n  :root {\n    --accent: teal;\n  }\n  .card {\n    background-color: var(--accent);\n    border-radius: 14px;\n    box-shadow: 0 4px 14px rgba(0,0,0,0.25);\n    transition: transform 0.3s;\n    padding: 20px;\n  }\n  .card:hover {\n    transform: scale(1.03);\n  }\n  @media (max-width: 500px) {\n    .card {\n      padding: 12px;\n    }\n  }\n</style>\n<div class="card">Полностью готовая карточка</div>',
  goals: {
    ru: [
      'В .card добавь border-radius, box-shadow и transition.',
      'Объяви переменную в :root и используй var(--имя) в .card.',
      'Добавь @media (max-width: ...px) с правилом для .card.',
    ],
    uz: [
      '.card ga border-radius, box-shadow va transition qo‘sh.',
      ':root da o‘zgaruvchi e’lon qil va .card da var(--nom) ishlat.',
      '.card uchun qoida bilan @media (max-width: ...px) qo‘sh.',
    ],
  },
  hints: [
    ':root {\n  --accent: teal;\n}',
    '.card {\n  background-color: var(--accent);\n  border-radius: 14px;\n  box-shadow: 0 4px 14px rgba(0,0,0,0.25);\n  transition: transform 0.3s;\n}',
    '@media (max-width: 500px) {\n  .card { padding: 10px; }\n}',
  ],
  starterCode: '<style>\n  :root {\n    /* Переменная */\n  }\n  .card {\n    padding: 20px;\n    /* border-radius, box-shadow, transition, var(--...) */\n  }\n  /* @media здесь */\n\n</style>\n<div class="card">Собери меня полностью</div>',
  successMessage: {
    ru: 'Ты прошёл путь от одного свойства color до полностью стилизованного, адаптивного компонента. Это и есть настоящий CSS!',
    uz: 'Sen bitta color xususiyatidan to‘liq stillashtirilgan, moslashuvchan komponentgacha yo‘l bosib o‘tding. Bu haqiqiy CSS!',
  },
  pageCaption: { ru: 'Так твоя карточка выглядит в браузере:', uz: 'Brauzerda kartochkang shunday ko‘rinadi:' },
  validate,
};
