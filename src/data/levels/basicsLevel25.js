import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const detailsInner = extractTagInner(code, 'details');

  if (detailsInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <details> пока нет. Он сворачивает содержимое без единой строки JavaScript.',
        uz: '<details> tegi hali yo‘q. U bitta ham JavaScript satrisiz mazmunni yig‘ib qo‘yadi.',
      },
    };
  }

  const summaryInner = extractTagInner(detailsInner, 'summary');
  if (!summaryInner) {
    return {
      success: false,
      message: {
        ru: 'Внутри <details> добавь <summary> с текстом — это заголовок, на который кликают.',
        uz: '<details> ichiga matnli <summary> qo‘sh — bu bosiladigan sarlavha.',
      },
    };
  }

  const afterSummary = detailsInner.replace(/<summary[^>]*>[\s\S]*?<\/summary>/i, '').trim();
  if (afterSummary.length === 0) {
    return {
      success: false,
      message: {
        ru: '<summary> есть. Теперь добавь что-нибудь после него внутри <details> — то, что будет скрыто.',
        uz: '<summary> bor. Endi <details> ichida undan keyin yashiriladigan narsa qo‘sh.',
      },
    };
  }

  return { success: true };
}

export const basicsLevel25 = {
  id: 'basics-25',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 25: сворачиваемый блок <details>', uz: '25-dars: <details> yig‘iladigan blok' },
  filename: 'lesson-25.html',
  explanation: {
    ru: '<details> создаёт блок, который можно свернуть и развернуть кликом — без единой строчки JavaScript. <summary> — это всегда видимый заголовок; всё остальное внутри <details> прячется, пока по заголовку не кликнут.',
    uz: '<details> bitta ham JavaScript satri yozmasdan bosish orqali yig‘ib-ochish mumkin bo‘lgan blok yaratadi. <summary> — doim ko‘rinadigan sarlavha; <details> ichidagi qolgan hammasi sarlavha bosilmaguncha yashiringan bo‘ladi.',
  },
  example: '<details>\n  <summary>Что внутри?</summary>\n  <p>Секретный текст, который открывается по клику.</p>\n</details>',
  goals: {
    ru: ['Добавь тег <details>.', 'Внутри — <summary> с текстом.', 'После <summary> — ещё что-нибудь (например, <p>).'],
    uz: ['<details> tegini qo‘sh.', 'Ichiga matnli <summary> qo‘sh.', '<summary> dan keyin yana narsa qo‘sh (masalan, <p>).'],
  },
  hints: ['<details>', '  <summary>Заголовок</summary>', '  <p>Скрытый текст</p>', '</details>'],
  starterCode: '<!-- Собери сворачиваемый блок -->\n\n',
  successMessage: {
    ru: 'Отлично! Целый интерактивный виджет — и ни строчки JavaScript.',
    uz: 'Ajoyib! Butun interaktiv vidjet — va bitta ham JavaScript satri yo‘q.',
  },
  pageCaption: { ru: 'Кликни на заголовок в превью, чтобы развернуть:', uz: 'Ochish uchun oldindan ko‘rishda sarlavhani bos:' },
  validate,
};
