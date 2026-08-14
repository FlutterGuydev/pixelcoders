import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function HintsPanel({ hints, onOpen }) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const toggle = () => {
    if (!open) onOpen?.();
    setOpen((o) => !o);
  };

  return (
    <div className="hints-panel">
      <button className="hints-toggle" onClick={toggle}>
        <span>{t('common.hints')}</span>
        <span>{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div className="hints-body">
          {hints.map((hint) => (
            <code key={hint}>{hint}</code>
          ))}
        </div>
      )}
    </div>
  );
}
