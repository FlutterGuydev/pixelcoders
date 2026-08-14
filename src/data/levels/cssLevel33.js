import { extractStyleContent } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);

  const hasDeclaration = styleText && /--[a-z0-9-]+\s*:/i.test(styleText);
  const hasUsage = styleText && /var\(\s*--[a-z0-9-]+/i.test(styleText);

  if (hasDeclaration && hasUsage) return { success: true };

  if (!hasDeclaration) {
    return {
      success: false,
      message: {
        ru: 'Объяви переменную, например --main-color: teal; внутри :root { ... }.',
        uz: 'O‘zgaruvchi e’lon qil, masalan --main-color: teal; ni :root { ... } ichida.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Переменная объявлена. Теперь используй её через var(--main-color) в каком-нибудь свойстве.',
      uz: 'O‘zgaruvchi e’lon qilindi. Endi uni biror xususiyatda var(--main-color) orqali ishlat.',
    },
  };
}

export const cssLevel33 = {
  id: 'css-basics-33',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 33: Переменные CSS', uz: '33-dars: CSS o‘zgaruvchilari' },
  filename: 'style-33.html',
  explanation: {
    ru: 'CSS-переменная объявляется как --имя: значение; (обычно внутри :root, чтобы была доступна везде) и используется через var(--имя). Меняешь значение в одном месте — меняется везде, где переменная используется.',
    uz: 'CSS o‘zgaruvchisi --nom: qiymat; ko‘rinishida e’lon qilinadi (odatda hamma joyda mavjud bo‘lishi uchun :root ichida) va var(--nom) orqali ishlatiladi. Qiymatni bitta joyda o‘zgartirasan — o‘zgaruvchi ishlatilgan hamma joyda o‘zgaradi.',
  },
  example: '<style>\n  :root {\n    --main-color: teal;\n  }\n  h1 {\n    color: var(--main-color);\n  }\n  .box {\n    background-color: var(--main-color);\n  }\n</style>\n<h1>Заголовок</h1>\n<div class="box">Коробка</div>',
  goals: {
    ru: ['Внутри :root объяви переменную --имя: значение;.', 'Используй её через var(--имя) в каком-нибудь свойстве.'],
    uz: [':root ichida --nom: qiymat; o‘zgaruvchisini e’lon qil.', 'Uni biror xususiyatda var(--nom) orqali ishlat.'],
  },
  hints: [':root {\n  --main-color: crimson;\n}', 'h1 {\n  color: var(--main-color);\n}'],
  starterCode: '<style>\n  :root {\n    /* Объяви переменную --main-color здесь */\n  }\n  h1 {\n    /* Используй var(--main-color) здесь */\n  }\n</style>\n<h1>Используй переменную для моего цвета</h1>',
  successMessage: {
    ru: 'Отлично! Теперь ты можешь менять стиль сайта из одного места.',
    uz: 'Ajoyib! Endi sayt uslubini bitta joydan o‘zgartira olasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
