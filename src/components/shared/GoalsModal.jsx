import { useLanguage } from '../../i18n/LanguageContext';
import HtmlPreview from './HtmlPreview';

export default function GoalsModal({ wingLabel, title, explanation, example, goals, onStart }) {
  const { t } = useLanguage();

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        {wingLabel && <span className="wing-label">{wingLabel}</span>}
        <h2>{title}</h2>

        {explanation && <p className="modal-explanation">{explanation}</p>}

        {example && (
          <div className="modal-example">
            <span className="modal-example-heading">{t('goals.exampleHeading')}</span>
            <pre className="modal-example-code">
              <code>{example}</code>
            </pre>
            <span className="modal-result-heading">→ {t('common.result')}</span>
            <HtmlPreview code={example} className="modal-example-preview" />
          </div>
        )}

        <span className="modal-goals-heading">{t('goals.heading')}</span>
        <ul>
          {goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
        <button className="start-btn" onClick={onStart}>
          {t('common.startLevel')}
        </button>
      </div>
    </div>
  );
}
