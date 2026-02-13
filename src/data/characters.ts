import { Character } from '../types/game.types';

export const characters: Character[] = [
  {
    id: 'amog',
    name: 'Amog',
    type: 'character',
    startingWeaponId: 'poison-flask',
    passive: 'Poisoned enemies explode on death, adding all stacks of Poison to enemies hit. Also gain 1% Poison Damage per level.',
    description: "No one knows his real name. Everyone just started calling him Amog, and he never corrected them.",
    imageUrl: '/images/characters/amog.png',
    unlockCondition: 'Poison 50,000 enemies with Moldy Cheese'
  },
  {
    id: 'athena',
    name: 'Athena',
    type: 'character',
    startingWeaponId: 'aegis',
    passive: 'Lock in: More damage at low HP. Gain +2 Thorns per level. Also increases attack speed by 150% when no shields are active.',
    description: "Captain America but ordered from Temu (with a 23% discount)",
    imageUrl: '/images/characters/athena.png',
    unlockCondition: 'Upgrade Thorns Tome to Level 9'
  },
  {
    id: 'bandit',
    name: 'Bandit',
    type: 'character',
    startingWeaponId: 'dexecutioner',
    passive: '+1% Attack Speed per level',
    description: 'A sneaky lad with a sharp sword.',
    imageUrl: '/images/characters/bandit.png',
    unlockCondition: 'Defeat Bandit in the Desert'
  },
  {
    id: 'birdo',
    name: 'Birdo',
    type: 'character',
    startingWeaponId: 'tornado',
    passive: "Hold 'Jump' to float in the air. Also gain 1% Airborne Damage per level.",
    description: 'The glasses are for your safety, not his.',
    imageUrl: '/images/characters/birdo.png',
    unlockCondition: 'Defeat 100 enemies with Tornado weapon while airborne in Desert'
  },
  {
    id: 'bush',
    name: 'Bush',
    type: 'character',
    startingWeaponId: 'sniper-rifle',
    passive: 'Marked enemies explode when shot. +1% Crit Damage per level.',
    description: 'Just a normal bush, nothing to see here.',
    imageUrl: '/images/characters/bush.png',
    unlockCondition: 'Defeat Bush in the Forest'
  },
  {
    id: 'calcium',
    name: 'Calcium',
    type: 'character',
    startingWeaponId: 'bone',
    passive: 'Speed Demon: Speed builds up over time, but is halved when you take damage. Gain damage based on speed.',
    description: 'An undead shredder who pulls off the sickest tricks.',
    imageUrl: '/images/characters/calcium.png',
    unlockCondition: 'Defeat 1,000 Skeletons'
  },
  {
    id: 'cl4nk',
    name: 'CL4NK',
    type: 'character',
    startingWeaponId: 'revolver',
    passive: 'Crit Happens: +1% Crit Chance per level',
    description: "I don't know how to pronounce his name.",
    imageUrl: '/images/characters/cl4nk.png',
    unlockCondition: 'Complete Forest Tier 1'
  },
  {
    id: 'dicehead',
    name: 'Dicehead',
    type: 'character',
    startingWeaponId: 'dice',
    passive: 'Roll the dice and upgrade a random stat when you level up.',
    description: "His favorite number is 7. Who's gonna tell him the bad news?",
    imageUrl: '/images/characters/dicehead.png',
    unlockCondition: 'Complete 100 Quests'
  },
  {
    id: 'fox',
    name: 'Fox',
    type: 'character',
    startingWeaponId: 'firestaff',
    passive: 'RNG Blessing: Gain 2% Luck per level.',
    description: 'Quick on his feet and unnaturally lucky.',
    imageUrl: '/images/characters/fox.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'megachad',
    name: 'Megachad',
    type: 'character',
    startingWeaponId: 'aura',
    passive: 'Flex: Stuns enemies and prevents damage. -0.2s cooldown per level. Gain 2.5% damage when you flex.',
    description: 'He wields the perfect, most powerful jawline.',
    imageUrl: '/images/characters/megachad.png',
    unlockCondition: 'Upgrade the Damage Tome to Level 7'
  },
  {
    id: 'monke',
    name: 'Monke',
    type: 'character',
    startingWeaponId: 'bananarang',
    passive: 'Monke Grip: Climb up walls. Also gain +2 Max HP per level.',
    description: 'No one knows where he got the shades. No one asks.',
    imageUrl: '/images/characters/monke.png',
    unlockCondition: 'Free Monke in the Forest with the Gold Key'
  },
  {
    id: 'ninja',
    name: 'Ninja',
    type: 'character',
    startingWeaponId: 'katana',
    passive: 'Execute an enemy upon evading them. Also, 0.5% Evasion per level.',
    description: "Very fast and elusive. Hasn't filed his taxes since 2014. He's cooked.",
    imageUrl: '/images/characters/ninja.png',
    unlockCondition: 'Complete Desert Tier 1'
  },
  {
    id: 'noelle',
    name: 'Noelle',
    type: 'character',
    startingWeaponId: 'frostwalker',
    passive: 'Gain 0.75% Size per level. Also increase Damage by 1.5% per currently frozen enemy.',
    description: 'The Megabonk Discord bullied me into creating this character.',
    imageUrl: '/images/characters/noelle.png',
    unlockCondition: 'Use Microwave to duplicate Ice Crystal 3 times in a row'
  },
  {
    id: 'ogre',
    name: 'Ogre',
    type: 'character',
    startingWeaponId: 'axe',
    passive: 'Warrior: +1.5% Damage per level',
    description: 'Big and strong, with the critical thinking skills of a wet sock.',
    imageUrl: '/images/characters/ogre.png',
    unlockCondition: 'Defeat 15,000 Goblins'
  },
  {
    id: 'roberto',
    name: 'Roberto',
    type: 'character',
    startingWeaponId: 'scythe',
    passive: 'Free chest every 60s, increasing to 120s over levels. He can also float (a little).',
    description: 'He claims to be floating. Scientists and experts are still investigating.',
    imageUrl: '/images/characters/roberto.png',
    unlockCondition: 'Defeat Spooky Steve'
  },
  {
    id: 'robinette',
    name: 'Robinette',
    type: 'character',
    startingWeaponId: 'bow',
    passive: '+1% Gold Gain per level. Increase Damage by 10% per 1000 gold in inventory.',
    description: 'Steals from the poor, gives to the rich.',
    imageUrl: '/images/characters/robinette.png',
    unlockCondition: 'Complete Forest Tier 2'
  },
  {
    id: 'sir-chadwell',
    name: 'Sir Chadwell',
    type: 'character',
    startingWeaponId: 'corrupted-sword',
    passive: '+1% Difficulty per level',
    description: "Sir Oofie's wife's boyfriend. Bought him new armor and lets him stay up past 8:30. Nice guy!",
    imageUrl: '/images/characters/sir-chadwell.png',
    unlockCondition: 'Complete Forest Tier 3'
  },
  {
    id: 'sir-oofie',
    name: 'Sir Oofie',
    type: 'character',
    startingWeaponId: 'sword',
    passive: 'Reinforced: +1% Armor per level',
    description: "He's slow, but his armor makes him pretty chunky.",
    imageUrl: '/images/characters/sir-oofie.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'spaceman',
    name: 'Spaceman',
    type: 'character',
    startingWeaponId: 'black-hole',
    passive: 'Gain 1% XP Gain per level.',
    description: 'Spaceman is currently banned from 7 planets and most NASA gift shops.',
    imageUrl: '/images/characters/spaceman.png',
    unlockCondition: 'Complete 6 Challenges'
  },
  {
    id: 'tony-mczoom',
    name: 'Tony McZoom',
    type: 'character',
    startingWeaponId: 'wireless-dagger',
    passive: 'Zap: Charge an electric attack by moving around. Gain 2% pickup range per level.',
    description: "Tony didn't choose the hoverboard - the hoverboard chose him.",
    imageUrl: '/images/characters/tony-mczoom.png',
    unlockCondition: 'Complete 2 Challenges'
  },
  {
    id: 'vlad',
    name: 'Vlad',
    type: 'character',
    startingWeaponId: 'blood-magic',
    passive: '+1% Lifesteal per level',
    description: "He looks pretty evil but he's actually a really nice dude. He always says hi at the grocery store. Chill guy.",
    imageUrl: '/images/characters/vlad.png',
    unlockCondition: 'Complete Desert Tier 2'
  }
];

// Helper function to get character by ID
export function getCharacterById(id: string): Character | undefined {
  return characters.find(character => character.id === id);
}
