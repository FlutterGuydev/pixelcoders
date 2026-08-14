import { hasTag, countOpenTags, countTagWithContent } from '../../lib/basicsCheck';

const ROWS_NEEDED = 2;
const CELLS_NEEDED = 2;

function validate(code) {
  if (!hasTag(code, 'table')) {
    return {
      success: false,
      message: {
        ru: 'Тега <table> пока нет. Он оборачивает всю таблицу.',
        uz: '<table> tegi hali yo‘q. U butun jadvalni o‘rab turadi.',
      },
    };
  }

  const rowCount = countOpenTags(code, 'tr');
  const cellCount = countTagWithContent(code, 'td');

  if (rowCount >= ROWS_NEEDED && cellCount >= CELLS_NEEDED) return { success: true };

  if (rowCount < ROWS_NEEDED) {
    return {
      success: false,
      message: {
        ru: `Нужно хотя бы ${ROWS_NEEDED} строки <tr> (сейчас: ${rowCount}).`,
        uz: `Kamida ${ROWS_NEEDED} ta <tr> qatori kerak (hozir: ${rowCount}).`,
      },
    };
  }

  return {
    success: false,
    message: {
      ru: `Нужно хотя бы ${CELLS_NEEDED} ячейки <td> с текстом (сейчас: ${cellCount}).`,
      uz: `Kamida ${CELLS_NEEDED} ta matnli <td> katakchasi kerak (hozir: ${cellCount}).`,
    },
  };
}

export const basicsLevel12 = {
  id: 'basics-12',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 12: Таблица <table>', uz: '12-dars: <table> jadvali' },
  filename: 'lesson-12.html',
  explanation: {
    ru: 'Таблица строится из трёх уровней тегов: <table> — вся таблица, <tr> — строка (table row), <td> — ячейка внутри строки (table data). Каждая строка <tr> содержит свои <td>.',
    uz: 'Jadval uch qavat tegdan quriladi: <table> — butun jadval, <tr> — qator (table row), <td> — qator ichidagi katakcha (table data). Har bir <tr> qatori o‘z <td> larini o‘z ichiga oladi.',
  },
  example:
    '<table>\n  <tr>\n    <td>Имя</td>\n    <td>Класс</td>\n  </tr>\n  <tr>\n    <td>Герой</td>\n    <td>Маг</td>\n  </tr>\n</table>',
  goals: {
    ru: [
      'Добавь тег <table>.',
      `Сделай внутри хотя бы ${ROWS_NEEDED} строки <tr>.`,
      `Заполни хотя бы ${CELLS_NEEDED} ячейки <td> текстом.`,
    ],
    uz: [
      '<table> tegini qo‘sh.',
      `Ichiga kamida ${ROWS_NEEDED} ta <tr> qatorini yasa.`,
      `Kamida ${CELLS_NEEDED} ta <td> katakchasini matn bilan to‘ldir.`,
    ],
  },
  hints: ['<table>', '  <tr><td>Ячейка 1</td><td>Ячейка 2</td></tr>', '  <tr><td>Ячейка 3</td><td>Ячейка 4</td></tr>', '</table>'],
  starterCode: '<!-- Построй таблицу из двух строк и хотя бы двух ячеек -->\n\n',
  successMessage: {
    ru: 'Отлично! Так строятся таблицы — из строк и ячеек.',
    uz: 'Ajoyib! Jadvallar shunday quriladi — qator va katakchalardan.',
  },
  pageCaption: { ru: 'Так твоя таблица выглядит на странице:', uz: 'Sahifada jadvaling shunday ko‘rinadi:' },
  validate,
};
