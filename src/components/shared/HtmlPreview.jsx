const PREVIEW_STYLES = `
  body { margin: 0; padding: 14px; font-family: system-ui, sans-serif; color: #2b2438; background: #fff; }
  h1, h2, h3 { margin: 0 0 8px; }
  p { margin: 0 0 8px; }
  div { border: 1px dashed #b9a8d8; padding: 8px; }
  table { border-collapse: collapse; }
  td, th { border: 1px solid #b9a8d8; padding: 4px 10px; }
`;

// Renders arbitrary player-written HTML in a sandboxed, script-less iframe
// so lesson code can never touch the parent page. Snippets get wrapped with
// shared styling; a full document (the capstone lesson) is rendered as-is
// so the player sees their real <html>/<head>/<body> with default browser
// styling, not our tutorial chrome.
export default function HtmlPreview({ code, className }) {
  const isFullDocument = /<html[\s>]/i.test(code);
  const srcDoc = isFullDocument
    ? code
    : `<!doctype html><html><head><style>${PREVIEW_STYLES}</style></head><body>${code}</body></html>`;

  return (
    <iframe
      className={`html-preview${className ? ` ${className}` : ''}`}
      title="preview"
      srcDoc={srcDoc}
      sandbox="allow-same-origin"
    />
  );
}
