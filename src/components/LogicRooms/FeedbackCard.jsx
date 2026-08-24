const STATE_ICONS = {
  waiting: '🔍',
  correct: '✅',
  incorrect: '🤔',
  complete: '🎉',
};

// state: 'waiting' | 'correct' | 'incorrect' | 'complete'
// action: optional { label, onClick } — e.g. "Next snippet" after a correct
// guess, or "Continue" once the whole game is complete.
export default function FeedbackCard({ state, title, subtitle, action, xpAwarded, badgeNames }) {
  return (
    <div className={`lr2-card lr2-feedback-card lr2-feedback-${state}`}>
      <span className="lr2-feedback-icon" aria-hidden="true">
        {STATE_ICONS[state]}
      </span>
      <h3>{title}</h3>
      <p>{subtitle}</p>

      {(xpAwarded > 0 || badgeNames?.length > 0) && (
        <div className="lr2-feedback-rewards">
          {xpAwarded > 0 && <span className="lr2-xp-chip">✦ +{xpAwarded} XP</span>}
          {badgeNames?.map((name) => (
            <span key={name} className="lr2-badge-chip">
              🏅 {name}
            </span>
          ))}
        </div>
      )}

      {action && (
        <button type="button" className="lr2-action-btn" onClick={action.onClick}>
          {action.label}
        </button>
      )}
    </div>
  );
}
