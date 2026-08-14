// Strips HTML comments and collapses whitespace so formatting choices
// (indentation, line breaks, comments) never count against the player.
export function normalizeHtml(code) {
  return code
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}
