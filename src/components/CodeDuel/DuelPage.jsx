import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBar from '../shared/HeaderBar';
import GoalsModal from '../shared/GoalsModal';
import CodeEditorPane from '../shared/CodeEditorPane';
import FeedbackBanner from '../shared/FeedbackBanner';
import HintsPanel from '../shared/HintsPanel';
import DuelTrack from './DuelTrack';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { getDuelPuzzle } from '../../data/duelPuzzles';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import './code-duel.css';

const COUNTDOWN_STEP_MS = 700;
const GO_HOLD_MS = 500;
const PLAYER_SPRINT_MS = 450;

export default function DuelPage() {
  const { puzzleId } = useParams();
  const puzzle = getDuelPuzzle(puzzleId);
  const navigate = useNavigate();
  const { player, recordDuelWin } = usePlayer();
  const { t, tr } = useLanguage();

  const [showIntro, setShowIntro] = useState(true);
  const [phase, setPhase] = useState('idle'); // idle | countdown | racing | playerWon | byteWon
  const [countdownText, setCountdownText] = useState(null);
  const [raceId, setRaceId] = useState(0);

  const [code, setCode] = useState(puzzle?.starterCode || '');
  const [feedback, setFeedback] = useState(null);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [result, setResult] = useState(null);

  const [byteTarget, setByteTarget] = useState(0);
  const [playerTarget, setPlayerTarget] = useState(0);
  const byteTrackRef = useRef(null);
  const playerTrackRef = useRef(null);

  const eligible =
    puzzle && player && player.tracks[puzzle.requiresTrackId]?.levelsCompleted.includes(puzzle.requiresLevelId);

  useEffect(() => {
    if (player && (!puzzle || !eligible)) {
      navigate('/duel', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player, puzzle, eligible]);

  useEffect(() => {
    if (phase !== 'countdown') return undefined;
    let step = 3;
    setCountdownText(String(step));
    const timer = setInterval(() => {
      step -= 1;
      if (step === 0) {
        setCountdownText(t('duel.go'));
        clearInterval(timer);
        setTimeout(() => {
          setCountdownText(null);
          setPhase('racing');
          setByteTarget(100);
        }, GO_HOLD_MS);
      } else {
        setCountdownText(String(step));
      }
    }, COUNTDOWN_STEP_MS);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, raceId]);

  if (!puzzle || !eligible) return null;

  const handleStart = () => {
    setShowIntro(false);
    setPhase('countdown');
  };

  const handleRun = () => {
    if (phase !== 'racing') return;
    setFeedback(null);

    const outcome = puzzle.validate(code);

    if (!outcome.success) {
      setFailedAttempts((n) => n + 1);
      setFeedback({ kind: 'fail', title: t('feedback.tryAgainTitle'), body: tr(outcome.message) });
      return;
    }

    setPhase('playerWon');
    byteTrackRef.current?.freeze();
    setPlayerTarget(100);

    const summary = recordDuelWin();
    setResult(summary);
    setFeedback({
      kind: 'success',
      title: t('duel.youWinTitle'),
      body: t('duel.youWinBody'),
    });
  };

  const handleByteFinish = () => {
    if (phase !== 'racing') return;
    setPhase('byteWon');
    setFeedback({ kind: 'fail', title: t('duel.byteWinTitle'), body: t('duel.byteWinBody') });
  };

  const handleRematch = () => {
    setRaceId((n) => n + 1);
    setCode(puzzle.starterCode);
    setFeedback(null);
    setFailedAttempts(0);
    setResult(null);
    setByteTarget(0);
    setPlayerTarget(0);
    setPhase('countdown');
  };

  const raceOver = phase === 'playerWon' || phase === 'byteWon';

  const earnedBadgeNames = (result?.newBadges || [])
    .map((id) => tr(BADGE_DEFINITIONS.find((b) => b.id === id)?.name))
    .filter(Boolean);

  return (
    <div className="code-duel">
      <HeaderBar wingLabel={t('duel.wingLabel')} title={tr(puzzle.title)} backTo="/duel" />

      {showIntro && (
        <GoalsModal
          wingLabel={t('duel.wingLabel')}
          title={tr(puzzle.title)}
          goals={tr(puzzle.goals)}
          onStart={handleStart}
        />
      )}

      {countdownText !== null && (
        <div className="duel-countdown-overlay">
          <span className="duel-countdown-text">{countdownText}</span>
        </div>
      )}

      <div className="duel-main">
        <div className="duel-race-pane">
          <DuelTrack
            key={`player-${raceId}`}
            ref={playerTrackRef}
            label={t('duel.youLabel')}
            heroEmoji="🧙"
            targetPercent={playerTarget}
            durationMs={PLAYER_SPRINT_MS}
            resultLabel={phase === 'playerWon' ? t('duel.winnerTag') : null}
          />
          <DuelTrack
            key={`byte-${raceId}`}
            ref={byteTrackRef}
            label={t('duel.byteLabel')}
            heroEmoji="🤖"
            targetPercent={byteTarget}
            durationMs={puzzle.byteDurationMs}
            onFinish={handleByteFinish}
            resultLabel={phase === 'byteWon' ? t('duel.winnerTag') : null}
          />

          <div className="goals-panel">
            <h3>{t('goals.heading')}</h3>
            <ul className="goals-list">
              {tr(puzzle.goals).map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>

          {failedAttempts > 0 && (
            <div className="duel-attempts">
              {t('duel.attempts')}: {failedAttempts}
            </div>
          )}
        </div>

        <CodeEditorPane
          filename={puzzle.filename}
          value={code}
          onChange={setCode}
          onRun={handleRun}
          running={phase !== 'racing'}
        >
          {feedback && (
            <FeedbackBanner
              kind={feedback.kind}
              title={feedback.title}
              body={feedback.body}
              xpAwarded={result?.xpAwarded}
              badges={earnedBadgeNames}
            />
          )}
          <HintsPanel hints={puzzle.hints} onOpen={() => setHintsOpened(true)} />

          {raceOver && (
            <div className="duel-postrace">
              {result?.leveledUp && (
                <button
                  className="continue-btn"
                  onClick={() =>
                    navigate('/level-up', {
                      state: { fromLevel: result.fromLevel, toLevel: result.toLevel, newBadges: result.newBadges },
                    })
                  }
                >
                  {t('levelUp.continueBtn')}
                </button>
              )}
              <button className="run-btn" onClick={handleRematch}>
                {t('duel.rematch')}
              </button>
              <button className="header-back" onClick={() => navigate('/duel')}>
                {t('duel.backToLobby')}
              </button>
            </div>
          )}
        </CodeEditorPane>
      </div>
    </div>
  );
}
