import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  if (!/<!doctype\s+html\s*>/i.test(code)) {
    return {
      success: false,
      message: {
        ru: 'Начни с <!DOCTYPE html>, как в настоящей странице.',
        uz: 'Haqiqiy sahifadagidek <!DOCTYPE html> bilan boshla.',
      },
    };
  }

  const htmlInner = extractTagInner(code, 'html');
  if (htmlInner == null) {
    return {
      success: false,
      message: { ru: 'Нужен тег <html>, который оборачивает всю страницу.', uz: 'Butun sahifani o‘rab turadigan <html> tegi kerak.' },
    };
  }

  const headInner = extractTagInner(htmlInner, 'head');
  const titleInner = headInner != null ? extractTagInner(headInner, 'title') : null;
  if (!titleInner) {
    return {
      success: false,
      message: {
        ru: 'Внутри <html> нужен <head> с <title>.',
        uz: '<html> ichida <title> bilan <head> kerak.',
      },
    };
  }

  const bodyInner = extractTagInner(htmlInner, 'body');
  if (bodyInner == null) {
    return {
      success: false,
      message: { ru: 'Нужен <body> — там будет вся структура сайта.', uz: 'Sayt tuzilmasi joylashadigan <body> kerak.' },
    };
  }

  const headerInner = extractTagInner(bodyInner, 'header');
  const mainInner = extractTagInner(bodyInner, 'main');
  const footerInner = extractTagInner(bodyInner, 'footer');

  if (headerInner && mainInner && footerInner) return { success: true };

  if (!headerInner) {
    return {
      success: false,
      message: {
        ru: 'Добавь в <body> тег <header> с текстом — например, название сайта.',
        uz: '<body> ichiga matnli <header> qo‘sh — masalan, sayt nomi.',
      },
    };
  }

  if (!mainInner) {
    return {
      success: false,
      message: {
        ru: 'Header есть. Теперь добавь <main> с основным содержимым страницы.',
        uz: 'Header bor. Endi sahifaning asosiy matni bilan <main> qo‘sh.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Почти готово. Добавь <footer> с текстом внизу страницы.',
      uz: 'Deyarli tayyor. Sahifa pastiga matnli <footer> qo‘sh.',
    },
  };
}

export const basicsLevel14 = {
  id: 'basics-14',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 14: Улучши свой сайт', uz: '14-dars: Saytingni yaxshila' },
  filename: 'my-site-v2.html',
  explanation: {
    ru: 'Раньше внутри <body> ты клал всё подряд. У HTML есть смысловые (семантические) теги для частей страницы: <header> — шапка сверху, <main> — основное содержимое, <footer> — подвал внизу. Они работают как обычные <div>, но их названия сами объясняют структуру страницы — и человеку, и браузеру.',
    uz: 'Ilgari <body> ichiga hammasini ketma-ket qo‘yardik. HTML’da sahifa qismlari uchun ma’noli (semantik) teglar bor: <header> — yuqoridagi sarlavha qismi, <main> — asosiy mazmun, <footer> — pastdagi qism. Ular oddiy <div> kabi ishlaydi, lekin nomlarining o‘zi sahifa tuzilmasini tushuntirib turadi — ham odamga, ham brauzerga.',
  },
  example:
    '<!DOCTYPE html>\n<html>\n<head>\n  <title>Мой сайт</title>\n</head>\n<body>\n  <header><h1>Мой сайт</h1></header>\n  <main><p>Здесь основной текст.</p></main>\n  <footer><p>© Мой сайт</p></footer>\n</body>\n</html>',
  goals: {
    ru: [
      'Собери полный документ: <!DOCTYPE html>, <html>, <head> с <title>.',
      'В <body> добавь <header>, <main> и <footer> — в каждом хотя бы немного текста.',
    ],
    uz: [
      'To‘liq hujjat yig‘: <!DOCTYPE html>, <html>, <title> bilan <head>.',
      '<body> ichiga <header>, <main> va <footer> qo‘sh — har birida ozgina matn bo‘lsin.',
    ],
  },
  hints: [
    '<!DOCTYPE html>',
    '<html><head><title>Название</title></head>',
    '<body>',
    '  <header>Шапка</header>',
    '  <main>Основной текст</main>',
    '  <footer>Подвал</footer>',
    '</body></html>',
  ],
  starterCode: '<!-- Пересобери сайт с header, main и footer внутри body -->\n\n',
  successMessage: {
    ru: 'Это уже настоящая структура сайта — так строят реальные страницы в интернете.',
    uz: 'Bu allaqachon haqiqiy sayt tuzilmasi — internetdagi haqiqiy sahifalar shunday quriladi.',
  },
  pageCaption: { ru: 'Так твой сайт выглядит в браузере:', uz: 'Brauzerda sayting shunday ko‘rinadi:' },
  validate,
};
