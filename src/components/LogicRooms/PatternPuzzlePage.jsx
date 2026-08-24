import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogicLanguageProvider, useLogicLanguage } from './LogicLanguageContext';
import LogicHeader from './LogicHeader';
import GoalCard from './GoalCard';
import FeedbackCard from './FeedbackCard';
import ProgressDots from './ProgressDots';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import { logicLevel4 } from '../../data/levels/logicLevel4';

const GROW_STAGGER_MS = 120;
const GROW_ANIMATION_MS = 350;
const SHIMMER_MS = 700;
const BOUNCE_MS = 420;

function Swatch({ size, color, className = '' }) {
  return <span className={`pattern-swatch ${className}`} style={{ width: size, height: size, background: color }} />;
}

function PatternGame() {
  const navigate = useNavigate();
  const { completeLevel } = usePlayer();
  const { tr: siteTr } = useLanguage();
  const { t } = useLogicLanguage();
  const level = logicLevel4;
  const rounds = level.rounds;

  const [roundIndex, setRoundIndex] = useState(0);
  const [filled, setFilled] = useState(false);
  const [roundSolved, setRoundSolved] = useState(false);
  const [wrongOptionId, setWrongOptionId] = useState(null);
  const [recentWrong, setRecentWrong] = useState(false);
  const [bounceToken, setBounceToken] = useState(0);
  const [solvedCount, setSolvedCount] = useState(0);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState(null);

  const round = rounds[roundIndex];
  const isLastRound = roundIndex === rounds.length - 1;
  const correctOption = round.options.find((o) => o.correct);

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

  const handlePick = (option) => {
    if (filled) return;

    if (option.correct) {
      setFilled(true);
      setSolvedCount((n) => n + 1);
      const waitMs = round.missingCount * GROW_STAGGER_MS + GROW_ANIMATION_MS + SHIMMER_MS;
      setTimeout(() => setRoundSolved(true), waitMs);
    } else {
      setFailedAttempts((n) => n + 1);
      setWrongOptionId(option.id);
      setBounceToken((n) => n + 1);
      setRecentWrong(true);
      setTimeout(() => {
        setWrongOptionId(null);
        setRecentWrong(false);
      }, BOUNCE_MS);
    }
  };

  const handleNext = () => {
    if (isLastRound) {
      finishLevel(failedAttempts);
    } else {
      setRoundIndex((r) => r + 1);
      setFilled(false);
      setRoundSolved(false);
      setWrongOptionId(null);
    }
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
    .map((id) => siteTr(BADGE_DEFINITIONS.find((b) => b.id === id)?.name))
    .filter(Boolean);

  let feedbackState = 'waiting';
  if (complete) feedbackState = 'complete';
  else if (filled) feedbackState = 'correct';
  else if (recentWrong) feedbackState = 'incorrect';

  const feedbackCopy = t(`pattern.feedback.${feedbackState}`);

  let action = null;
  if (complete) {
    action = { label: t('common.continueBtn'), onClick: handleContinue };
  } else if (roundSolved) {
    action = { label: isLastRound ? t('common.finish') : t('common.next'), onClick: handleNext };
  }

  return (
    <div className="lr2-page">
      <LogicHeader gameKey="pattern" score={{ solved: solvedCount, total: rounds.length }} />

      <main className="lr2-main">
        <div className="lr2-code-panel">
          <div className="lr2-file-tab">{t('pattern.whatNext')}</div>

          <div className="pattern-body">
            <div className="pattern-sequence">
              {round.sequence.map((item, i) => (
                <Swatch key={i} size={item.size} color={item.color} />
              ))}
              {Array.from({ length: round.missingCount }, (_, i) =>
                filled ? (
                  <Swatch
                    key={`f${i}`}
                    size={correctOption.items[i].size}
                    color={correctOption.items[i].color}
                    className="pattern-swatch--grow"
                  />
                ) : (
                  <span key={`e${i}`} className="pattern-swatch pattern-empty" />
                )
              )}
              {filled && <span className="pattern-shimmer" />}
            </div>

            <div className="pattern-options">
              {round.options.map((option) => {
                const isBouncing = wrongOptionId === option.id;
                return (
                  <button
                    key={isBouncing ? `${option.id}-${bounceToken}` : option.id}
                    type="button"
                    className={`pattern-option${isBouncing ? ' bounce' : ''}`}
                    onClick={() => handlePick(option)}
                    disabled={filled}
                  >
                    {option.items.map((item, i) => (
                      <Swatch key={i} size={item.size} color={item.color} />
                    ))}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="lr2-side-panel">
          <GoalCard heading={t('common.goalHeading')} body={t('pattern.goalBody')} />
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

export default function PatternPuzzlePage() {
  return (
    <LogicLanguageProvider>
      <PatternGame />
    </LogicLanguageProvider>
  );
}
