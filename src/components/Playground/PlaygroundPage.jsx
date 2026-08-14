import { useState } from 'react';
import HeaderBar from '../shared/HeaderBar';
import CodeEditorPane from '../shared/CodeEditorPane';
import HtmlPreview from '../shared/HtmlPreview';
import TagReference from './TagReference';
import { usePlayer } from '../../context/PlayerContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { loadPlaygroundCode } from '../../lib/storage';
import '../BasicsTrack/basics-track.css';
import './playground.css';

const STARTER_CODE = '<h1>Привет, мир!</h1>\n<p>Это моя собственная страница.</p>';
const SAVED_TOAST_MS = 1600;

export default function PlaygroundPage() {
  const { savePlaygroundWork } = usePlayer();
  const { t } = useLanguage();

  const [code, setCode] = useState(() => loadPlaygroundCode() ?? STARTER_CODE);
  const [savedJustNow, setSavedJustNow] = useState(false);
  const [earnedBadge, setEarnedBadge] = useState(false);

  const handleSave = () => {
    const { newBadge } = savePlaygroundWork(code);
    setEarnedBadge(newBadge);
    setSavedJustNow(true);
    setTimeout(() => setSavedJustNow(false), SAVED_TOAST_MS);
  };

  return (
    <div>
      <HeaderBar title={t('playground.title')} backTo="/map" />

      <div className="level-main">
        <div className="dungeon-pane basics-pane">
          <div className="basics-preview-block">
            <h3>{t('common.result')}</h3>
            <HtmlPreview code={code} className="basics-live-preview" />
            <div className="basics-page-caption">{t('playground.caption')}</div>
          </div>
        </div>

        <CodeEditorPane
          filename="playground.html"
          value={code}
          onChange={setCode}
          onRun={handleSave}
          runLabel={t('playground.save')}
        >
          {savedJustNow && (
            <div className="playground-saved-toast">
              ✅ {t('playground.saved')}
              {earnedBadge && <span> 🎨</span>}
            </div>
          )}
          <TagReference />
        </CodeEditorPane>
      </div>
    </div>
  );
}
