import { useRef } from 'react';

const PREVIEW_STYLES = `
  body { margin: 0; padding: 14px; font-family: system-ui, sans-serif; color: #2b2438; background: #fff; }
  h1, h2, h3 { margin: 0 0 8px; }
  p { margin: 0 0 8px; }
  div { border: 1px dashed #b9a8d8; padding: 8px; }
  table { border-collapse: collapse; }
  td, th { border: 1px solid #b9a8d8; padding: 4px 10px; }
`;

const MAX_HEIGHT = 480;

// Renders arbitrary player-written HTML in a sandboxed, script-less iframe
// so lesson code can never touch the parent page. Snippets get wrapped with
// shared styling; a full document (the capstone lesson) is rendered as-is
// so the player sees their real <html>/<head>/<body> with default browser
// styling, not our tutorial chrome.
export default function HtmlPreview({ code, className }) {
  const iframeRef = useRef(null);
  const isFullDocument = /<html[\s>]/i.test(code);
  const srcDoc = isFullDocument
    ? code
    : `<!doctype html><html><head><style>${PREVIEW_STYLES}</style></head><body>${code}</body></html>`;

  // The iframe has a fixed default height with no content of its own to
  // size against, so it never grows past its CSS min-height as the player
  // writes more — every srcDoc change re-fires `load`, which is when we can
  // finally read the new document's real height and grow (or shrink) to fit.
  // Each usage sets its own CSS min-height (the compact modal example vs.
  // the full lesson preview); that's the floor, not a value we hardcode here.
  const resizeToContent = () => {
    const iframe = iframeRef.current;
    const doc = iframe?.contentDocument;
    if (!doc?.documentElement) return;
    const floor = parseFloat(getComputedStyle(iframe).minHeight) || 0;
    const contentHeight = doc.documentElement.scrollHeight;
    iframe.style.height = `${Math.min(Math.max(contentHeight, floor), MAX_HEIGHT)}px`;
  };

  return (
    <iframe
      ref={iframeRef}
      className={`html-preview${className ? ` ${className}` : ''}`}
      title="preview"
      srcDoc={srcDoc}
      sandbox="allow-same-origin"
      onLoad={resizeToContent}
    />
  );
}
