import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBar from '../shared/HeaderBar';
import GoalsModal from '../shared/GoalsModal';
import CodeEditorPane from '../shared/CodeEditorPane';
import FeedbackBanner from '../shared/FeedbackBanner';
import HintsPanel from '../shared/HintsPanel';
import StatusPill from '../shared/StatusPill';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { BADGE_DEFINITIONS } from '../../lib/badges';

const STAGE_ANIMATION_MS = 550;
const HERO_WALK_MS = 550;

export default function HtmlLevelPage({ level, Viewport }) {
  const navigate = useNavigate();
  const { completeLevel } = usePlayer();
  const { t, tr } = useLanguage();

  const [showGoals, setShowGoals] = useState(true);
  const [code, setCode] = useState(level.starterCode);
  const [running, setRunning] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [stage, setStage] = useState('broken');
  const [heroPassed, setHeroPassed] = useState(false);
  const [hintsOpened, setHintsOpened] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState(null);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleRun = async () => {
    if (running) return;
    setFeedback(null);
    setRunning(true);

    const outcome = level.validate(code);

    if (!outcome.success) {
      setFailedAttempts((n) => n + 1);
      setFeedback({ kind: 'fail', title: t('feedback.tryAgainTitle'), body: tr(outcome.message) });
      setRunning(false);
      return;
    }

    setStage('ready');
    await sleep(STAGE_ANIMATION_MS);
    setStage('open');
    setHeroPassed(true);
    await sleep(HERO_WALK_MS);

    const summary = completeLevel({
      trackId: level.trackId,
      levelId: level.id,
      hintsOpened,
      failedAttempts,
    });

    setComplete(true);
    setResult(summary);
    setFeedback({
      kind: 'success',
      title: t('feedback.successTitle'),
      body: summary?.alreadyCompleted
        ? `${tr(level.successMessage)} ${t('feedback.alreadyCompleted')}`
        : tr(level.successMessage),
    });
    setRunning(false);
  };

  const handleContinue = () => {
    if (result?.leveledUp) {
      navigate('/level-up', {
        state: {
          fromLevel: result.fromLevel,
          toLevel: result.toLevel,
          newBadges: result.newBadges,
        },
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
    <div>
      <HeaderBar wingLabel={tr(level.wingLabel)} title={tr(level.title)} backTo={`/tracks/${level.trackId}`} />

      {showGoals && (
        <GoalsModal
          wingLabel={tr(level.wingLabel)}
          title={tr(level.title)}
          goals={tr(level.goals)}
          onStart={() => setShowGoals(false)}
        />
      )}

      <div className="level-main">
        <div className="dungeon-pane">
          <div style={{ alignSelf: 'flex-end' }}>
            <StatusPill complete={complete} />
          </div>
          <Viewport stage={stage} heroPassed={heroPassed} />
          <div className="dungeon-caption">{tr(level.dungeonCaption)}</div>
          <div className="goals-panel">
            <h3>{t('goals.heading')}</h3>
            <ul className="goals-list">
              {tr(level.goals).map((goal) => (
                <li key={goal} className={complete ? 'done' : ''}>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CodeEditorPane
          filename={level.filename}
          value={code}
          onChange={setCode}
          onRun={handleRun}
          running={running}
        >
          {feedback && (
            <FeedbackBanner
              kind={feedback.kind}
              title={feedback.title}
              body={feedback.body}
              xpAwarded={result?.xpAwarded}
              badges={earnedBadgeNames}
              onContinue={feedback.kind === 'success' ? handleContinue : null}
            />
          )}
          <HintsPanel hints={level.hints} onOpen={() => setHintsOpened(true)} />
        </CodeEditorPane>
      </div>
    </div>
  );
}
