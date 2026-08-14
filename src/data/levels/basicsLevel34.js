import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const supInner = extractTagInner(code, 'sup');
  const subInner = extractTagInner(code, 'sub');

  if (supInner && subInner) return { success: true };

  if (!supInner) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <sup> с текстом внутри — он поднимает текст над строкой.',
        uz: 'Ichida matni bo‘lgan <sup> tegi kerak — u matnni qator ustiga ko‘taradi.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'sup есть. Теперь добавь <sub> с текстом — он опускает текст под строку.',
      uz: 'sup bor. Endi matnli <sub> qo‘sh — u matnni qator ostiga tushiradi.',
    },
  };
}

export const basicsLevel34 = {
  id: 'basics-34',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 34: <sup> и <sub>', uz: '34-dars: <sup> va <sub>' },
  filename: 'lesson-34.html',
  explanation: {
    ru: '<sup> поднимает текст над строкой (верхний индекс) — пригодится для степеней или сносок. <sub> опускает текст под строку (нижний индекс) — для химических формул или дат.',
    uz: '<sup> matnni qator ustiga ko‘taradi (yuqori indeks) — daraja yoki izohlar uchun kerak bo‘ladi. <sub> matnni qator ostiga tushiradi (quyi indeks) — kimyoviy formulalar yoki sanalar uchun.',
  },
  example: '<p>E = mc<sup>2</sup> и H<sub>2</sub>O — известные формулы.</p>',
  goals: {
    ru: ['Добавь <sup> с текстом (например, степень числа).', 'Добавь <sub> с текстом (например, индекс в формуле).'],
    uz: ['Matnli <sup> qo‘sh (masalan, sonning darajasi).', 'Matnli <sub> qo‘sh (masalan, formuladagi indeks).'],
  },
  hints: ['x<sup>2</sup>', 'H<sub>2</sub>O'],
  starterCode: '<!-- Напиши формулу со степенью и индексом -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь писать формулы и сноски как надо.',
    uz: 'Ajoyib! Endi formula va izohlarni kerakidek yoza olasan.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
