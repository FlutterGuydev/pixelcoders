import './html-track.css';

// stage: 'broken' | 'ready' | 'open'
export default function HtmlRoomsViewport({ stage, heroPassed }) {
  return (
    <div className="dungeon-viewport rooms-viewport">
      <div className={`room-ring outer ${stage}`}>
        <div className={`room-ring middle ${stage}`}>
          <div className={`room-ring inner ${stage}`}>
            {heroPassed && <span className="hero-tile hero-in-room">🧙</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
