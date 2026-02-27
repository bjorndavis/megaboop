import { useState, useCallback } from 'react';
import { Build, Character, Weapon, Tome, Item } from '../types/game.types';
import { getWeaponById } from '../data/weapons';
import {
  validateAddWeapon,
  validateRemoveWeapon,
  validateAddTome,
  validateRemoveTome,
  validateAddItem,
  validateRemoveItem,
  validateCharacterSelection
} from '../utils/validation';

export function useBuildState() {
  const [build, setBuild] = useState<Build>({
    character: null,
    weapons: [],
    tomes: [],
    items: [],
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
      tomes: [],
      items: []
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

  const addItem = useCallback((item: Item) => {
    setBuild(currentBuild => {
      const validation = validateAddItem(currentBuild, item);
      if (!validation.valid) {
        setError(validation.error || 'Cannot add item');
        return currentBuild;
      }

      setError(null);
      return {
        ...currentBuild,
        items: [...currentBuild.items, item]
      };
    });
  }, []);

  const removeItem = useCallback((index: number) => {
    setBuild(currentBuild => {
      const validation = validateRemoveItem(currentBuild, index);
      if (!validation.valid) {
        setError(validation.error || 'Cannot remove item');
        return currentBuild;
      }

      setError(null);
      return {
        ...currentBuild,
        items: currentBuild.items.filter((_, i) => i !== index)
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
      items: [],
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

  const loadBuild = useCallback((buildToLoad: Build) => {
    setBuild({
      character: buildToLoad.character,
      weapons: buildToLoad.weapons,
      tomes: buildToLoad.tomes,
      items: buildToLoad.items ?? [],
      name: buildToLoad.name,
      description: buildToLoad.description
    });
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
    addItem,
    removeItem,
    resetBuild,
    setBuildName,
    setBuildDescription,
    clearError,
    loadBuild
  };
}
