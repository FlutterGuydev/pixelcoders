import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

const REQUIRED_PROPERTIES = ['background-color', 'border-radius', 'box-shadow', 'padding', 'text-align'];

function validate(code) {
  const styleText = extractStyleContent(code);

  for (const property of REQUIRED_PROPERTIES) {
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

  return { success: true };
}

export const cssLevel15 = {
  id: 'css-basics-15',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 15: Собери свою карточку', uz: '15-dars: Kartochkangni yig‘' },
  filename: 'style-15.html',
  explanation: {
    ru: 'Финальный урок: собери всё, что выучил, в одном правиле .card — фон, скруглённые углы, тень, отступы и выравнивание текста. Именно так стилизуют карточки товаров и профилей на настоящих сайтах.',
    uz: 'Yakuniy dars: o‘rgangan hamma narsangni bitta .card qoidasida yig‘ — fon, yumaloq burchaklar, soya, bo‘shliqlar va matn tekislashi. Haqiqiy saytlarda mahsulot va profil kartochkalari aynan shunday stillanadi.',
  },
  example:
    '<style>\n  .card {\n    background-color: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n    padding: 20px;\n    text-align: center;\n  }\n</style>\n<div class="card">\n  <h3>Готовая карточка</h3>\n  <p>Со всеми стилями сразу.</p>\n</div>',
  goals: {
    ru: [
      'В правиле .card задай background-color.',
      'Добавь border-radius и box-shadow.',
      'Добавь padding и text-align.',
    ],
    uz: [
      '.card qoidasida background-color ber.',
      'border-radius va box-shadow qo‘sh.',
      'padding va text-align qo‘sh.',
    ],
  },
  hints: [
    '.card {',
    '  background-color: white;',
    '  border-radius: 12px;',
    '  box-shadow: 0 4px 12px rgba(0,0,0,0.2);',
    '  padding: 20px;',
    '  text-align: center;',
    '}',
  ],
  starterCode: '<style>\n  .card {\n    /* Собери здесь пять свойств */\n\n  }\n</style>\n<div class="card">\n  <h3>Моя карточка</h3>\n  <p>Стилизуй меня полностью.</p>\n</div>',
  successMessage: {
    ru: 'Ты собрал настоящую стилизованную карточку — со всеми приёмами из этого курса сразу!',
    uz: 'Sen haqiqiy stillashtirilgan kartochka yig‘ding — shu kursdagi barcha usullar bilan birga!',
  },
  pageCaption: { ru: 'Так твоя карточка выглядит в браузере:', uz: 'Brauzerda kartochkang shunday ko‘rinadi:' },
  validate,
};
