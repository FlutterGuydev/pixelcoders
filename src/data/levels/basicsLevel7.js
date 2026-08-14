import { extractTagInner, countTagWithContent } from '../../lib/basicsCheck';

function validate(code) {
  const ulInner = extractTagInner(code, 'ul');

  if (ulInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <ul> пока нет. Он оборачивает список, а каждый пункт — это <li>.',
        uz: '<ul> tegi hali yo‘q. U ro‘yxatni o‘rab turadi, har bir band esa <li>.',
      },
    };
  }

  const itemCount = countTagWithContent(ulInner, 'li');

  if (itemCount >= 2) return { success: true };

  return {
    success: false,
    message: {
      ru: `Внутри <ul> нужно хотя бы 2 пункта <li> с текстом (сейчас: ${itemCount}).`,
      uz: `<ul> ichida kamida 2 ta matnli <li> bandi kerak (hozir: ${itemCount}).`,
    },
  };
}

export const basicsLevel7 = {
  id: 'basics-7',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 7: Список <ul>/<li>', uz: '7-dars: <ul>/<li> ro‘yxati' },
  filename: 'lesson-7.html',
  explanation: {
    ru: 'Тег <ul> создаёт список, а каждый пункт списка — это отдельный тег <li> внутри него. Можно положить сколько угодно <li> внутрь одного <ul>, как список покупок.',
    uz: '<ul> tegi ro‘yxat yaratadi, ro‘yxatning har bir bandi esa uning ichidagi alohida <li> tegidir. Bitta <ul> ichiga xohlagancha <li> qo‘yish mumkin — xuddi xarid ro‘yxati kabi.',
  },
  example: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>',
  goals: {
    ru: ['Добавь тег <ul>.', 'Положи внутрь хотя бы 2 пункта <li> с текстом.'],
    uz: ['<ul> tegini qo‘sh.', 'Ichiga kamida 2 ta matnli <li> bandi qo‘y.'],
  },
  hints: ['<ul>', '  <li>Первый пункт</li>', '  <li>Второй пункт</li>', '</ul>'],
  starterCode: '<!-- Составь список из хотя бы двух пунктов -->\n\n',
  successMessage: {
    ru: 'Отлично! Так строятся списки — от меню сайта до списка покупок.',
    uz: 'Ajoyib! Ro‘yxatlar shunday quriladi — sayt menyusidan tortib xarid ro‘yxatigacha.',
  },
  pageCaption: { ru: 'Так твой список выглядит на странице:', uz: 'Sahifada ro‘yxating shunday ko‘rinadi:' },
  validate,
};
