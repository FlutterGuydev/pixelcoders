import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, 'div', 'background-color') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Внутри <style> добавь правило div { background-color: ...; } с любым цветом.',
      uz: '<style> ichiga div { background-color: ...; } qoidasini istalgan rang bilan qo‘sh.',
    },
  };
}

export const cssLevel2 = {
  id: 'css-basics-2',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 2: Фон background-color', uz: '2-dars: background-color foni' },
  filename: 'style-2.html',
  explanation: {
    ru: 'background-color красит не текст, а фон элемента — всю его прямоугольную область. Значением может быть название цвета (teal), код (#2dd4bf) или rgb(...).',
    uz: 'background-color matnni emas, elementning fonini — uning butun to‘rtburchak maydonini bo‘yaydi. Qiymat sifatida rang nomi (teal), kod (#2dd4bf) yoki rgb(...) bo‘lishi mumkin.',
  },
  example: '<style>\n  div {\n    background-color: gold;\n  }\n</style>\n<div>Коробка с фоном</div>',
  goals: {
    ru: ['Внутри <style> напиши правило для <div>.', 'Задай background-color с любым цветом.'],
    uz: ['<style> ichida <div> uchun qoida yoz.', 'background-color ga istalgan rang ber.'],
  },
  hints: ['<style>\n  div {\n    background-color: lightgreen;\n  }\n</style>'],
  starterCode: '<style>\n  /* Задай фон для div */\n\n</style>\n<div>Раскрась мой фон!</div>',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь красить не только текст, но и фон.',
    uz: 'Ajoyib! Endi nafaqat matnni, fonni ham bo‘yashni bilasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
