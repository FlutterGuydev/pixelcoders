// Whitelist-based validation: exact-pattern matching, never eval.
function normalize(code) {
  return code
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

const SOLVED_PATTERN = /^<vault><room><room><\/room><\/room><\/vault>$/;

function validate(code) {
  const normalized = normalize(code);

  if (SOLVED_PATTERN.test(normalized)) {
    return { success: true };
  }

  if (!/<vault>/.test(normalized) || !/<\/vault>/.test(normalized)) {
    return {
      success: false,
      message: {
        ru: 'Тег <vault></vault> отсутствует. Строй комнаты внутри него.',
        uz: '<vault></vault> tegi yo‘q. Xonalarni uning ichida qur.',
      },
    };
  }

  const vaultMatch = normalized.match(/<vault>([\s\S]*)<\/vault>/);
  const vaultInner = vaultMatch ? vaultMatch[1] : '';

  if (!/^<room>/.test(vaultInner)) {
    return {
      success: false,
      message: {
        ru: 'Внутри <vault> нужна первая комната: <room>.',
        uz: '<vault> ichida birinchi xona kerak: <room>.',
      },
    };
  }

  if (vaultInner === '<room></room>') {
    return {
      success: false,
      message: {
        ru: 'Первая комната есть, но внутри неё пусто. Построй ещё одну <room></room> внутри неё.',
        uz: 'Birinchi xona bor, lekin ichi bo‘sh. Uning ichiga yana bitta <room></room> qur.',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'Почти. Нужна одна комната <room> внутри другой комнаты <room>, а обе — внутри <vault>.',
      uz: 'Deyarli. Bitta <room> ikkinchi <room> ichida, ikkalasi esa <vault> ichida bo‘lishi kerak.',
    },
  };
}

export const htmlLevel3 = {
  id: 'html-3',
  trackId: 'html',
  wingLabel: { ru: 'Разрушенные врата — HTML', uz: 'Vayron darvoza — HTML' },
  title: { ru: 'Уровень 3: Вложенные комнаты', uz: '3-daraja: Ichma-ich xonalar' },
  filename: 'rooms.html',
  goals: {
    ru: [
      'За вратами — хранилище с пустотой вместо комнат.',
      'Построй <room> внутри <vault>, а внутри неё — ещё одну <room>.',
    ],
    uz: [
      'Darvoza ortida — xonalar o‘rniga bo‘shliq bo‘lgan xazina.',
      '<vault> ichida <room> qur, uning ichida esa — yana bitta <room>.',
    ],
  },
  hints: ['<room></room>', '<vault><room><room></room></room></vault>'],
  starterCode: '<!-- Построй комнату внутри комнаты, обе внутри хранилища -->\n<vault>\n</vault>\n',
  successMessage: {
    ru: 'Стены встают на место — комната за комнатой, до самого сердца хранилища.',
    uz: 'Devorlar joyiga tushadi — xona ichida xona, xazina yuragigacha.',
  },
  dungeonCaption: {
    ru: 'Вложи одну комнату в другую, чтобы герой прошёл вглубь хранилища.',
    uz: 'Qahramon xazina ichkarisiga o‘tishi uchun bir xonani ikkinchisiga joylashtir.',
  },
  validate,
};
