Kithspire.initLevel({
  wing: 'Kithspire Forest — JavaScript',
  title: 'Level 1: The Spike Patch',
  filename: 'quest.js',
  goals: [
    'Move the hero around the spike patch.',
    'Reach the gem without stepping on a spike.',
  ],
  hints: [
    'hero.moveRight();',
    'hero.moveLeft();',
    'hero.moveUp();',
    'hero.moveDown();',
  ],
  starterCode: `// Move the hero to the gem\nhero.moveRight();\n`,
  grid: { cols: 6, rows: 2 },
  start: { x: 0, y: 0 },
  target: { x: 5, y: 1 },
  hazards: [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
  ],
  badge: 'Pathfinder',
  successMessage: 'You dodged the spikes and reached the gem.',
  commands: [
    { pattern: /^hero\.moveRight\(\);$/, dx: 1, dy: 0 },
    { pattern: /^hero\.moveLeft\(\);$/, dx: -1, dy: 0 },
    { pattern: /^hero\.moveUp\(\);$/, dx: 0, dy: -1 },
    { pattern: /^hero\.moveDown\(\);$/, dx: 0, dy: 1 },
  ],
});
