import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogicLanguageProvider, useLogicLanguage } from './LogicLanguageContext';
import LogicHeader from './LogicHeader';
import GoalCard from './GoalCard';
import FeedbackCard from './FeedbackCard';
import ProgressDots from './ProgressDots';
import { highlightLine } from './syntaxHighlight';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import './logic-rooms.css';

const POP_ANIMATION_MS = 650;
const SHAKE_ANIMATION_MS = 420;

function CodeLine({ line, index, state, onClick }) {
  const tokens = highlightLine(line);
  return (
    <div
      className={`lr2-code-line${state === 'correct' ? ' lr2-line-correct' : ''}${state === 'shake' ? ' lr2-line-shake' : ''}`}
      onClick={onClick}
    >
      <span className="lr2-line-num">{index + 1}</span>
      <span className="lr2-line-content">
        {tokens.map((tok, i) => (
          <span key={i} className={tok.cls}>
            {tok.text}
          </span>
        ))}
      </span>
      {state === 'correct' && (
        <span className="lr2-bug-icon" aria-hidden="true">
          🐞
        </span>
      )}
    </div>
  );
}

function BugHuntGame({ level }) {
  const navigate = useNavigate();
  const { completeLevel } = usePlayer();
  const { tr: siteTr } = useLanguage();
  const { t } = useLogicLanguage();
  const rounds = level.rounds;

  const [roundIndex, setRoundIndex] = useState(0);
  const [poppedLine, setPoppedLine] = useState(null);
  const [wrongClickIndex, setWrongClickIndex] = useState(null);
  const [shakeToken, setShakeToken] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [solvedCount, setSolvedCount] = useState(0);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState(null);

  const round = rounds[roundIndex];
  // Snippet content is language-independent (per the code-isn't-translated
  // rule), but the site still ships each line bilingually for ru/uz — pick
  // whichever the site's own language is currently set to as the source text.
  const lines = siteTr(round.lines);
  const isLastRound = roundIndex === rounds.length - 1;

  const finishLevel = () => {
    const summary = completeLevel({
      trackId: level.trackId,
      levelId: level.id,
      hintsOpened: false,
      failedAttempts,
    });
    setComplete(true);
    setResult(summary);
  };

  const handleLineClick = (index) => {
    if (poppedLine !== null || complete) return;

    if (index === round.buggyIndex) {
      setSolvedCount((n) => n + 1);
      setPoppedLine(index);
      setWrongClickIndex(null);
      setTimeout(() => {
        if (isLastRound) {
          finishLevel();
        } else {
          setShowNext(true);
        }
      }, POP_ANIMATION_MS);
    } else {
      setFailedAttempts((n) => n + 1);
      setWrongClickIndex(index);
      setShakeToken((n) => n + 1);
      setTimeout(() => setWrongClickIndex(null), SHAKE_ANIMATION_MS);
    }
  };

  const handleNext = () => {
    setRoundIndex((r) => r + 1);
    setPoppedLine(null);
    setShowNext(false);
    setWrongClickIndex(null);
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
  else if (poppedLine !== null) feedbackState = 'correct';
  else if (wrongClickIndex !== null) feedbackState = 'incorrect';

  const feedbackCopy = complete ? t('bugHunt.feedback.complete') : t(`bugHunt.feedback.${feedbackState}`);

  let action = null;
  if (complete) {
    action = { label: t('common.continueBtn'), onClick: handleContinue };
  } else if (showNext) {
    action = { label: t('common.next'), onClick: handleNext };
  }

  return (
    <div className="lr2-page">
      <LogicHeader gameKey="bugHunt" score={{ solved: solvedCount, total: rounds.length }} />

      <main className="lr2-main">
        <div className="lr2-code-panel">
          <div className="lr2-file-tab">{round.filename}</div>
          <div className="lr2-line-list">
            {lines.map((line, i) => {
              let state = 'idle';
              if (poppedLine === i) state = 'correct';
              else if (wrongClickIndex === i) state = 'shake';
              return (
                <CodeLine
                  key={state === 'shake' ? `${roundIndex}-${i}-${shakeToken}` : `${roundIndex}-${i}`}
                  line={line}
                  index={i}
                  state={state}
                  onClick={() => handleLineClick(i)}
                />
              );
            })}
          </div>
        </div>

        <aside className="lr2-side-panel">
          <GoalCard heading={t('common.goalHeading')} body={t('bugHunt.goalBody')} />
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

export default function BugHuntPage({ level }) {
  return (
    <LogicLanguageProvider>
      <BugHuntGame level={level} />
    </LogicLanguageProvider>
  );
}
