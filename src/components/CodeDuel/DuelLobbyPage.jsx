import { Link } from 'react-router-dom';
import HeaderBar from '../shared/HeaderBar';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { getEligibleDuelPuzzles } from '../../data/duelPuzzles';
import './code-duel.css';

export default function DuelLobbyPage() {
  const { player } = usePlayer();
  const { t, tr } = useLanguage();

  if (!player) return null;

  const eligible = getEligibleDuelPuzzles(player);

  return (
    <div className="code-duel">
      <HeaderBar title={t('duel.lobbyTitle')} backTo="/map" />
      <div className="duel-lobby">
        <div className="duel-lobby-intro">
          <h2>{t('duel.lobbyTitle')}</h2>
          <p>{t('duel.lobbySubtitle')}</p>
        </div>

        {eligible.length === 0 ? (
          <div className="duel-empty-note">{t('duel.noPuzzlesYet')}</div>
        ) : (
          <div className="duel-card-grid">
            {eligible.map((puzzle) => (
              <Link key={puzzle.id} className="duel-card" to={`/duel/${puzzle.id}`}>
                <span className="duel-card-vs">⚔️ {t('duel.vsByte')}</span>
                <h3>{tr(puzzle.title)}</h3>
                <span className="duel-card-cta">{t('duel.startDuel')} →</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
