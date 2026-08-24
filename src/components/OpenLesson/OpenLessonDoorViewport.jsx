import './open-lesson.css';

// heroStage: 'idle' | 'hop' | 'confused' | 'cheer'
export default function OpenLessonDoorViewport({ doorBuilt, handleBuilt, torchLit, heroStage, mishap }) {
  const doorOpen = heroStage === 'cheer';

  return (
    <div className={`ol-viewport${mishap ? ' mishap-shake' : ''}`}>
      <div className="ol-tile ol-tile-hero">
        <span className={`ol-hero${heroStage && heroStage !== 'idle' ? ` hero-${heroStage}` : ''}`}>🧙</span>
        {heroStage === 'confused' && <span className="ol-speech-bubble">?</span>}
      </div>

      <div className="ol-tile ol-tile-door">
        <span className={`ol-torch${torchLit ? ' lit' : ''}`}>🔥</span>
        <div className={`ol-door-frame${doorBuilt ? ' built' : ''}${doorOpen ? ' open' : ''}`}>
          <div className="ol-door-panel">
            <div className={`ol-door-handle${handleBuilt ? ' built' : ''}`} />
          </div>
        </div>
        {doorOpen && <span className="ol-sparkles">✨</span>}
      </div>
    </div>
  );
}
