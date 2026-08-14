import { extractStyleContent, getRuleBlock, firstAttrValue } from '../../lib/cssCheck';

function validate(code) {
  const idValue = firstAttrValue(code, 'id');
  if (!idValue) {
    return {
      success: false,
      message: {
        ru: 'Добавь атрибут id на тег <h1>, например id="title".',
        uz: '<h1> tegiga id atributini qo‘sh, masalan id="title".',
      },
    };
  }

  const styleText = extractStyleContent(code);
  const rule = getRuleBlock(styleText, `#${idValue}`);
  if (rule && rule.trim().length > 0) return { success: true };

  return {
    success: false,
    message: {
      ru: `Теперь в <style> напиши правило #${idValue} { ... } хотя бы с одним свойством.`,
      uz: `Endi <style> ichida #${idValue} { ... } qoidasini kamida bitta xususiyat bilan yoz.`,
    },
  };
}

export const cssLevel5 = {
  id: 'css-basics-5',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 5: Селектор id #id', uz: '5-dars: #id selektori' },
  filename: 'style-5.html',
  explanation: {
    ru: '#id работает как .class, но для атрибута id и с решёткой вместо точки: #имя { ... }. Главное отличие — id должен быть уникальным на странице (только у одного элемента), а class можно вешать на много элементов сразу.',
    uz: '#id xuddi .class kabi ishlaydi, lekin id atributi uchun va nuqta o‘rniga panjara bilan: #nom { ... }. Asosiy farq — id sahifada noyob bo‘lishi kerak (faqat bitta elementda), class esa bir vaqtning o‘zida ko‘p elementga qo‘yilishi mumkin.',
  },
  example: '<style>\n  #title {\n    color: crimson;\n  }\n</style>\n<h1 id="title">Единственный такой заголовок</h1>',
  goals: {
    ru: ['Добавь атрибут id на <h1>.', 'В <style> напиши правило #имя-id с хотя бы одним свойством.'],
    uz: ['<h1> ga id atributini qo‘sh.', '<style> da #id-nomi qoidasini kamida bitta xususiyat bilan yoz.'],
  },
  hints: ['<h1 id="title">...</h1>', '#title {\n  color: purple;\n}'],
  starterCode: '<style>\n  /* Напиши правило #id здесь */\n\n</style>\n<h1 id="title">Стилизуй меня по id</h1>',
  successMessage: {
    ru: 'Отлично! Теперь ты знаешь оба способа выбрать конкретный элемент.',
    uz: 'Ajoyib! Endi aniq elementni tanlashning ikkala usulini ham bilasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
