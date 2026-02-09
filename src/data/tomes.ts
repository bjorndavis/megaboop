import { Tome } from '../types/game.types';

export const tomes: Tome[] = [
  // Default Tomes (13)
  {
    id: 'agility',
    name: 'Agility',
    type: 'tome',
    effect: 'Increases movement speed',
    description: 'Move faster across the battlefield',
    imageUrl: '/images/tomes/agility.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'cooldown',
    name: 'Cooldown',
    type: 'tome',
    effect: 'Reduces weapon cooldown',
    description: 'Attack more frequently',
    imageUrl: '/images/tomes/cooldown.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'damage',
    name: 'Damage',
    type: 'tome',
    effect: 'Increases damage dealt',
    description: 'Hit harder',
    imageUrl: '/images/tomes/damage.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'evasion',
    name: 'Evasion',
    type: 'tome',
    effect: 'Chance to dodge attacks',
    description: 'Avoid incoming damage',
    imageUrl: '/images/tomes/evasion.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'golden',
    name: 'Golden',
    type: 'tome',
    effect: 'Increases gold gained',
    description: 'Earn more currency',
    imageUrl: '/images/tomes/golden.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'health',
    name: 'Health',
    type: 'tome',
    effect: 'Increases maximum health',
    description: 'Survive longer',
    imageUrl: '/images/tomes/health.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'knockback',
    name: 'Knockback',
    type: 'tome',
    effect: 'Pushes enemies away on hit',
    description: 'Keep enemies at bay',
    imageUrl: '/images/tomes/knockback.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'precision',
    name: 'Precision',
    type: 'tome',
    effect: 'Increases critical hit chance',
    description: 'Deal critical strikes',
    imageUrl: '/images/tomes/precision.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'projectile-speed',
    name: 'Projectile Speed',
    type: 'tome',
    effect: 'Increases projectile velocity',
    description: 'Projectiles travel faster',
    imageUrl: '/images/tomes/projectile-speed.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'regen',
    name: 'Regen',
    type: 'tome',
    effect: 'Regenerate health over time',
    description: 'Passive healing',
    imageUrl: '/images/tomes/regen.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'shield',
    name: 'Shield',
    type: 'tome',
    effect: 'Gain temporary shield',
    description: 'Extra protection layer',
    imageUrl: '/images/tomes/shield.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'silver',
    name: 'Silver',
    type: 'tome',
    effect: 'Increases experience gained',
    description: 'Level up faster',
    imageUrl: '/images/tomes/silver.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'size',
    name: 'Size',
    type: 'tome',
    effect: 'Increases projectile and AoE size',
    description: 'Bigger attacks',
    imageUrl: '/images/tomes/size.png',
    unlockCondition: 'Available from start'
  },

  // Unlockable Tomes (10)
  {
    id: 'armor',
    name: 'Armor',
    type: 'tome',
    effect: 'Reduces damage taken',
    description: 'Increase defense',
    imageUrl: '/images/tomes/armor.png',
    unlockCondition: 'Beat wave 5'
  },
  {
    id: 'attraction',
    name: 'Attraction',
    type: 'tome',
    effect: 'Pulls items and enemies closer',
    description: 'Magnetize pickups',
    imageUrl: '/images/tomes/attraction.png',
    unlockCondition: 'Beat wave 8'
  },
  {
    id: 'bloody',
    name: 'Bloody',
    type: 'tome',
    effect: 'Lifesteal on hit',
    description: 'Heal by dealing damage',
    imageUrl: '/images/tomes/bloody.png',
    unlockCondition: 'Beat wave 10'
  },
  {
    id: 'chaos',
    name: 'Chaos',
    type: 'tome',
    effect: 'Random stat increases',
    description: 'Unpredictable power',
    imageUrl: '/images/tomes/chaos.png',
    unlockCondition: 'Beat wave 15'
  },
  {
    id: 'cursed',
    name: 'Cursed',
    type: 'tome',
    effect: 'High risk, high reward',
    description: 'Powerful but dangerous',
    imageUrl: '/images/tomes/cursed.png',
    unlockCondition: 'Beat wave 18'
  },
  {
    id: 'duration',
    name: 'Duration',
    type: 'tome',
    effect: 'Extends effect duration',
    description: 'Effects last longer',
    imageUrl: '/images/tomes/duration.png',
    unlockCondition: 'Beat wave 12'
  },
  {
    id: 'luck',
    name: 'Luck',
    type: 'tome',
    effect: 'Increases all random chances',
    description: 'Better RNG',
    imageUrl: '/images/tomes/luck.png',
    unlockCondition: 'Beat wave 20'
  },
  {
    id: 'quantity',
    name: 'Quantity',
    type: 'tome',
    effect: 'Increases projectile count',
    description: 'Shoot more projectiles',
    imageUrl: '/images/tomes/quantity.png',
    unlockCondition: 'Beat wave 7'
  },
  {
    id: 'thorns',
    name: 'Thorns',
    type: 'tome',
    effect: 'Reflects damage back',
    description: 'Hurt attackers',
    imageUrl: '/images/tomes/thorns.png',
    unlockCondition: 'Beat wave 14'
  },
  {
    id: 'xp',
    name: 'XP',
    type: 'tome',
    effect: 'Bonus experience gain',
    description: 'Level up even faster',
    imageUrl: '/images/tomes/xp.png',
    unlockCondition: 'Beat wave 6'
  }
];

// Helper function to get tome by ID
export function getTomeById(id: string): Tome | undefined {
  return tomes.find(tome => tome.id === id);
}
