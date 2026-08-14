import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage, LANGUAGES } from '../../i18n/LanguageContext';
import './auth.css';

export default function LoginPage() {
  const [name, setName] = useState('');
  const { login } = usePlayer();
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name.trim() || t('login.guestName'));
    navigate('/map');
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="auth-emblem">🏰</span>

        <div className="auth-lang-picker">
          <span className="auth-lang-label">{t('login.chooseLanguage')}</span>
          <div className="lang-switcher">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                className={`lang-btn${lang === code ? ' active' : ''}`}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <h1>{t('login.heading')}</h1>
        <p>{t('login.subtitle')}</p>
        <input
          className="auth-input"
          placeholder={t('login.placeholder')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={24}
          autoFocus
        />
        <button className="auth-submit" type="submit">
          {t('login.submit')}
        </button>
        <p className="auth-note">{t('login.note')}</p>
      </form>
    </div>
  );
}
