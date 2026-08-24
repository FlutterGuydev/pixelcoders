// Visual/spatial validation instead of string parsing — the Open Lesson
// has no code, so success is judged by block order (door before handle),
// not by matching a syntax pattern like the typed html-1 level does.
export const BLOCK_TYPES = {
  door: {
    id: 'door',
    icon: '🚪',
    label: { ru: 'Добавь дверь', uz: 'Eshik qo‘sh' },
    color: '#ff6b6b',
  },
  handle: {
    id: 'handle',
    icon: '🔘',
    label: { ru: 'Добавь ручку', uz: 'Dastak qo‘sh' },
    color: '#4d96ff',
  },
  torch: {
    id: 'torch',
    icon: '🔥',
    label: { ru: 'Зажги факел', uz: 'Mash’al yoq' },
    color: '#ffb703',
  },
};

export function validateStack(stack) {
  const types = stack.map((b) => b.type);
  const doorIndex = types.indexOf('door');
  const handleIndex = types.indexOf('handle');

  if (doorIndex === -1) return { success: false, reason: 'needDoor' };
  if (handleIndex === -1) return { success: false, reason: 'needHandle' };
  if (handleIndex < doorIndex) return { success: false, reason: 'handleBeforeDoor' };
  return { success: true };
}

export const htmlOpenLesson = {
  id: 'html-open',
  trackId: 'html',
  wingLabel: { ru: 'Разрушенные врата — HTML', uz: 'Vayron darvoza — HTML' },
  title: { ru: 'Открытый урок: Построй дверь', uz: 'Ochiq dars: Eshikni yasash' },
  goals: {
    ru: [
      'Перетащи блок «Добавь дверь» на сцену.',
      'Перетащи блок «Добавь ручку» после двери.',
    ],
    uz: [
      '«Eshik qo‘sh» blokini sahnaga torting.',
      '«Dastak qo‘sh» blokini eshikdan keyin torting.',
    ],
  },
  successMessage: {
    ru: 'Дверь со скрипом открывается — герой проходит внутрь!',
    uz: 'Eshik g‘ichirlab ochiladi — qahramon ichkariga o‘tadi!',
  },
  dungeonCaption: {
    ru: 'Перетаскивай блоки, чтобы построить дверь — без единой строчки кода.',
    uz: 'Kod yozmasdan, bloklarni torting va eshikni quring.',
  },
  blocks: ['door', 'handle', 'torch'],
  validate: validateStack,
};
