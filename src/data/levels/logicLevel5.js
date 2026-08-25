// Logic Gate Rooms: 2-3 toggleable levers gate a door. Condition is
// evaluated live on every toggle (no submit) so the progress ring and
// door glow update in real time. Each ruleType is a fully distinct,
// non-customizable rule (no per-room lever labels or story text yet), so
// unlike the other Logic Rooms games there's a real ceiling here: one
// room per rule reads as a genuine new puzzle, a second room with the
// *same* ruleType would just be an identical repeat. That's why this is
// six rooms (one per rule), not dozens — `and3`/`or3` teach that a rule
// generalizes past two inputs, `xor` teaches "exactly one", and `combo`
// composes two rules already taught in isolation.
export function evaluateGateCondition(ruleType, levers) {
  if (ruleType === 'and') return levers[0] && levers[1];
  if (ruleType === 'or') return levers[0] || levers[1];
  if (ruleType === 'and3') return levers[0] && levers[1] && levers[2];
  if (ruleType === 'or3') return levers[0] || levers[1] || levers[2];
  if (ruleType === 'xor') return Boolean(levers[0]) !== Boolean(levers[1]);
  if (ruleType === 'majority3') return levers.filter(Boolean).length >= 2;
  if (ruleType === 'xor3') return levers.filter(Boolean).length % 2 === 1;
  // combo: (A AND B) OR C
  return (levers[0] && levers[1]) || levers[2];
}

export function computeGateProgress(ruleType, levers) {
  if (ruleType === 'and') {
    const on = levers.filter(Boolean).length;
    return Math.round((on / 2) * 100);
  }
  if (ruleType === 'and3') {
    const on = levers.filter(Boolean).length;
    return Math.round((on / 3) * 100);
  }
  if (ruleType === 'majority3') {
    const on = levers.filter(Boolean).length;
    return Math.round(Math.min(on / 2, 1) * 100);
  }
  if (ruleType === 'or' || ruleType === 'or3' || ruleType === 'xor' || ruleType === 'xor3') {
    return evaluateGateCondition(ruleType, levers) ? 100 : 0;
  }
  const andProgress = (Number(levers[0]) + Number(levers[1])) / 2;
  const orProgress = levers[2] ? 1 : 0;
  return Math.round(Math.max(andProgress, orProgress) * 100);
}

export const GATE_ROOMS = [
  { ruleType: 'and', leverCount: 2, ruleLabel: { ru: 'И', uz: 'VA' } },
  { ruleType: 'or', leverCount: 2, ruleLabel: { ru: 'ИЛИ', uz: 'YOKI' } },
  { ruleType: 'xor', leverCount: 2, ruleLabel: { ru: 'ИСКЛЮЧАЮЩЕЕ ИЛИ', uz: 'MUSTASNO YOKI' } },
  { ruleType: 'and3', leverCount: 3, ruleLabel: { ru: 'И (×3)', uz: 'VA (×3)' } },
  { ruleType: 'or3', leverCount: 3, ruleLabel: { ru: 'ИЛИ (×3)', uz: 'YOKI (×3)' } },
  { ruleType: 'combo', leverCount: 3, ruleLabel: { ru: 'И + ИЛИ', uz: 'VA + YOKI' } },
  { ruleType: 'majority3', leverCount: 3, ruleLabel: { ru: 'БОЛЬШИНСТВО', uz: 'KO‘PCHILIK' } },
  { ruleType: 'xor3', leverCount: 3, ruleLabel: { ru: 'ИСКЛЮЧАЮЩЕЕ ИЛИ (×3)', uz: 'MUSTASNO YOKI (×3)' } },
];
