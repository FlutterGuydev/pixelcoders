import { hasTag, hasAttr } from '../../lib/basicsCheck';

function validate(code) {
  const hasProgress = hasTag(code, 'progress') && hasAttr(code, 'progress', 'value');
  const hasMeter = hasTag(code, 'meter') && hasAttr(code, 'meter', 'value');

  if (hasProgress && hasMeter) return { success: true };

  if (!hasProgress) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <progress> с атрибутом value, например value="50" max="100".',
        uz: 'value atributi bilan <progress> tegi kerak, masalan value="50" max="100".',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'progress есть. Теперь добавь <meter> с атрибутом value — для показателя вроде заряда батареи.',
      uz: 'progress bor. Endi value atributi bilan <meter> qo‘sh — batareya zaryadidek ko‘rsatkich uchun.',
    },
  };
}

export const basicsLevel36 = {
  id: 'basics-36',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 36: <progress> и <meter>', uz: '36-dars: <progress> va <meter>' },
  filename: 'lesson-36.html',
  explanation: {
    ru: '<progress> рисует полосу выполнения задачи — сколько уже сделано из max. <meter> рисует похожую полосу, но для показателя в диапазоне (заряд батареи, рейтинг, уровень громкости), а не для процесса выполнения. Оба рисуются браузером сами, без картинок и CSS.',
    uz: '<progress> vazifa bajarilishi chizig‘ini chizadi — max dan qanchasi bajarilgani. <meter> shunga o‘xshash chiziqni chizadi, lekin bajarilish jarayoni uchun emas, oraliqdagi ko‘rsatkich uchun (batareya zaryadi, reyting, tovush darajasi). Ikkalasini ham brauzer o‘zi chizadi, rasm va CSS’siz.',
  },
  example: '<progress value="70" max="100"></progress>\n<meter value="0.6" min="0" max="1"></meter>',
  goals: {
    ru: ['Добавь <progress> с атрибутом value.', 'Добавь <meter> с атрибутом value.'],
    uz: ['value atributi bilan <progress> qo‘sh.', 'value atributi bilan <meter> qo‘sh.'],
  },
  hints: ['<progress value="70" max="100"></progress>', '<meter value="0.6" min="0" max="1"></meter>'],
  starterCode: '<!-- Покажи прогресс задачи и уровень показателя -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты можешь рисовать полосы прогресса без единой строчки CSS.',
    uz: 'Ajoyib! Endi bitta ham CSS satrisiz progress chiziqlarini chiza olasan.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
