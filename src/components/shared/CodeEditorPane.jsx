import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function CodeEditorPane({ filename, value, onChange, onRun, running, runLabel, children }) {
  const gutterRef = useRef(null);
  const textareaRef = useRef(null);
  const { t } = useLanguage();

  const lineCount = value.split('\n').length;
  const gutterText = Array.from({ length: lineCount }, (_, i) => i + 1).join('\n');

  const syncScroll = () => {
    if (gutterRef.current && textareaRef.current) {
      gutterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  return (
    <div className="editor-pane">
      <div className="editor-toolbar">
        <span className="editor-filename">{filename}</span>
        <button className="run-btn" onClick={onRun} disabled={running}>
          {runLabel || t('common.run')}
        </button>
      </div>
      <div className="editor-body">
        <div className="editor-gutter" ref={gutterRef}>
          {gutterText}
        </div>
        <textarea
          className="code-input"
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll={syncScroll}
          spellCheck={false}
        />
      </div>
      {children}
    </div>
  );
}
