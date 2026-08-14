import { Link, useLocation } from 'react-router-dom';
import HeaderBar from '../shared/HeaderBar';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { TRACKS, TRACK_LEVEL_IDS } from '../../data/tracks';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import { isLevelPlayable } from '../../lib/levelGating';
import './world-map.css';

const LOCK_REASON = {
  html: 'lockedNeedsBasics',
  cssBasics: 'lockedNeedsHtml',
  css: 'lockedNeedsCssBasics',
};

export default function WorldMap() {
  const { player } = usePlayer();
  const { t, tr } = useLanguage();
  const location = useLocation();
  const newBadges = location.state?.newBadges || [];

  if (!player) return null;

  return (
    <div>
      <HeaderBar title={t('header.appTitle')} />
      <div className="world-map">
        <div className="world-map-intro">
          <h2>{t('worldMap.chooseWing')}</h2>
          <p>{t('worldMap.subtitle')}</p>
        </div>

        {newBadges.length > 0 && (
          <div className="new-badge-banner">
            {newBadges.length > 1 ? t('worldMap.newBadges') : t('worldMap.newBadge')}{' '}
            {newBadges
              .map((id) => tr(BADGE_DEFINITIONS.find((b) => b.id === id)?.name))
              .filter(Boolean)
              .join(', ')}
          </div>
        )}

        <div className="wing-grid">
          {Object.values(TRACKS).map((track) => {
            const trackState = player.tracks[track.id];
            const unlocked = trackState.unlocked;
            const completedCount = trackState.levelsCompleted.length;
            const totalCount = track.levels.length;
            const pct = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

            return (
              <div key={track.id} className={`wing-card${unlocked ? '' : ' locked'}`}>
                <div className="wing-card-head">
                  <span className="wing-card-icon">{track.icon}</span>
                  <div>
                    <span>{tr(track.subtitle)}</span>
                    <h3>{tr(track.name)}</h3>
                  </div>
                </div>
                <p className="wing-card-desc">{tr(track.description)}</p>

                {!unlocked && (
                  <p className="wing-lock-note">{t(`worldMap.${LOCK_REASON[track.id]}`)}</p>
                )}

                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
                <div className="progress-label">
                  {completedCount}/{totalCount} {t('worldMap.levelsComplete')}
                </div>

                <div className="level-chip-list">
                  {track.levels.map((lvl) => {
                    const done = trackState.levelsCompleted.includes(lvl.id);
                    const inSequence = isLevelPlayable(TRACK_LEVEL_IDS[track.id], trackState, lvl.id);
                    const playable = unlocked && lvl.built && inSequence;

                    if (!playable) {
                      const statusText = !unlocked
                        ? t('worldMap.locked')
                        : !lvl.built
                          ? t('worldMap.comingSoon')
                          : t('worldMap.locked');

                      return (
                        <span key={lvl.id} className="level-chip locked-chip">
                          <span>{tr(lvl.title)}</span>
                          <span className="chip-status">{statusText}</span>
                        </span>
                      );
                    }

                    return (
                      <Link
                        key={lvl.id}
                        className={`level-chip${done ? ' done' : ''}`}
                        to={`/levels/${lvl.id}`}
                      >
                        <span>{tr(lvl.title)}</span>
                        <span className="chip-status">
                          {done ? `${t('worldMap.complete')} ✓` : t('worldMap.play')}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <Link to="/playground" className="playground-card">
          <span className="playground-card-icon">🎨</span>
          <div>
            <h3>{t('playground.cardTitle')}</h3>
            <p>{t('playground.cardDesc')}</p>
          </div>
          <span className="playground-card-cta">{t('playground.cardButton')} →</span>
        </Link>
      </div>
    </div>
  );
}
