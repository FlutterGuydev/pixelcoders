import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const sectionInner = extractTagInner(code, 'section');
  const articleInner = extractTagInner(code, 'article');

  if (sectionInner && articleInner) return { success: true };

  if (!sectionInner) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <section> с содержимым — он группирует связанную часть страницы.',
        uz: 'Mazmuni bo‘lgan <section> tegi kerak — u sahifaning bog‘liq qismini guruhlaydi.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'section есть. Теперь добавь <article> с содержимым — самостоятельный кусок контента.',
      uz: 'section bor. Endi mazmunli <article> qo‘sh — mustaqil kontent bo‘lagi.',
    },
  };
}

export const basicsLevel28 = {
  id: 'basics-28',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 28: <section> и <article>', uz: '28-dars: <section> va <article>' },
  filename: 'lesson-28.html',
  explanation: {
    ru: '<section> группирует тематически связанную часть страницы, например «Отзывы» или «Услуги». <article> — самостоятельный кусок контента, который имеет смысл сам по себе, отдельно от страницы: пост в блоге, новость, карточка товара.',
    uz: '<section> sahifaning mavzu jihatidan bog‘liq qismini guruhlaydi, masalan «Fikrlar» yoki «Xizmatlar». <article> esa sahifadan alohida ham ma’noli bo‘lgan mustaqil kontent bo‘lagi: blog posti, yangilik, mahsulot kartochkasi.',
  },
  example: '<section>\n  <h2>Блог</h2>\n  <article>\n    <h3>Первый пост</h3>\n    <p>Текст поста.</p>\n  </article>\n</section>',
  goals: {
    ru: ['Добавь <section> с содержимым.', 'Добавь <article> с содержимым.'],
    uz: ['Mazmunli <section> qo‘sh.', 'Mazmunli <article> qo‘sh.'],
  },
  hints: ['<section>', '  <article>Отдельный пост</article>', '</section>'],
  starterCode: '<!-- Собери секцию с отдельной статьёй внутри -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты можешь описывать смысл частей страницы, а не только их вид.',
    uz: 'Ajoyib! Endi sahifa qismlarining faqat ko‘rinishini emas, ma’nosini ham ifodalay olasan.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
