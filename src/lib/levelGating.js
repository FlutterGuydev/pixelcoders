// A level is playable once every level before it (in the track's canonical
// order) is completed — this is what makes each track a real step-by-step
// path instead of a grid of independently-unlocked levels. An already-
// completed level stays playable (for replay) even if this changes later.
export function isLevelPlayable(levelIds, trackState, levelId) {
  const idx = levelIds.indexOf(levelId);
  if (idx <= 0) return true;
  if (trackState.levelsCompleted.includes(levelId)) return true;
  return levelIds.slice(0, idx).every((id) => trackState.levelsCompleted.includes(id));
}
