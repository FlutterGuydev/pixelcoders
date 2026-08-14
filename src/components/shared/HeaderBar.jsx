import { Link } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage, LANGUAGES } from '../../i18n/LanguageContext';

export default function HeaderBar({ wingLabel, title, backTo }) {
  const { player } = usePlayer();
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="header-bar">
      <div className="header-left">
        {backTo && (
          <Link className="header-back" to={backTo}>
            {t('common.back')}
          </Link>
        )}
        <div className="header-title">
          {wingLabel && <span className="wing-label">{wingLabel}</span>}
          <h1>{title}</h1>
        </div>
      </div>
      <div className="header-right">
        {player && (
          <>
            <span className="header-stat streak" title={t('header.streakTitle')}>
              🔥 {player.streak.current}
            </span>
            <span className="header-stat player-level" title={t('header.levelTitle')}>
              Lv {player.playerLevel} · {player.totalXP} XP
            </span>
            <Link className="header-avatar-link" to="/profile" title={t('header.profile')}>
              🧙
            </Link>
          </>
        )}
        <div className="lang-switcher">
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              className={`lang-btn${lang === code ? ' active' : ''}`}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              title={label}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
