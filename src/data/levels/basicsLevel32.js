import { extractTagInner, hasAttr } from '../../lib/basicsCheck';

function validate(code) {
  const abbrInner = extractTagInner(code, 'abbr');

  if (!abbrInner) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <abbr> с текстом сокращения внутри, например HTML.',
        uz: 'Ichida qisqartma matni bo‘lgan <abbr> tegi kerak, masalan HTML.',
      },
    };
  }

  if (hasAttr(code, 'abbr', 'title')) return { success: true };

  return {
    success: false,
    message: {
      ru: 'abbr есть. Добавь атрибут title с полной расшифровкой сокращения.',
      uz: 'abbr bor. Qisqartmaning to‘liq ma’nosi bilan title atributini qo‘sh.',
    },
  };
}

export const basicsLevel32 = {
  id: 'basics-32',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 32: сокращение <abbr>', uz: '32-dars: <abbr> qisqartma' },
  filename: 'lesson-32.html',
  explanation: {
    ru: '<abbr> отмечает сокращение или аббревиатуру. Атрибут title хранит полную расшифровку — при наведении мышкой браузер покажет всплывающую подсказку с этим текстом.',
    uz: '<abbr> qisqartma yoki abbreviaturani belgilaydi. title atributi to‘liq ma’noni saqlaydi — sichqonchani ustiga olib borganda brauzer shu matn bilan tooltip ko‘rsatadi.',
  },
  example: '<p><abbr title="HyperText Markup Language">HTML</abbr> — язык разметки страниц.</p>',
  goals: {
    ru: ['Добавь <abbr> с сокращением внутри.', 'Добавь атрибут title с полной расшифровкой.'],
    uz: ['Ichida qisqartma bilan <abbr> qo‘sh.', 'To‘liq ma’no bilan title atributini qo‘sh.'],
  },
  hints: ['<abbr title="Полное название">Сокращение</abbr>'],
  starterCode: '<!-- Отметь сокращение и его расшифровку -->\n\n',
  successMessage: {
    ru: 'Отлично! Наведи мышку на сокращение в превью, чтобы увидеть подсказку.',
    uz: 'Ajoyib! Maslahatni ko‘rish uchun oldindan ko‘rishda qisqartma ustiga sichqonchani olib bor.',
  },
  pageCaption: { ru: 'Наведи мышку на подчёркнутый текст в превью:', uz: 'Oldindan ko‘rishda ostiga chizilgan matn ustiga sichqonchani olib bor:' },
  validate,
};
