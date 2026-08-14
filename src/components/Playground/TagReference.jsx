import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const TAGS = [
  { tag: '<h1>/<h2>/<h3>', note: { ru: 'заголовки, от крупного к мелкому', uz: 'sarlavhalar, kattadan kichikkacha' } },
  { tag: '<p>', note: { ru: 'абзац текста', uz: 'matn abzatsi' } },
  { tag: '<strong>/<em>', note: { ru: 'жирный текст / курсив', uz: 'qalin matn / qiyshiq matn' } },
  { tag: '<span>', note: { ru: 'кусочек текста внутри строки', uz: 'qator ichidagi matn boʻlagi' } },
  { tag: '<br>/<hr>', note: { ru: 'перенос строки / линия-разделитель', uz: 'qator koʻchirish / ajratuvchi chiziq' } },
  { tag: '<div>', note: { ru: 'блок-коробка для группировки', uz: 'guruhlash uchun blok-quti' } },
  { tag: '<a href="...">', note: { ru: 'ссылка', uz: 'havola' } },
  { tag: '<img src="..." alt="...">', note: { ru: 'картинка', uz: 'rasm' } },
  { tag: '<ul>/<ol> + <li>', note: { ru: 'маркированный / нумерованный список', uz: 'belgili / raqamli royxat' } },
  { tag: 'class="..." id="..."', note: { ru: 'атрибуты для CSS-стилей', uz: 'CSS uchun atributlar' } },
  { tag: '<table>/<tr>/<td>', note: { ru: 'таблица, строка, ячейка', uz: 'jadval, qator, katakcha' } },
  { tag: '<form>/<input>/<button>', note: { ru: 'форма, поле ввода, кнопка', uz: 'shakl, kiritish maydoni, tugma' } },
  { tag: '<label>', note: { ru: 'подпись к полю формы', uz: 'forma maydoni yorligʻi' } },
  { tag: '<nav>', note: { ru: 'блок с меню-ссылками', uz: 'menyu-havolalar bloki' } },
  { tag: '<figure>/<figcaption>', note: { ru: 'картинка с подписью', uz: 'izohli rasm' } },
  { tag: '<header>/<main>/<footer>', note: { ru: 'шапка, основной блок, подвал', uz: 'sarlavha, asosiy blok, past qism' } },
];

export default function TagReference() {
  const [open, setOpen] = useState(false);
  const { t, tr } = useLanguage();

  return (
    <div className="hints-panel">
      <button className="hints-toggle" onClick={() => setOpen((o) => !o)}>
        <span>{t('playground.referenceHeading')}</span>
        <span>{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div className="hints-body tag-reference-body">
          {TAGS.map(({ tag, note }) => (
            <div key={tag} className="tag-reference-row">
              <code>{tag}</code>
              <span>{tr(note)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
