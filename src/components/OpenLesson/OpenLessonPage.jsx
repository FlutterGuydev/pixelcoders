import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBar from '../shared/HeaderBar';
import GoalsModal from '../shared/GoalsModal';
import BlockPalette from './BlockPalette';
import BlockStack from './BlockStack';
import OpenLessonDoorViewport from './OpenLessonDoorViewport';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import { playSnapSound } from '../../lib/openLessonSound';
import './open-lesson.css';

const HOP_MS = 400;
const SETTLE_MS = 300;
const MISHAP_MS = 500;
const CHEER_MS = 900;

export default function OpenLessonPage({ level }) {
  const navigate = useNavigate();
  const { completeLevel } = usePlayer();
  const { t, tr } = useLanguage();

  const [showGoals, setShowGoals] = useState(true);
  const [stack, setStack] = useState([]);
  const uidCounter = useRef(0);

  const [running, setRunning] = useState(false);
  const [doorBuilt, setDoorBuilt] = useState(false);
  const [handleBuilt, setHandleBuilt] = useState(false);
  const [torchLit, setTorchLit] = useState(false);
  const [heroStage, setHeroStage] = useState('idle');
  const [mishap, setMishap] = useState(false);
  const [mishapUid, setMishapUid] = useState(null);

  const [feedback, setFeedback] = useState(null);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState(null);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const addBlockAt = (type, index) => {
    const uid = `b${uidCounter.current++}`;
    setStack((prev) => {
      const next = [...prev];
      next.splice(index, 0, { uid, type });
      return next;
    });
    playSnapSound();
  };

  const moveBlockTo = (uid, index) => {
    setStack((prev) => {
      const from = prev.findIndex((b) => b.uid === uid);
      if (from === -1) return prev;
      const next = [...prev];
      const [item] = next.splice(from, 1);
      const adjustedIndex = from < index ? index - 1 : index;
      next.splice(adjustedIndex, 0, item);
      return next;
    });
    playSnapSound();
  };

  const handleDrop = (e, index) => {
    if (running) return;
    let data;
    try {
      data = JSON.parse(e.dataTransfer.getData('text/plain'));
    } catch {
      return;
    }
    if (!data) return;
    if (data.source === 'palette') addBlockAt(data.type, index);
    else if (data.source === 'stack') moveBlockTo(data.uid, index);
  };

  const removeBlock = (uid) => {
    if (running) return;
    setStack((prev) => prev.filter((b) => b.uid !== uid));
  };

  const resetStack = () => {
    if (running) return;
    setStack([]);
    setFeedback(null);
  };

  const handleRun = async () => {
    if (running || stack.length === 0) return;
    setFeedback(null);
    setRunning(true);
    setDoorBuilt(false);
    setHandleBuilt(false);
    setTorchLit(false);
    setHeroStage('idle');

    const outcome = level.validate(stack);

    let doorPresent = false;
    for (const block of stack) {
      setHeroStage('hop');
      await sleep(HOP_MS);

      if (block.type === 'door') {
        doorPresent = true;
        setDoorBuilt(true);
        playSnapSound();
      } else if (block.type === 'handle') {
        if (doorPresent) {
          setHandleBuilt(true);
          playSnapSound();
        } else {
          setMishapUid(block.uid);
          setMishap(true);
          await sleep(MISHAP_MS);
          setMishap(false);
          setMishapUid(null);
        }
      } else if (block.type === 'torch') {
        setTorchLit(true);
        playSnapSound();
      }

      setHeroStage('idle');
      await sleep(SETTLE_MS);
    }

    if (!outcome.success) {
      setFailedAttempts((n) => n + 1);
      setHeroStage('confused');
      setFeedback({
        kind: 'nudge',
        title: t('openLesson.nudgeTitle'),
        body: t(`openLesson.${outcome.reason}`),
      });
      await sleep(700);
      setHeroStage('idle');
      setRunning(false);
      return;
    }

    setHeroStage('cheer');
    await sleep(CHEER_MS);

    const summary = completeLevel({
      trackId: level.trackId,
      levelId: level.id,
      hintsOpened: false,
      failedAttempts,
    });

    setComplete(true);
    setResult(summary);
    setFeedback({
      kind: 'success',
      title: t('openLesson.successTitle'),
      body: summary?.alreadyCompleted
        ? `${tr(level.successMessage)} ${t('feedback.alreadyCompleted')}`
        : tr(level.successMessage),
    });
    setRunning(false);
  };

  const handleContinue = () => {
    if (result?.leveledUp) {
      navigate('/level-up', {
        state: { fromLevel: result.fromLevel, toLevel: result.toLevel, newBadges: result.newBadges },
      });
    } else if (result?.newBadges?.length) {
      navigate('/map', { state: { newBadges: result.newBadges } });
    } else {
      navigate('/map');
    }
  };

  const earnedBadgeNames = (result?.newBadges || [])
    .map((id) => tr(BADGE_DEFINITIONS.find((b) => b.id === id)?.name))
    .filter(Boolean);

  return (
    <div className="open-lesson">
      <HeaderBar wingLabel={tr(level.wingLabel)} title={tr(level.title)} backTo={`/tracks/${level.trackId}`} />

      {showGoals && (
        <GoalsModal
          wingLabel={tr(level.wingLabel)}
          title={tr(level.title)}
          goals={tr(level.goals)}
          onStart={() => setShowGoals(false)}
        />
      )}

      <div className="ol-main">
        <div className="ol-scene-pane">
          <OpenLessonDoorViewport
            doorBuilt={doorBuilt}
            handleBuilt={handleBuilt}
            torchLit={torchLit}
            heroStage={heroStage}
            mishap={mishap}
          />
          <div className="ol-caption">{tr(level.dungeonCaption)}</div>
          <div className="ol-goals">
            <h3>{t('goals.heading')}</h3>
            <ul>
              {tr(level.goals).map((goal) => (
                <li key={goal} className={complete ? 'done' : ''}>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ol-blocks-pane">
          <BlockPalette blockIds={level.blocks} onAddBlock={(type) => addBlockAt(type, stack.length)} disabled={running} />

          <h3 className="block-panel-heading">{t('openLesson.canvasHeading')}</h3>
          <BlockStack stack={stack} onDrop={handleDrop} onRemove={removeBlock} disabled={running} mishapUid={mishapUid} />

          <div className="ol-controls">
            <button className="ol-run-btn" onClick={handleRun} disabled={running || stack.length === 0}>
              {t('openLesson.runBtn')}
            </button>
            <button className="ol-reset-btn" onClick={resetStack} disabled={running || stack.length === 0}>
              {t('openLesson.resetBtn')}
            </button>
          </div>

          {feedback && (
            <div className={`ol-feedback ${feedback.kind}`}>
              <span className="ol-feedback-title">{feedback.title}</span>
              <span>{feedback.body}</span>
              {feedback.kind === 'success' && (
                <div className="ol-feedback-actions">
                  {result?.xpAwarded > 0 && <span className="ol-xp-toast">✦ +{result.xpAwarded} XP</span>}
                  {earnedBadgeNames.map((name) => (
                    <span key={name} className="ol-badge-toast">
                      🏅 {name}
                    </span>
                  ))}
                  <button className="ol-continue-btn" onClick={handleContinue}>
                    {t('common.continueBtn')}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
