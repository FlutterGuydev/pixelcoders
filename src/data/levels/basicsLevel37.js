import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const fieldsetInner = extractTagInner(code, 'fieldset');

  if (fieldsetInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <fieldset> пока нет. Он рисует рамку вокруг связанных полей формы.',
        uz: '<fieldset> tegi hali yo‘q. U formaning bog‘liq maydonlari atrofiga ramka chizadi.',
      },
    };
  }

  const legendInner = extractTagInner(fieldsetInner, 'legend');
  if (!legendInner) {
    return {
      success: false,
      message: {
        ru: 'Внутри <fieldset> добавь <legend> с текстом — подпись для рамки.',
        uz: '<fieldset> ichiga matnli <legend> qo‘sh — ramka uchun sarlavha.',
      },
    };
  }

  const hasInput = /<input[^>]*>/i.test(fieldsetInner);
  if (!hasInput) {
    return {
      success: false,
      message: {
        ru: 'legend есть. Добавь ещё хотя бы один <input> внутрь <fieldset>.',
        uz: 'legend bor. <fieldset> ichiga yana kamida bitta <input> qo‘sh.',
      },
    };
  }

  return { success: true };
}

export const basicsLevel37 = {
  id: 'basics-37',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 37: <fieldset> и <legend>', uz: '37-dars: <fieldset> va <legend>' },
  filename: 'lesson-37.html',
  explanation: {
    ru: 'Когда в форме много полей, их удобно группировать. <fieldset> рисует рамку вокруг группы полей, а <legend> — подпись этой рамки, например «Контактные данные». Это помогает и зрению, и программам чтения с экрана понять форму.',
    uz: 'Formada maydonlar ko‘p bo‘lganda, ularni guruhlash qulay. <fieldset> maydonlar guruhi atrofiga ramka chizadi, <legend> esa shu ramkaning sarlavhasi, masalan «Aloqa ma’lumotlari». Bu ham ko‘rish, ham ekran o‘qigichlarga formani tushunishga yordam beradi.',
  },
  example: '<fieldset>\n  <legend>Контактные данные</legend>\n  <input type="text" placeholder="Имя">\n</fieldset>',
  goals: {
    ru: ['Добавь <fieldset>.', 'Внутри — <legend> с текстом.', 'И хотя бы один <input>.'],
    uz: ['<fieldset> qo‘sh.', 'Ichiga matnli <legend> qo‘sh.', 'Va kamida bitta <input> qo‘sh.'],
  },
  hints: ['<fieldset>', '  <legend>Заголовок группы</legend>', '  <input type="text">', '</fieldset>'],
  starterCode: '<!-- Сгруппируй поле формы с подписью -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь аккуратно группировать поля формы.',
    uz: 'Ajoyib! Endi forma maydonlarini toza guruhlashni bilasan.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
