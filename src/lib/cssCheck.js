// Lightweight CSS parsing for validation only — regex-based on purpose,
// same philosophy as basicsCheck.js: good enough to check a beginner's
// intent, never a real parser, never eval.

export function extractStyleContent(code) {
  const match = code.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  return match ? match[1] : null;
}

function normalizeCss(text) {
  return text.replace(/\/\*[\s\S]*?\*\//g, '').toLowerCase();
}

function escapeSelector(selector) {
  return selector
    .toLowerCase()
    .trim()
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\s+/g, '\\s+');
}

// Returns the declaration text inside the first `selector { ... }` block, or null.
export function getRuleBlock(styleText, selector) {
  if (!styleText) return null;
  const re = new RegExp(`${escapeSelector(selector)}\\s*\\{([^}]*)\\}`, 'i');
  const match = normalizeCss(styleText).match(re);
  return match ? match[1] : null;
}

// Returns the value for `property` inside a rule block (from getRuleBlock), or null.
export function getDeclaration(ruleBlock, property) {
  if (!ruleBlock) return null;
  const re = new RegExp(`${property}\\s*:\\s*([^;]+);?`, 'i');
  const match = ruleBlock.match(re);
  return match ? match[1].trim() : null;
}

// Convenience: value for `property` on `selector`, straight from the full style text.
export function getRuleValue(styleText, selector, property) {
  return getDeclaration(getRuleBlock(styleText, selector), property);
}

// True if `property` appears anywhere in the stylesheet, on any selector.
export function hasProperty(styleText, property) {
  if (!styleText) return false;
  return new RegExp(`${property}\\s*:`, 'i').test(normalizeCss(styleText));
}

// Finds the first class="..." (or id="...") value used in the HTML part of
// the code, so a lesson can check the matching .class / #id rule regardless
// of what name the player chose.
export function firstAttrValue(code, attr) {
  const match = code.match(new RegExp(`${attr}\\s*=\\s*["']([^"']+)["']`, 'i'));
  return match ? match[1].split(/\s+/)[0] : null;
}
