import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, 'h1', 'font-size') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Внутри <style> добавь правило h1 { font-size: ...; } с любым размером (например, 40px).',
      uz: '<style> ichiga h1 { font-size: ...; } qoidasini istalgan o‘lcham bilan qo‘sh (masalan, 40px).',
    },
  };
}

export const cssLevel3 = {
  id: 'css-basics-3',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 3: Размер текста font-size', uz: '3-dars: font-size matn o‘lchami' },
  filename: 'style-3.html',
  explanation: {
    ru: 'font-size задаёт размер текста. Чаще всего значение пишут в px (пикселях), например 24px. Чем больше число — тем крупнее текст.',
    uz: 'font-size matn o‘lchamini belgilaydi. Ko‘pincha qiymat px (piksel) da yoziladi, masalan 24px. Son qancha katta bo‘lsa, matn shuncha katta bo‘ladi.',
  },
  example: '<style>\n  h1 {\n    font-size: 48px;\n  }\n</style>\n<h1>Огромный заголовок</h1>',
  goals: {
    ru: ['Внутри <style> напиши правило для <h1>.', 'Задай font-size с любым размером в px.'],
    uz: ['<style> ichida <h1> uchun qoida yoz.', 'font-size ga px da istalgan o‘lcham ber.'],
  },
  hints: ['<style>\n  h1 {\n    font-size: 36px;\n  }\n</style>'],
  starterCode: '<style>\n  /* Сделай заголовок крупнее или мельче */\n\n</style>\n<h1>Измени мой размер</h1>',
  successMessage: {
    ru: 'Отлично! Теперь ты управляешь размером текста.',
    uz: 'Ajoyib! Endi matn o‘lchamini boshqara olasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
