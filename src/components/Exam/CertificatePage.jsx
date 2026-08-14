import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import './certificate.css';

export default function CertificatePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { player } = usePlayer();
  const { lang, t, tr } = useLanguage();
  const { newBadges = [] } = location.state || {};

  useEffect(() => {
    if (!player) navigate('/map', { replace: true });
  }, [player, navigate]);

  if (!player) return null;

  const badgeNames = newBadges
    .map((id) => tr(BADGE_DEFINITIONS.find((b) => b.id === id)?.name))
    .filter(Boolean);

  const today = new Date().toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'uz-Latn-UZ');

  return (
    <div className="certificate-overlay">
      <div className="certificate-card">
        <span className="certificate-seal">🎓</span>
        <span className="certificate-kicker">{t('exam.certifiedKicker')}</span>
        <h1 className="certificate-title">HTML</h1>
        <p className="certificate-name">{player.displayName}</p>
        <p className="certificate-line">{t('exam.certifiedLine')}</p>
        <p className="certificate-date">{today}</p>
        {badgeNames.length > 0 && (
          <p className="certificate-badges">
            {t('levelUp.alsoEarned')} {badgeNames.join(', ')}
          </p>
        )}
        <button className="certificate-continue" onClick={() => navigate('/map', { state: { newBadges } })}>
          {t('levelUp.continueBtn')}
        </button>
      </div>
    </div>
  );
}
