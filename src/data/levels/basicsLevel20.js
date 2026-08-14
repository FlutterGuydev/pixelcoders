import { extractTagInner, hasAttr } from '../../lib/basicsCheck';

function countLinksWithText(html) {
  const re = /<a\s+[^>]*href\s*=\s*["'][^"']+["'][^>]*>([^<]*)<\/a>/gi;
  return [...html.matchAll(re)].filter((m) => m[1].trim().length > 0).length;
}

function validate(code) {
  if (!/<!doctype\s+html\s*>/i.test(code)) {
    return { success: false, message: { ru: 'Начни с <!DOCTYPE html>.', uz: '<!DOCTYPE html> bilan boshla.' } };
  }

  const htmlInner = extractTagInner(code, 'html');
  if (htmlInner == null) {
    return { success: false, message: { ru: 'Нужен тег <html>.', uz: '<html> tegi kerak.' } };
  }

  const headInner = extractTagInner(htmlInner, 'head');
  const titleInner = headInner != null ? extractTagInner(headInner, 'title') : null;
  if (!titleInner) {
    return { success: false, message: { ru: 'Нужен <head> с <title>.', uz: '<title> bilan <head> kerak.' } };
  }

  const bodyInner = extractTagInner(htmlInner, 'body');
  if (bodyInner == null) {
    return { success: false, message: { ru: 'Нужен <body>.', uz: '<body> kerak.' } };
  }

  const headerInner = extractTagInner(bodyInner, 'header');
  if (!headerInner) {
    return {
      success: false,
      message: { ru: 'В <body> добавь <header> с текстом.', uz: '<body> ichiga matnli <header> qo‘sh.' },
    };
  }

  const navInner = extractTagInner(bodyInner, 'nav');
  const linkCount = navInner != null ? countLinksWithText(navInner) : 0;
  if (linkCount < 2) {
    return {
      success: false,
      message: {
        ru: 'В <body> добавь <nav> с хотя бы 2 ссылками <a href="...">.',
        uz: '<body> ichiga kamida 2 ta <a href="..."> havolasi bilan <nav> qo‘sh.',
      },
    };
  }

  const mainInner = extractTagInner(bodyInner, 'main');
  if (mainInner == null) {
    return { success: false, message: { ru: 'В <body> добавь <main>.', uz: '<body> ichiga <main> qo‘sh.' } };
  }

  const figureInner = extractTagInner(mainInner, 'figure');
  const hasImg = figureInner != null && hasAttr(figureInner, 'img', 'src');
  const captionInner = figureInner != null ? extractTagInner(figureInner, 'figcaption') : null;
  if (!hasImg || !captionInner) {
    return {
      success: false,
      message: {
        ru: 'В <main> добавь <figure> с <img src="..."> и <figcaption>.',
        uz: '<main> ichiga src bilan <img> va <figcaption> bo‘lgan <figure> qo‘sh.',
      },
    };
  }

  const formInner = extractTagInner(mainInner, 'form');
  const hasInputType = formInner != null && hasAttr(formInner, 'input', 'type');
  const buttonInner = formInner != null ? extractTagInner(formInner, 'button') : null;
  if (!hasInputType || !buttonInner) {
    return {
      success: false,
      message: {
        ru: 'В <main> добавь <form> с <input type="..."> и <button>.',
        uz: '<main> ichiga type bilan <input> va <button> bo‘lgan <form> qo‘sh.',
      },
    };
  }

  const footerInner = extractTagInner(bodyInner, 'footer');
  if (!footerInner) {
    return { success: false, message: { ru: 'В <body> добавь <footer> с текстом.', uz: '<body> ichiga matnli <footer> qo‘sh.' } };
  }

  return { success: true };
}

export const basicsLevel20 = {
  id: 'basics-20',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 20: Собери портфолио', uz: '20-dars: Portfolio yig‘' },
  filename: 'portfolio.html',
  explanation: {
    ru: 'Финальный урок: собери всё, что ты выучил, в одну настоящую страницу-портфолио — с шапкой, меню, картинкой с подписью, формой обратной связи и подвалом. Именно так устроены настоящие сайты в интернете.',
    uz: 'Yakuniy dars: o‘rgangan hamma narsangni bitta haqiqiy portfolio-sahifaga yig‘: sarlavha, menyu, izohli rasm, aloqa shakli va pastki qism bilan. Internetdagi haqiqiy saytlar aynan shunday tuzilgan.',
  },
  example:
    '<!DOCTYPE html>\n<html>\n<head><title>Моё портфолио</title></head>\n<body>\n  <header><h1>Моё портфолио</h1></header>\n  <nav>\n    <a href="#about">Обо мне</a>\n    <a href="#contact">Контакты</a>\n  </nav>\n  <main>\n    <figure>\n      <img src="pic.jpg" alt="Моё фото">\n      <figcaption>Это я</figcaption>\n    </figure>\n    <form>\n      <input type="text">\n      <button>Написать мне</button>\n    </form>\n  </main>\n  <footer><p>© Моё портфолио</p></footer>\n</body>\n</html>',
  goals: {
    ru: [
      'Собери полный документ: doctype, html, head с title.',
      'В <body> добавь <header>, <nav> (2 ссылки), <main> и <footer>.',
      'В <main> добавь <figure> (картинка + подпись) и <form> (поле + кнопка).',
    ],
    uz: [
      'To‘liq hujjat yig‘: doctype, html, title bilan head.',
      '<body> ichiga <header>, <nav> (2 havola), <main> va <footer> qo‘sh.',
      '<main> ichiga <figure> (rasm + izoh) va <form> (maydon + tugma) qo‘sh.',
    ],
  },
  hints: [
    '<!DOCTYPE html>',
    '<html><head><title>Портфолио</title></head>',
    '<body>',
    '  <header>Шапка</header>',
    '  <nav><a href="#a">Ссылка 1</a><a href="#b">Ссылка 2</a></nav>',
    '  <main>',
    '    <figure><img src="pic.jpg" alt="описание"><figcaption>Подпись</figcaption></figure>',
    '    <form><input type="text"><button>Отправить</button></form>',
    '  </main>',
    '  <footer>Подвал</footer>',
    '</body></html>',
  ],
  starterCode: '<!-- Собери полное портфолио: header, nav, main (figure + form), footer -->\n\n',
  successMessage: {
    ru: 'Настоящее портфолио! Ты прошёл путь от одного <h1> до целого сайта со всеми деталями.',
    uz: 'Haqiqiy portfolio! Sen bitta <h1> tegidan barcha detallari bilan butun saytgacha yo‘l bosib o‘tding.',
  },
  pageCaption: { ru: 'Так твоё портфолио выглядит в браузере:', uz: 'Brauzerda portfolio ing shunday ko‘rinadi:' },
  validate,
};
