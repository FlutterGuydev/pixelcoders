// Code Duel puzzle bank. Each puzzle names the basics/cssBasics level it
// draws its concept from (requiresTrackId + requiresLevelId) — a puzzle is
// only offered once the player has actually completed that level, so a
// duel never tests something untaught. byteDurationMs is the rival's fixed
// fill-pace for that puzzle (the tuning knob for difficulty), and never
// changes based on player skill or a difficulty picker.
import { hasTag, extractTagInner, hasAttr, tagHasContent, countTagWithContent } from '../lib/basicsCheck';
import { extractStyleContent, getRuleValue } from '../lib/cssCheck';

function htmlValidate({ ok, missingMessage }) {
  return (code) => {
    if (ok(code)) return { success: true };
    return { success: false, message: missingMessage };
  };
}

export const DUEL_PUZZLES = [
  {
    id: 'duel-h1',
    requiresTrackId: 'basics',
    requiresLevelId: 'basics-1',
    title: { ru: 'Дуэль: заголовок <h1>', uz: 'Duel: <h1> sarlavha' },
    filename: 'duel.html',
    goals: {
      ru: ['Напиши тег <h1> с любым текстом внутри — быстрее Байта!'],
      uz: ['<h1> tegini istalgan matn bilan yoz — Baytdan tezroq!'],
    },
    hints: ['<h1>Твой текст</h1>'],
    starterCode: '<!-- Победи Байта: напиши заголовок -->\n\n',
    byteDurationMs: 5000,
    validate: htmlValidate({
      ok: (code) => !!extractTagInner(code, 'h1'),
      missingMessage: {
        ru: 'Тега <h1> с текстом внутри пока нет.',
        uz: 'Ichida matni bor <h1> tegi hali yo‘q.',
      },
    }),
  },
  {
    id: 'duel-p',
    requiresTrackId: 'basics',
    requiresLevelId: 'basics-3',
    title: { ru: 'Дуэль: абзац <p>', uz: 'Duel: <p> abzatsi' },
    filename: 'duel.html',
    goals: {
      ru: ['Напиши тег <p> с текстом внутри — быстрее Байта!'],
      uz: ['<p> tegini matn bilan yoz — Baytdan tezroq!'],
    },
    hints: ['<p>Твой текст</p>'],
    starterCode: '<!-- Победи Байта: напиши абзац -->\n\n',
    byteDurationMs: 5000,
    validate: htmlValidate({
      ok: (code) => !!extractTagInner(code, 'p'),
      missingMessage: {
        ru: 'Тега <p> с текстом внутри пока нет.',
        uz: 'Ichida matni bor <p> tegi hali yo‘q.',
      },
    }),
  },
  {
    id: 'duel-a',
    requiresTrackId: 'basics',
    requiresLevelId: 'basics-5',
    title: { ru: 'Дуэль: ссылка <a>', uz: 'Duel: <a> havolasi' },
    filename: 'duel.html',
    goals: {
      ru: ['Сделай ссылку <a> с атрибутом href и текстом — быстрее Байта!'],
      uz: ['href atributi va matni bor <a> havolasini yasa — Baytdan tezroq!'],
    },
    hints: ['<a href="https://example.com">Твой текст</a>'],
    starterCode: '<!-- Победи Байта: сделай ссылку -->\n\n',
    byteDurationMs: 6500,
    validate: htmlValidate({
      ok: (code) => hasAttr(code, 'a', 'href') && tagHasContent(code, 'a'),
      missingMessage: {
        ru: 'Нужна ссылка <a href="..."> с текстом внутри.',
        uz: 'Ichida matni bor va href atributli <a href="..."> kerak.',
      },
    }),
  },
  {
    id: 'duel-img',
    requiresTrackId: 'basics',
    requiresLevelId: 'basics-6',
    title: { ru: 'Дуэль: картинка <img>', uz: 'Duel: <img> rasm' },
    filename: 'duel.html',
    goals: {
      ru: ['Вставь <img> с атрибутами src и alt — быстрее Байта!'],
      uz: ['src va alt atributlari bor <img> qo‘sh — Baytdan tezroq!'],
    },
    hints: ['<img src="cat.jpg" alt="Кот">'],
    starterCode: '<!-- Победи Байта: вставь картинку -->\n\n',
    byteDurationMs: 6500,
    validate: htmlValidate({
      ok: (code) => hasAttr(code, 'img', 'src') && hasAttr(code, 'img', 'alt'),
      missingMessage: {
        ru: 'Нужен <img> с атрибутами src и alt.',
        uz: 'src va alt atributlari bor <img> kerak.',
      },
    }),
  },
  {
    id: 'duel-list',
    requiresTrackId: 'basics',
    requiresLevelId: 'basics-7',
    title: { ru: 'Дуэль: список <ul>', uz: 'Duel: <ul> ro‘yxati' },
    filename: 'duel.html',
    goals: {
      ru: ['Собери <ul> минимум с двумя пунктами <li> — быстрее Байта!'],
      uz: ['Kamida ikkita <li> bandi bor <ul> tuz — Baytdan tezroq!'],
    },
    hints: ['<ul>\n  <li>Первый</li>\n  <li>Второй</li>\n</ul>'],
    starterCode: '<!-- Победи Байта: собери список -->\n\n',
    byteDurationMs: 8000,
    validate: htmlValidate({
      ok: (code) => hasTag(code, 'ul') && countTagWithContent(code, 'li') >= 2,
      missingMessage: {
        ru: 'Нужен <ul> минимум с двумя <li>, у которых есть текст.',
        uz: 'Matnli kamida ikkita <li> bilan <ul> kerak.',
      },
    }),
  },
  {
    id: 'duel-color',
    requiresTrackId: 'cssBasics',
    requiresLevelId: 'css-basics-1',
    title: { ru: 'Дуэль: цвет текста', uz: 'Duel: matn rangi' },
    filename: 'duel.html',
    goals: {
      ru: ['Покрась текст <p> свойством color — быстрее Байта!'],
      uz: ['color xususiyati bilan <p> matnini bo‘ya — Baytdan tezroq!'],
    },
    hints: ['p { color: red; }'],
    starterCode: '<p>Победи Байта</p>\n<style>\n  p {\n\n  }\n</style>\n',
    byteDurationMs: 6500,
    validate: htmlValidate({
      ok: (code) => !!getRuleValue(extractStyleContent(code), 'p', 'color'),
      missingMessage: {
        ru: 'Свойство color для p ещё не задано.',
        uz: 'p uchun color xususiyati hali berilmagan.',
      },
    }),
  },
  {
    id: 'duel-bg',
    requiresTrackId: 'cssBasics',
    requiresLevelId: 'css-basics-2',
    title: { ru: 'Дуэль: фон', uz: 'Duel: fon rangi' },
    filename: 'duel.html',
    goals: {
      ru: ['Покрась фон <div> свойством background-color — быстрее Байта!'],
      uz: ['background-color bilan <div> fonini bo‘ya — Baytdan tezroq!'],
    },
    hints: ['div { background-color: gold; }'],
    starterCode: '<div>Победи Байта</div>\n<style>\n  div {\n\n  }\n</style>\n',
    byteDurationMs: 6500,
    validate: htmlValidate({
      ok: (code) => !!getRuleValue(extractStyleContent(code), 'div', 'background-color'),
      missingMessage: {
        ru: 'Свойство background-color для div ещё не задано.',
        uz: 'div uchun background-color xususiyati hali berilmagan.',
      },
    }),
  },
  {
    id: 'duel-flex',
    requiresTrackId: 'cssBasics',
    requiresLevelId: 'css-basics-13',
    title: { ru: 'Дуэль: флексбокс', uz: 'Duel: fleksboks' },
    filename: 'duel.html',
    goals: {
      ru: ['Сделай .row флекс-контейнером через display: flex — быстрее Байта!'],
      uz: ['display: flex orqali .row ni fleks konteyner qil — Baytdan tezroq!'],
    },
    hints: ['.row { display: flex; }'],
    starterCode: '<div class="row">\n  <div>1</div>\n  <div>2</div>\n</div>\n<style>\n  .row {\n\n  }\n</style>\n',
    byteDurationMs: 10000,
    validate: htmlValidate({
      ok: (code) => getRuleValue(extractStyleContent(code), '.row', 'display') === 'flex',
      missingMessage: {
        ru: '.row пока не display: flex.',
        uz: '.row hali display: flex emas.',
      },
    }),
  },
];

// A puzzle is only offered once the player has completed the level its
// concept comes from — a duel never tests something untaught.
export function getEligibleDuelPuzzles(player) {
  if (!player) return [];
  return DUEL_PUZZLES.filter((puzzle) =>
    player.tracks[puzzle.requiresTrackId]?.levelsCompleted.includes(puzzle.requiresLevelId)
  );
}

export function getDuelPuzzle(id) {
  return DUEL_PUZZLES.find((puzzle) => puzzle.id === id) || null;
}
