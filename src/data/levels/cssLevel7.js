import { extractStyleContent, getRuleValue } from '../../lib/cssCheck';

function validate(code) {
  const styleText = extractStyleContent(code);
  const weight = getRuleValue(styleText, 'p', 'font-weight');
  const style = getRuleValue(styleText, 'p', 'font-style');

  if (weight != null && style != null) return { success: true };

  if (weight == null) {
    return {
      success: false,
      message: {
        ru: 'Добавь font-weight: bold; в правило для <p> — сделает текст жирным.',
        uz: '<p> qoidasiga font-weight: bold; qo‘sh — matnni qalin qiladi.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'font-weight есть. Добавь ещё font-style: italic; — сделает текст курсивом.',
      uz: 'font-weight bor. Yana font-style: italic; qo‘sh — matnni qiyshiq qiladi.',
    },
  };
}

export const cssLevel7 = {
  id: 'css-basics-7',
  trackId: 'cssBasics',
  wingLabel: { ru: 'Основы CSS', uz: 'CSS asoslari' },
  title: { ru: 'Урок 7: font-weight и font-style', uz: '7-dars: font-weight va font-style' },
  filename: 'style-7.html',
  explanation: {
    ru: 'В HTML жирность и курсив задают тегами <strong>/<em>. В CSS то же можно сделать свойствами: font-weight: bold; — жирный текст, font-style: italic; — курсив. Разница в том, что CSS меняет только внешний вид, а теги ещё и передают смысл «это важно».',
    uz: 'HTML’da qalinlik va qiyshiqlik <strong>/<em> teglari bilan beriladi. CSS’da xuddi shuni xususiyatlar bilan qilish mumkin: font-weight: bold; — qalin matn, font-style: italic; — qiyshiq matn. Farqi shundaki, CSS faqat tashqi ko‘rinishni o‘zgartiradi, teglar esa yana «bu muhim» degan ma’noni ham beradi.',
  },
  example: '<style>\n  p {\n    font-weight: bold;\n    font-style: italic;\n  }\n</style>\n<p>Жирный и курсивный текст</p>',
  goals: {
    ru: ['Добавь font-weight: bold; в правило для <p>.', 'Добавь font-style: italic; туда же.'],
    uz: ['<p> qoidasiga font-weight: bold; qo‘sh.', 'O‘sha yerga font-style: italic; ham qo‘sh.'],
  },
  hints: ['<style>\n  p {\n    font-weight: bold;\n    font-style: italic;\n  }\n</style>'],
  starterCode: '<style>\n  /* Сделай текст жирным и курсивным */\n  p {\n\n  }\n</style>\n<p>Сделай меня жирным и курсивным</p>',
  successMessage: {
    ru: 'Отлично! Теперь ты можешь менять начертание текста через CSS.',
    uz: 'Ajoyib! Endi matn ko‘rinishini CSS orqali o‘zgartira olasan.',
  },
  pageCaption: { ru: 'Так это выглядит после стилизации:', uz: 'Stillashdan keyin bu shunday ko‘rinadi:' },
  validate,
};
