import { extractTagInner, hasAttr } from '../../lib/basicsCheck';

function validate(code) {
  const linkText = extractTagInner(code, 'a');
  const hasHref = hasAttr(code, 'a', 'href');

  if (linkText && hasHref) return { success: true };

  if (!hasHref) {
    return {
      success: false,
      message: {
        ru: 'Тегу <a> нужен атрибут href — адрес, куда ведёт ссылка. Например: href="https://example.com".',
        uz: '<a> tegiga href atributi kerak — havola olib boradigan manzil. Masalan: href="https://example.com".',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'href есть, но между <a> и </a> нет текста — на что кликать?',
      uz: 'href bor, lekin <a> va </a> orasida matn yo‘q — nimani bosish kerak?',
    },
  };
}

export const basicsLevel5 = {
  id: 'basics-5',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 5: Ссылка <a>', uz: '5-dars: <a> havolasi' },
  filename: 'lesson-5.html',
  explanation: {
    ru: 'Тег <a> создаёт ссылку. У него есть атрибут href — адрес страницы, куда ведёт ссылка. Атрибуты пишутся внутри открывающего тега: <a href="адрес">текст ссылки</a>.',
    uz: '<a> tegi havola yaratadi. Uning href atributi bor — havola olib boradigan sahifa manzili. Atributlar ochuvchi teg ichida yoziladi: <a href="manzil">havola matni</a>.',
  },
  example: '<a href="https://example.com">Открой сайт</a>',
  goals: {
    ru: ['Добавь тег <a> с атрибутом href.', 'Напиши текст ссылки внутри тега.'],
    uz: ['href atributi bilan <a> tegini qo‘sh.', 'Teg ichiga havola matnini yoz.'],
  },
  hints: ['<a href="https://example.com">Текст ссылки</a>'],
  starterCode: '<!-- Сделай ссылку на любой сайт -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь связывать страницы ссылками.',
    uz: 'Ajoyib! Endi sahifalarni havolalar bilan bog‘lashni bilasan.',
  },
  pageCaption: { ru: 'Так твоя ссылка выглядит на странице:', uz: 'Sahifada havolang shunday ko‘rinadi:' },
  validate,
};
