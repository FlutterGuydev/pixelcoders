import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const delInner = extractTagInner(code, 'del');
  const insInner = extractTagInner(code, 'ins');

  if (delInner && insInner) return { success: true };

  if (!delInner) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <del> с текстом — он показывает зачёркнутый, удалённый текст.',
        uz: 'Matnli <del> tegi kerak — u chizib o‘chirilgan matnni ko‘rsatadi.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'del есть. Теперь добавь <ins> с текстом — он показывает добавленный текст (обычно подчёркнутый).',
      uz: 'del bor. Endi matnli <ins> qo‘sh — u qo‘shilgan matnni ko‘rsatadi (odatda ostiga chizilgan).',
    },
  };
}

export const basicsLevel35 = {
  id: 'basics-35',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 35: <del> и <ins>', uz: '35-dars: <del> va <ins>' },
  filename: 'lesson-35.html',
  explanation: {
    ru: '<del> отмечает удалённый текст — браузер зачёркивает его. <ins> отмечает добавленный текст — браузер подчёркивает его. Вместе они показывают историю правок, как в документе с отслеживанием изменений.',
    uz: '<del> o‘chirilgan matnni belgilaydi — brauzer uni chizib qo‘yadi. <ins> qo‘shilgan matnni belgilaydi — brauzer uni ostiga chizadi. Ular birgalikda o‘zgarishlar tarixini, xuddi tahrirlarni kuzatuvchi hujjatdagi kabi ko‘rsatadi.',
  },
  example: '<p>Цена: <del>1000</del> <ins>800</ins> сом.</p>',
  goals: {
    ru: ['Добавь <del> с текстом (что удалено).', 'Добавь <ins> с текстом (что добавлено).'],
    uz: ['Matn bilan <del> qo‘sh (nima o‘chirilgan).', 'Matn bilan <ins> qo‘sh (nima qo‘shilgan).'],
  },
  hints: ['<del>Старая цена</del> <ins>Новая цена</ins>'],
  starterCode: '<!-- Покажи изменение цены: старую зачеркни, новую подчеркни -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты умеешь показывать историю изменений прямо в тексте.',
    uz: 'Ajoyib! Endi o‘zgarishlar tarixini to‘g‘ridan-to‘g‘ri matnda ko‘rsata olasan.',
  },
  pageCaption: { ru: 'Так это выглядит на странице:', uz: 'Sahifada bu shunday ko‘rinadi:' },
  validate,
};
