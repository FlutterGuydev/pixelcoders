import { extractTagInner, hasAttr, hasTag, countTagWithContent } from '../../lib/basicsCheck';

function countLinksWithText(html) {
  const re = /<a\s+[^>]*href\s*=\s*["'][^"']+["'][^>]*>([^<]*)<\/a>/gi;
  return [...html.matchAll(re)].filter((m) => m[1].trim().length > 0).length;
}

function hasList(html) {
  const ulInner = extractTagInner(html, 'ul');
  const olInner = extractTagInner(html, 'ol');
  const ulCount = ulInner ? countTagWithContent(ulInner, 'li') : 0;
  const olCount = olInner ? countTagWithContent(olInner, 'li') : 0;
  return ulCount >= 2 || olCount >= 2;
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

  if (!hasTag(headInner, 'meta')) {
    return {
      success: false,
      message: { ru: 'Добавь в <head> хотя бы один <meta>.', uz: '<head> ichiga kamida bitta <meta> qo‘sh.' },
    };
  }

  const bodyInner = extractTagInner(htmlInner, 'body');
  if (bodyInner == null) {
    return { success: false, message: { ru: 'Нужен <body>.', uz: '<body> kerak.' } };
  }

  const headerInner = extractTagInner(bodyInner, 'header');
  if (!headerInner) {
    return { success: false, message: { ru: 'В <body> добавь <header> с текстом.', uz: '<body> ichiga matnli <header> qo‘sh.' } };
  }

  const navInner = extractTagInner(bodyInner, 'nav');
  if (navInner == null || countLinksWithText(navInner) < 2) {
    return {
      success: false,
      message: {
        ru: 'В <body> добавь <nav> с хотя бы 2 ссылками.',
        uz: '<body> ichiga kamida 2 ta havolasi bilan <nav> qo‘sh.',
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

  if (!hasList(mainInner)) {
    return {
      success: false,
      message: {
        ru: 'В <main> добавь список — <ul> или <ol> с хотя бы 2 пунктами.',
        uz: '<main> ichiga royxat qo‘sh — kamida 2 bandli <ul> yoki <ol>.',
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

export const basicsLevel24 = {
  id: 'basics-24',
  trackId: 'basics',
  isExam: true,
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Итоговый экзамен: построй свой сайт', uz: 'Yakuniy imtihon: saytingni qur' },
  filename: 'exam.html',
  goals: {
    ru: [
      'Полный документ: doctype, html, head (title + meta).',
      'В <body>: header, nav (минимум 2 ссылки), main, footer.',
      'В <main>: figure (картинка + подпись), список (ul или ol, минимум 2 пункта), form (поле + кнопка).',
      'Никаких примеров и подсказок с готовым кодом — собери всё сам, используя то, что выучил.',
    ],
    uz: [
      'To‘liq hujjat: doctype, html, head (title + meta).',
      '<body> ichida: header, nav (kamida 2 havola), main, footer.',
      '<main> ichida: figure (rasm + izoh), ro‘yxat (ul yoki ol, kamida 2 band), form (maydon + tugma).',
      'Tayyor kod bilan misol va maslahat yo‘q — o‘rganganlaring bilan hammasini o‘zing yig‘.',
    ],
  },
  hints: [
    'doctype, html, head (title, meta), body',
    'body: header, nav, main, footer',
    'main: figure (img + figcaption), список (ul/ol), form (input + button)',
  ],
  starterCode: '<!-- Это экзамен: собери полную страницу по требованиям слева -->\n\n',
  successMessage: {
    ru: 'Экзамен сдан! Ты собрал настоящую страницу со всеми частями настоящего сайта.',
    uz: 'Imtihon topshirildi! Sen haqiqiy sayt barcha qismlari bilan haqiqiy sahifa yig‘ding.',
  },
  pageCaption: { ru: 'Так твой сайт выглядит в браузере:', uz: 'Brauzerda sayting shunday ko‘rinadi:' },
  validate,
};
