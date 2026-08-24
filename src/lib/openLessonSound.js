// Tiny procedural "snap" cue for block placement — synthesized so the
// module needs no audio assets. Silently no-ops where Web Audio is
// unavailable (older browsers, autoplay-restricted contexts).
let audioCtx;

export function playSnapSound() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(660, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
    gain.gain.setValueAtTime(0.16, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.13);
  } catch {
    // Web Audio not available - the visual snap animation still plays.
  }
}
