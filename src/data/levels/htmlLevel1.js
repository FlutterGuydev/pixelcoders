// Whitelist-based validation: exact-pattern matching, never eval.
// Comments and whitespace are stripped before matching so formatting
// choices don't count against the player.
function normalize(code) {
  return code
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

const SOLVED_PATTERN = /^<door><handle><\/handle><\/door>$/;

function validate(code) {
  const normalized = normalize(code);

  if (SOLVED_PATTERN.test(normalized)) {
    return { success: true };
  }

  if (!/<door>/.test(normalized) || !/<\/door>/.test(normalized)) {
    return {
      success: false,
      message: {
        ru: 'Тег <door></door> отсутствует. Не удаляй стартовый тег — строй внутри него.',
        uz: '<door></door> tegi yo‘q. Boshlang‘ich tegni o‘chirma — uning ichida quring.',
      },
    };
  }

  if (!/<handle><\/handle>/.test(normalized)) {
    return {
      success: false,
      message: {
        ru: 'У двери всё ещё нет ручки. Добавь <handle></handle>, чтобы герой мог её открыть.',
        uz: 'Eshikda hali dastak yo‘q. Qahramon ochishi uchun <handle></handle> qo‘sh.',
      },
    };
  }

  if (!/<door><handle><\/handle><\/door>/.test(normalized)) {
    return {
      success: false,
      message: {
        ru: 'Ручка должна быть внутри тегов <door>, а не рядом с ними.',
        uz: 'Dastak <door> teglari ichida bo‘lishi kerak, ularning yonida emas.',
      },
    };
  }

  return {
    success: false,
    message: { ru: 'Пока не то. Загляни в подсказки.', uz: 'Hali to‘g‘ri emas. Maslahatlarga qara.' },
  };
}

export const htmlLevel1 = {
  id: 'html-1',
  trackId: 'html',
  wingLabel: { ru: 'Разрушенные врата — HTML', uz: 'Vayron darvoza — HTML' },
  title: { ru: 'Уровень 1: Построй дверь', uz: '1-daraja: Eshikni yasash' },
  filename: 'door.html',
  goals: {
    ru: ['У врат не хватает двери.', 'Добавь ручку, чтобы герой мог её открыть.'],
    uz: ['Darvozada eshik yetishmayapti.', 'Qahramon ochishi uchun dastak qo‘sh.'],
  },
  hints: ['<door></door>', '<handle></handle>'],
  starterCode: '<!-- Построй дверь, чтобы герой мог пройти -->\n<door></door>\n',
  successMessage: {
    ru: 'Дверь со скрипом открывается — герой проходит внутрь.',
    uz: 'Eshik g‘ichirlab ochiladi — qahramon ichkariga o‘tadi.',
  },
  dungeonCaption: {
    ru: 'Дай двери ручку, чтобы герой мог её открыть.',
    uz: 'Qahramon ochishi uchun eshikka dastak ber.',
  },
  validate,
};
