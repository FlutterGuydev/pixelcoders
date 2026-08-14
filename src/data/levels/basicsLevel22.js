import { extractTagInner, countTagWithContent } from '../../lib/basicsCheck';

function validate(code) {
  const selectInner = extractTagInner(code, 'select');

  if (selectInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <select> пока нет. Он превращает варианты в выпадающий список.',
        uz: '<select> tegi hali yo‘q. U variantlarni ochiladigan ro‘yxatga aylantiradi.',
      },
    };
  }

  const optionCount = countTagWithContent(selectInner, 'option');

  if (optionCount >= 2) return { success: true };

  return {
    success: false,
    message: {
      ru: `Внутри <select> нужно хотя бы 2 варианта <option> с текстом (сейчас: ${optionCount}).`,
      uz: `<select> ichida kamida 2 ta matnli <option> varianti kerak (hozir: ${optionCount}).`,
    },
  };
}

export const basicsLevel22 = {
  id: 'basics-22',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 22: Выпадающий список <select>', uz: '22-dars: <select> ochiladigan ro‘yxati' },
  filename: 'lesson-22.html',
  explanation: {
    ru: 'Когда вариантов много, а показывать нужно один за раз — используется <select>. Внутри него лежат варианты <option>, каждый со своим текстом. Пользователь кликает и выбирает один.',
    uz: 'Variantlar ko‘p bo‘lib, bir vaqtda faqat bittasini ko‘rsatish kerak bo‘lsa, <select> ishlatiladi. Uning ichida har biri o‘z matniga ega <option> variantlari joylashadi. Foydalanuvchi bosib, birini tanlaydi.',
  },
  example: '<select>\n  <option>Маг</option>\n  <option>Воин</option>\n  <option>Лучник</option>\n</select>',
  goals: {
    ru: ['Добавь тег <select>.', 'Положи внутрь хотя бы 2 варианта <option> с текстом.'],
    uz: ['<select> tegini qo‘sh.', 'Ichiga kamida 2 ta matnli <option> varianti qo‘y.'],
  },
  hints: ['<select>', '  <option>Вариант 1</option>', '  <option>Вариант 2</option>', '</select>'],
  starterCode: '<!-- Собери выпадающий список из хотя бы двух вариантов -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь у тебя есть настоящий выбор из списка.',
    uz: 'Ajoyib! Endi haqiqiy ro‘yxatdan tanlov qila olasan.',
  },
  pageCaption: { ru: 'Так твой список выглядит на странице:', uz: 'Sahifada ro‘yxating shunday ko‘rinadi:' },
  validate,
};
