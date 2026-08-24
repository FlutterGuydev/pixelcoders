import { Link } from 'react-router-dom';
import { useLogicLanguage } from './LogicLanguageContext';
import { LOGIC_LANGUAGES } from './logicDictionary';

// Header for every Logic Rooms game: brand + module label, an optional
// score pill, the module's own 3-language switcher (uz/ru/en — separate
// from the site-wide one), and a back-to-map link. Flex-wraps on narrow
// screens instead of clipping.
export default function LogicHeader({ gameKey, score }) {
  const { t, lang, setLang } = useLogicLanguage();

  return (
    <header className="lr2-header">
      <div className="lr2-header-left">
        <span className="lr2-brand">🧠 {t('brand')}</span>
        <span className="lr2-module-label">{t(`${gameKey}.label`)}</span>
      </div>

      <div className="lr2-header-right">
        {score && (
          <span className="lr2-score-pill">
            {score.solved}/{score.total} {t('common.solved')}
          </span>
        )}

        <div className="lr2-lang-switcher">
          {LOGIC_LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              className={`lr2-lang-btn${lang === code ? ' active' : ''}`}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
            >
              {label}
            </button>
          ))}
        </div>

        <Link className="lr2-back-btn" to="/tracks/logic">
          {t('common.back')}
        </Link>
      </div>
    </header>
  );
}
