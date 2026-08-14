import { hasTag, extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const strongInner = extractTagInner(code, 'strong');
  const emInner = extractTagInner(code, 'em');

  if (strongInner && emInner) return { success: true };

  if (!hasTag(code, 'strong') || !strongInner) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <strong> с текстом внутри — он делает текст жирным и важным.',
        uz: 'Ichida matni bo‘lgan <strong> tegi kerak — u matnni qalin va muhim qiladi.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Хорошо, <strong> есть. Теперь добавь <em> с текстом — он делает текст курсивом.',
      uz: 'Yaxshi, <strong> bor. Endi matnli <em> qo‘sh — u matnni qiyshiq qiladi.',
    },
  };
}

export const basicsLevel9 = {
  id: 'basics-9',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 9: <strong> и <em>', uz: '9-dars: <strong> va <em>' },
  filename: 'lesson-9.html',
  explanation: {
    ru: 'Внутри текста иногда нужно выделить отдельные слова. Тег <strong> делает текст жирным и означает «это важно». Тег <em> делает текст курсивом и означает «это с ударением». Оба тега оборачивают только часть текста, а не весь абзац.',
    uz: 'Ba’zan matn ichida ayrim so‘zlarni ajratish kerak bo‘ladi. <strong> tegi matnni qalin qiladi va «bu muhim» degan ma’noni bildiradi. <em> tegi matnni qiyshiq qiladi va «bunga urg‘u beriladi» degan ma’noni bildiradi. Ikkalasi ham matnning faqat bir qismini o‘rab turadi, butun abzatsni emas.',
  },
  example: '<p>Это <strong>очень важно</strong> и это <em>стоит запомнить</em>.</p>',
  goals: {
    ru: ['Добавь <strong> с текстом внутри.', 'Добавь <em> с текстом внутри.'],
    uz: ['Ichida matni bo‘lgan <strong> qo‘sh.', 'Ichida matni bo‘lgan <em> qo‘sh.'],
  },
  hints: ['<strong>Важный текст</strong>', '<em>Текст с ударением</em>'],
  starterCode: '<!-- Выдели что-нибудь жирным и что-нибудь курсивом -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь выделять отдельные слова в тексте.',
    uz: 'Ajoyib! Endi matn ichidagi alohida so‘zlarni ajratishni bilasan.',
  },
  pageCaption: { ru: 'Так твоё выделение выглядит на странице:', uz: 'Sahifada ajratilgan matning shunday ko‘rinadi:' },
  validate,
};
