import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (!styleText) {
    return {
      success: false,
      message: { ru: 'Тега <style> пока нет. CSS-правила пишутся внутри него.', uz: '<style> tegi hali yo‘q. CSS qoidalari uning ichida yoziladi.' },
    };
  }

  if (getRuleValue(styleText, 'p', 'color') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Внутри <style> добавь правило p { color: ...; } с любым цветом.',
      uz: '<style> ichiga p { color: ...; } qoidasini istalgan rang bilan qo‘sh.',
    },
  };
}

export const cssLevel1 = {
  id: 'css-basics-1',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 1: Цвет текста color', uz: '1-dars: color matn rangi' },
  filename: 'style-1.html',
  explanation: {
    ru: 'CSS-правило состоит из селектора (к чему применяем), фигурных скобок и внутри — пар свойство: значение;. Правило p { color: red; } красит весь текст внутри <p> в красный. Пиши CSS внутри тега <style>.',
    uz: 'CSS qoidasi selektordan (nimaga qo‘llanadi), figurali qavslardan va ichida xususiyat: qiymat; juftliklaridan iborat. p { color: red; } qoidasi <p> ichidagi barcha matnni qizil rangga bo‘yaydi. CSS ni <style> tegi ichiga yoz.',
  },
  example: '<style>\n  p {\n    color: teal;\n  }\n</style>\n<p>Этот текст покрасился.</p>',
  goals: {
    ru: ['Внутри <style> напиши правило для <p>.', 'Задай свойство color с любым значением.'],
    uz: ['<style> ichida <p> uchun qoida yoz.', 'color xususiyatiga istalgan qiymat ber.'],
  },
  hints: ['<style>\n  p {\n    color: blue;\n  }\n</style>'],
  starterCode: '<style>\n  /* Напиши правило для p здесь */\n\n</style>\n<p>Покрась меня!</p>',
  successMessage: {
    ru: 'Отлично! Это твоё первое настоящее CSS-правило.',
    uz: 'Ajoyib! Bu sening birinchi haqiqiy CSS qoidang.',
  },
  pageCaption: { ru: 'Так текст выглядит после стилизации:', uz: 'Stillashdan keyin matn shunday ko‘rinadi:' },
  validate,
};
