// Logic Gate Rooms: 2-3 toggleable levers gate a door. Condition is
// evaluated live on every toggle (no submit) so the progress ring and
// door glow update in real time. Room 3 combines both rules the first
// two rooms taught in isolation.
export function evaluateGateCondition(ruleType, levers) {
  if (ruleType === 'and') return levers[0] && levers[1];
  if (ruleType === 'or') return levers[0] || levers[1];
  // combo: (A AND B) OR C
  return (levers[0] && levers[1]) || levers[2];
}

export function computeGateProgress(ruleType, levers) {
  if (ruleType === 'and') {
    const on = levers.filter(Boolean).length;
    return Math.round((on / 2) * 100);
  }
  if (ruleType === 'or') {
    return levers.some(Boolean) ? 100 : 0;
  }
  const andProgress = (Number(levers[0]) + Number(levers[1])) / 2;
  const orProgress = levers[2] ? 1 : 0;
  return Math.round(Math.max(andProgress, orProgress) * 100);
}

export const GATE_ROOMS = [
  { ruleType: 'and', leverCount: 2, ruleLabel: { ru: 'И', uz: 'VA' } },
  { ruleType: 'or', leverCount: 2, ruleLabel: { ru: 'ИЛИ', uz: 'YOKI' } },
  { ruleType: 'combo', leverCount: 3, ruleLabel: { ru: 'И + ИЛИ', uz: 'VA + YOKI' } },
];

export const logicLevel5 = {
  id: 'logic-5',
  trackId: 'logic',
  wingLabel: { ru: 'Логические комнаты', uz: 'Mantiq xonalari' },
  title: { ru: 'Комната рычагов', uz: 'Richaglar xonasi' },
  goals: {
    ru: ['Переключай рычаги так, чтобы выполнить условие над дверью, и она откроется.'],
    uz: ['Eshik ustidagi shartni bajaradigan holatga richaglarni o‘tkaz — eshik ochiladi.'],
  },
  successMessage: {
    ru: 'Ты прошёл все три комнаты условий!',
    uz: 'Sen barcha uchta shart xonasini tugatding!',
  },
  rooms: GATE_ROOMS,
};
