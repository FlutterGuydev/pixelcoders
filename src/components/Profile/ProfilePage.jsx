import HeaderBar from '../shared/HeaderBar';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { nextLevelInfo } from '../../lib/xp';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import './profile.css';

export default function ProfilePage() {
  const { player } = usePlayer();
  const { t, tr } = useLanguage();
  if (!player) return null;

  const { xpIntoLevel, xpForThisLevel, xpNeeded, nextLevel } = nextLevelInfo(player.totalXP);
  const pct = xpForThisLevel > 0 ? Math.min(100, Math.round((xpIntoLevel / xpForThisLevel) * 100)) : 100;

  return (
    <div>
      <HeaderBar title={t('profile.title')} backTo="/map" />
      <div className="profile-page">
        <div className="profile-hero-card">
          <div className="profile-avatar">🧙</div>
          <div className="profile-hero-info">
            <h2>{player.displayName}</h2>
            <p className="profile-level-line">
              {t('header.levelTitle')} {player.playerLevel} · {player.totalXP} {t('profile.totalXp')}
            </p>
            <div className="profile-xp-track">
              <div className="profile-xp-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="profile-xp-label">
              {xpNeeded} XP · {t('header.levelTitle')} {nextLevel}
            </div>
          </div>
          <div className="profile-streak">
            <span className="flame">🔥</span>
            <span className="streak-num">{player.streak.current}</span>
            <span className="streak-sub">
              {t('profile.dayStreak')} ({t('profile.best')} {player.streak.longest})
            </span>
          </div>
        </div>

        <div className="profile-section">
          <h3>{t('profile.badgeCase')}</h3>
          <div className="badge-case">
            {BADGE_DEFINITIONS.map((badge) => {
              const earned = player.badges.includes(badge.id);
              return (
                <div key={badge.id} className={`badge-tile${earned ? '' : ' locked'}`}>
                  <span className="badge-icon">{badge.icon}</span>
                  <div className="badge-name">{tr(badge.name)}</div>
                  <div className="badge-desc">{tr(badge.description)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
