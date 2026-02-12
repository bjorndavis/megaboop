import { useState, useCallback } from 'react';
import { Build, Character, Weapon, Tome } from '../types/game.types';
import { getWeaponById } from '../data/weapons';
import {
  validateAddWeapon,
  validateRemoveWeapon,
  validateAddTome,
  validateRemoveTome,
  validateCharacterSelection
} from '../utils/validation';

export function useBuildState() {
  const [build, setBuild] = useState<Build>({
    character: null,
    weapons: [],
    tomes: [],
    name: ''
  });
  const [error, setError] = useState<string | null>(null);

  const selectCharacter = useCallback((character: Character) => {
    // Validate character
    const validation = validateCharacterSelection(character);
    if (!validation.valid) {
      setError(validation.error || 'Invalid character');
      return;
    }

    // Get starting weapon
    const startingWeapon = getWeaponById(character.startingWeaponId);
    if (!startingWeapon) {
      setError(`Starting weapon not found for ${character.name}`);
      return;
    }

    // Reset build with new character
    setBuild({
      character,
      weapons: [startingWeapon],
      tomes: []
    });
    setError(null);
  }, []);

  const addWeapon = useCallback((weapon: Weapon) => {
    setBuild(currentBuild => {
      const validation = validateAddWeapon(currentBuild, weapon);
      if (!validation.valid) {
        setError(validation.error || 'Cannot add weapon');
        return currentBuild;
      }

      setError(null);
      return {
        ...currentBuild,
        weapons: [...currentBuild.weapons, weapon]
      };
    });
  }, []);

  const removeWeapon = useCallback((index: number) => {
    setBuild(currentBuild => {
      const validation = validateRemoveWeapon(currentBuild, index);
      if (!validation.valid) {
        setError(validation.error || 'Cannot remove weapon');
        return currentBuild;
      }

      setError(null);
      return {
        ...currentBuild,
        weapons: currentBuild.weapons.filter((_, i) => i !== index)
      };
    });
  }, []);

  const addTome = useCallback((tome: Tome) => {
    setBuild(currentBuild => {
      const validation = validateAddTome(currentBuild, tome);
      if (!validation.valid) {
        setError(validation.error || 'Cannot add tome');
        return currentBuild;
      }

      setError(null);
      return {
        ...currentBuild,
        tomes: [...currentBuild.tomes, tome]
      };
    });
  }, []);

  const removeTome = useCallback((index: number) => {
    setBuild(currentBuild => {
      const validation = validateRemoveTome(currentBuild, index);
      if (!validation.valid) {
        setError(validation.error || 'Cannot remove tome');
        return currentBuild;
      }

      setError(null);
      return {
        ...currentBuild,
        tomes: currentBuild.tomes.filter((_, i) => i !== index)
      };
    });
  }, []);

  const resetBuild = useCallback(() => {
    setBuild({
      character: null,
      weapons: [],
      tomes: [],
      name: ''
    });
    setError(null);
  }, []);

  const setBuildName = useCallback((name: string) => {
    setBuild(currentBuild => ({
      ...currentBuild,
      name
    }));
  }, []);

  const setBuildDescription = useCallback((description: string) => {
    setBuild(currentBuild => ({
      ...currentBuild,
      description
    }));
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    build,
    error,
    selectCharacter,
    addWeapon,
    removeWeapon,
    addTome,
    removeTome,
    resetBuild,
    setBuildName,
    setBuildDescription,
    clearError
  };
}
