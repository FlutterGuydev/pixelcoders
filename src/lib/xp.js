// Flat, always-visible level thresholds — never a hidden formula.
export const LEVEL_THRESHOLDS = [
  { level: 1, xp: 0, unlocks: { ru: 'Открыты вводные уровни HTML', uz: 'HTML kirish darslari ochildi' } },
  { level: 2, xp: 150, unlocks: { ru: 'Открыт трек CSS', uz: 'CSS yoʻnalishi ochildi' } },
  { level: 3, xp: 350, unlocks: { ru: 'Новый слот косметики героя', uz: "Yangi qahramon koʻrinishi slot" } },
  {
    level: 4,
    xp: 600,
    unlocks: { ru: 'Продвинутые уровни HTML (вложенные структуры)', uz: 'Ilgʻor HTML darslari (ichma-ich tuzilmalar)' },
  },
  {
    level: 5,
    xp: 900,
    unlocks: { ru: 'Продвинутые уровни CSS (раскладка, трансформации)', uz: 'Ilgʻor CSS darslari (joylashuv, transformatsiya)' },
  },
];

const LEVEL_6_PLUS_STEP = 500;

// Levels 6+ step by a flat 500 XP past the level 5 threshold.
export function xpForLevel(level) {
  const known = LEVEL_THRESHOLDS.find((entry) => entry.level === level);
  if (known) return known.xp;
  const base = LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  return base.xp + (level - base.level) * LEVEL_6_PLUS_STEP;
}

export function unlockLabelForLevel(level) {
  const known = LEVEL_THRESHOLDS.find((entry) => entry.level === level);
  if (known) return known.unlocks;
  return { ru: 'Косметика, повышение ранга значков', uz: "Koʻrinish sovgʻasi, nishon darajasi oshdi" };
}

export function playerLevelForXp(totalXp) {
  let level = 1;
  while (xpForLevel(level + 1) <= totalXp) level += 1;
  return level;
}

export function nextLevelInfo(totalXp) {
  const currentLevel = playerLevelForXp(totalXp);
  const nextLevel = currentLevel + 1;
  const nextThreshold = xpForLevel(nextLevel);
  return {
    nextLevel,
    xpNeeded: Math.max(0, nextThreshold - totalXp),
    xpIntoLevel: totalXp - xpForLevel(currentLevel),
    xpForThisLevel: nextThreshold - xpForLevel(currentLevel),
  };
}

const STREAK_XP_CAP = 25;
const STREAK_XP_PER_DAY = 5;

/**
 * XP awarded for one level completion.
 * base 50, +20 no hints opened, +15 no failed Run attempts,
 * +5/day of current streak capped at +25.
 */
export function computeCompletionXp({ hintsOpened, failedAttempts, streakDays }) {
  let xp = 50;
  if (!hintsOpened) xp += 20;
  if (failedAttempts === 0) xp += 15;
  xp += Math.min(streakDays * STREAK_XP_PER_DAY, STREAK_XP_CAP);
  return xp;
}
