import { useLanguage } from '../../i18n/LanguageContext';
import { BLOCK_TYPES } from '../../data/levels/htmlOpenLesson';

export default function BlockStack({ stack, onDrop, onRemove, disabled, mishapUid }) {
  const { tr, t } = useLanguage();

  return (
    <div
      className={`block-stack${stack.length === 0 ? ' empty' : ''}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        onDrop(e, stack.length);
      }}
    >
      {stack.length === 0 && <p className="stack-empty-hint">{t('openLesson.emptyCanvas')}</p>}
      {stack.map((item, index) => {
        const block = BLOCK_TYPES[item.type];
        return (
          <div
            key={item.uid}
            className={`lesson-block stack-block${mishapUid === item.uid ? ' mishap' : ''}`}
            style={{ '--block-color': block.color }}
            draggable={!disabled}
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', JSON.stringify({ source: 'stack', uid: item.uid }));
              e.dataTransfer.effectAllowed = 'move';
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDrop(e, index);
            }}
          >
            <span className="block-icon">{block.icon}</span>
            <span className="block-label">{tr(block.label)}</span>
            {!disabled && (
              <button
                type="button"
                className="block-remove"
                aria-label={t('openLesson.removeBlock')}
                onClick={() => onRemove(item.uid)}
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
