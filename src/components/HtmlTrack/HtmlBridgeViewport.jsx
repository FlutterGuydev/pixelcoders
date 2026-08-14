import './html-track.css';

// stage: 'broken' | 'ready' | 'open'
export default function HtmlBridgeViewport({ stage, heroPassed }) {
  return (
    <div className="dungeon-viewport bridge-viewport">
      <div className="tile ledge">
        <span className={`hero-tile${heroPassed ? ' hero-crossed' : ''}`}>🧙</span>
      </div>
      <div className={`plank-row ${stage}`}>
        <div className="plank" />
        <div className="plank" />
        <div className="plank" />
      </div>
      <div className="tile ledge goal-ledge">🚩</div>
    </div>
  );
}
