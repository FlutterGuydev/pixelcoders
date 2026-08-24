import { createContext, useContext, useMemo, useState } from 'react';
import { LOGIC_DICT } from './logicDictionary';

const STORAGE_KEY = 'pixelcoders_logic_lang_v1';

const LogicLanguageContext = createContext(null);

function readStoredLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return LOGIC_DICT[stored] ? stored : null;
}

function get(dict, path) {
  return path.split('.').reduce((node, key) => (node == null ? node : node[key]), dict);
}

// Each Logic Rooms page mounts its own provider, but since the choice is
// persisted to localStorage, navigating between logic-1..5 keeps the same
// language selected without needing a single app-wide provider.
export function LogicLanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => readStoredLang() || 'uz');

  const setLang = (code) => {
    if (!LOGIC_DICT[code]) return;
    localStorage.setItem(STORAGE_KEY, code);
    setLangState(code);
  };

  const value = useMemo(() => {
    const dict = LOGIC_DICT[lang];
    return { lang, setLang, t: (path) => get(dict, path) ?? path };
  }, [lang]);

  return <LogicLanguageContext.Provider value={value}>{children}</LogicLanguageContext.Provider>;
}

export function useLogicLanguage() {
  const ctx = useContext(LogicLanguageContext);
  if (!ctx) throw new Error('useLogicLanguage must be used within a LogicLanguageProvider');
  return ctx;
}
