import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const tableInner = extractTagInner(code, 'table');
  if (tableInner == null) {
    return {
      success: false,
      message: { ru: 'Тега <table> пока нет.', uz: '<table> tegi hali yo‘q.' },
    };
  }

  const theadInner = extractTagInner(tableInner, 'thead');
  const thText = theadInner != null ? extractTagInner(theadInner, 'th') : null;
  if (!thText) {
    return {
      success: false,
      message: {
        ru: 'Добавь <thead> с тегом <th> внутри — это заголовок столбца.',
        uz: 'Ichida <th> tegi bo‘lgan <thead> qo‘sh — bu ustun sarlavhasi.',
      },
    };
  }

  const tbodyInner = extractTagInner(tableInner, 'tbody');
  const tdText = tbodyInner != null ? extractTagInner(tbodyInner, 'td') : null;
  if (!tdText) {
    return {
      success: false,
      message: {
        ru: 'thead есть. Теперь добавь <tbody> с <tr> и <td> внутри — это строка данных.',
        uz: 'thead bor. Endi ichida <tr> va <td> bo‘lgan <tbody> qo‘sh — bu ma’lumot qatori.',
      },
    };
  }

  return { success: true };
}

export const basicsLevel29 = {
  id: 'basics-29',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 29: <thead>/<tbody>/<th>', uz: '29-dars: <thead>/<tbody>/<th>' },
  filename: 'lesson-29.html',
  explanation: {
    ru: 'Настоящая таблица делится на части: <thead> — заголовок таблицы, внутри него <th> вместо <td> для названий столбцов. <tbody> — тело таблицы с обычными строками <tr>/<td>. Это помогает и человеку, и браузеру отличать заголовок от данных.',
    uz: 'Haqiqiy jadval qismlarga bo‘linadi: <thead> — jadval sarlavhasi, uning ichida ustun nomlari uchun <td> o‘rniga <th> ishlatiladi. <tbody> — oddiy <tr>/<td> qatorlari bo‘lgan jadval tanasi. Bu ham odamga, ham brauzerga sarlavhani ma’lumotdan ajratishga yordam beradi.',
  },
  example:
    '<table>\n  <thead>\n    <tr><th>Имя</th><th>Класс</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Герой</td><td>Маг</td></tr>\n  </tbody>\n</table>',
  goals: {
    ru: ['Добавь <table> с <thead> (заголовок из <th>).', 'Добавь <tbody> со строкой <tr>/<td>.'],
    uz: ['<th> dan sarlavha bilan <thead> bo‘lgan <table> qo‘sh.', '<tr>/<td> qatori bilan <tbody> qo‘sh.'],
  },
  hints: [
    '<table>',
    '  <thead><tr><th>Заголовок</th></tr></thead>',
    '  <tbody><tr><td>Данные</td></tr></tbody>',
    '</table>',
  ],
  starterCode: '<!-- Раздели таблицу на thead и tbody -->\n\n',
  successMessage: {
    ru: 'Отлично! Так строятся настоящие таблицы, а не просто набор строк.',
    uz: 'Ajoyib! Haqiqiy jadvallar shunday quriladi, shunchaki qatorlar to‘plami emas.',
  },
  pageCaption: { ru: 'Так твоя таблица выглядит на странице:', uz: 'Sahifada jadvaling shunday ko‘rinadi:' },
  validate,
};
