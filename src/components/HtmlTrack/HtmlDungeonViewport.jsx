import './html-track.css';

// stage: 'broken' | 'ready' | 'open'
export default function HtmlDungeonViewport({ stage, heroPassed }) {
  const tiles = [0, 1, 2];

  return (
    <div className="dungeon-viewport html-viewport">
      {tiles.map((i) => (
        <div key={i} className={`tile${i % 2 === 0 ? ' tile-checker' : ''}`}>
          {i === 0 && (
            <span className={`hero-tile${heroPassed ? ' hero-passed' : ''}`}>🧙</span>
          )}
        </div>
      ))}
      <div className="tile" style={{ position: 'relative' }}>
        <div className={`door-frame ${stage}`}>
          <div className="door-panel">
            <div className="door-handle" />
          </div>
        </div>
      </div>
    </div>
  );
}
