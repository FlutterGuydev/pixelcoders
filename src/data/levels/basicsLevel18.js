import { extractTagInner } from '../../lib/basicsCheck';

const LINKS_NEEDED = 2;

function countLinksWithText(html) {
  const re = /<a\s+[^>]*href\s*=\s*["'][^"']+["'][^>]*>([^<]*)<\/a>/gi;
  return [...html.matchAll(re)].filter((m) => m[1].trim().length > 0).length;
}

function validate(code) {
  const navInner = extractTagInner(code, 'nav');

  if (navInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <nav> пока нет. Он группирует ссылки для навигации по сайту.',
        uz: '<nav> tegi hali yo‘q. U sayt bo‘ylab yurish uchun havolalarni guruhlaydi.',
      },
    };
  }

  const linkCount = countLinksWithText(navInner);

  if (linkCount >= LINKS_NEEDED) return { success: true };

  return {
    success: false,
    message: {
      ru: `Внутри <nav> нужно хотя бы ${LINKS_NEEDED} ссылки <a href="..."> с текстом (сейчас: ${linkCount}).`,
      uz: `<nav> ichida kamida ${LINKS_NEEDED} ta matnli <a href="..."> havolasi kerak (hozir: ${linkCount}).`,
    },
  };
}

export const basicsLevel18 = {
  id: 'basics-18',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 18: Меню <nav>', uz: '18-dars: <nav> menyusi' },
  filename: 'lesson-18.html',
  explanation: {
    ru: '<nav> — семантический тег для группы ссылок, по которым перемещаются по сайту, как меню сверху страницы. Внутри него обычно лежат несколько <a href="...">.',
    uz: '<nav> — sayt bo‘ylab yurish uchun havolalar guruhini bildiruvchi semantik teg, xuddi sahifa yuqorisidagi menyu kabi. Uning ichida odatda bir nechta <a href="..."> bo‘ladi.',
  },
  example: '<nav>\n  <a href="#home">Главная</a>\n  <a href="#about">О нас</a>\n</nav>',
  goals: {
    ru: ['Добавь тег <nav>.', `Положи внутрь хотя бы ${LINKS_NEEDED} ссылки <a href="...">.`],
    uz: ['<nav> tegini qo‘sh.', `Ichiga kamida ${LINKS_NEEDED} ta <a href="..."> havolasini qo‘y.`],
  },
  hints: ['<nav>', '  <a href="#home">Главная</a>', '  <a href="#about">О нас</a>', '</nav>'],
  starterCode: '<!-- Собери меню из хотя бы двух ссылок -->\n\n',
  successMessage: {
    ru: 'Отлично! Так на сайтах строят меню для перехода между разделами.',
    uz: 'Ajoyib! Saytlarda bo‘limlar orasida o‘tish uchun menyu shunday quriladi.',
  },
  pageCaption: { ru: 'Так твоё меню выглядит на странице:', uz: 'Sahifada menyung shunday ko‘rinadi:' },
  validate,
};
