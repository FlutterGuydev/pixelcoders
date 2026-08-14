import { extractTagInner } from '../../lib/basicsCheck';

function validate(code) {
  const spanInner = extractTagInner(code, 'span');

  if (spanInner) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Нужен тег <span> с текстом внутри — например, одно слово в середине предложения.',
      uz: 'Ichida matni bo‘lgan <span> tegi kerak — masalan, gap o‘rtasidagi bitta so‘z.',
    },
  };
}

export const basicsLevel15 = {
  id: 'basics-15',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 15: Строчный <span>', uz: '15-dars: Qatoriy <span>' },
  filename: 'lesson-15.html',
  explanation: {
    ru: '<div> — блочный тег: он всегда начинается с новой строки и занимает всю ширину. <span> — строчный тег: он не разрывает строку, а живёт прямо внутри текста. Используй <span>, когда нужно выделить кусочек текста, не ломая абзац на части.',
    uz: '<div> — blok teg: u har doim yangi qatordan boshlanadi va butun kenglikni egallaydi. <span> — qatoriy teg: u qatorni buzmaydi, matn ichida shu joyicha turaveradi. Abzatsni bo‘laklarga bo‘lmasdan matn bo‘lagini ajratish kerak bo‘lganda <span> ishlatiladi.',
  },
  example: '<p>Это <span>особое слово</span> в предложении.</p>',
  goals: {
    ru: ['Добавь тег <span> с текстом внутри.', 'Постарайся положить его внутрь предложения (например, в <p>).'],
    uz: ['Ichida matni bo‘lgan <span> tegini qo‘sh.', 'Uni gap ichiga (masalan, <p> ichiga) joylashtirishga harakat qil.'],
  },
  hints: ['<p>Обычный текст и <span>особое слово</span> рядом.</p>'],
  starterCode: '<!-- Выдели одно слово внутри предложения через span -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты знаешь разницу между блочными и строчными тегами.',
    uz: 'Ajoyib! Endi blok va qatoriy teglar farqini bilasan.',
  },
  pageCaption: { ru: 'Так твой span выглядит на странице:', uz: 'Sahifada span ing shunday ko‘rinadi:' },
  validate,
};
