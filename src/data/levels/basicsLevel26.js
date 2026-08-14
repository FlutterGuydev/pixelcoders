import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const markInner = extractTagInner(code, 'mark');

  if (markInner) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Нужен тег <mark> с текстом внутри — он подсвечивает текст, как маркер.',
      uz: 'Ichida matni bo‘lgan <mark> tegi kerak — u matnni marker qalamdek belgilaydi.',
    },
  };
}

export const basicsLevel26 = {
  id: 'basics-26',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 26: подсветка <mark>', uz: '26-dars: <mark> belgilash' },
  filename: 'lesson-26.html',
  explanation: {
    ru: '<mark> подсвечивает текст жёлтым фоном, как настоящий текстовый маркер — обычно чтобы отметить самое важное место в тексте, например результат поиска.',
    uz: '<mark> matnni haqiqiy marker qalam kabi sariq fon bilan belgilaydi — odatda matndagi eng muhim joyni, masalan qidiruv natijasini belgilash uchun.',
  },
  example: '<p>Не забудь <mark>сохранить файл</mark> перед выходом.</p>',
  goals: {
    ru: ['Добавь тег <mark> с текстом внутри.'],
    uz: ['Ichida matni bo‘lgan <mark> tegini qo‘sh.'],
  },
  hints: ['<mark>Важное место</mark>'],
  starterCode: '<!-- Подсвети важное слово или фразу -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь выделять текст цветом, а не только жирностью.',
    uz: 'Ajoyib! Endi matnni nafaqat qalinlik, balki rang bilan ham ajratishni bilasan.',
  },
  pageCaption: { ru: 'Так твоя подсветка выглядит на странице:', uz: 'Sahifada belgilashing shunday ko‘rinadi:' },
  validate,
};
