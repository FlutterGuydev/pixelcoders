// Pattern Puzzle: a fixed sequence of swatches with 1-2 slots missing at
// the end. Each option supplies that many items at once, so a "pick" can
// represent a multi-item continuation once two rules interleave (round 3
// onward). Purely visual — no bilingual copy needed in the round data
// itself, since color/size patterns read the same in every language.
const TEAL = 'var(--accent-teal)';
const GOLD = 'var(--accent-gold)';
const RED = 'var(--accent-red)';
const PURPLE = '#a78bfa';

export const PATTERN_ROUNDS = [
  {
    // Simple repeating rule: color alternates, size constant.
    sequence: [
      { size: 30, color: TEAL },
      { size: 30, color: GOLD },
      { size: 30, color: TEAL },
      { size: 30, color: GOLD },
    ],
    missingCount: 1,
    options: [
      { id: 'teal', correct: true, items: [{ size: 30, color: TEAL }] },
      { id: 'gold', correct: false, items: [{ size: 30, color: GOLD }] },
      { id: 'red', correct: false, items: [{ size: 30, color: RED }] },
      { id: 'purple', correct: false, items: [{ size: 30, color: PURPLE }] },
    ],
  },
  {
    // Simple rule: size increases by 8px each step, color constant.
    sequence: [
      { size: 18, color: TEAL },
      { size: 26, color: TEAL },
      { size: 34, color: TEAL },
      { size: 42, color: TEAL },
    ],
    missingCount: 1,
    options: [
      { id: '50', correct: true, items: [{ size: 50, color: TEAL }] },
      { id: '42', correct: false, items: [{ size: 42, color: TEAL }] },
      { id: '58', correct: false, items: [{ size: 58, color: TEAL }] },
      { id: '34', correct: false, items: [{ size: 34, color: TEAL }] },
    ],
  },
  {
    // Two interleaved rules: color alternates AND size grows +8px.
    // Distractors each break exactly one rule.
    sequence: [
      { size: 18, color: TEAL },
      { size: 26, color: GOLD },
      { size: 34, color: TEAL },
      { size: 42, color: GOLD },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 50, color: TEAL },
          { size: 58, color: GOLD },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 50, color: GOLD },
          { size: 58, color: TEAL },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 42, color: TEAL },
          { size: 42, color: GOLD },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 58, color: TEAL },
          { size: 50, color: GOLD },
        ],
      },
    ],
  },
  {
    // 3-color cycle (teal, gold, red repeating), size constant.
    sequence: [
      { size: 26, color: TEAL },
      { size: 26, color: GOLD },
      { size: 26, color: RED },
      { size: 26, color: TEAL },
      { size: 26, color: GOLD },
    ],
    missingCount: 1,
    options: [
      { id: 'red', correct: true, items: [{ size: 26, color: RED }] },
      { id: 'teal', correct: false, items: [{ size: 26, color: TEAL }] },
      { id: 'gold', correct: false, items: [{ size: 26, color: GOLD }] },
      { id: 'purple', correct: false, items: [{ size: 26, color: PURPLE }] },
    ],
  },
  {
    // Size shrinks by 6px each step, color constant.
    sequence: [
      { size: 46, color: TEAL },
      { size: 40, color: TEAL },
      { size: 34, color: TEAL },
      { size: 28, color: TEAL },
    ],
    missingCount: 1,
    options: [
      { id: '22', correct: true, items: [{ size: 22, color: TEAL }] },
      { id: '28', correct: false, items: [{ size: 28, color: TEAL }] },
      { id: '16', correct: false, items: [{ size: 16, color: TEAL }] },
      { id: '34', correct: false, items: [{ size: 34, color: TEAL }] },
    ],
  },
  {
    // Size alternates big/small, color constant.
    sequence: [
      { size: 40, color: GOLD },
      { size: 20, color: GOLD },
      { size: 40, color: GOLD },
      { size: 20, color: GOLD },
    ],
    missingCount: 1,
    options: [
      { id: '40', correct: true, items: [{ size: 40, color: GOLD }] },
      { id: '20', correct: false, items: [{ size: 20, color: GOLD }] },
      { id: '30', correct: false, items: [{ size: 30, color: GOLD }] },
      { id: '10', correct: false, items: [{ size: 10, color: GOLD }] },
    ],
  },
  {
    // Two interleaved rules with different colors/step than round 3.
    sequence: [
      { size: 18, color: PURPLE },
      { size: 26, color: RED },
      { size: 34, color: PURPLE },
      { size: 42, color: RED },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 50, color: PURPLE },
          { size: 58, color: RED },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 50, color: RED },
          { size: 58, color: PURPLE },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 42, color: PURPLE },
          { size: 42, color: RED },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 58, color: PURPLE },
          { size: 50, color: RED },
        ],
      },
    ],
  },
  {
    // Size increases by 10px each step, color constant.
    sequence: [
      { size: 12, color: RED },
      { size: 22, color: RED },
      { size: 32, color: RED },
      { size: 42, color: RED },
    ],
    missingCount: 1,
    options: [
      { id: '52', correct: true, items: [{ size: 52, color: RED }] },
      { id: '42', correct: false, items: [{ size: 42, color: RED }] },
      { id: '62', correct: false, items: [{ size: 62, color: RED }] },
      { id: '32', correct: false, items: [{ size: 32, color: RED }] },
    ],
  },
  {
    // Color alternates AND size is tied to the color (not growing).
    sequence: [
      { size: 30, color: TEAL },
      { size: 18, color: GOLD },
      { size: 30, color: TEAL },
      { size: 18, color: GOLD },
    ],
    missingCount: 1,
    options: [
      { id: 'teal30', correct: true, items: [{ size: 30, color: TEAL }] },
      { id: 'gold18', correct: false, items: [{ size: 18, color: GOLD }] },
      { id: 'teal18', correct: false, items: [{ size: 18, color: TEAL }] },
      { id: 'gold30', correct: false, items: [{ size: 30, color: GOLD }] },
    ],
  },
  {
    // Two interleaved rules, both shrinking this time.
    sequence: [
      { size: 50, color: TEAL },
      { size: 42, color: GOLD },
      { size: 34, color: TEAL },
      { size: 26, color: GOLD },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 18, color: TEAL },
          { size: 10, color: GOLD },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 18, color: GOLD },
          { size: 10, color: TEAL },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 26, color: TEAL },
          { size: 26, color: GOLD },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 22, color: TEAL },
          { size: 14, color: GOLD },
        ],
      },
    ],
  },
  {
    // 3-color cycle with different colors and size than round 4.
    sequence: [
      { size: 30, color: GOLD },
      { size: 30, color: PURPLE },
      { size: 30, color: TEAL },
      { size: 30, color: GOLD },
      { size: 30, color: PURPLE },
    ],
    missingCount: 1,
    options: [
      { id: 'teal', correct: true, items: [{ size: 30, color: TEAL }] },
      { id: 'gold', correct: false, items: [{ size: 30, color: GOLD }] },
      { id: 'purple', correct: false, items: [{ size: 30, color: PURPLE }] },
      { id: 'red', correct: false, items: [{ size: 30, color: RED }] },
    ],
  },
  {
    // Size repeats in blocks of two: 20, 20, 40, 40, then the block restarts.
    sequence: [
      { size: 20, color: RED },
      { size: 20, color: RED },
      { size: 40, color: RED },
      { size: 40, color: RED },
    ],
    missingCount: 1,
    options: [
      { id: '20', correct: true, items: [{ size: 20, color: RED }] },
      { id: '40', correct: false, items: [{ size: 40, color: RED }] },
      { id: '30', correct: false, items: [{ size: 30, color: RED }] },
      { id: '10', correct: false, items: [{ size: 10, color: RED }] },
    ],
  },
  {
    // Size increases by 7px each step, color constant (purple this time).
    sequence: [
      { size: 15, color: PURPLE },
      { size: 22, color: PURPLE },
      { size: 29, color: PURPLE },
      { size: 36, color: PURPLE },
    ],
    missingCount: 1,
    options: [
      { id: '43', correct: true, items: [{ size: 43, color: PURPLE }] },
      { id: '36', correct: false, items: [{ size: 36, color: PURPLE }] },
      { id: '50', correct: false, items: [{ size: 50, color: PURPLE }] },
      { id: '29', correct: false, items: [{ size: 29, color: PURPLE }] },
    ],
  },
  {
    // Color alternates teal/gold, size constant.
    sequence: [
      { size: 28, color: TEAL },
      { size: 28, color: GOLD },
      { size: 28, color: TEAL },
      { size: 28, color: GOLD },
    ],
    missingCount: 1,
    options: [
      { id: 'teal', correct: true, items: [{ size: 28, color: TEAL }] },
      { id: 'gold', correct: false, items: [{ size: 28, color: GOLD }] },
      { id: 'red', correct: false, items: [{ size: 28, color: RED }] },
      { id: 'purple', correct: false, items: [{ size: 28, color: PURPLE }] },
    ],
  },
  {
    // Size increases by 8px each step, color constant — but this time two
    // slots are missing at once.
    sequence: [
      { size: 20, color: TEAL },
      { size: 28, color: TEAL },
      { size: 36, color: TEAL },
      { size: 44, color: TEAL },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 52, color: TEAL },
          { size: 60, color: TEAL },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 60, color: TEAL },
          { size: 52, color: TEAL },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 44, color: TEAL },
          { size: 52, color: TEAL },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 52, color: TEAL },
          { size: 68, color: TEAL },
        ],
      },
    ],
  },
  {
    // 3-color cycle where TWO next colors are missing at once, size constant.
    sequence: [
      { size: 32, color: TEAL },
      { size: 32, color: GOLD },
      { size: 32, color: RED },
      { size: 32, color: TEAL },
      { size: 32, color: GOLD },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 32, color: RED },
          { size: 32, color: TEAL },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 32, color: TEAL },
          { size: 32, color: GOLD },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 32, color: GOLD },
          { size: 32, color: RED },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 32, color: RED },
          { size: 32, color: GOLD },
        ],
      },
    ],
  },
  {
    // Size increases by 9px each step, color constant (gold).
    sequence: [
      { size: 14, color: GOLD },
      { size: 23, color: GOLD },
      { size: 32, color: GOLD },
      { size: 41, color: GOLD },
    ],
    missingCount: 1,
    options: [
      { id: '50', correct: true, items: [{ size: 50, color: GOLD }] },
      { id: '41', correct: false, items: [{ size: 41, color: GOLD }] },
      { id: '59', correct: false, items: [{ size: 59, color: GOLD }] },
      { id: '32', correct: false, items: [{ size: 32, color: GOLD }] },
    ],
  },
  {
    // 3-color cycle with a third combo of colors, size constant.
    sequence: [
      { size: 24, color: TEAL },
      { size: 24, color: PURPLE },
      { size: 24, color: GOLD },
      { size: 24, color: TEAL },
      { size: 24, color: PURPLE },
    ],
    missingCount: 1,
    options: [
      { id: 'gold', correct: true, items: [{ size: 24, color: GOLD }] },
      { id: 'teal', correct: false, items: [{ size: 24, color: TEAL }] },
      { id: 'purple', correct: false, items: [{ size: 24, color: PURPLE }] },
      { id: 'red', correct: false, items: [{ size: 24, color: RED }] },
    ],
  },
  {
    // Size shrinks by 5px each step, color constant (red).
    sequence: [
      { size: 48, color: RED },
      { size: 43, color: RED },
      { size: 38, color: RED },
      { size: 33, color: RED },
    ],
    missingCount: 1,
    options: [
      { id: '28', correct: true, items: [{ size: 28, color: RED }] },
      { id: '33', correct: false, items: [{ size: 33, color: RED }] },
      { id: '23', correct: false, items: [{ size: 23, color: RED }] },
      { id: '38', correct: false, items: [{ size: 38, color: RED }] },
    ],
  },
  {
    // Two interleaved rules, both shrinking by 6px, gold/teal this time.
    sequence: [
      { size: 44, color: GOLD },
      { size: 38, color: TEAL },
      { size: 32, color: GOLD },
      { size: 26, color: TEAL },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 20, color: GOLD },
          { size: 14, color: TEAL },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 20, color: TEAL },
          { size: 14, color: GOLD },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 26, color: GOLD },
          { size: 26, color: TEAL },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 23, color: GOLD },
          { size: 17, color: TEAL },
        ],
      },
    ],
  },
  {
    // Size increases by 11px each step, color constant (teal).
    sequence: [
      { size: 16, color: TEAL },
      { size: 27, color: TEAL },
      { size: 38, color: TEAL },
      { size: 49, color: TEAL },
    ],
    missingCount: 1,
    options: [
      { id: '60', correct: true, items: [{ size: 60, color: TEAL }] },
      { id: '49', correct: false, items: [{ size: 49, color: TEAL }] },
      { id: '71', correct: false, items: [{ size: 71, color: TEAL }] },
      { id: '38', correct: false, items: [{ size: 38, color: TEAL }] },
    ],
  },
  {
    // 3-color cycle (red, teal, purple repeating), size constant.
    sequence: [
      { size: 28, color: RED },
      { size: 28, color: TEAL },
      { size: 28, color: PURPLE },
      { size: 28, color: RED },
      { size: 28, color: TEAL },
    ],
    missingCount: 1,
    options: [
      { id: 'purple', correct: true, items: [{ size: 28, color: PURPLE }] },
      { id: 'red', correct: false, items: [{ size: 28, color: RED }] },
      { id: 'teal', correct: false, items: [{ size: 28, color: TEAL }] },
      { id: 'gold', correct: false, items: [{ size: 28, color: GOLD }] },
    ],
  },
  {
    // Size shrinks by 7px each step, color constant (gold).
    sequence: [
      { size: 50, color: GOLD },
      { size: 43, color: GOLD },
      { size: 36, color: GOLD },
      { size: 29, color: GOLD },
    ],
    missingCount: 1,
    options: [
      { id: '22', correct: true, items: [{ size: 22, color: GOLD }] },
      { id: '29', correct: false, items: [{ size: 29, color: GOLD }] },
      { id: '15', correct: false, items: [{ size: 15, color: GOLD }] },
      { id: '36', correct: false, items: [{ size: 36, color: GOLD }] },
    ],
  },
  {
    // Size alternates big/small, color constant (purple).
    sequence: [
      { size: 36, color: PURPLE },
      { size: 16, color: PURPLE },
      { size: 36, color: PURPLE },
      { size: 16, color: PURPLE },
    ],
    missingCount: 1,
    options: [
      { id: '36', correct: true, items: [{ size: 36, color: PURPLE }] },
      { id: '16', correct: false, items: [{ size: 16, color: PURPLE }] },
      { id: '26', correct: false, items: [{ size: 26, color: PURPLE }] },
      { id: '6', correct: false, items: [{ size: 6, color: PURPLE }] },
    ],
  },
  {
    // Two interleaved rules: color alternates teal/red, size grows +9px.
    sequence: [
      { size: 16, color: TEAL },
      { size: 25, color: RED },
      { size: 34, color: TEAL },
      { size: 43, color: RED },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 52, color: TEAL },
          { size: 61, color: RED },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 52, color: RED },
          { size: 61, color: TEAL },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 43, color: TEAL },
          { size: 43, color: RED },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 61, color: TEAL },
          { size: 52, color: RED },
        ],
      },
    ],
  },
  {
    // Size increases by 6px each step, color constant (red).
    sequence: [
      { size: 10, color: RED },
      { size: 16, color: RED },
      { size: 22, color: RED },
      { size: 28, color: RED },
    ],
    missingCount: 1,
    options: [
      { id: '34', correct: true, items: [{ size: 34, color: RED }] },
      { id: '28', correct: false, items: [{ size: 28, color: RED }] },
      { id: '40', correct: false, items: [{ size: 40, color: RED }] },
      { id: '22', correct: false, items: [{ size: 22, color: RED }] },
    ],
  },
  {
    // 4-color cycle (teal, gold, red, purple repeating), size constant.
    sequence: [
      { size: 24, color: TEAL },
      { size: 24, color: GOLD },
      { size: 24, color: RED },
      { size: 24, color: PURPLE },
      { size: 24, color: TEAL },
    ],
    missingCount: 1,
    options: [
      { id: 'gold', correct: true, items: [{ size: 24, color: GOLD }] },
      { id: 'red', correct: false, items: [{ size: 24, color: RED }] },
      { id: 'purple', correct: false, items: [{ size: 24, color: PURPLE }] },
      { id: 'teal', correct: false, items: [{ size: 24, color: TEAL }] },
    ],
  },
  {
    // Size shrinks by 9px each step, color constant (purple).
    sequence: [
      { size: 58, color: PURPLE },
      { size: 49, color: PURPLE },
      { size: 40, color: PURPLE },
      { size: 31, color: PURPLE },
    ],
    missingCount: 1,
    options: [
      { id: '22', correct: true, items: [{ size: 22, color: PURPLE }] },
      { id: '31', correct: false, items: [{ size: 31, color: PURPLE }] },
      { id: '13', correct: false, items: [{ size: 13, color: PURPLE }] },
      { id: '40', correct: false, items: [{ size: 40, color: PURPLE }] },
    ],
  },
  {
    // Color alternates gold/red, size constant.
    sequence: [
      { size: 30, color: GOLD },
      { size: 30, color: RED },
      { size: 30, color: GOLD },
      { size: 30, color: RED },
    ],
    missingCount: 1,
    options: [
      { id: 'gold', correct: true, items: [{ size: 30, color: GOLD }] },
      { id: 'red', correct: false, items: [{ size: 30, color: RED }] },
      { id: 'teal', correct: false, items: [{ size: 30, color: TEAL }] },
      { id: 'purple', correct: false, items: [{ size: 30, color: PURPLE }] },
    ],
  },
  {
    // Two interleaved rules: color alternates gold/purple, size shrinks -7px.
    sequence: [
      { size: 46, color: GOLD },
      { size: 39, color: PURPLE },
      { size: 32, color: GOLD },
      { size: 25, color: PURPLE },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 18, color: GOLD },
          { size: 11, color: PURPLE },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 18, color: PURPLE },
          { size: 11, color: GOLD },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 25, color: GOLD },
          { size: 25, color: PURPLE },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 22, color: GOLD },
          { size: 15, color: PURPLE },
        ],
      },
    ],
  },
  {
    // Size increases by 12px each step, color constant (teal).
    sequence: [
      { size: 12, color: TEAL },
      { size: 24, color: TEAL },
      { size: 36, color: TEAL },
      { size: 48, color: TEAL },
    ],
    missingCount: 1,
    options: [
      { id: '60', correct: true, items: [{ size: 60, color: TEAL }] },
      { id: '48', correct: false, items: [{ size: 48, color: TEAL }] },
      { id: '72', correct: false, items: [{ size: 72, color: TEAL }] },
      { id: '36', correct: false, items: [{ size: 36, color: TEAL }] },
    ],
  },
  {
    // 3-color cycle (gold, red, teal) where TWO next colors are missing.
    sequence: [
      { size: 20, color: GOLD },
      { size: 20, color: RED },
      { size: 20, color: TEAL },
      { size: 20, color: GOLD },
      { size: 20, color: RED },
    ],
    missingCount: 2,
    options: [
      {
        id: 'A',
        correct: true,
        items: [
          { size: 20, color: TEAL },
          { size: 20, color: GOLD },
        ],
      },
      {
        id: 'B',
        correct: false,
        items: [
          { size: 20, color: GOLD },
          { size: 20, color: RED },
        ],
      },
      {
        id: 'C',
        correct: false,
        items: [
          { size: 20, color: RED },
          { size: 20, color: TEAL },
        ],
      },
      {
        id: 'D',
        correct: false,
        items: [
          { size: 20, color: TEAL },
          { size: 20, color: RED },
        ],
      },
    ],
  },
  {
    // Size repeats in blocks of two: 24, 24, 48, 48, then the block restarts.
    sequence: [
      { size: 24, color: GOLD },
      { size: 24, color: GOLD },
      { size: 48, color: GOLD },
      { size: 48, color: GOLD },
    ],
    missingCount: 1,
    options: [
      { id: '24', correct: true, items: [{ size: 24, color: GOLD }] },
      { id: '48', correct: false, items: [{ size: 48, color: GOLD }] },
      { id: '36', correct: false, items: [{ size: 36, color: GOLD }] },
      { id: '12', correct: false, items: [{ size: 12, color: GOLD }] },
    ],
  },
  {
    // Color alternates AND size is tied to the color (purple/red this time).
    sequence: [
      { size: 28, color: PURPLE },
      { size: 14, color: RED },
      { size: 28, color: PURPLE },
      { size: 14, color: RED },
    ],
    missingCount: 1,
    options: [
      { id: 'purple28', correct: true, items: [{ size: 28, color: PURPLE }] },
      { id: 'red14', correct: false, items: [{ size: 14, color: RED }] },
      { id: 'purple14', correct: false, items: [{ size: 14, color: PURPLE }] },
      { id: 'red28', correct: false, items: [{ size: 28, color: RED }] },
    ],
  },
];
