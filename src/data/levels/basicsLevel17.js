import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const labelInner = extractTagInner(code, 'label');

  if (labelInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <label> пока нет. Он связывает текст с полем формы.',
        uz: '<label> tegi hali yo‘q. U matnni forma maydoni bilan bog‘laydi.',
      },
    };
  }

  const hasInput = /<input[^>]*>/i.test(labelInner);
  const textOnly = labelInner.replace(/<[^>]*>/g, '').trim();

  if (hasInput && textOnly.length > 0) return { success: true };

  if (!hasInput) {
    return {
      success: false,
      message: {
        ru: 'Внутри <label> нужен <input> (например, type="checkbox").',
        uz: '<label> ichida <input> kerak (masalan, type="checkbox").',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'input есть. Добавь ещё текст рядом с ним внутри <label> — например, название пункта.',
      uz: 'input bor. <label> ichida u bilan yonma-yon matn ham qo‘sh — masalan, band nomi.',
    },
  };
}

export const basicsLevel17 = {
  id: 'basics-17',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 17: <label> и чекбокс', uz: '17-dars: <label> va checkbox' },
  filename: 'lesson-17.html',
  explanation: {
    ru: '<label> связывает текст с полем формы: если обернуть <input> и текст одним <label>, клик по тексту тоже включает поле — это важно для удобства и доступности. type="checkbox" превращает <input> в галочку, которую можно включить или выключить.',
    uz: '<label> matnni forma maydoni bilan bog‘laydi: <input> va matnni bitta <label> bilan o‘rasangiz, matnni bosish ham maydonni yoqadi — bu qulaylik va foydalanish imkoniyati uchun muhim. type="checkbox" esa <input> ni yoqib-o‘chirish mumkin bo‘lgan katakchaga aylantiradi.',
  },
  example: '<label><input type="checkbox"> Согласен с условиями</label>',
  goals: {
    ru: ['Добавь тег <label>.', 'Внутри положи <input type="checkbox"> и текст рядом с ним.'],
    uz: ['<label> tegini qo‘sh.', 'Ichiga <input type="checkbox"> va u bilan yonma-yon matn qo‘y.'],
  },
  hints: ['<label><input type="checkbox"> Текст пункта</label>'],
  starterCode: '<!-- Собери подписанный чекбокс через label -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь твою форму удобно использовать, а не только видно.',
    uz: 'Ajoyib! Endi shakling nafaqat ko‘rinadi, balki qulay ham foydalaniladi.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
