import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogicLanguageProvider, useLogicLanguage } from './LogicLanguageContext';
import LogicHeader from './LogicHeader';
import GoalCard from './GoalCard';
import FeedbackCard from './FeedbackCard';
import ProgressDots from './ProgressDots';
import Particles from './Particles';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import { nextLogicLevelId } from '../../data/logicLevels';
import './logic-rooms.css';

const RUN_ANIMATION_MS = 500;
const DIRECTION_TRANSFORMS = {
  up: 'translateY(-36px)',
  down: 'translateY(36px)',
  left: 'translateX(-36px)',
  right: 'translateX(36px)',
};

function PredictViewport({ round, phase }) {
  const active = phase !== 'choosing';

  if (round.type === 'color') {
    return <div className="predict-color-box" style={{ backgroundColor: active ? round.correctColor : undefined }} />;
  }

  return (
    <div className="predict-direction-track">
      <span
        className="predict-hero"
        style={{ transform: active ? DIRECTION_TRANSFORMS[round.correctOptionId] : 'translate(0, 0)' }}
      >
        🧙
      </span>
    </div>
  );
}

function PredictGame({ level }) {
  const navigate = useNavigate();
  const { completeLevel } = usePlayer();
  const { tr: siteTr } = useLanguage();
  const { t } = useLogicLanguage();
  const rounds = level.rounds;

  const [roundIndex, setRoundIndex] = useState(0);
  const [phase, setPhase] = useState('choosing'); // choosing | running | revealed
  const [selectedId, setSelectedId] = useState(null);
  const [solvedCount, setSolvedCount] = useState(0);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState(null);

  const round = rounds[roundIndex];
  const lines = siteTr(round.code);
  const isLastRound = roundIndex === rounds.length - 1;
  const isCorrect = phase === 'revealed' && selectedId === round.correctOptionId;

  const finishLevel = (attempts) => {
    const summary = completeLevel({
      trackId: level.trackId,
      levelId: level.id,
      hintsOpened: false,
      failedAttempts: attempts,
    });
    setComplete(true);
    setResult(summary);
  };

  const handleSelect = (id) => {
    if (phase !== 'choosing') return;
    setSelectedId(id);
  };

  const handleRun = () => {
    if (!selectedId || phase !== 'choosing') return;
    setPhase('running');
    setTimeout(() => {
      setPhase('revealed');
      if (selectedId === round.correctOptionId) {
        setSolvedCount((n) => n + 1);
      } else {
        setFailedAttempts((n) => n + 1);
      }
    }, RUN_ANIMATION_MS);
  };

  const handleNext = () => {
    if (isLastRound) {
      finishLevel(failedAttempts);
    } else {
      setRoundIndex((r) => r + 1);
      setSelectedId(null);
      setPhase('choosing');
    }
  };

  const nextLevelId = nextLogicLevelId(level.id);
  const nextPath = nextLevelId ? `/levels/${nextLevelId}` : '/tracks/logic';

  const handleContinue = () => {
    if (result?.leveledUp) {
      navigate('/level-up', {
        state: { fromLevel: result.fromLevel, toLevel: result.toLevel, newBadges: result.newBadges, nextPath },
      });
    } else {
      navigate(nextPath);
    }
  };

  const earnedBadgeNames = (result?.newBadges || [])
    .map((id) => siteTr(BADGE_DEFINITIONS.find((b) => b.id === id)?.name))
    .filter(Boolean);

  const renderOptionChip = (option) =>
    round.type === 'color' ? (
      <span className="predict-swatch" style={{ background: option.color }} />
    ) : (
      <span className="predict-arrow">{option.arrow}</span>
    );

  const selectedOption = round.options.find((o) => o.id === selectedId);
  const correctOption = round.options.find((o) => o.id === round.correctOptionId);

  let feedbackState = 'waiting';
  if (complete) feedbackState = 'complete';
  else if (phase === 'revealed') feedbackState = isCorrect ? 'correct' : 'incorrect';

  const feedbackCopy = t(`predict.feedback.${feedbackState}`);

  let action = null;
  if (complete) {
    action = { label: t('common.continueBtn'), onClick: handleContinue };
  } else if (phase === 'revealed') {
    action = { label: isLastRound ? t('common.finish') : t('common.next'), onClick: handleNext };
  }

  return (
    <div className="lr2-page">
      <LogicHeader gameKey="predict" score={{ solved: solvedCount, total: rounds.length }} />

      <main className="lr2-main">
        <div className="lr2-code-panel">
          <div className="lr2-file-tab">{round.filename}</div>
          <div className="lr2-line-list">
            {lines.map((line, i) => (
              <div key={i} className="logic-code-plain-line">
                <code>{line}</code>
              </div>
            ))}
          </div>

          <div className="predict-panel">
            <div className="predict-stage">
              <PredictViewport round={round} phase={phase} />
            </div>

            <p className="predict-question">{siteTr(round.question)}</p>

            <div className="predict-options">
              {round.options.map((option) => {
                const selected = selectedId === option.id;
                const showCheck = isCorrect && selected;
                return (
                  <button
                    key={option.id}
                    type="button"
                    className={`predict-option${round.type === 'color' ? ' swatch-type' : ' direction-type'}${selected ? ' selected' : ''}`}
                    onClick={() => handleSelect(option.id)}
                    disabled={phase !== 'choosing'}
                  >
                    {renderOptionChip(option)}
                    {showCheck && (
                      <>
                        <span className="predict-check">✓</span>
                        <Particles count={5} radius={18} />
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {phase !== 'revealed' && (
              <button className="run-btn" onClick={handleRun} disabled={!selectedId || phase === 'running'}>
                {t('predict.run')}
              </button>
            )}

            {phase === 'revealed' && !isCorrect && (
              <div className="predict-compare">
                <div className="predict-compare-chip">
                  <span className="predict-compare-label">{t('predict.yourAnswer')}</span>
                  {renderOptionChip(selectedOption)}
                </div>
                <div className="predict-compare-chip">
                  <span className="predict-compare-label">{t('predict.correctAnswer')}</span>
                  {renderOptionChip(correctOption)}
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="lr2-side-panel">
          <GoalCard heading={t('common.goalHeading')} body={t('predict.goalBody')} />
          <FeedbackCard
            state={feedbackState}
            title={feedbackCopy.title}
            subtitle={feedbackCopy.subtitle}
            action={action}
            xpAwarded={complete ? result?.xpAwarded : undefined}
            badgeNames={complete ? earnedBadgeNames : undefined}
          />
          <ProgressDots count={rounds.length} current={roundIndex} />
        </aside>
      </main>
    </div>
  );
}

export default function PredictOutputPage({ level }) {
  return (
    <LogicLanguageProvider>
      <PredictGame level={level} />
    </LogicLanguageProvider>
  );
}
