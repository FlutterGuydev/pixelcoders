import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { unlockLabelForLevel } from '../../lib/xp';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import { useLanguage } from '../../i18n/LanguageContext';
import './level-up.css';

export default function LevelUpOverlay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, tr } = useLanguage();
  const { toLevel, newBadges = [], nextPath } = location.state || {};

  useEffect(() => {
    if (!toLevel) navigate('/map', { replace: true });
  }, [toLevel, navigate]);

  if (!toLevel) return null;

  const badgeNames = newBadges
    .map((id) => tr(BADGE_DEFINITIONS.find((b) => b.id === id)?.name))
    .filter(Boolean);

  return (
    <div className="level-up-overlay">
      <div className="level-up-burst" />
      <div className="level-up-card">
        <span className="level-up-hero">🧙✦</span>
        <h1 className="level-up-title">LEVEL {toLevel}!</h1>
        <p className="level-up-unlock">{tr(unlockLabelForLevel(toLevel))}</p>
        {badgeNames.length > 0 && (
          <p className="level-up-badges">
            {t('levelUp.alsoEarned')} {badgeNames.join(', ')}
          </p>
        )}
        <button
          className="level-up-continue"
          onClick={() => (nextPath ? navigate(nextPath) : navigate('/map', { state: { newBadges } }))}
        >
          {t('levelUp.continueBtn')}
        </button>
      </div>
    </div>
  );
}
