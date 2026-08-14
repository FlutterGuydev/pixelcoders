import { hasAnyAttr } from '../../lib/basicsCheck';

function validate(code) {
  const hasClass = hasAnyAttr(code, 'class');
  const hasId = hasAnyAttr(code, 'id');

  if (hasClass && hasId) return { success: true };

  if (!hasClass) {
    return {
      success: false,
      message: {
        ru: 'Нужен атрибут class на каком-нибудь теге, например: <div class="card">.',
        uz: 'Biror tegda class atributi kerak, masalan: <div class="card">.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'class есть. Теперь добавь ещё атрибут id на каком-нибудь теге, например: <h1 id="title">.',
      uz: 'class bor. Endi biror tegga id atributini ham qo‘sh, masalan: <h1 id="title">.',
    },
  };
}

export const basicsLevel10 = {
  id: 'basics-10',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 10: Атрибуты class и id', uz: '10-dars: class va id atributlari' },
  filename: 'lesson-10.html',
  explanation: {
    ru: 'Атрибуты — это доп. информация внутри открывающего тега. class навешивает на элемент «ярлык», по которому потом можно применить один и тот же стиль к нескольким элементам. id — уникальное имя для одного конкретного элемента. Это готовит тебя к CSS: именно class и id используются, чтобы сказать «стилизуй вот это».',
    uz: 'Atributlar — ochuvchi teg ichidagi qo‘shimcha ma’lumot. class elementga «yorliq» osadi — keyinchalik bir xil stilni bir nechta elementga qo‘llash uchun. id esa bitta aniq element uchun noyob nom. Bu seni CSS’ga tayyorlaydi: aynan class va id yordamida «mana shuni stillashtir» deyiladi.',
  },
  example: '<h1 id="title">Мой сайт</h1>\n<div class="card">Карточка</div>',
  goals: {
    ru: ['Добавь атрибут class на любой тег.', 'Добавь атрибут id на любой тег.'],
    uz: ['Istalgan tegga class atributini qo‘sh.', 'Istalgan tegga id atributini qo‘sh.'],
  },
  hints: ['<div class="имя-класса">...</div>', '<h1 id="уникальное-имя">...</h1>'],
  starterCode: '<!-- Добавь class на один тег и id на другой -->\n\n',
  successMessage: {
    ru: 'Теперь у тебя есть «ручки», за которые CSS сможет ухватиться.',
    uz: 'Endi CSS ushlab olishi mumkin bo‘lgan «dastaklar»ing bor.',
  },
  pageCaption: { ru: 'Так твои теги выглядят на странице:', uz: 'Sahifada teglaring shunday ko‘rinadi:' },
  validate,
};
