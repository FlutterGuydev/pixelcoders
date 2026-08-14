import { hasTag } from '../../lib/basicsCheck';

function validate(code) {
  const hasBr = hasTag(code, 'br');
  const hasHr = hasTag(code, 'hr');

  if (hasBr && hasHr) return { success: true };

  if (!hasBr) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <br> — он переносит текст на новую строку прямо внутри абзаца.',
        uz: '<br> tegi kerak — u abzats ichida matnni yangi qatorga o‘tkazadi.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: '<br> есть. Теперь добавь <hr> — он рисует горизонтальную линию-разделитель.',
      uz: '<br> bor. Endi <hr> qo‘sh — u gorizontal ajratuvchi chiziq chizadi.',
    },
  };
}

export const basicsLevel16 = {
  id: 'basics-16',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 16: <br> и <hr>', uz: '16-dars: <br> va <hr>' },
  filename: 'lesson-16.html',
  explanation: {
    ru: 'Иногда нужен перенос строки прямо посреди текста — для этого есть <br> (line break). А чтобы отделить один блок содержимого от другого линией, есть <hr> (horizontal rule). У обоих тегов нет содержимого и закрывающего тега.',
    uz: 'Ba’zan matn o‘rtasida qator ko‘chirish kerak bo‘ladi — buning uchun <br> (line break) bor. Bir mazmun blokini boshqasidan chiziq bilan ajratish uchun esa <hr> (horizontal rule) bor. Ikkala tegning ham mazmuni va yopuvchi tegi yo‘q.',
  },
  example: '<p>Первая строка.<br>Вторая строка.</p>\n<hr>\n<p>Текст после разделителя.</p>',
  goals: {
    ru: ['Добавь <br> внутри какого-нибудь текста.', 'Добавь <hr> как разделитель.'],
    uz: ['Biror matn ichiga <br> qo‘sh.', 'Ajratuvchi sifatida <hr> qo‘sh.'],
  },
  hints: ['<p>Строка один.<br>Строка два.</p>', '<hr>'],
  starterCode: '<!-- Добавь перенос строки внутри текста и разделитель между блоками -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь управлять переносами и разделителями.',
    uz: 'Ajoyib! Endi qator ko‘chirish va ajratgichlarni boshqarishni bilasan.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
