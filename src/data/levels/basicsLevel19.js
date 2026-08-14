import { extractTagInner, hasAttr } from '../../lib/basicsCheck';

function validate(code) {
  const figureInner = extractTagInner(code, 'figure');

  if (figureInner == null) {
    return {
      success: false,
      message: {
        ru: 'Тега <figure> пока нет. Он группирует картинку и её подпись вместе.',
        uz: '<figure> tegi hali yo‘q. U rasm va uning izohini birga guruhlaydi.',
      },
    };
  }

  const hasImg = hasAttr(figureInner, 'img', 'src');
  const captionInner = extractTagInner(figureInner, 'figcaption');

  if (hasImg && captionInner) return { success: true };

  if (!hasImg) {
    return {
      success: false,
      message: {
        ru: 'Внутри <figure> нужен <img> с атрибутом src.',
        uz: '<figure> ichida src atributi bilan <img> kerak.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Картинка есть. Добавь ещё <figcaption> с текстом подписи внутри <figure>.',
      uz: 'Rasm bor. <figure> ichiga izoh matni bilan <figcaption> ham qo‘sh.',
    },
  };
}

export const basicsLevel19 = {
  id: 'basics-19',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 19: <figure> и подпись', uz: '19-dars: <figure> va izoh' },
  filename: 'lesson-19.html',
  explanation: {
    ru: '<figure> объединяет картинку с её подписью в одно смысловое целое, а <figcaption> — сама подпись. Так браузер и человек понимают, что текст относится именно к этой картинке, а не просто стоит рядом.',
    uz: '<figure> rasmni uning izohi bilan bitta ma’noli butunlikka birlashtiradi, <figcaption> esa izohning o‘zi. Shunday qilib brauzer va odam matn aynan shu rasmga tegishli ekanini, shunchaki yonida turmaganini tushunadi.',
  },
  example:
    '<figure>\n  <img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'100\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23fbbf24\'/%3E%3C/svg%3E" alt="Золотой прямоугольник">\n  <figcaption>Закат над подземельем</figcaption>\n</figure>',
  goals: {
    ru: ['Добавь тег <figure>.', 'Внутри — <img> с атрибутом src.', 'Внутри — <figcaption> с текстом подписи.'],
    uz: ['<figure> tegini qo‘sh.', 'Ichiga src atributi bilan <img> qo‘sh.', 'Ichiga izoh matni bilan <figcaption> qo‘sh.'],
  },
  hints: ['<figure>', '  <img src="картинка.jpg" alt="описание">', '  <figcaption>Подпись</figcaption>', '</figure>'],
  starterCode: '<!-- Собери картинку с подписью -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь у твоих картинок есть смысловая подпись.',
    uz: 'Ajoyib! Endi rasmlaringda ma’noli izoh bor.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
