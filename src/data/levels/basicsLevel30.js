import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const dlInner = extractTagInner(code, 'dl');

  if (dlInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <dl> пока нет. Он оформляет список «термин — определение».',
        uz: '<dl> tegi hali yo‘q. U «termin — ta’rif» ro‘yxatini bezaydi.',
      },
    };
  }

  const dtText = extractTagInner(dlInner, 'dt');
  const ddText = extractTagInner(dlInner, 'dd');

  if (dtText && ddText) return { success: true };

  if (!dtText) {
    return {
      success: false,
      message: { ru: 'Внутри <dl> добавь <dt> с текстом термина.', uz: '<dl> ichiga termin matni bilan <dt> qo‘sh.' },
    };
  }

  return {
    success: false,
    message: { ru: 'dt есть. Теперь добавь <dd> с текстом объяснения.', uz: 'dt bor. Endi tushuntirish matni bilan <dd> qo‘sh.' },
  };
}

export const basicsLevel30 = {
  id: 'basics-30',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 30: список терминов <dl>', uz: '30-dars: <dl> terminlar ro‘yxati' },
  filename: 'lesson-30.html',
  explanation: {
    ru: 'Кроме <ul> и <ol> есть третий вид списка — <dl>, список терминов. <dt> — сам термин, <dd> — его определение, идущее сразу после. Отлично подходит для словаря или списка вопрос-ответ.',
    uz: '<ul> va <ol> dan tashqari uchinchi ro‘yxat turi bor — <dl>, terminlar ro‘yxati. <dt> — terminning o‘zi, <dd> — undan keyin keladigan ta’rifi. Lug‘at yoki savol-javob ro‘yxati uchun juda mos.',
  },
  example: '<dl>\n  <dt>HTML</dt>\n  <dd>Язык разметки веб-страниц.</dd>\n</dl>',
  goals: {
    ru: ['Добавь тег <dl>.', 'Внутри — <dt> с термином.', 'И <dd> с его определением.'],
    uz: ['<dl> tegini qo‘sh.', 'Ichiga termin bilan <dt> qo‘sh.', 'Va uning ta’rifi bilan <dd> qo‘sh.'],
  },
  hints: ['<dl>', '  <dt>Термин</dt>', '  <dd>Определение</dd>', '</dl>'],
  starterCode: '<!-- Собери словарную статью: термин и определение -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты знаешь все три вида списков в HTML.',
    uz: 'Ajoyib! Endi HTML’dagi uchala ro‘yxat turini ham bilasan.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
