import { hasTag, extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const h2 = extractTagInner(code, 'h2');
  const h3 = extractTagInner(code, 'h3');

  if (h2 && h3) return { success: true };

  if (!hasTag(code, 'h2') || !h2) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <h2> с текстом внутри — это заголовок поменьше, чем <h1>.',
        uz: 'Ichida matni bo‘lgan <h2> tegi kerak — bu <h1> dan kichikroq sarlavha.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Хорошо, <h2> есть. Теперь добавь <h3> с текстом — он ещё меньше.',
      uz: 'Yaxshi, <h2> bor. Endi matnli <h3> qo‘sh — u yanada kichikroq.',
    },
  };
}

export const basicsLevel2 = {
  id: 'basics-2',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 2: <h2> и <h3>', uz: '2-dars: <h2> va <h3>' },
  filename: 'lesson-2.html',
  explanation: {
    ru: 'HTML предлагает шесть уровней заголовков: от <h1> (самый крупный) до <h6> (самый мелкий). <h2> — это подзаголовок, а <h3> — заголовок ещё меньше, для разделов внутри подзаголовка. Используются они по порядку, как оглавление книги.',
    uz: 'HTML’da oltita sarlavha darajasi bor: <h1> (eng katta) dan <h6> (eng kichik) gacha. <h2> — kichik sarlavha, <h3> esa undan ham kichikroq, kichik sarlavha ichidagi bo‘limlar uchun. Ular kitobning mundarijasidek tartib bilan ishlatiladi.',
  },
  example: '<h1>Мой сайт</h1>\n<h2>О себе</h2>\n<h3>Увлечения</h3>',
  goals: {
    ru: ['Добавь тег <h2> с текстом.', 'Добавь тег <h3> с текстом.'],
    uz: ['Matnli <h2> tegini qo‘sh.', 'Matnli <h3> tegini qo‘sh.'],
  },
  hints: ['<h2>Подзаголовок</h2>', '<h3>Ещё меньше</h3>'],
  starterCode: '<!-- Добавь подзаголовок h2 и заголовок поменьше h3 -->\n\n',
  successMessage: {
    ru: 'Готово! Теперь ты умеешь строить иерархию заголовков.',
    uz: 'Ajoyib! Endi sarlavhalar ierarxiyasini qura olasan.',
  },
  pageCaption: { ru: 'Так твои заголовки выглядят на странице:', uz: 'Sahifada sarlavhalaring shunday ko‘rinadi:' },
  validate,
};
