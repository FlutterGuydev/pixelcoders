import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const parentPosition = getRuleValue(styleText, '.parent', 'position');
  const childPosition = getRuleValue(styleText, '.child', 'position');

  if (parentPosition?.trim() !== 'relative') {
    return {
      success: false,
      message: {
        ru: 'В правиле .parent добавь position: relative; — это «якорь» для дочернего элемента.',
        uz: '.parent qoidasiga position: relative; qo‘sh — bu bola element uchun «langar».',
      },
    };
  }

  if (childPosition?.trim() !== 'absolute') {
    return {
      success: false,
      message: {
        ru: '.parent готов. Теперь в .child добавь position: absolute;.',
        uz: '.parent tayyor. Endi .child ga position: absolute; qo‘sh.',
      },
    };
  }

  const top = getRuleValue(styleText, '.child', 'top');
  const right = getRuleValue(styleText, '.child', 'right');
  const bottom = getRuleValue(styleText, '.child', 'bottom');
  const left = getRuleValue(styleText, '.child', 'left');

  if (top != null || right != null || bottom != null || left != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'position: absolute есть. Добавь ещё top, right, bottom или left, чтобы задать точное место.',
      uz: 'position: absolute bor. Aniq joyni belgilash uchun top, right, bottom yoki left ham qo‘sh.',
    },
  };
}

export const cssLevel23 = {
  id: 'css-basics-23',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 23: Позиционирование position', uz: '23-dars: position joylashtirish' },
  filename: 'style-23.html',
  explanation: {
    ru: 'position: relative; на родителе создаёт «систему координат» для детей. position: absolute; на ребёнке вынимает его из обычного потока и позволяет разместить точно через top/right/bottom/left — относительно ближайшего relative-родителя.',
    uz: 'Ota elementdagi position: relative; bolalar uchun «koordinatalar tizimi» yaratadi. Bola elementdagi position: absolute; uni odatiy oqimdan chiqarib, eng yaqin relative-ota elementga nisbatan top/right/bottom/left orqali aniq joylashtirishga imkon beradi.',
  },
  example: '<style>\n  .parent {\n    position: relative;\n    width: 200px;\n    height: 100px;\n    background-color: lightgray;\n  }\n  .child {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background-color: crimson;\n  }\n</style>\n<div class="parent">\n  <div class="child">В углу</div>\n</div>',
  goals: {
    ru: ['В .parent добавь position: relative.', 'В .child добавь position: absolute.', 'Задай в .child хотя бы одно из top/right/bottom/left.'],
    uz: ['.parent ga position: relative qo‘sh.', '.child ga position: absolute qo‘sh.', '.child ga top/right/bottom/left dan birini ber.'],
  },
  hints: ['.parent {\n  position: relative;\n}', '.child {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}'],
  starterCode: '<style>\n  .parent {\n    width: 200px;\n    height: 100px;\n    background-color: lightgray;\n    /* Сделай меня relative */\n  }\n  .child {\n    background-color: crimson;\n    color: white;\n    /* Сделай меня absolute и помести в угол */\n  }\n</style>\n<div class="parent">\n  <div class="child">Значок</div>\n</div>',
  successMessage: {
    ru: 'Отлично! Это основа для бейджей, значков и всплывающих подсказок.',
    uz: 'Ajoyib! Bu nishonlar, belgilar va tooltiplar uchun asos.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
