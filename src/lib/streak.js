// Dates are compared as local YYYY-MM-DD strings so "a day" means
// the player's calendar day, not a rolling 24h window.
export function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function daysBetween(aKey, bKey) {
  const a = new Date(aKey + 'T00:00:00Z');
  const b = new Date(bKey + 'T00:00:00Z');
  return Math.round((b - a) / 86400000);
}

/**
 * Returns the updated streak after a level completion today.
 * A day counts once at least one level is completed on it.
 * Missing a day resets the streak but never removes XP or badges.
 */
export function updateStreakOnCompletion(streak, now = new Date()) {
  const today = todayKey(now);

  if (streak.lastPlayedDate === today) {
    return streak; // already counted today
  }

  const gap = streak.lastPlayedDate ? daysBetween(streak.lastPlayedDate, today) : null;
  const current = gap === 1 ? streak.current + 1 : 1;

  return {
    current,
    longest: Math.max(streak.longest, current),
    lastPlayedDate: today,
  };
}
