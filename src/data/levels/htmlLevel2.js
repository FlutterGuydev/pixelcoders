// Whitelist-based validation: exact-pattern matching, never eval.
function normalize(code) {
  return code
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

const PLANKS_NEEDED = 3;

function validate(code) {
  const normalized = normalize(code);

  if (!/<bridge>/.test(normalized) || !/<\/bridge>/.test(normalized)) {
    return {
      success: false,
      message: {
        ru: 'Тег <bridge></bridge> отсутствует. Строй мост внутри него.',
        uz: '<bridge></bridge> tegi yo‘q. Ko‘prikni uning ichida qur.',
      },
    };
  }

  const bridgeMatch = normalized.match(/<bridge>([\s\S]*)<\/bridge>/);
  const bridgeInner = bridgeMatch ? bridgeMatch[1] : '';
  const plankCount = (bridgeInner.match(/<plank><\/plank>/g) || []).length;

  if (plankCount >= PLANKS_NEEDED) {
    return { success: true };
  }

  if (plankCount === 0) {
    return {
      success: false,
      message: {
        ru: `Мост пуст. Добавь ${PLANKS_NEEDED} доски: <plank></plank>.`,
        uz: `Ko‘prik bo‘sh. ${PLANKS_NEEDED} ta taxta qo‘sh: <plank></plank>.`,
      },
    };
  }

  return {
    success: false,
    message: {
      ru: `Ещё не хватает досок: ${plankCount}/${PLANKS_NEEDED}. Добавь ещё <plank></plank>.`,
      uz: `Hali taxtalar yetishmayapti: ${plankCount}/${PLANKS_NEEDED}. Yana <plank></plank> qo‘sh.`,
    },
  };
}

export const htmlLevel2 = {
  id: 'html-2',
  trackId: 'html',
  wingLabel: { ru: 'Разрушенные врата — HTML', uz: 'Vayron darvoza — HTML' },
  title: { ru: 'Уровень 2: Сломанный мост', uz: '2-daraja: Buzilgan ko‘prik' },
  filename: 'bridge.html',
  goals: {
    ru: [
      'Мост над пропастью разрушен.',
      `Положи ${PLANKS_NEEDED} доски <plank></plank> внутрь <bridge></bridge>, чтобы герой мог пройти.`,
    ],
    uz: [
      'Jarlik ustidagi ko‘prik buzilgan.',
      `Qahramon o‘tishi uchun <bridge></bridge> ichiga ${PLANKS_NEEDED} ta <plank></plank> taxta qo‘y.`,
    ],
  },
  hints: ['<plank></plank>', '<bridge><plank></plank><plank></plank><plank></plank></bridge>'],
  starterCode: '<!-- Почини мост: добавь три доски -->\n<bridge>\n</bridge>\n',
  successMessage: {
    ru: 'Доски встают на место — мост держит вес героя.',
    uz: 'Taxtalar joyiga tushadi — ko‘prik qahramonning vaznini ko‘taradi.',
  },
  dungeonCaption: {
    ru: 'Положи три доски в мост, чтобы через него можно было пройти.',
    uz: 'Ko‘prikdan o‘tish uchun unga uchta taxta qo‘y.',
  },
  validate,
};
