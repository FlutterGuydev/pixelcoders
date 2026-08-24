import { useLanguage } from '../../i18n/LanguageContext';
import { BLOCK_TYPES } from '../../data/levels/htmlOpenLesson';

export default function BlockPalette({ blockIds, onAddBlock, onDragStartBlock, onDragEndBlock, disabled }) {
  const { tr, t } = useLanguage();

  return (
    <div className="block-palette">
      <h3 className="block-panel-heading">{t('openLesson.paletteHeading')}</h3>
      <div className="palette-list">
        {blockIds.map((id) => {
          const block = BLOCK_TYPES[id];
          return (
            <button
              key={id}
              type="button"
              className="lesson-block palette-block"
              style={{ '--block-color': block.color }}
              draggable={!disabled}
              onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', JSON.stringify({ source: 'palette', type: id }));
                e.dataTransfer.effectAllowed = 'copy';
                onDragStartBlock?.(id);
              }}
              onDragEnd={() => onDragEndBlock?.()}
              onClick={() => !disabled && onAddBlock(id)}
              disabled={disabled}
            >
              <span className="block-icon">{block.icon}</span>
              <span className="block-label">{tr(block.label)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
