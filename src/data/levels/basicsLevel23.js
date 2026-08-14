import { extractTagInner, hasAttr } from '../../lib/basicsCheck';

function validate(code) {
  const quoteInner = extractTagInner(code, 'blockquote');

  if (quoteInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <blockquote> пока нет. Он оформляет цитату из другого источника.',
        uz: '<blockquote> tegi hali yo‘q. U boshqa manbadan olingan iqtibosni bezaydi.',
      },
    };
  }

  const hasCite = hasAttr(code, 'blockquote', 'cite');

  if (hasCite) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Цитата есть. Добавь ещё атрибут cite на <blockquote> — ссылку на источник цитаты.',
      uz: 'Iqtibos bor. <blockquote> ga cite atributini ham qo‘sh — iqtibos manbasiga havola.',
    },
  };
}

export const basicsLevel23 = {
  id: 'basics-23',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 23: Цитата <blockquote>', uz: '23-dars: <blockquote> iqtibosi' },
  filename: 'lesson-23.html',
  explanation: {
    ru: '<blockquote> оформляет длинную цитату из другого источника — обычно она выделяется отступом. Атрибут cite (необязательно видимый, но полезный) хранит адрес, откуда взята цитата — как ссылка на первоисточник.',
    uz: '<blockquote> boshqa manbadan olingan uzun iqtibosni bezaydi — odatda u chekinish bilan ajratiladi. cite atributi (ko‘rinmasa ham foydali) iqtibos qayerdan olinganini saqlaydi — asl manbaga havoladek.',
  },
  example: '<blockquote cite="https://example.com">Код — это поэзия для машин.</blockquote>',
  goals: {
    ru: ['Добавь тег <blockquote> с текстом цитаты.', 'Добавь атрибут cite со ссылкой на источник.'],
    uz: ['Iqtibos matni bilan <blockquote> tegini qo‘sh.', 'Manbaga havola bilan cite atributini qo‘sh.'],
  },
  hints: ['<blockquote cite="https://example.com">Текст цитаты</blockquote>'],
  starterCode: '<!-- Оформи цитату с указанием источника -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь твои цитаты выглядят и ведут себя как настоящие.',
    uz: 'Ajoyib! Endi iqtiboslaring haqiqiydek ko‘rinadi va ishlaydi.',
  },
  pageCaption: { ru: 'Так твоя цитата выглядит на странице:', uz: 'Sahifada iqtibosing shunday ko‘rinadi:' },
  validate,
};
