import { createContext, useContext, useMemo, useState } from 'react';
import { loadPlayer, savePlayer, defaultPlayer, clearPlayer, savePlaygroundCode } from '../lib/storage';
import { playerLevelForXp, computeCompletionXp } from '../lib/xp';
import { updateStreakOnCompletion } from '../lib/streak';
import { evaluateNewBadges } from '../lib/badges';
import { computeTrackUnlocks } from '../lib/unlocks';
import { TRACK_LEVEL_IDS } from '../data/tracks';

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const [player, setPlayer] = useState(() => loadPlayer());

  const login = (displayName) => {
    const existing = loadPlayer();
    const next = existing || defaultPlayer(displayName || 'Guest Adventurer');
    if (displayName) next.displayName = displayName;
    savePlayer(next);
    setPlayer(next);
  };

  const logout = () => {
    clearPlayer();
    setPlayer(null);
  };

  /**
   * Records a level completion, awards XP, updates streak/badges,
   * and persists the result. Returns a summary the level screen uses
   * to decide whether to show the level-up overlay.
   */
  const completeLevel = ({ trackId, levelId, hintsOpened, failedAttempts }) => {
    if (!player) return null;

    const track = player.tracks[trackId];
    const alreadyCompleted = track.levelsCompleted.includes(levelId);

    if (alreadyCompleted) {
      return { xpAwarded: 0, alreadyCompleted: true, leveledUp: false, newBadges: [] };
    }

    const fromLevel = player.playerLevel;
    const streak = updateStreakOnCompletion(player.streak);
    const xpAwarded = computeCompletionXp({
      hintsOpened,
      failedAttempts,
      streakDays: streak.current,
    });
    const totalXP = player.totalXP + xpAwarded;
    const toLevel = playerLevelForXp(totalXP);
    const leveledUp = toLevel > fromLevel;

    const nextConsecutiveNoHintSolves = hintsOpened ? 0 : player.consecutiveNoHintSolves + 1;

    const tracksAfterCompletion = {
      ...player.tracks,
      [trackId]: {
        ...track,
        levelsCompleted: [...track.levelsCompleted, levelId],
      },
    };

    const nextPlayer = {
      ...player,
      totalXP,
      playerLevel: toLevel,
      streak,
      consecutiveNoHintSolves: nextConsecutiveNoHintSolves,
      tracks: computeTrackUnlocks(tracksAfterCompletion, TRACK_LEVEL_IDS),
    };

    const newBadges = evaluateNewBadges(nextPlayer, { failedAttempts }, TRACK_LEVEL_IDS);
    nextPlayer.badges = [...player.badges, ...newBadges];

    savePlayer(nextPlayer);
    setPlayer(nextPlayer);

    return { xpAwarded, alreadyCompleted: false, leveledUp, fromLevel, toLevel, newBadges };
  };

  /**
   * Persists the player's free-form Playground code and, the first time
   * they ever save something there, awards the "Free Builder" badge —
   * Playground has no track/level id, so it can't go through completeLevel.
   */
  const savePlaygroundWork = (code) => {
    savePlaygroundCode(code);
    if (!player || player.badges.includes('free-builder')) return { newBadge: false };

    const nextPlayer = { ...player, badges: [...player.badges, 'free-builder'] };
    savePlayer(nextPlayer);
    setPlayer(nextPlayer);
    return { newBadge: true };
  };

  const value = useMemo(
    () => ({ player, login, logout, completeLevel, savePlaygroundWork }),
    [player]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within a PlayerProvider');
  return ctx;
}
