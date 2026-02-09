import { createContext, useContext, ReactNode } from 'react';
import { useBuildState } from '../hooks/useBuildState';
import { Build, Character, Weapon, Tome } from '../types/game.types';

interface BuildContextType {
  build: Build;
  error: string | null;
  selectCharacter: (character: Character) => void;
  addWeapon: (weapon: Weapon) => void;
  removeWeapon: (index: number) => void;
  addTome: (tome: Tome) => void;
  removeTome: (index: number) => void;
  resetBuild: () => void;
  setBuildName: (name: string) => void;
  clearError: () => void;
}

const BuildContext = createContext<BuildContextType | undefined>(undefined);

export function BuildProvider({ children }: { children: ReactNode }) {
  const buildState = useBuildState();

  return (
    <BuildContext.Provider value={buildState}>
      {children}
    </BuildContext.Provider>
  );
}

export function useBuild() {
  const context = useContext(BuildContext);
  if (context === undefined) {
    throw new Error('useBuild must be used within a BuildProvider');
  }
  return context;
}
