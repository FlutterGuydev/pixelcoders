// Lightweight, decorative HTML/CSS tokenizer for the Logic Rooms code
// panel — not a real parser, just enough to color tag names, attribute
// or property names, and quoted strings differently. Assumes the snippet
// data (written by us) never puts whitespace before `=` or `:`.
const TOKEN_PATTERN = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(<\/|<|>|\{|\}|\(|\)|;)|([a-zA-Z][\w-]*)/g;

export function highlightLine(line) {
  const tokens = [];
  let lastIndex = 0;
  let afterOpenTag = false;
  let match;

  TOKEN_PATTERN.lastIndex = 0;
  while ((match = TOKEN_PATTERN.exec(line))) {
    if (match.index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, match.index), cls: 'tok-plain' });
    }

    if (match[1]) {
      tokens.push({ text: match[1], cls: 'tok-string' });
      afterOpenTag = false;
    } else if (match[2]) {
      tokens.push({ text: match[2], cls: 'tok-punct' });
      afterOpenTag = match[2] === '<' || match[2] === '</';
    } else if (match[3]) {
      const nextChar = line[TOKEN_PATTERN.lastIndex];
      if (afterOpenTag) {
        tokens.push({ text: match[3], cls: 'tok-tag' });
      } else if (nextChar === '=' || nextChar === ':') {
        tokens.push({ text: match[3], cls: 'tok-attr' });
      } else {
        tokens.push({ text: match[3], cls: 'tok-plain' });
      }
      afterOpenTag = false;
    }

    lastIndex = TOKEN_PATTERN.lastIndex;
  }

  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex), cls: 'tok-plain' });
  }

  return tokens;
}
