import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import HeaderBar from '../shared/HeaderBar';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { TRACKS, TRACK_LEVEL_IDS } from '../../data/tracks';
import { isLevelPlayable } from '../../lib/levelGating';
import './track-path.css';

const LOCK_REASON = {
  html: 'lockedNeedsBasics',
  cssBasics: 'lockedNeedsHtml',
  css: 'lockedNeedsCssBasics',
};

// Levels snake left-right down the page (Duolingo-style path) instead of a
// straight list, purely as a visual rhythm — the offset is decorative and
// carries no meaning, so a smooth sine wave is enough (no need to avoid
// repeats or match anything in the data).
function waveOffset(index) {
  return Math.sin(index * 0.8);
}

export default function TrackPath() {
  const { trackId } = useParams();
  const { player } = usePlayer();
  const { t, tr } = useLanguage();

  if (!player) return null;

  const track = TRACKS[trackId];
  if (!track) return <Navigate to="/map" replace />;

  const trackState = player.tracks[track.id];
  const unlocked = trackState.unlocked;
  const completedCount = trackState.levelsCompleted.length;
  const totalCount = track.levels.length;
  const pct = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

  const currentLevel = track.levels.find((lvl) => {
    const inSequence = isLevelPlayable(TRACK_LEVEL_IDS[track.id], trackState, lvl.id);
    return unlocked && lvl.built && inSequence && !trackState.levelsCompleted.includes(lvl.id);
  });

  return (
    <div className="tp-page">
      <HeaderBar title={tr(track.name)} wingLabel={tr(track.subtitle)} backTo="/map" />

      <motion.div
        className="tp-summary"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="tp-summary-icon">{track.icon}</span>
        <div className="tp-summary-body">
          <p className="tp-summary-desc">{tr(track.description)}</p>
          {!unlocked && <p className="tp-lock-note">{t(`worldMap.${LOCK_REASON[track.id]}`)}</p>}
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
          <div className="progress-label">
            {completedCount}/{totalCount} {t('worldMap.levelsComplete')}
          </div>
        </div>
      </motion.div>

      <ol className="tp-path">
        {track.levels.map((lvl, i) => {
          const done = trackState.levelsCompleted.includes(lvl.id);
          const inSequence = isLevelPlayable(TRACK_LEVEL_IDS[track.id], trackState, lvl.id);
          const playable = unlocked && lvl.built && inSequence;
          const isCurrent = currentLevel?.id === lvl.id;

          let statusText = t('worldMap.play');
          if (done) statusText = t('worldMap.complete');
          else if (!unlocked || !inSequence) statusText = t('worldMap.locked');
          else if (!lvl.built) statusText = t('worldMap.comingSoon');

          const nodeClass = [
            'tp-node',
            done && 'tp-node--done',
            isCurrent && 'tp-node--current',
            !playable && 'tp-node--locked',
            lvl.openLesson && 'tp-node--open-lesson',
          ]
            .filter(Boolean)
            .join(' ');

          const inner = (
            <>
              <span className="tp-node-circle">
                {done ? '✓' : lvl.openLesson ? '🧩' : !playable ? '🔒' : i + 1}
              </span>
              <span className="tp-node-title">{tr(lvl.title)}</span>
              {isCurrent && <span className="tp-node-flag">{statusText}</span>}
            </>
          );

          return (
            <li
              key={lvl.id}
              className={nodeClass}
              style={{ '--tp-wave': waveOffset(i), '--tp-index': i }}
            >
              {playable ? (
                <Link className="tp-node-link" to={`/levels/${lvl.id}`}>
                  {inner}
                </Link>
              ) : (
                <span className="tp-node-link tp-node-link--disabled" title={statusText}>
                  {inner}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
