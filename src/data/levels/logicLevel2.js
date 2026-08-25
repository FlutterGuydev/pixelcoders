// Predict the Output: the player commits an answer *before* seeing the
// code run, then watches the real outcome play out. Rounds escalate from
// a literal value read, to an indirect CSS-variable lookup, to reasoning
// about cascade order and property "gotchas" (like `right`/`bottom`
// pushing the *opposite* direction from what their names suggest).
//
// Every round is one of two engines the viewport actually knows how to
// play back — `type: 'color'` (viewport shows a swatch) or anything else,
// treated as `'direction'` (viewport translates a hero sprite). Direction
// rounds must use `correctOptionId` from {up, down, left, right} because
// that id is what drives the actual on-screen animation.
export const PREDICT_ROUNDS = [
  {
    type: 'color',
    filename: 'box.css',
    code: {
      ru: ['.box {', '  background-color: tomato;', '}'],
      uz: ['.box {', '  background-color: tomato;', '}'],
    },
    question: {
      ru: 'Какого цвета будет фон коробки?',
      uz: 'Quti foni qanday rangda bo‘ladi?',
    },
    correctColor: '#ff6347',
    correctOptionId: 'tomato',
    options: [
      { id: 'tomato', color: '#ff6347' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gray', color: '#6b7280' },
    ],
  },
  {
    type: 'color',
    filename: 'badge.css',
    code: {
      ru: [':root {', '  --warn: #fbbf24;', '}', '.badge {', '  background: var(--warn);', '}'],
      uz: [':root {', '  --warn: #fbbf24;', '}', '.badge {', '  background: var(--warn);', '}'],
    },
    question: {
      ru: 'Какого цвета будет фон значка?',
      uz: 'Nishon foni qanday rangda bo‘ladi?',
    },
    correctColor: '#fbbf24',
    correctOptionId: 'gold',
    options: [
      { id: 'gold', color: '#fbbf24' },
      { id: 'red', color: '#ef4444' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'purple', color: '#a78bfa' },
    ],
  },
  {
    type: 'direction',
    filename: 'hero.css',
    code: {
      ru: ['.hero {', '  transform: translateX(40px);', '}'],
      uz: ['.hero {', '  transform: translateX(40px);', '}'],
    },
    question: {
      ru: 'В какую сторону сдвинется герой?',
      uz: 'Qahramon qaysi tomonga suriladi?',
    },
    correctOptionId: 'right',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'color',
    filename: 'badge2.css',
    code: {
      ru: ['.badge {', '  background-color: #2dd4bf;', '}'],
      uz: ['.badge {', '  background-color: #2dd4bf;', '}'],
    },
    question: { ru: 'Какого цвета фон значка?', uz: 'Nishon foni qanday rang?' },
    correctColor: '#2dd4bf',
    correctOptionId: 'teal',
    options: [
      { id: 'teal', color: '#2dd4bf' },
      { id: 'tomato', color: '#ff6347' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'purple', color: '#a78bfa' },
    ],
  },
  {
    type: 'color',
    filename: 'brand.css',
    code: {
      ru: [':root {', '  --brand: #a78bfa;', '}', '.btn {', '  background: var(--brand);', '}'],
      uz: [':root {', '  --brand: #a78bfa;', '}', '.btn {', '  background: var(--brand);', '}'],
    },
    question: { ru: 'Какого цвета фон кнопки?', uz: 'Tugma foni qanday rang?' },
    correctColor: '#a78bfa',
    correctOptionId: 'purple',
    options: [
      { id: 'purple', color: '#a78bfa' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'red', color: '#ef4444' },
      { id: 'gray', color: '#6b7280' },
    ],
  },
  {
    type: 'color',
    filename: 'text.css',
    code: {
      ru: ['.text {', '  color: crimson;', '}'],
      uz: ['.text {', '  color: crimson;', '}'],
    },
    question: { ru: 'Какого цвета будет текст?', uz: 'Matn qanday rangda bo‘ladi?' },
    correctColor: '#dc143c',
    correctOptionId: 'crimson',
    options: [
      { id: 'crimson', color: '#dc143c' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gray', color: '#6b7280' },
    ],
  },
  {
    type: 'color',
    filename: 'box2.css',
    code: {
      ru: ['.box {', '  background: navy;', '}'],
      uz: ['.box {', '  background: navy;', '}'],
    },
    question: { ru: 'Какого цвета фон коробки?', uz: 'Quti foni qanday rang?' },
    correctColor: '#000080',
    correctOptionId: 'navy',
    options: [
      { id: 'navy', color: '#000080' },
      { id: 'royal', color: '#4169e1' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
    ],
  },
  {
    type: 'color',
    filename: 'shorthand.css',
    code: {
      ru: ['.box {', '  background: #0f0;', '}'],
      uz: ['.box {', '  background: #0f0;', '}'],
    },
    question: { ru: 'Какого цвета фон? (это короткий hex)', uz: 'Fon qanday rang? (bu qisqa hex)' },
    correctColor: '#00ff00',
    correctOptionId: 'green',
    options: [
      { id: 'green', color: '#00ff00' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'red', color: '#ef4444' },
    ],
  },
  {
    type: 'color',
    filename: 'chip.css',
    code: {
      ru: ['.chip {', '  background: rgb(251, 191, 36);', '}'],
      uz: ['.chip {', '  background: rgb(251, 191, 36);', '}'],
    },
    question: { ru: 'Какого цвета фон чипа?', uz: 'Chip foni qanday rang?' },
    correctColor: '#fbbf24',
    correctOptionId: 'gold',
    options: [
      { id: 'gold', color: '#fbbf24' },
      { id: 'tomato', color: '#ff6347' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'purple', color: '#a78bfa' },
    ],
  },
  {
    type: 'color',
    filename: 'cascade.css',
    code: {
      ru: ['.box {', '  color: red;', '}', '.box {', '  color: blue;', '}'],
      uz: ['.box {', '  color: red;', '}', '.box {', '  color: blue;', '}'],
    },
    question: {
      ru: 'Один и тот же селектор задан дважды. Каким будет итоговый цвет текста?',
      uz: 'Bir xil selektor ikki marta yozilgan. Matnning yakuniy rangi qanday bo‘ladi?',
    },
    correctColor: '#0000ff',
    correctOptionId: 'blue',
    options: [
      { id: 'blue', color: '#0000ff' },
      { id: 'red', color: '#ff0000' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
    ],
  },
  {
    type: 'color',
    filename: 'fallback.css',
    code: {
      ru: ['.box {', '  background: var(--missing, tomato);', '}'],
      uz: ['.box {', '  background: var(--missing, tomato);', '}'],
    },
    question: {
      ru: 'Переменная --missing нигде не определена. Какой цвет применится?',
      uz: '--missing o‘zgaruvchisi hech qayerda aniqlanmagan. Qaysi rang qo‘llanadi?',
    },
    correctColor: '#ff6347',
    correctOptionId: 'tomato',
    options: [
      { id: 'tomato', color: '#ff6347' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'gray', color: '#6b7280' },
    ],
  },
  {
    type: 'color',
    filename: 'hover.css',
    code: {
      ru: ['.btn:hover {', '  background: teal;', '}', '.btn {', '  background: gray;', '}'],
      uz: ['.btn:hover {', '  background: teal;', '}', '.btn {', '  background: gray;', '}'],
    },
    question: {
      ru: 'Никто не наводит курсор на кнопку. Какой у неё сейчас фон?',
      uz: 'Hech kim tugma ustiga sichqonchani olib bormagan. Uning hozirgi foni qanday?',
    },
    correctColor: '#6b7280',
    correctOptionId: 'gray',
    options: [
      { id: 'gray', color: '#6b7280' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'red', color: '#ef4444' },
    ],
  },
  {
    type: 'color',
    filename: 'layer.css',
    code: {
      ru: ['.box {', '  background: teal;', '  background-color: gold;', '}'],
      uz: ['.box {', '  background: teal;', '  background-color: gold;', '}'],
    },
    question: {
      ru: 'Заданы обе строки подряд. Каким будет итоговый фон?',
      uz: 'Ikkala qator ketma-ket yozilgan. Yakuniy fon qanday bo‘ladi?',
    },
    correctColor: '#fbbf24',
    correctOptionId: 'gold',
    options: [
      { id: 'gold', color: '#fbbf24' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'tomato', color: '#ff6347' },
      { id: 'purple', color: '#a78bfa' },
    ],
  },
  {
    type: 'direction',
    filename: 'hero2.css',
    code: {
      ru: ['.hero {', '  transform: translateX(-40px);', '}'],
      uz: ['.hero {', '  transform: translateX(-40px);', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'left',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'hero3.css',
    code: {
      ru: ['.hero {', '  transform: translateY(-40px);', '}'],
      uz: ['.hero {', '  transform: translateY(-40px);', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'up',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'ghost.css',
    code: {
      ru: ['.ghost {', '  transform: translateY(40px);', '}'],
      uz: ['.ghost {', '  transform: translateY(40px);', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'down',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'shift.css',
    code: {
      ru: ['.hero {', '  margin-left: -40px;', '}'],
      uz: ['.hero {', '  margin-left: -40px;', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'left',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'lift.css',
    code: {
      ru: ['.hero {', '  margin-top: -40px;', '}'],
      uz: ['.hero {', '  margin-top: -40px;', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'up',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'edge.css',
    code: {
      ru: ['.hero {', '  position: relative;', '  right: 40px;', '}'],
      uz: ['.hero {', '  position: relative;', '  right: 40px;', '}'],
    },
    question: {
      ru: 'Свойство называется «right». Но в какую сторону реально сдвинется герой?',
      uz: 'Xususiyat nomi «right» («o‘ng»). Lekin qahramon aslida qaysi tomonga suriladi?',
    },
    correctOptionId: 'left',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'corner.css',
    code: {
      ru: ['.hero {', '  position: relative;', '  bottom: 40px;', '}'],
      uz: ['.hero {', '  position: relative;', '  bottom: 40px;', '}'],
    },
    question: {
      ru: 'Свойство называется «bottom». Но в какую сторону реально сдвинется герой?',
      uz: 'Xususiyat nomi «bottom» («past»). Lekin qahramon aslida qaysi tomonga suriladi?',
    },
    correctOptionId: 'up',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'color',
    filename: 'tag2.css',
    code: {
      ru: ['.tag {', '  background: orange;', '}'],
      uz: ['.tag {', '  background: orange;', '}'],
    },
    question: { ru: 'Какого цвета фон тега?', uz: 'Teg foni qanday rang?' },
    correctColor: '#ffa500',
    correctOptionId: 'orange',
    options: [
      { id: 'orange', color: '#ffa500' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'red', color: '#ef4444' },
      { id: 'teal', color: '#2dd4bf' },
    ],
  },
  {
    type: 'direction',
    filename: 'mover.css',
    code: {
      ru: ['.hero {', '  position: absolute;', '  top: 40px;', '}'],
      uz: ['.hero {', '  position: absolute;', '  top: 40px;', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'down',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'color',
    filename: 'opacity.css',
    code: {
      ru: ['.pill {', '  background: rgba(45, 212, 191, 1);', '}'],
      uz: ['.pill {', '  background: rgba(45, 212, 191, 1);', '}'],
    },
    question: { ru: 'Какого цвета фон таблетки?', uz: 'Pilla foni qanday rang?' },
    correctColor: '#2dd4bf',
    correctOptionId: 'teal',
    options: [
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'tomato', color: '#ff6347' },
      { id: 'purple', color: '#a78bfa' },
    ],
  },
  {
    type: 'direction',
    filename: 'nudge.css',
    code: {
      ru: ['.hero {', '  position: relative;', '  left: -40px;', '}'],
      uz: ['.hero {', '  position: relative;', '  left: -40px;', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'left',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'color',
    filename: 'black.css',
    code: {
      ru: ['.box {', '  background: rgb(0, 0, 0);', '}'],
      uz: ['.box {', '  background: rgb(0, 0, 0);', '}'],
    },
    question: { ru: 'Какого цвета фон коробки?', uz: 'Quti foni qanday rang?' },
    correctColor: '#000000',
    correctOptionId: 'black',
    options: [
      { id: 'black', color: '#000000' },
      { id: 'gray', color: '#6b7280' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
    ],
  },
  {
    type: 'color',
    filename: 'indigo.css',
    code: {
      ru: ['.box {', '  background: indigo;', '}'],
      uz: ['.box {', '  background: indigo;', '}'],
    },
    question: { ru: 'Какого цвета фон коробки?', uz: 'Quti foni qanday rang?' },
    correctColor: '#4b0082',
    correctOptionId: 'indigo',
    options: [
      { id: 'indigo', color: '#4b0082' },
      { id: 'purple', color: '#a78bfa' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'red', color: '#ef4444' },
    ],
  },
  {
    type: 'color',
    filename: 'varset.css',
    code: {
      ru: [':root {', '  --ok: #2dd4bf;', '}', '.chip {', '  background: var(--ok, gold);', '}'],
      uz: [':root {', '  --ok: #2dd4bf;', '}', '.chip {', '  background: var(--ok, gold);', '}'],
    },
    question: {
      ru: 'Переменная --ok уже определена. Какой цвет применится — сама переменная или запасной вариант?',
      uz: '--ok o‘zgaruvchisi allaqachon aniqlangan. Qaysi rang qo‘llanadi — o‘zgaruvchimi yoki zaxira variantmi?',
    },
    correctColor: '#2dd4bf',
    correctOptionId: 'teal',
    options: [
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'red', color: '#ef4444' },
      { id: 'purple', color: '#a78bfa' },
    ],
  },
  {
    type: 'color',
    filename: 'specificity.css',
    code: {
      ru: ['#title {', '  color: gold;', '}', '.title {', '  color: red;', '}'],
      uz: ['#title {', '  color: gold;', '}', '.title {', '  color: red;', '}'],
    },
    question: {
      ru: 'У элемента есть и class="title", и id="title". Чей цвет победит?',
      uz: 'Elementda ham class="title", ham id="title" bor. Qaysi birining rangi g‘alaba qiladi?',
    },
    correctColor: '#fbbf24',
    correctOptionId: 'gold',
    options: [
      { id: 'gold', color: '#fbbf24' },
      { id: 'red', color: '#ff0000' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'purple', color: '#a78bfa' },
    ],
  },
  {
    type: 'color',
    filename: 'shorthand2.css',
    code: {
      ru: ['.box {', '  background: #f0c;', '}'],
      uz: ['.box {', '  background: #f0c;', '}'],
    },
    question: { ru: 'Какого цвета фон? (это тоже короткий hex)', uz: 'Fon qanday rang? (bu ham qisqa hex)' },
    correctColor: '#ff00cc',
    correctOptionId: 'pink',
    options: [
      { id: 'pink', color: '#ff00cc' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'purple', color: '#a78bfa' },
    ],
  },
  {
    type: 'color',
    filename: 'seagreen.css',
    code: {
      ru: ['.box {', '  background: seagreen;', '}'],
      uz: ['.box {', '  background: seagreen;', '}'],
    },
    question: { ru: 'Какого цвета фон коробки?', uz: 'Quti foni qanday rang?' },
    correctColor: '#2e8b57',
    correctOptionId: 'seagreen',
    options: [
      { id: 'seagreen', color: '#2e8b57' },
      { id: 'teal', color: '#2dd4bf' },
      { id: 'gold', color: '#fbbf24' },
      { id: 'gray', color: '#6b7280' },
    ],
  },
  {
    type: 'color',
    filename: 'orchid.css',
    code: {
      ru: ['.box {', '  background: orchid;', '}'],
      uz: ['.box {', '  background: orchid;', '}'],
    },
    question: { ru: 'Какого цвета фон коробки?', uz: 'Quti foni qanday rang?' },
    correctColor: '#da70d6',
    correctOptionId: 'orchid',
    options: [
      { id: 'orchid', color: '#da70d6' },
      { id: 'purple', color: '#a78bfa' },
      { id: 'red', color: '#ef4444' },
      { id: 'teal', color: '#2dd4bf' },
    ],
  },
  {
    type: 'direction',
    filename: 'slide.css',
    code: {
      ru: ['.hero {', '  transform: translateX(60px);', '}'],
      uz: ['.hero {', '  transform: translateX(60px);', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'right',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'drop.css',
    code: {
      ru: ['.hero {', '  transform: translateY(60px);', '}'],
      uz: ['.hero {', '  transform: translateY(60px);', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'down',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'doubleflip.css',
    code: {
      ru: ['.hero {', '  position: relative;', '  right: -40px;', '}'],
      uz: ['.hero {', '  position: relative;', '  right: -40px;', '}'],
    },
    question: {
      ru: '«right» отрицательный на этот раз. В какую сторону сдвинется герой?',
      uz: 'Bu safar «right» manfiy. Qahramon qaysi tomonga suriladi?',
    },
    correctOptionId: 'right',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'dropflip.css',
    code: {
      ru: ['.hero {', '  position: relative;', '  bottom: -40px;', '}'],
      uz: ['.hero {', '  position: relative;', '  bottom: -40px;', '}'],
    },
    question: {
      ru: '«bottom» отрицательный на этот раз. В какую сторону сдвинется герой?',
      uz: 'Bu safar «bottom» manfiy. Qahramon qaysi tomonga suriladi?',
    },
    correctOptionId: 'down',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'retreat.css',
    code: {
      ru: ['.hero {', '  transform: translateX(-60px);', '}'],
      uz: ['.hero {', '  transform: translateX(-60px);', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'left',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'rise.css',
    code: {
      ru: ['.hero {', '  transform: translateY(-60px);', '}'],
      uz: ['.hero {', '  transform: translateY(-60px);', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'up',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
  {
    type: 'direction',
    filename: 'pushdown.css',
    code: {
      ru: ['.hero {', '  margin-top: 40px;', '}'],
      uz: ['.hero {', '  margin-top: 40px;', '}'],
    },
    question: { ru: 'В какую сторону сдвинется герой?', uz: 'Qahramon qaysi tomonga suriladi?' },
    correctOptionId: 'down',
    options: [
      { id: 'up', arrow: '↑' },
      { id: 'down', arrow: '↓' },
      { id: 'left', arrow: '←' },
      { id: 'right', arrow: '→' },
    ],
  },
];
