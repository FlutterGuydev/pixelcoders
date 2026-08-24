import { forwardRef, useImperativeHandle, useRef } from 'react';

// A single race lane: a hero icon riding a fill bar toward a flag. Byte's
// lane fills on a CSS width transition timed to byteDurationMs; the
// player's lane stays at 0% until they win, then sprints to 100% quickly.
// `freeze()` is exposed so the lane that didn't finish first can be locked
// exactly where it was interrupted, instead of snapping to 0 or 100.
const DuelTrack = forwardRef(function DuelTrack(
  { label, heroEmoji, targetPercent, durationMs, onFinish, resultLabel },
  ref
) {
  const fillRef = useRef(null);
  const trackRef = useRef(null);

  useImperativeHandle(ref, () => ({
    freeze() {
      const fillEl = fillRef.current;
      const trackEl = trackRef.current;
      if (!fillEl || !trackEl) return;
      const fillRect = fillEl.getBoundingClientRect();
      const trackRect = trackEl.getBoundingClientRect();
      const pct = trackRect.width > 0 ? (fillRect.width / trackRect.width) * 100 : 0;
      fillEl.style.transitionDuration = '0ms';
      fillEl.style.width = `${pct}%`;
    },
  }));

  return (
    <div className={`duel-lane${resultLabel ? ' finished' : ''}`}>
      <div className="duel-lane-head">
        <span className="duel-lane-hero">{heroEmoji}</span>
        <span className="duel-lane-label">{label}</span>
        {resultLabel && <span className="duel-lane-result">{resultLabel}</span>}
      </div>
      <div className="duel-track" ref={trackRef}>
        <div
          ref={fillRef}
          className="duel-track-fill"
          style={{ width: `${targetPercent}%`, transitionDuration: `${durationMs}ms` }}
          onTransitionEnd={(e) => {
            if (e.propertyName === 'width') onFinish?.();
          }}
        />
        <span className="duel-track-flag">🏁</span>
      </div>
    </div>
  );
});

export default DuelTrack;
