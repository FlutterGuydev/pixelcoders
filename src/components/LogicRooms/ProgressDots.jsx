// One dot per snippet/round: done (already solved), active (current), or
// idle (not reached yet).
export default function ProgressDots({ count, current }) {
  return (
    <div className="lr2-progress-dots" role="progressbar" aria-valuemin={1} aria-valuemax={count} aria-valuenow={current + 1}>
      {Array.from({ length: count }, (_, i) => {
        const state = i < current ? 'done' : i === current ? 'active' : 'idle';
        return <span key={i} className={`lr2-dot lr2-dot--${state}`} />;
      })}
    </div>
  );
}
