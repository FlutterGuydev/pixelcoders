import { extractStyleContent, getRuleBlock, getDeclaration } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const rule = getRuleBlock(styleText, '.box::before');

  if (!rule) {
    return {
      success: false,
      message: {
        ru: 'Добавь правило .box::before { ... }.',
        uz: '.box::before { ... } qoidasini qo‘sh.',
      },
    };
  }

  if (getDeclaration(rule, 'content') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Правило есть, но без content оно не покажется. Добавь content: "..."; внутри.',
      uz: 'Qoida bor, lekin content bo‘lmasa u ko‘rinmaydi. Ichiga content: "..."; qo‘sh.',
    },
  };
}

export const cssLevel32 = {
  id: 'css-basics-32',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 32: Псевдоэлемент ::before', uz: '32-dars: ::before psevdo-elementi' },
  filename: 'style-32.html',
  explanation: {
    ru: '::before добавляет «виртуальный» элемент прямо перед содержимым — без нового тега в HTML. Он обязательно нуждается в свойстве content, даже пустом (content: "";), иначе не появится. Часто используют для декоративных значков.',
    uz: '::before HTML’da yangi teg ochmasdan, mazmundan oldin «virtual» element qo‘shadi. Unga content xususiyati shart, hatto bo‘sh bo‘lsa ham (content: "";), aks holda ko‘rinmaydi. Ko‘pincha bezak belgilari uchun ishlatiladi.',
  },
  example: '<style>\n  .box::before {\n    content: "★ ";\n    color: gold;\n  }\n</style>\n<div class="box">Избранное</div>',
  goals: {
    ru: ['Добавь правило .box::before.', 'Задай в нём content с любым текстом.'],
    uz: ['.box::before qoidasini qo‘sh.', 'Unda istalgan matn bilan content ber.'],
  },
  hints: ['.box::before {\n  content: "→ ";\n}'],
  starterCode: '<style>\n  /* Добавь виртуальный значок перед текстом */\n\n</style>\n<div class="box">Важное сообщение</div>',
  successMessage: {
    ru: 'Отлично! Ты добавил содержимое, которого нет в HTML.',
    uz: 'Ajoyib! HTML’da yo‘q mazmunni qo‘shding.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
