import { BUG_HUNT_ROUNDS } from './levels/logicLevel1';
import { PREDICT_ROUNDS } from './levels/logicLevel2';
import { CODE_SORT_ROUNDS } from './levels/logicLevel3';
import { PATTERN_ROUNDS } from './levels/logicLevel4';
import { GATE_ROOMS } from './levels/logicLevel5';

// Turns the 5 Logic Rooms round pools into many short, single-mechanic
// levels instead of 5 long mega-levels — each level is just a small slice
// of its game's pool. Levels are generated in round-robin order across the
// 5 game "lanes" (bug hunt, predict, sort, pattern, gate) so the path
// alternates game types instead of grouping 15+ of the same game back to
// back, and difficulty still climbs steadily because each lane's pool is
// itself already ordered easy-to-hard — a later level in a lane is always
// deeper into that lane's pool.
//
// IMPORTANT: only ever *append* new rounds to the end of a pool. Inserting
// in the middle reshuffles every id after that point, which would silently
// invalidate any player's already-completed level ids.
const LANES = [
  { gameType: 'bug', pool: BUG_HUNT_ROUNDS, sliceSize: 2, title: { ru: 'Охота на баг', uz: 'Xato ovi' } },
  { gameType: 'predict', pool: PREDICT_ROUNDS, sliceSize: 2, title: { ru: 'Угадай результат', uz: 'Natijani top' } },
  { gameType: 'sort', pool: CODE_SORT_ROUNDS, sliceSize: 2, title: { ru: 'Собери порядок', uz: 'Tartibni yig‘' } },
  { gameType: 'pattern', pool: PATTERN_ROUNDS, sliceSize: 2, title: { ru: 'Найди узор', uz: 'Naqshni top' } },
  { gameType: 'gate', pool: GATE_ROOMS, sliceSize: 1, title: { ru: 'Комната рычагов', uz: 'Richaglar xonasi' } },
];

function chunk(pool, size) {
  const chunks = [];
  for (let i = 0; i < pool.length; i += size) chunks.push(pool.slice(i, i + size));
  return chunks;
}

function generateLogicLevels() {
  const lanes = LANES.map((lane) => ({ ...lane, chunks: chunk(lane.pool, lane.sliceSize) }));
  const cursors = lanes.map(() => 0);
  const levels = [];
  let n = 1;
  let madeProgress = true;

  while (madeProgress) {
    madeProgress = false;
    lanes.forEach((lane, laneIndex) => {
      const chunkIndex = cursors[laneIndex];
      if (chunkIndex >= lane.chunks.length) return;
      levels.push({
        id: `logic-${n}`,
        trackId: 'logic',
        gameType: lane.gameType,
        title: {
          ru: `${lane.title.ru} ${chunkIndex + 1}`,
          uz: `${lane.title.uz} ${chunkIndex + 1}`,
        },
        rounds: lane.chunks[chunkIndex],
      });
      n += 1;
      cursors[laneIndex] += 1;
      madeProgress = true;
    });
  }

  return levels;
}

export const LOGIC_LEVELS = generateLogicLevels();
export const LOGIC_LEVEL_IDS = LOGIC_LEVELS.map((level) => level.id);
