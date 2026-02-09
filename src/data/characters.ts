import { Character } from '../types/game.types';

export const characters: Character[] = [
  {
    id: 'fox',
    name: 'Fox',
    type: 'character',
    startingWeaponId: 'firestaff',
    passive: 'RNG Blessing: +2% Luck per level',
    description: 'Cunning and agile starter character',
    imageUrl: '/images/characters/fox.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'sir-oofie',
    name: 'Sir Oofie',
    type: 'character',
    startingWeaponId: 'sword',
    passive: 'Reinforced: +1% Armor per level',
    description: 'A noble knight with sword mastery',
    imageUrl: '/images/characters/sir-oofie.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'calcium',
    name: 'Calcium',
    type: 'character',
    startingWeaponId: 'bone',
    passive: 'Speed Demon: Speed increases over time but halves when taking damage. Damage scales with Speed',
    description: 'Skeletal warrior with bone affinity',
    imageUrl: '/images/characters/calcium.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'megachad',
    name: 'Megachad',
    type: 'character',
    startingWeaponId: 'aura',
    passive: 'Flex: Stuns enemies and prevents damage. -0.2s cooldown per level. +2.5% damage every flex',
    description: 'Radiates power and confidence',
    imageUrl: '/images/characters/megachad.png',
    unlockCondition: 'Beat wave 5'
  },
  {
    id: 'ogre',
    name: 'Ogre',
    type: 'character',
    startingWeaponId: 'axe',
    passive: 'Warrior: +1.5% Damage per level',
    description: 'Brutal strength with heavy weapons',
    imageUrl: '/images/characters/ogre.png',
    unlockCondition: 'Beat wave 8'
  },
  {
    id: 'cl4nk',
    name: 'CL4NK',
    type: 'character',
    startingWeaponId: 'revolver',
    passive: 'Crit Happens: +1% Crit Chance per level',
    description: 'Robotic gunslinger',
    imageUrl: '/images/characters/cl4nk.png',
    unlockCondition: 'Beat wave 10'
  },
  {
    id: 'athena',
    name: 'Athena',
    type: 'character',
    startingWeaponId: 'aegis',
    passive: 'Lock in: More damage at low HP. Gain +2 Thorns per level',
    description: 'Divine protector with aegis',
    imageUrl: '/images/characters/athena.png',
    unlockCondition: 'Beat wave 12'
  },
  {
    id: 'robinette',
    name: 'Robinette',
    type: 'character',
    startingWeaponId: 'bow',
    passive: '+1% Gold Gain per level. Increase Damage by 10% per 1000 gold in inventory',
    description: 'Master archer',
    imageUrl: '/images/characters/robinette.png',
    unlockCondition: 'Beat wave 7'
  },
  {
    id: 'monke',
    name: 'Monke',
    type: 'character',
    startingWeaponId: 'bananarang',
    passive: 'Monke Grip: Can climb walls. Gain +2 Max HP per level',
    description: 'Primate with banana power',
    imageUrl: '/images/characters/monke.png',
    unlockCondition: 'Beat wave 6'
  },
  {
    id: 'tony-mczoom',
    name: 'Tony McZoom',
    type: 'character',
    startingWeaponId: 'wireless-dagger',
    passive: 'Zap: Charge an electric attack by moving. +2% Pickup Range per level',
    description: 'Speed demon with orbiting blades',
    imageUrl: '/images/characters/tony-mczoom.png',
    unlockCondition: 'Beat wave 15'
  },
  {
    id: 'bush',
    name: 'Bush',
    type: 'character',
    startingWeaponId: 'sniper-rifle',
    passive: 'Random enemies are marked. +1% Crit Damage per level',
    description: 'Camouflaged sniper',
    imageUrl: '/images/characters/bush.png',
    unlockCondition: 'Beat wave 13'
  },
  {
    id: 'birdo',
    name: 'Birdo',
    type: 'character',
    startingWeaponId: 'tornado',
    passive: 'Hold "Jump" to float in the air. +1% Airborne Damage',
    description: 'Avian wind controller',
    imageUrl: '/images/characters/birdo.png',
    unlockCondition: 'Beat wave 14'
  },
  {
    id: 'noelle',
    name: 'Noelle',
    type: 'character',
    startingWeaponId: 'frostwalker',
    passive: '+1% Size per level. +0.02x damage per frozen enemy',
    description: 'Ice mage with freezing powers',
    imageUrl: '/images/characters/noelle.png',
    unlockCondition: 'Beat wave 11'
  },
  {
    id: 'amog',
    name: 'Amog',
    type: 'character',
    startingWeaponId: 'poison-flask',
    passive: 'Poisoned enemies explode on death, poisoning nearby enemies',
    description: 'Suspicious poisoner',
    imageUrl: '/images/characters/amog.png',
    unlockCondition: 'Beat wave 9'
  },
  {
    id: 'spaceman',
    name: 'Spaceman',
    type: 'character',
    startingWeaponId: 'black-hole',
    passive: '+1.5% XP Gain per level',
    description: 'Cosmic explorer',
    imageUrl: '/images/characters/spaceman.png',
    unlockCondition: 'Beat wave 18'
  },
  {
    id: 'bandit',
    name: 'Bandit',
    type: 'character',
    startingWeaponId: 'dexecutioner',
    passive: '+1% Attack Speed per level',
    description: 'Outlaw with dual axes',
    imageUrl: '/images/characters/bandit.png',
    unlockCondition: 'Beat wave 16'
  },
  {
    id: 'ninja',
    name: 'Ninja',
    type: 'character',
    startingWeaponId: 'katana',
    passive: 'Executes an enemy after evasion. +0.5% Evasion per level',
    description: 'Shadow warrior',
    imageUrl: '/images/characters/ninja.png',
    unlockCondition: 'Beat wave 17'
  },
  {
    id: 'vlad',
    name: 'Vlad',
    type: 'character',
    startingWeaponId: 'blood-magic',
    passive: '+1% Lifesteal per level',
    description: 'Vampire blood mage',
    imageUrl: '/images/characters/vlad.png',
    unlockCondition: 'Beat wave 19'
  },
  {
    id: 'sir-chadwell',
    name: 'Sir Chadwell',
    type: 'character',
    startingWeaponId: 'corrupted-sword',
    passive: '+1% Difficulty per level',
    description: 'Fallen knight with dark power',
    imageUrl: '/images/characters/sir-chadwell.png',
    unlockCondition: 'Beat wave 20'
  },
  {
    id: 'dicehead',
    name: 'Dicehead',
    type: 'character',
    startingWeaponId: 'dice',
    passive: 'Roll the dice and upgrade a random stat when you level up',
    description: 'Gambler with chaotic luck',
    imageUrl: '/images/characters/dicehead.png',
    unlockCondition: 'Beat wave 22'
  },
  {
    id: 'roberto',
    name: 'Roberto',
    type: 'character',
    startingWeaponId: 'scythe',
    passive: 'Free chest every 60s, increasing to 120s over levels. He can also float (a little)',
    description: 'Reaper with deadly scythe',
    imageUrl: '/images/characters/roberto.png',
    unlockCondition: 'Beat wave 25'
  }
];

// Helper function to get character by ID
export function getCharacterById(id: string): Character | undefined {
  return characters.find(character => character.id === id);
}
