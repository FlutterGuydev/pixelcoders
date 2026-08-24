import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import HeaderBar from '../shared/HeaderBar';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { TRACKS } from '../../data/tracks';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import './world-map.css';

const LOCK_REASON = {
  html: 'lockedNeedsBasics',
  cssBasics: 'lockedNeedsHtml',
  css: 'lockedNeedsCssBasics',
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
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

        <motion.div className="wing-grid" variants={gridVariants} initial="hidden" animate="visible">
          {Object.values(TRACKS).map((track) => {
            const trackState = player.tracks[track.id];
            const unlocked = trackState.unlocked;
            const completedCount = trackState.levelsCompleted.length;
            const totalCount = track.levels.length;
            const pct = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;
            const started = completedCount > 0;

            const card = (
              <>
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

                <span className="wing-card-cta">
                  {started ? t('worldMap.continueTrack') : t('worldMap.enterTrack')} →
                </span>
              </>
            );

            return (
              <motion.div key={track.id} variants={cardVariants} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
                {unlocked ? (
                  <Link to={`/tracks/${track.id}`} className="wing-card">
                    {card}
                  </Link>
                ) : (
                  <div className="wing-card locked">{card}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/playground" className="playground-card">
            <span className="playground-card-icon">🎨</span>
            <div>
              <h3>{t('playground.cardTitle')}</h3>
              <p>{t('playground.cardDesc')}</p>
            </div>
            <span className="playground-card-cta">{t('playground.cardButton')} →</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.38 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/duel" className="duel-entry-card">
            <span className="duel-entry-card-icon">⚔️</span>
            <div>
              <h3>{t('duel.cardTitle')}</h3>
              <p>{t('duel.cardDesc')}</p>
            </div>
            <span className="duel-entry-card-cta">{t('duel.cardButton')} →</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
