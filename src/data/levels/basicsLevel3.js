import { hasTag, extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const inner = extractTagInner(code, 'p');
  if (inner) return { success: true };

  if (!hasTag(code, 'p')) {
    return {
      success: false,
      message: {
        ru: 'Тега <p> пока нет. Он оборачивает обычный текст, как абзац в книге.',
        uz: '<p> tegi hali yo‘q. U kitobdagi abzats kabi oddiy matnni o‘rab turadi.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Тег <p> есть, но он пустой. Напиши внутри него предложение.',
      uz: '<p> tegi bor, lekin u bo‘sh. Ichiga bir gap yoz.',
    },
  };
}

export const basicsLevel3 = {
  id: 'basics-3',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 3: Текст <p>', uz: '3-dars: <p> matni' },
  filename: 'lesson-3.html',
  explanation: {
    ru: 'Заголовки хороши для названий, но для обычного текста — предложений, описаний, абзацев — используется тег <p> (от paragraph, «абзац»). Почти весь читаемый текст на странице живёт внутри <p>.',
    uz: 'Sarlavhalar nomlar uchun yaxshi, lekin oddiy matn — gaplar, izohlar, abzatslar uchun <p> tegi ishlatiladi (paragraph — «abzats» so‘zidan). Sahifadagi deyarli barcha o‘qiladigan matn <p> ichida joylashadi.',
  },
  example: '<h1>Мой дом</h1>\n<p>Здесь я живу и пишу код.</p>',
  goals: {
    ru: ['Добавь тег <p>.', 'Напиши внутри него хотя бы одно предложение.'],
    uz: ['<p> tegini qo‘sh.', 'Ichiga kamida bitta gap yoz.'],
  },
  hints: ['<p>Здесь любой текст.</p>'],
  starterCode: '<!-- Напиши абзац текста ниже -->\n\n',
  successMessage: {
    ru: 'Отлично! Так пишется обычный текст на странице.',
    uz: 'Ajoyib! Sahifada oddiy matn shunday yoziladi.',
  },
  pageCaption: { ru: 'Так твой текст выглядит на странице:', uz: 'Sahifada matning shunday ko‘rinadi:' },
  validate,
};
