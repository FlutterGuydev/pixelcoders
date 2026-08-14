import { extractTagInner, countTagWithContent } from '../../lib/basicsCheck';

function validate(code) {
  const olInner = extractTagInner(code, 'ol');

  if (olInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <ol> пока нет. Он как <ul>, но с номерами по порядку.',
        uz: '<ol> tegi hali yo‘q. U <ul> kabi, lekin tartib raqamlari bilan.',
      },
    };
  }

  const itemCount = countTagWithContent(olInner, 'li');

  if (itemCount >= 2) return { success: true };

  return {
    success: false,
    message: {
      ru: `Внутри <ol> нужно хотя бы 2 пункта <li> с текстом (сейчас: ${itemCount}).`,
      uz: `<ol> ichida kamida 2 ta matnli <li> bandi kerak (hozir: ${itemCount}).`,
    },
  };
}

export const basicsLevel11 = {
  id: 'basics-11',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 11: Список <ol>', uz: '11-dars: <ol> ro‘yxati' },
  filename: 'lesson-11.html',
  explanation: {
    ru: 'Тег <ol> — это тоже список, но пункты в нём нумеруются по порядку (1, 2, 3...). Пункты внутри — те же <li>, что и в <ul>. Используй <ol>, когда порядок важен, например пошаговая инструкция.',
    uz: '<ol> tegi ham ro‘yxat, lekin uning bandlari tartib bilan raqamlanadi (1, 2, 3...). Ichidagi bandlar <ul> dagi kabi <li> teglaridir. Tartib muhim bo‘lganda, masalan bosqichma-bosqich yo‘riqnomada, <ol> ishlatiladi.',
  },
  example: '<ol>\n  <li>Открой редактор</li>\n  <li>Напиши код</li>\n  <li>Нажми Run</li>\n</ol>',
  goals: {
    ru: ['Добавь тег <ol>.', 'Положи внутрь хотя бы 2 пункта <li> с текстом.'],
    uz: ['<ol> tegini qo‘sh.', 'Ichiga kamida 2 ta matnli <li> bandi qo‘y.'],
  },
  hints: ['<ol>', '  <li>Первый шаг</li>', '  <li>Второй шаг</li>', '</ol>'],
  starterCode: '<!-- Составь пронумерованную инструкцию из хотя бы двух шагов -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь показывать шаги по порядку.',
    uz: 'Ajoyib! Endi qadamlarni tartib bilan ko‘rsatishni bilasan.',
  },
  pageCaption: { ru: 'Так твой список выглядит на странице:', uz: 'Sahifada ro‘yxating shunday ko‘rinadi:' },
  validate,
};
