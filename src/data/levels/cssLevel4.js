import { extractStyleContent, getRuleBlock, firstAttrValue } from '../../lib/cssCheck';

function validate(code) {
  const className = firstAttrValue(code, 'class');
  if (!className) {
    return {
      success: false,
      message: {
        ru: 'Добавь атрибут class на тег <div>, например class="box".',
        uz: '<div> tegiga class atributini qo‘sh, masalan class="box".',
      },
    };
  }

  const styleText = extractStyleContent(code);
  const rule = getRuleBlock(styleText, `.${className}`);
  if (rule && rule.trim().length > 0) return { success: true };

  return {
    success: false,
    message: {
      ru: `Теперь в <style> напиши правило .${className} { ... } хотя бы с одним свойством.`,
      uz: `Endi <style> ichida .${className} { ... } qoidasini kamida bitta xususiyat bilan yoz.`,
    },
  };
}

export const cssLevel4 = {
  id: 'css-basics-4',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 4: Селектор класса .class', uz: '4-dars: .class selektori' },
  filename: 'style-4.html',
  explanation: {
    ru: 'До сих пор ты стилизовал все <p> или все <div> сразу. Чтобы задеть только конкретный элемент, ему дают class="имя" в HTML, а в CSS обращаются к нему через точку: .имя { ... }. Это те же class и id, что ты проходил в HTML.',
    uz: 'Hozirgacha barcha <p> yoki barcha <div> larni birdaniga stillading. Faqat aniq bir elementga tegish uchun unga HTML’da class="nom" beriladi, CSS’da esa unga nuqta orqali murojaat qilinadi: .nom { ... }. Bu xuddi HTML’da o‘tgan class va id ning o‘zi.',
  },
  example: '<style>\n  .card {\n    background-color: lavender;\n  }\n</style>\n<div class="card">Только я стилизован</div>',
  goals: {
    ru: ['Добавь атрибут class на <div>.', 'В <style> напиши правило .имя-класса с хотя бы одним свойством.'],
    uz: ['<div> ga class atributini qo‘sh.', '<style> da .klass-nomi qoidasini kamida bitta xususiyat bilan yoz.'],
  },
  hints: ['<div class="box">...</div>', '.box {\n  background-color: pink;\n}'],
  starterCode: '<style>\n  /* Напиши правило .класс здесь */\n\n</style>\n<div class="box">Стилизуй меня по классу</div>\n<div>А меня не трогай</div>',
  successMessage: {
    ru: 'Отлично! Теперь ты можешь стилизовать только те элементы, которые захочешь.',
    uz: 'Ajoyib! Endi faqat xohlagan elementlaringni stillay olasan.',
  },
  pageCaption: { ru: 'Только первая коробка изменилась:', uz: 'Faqat birinchi quti o‘zgardi:' },
  validate,
};
