import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const divInner = extractTagInner(code, 'div');

  if (divInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <div> пока нет. Он будет «стенами» твоего домика.',
        uz: '<div> tegi hali yo‘q. U uyingizning “devorlari” bo‘ladi.',
      },
    };
  }

  const h1Inner = extractTagInner(divInner, 'h1');
  const pInner = extractTagInner(divInner, 'p');

  if (h1Inner && pInner) return { success: true };

  if (!h1Inner) {
    return {
      success: false,
      message: {
        ru: 'Внутри <div> нужен <h1> с названием домика.',
        uz: '<div> ichida uy nomi bilan <h1> kerak.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Хорошо, название есть. Теперь добавь внутри <div> тег <p> с описанием.',
      uz: 'Yaxshi, nom bor. Endi <div> ichiga izoh bilan <p> tegini qo‘sh.',
    },
  };
}

export const basicsLevel4 = {
  id: 'basics-4',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 4: Коробка <div>', uz: '4-dars: <div> qutisi' },
  filename: 'lesson-4.html',
  explanation: {
    ru: 'Тег <div> — это просто коробка (контейнер), которая группирует другие теги вместе, как стены дома держат всё, что внутри. Сам по себе <div> ничего не показывает — важно то, что ты положишь внутрь.',
    uz: '<div> tegi shunchaki quti (konteyner) bo‘lib, boshqa teglarni birga guruhlaydi — xuddi uy devorlari ichidagi hamma narsani ushlab turgani kabi. <div> o‘zi hech narsa ko‘rsatmaydi — muhimi, uning ichiga nima qo‘yishing.',
  },
  example: '<div>\n  <h1>Мой домик</h1>\n  <p>Маленький, но уютный.</p>\n</div>',
  goals: {
    ru: [
      'Построй свой домик: добавь тег <div>.',
      'Внутри <div> добавь <h1> с названием домика.',
      'Внутри <div> добавь <p> с коротким описанием.',
    ],
    uz: [
      'O‘z uyingni qur: <div> tegini qo‘sh.',
      '<div> ichiga uy nomi bilan <h1> qo‘sh.',
      '<div> ichiga qisqa izoh bilan <p> qo‘sh.',
    ],
  },
  hints: ['<div>', '  <h1>Название</h1>', '  <p>Описание</p>', '</div>'],
  starterCode: '<!-- Построй домик: div, а внутри h1 и p -->\n\n',
  successMessage: {
    ru: 'Ты построил первую настоящую страницу — заголовок, текст и коробка, которая их держит вместе!',
    uz: 'Sen birinchi haqiqiy sahifangni qurding — sarlavha, matn va ularni birga ushlab turgan quti!',
  },
  pageCaption: { ru: 'Так твой домик выглядит на странице:', uz: 'Sahifada uying shunday ko‘rinadi:' },
  validate,
};
