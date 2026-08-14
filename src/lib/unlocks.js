// Single source of truth for which tracks are open. Called after every
// completion (and on load, to keep storage honest if logic changes) so
// unlocking is never duplicated between storage.js and PlayerContext.
// Chain: basics -> html -> cssBasics -> css, each gated behind finishing
// the one before it — mirrors the "learn HTML, then CSS" curriculum order.
export function computeTrackUnlocks(tracksState, trackLevelIds) {
  const trackComplete = (trackId) =>
    trackLevelIds[trackId].every((id) => tracksState[trackId].levelsCompleted.includes(id));

  const basicsDone = trackComplete('basics');
  const htmlDone = trackComplete('html');
  const cssBasicsDone = trackComplete('cssBasics');

  return {
    ...tracksState,
    basics: { ...tracksState.basics, unlocked: true },
    html: { ...tracksState.html, unlocked: tracksState.html.unlocked || basicsDone },
    cssBasics: { ...tracksState.cssBasics, unlocked: tracksState.cssBasics.unlocked || htmlDone },
    css: { ...tracksState.css, unlocked: tracksState.css.unlocked || cssBasicsDone },
  };
}
