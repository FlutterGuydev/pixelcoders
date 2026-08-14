import { hasTag, extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const inner = extractTagInner(code, 'h1');
  if (inner) return { success: true };

  if (!hasTag(code, 'h1')) {
    return {
      success: false,
      message: {
        ru: 'Тега <h1> пока нет. Попробуй написать: <h1>Привет!</h1>',
        uz: '<h1> tegi hali yo‘q. Shuni yozib ko‘r: <h1>Salom!</h1>',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Тег <h1> есть, но внутри него нет текста. Напиши что-нибудь между <h1> и </h1>.',
      uz: '<h1> tegi bor, lekin ichida matn yo‘q. <h1> va </h1> orasiga biror so‘z yoz.',
    },
  };
}

export const basicsLevel1 = {
  id: 'basics-1',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 1: Заголовок <h1>', uz: '1-dars: <h1> sarlavha' },
  filename: 'lesson-1.html',
  explanation: {
    ru: 'Тег <h1> создаёт самый крупный заголовок на странице — обычно один на всю страницу, как название книги на обложке. Открывающий тег <h1> и закрывающий </h1> оборачивают текст заголовка.',
    uz: '<h1> tegi sahifadagi eng katta sarlavhani yaratadi — odatda sahifada bittadan, xuddi kitob muqovasidagi nom kabi. Ochuvchi <h1> va yopuvchi </h1> teglari sarlavha matnini o‘rab turadi.',
  },
  example: '<h1>Salom, dunyo!</h1>',
  goals: {
    ru: ['Добавь тег <h1>.', 'Напиши внутри него любой текст — это и будет заголовок.'],
    uz: ['<h1> tegini qo‘sh.', 'Ichiga istalgan matn yoz — bu sarlavha bo‘ladi.'],
  },
  hints: ['<h1>Твой текст</h1>'],
  starterCode: '<!-- Напиши свой первый заголовок ниже -->\n\n',
  successMessage: {
    ru: 'Отлично! Так и создаётся заголовок первого уровня.',
    uz: 'Ajoyib! Birinchi darajali sarlavha shunday yaratiladi.',
  },
  pageCaption: { ru: 'Так твоя строка выглядит на странице:', uz: 'Sahifada qatoring shunday ko‘rinadi:' },
  validate,
};
