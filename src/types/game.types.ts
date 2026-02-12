export interface GameItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Weapon extends GameItem {
  type: 'weapon';
  unlockCondition?: string;
  beneficialStats?: string[]; // tome IDs that benefit this weapon
}

export interface Tome extends GameItem {
  type: 'tome';
  effect: string;
  unlockCondition?: string;
}

export interface Character extends GameItem {
  type: 'character';
  startingWeaponId: string;
  passive: string;
  unlockCondition: string;
}

export interface Build {
  character: Character | null;
  weapons: Weapon[];
  tomes: Tome[];
  name?: string;
  description?: string;
}
