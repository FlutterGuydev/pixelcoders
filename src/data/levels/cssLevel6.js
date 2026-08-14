import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, 'p', 'text-align') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Внутри <style> добавь правило p { text-align: ...; }, например center.',
      uz: '<style> ichiga p { text-align: ...; } qoidasini qo‘sh, masalan center.',
    },
  };
}

export const cssLevel6 = {
  id: 'css-basics-6',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 6: Выравнивание text-align', uz: '6-dars: text-align tekislash' },
  filename: 'style-6.html',
  explanation: {
    ru: 'text-align выравнивает текст внутри элемента: left (слева, по умолчанию), center (по центру), right (справа) или justify (по ширине, с ровными краями).',
    uz: 'text-align element ichidagi matnni tekislaydi: left (chapga, standart), center (markazga), right (o‘ngga) yoki justify (kenglik bo‘yicha, tekis chetlar bilan).',
  },
  example: '<style>\n  p {\n    text-align: center;\n  }\n</style>\n<p>Я по центру</p>',
  goals: {
    ru: ['Внутри <style> напиши правило для <p>.', 'Задай text-align: center, right или left.'],
    uz: ['<style> ichida <p> uchun qoida yoz.', 'text-align ga center, right yoki left ber.'],
  },
  hints: ['<style>\n  p {\n    text-align: center;\n  }\n</style>'],
  starterCode: '<style>\n  /* Выровняй текст по центру или по правому краю */\n\n</style>\n<p>Выровняй меня</p>',
  successMessage: {
    ru: 'Отлично! Теперь ты управляешь расположением текста.',
    uz: 'Ajoyib! Endi matn joylashuvini boshqara olasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
