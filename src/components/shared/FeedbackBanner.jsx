import { useLanguage } from '../../i18n/LanguageContext';

export default function FeedbackBanner({ kind, title, body, badges, xpAwarded, onContinue }) {
  const { t } = useLanguage();
  if (!kind) return null;

  return (
    <div className={`feedback-banner ${kind}`}>
      <span className="banner-title">{title}</span>
      <span>{body}</span>
      {kind === 'success' && (
        <div className="banner-actions">
          {xpAwarded > 0 && <span className="xp-toast">✦ +{xpAwarded} XP</span>}
          {badges?.map((name) => (
            <span key={name} className="badge-toast">
              🏅 {t('feedback.badgeEarned')} {name}
            </span>
          ))}
          {onContinue && (
            <div style={{ marginTop: 10 }}>
              <button className="continue-btn" onClick={onContinue}>
                {t('common.continueBtn')}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
