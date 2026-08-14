import { extractTagInner, hasTag } from '../../lib/basicsCheck';

function validate(code) {
  const headInner = extractTagInner(code, 'head');

  if (headInner == null) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <head> — <meta> живёт внутри него.',
        uz: '<head> tegi kerak — <meta> uning ichida yashaydi.',
      },
    };
  }

  if (hasTag(headInner, 'meta')) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Внутри <head> добавь хотя бы один тег <meta>, например с атрибутом charset.',
      uz: '<head> ichiga kamida bitta <meta> tegini qo‘sh, masalan charset atributi bilan.',
    },
  };
}

export const basicsLevel21 = {
  id: 'basics-21',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 21: <meta> в <head>', uz: '21-dars: <head> ichida <meta>' },
  filename: 'lesson-21.html',
  explanation: {
    ru: '<meta> — тег с настройками страницы, о которых знает браузер, но не видит посетитель. charset="UTF-8" говорит, в какой кодировке текст (чтобы буквы не превращались в кракозябры). meta с name="viewport" говорит, как страница подстраивается под экран телефона. У <meta> нет содержимого и закрывающего тега.',
    uz: '<meta> — sahifaning brauzer biladigan, lekin tashrif buyuruvchi ko‘rmaydigan sozlamalari haqidagi teg. charset="UTF-8" matn qanday kodировкada ekanini bildiradi (harflar chalkash belgilarga aylanmasligi uchun). name="viewport" bilan meta esa sahifa telefon ekraniga qanday moslashishini bildiradi. <meta> ning mazmuni va yopuvchi tegi yo‘q.',
  },
  example: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width">\n  <title>Мой сайт</title>\n</head>',
  goals: {
    ru: ['Добавь <head>.', 'Внутри добавь хотя бы один тег <meta>.'],
    uz: ['<head> qo‘sh.', 'Ichiga kamida bitta <meta> tegini qo‘sh.'],
  },
  hints: ['<head>', '  <meta charset="UTF-8">', '</head>'],
  starterCode: '<!-- Добавь head с тегом meta внутри -->\n\n',
  successMessage: {
    ru: 'Отлично! Это невидимая, но важная часть каждой настоящей страницы.',
    uz: 'Ajoyib! Bu har bir haqiqiy sahifaning ko‘rinmas, lekin muhim qismi.',
  },
  pageCaption: {
    ru: '<meta> не отображается — но браузер его читает.',
    uz: '<meta> ko‘rinmaydi — lekin brauzer uni o‘qiydi.',
  },
  validate,
};
