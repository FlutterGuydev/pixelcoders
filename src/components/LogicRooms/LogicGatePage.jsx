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
import { logicLevel5, evaluateGateCondition, computeGateProgress } from '../../data/levels/logicLevel5';

const DOOR_OPEN_MS = 600;
const HERO_WALK_MS = 600;
const RING_RADIUS = 30;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const RULE_LABEL_KEYS = { and: 'gate.and', or: 'gate.or', combo: 'gate.combo' };

function ProgressRing({ percent, complete }) {
  const offset = RING_CIRCUMFERENCE * (1 - percent / 100);
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" className="gate-ring">
      <circle cx="36" cy="36" r={RING_RADIUS} className="gate-ring-track" />
      <circle
        cx="36"
        cy="36"
        r={RING_RADIUS}
        className={`gate-ring-fill${complete ? ' complete' : ''}`}
        style={{ strokeDasharray: RING_CIRCUMFERENCE, strokeDashoffset: offset }}
      />
    </svg>
  );
}

function RuleDiagram({ ruleType }) {
  if (ruleType === 'combo') {
    return (
      <div className="gate-rule combo">
        <span className="gate-rule-group">
          <span className="gate-rule-lever">🕹️</span>
          <span className="gate-rule-op">🔗</span>
          <span className="gate-rule-lever">🕹️</span>
        </span>
        <span className="gate-rule-op">🔀</span>
        <span className="gate-rule-lever">🕹️</span>
        <span className="gate-rule-arrow">→</span>
        <span className="gate-rule-lock">🔒</span>
      </div>
    );
  }
  return (
    <div className="gate-rule">
      <span className="gate-rule-lever">🕹️</span>
      <span className="gate-rule-op">{ruleType === 'and' ? '🔗' : '🔀'}</span>
      <span className="gate-rule-lever">🕹️</span>
      <span className="gate-rule-arrow">→</span>
      <span className="gate-rule-lock">🔒</span>
    </div>
  );
}

function LogicGateGame() {
  const navigate = useNavigate();
  const { completeLevel } = usePlayer();
  const { tr: siteTr } = useLanguage();
  const { t } = useLogicLanguage();
  const level = logicLevel5;
  const rooms = level.rooms;

  const [roomIndex, setRoomIndex] = useState(0);
  const [levers, setLevers] = useState(() => Array(rooms[0].leverCount).fill(false));
  const [unlocking, setUnlocking] = useState(false);
  const [heroWalking, setHeroWalking] = useState(false);
  const [roomSolved, setRoomSolved] = useState(false);
  const [solvedCount, setSolvedCount] = useState(0);
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState(null);

  const room = rooms[roomIndex];
  const isLastRoom = roomIndex === rooms.length - 1;
  const progress = computeGateProgress(room.ruleType, levers);

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

  const handleNext = () => {
    if (isLastRoom) {
      finishLevel();
    } else {
      const next = roomIndex + 1;
      setRoomIndex(next);
      setLevers(Array(rooms[next].leverCount).fill(false));
      setUnlocking(false);
      setHeroWalking(false);
      setRoomSolved(false);
    }
  };

  const handleToggle = (i) => {
    if (unlocking) return;
    const nextLevers = levers.map((v, idx) => (idx === i ? !v : v));
    setLevers(nextLevers);

    if (evaluateGateCondition(room.ruleType, nextLevers)) {
      setUnlocking(true);
      setSolvedCount((n) => n + 1);
      setTimeout(() => {
        setHeroWalking(true);
        setTimeout(() => setRoomSolved(true), HERO_WALK_MS);
      }, DOOR_OPEN_MS);
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
  else if (unlocking) feedbackState = 'correct';

  const feedbackCopy = t(`gate.feedback.${feedbackState}`);

  let action = null;
  if (complete) {
    action = { label: t('common.continueBtn'), onClick: handleContinue };
  } else if (roomSolved) {
    action = { label: isLastRoom ? t('common.finish') : t('common.next'), onClick: handleNext };
  }

  return (
    <div className="lr2-page">
      <LogicHeader gameKey="gate" score={{ solved: solvedCount, total: rooms.length }} />

      <main className="lr2-main">
        <div className="lr2-code-panel">
          <div className="lr2-file-tab">{t(RULE_LABEL_KEYS[room.ruleType])}</div>

          <div className="gate-room">
            <RuleDiagram ruleType={room.ruleType} />

            <div className="gate-stage">
              <div className="gate-ring-wrap">
                <ProgressRing percent={progress} complete={unlocking} />
              </div>
              <div className="gate-door-wrap">
                <div className={`gate-door-frame${unlocking ? ' open' : ''}`}>
                  <div className="gate-door-panel">
                    <div className="gate-door-handle" />
                  </div>
                </div>
                <span className={`gate-hero${heroWalking ? ' walk' : ''}`}>🧙</span>
              </div>
            </div>

            <div className="gate-levers">
              {levers.map((on, i) => (
                <button
                  key={i}
                  type="button"
                  className={`gate-lever${on ? ' on' : ''}`}
                  onClick={() => handleToggle(i)}
                  disabled={unlocking}
                >
                  <span className="gate-lever-light" />
                  <span className="gate-lever-arm" />
                  <span className="gate-lever-label">{String.fromCharCode(65 + i)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="lr2-side-panel">
          <GoalCard heading={t('common.goalHeading')} body={t('gate.goalBody')} />
          <FeedbackCard
            state={feedbackState}
            title={feedbackCopy.title}
            subtitle={feedbackCopy.subtitle}
            action={action}
            xpAwarded={complete ? result?.xpAwarded : undefined}
            badgeNames={complete ? earnedBadgeNames : undefined}
          />
          <ProgressDots count={rooms.length} current={roomIndex} />
        </aside>
      </main>
    </div>
  );
}

export default function LogicGatePage() {
  return (
    <LogicLanguageProvider>
      <LogicGateGame />
    </LogicLanguageProvider>
  );
}
