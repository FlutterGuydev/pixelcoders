import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogicLanguageProvider, useLogicLanguage } from './LogicLanguageContext';
import LogicHeader from './LogicHeader';
import GoalCard from './GoalCard';
import FeedbackCard from './FeedbackCard';
import ProgressDots from './ProgressDots';
import HtmlPreview from '../shared/HtmlPreview';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { BADGE_DEFINITIONS } from '../../lib/badges';
import { logicLevel3 } from '../../data/levels/logicLevel3';

const DOMINO_STEP_MS = 90;
const CHIP_LOCK_MS = 350;
const PAYOFF_MS = 750;

function PayoffStage({ type, playing }) {
  if (type === 'door') {
    return (
      <div className="sort-payoff-stage">
        <div className={`sort-door${playing ? ' open' : ''}`}>
          <div className="sort-door-panel" />
        </div>
      </div>
    );
  }
  if (type === 'torch') {
    return (
      <div className="sort-payoff-stage">
        <span className={`sort-torch${playing ? ' lit' : ''}`}>🔥</span>
      </div>
    );
  }
  return (
    <div className="sort-payoff-stage">
      <span className={`sort-hero${playing ? ' moving' : ''}`}>🧙</span>
    </div>
  );
}

function CodeSortGame() {
  const navigate = useNavigate();
  const { completeLevel } = usePlayer();
  const { tr: siteTr } = useLanguage();
  const { t } = useLogicLanguage();
  const level = logicLevel3;
  const rounds = level.rounds;

  const [roundIndex, setRoundIndex] = useState(0);
  const [order, setOrder] = useState(() => [...rounds[0].scrambledOrder]);
  const [locked, setLocked] = useState(false);
  const [payoffPlaying, setPayoffPlaying] = useState(false);
  const [roundSolved, setRoundSolved] = useState(false);
  const [solvedCount, setSolvedCount] = useState(0);
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState(null);

  const round = rounds[roundIndex];
  const lines = siteTr(round.lines);
  const currentCode = order.map((i) => lines[i]).join('\n');
  const isLastRound = roundIndex === rounds.length - 1;

  const finishLevel = () => {
    const summary = completeLevel({
      trackId: level.trackId,
      levelId: level.id,
      hintsOpened: false,
      failedAttempts: 0,
    });
    setComplete(true);
    setResult(summary);
  };

  const goNext = () => {
    const next = roundIndex + 1;
    setRoundIndex(next);
    setOrder([...rounds[next].scrambledOrder]);
    setLocked(false);
    setPayoffPlaying(false);
    setRoundSolved(false);
  };

  const handleNext = () => {
    if (isLastRound) finishLevel();
    else goNext();
  };

  const triggerLock = (chipCount) => {
    setLocked(true);
    setSolvedCount((n) => n + 1);
    const totalStagger = (chipCount - 1) * DOMINO_STEP_MS + CHIP_LOCK_MS;
    setTimeout(() => {
      setPayoffPlaying(true);
      setTimeout(() => setRoundSolved(true), PAYOFF_MS);
    }, totalStagger);
  };

  const handleDrop = (e, targetPos) => {
    e.preventDefault();
    if (locked) return;
    const fromPos = Number(e.dataTransfer.getData('text/plain'));
    if (Number.isNaN(fromPos) || fromPos === targetPos) return;

    setOrder((prev) => {
      const next = [...prev];
      const [item] = next.splice(fromPos, 1);
      next.splice(targetPos, 0, item);
      if (next.every((v, i) => v === i)) {
        triggerLock(next.length);
      }
      return next;
    });
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
  else if (locked) feedbackState = 'correct';

  const feedbackCopy = t(`codeSort.feedback.${feedbackState}`);

  let action = null;
  if (complete) {
    action = { label: t('common.continueBtn'), onClick: handleContinue };
  } else if (roundSolved) {
    action = { label: isLastRound ? t('common.finish') : t('common.next'), onClick: handleNext };
  }

  return (
    <div className="lr2-page">
      <LogicHeader gameKey="codeSort" score={{ solved: solvedCount, total: rounds.length }} />

      <main className="lr2-main">
        <div className="lr2-code-panel">
          <div className="lr2-file-tab">{round.filename}</div>
          <div className="sort-body">
            <div className="sort-chips-col">
              {order.map((lineIdx, pos) => (
                <div
                  key={lineIdx}
                  className={`sort-chip${locked ? ' locked' : ''}`}
                  style={locked ? { animationDelay: `${pos * DOMINO_STEP_MS}ms` } : undefined}
                  draggable={!locked}
                  onDragStart={(e) => e.dataTransfer.setData('text/plain', String(pos))}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, pos)}
                >
                  <code>{lines[lineIdx]}</code>
                </div>
              ))}
            </div>

            <div className="sort-preview-col">
              <span className="logic-round-tag sort-preview-label">{t('codeSort.resultLabel')}</span>
              <HtmlPreview code={currentCode} className="sort-live-preview" />
              <PayoffStage type={round.payoff} playing={payoffPlaying} />
            </div>
          </div>
        </div>

        <aside className="lr2-side-panel">
          <GoalCard heading={t('common.goalHeading')} body={t('codeSort.goalBody')} />
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

export default function CodeSortPage() {
  return (
    <LogicLanguageProvider>
      <CodeSortGame />
    </LogicLanguageProvider>
  );
}
