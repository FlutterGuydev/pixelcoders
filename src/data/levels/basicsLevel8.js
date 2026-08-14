import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  if (!/<!doctype\s+html\s*>/i.test(code)) {
    return {
      success: false,
      message: {
        ru: 'Каждая настоящая HTML-страница начинается со строки <!DOCTYPE html> — она говорит браузеру, что это HTML5.',
        uz: 'Har qanday haqiqiy HTML sahifa <!DOCTYPE html> qatoridan boshlanadi — u brauzerga bu HTML5 ekanini aytadi.',
      },
    };
  }

  const htmlInner = extractTagInner(code, 'html');
  if (htmlInner == null) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <html>, который оборачивает всю страницу.',
        uz: 'Butun sahifani o‘rab turadigan <html> tegi kerak.',
      },
    };
  }

  const headInner = extractTagInner(htmlInner, 'head');
  const titleInner = headInner != null ? extractTagInner(headInner, 'title') : null;
  if (!titleInner) {
    return {
      success: false,
      message: {
        ru: 'Внутри <html> нужен <head>, а внутри него — <title> с названием страницы (оно видно на вкладке браузера).',
        uz: '<html> ichida <head> kerak, uning ichida esa — sahifa nomi bilan <title> (u brauzer varag‘ida ko‘rinadi).',
      },
    };
  }

  const bodyInner = extractTagInner(htmlInner, 'body');
  if (bodyInner == null) {
    return {
      success: false,
      message: {
        ru: 'Внутри <html>, после <head>, нужен <body> — там живёт всё, что видит посетитель.',
        uz: '<html> ichida, <head> dan keyin, <body> kerak — tashrif buyuruvchi ko‘radigan hamma narsa shu yerda.',
      },
    };
  }

  const h1Inner = extractTagInner(bodyInner, 'h1');
  const pInner = extractTagInner(bodyInner, 'p');

  if (h1Inner && pInner) return { success: true };

  if (!h1Inner) {
    return {
      success: false,
      message: {
        ru: 'Внутри <body> добавь <h1> — заголовок твоего сайта.',
        uz: '<body> ichiga <h1> qo‘sh — saytingning sarlavhasi.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Заголовок есть. Теперь добавь в <body> хотя бы один <p> с текстом о сайте.',
      uz: 'Sarlavha bor. Endi <body> ichiga sayt haqida kamida bitta matnli <p> qo‘sh.',
    },
  };
}

export const basicsLevel8 = {
  id: 'basics-8',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 8: Собери свой сайт', uz: '8-dars: Saytingni yig‘' },
  filename: 'my-site.html',
  explanation: {
    ru: 'Ты уже знаешь все нужные теги. Настоящая HTML-страница — это единый документ: <!DOCTYPE html> сверху, затем <html>, внутри него <head> с <title> (имя вкладки) и <body> — всё, что видит посетитель. Собери первую полноценную страницу из того, что ты выучил.',
    uz: 'Kerakli barcha teglarni allaqachon bilasan. Haqiqiy HTML sahifa — yagona hujjat: yuqorida <!DOCTYPE html>, keyin <html>, uning ichida <title> (varaq nomi) bilan <head> va tashrif buyuruvchi ko‘radigan hamma narsa bo‘lgan <body>. O‘rganganlaringdan birinchi to‘liq sahifani yig‘.',
  },
  example:
    '<!DOCTYPE html>\n<html>\n<head>\n  <title>Мой сайт</title>\n</head>\n<body>\n  <h1>Привет, мир!</h1>\n  <p>Это моя первая настоящая страница.</p>\n</body>\n</html>',
  goals: {
    ru: [
      'Начни с <!DOCTYPE html>.',
      'Добавь <html>, а внутри — <head> с <title>.',
      'Добавь <body> с <h1> и хотя бы одним <p>.',
    ],
    uz: [
      '<!DOCTYPE html> bilan boshla.',
      '<html> qo‘sh, ichiga esa — <title> bilan <head>.',
      '<h1> va kamida bitta <p> bilan <body> qo‘sh.',
    ],
  },
  hints: [
    '<!DOCTYPE html>',
    '<html>',
    '<head><title>Название</title></head>',
    '<body>',
    '  <h1>Заголовок</h1>',
    '  <p>Текст</p>',
    '</body>',
    '</html>',
  ],
  starterCode: '<!-- Собери полноценную HTML-страницу: doctype, html, head+title, body -->\n\n',
  successMessage: {
    ru: 'Это настоящая веб-страница! Ты прошёл путь от одного тега <h1> до целого сайта.',
    uz: 'Bu haqiqiy veb-sahifa! Sen bitta <h1> tegidan butun saytgacha yo‘l bosib o‘tding.',
  },
  pageCaption: { ru: 'Так твой сайт выглядит в браузере:', uz: 'Brauzerda sayting shunday ko‘rinadi:' },
  validate,
};
