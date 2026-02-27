import { Build, Weapon, Tome, Item, Character } from '../types/game.types';
import { getWeaponById } from '../data/weapons';

export const MAX_WEAPONS = 4;
export const MAX_TOMES = 4;

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function validateAddWeapon(build: Build, weapon: Weapon): ValidationResult {
  // Must have character selected
  if (!build.character) {
    return { valid: false, error: 'Please select a character first' };
  }

  // Check if weapon already in build
  if (build.weapons.some(w => w.id === weapon.id)) {
    return { valid: false, error: 'This weapon is already in your build' };
  }

  // Check max weapons
  if (build.weapons.length >= MAX_WEAPONS) {
    return { valid: false, error: `Maximum ${MAX_WEAPONS} weapons allowed` };
  }

  return { valid: true };
}

export function validateRemoveWeapon(build: Build, index: number): ValidationResult {
  // Cannot remove starting weapon (index 0)
  if (index === 0) {
    return { valid: false, error: 'Cannot remove starting weapon' };
  }

  // Check if index is valid
  if (index < 0 || index >= build.weapons.length) {
    return { valid: false, error: 'Invalid weapon index' };
  }

  return { valid: true };
}

export function validateAddTome(build: Build, tome: Tome): ValidationResult {
  // Must have character selected
  if (!build.character) {
    return { valid: false, error: 'Please select a character first' };
  }

  // Check if tome already in build
  if (build.tomes.some(t => t.id === tome.id)) {
    return { valid: false, error: 'This tome is already in your build' };
  }

  // Check max tomes
  if (build.tomes.length >= MAX_TOMES) {
    return { valid: false, error: `Maximum ${MAX_TOMES} tomes allowed` };
  }

  return { valid: true };
}

export function validateRemoveTome(build: Build, index: number): ValidationResult {
  // Check if index is valid
  if (index < 0 || index >= build.tomes.length) {
    return { valid: false, error: 'Invalid tome index' };
  }

  return { valid: true };
}

export function validateAddItem(build: Build, _item: Item): ValidationResult {
  // Must have character selected
  if (!build.character) {
    return { valid: false, error: 'Please select a character first' };
  }

  return { valid: true };
}

export function validateRemoveItem(build: Build, index: number): ValidationResult {
  if (index < 0 || index >= build.items.length) {
    return { valid: false, error: 'Invalid item index' };
  }

  return { valid: true };
}

export function validateCharacterSelection(character: Character): ValidationResult {
  // Check if starting weapon exists
  const startingWeapon = getWeaponById(character.startingWeaponId);
  if (!startingWeapon) {
    return {
      valid: false,
      error: `Starting weapon ${character.startingWeaponId} not found for ${character.name}`
    };
  }

  return { valid: true };
}
