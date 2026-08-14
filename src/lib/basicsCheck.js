import { normalizeHtml } from './codeNormalize';

export function hasTag(code, tagName) {
  return new RegExp(`<${tagName}[^>]*>`, 'i').test(normalizeHtml(code));
}

// Returns the trimmed inner HTML of the first <tag>...</tag> match, or null
// if the tag is missing/unclosed. Safe to call again on an already-normalized
// substring (e.g. to look for a tag nested inside another tag's contents).
export function extractTagInner(code, tagName) {
  const normalized = normalizeHtml(code);
  const match = normalized.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, 'i'));
  return match ? match[1].trim() : null;
}

export function tagHasContent(code, tagName) {
  const inner = extractTagInner(code, tagName);
  return inner != null && inner.length > 0;
}

// True if <tagName ... attr="non-empty"> appears (any quote style).
export function hasAttr(code, tagName, attr) {
  const re = new RegExp(`<${tagName}\\s+[^>]*${attr}\\s*=\\s*["'][^"']+["']`, 'i');
  return re.test(normalizeHtml(code));
}

// Counts <tagName>text</tagName> occurrences that have non-empty text.
export function countTagWithContent(code, tagName) {
  const normalized = normalizeHtml(code);
  const re = new RegExp(`<${tagName}[^>]*>([^<]+)</${tagName}>`, 'gi');
  return [...normalized.matchAll(re)].filter((m) => m[1].trim().length > 0).length;
}

// Counts <tagName ...> opening tags, even when the tag contains other
// nested tags (so it works for containers like <tr> that hold <td>s).
export function countOpenTags(code, tagName) {
  const re = new RegExp(`<${tagName}[\\s>]`, 'gi');
  return (normalizeHtml(code).match(re) || []).length;
}

// True if `attr="non-empty"` appears on any tag (not scoped to one tag name) —
// used for attributes like class/id/type that apply broadly.
export function hasAnyAttr(code, attr) {
  const re = new RegExp(`\\s${attr}\\s*=\\s*["'][^"']+["']`, 'i');
  return re.test(normalizeHtml(code));
}

// Returns the raw opening-tag text (e.g. "<audio controls src="x.mp3">") so
// callers can check boolean attributes like "controls" or "required" that
// have no ="value" for hasAttr to match against.
export function tagAttributesText(code, tagName) {
  const re = new RegExp(`<${tagName}\\b[^>]*>`, 'i');
  const match = normalizeHtml(code).match(re);
  return match ? match[0] : null;
}
