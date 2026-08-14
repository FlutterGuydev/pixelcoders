import { hasTag, hasAttr } from '../../lib/basicsCheck';

function validate(code) {
  if (!hasTag(code, 'textarea')) {
    return {
      success: false,
      message: {
        ru: 'Тега <textarea> пока нет. Он как <input>, но для многострочного текста.',
        uz: '<textarea> tegi hali yo‘q. U <input> kabi, lekin ko‘p qatorli matn uchun.',
      },
    };
  }

  if (hasAttr(code, 'textarea', 'placeholder')) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Добавь атрибут placeholder — подсказку, которая видна, пока поле пустое.',
      uz: 'placeholder atributini qo‘sh — maydon bo‘sh vaqtida ko‘rinadigan maslahat matni.',
    },
  };
}

export const basicsLevel31 = {
  id: 'basics-31',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 31: многострочное поле <textarea>', uz: '31-dars: <textarea> ko‘p qatorli maydon' },
  filename: 'lesson-31.html',
  explanation: {
    ru: '<input type="text"> — одна строка. Когда нужно ввести много текста (сообщение, комментарий), используется <textarea>. Атрибут placeholder показывает серую подсказку внутри поля, пока пользователь ничего не ввёл.',
    uz: '<input type="text"> — bitta qator. Ko‘p matn kiritish kerak bo‘lganda (xabar, izoh), <textarea> ishlatiladi. placeholder atributi foydalanuvchi hali hech narsa kiritmagan paytda maydon ichida kulrang maslahat matnini ko‘rsatadi.',
  },
  example: '<textarea placeholder="Напиши сообщение..."></textarea>',
  goals: {
    ru: ['Добавь тег <textarea>.', 'Добавь атрибут placeholder с текстом подсказки.'],
    uz: ['<textarea> tegini qo‘sh.', 'Maslahat matni bilan placeholder atributini qo‘sh.'],
  },
  hints: ['<textarea placeholder="Твой текст..."></textarea>'],
  starterCode: '<!-- Добавь поле для длинного сообщения -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь в твоей форме есть место для целого сообщения.',
    uz: 'Ajoyib! Endi shaklingda butun bir xabar uchun joy bor.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
