import { Tome } from '../types/game.types';

export const tomes: Tome[] = [
  // Default Tomes (13)
  {
    id: 'agility',
    name: 'Agility',
    type: 'tome',
    effect: '+15% Movement Speed',
    description: 'Move faster across the battlefield',
    imageUrl: '/images/tomes/agility.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'armor',
    name: 'Armor',
    type: 'tome',
    effect: '+12% Armor',
    description: 'Reduce incoming damage',
    imageUrl: '/images/tomes/armor.png',
    unlockCondition: 'Kill 5,000 enemies as Sir Oofie'
  },
  {
    id: 'attraction',
    name: 'Attraction',
    type: 'tome',
    effect: '+75% Pickup Range',
    description: 'Magnetize pickups and experience gems',
    imageUrl: '/images/tomes/attraction.png',
    unlockCondition: 'Use the Shrine of Succ 8 times'
  },
  {
    id: 'bloody',
    name: 'Bloody',
    type: 'tome',
    effect: '+10% Lifesteal',
    description: 'Heal by dealing damage',
    imageUrl: '/images/tomes/bloody.png',
    unlockCondition: 'Kill 12,500 enemies'
  },
  {
    id: 'chaos',
    name: 'Chaos',
    type: 'tome',
    effect: 'Random stat boost on upgrade',
    description: 'Unpredictable power',
    imageUrl: '/images/tomes/chaos.png',
    unlockCondition: 'Charge all Charge Shrines on a Tier 3 run across all three stages without leaving the charge zone'
  },
  {
    id: 'cooldown',
    name: 'Cooldown',
    type: 'tome',
    effect: '+7.5% Attack Speed',
    description: 'Attack more frequently',
    imageUrl: '/images/tomes/cooldown.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'cursed',
    name: 'Cursed',
    type: 'tome',
    effect: '+3.5% Difficulty',
    description: 'Powerful but dangerous',
    imageUrl: '/images/tomes/cursed.png',
    unlockCondition: 'Beat any Stage Boss in under 5 minutes'
  },
  {
    id: 'damage',
    name: 'Damage',
    type: 'tome',
    effect: '+0.08x Damage',
    description: 'Hit harder',
    imageUrl: '/images/tomes/damage.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'duration',
    name: 'Duration',
    type: 'tome',
    effect: '+15% Duration',
    description: 'Effects last longer',
    imageUrl: '/images/tomes/duration.png',
    unlockCondition: 'Upgrade the Axe to level 10 in a single run'
  },
  {
    id: 'evasion',
    name: 'Evasion',
    type: 'tome',
    effect: '+10% Evasion',
    description: 'Avoid incoming damage',
    imageUrl: '/images/tomes/evasion.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'golden',
    name: 'Golden',
    type: 'tome',
    effect: '+12% Gold Gain',
    description: 'Earn more currency',
    imageUrl: '/images/tomes/golden.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'health',
    name: 'Health',
    type: 'tome',
    effect: '+25 Max HP',
    description: 'Survive longer',
    imageUrl: '/images/tomes/health.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'knockback',
    name: 'Knockback',
    type: 'tome',
    effect: '+20% Knockback',
    description: 'Keep enemies at bay',
    imageUrl: '/images/tomes/knockback.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'luck',
    name: 'Luck',
    type: 'tome',
    effect: '+7% Luck',
    description: 'Better rewards from chests and level-ups',
    imageUrl: '/images/tomes/luck.png',
    unlockCondition: '0.01% chance to drop when killing an enemy'
  },
  {
    id: 'precision',
    name: 'Precision',
    type: 'tome',
    effect: '+7% Crit Chance',
    description: 'Deal critical strikes more often',
    imageUrl: '/images/tomes/precision.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'projectile-speed',
    name: 'Projectile Speed',
    type: 'tome',
    effect: '+15% Projectile Speed',
    description: 'Projectiles travel faster',
    imageUrl: '/images/tomes/projectile-speed.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'quantity',
    name: 'Quantity',
    type: 'tome',
    effect: '+1 Projectile Count',
    description: 'Shoot more projectiles',
    imageUrl: '/images/tomes/quantity.png',
    unlockCondition: 'Fire 5,000 projectiles'
  },
  {
    id: 'regen',
    name: 'Regen',
    type: 'tome',
    effect: '+40 HP Regen per minute',
    description: 'Passive healing',
    imageUrl: '/images/tomes/regen.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'shield',
    name: 'Shield',
    type: 'tome',
    effect: '+25 Shield',
    description: 'Extra protection layer',
    imageUrl: '/images/tomes/shield.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'silver',
    name: 'Silver',
    type: 'tome',
    effect: '+12% Silver Gain',
    description: 'Earn more permanent currency',
    imageUrl: '/images/tomes/silver.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'size',
    name: 'Size',
    type: 'tome',
    effect: '+10% Size',
    description: 'Bigger projectiles and AoE',
    imageUrl: '/images/tomes/size.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'thorns',
    name: 'Thorns',
    type: 'tome',
    effect: '+15 Thorns Damage',
    description: 'Hurt enemies that attack you',
    imageUrl: '/images/tomes/thorns.png',
    unlockCondition: 'Block 250 attacks with the Aegis'
  },
  {
    id: 'xp',
    name: 'XP',
    type: 'tome',
    effect: '+7% XP Gain',
    description: 'Level up faster',
    imageUrl: '/images/tomes/xp.png',
    unlockCondition: 'Break 20 pots in a single run'
  }
];

// Helper function to get tome by ID
export function getTomeById(id: string): Tome | undefined {
  return tomes.find(tome => tome.id === id);
}
