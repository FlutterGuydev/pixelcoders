import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const direction = getRuleValue(styleText, '.row', 'flex-direction');
  const wrap = getRuleValue(styleText, '.row', 'flex-wrap');

  if (direction != null && wrap != null) return { success: true };

  if (direction == null) {
    return {
      success: false,
      message: { ru: 'В .row добавь flex-direction, например column.', uz: '.row ga flex-direction qo‘sh, masalan column.' },
    };
  }

  return {
    success: false,
    message: { ru: 'flex-direction есть. Добавь ещё flex-wrap, например wrap.', uz: 'flex-direction bor. Yana flex-wrap qo‘sh, masalan wrap.' },
  };
}

export const cssLevel26 = {
  id: 'css-basics-26',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 26: flex-direction и flex-wrap', uz: '26-dars: flex-direction va flex-wrap' },
  filename: 'style-26.html',
  explanation: {
    ru: 'display: flex; по умолчанию строит ряд слева направо. flex-direction: column; переключает его в столбец сверху вниз. flex-wrap: wrap; разрешает элементам переноситься на новую строку, если не помещаются, вместо сжатия в один ряд.',
    uz: 'display: flex; standart holatda chapdan o‘ngga qatorni quradi. flex-direction: column; uni yuqoridan pastga ustunga o‘tkazadi. flex-wrap: wrap; elementlarga sig‘masa bitta qatorga siqilish o‘rniga yangi qatorga o‘tishga ruxsat beradi.',
  },
  example: '<style>\n  .row {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n</style>\n<div class="row">\n  <div>1</div>\n  <div>2</div>\n</div>',
  goals: {
    ru: ['В .row добавь flex-direction.', 'Добавь flex-wrap.'],
    uz: ['.row ga flex-direction qo‘sh.', 'flex-wrap qo‘sh.'],
  },
  hints: ['.row {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}'],
  starterCode: '<style>\n  .row {\n    display: flex;\n    /* Поменяй направление и разреши перенос */\n  }\n</style>\n<div class="row">\n  <div>Один</div>\n  <div>Два</div>\n  <div>Три</div>\n</div>',
  successMessage: {
    ru: 'Отлично! Теперь ты полностью управляешь направлением флекс-раскладки.',
    uz: 'Ajoyib! Endi fleks-joylashuv yo‘nalishini to‘liq boshqarasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
