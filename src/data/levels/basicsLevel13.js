import { hasTag, hasAttr, extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  if (!hasTag(code, 'form')) {
    return {
      success: false,
      message: {
        ru: 'Тега <form> пока нет. Он оборачивает всё, что пользователь заполняет.',
        uz: '<form> tegi hali yo‘q. U foydalanuvchi to‘ldiradigan hamma narsani o‘rab turadi.',
      },
    };
  }

  const hasInputType = hasAttr(code, 'input', 'type');
  const buttonText = extractTagInner(code, 'button');

  if (hasInputType && buttonText) return { success: true };

  if (!hasInputType) {
    return {
      success: false,
      message: {
        ru: 'Добавь <input> с атрибутом type, например: <input type="text">.',
        uz: 'type atributi bilan <input> qo‘sh, masalan: <input type="text">.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'input есть. Теперь добавь <button> с текстом внутри, например: <button>Отправить</button>.',
      uz: 'input bor. Endi ichida matni bo‘lgan <button> qo‘sh, masalan: <button>Yuborish</button>.',
    },
  };
}

export const basicsLevel13 = {
  id: 'basics-13',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 13: Форма <form>', uz: '13-dars: <form> shakli' },
  filename: 'lesson-13.html',
  explanation: {
    ru: '<form> оборачивает поля, которые пользователь заполняет. <input type="text"> — однострочное поле ввода, атрибут type задаёт вид поля (текст, число, пароль...). <button> — кнопка, на которую нажимают, чтобы отправить форму.',
    uz: '<form> foydalanuvchi to‘ldiradigan maydonlarni o‘rab turadi. <input type="text"> — bir qatorli kiritish maydoni, type atributi maydon turini belgilaydi (matn, raqam, parol...). <button> — formani yuborish uchun bosiladigan tugma.',
  },
  example: '<form>\n  <input type="text">\n  <button>Отправить</button>\n</form>',
  goals: {
    ru: ['Добавь тег <form>.', 'Внутри добавь <input type="text">.', 'Добавь <button> с текстом.'],
    uz: ['<form> tegini qo‘sh.', 'Ichiga <input type="text"> qo‘sh.', 'Matnli <button> qo‘sh.'],
  },
  hints: ['<form>', '  <input type="text">', '  <button>Отправить</button>', '</form>'],
  starterCode: '<!-- Собери простую форму: поле ввода и кнопка -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь у тебя есть настоящая форма, которую можно заполнить.',
    uz: 'Ajoyib! Endi to‘ldirsa bo‘ladigan haqiqiy shakling bor.',
  },
  pageCaption: { ru: 'Так твоя форма выглядит на странице:', uz: 'Sahifada shakling shunday ko‘rinadi:' },
  validate,
};
