import { useLanguage } from '../../i18n/LanguageContext';

export default function StatusPill({ complete }) {
  const { t } = useLanguage();

  return (
    <div className={`status-pill${complete ? ' complete' : ''}`}>
      {complete ? t('status.complete') : t('status.incomplete')}
    </div>
  );
}
