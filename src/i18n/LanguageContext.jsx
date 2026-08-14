import { createContext, useContext, useMemo, useState } from 'react';
import { ru } from './dictionaries/ru';
import { uz } from './dictionaries/uz';

const DICTIONARIES = { ru, uz };
const LANG_KEY = 'pixelcoders_lang_v1';
export const LANGUAGES = [
  { code: 'ru', label: 'Русский' },
  { code: 'uz', label: "O'zbekcha" },
];

const LanguageContext = createContext(null);

function readStoredLang() {
  const stored = localStorage.getItem(LANG_KEY);
  return stored === 'ru' || stored === 'uz' ? stored : null;
}

function get(dict, path) {
  return path.split('.').reduce((node, key) => (node == null ? node : node[key]), dict);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => readStoredLang() || 'uz');

  const setLang = (code) => {
    if (!DICTIONARIES[code]) return;
    localStorage.setItem(LANG_KEY, code);
    setLangState(code);
  };

  const value = useMemo(() => {
    const dict = DICTIONARIES[lang];
    return {
      lang,
      setLang,
      // Looks up a chrome-string key, e.g. t('worldMap.chooseWing').
      t: (path) => get(dict, path) ?? path,
      // Picks the active-language value out of a per-item bilingual object, e.g. tr(level.title).
      // Passes plain strings (language-neutral labels like "HTML") through unchanged.
      tr: (bilingual) =>
        typeof bilingual === 'string' || bilingual == null
          ? bilingual
          : bilingual[lang] ?? bilingual.ru ?? bilingual.uz,
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
