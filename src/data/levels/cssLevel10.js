import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  if (getRuleValue(styleText, '.box', 'border') != null) return { success: true };

  return {
    success: false,
    message: {
      ru: 'В правиле .box добавь border, например border: 3px solid black;.',
      uz: '.box qoidasiga border qo‘sh, masalan border: 3px solid black;.',
    },
  };
}

export const cssLevel10 = {
  id: 'css-basics-10',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 10: Рамка border', uz: '10-dars: border ramka' },
  filename: 'style-10.html',
  explanation: {
    ru: 'border рисует рамку вокруг элемента. Это «сокращённое» свойство — в одной строке задаются сразу три значения: толщина (3px), стиль линии (solid, dashed, dotted) и цвет (black).',
    uz: 'border element atrofiga ramka chizadi. Bu «qisqartirilgan» xususiyat — bitta qatorda darhol uchta qiymat beriladi: qalinlik (3px), chiziq turi (solid, dashed, dotted) va rang (black).',
  },
  example: '<style>\n  .box {\n    border: 3px solid teal;\n  }\n</style>\n<div class="box">В рамке</div>',
  goals: {
    ru: ['В правиле .box добавь border: толщина, стиль, цвет.'],
    uz: ['.box qoidasiga border: qalinlik, uslub, rang qo‘sh.'],
  },
  hints: ['.box {\n  border: 2px dashed red;\n}'],
  starterCode: '<style>\n  .box {\n    padding: 12px;\n    /* Добавь border здесь */\n  }\n</style>\n<div class="box">Обведи меня рамкой</div>',
  successMessage: {
    ru: 'Отлично! Теперь у твоей коробки есть настоящая рамка.',
    uz: 'Ajoyib! Endi qutingda haqiqiy ramka bor.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
