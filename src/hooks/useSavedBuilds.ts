import { useState, useCallback } from 'react';
import { Build } from '../types/game.types';

const STORAGE_KEY = 'megaboop-saved-builds';

export interface SavedBuild {
  id: string;
  name: string;
  savedAt: number;
  build: Build;
}

function readFromStorage(): SavedBuild[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SavedBuild[];
  } catch {
    return [];
  }
}

function writeToStorage(builds: SavedBuild[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(builds));
  } catch {
    // Storage may be full or unavailable
  }
}

export function useSavedBuilds() {
  const [savedBuilds, setSavedBuilds] = useState<SavedBuild[]>(() => readFromStorage());

  const saveCurrentBuild = useCallback((build: Build) => {
    const entry: SavedBuild = {
      id: Date.now().toString(),
      name: build.name || 'Unnamed Build',
      savedAt: Date.now(),
      build
    };
    setSavedBuilds(prev => {
      const next = [entry, ...prev];
      writeToStorage(next);
      return next;
    });
  }, []);

  const deleteSavedBuild = useCallback((id: string) => {
    setSavedBuilds(prev => {
      const next = prev.filter(b => b.id !== id);
      writeToStorage(next);
      return next;
    });
  }, []);

  return { savedBuilds, saveCurrentBuild, deleteSavedBuild };
}
