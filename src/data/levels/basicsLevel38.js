import { normalizeHtml } from '../../lib/codeNormalize';

function validate(code) {
  const normalized = normalizeHtml(code);
  const radioNames = [...normalized.matchAll(/<input\b[^>]*>/gi)]
    .filter((m) => /type\s*=\s*["']radio["']/.test(m[0]))
    .map((m) => {
      const nameMatch = m[0].match(/name\s*=\s*["']([^"']+)["']/);
      return nameMatch ? nameMatch[1] : null;
    });

  const namedCount = radioNames.filter(Boolean).length;

  if (namedCount < 2) {
    return {
      success: false,
      message: {
        ru: `Нужно хотя бы 2 переключателя <input type="radio"> с атрибутом name (сейчас: ${namedCount}).`,
        uz: `Kamida 2 ta name atributi bilan <input type="radio"> kerak (hozir: ${namedCount}).`,
      },
    };
  }

  const allSameName = radioNames.every((n) => n && n === radioNames[0]);
  if (!allSameName) {
    return {
      success: false,
      message: {
        ru: 'У всех переключателей должно быть одинаковое значение name — тогда выбор одного снимает выбор с других.',
        uz: 'Barcha o‘tkazgichlarning name qiymati bir xil bo‘lishi kerak — shunda birini tanlash boshqasini bekor qiladi.',
      },
    };
  }

  return { success: true };
}

export const basicsLevel38 = {
  id: 'basics-38',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 38: переключатели radio', uz: '38-dars: radio o‘tkazgichlar' },
  filename: 'lesson-38.html',
  explanation: {
    ru: 'input type="radio" — переключатель «выбери один из вариантов». Чтобы браузер понял, что несколько переключателей относятся к одной группе (и выбор одного снимает другие), у них должен быть одинаковый атрибут name.',
    uz: 'input type="radio" — «variantlardan bittasini tanla» o‘tkazgichi. Brauzer bir nechta o‘tkazgichning bitta guruhga tegishli ekanini tushunishi uchun (va birini tanlash boshqalarini bekor qilishi uchun), ularning name atributi bir xil bo‘lishi kerak.',
  },
  example:
    '<label><input type="radio" name="class"> Маг</label>\n<label><input type="radio" name="class"> Воин</label>',
  goals: {
    ru: ['Добавь хотя бы 2 <input type="radio">.', 'У обоих поставь одинаковый атрибут name.'],
    uz: ['Kamida 2 ta <input type="radio"> qo‘sh.', 'Ikkalasiga bir xil name atributini qo‘y.'],
  },
  hints: ['<input type="radio" name="group">', 'Оба переключателя: name="group"'],
  starterCode: '<!-- Собери группу из двух переключателей с одинаковым name -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь переключатели работают как настоящая группа «выбери один».',
    uz: 'Ajoyib! Endi o‘tkazgichlar haqiqiy «bittasini tanla» guruhi kabi ishlaydi.',
  },
  pageCaption: { ru: 'Попробуй переключить варианты в превью:', uz: 'Oldindan ko‘rishda variantlarni almashtirib ko‘r:' },
  validate,
};
