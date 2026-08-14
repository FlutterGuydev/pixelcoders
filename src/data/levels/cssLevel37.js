import { extractStyleContent, getRuleBlock } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const rule = getRuleBlock(styleText, '.card p');

  if (rule && rule.trim().length > 0) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Добавь правило .card p { ... } — оно задевает только <p> внутри .card.',
      uz: '.card p { ... } qoidasini qo‘sh — u faqat .card ichidagi <p> larga tegadi.',
    },
  };
}

export const cssLevel37 = {
  id: 'css-basics-37',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 37: Вложенный селектор .card p', uz: '37-dars: .card p ichma-ich selektor' },
  filename: 'style-37.html',
  explanation: {
    ru: 'Если написать два селектора через пробел — .card p — правило сработает только на <p>, которые лежат внутри .card, а не на всех <p> странице. Это называют потомственным (descendant) селектором.',
    uz: 'Ikkita selektorni bo‘sh joy orqali yozsang — .card p — qoida faqat .card ichidagi <p> larga ishlaydi, sahifadagi barcha <p> larga emas. Bu avlod (descendant) selektori deb ataladi.',
  },
  example: '<style>\n  .card p {\n    color: gray;\n  }\n</style>\n<div class="card">\n  <p>Я серый, я внутри card</p>\n</div>\n<p>Я обычный, я снаружи</p>',
  goals: {
    ru: ['Добавь правило .card p { ... } с хотя бы одним свойством.'],
    uz: ['.card p { ... } qoidasini kamida bitta xususiyat bilan qo‘sh.'],
  },
  hints: ['.card p {\n  color: gray;\n  font-size: 14px;\n}'],
  starterCode: '<style>\n  /* Стилизуй только p внутри .card */\n\n</style>\n<div class="card">\n  <p>Я внутри карточки</p>\n</div>\n<p>Я снаружи, не трогай меня</p>',
  successMessage: {
    ru: 'Отлично! Теперь ты можешь целиться в элементы по их месту в структуре.',
    uz: 'Ajoyib! Endi elementlarni tuzilmadagi o‘rniga qarab nishonga ola olasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
