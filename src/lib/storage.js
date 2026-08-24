import { playerLevelForXp } from './xp';
import { computeTrackUnlocks } from './unlocks';
import { TRACK_LEVEL_IDS } from '../data/tracks';

const STORAGE_KEY = 'pixelcoders_player_v1';

export function defaultPlayer(displayName = 'Guest Adventurer') {
  return {
    playerId: 'local-' + Math.random().toString(36).slice(2, 10),
    displayName,
    totalXP: 0,
    playerLevel: 1,
    streak: { current: 0, longest: 0, lastPlayedDate: null },
    badges: [],
    consecutiveNoHintSolves: 0,
    tracks: {
      basics: { levelsCompleted: [], unlocked: true },
      html: { levelsCompleted: [], unlocked: false },
      cssBasics: { levelsCompleted: [], unlocked: false },
      css: { levelsCompleted: [], unlocked: false },
      // Logic Rooms teaches thinking skills, not syntax, so it's open
      // from the start rather than gated behind a coding track.
      logic: { levelsCompleted: [], unlocked: true },
    },
    cosmetics: { unlocked: ['default'], equipped: 'default' },
  };
}

export function loadPlayer() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Keep derived fields honest even if storage predates a logic change.
    parsed.playerLevel = playerLevelForXp(parsed.totalXP);
    if (!parsed.tracks.basics) {
      parsed.tracks.basics = { levelsCompleted: [], unlocked: true };
    }
    if (!parsed.tracks.cssBasics) {
      parsed.tracks.cssBasics = { levelsCompleted: [], unlocked: false };
    }
    if (!parsed.tracks.logic) {
      parsed.tracks.logic = { levelsCompleted: [], unlocked: true };
    }
    parsed.tracks = computeTrackUnlocks(parsed.tracks, TRACK_LEVEL_IDS);
    return parsed;
  } catch {
    return null;
  }
}

export function savePlayer(player) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
}

export function clearPlayer() {
  localStorage.removeItem(STORAGE_KEY);
}

const PLAYGROUND_KEY = 'pixelcoders_playground_v1';

export function loadPlaygroundCode() {
  return localStorage.getItem(PLAYGROUND_KEY);
}

export function savePlaygroundCode(code) {
  localStorage.setItem(PLAYGROUND_KEY, code);
}
