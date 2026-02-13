import { Weapon } from '../types/game.types';

export const weapons: Weapon[] = [
  {
    id: 'aegis',
    name: 'Aegis',
    type: 'weapon',
    description: 'Blocks attacks and sends out shockwaves',
    imageUrl: '/images/weapons/aegis.png',
    unlockCondition: 'Block 500 damage with Armor as Sir Oofie',
    beneficialStats: ['damage', 'quantity', 'knockback', 'size']
  },
  {
    id: 'aura',
    name: 'Aura',
    type: 'weapon',
    description: 'Damages enemies in an area around you',
    imageUrl: '/images/weapons/aura.png',
    unlockCondition: "Don't take any damage for 2 consecutive minutes",
    beneficialStats: ['damage', 'size']
  },
  {
    id: 'axe',
    name: 'Axe',
    type: 'weapon',
    description: 'Throws spinning axes that deal area-damage',
    imageUrl: '/images/weapons/axe.png',
    unlockCondition: 'Kill 2,000 enemies using the Sword',
    beneficialStats: ['damage', 'quantity', 'duration', 'size']
  },
  {
    id: 'bananarang',
    name: 'Bananarang',
    type: 'weapon',
    description: 'Throws bananas that return to the owner',
    imageUrl: '/images/weapons/bananarang.png',
    unlockCondition: 'Find the hidden banana in any Forest tier',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'black-hole',
    name: 'Black Hole',
    type: 'weapon',
    description: 'Shoots a black hole that pulls enemies in',
    imageUrl: '/images/weapons/black-hole.png',
    unlockCondition: 'Get the Knockback Tome to Level 10',
    beneficialStats: ['damage', 'quantity', 'duration', 'size']
  },
  {
    id: 'blood-magic',
    name: 'Blood Magic',
    type: 'weapon',
    description: 'Summons blood magic. 5% chance to increase Max HP on kill',
    imageUrl: '/images/weapons/blood-magic.png',
    unlockCondition: 'Get the Bloody Tome to Level 12',
    beneficialStats: ['damage', 'quantity', 'size']
  },
  {
    id: 'bone',
    name: 'Bone',
    type: 'weapon',
    description: 'Throws bones that bounce off enemies',
    imageUrl: '/images/weapons/bone.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'precision']
  },
  {
    id: 'bow',
    name: 'Bow',
    type: 'weapon',
    description: 'Shoots arrows that pierce through enemies',
    imageUrl: '/images/weapons/bow.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'precision', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'chunkers',
    name: 'Chunkers',
    type: 'weapon',
    description: 'Summons chunky rocks that orbit around you',
    imageUrl: '/images/weapons/chunkers.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'knockback', 'size']
  },
  {
    id: 'corrupted-sword',
    name: 'Corrupted Sword',
    type: 'weapon',
    description: 'Slashes in both directions. Deals increased damage at low HP.',
    imageUrl: '/images/weapons/corrupted-sword.png',
    unlockCondition: 'Get the Cursed Tome to Level 20 in under 10 minutes',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'dexecutioner',
    name: 'Dexecutioner',
    type: 'weapon',
    description: 'A piercing blade. Small chance to instantly execute an enemy.',
    imageUrl: '/images/weapons/dexecutioner.png',
    unlockCondition: 'Kill 12,500 enemies using the Sword',
    beneficialStats: ['damage', 'precision', 'quantity', 'size']
  },
  {
    id: 'dice',
    name: 'Dice',
    type: 'weapon',
    description: "Throw dice that deal 1-6 damage. Rolling a 6 increases the weapon's Crit Chance permanently.",
    imageUrl: '/images/weapons/dice.png',
    unlockCondition: 'Get the Luck Tome to Level 12',
    beneficialStats: ['damage', 'precision', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'dragons-breath',
    name: "Dragon's Breath",
    type: 'weapon',
    description: "Fires dragon's breath in your movement direction",
    imageUrl: '/images/weapons/dragons-breath.png',
    unlockCondition: 'Kill 1,000 Wisps as Fox on the Desert map',
    beneficialStats: ['damage', 'duration', 'size']
  },
  {
    id: 'firestaff',
    name: 'Firestaff',
    type: 'weapon',
    description: 'Shoots fireballs that explode on impact',
    imageUrl: '/images/weapons/firestaff.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'flamewalker',
    name: 'Flamewalker',
    type: 'weapon',
    description: 'Leaves a trail of fire behind you',
    imageUrl: '/images/weapons/flamewalker.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'duration', 'size']
  },
  {
    id: 'frostwalker',
    name: 'Frostwalker',
    type: 'weapon',
    description: 'Freezes and damages enemies around you',
    imageUrl: '/images/weapons/frostwalker.png',
    unlockCondition: 'Freeze 1,000 enemies with the Ice Cube item',
    beneficialStats: ['damage', 'duration', 'size']
  },
  {
    id: 'hero-sword',
    name: 'Hero Sword',
    type: 'weapon',
    description: 'Slashes and fires a slashing projectile',
    imageUrl: '/images/weapons/hero-sword.png',
    unlockCondition: 'Defeat a Stage Boss without picking up items, powerups, or using shrines',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'katana',
    name: 'Katana',
    type: 'weapon',
    description: 'A sharp blade that targets the closest enemy',
    imageUrl: '/images/weapons/katana.png',
    unlockCondition: '5% drop chance from breaking a Tumbleweed on Desert Stage 1',
    beneficialStats: ['damage', 'precision', 'quantity', 'size']
  },
  {
    id: 'lightning-staff',
    name: 'Lightning Staff',
    type: 'weapon',
    description: 'Summons lightning to smite nearby enemies',
    imageUrl: '/images/weapons/lightning-staff.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'size']
  },
  {
    id: 'mines',
    name: 'Mines',
    type: 'weapon',
    description: 'Deploys mines around you that explode when enemies get close.',
    imageUrl: '/images/weapons/mines.png',
    unlockCondition: 'Kill 7,500 enemies with the Slutty Rocket',
    beneficialStats: ['damage', 'quantity', 'duration', 'size']
  },
  {
    id: 'poison-flask',
    name: 'Poison Flask',
    type: 'weapon',
    description: 'Throws toxic flasks at enemies, dealing area-damage and poisoning them.',
    imageUrl: '/images/weapons/poison-flask.png',
    unlockCondition: 'Kill Scorpionussy Miniboss in the Desert 3 times',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'duration', 'size']
  },
  {
    id: 'revolver',
    name: 'Revolver',
    type: 'weapon',
    description: 'Fires multiple bullets',
    imageUrl: '/images/weapons/revolver.png',
    unlockCondition: 'Kill 7,500 enemies',
    beneficialStats: ['damage', 'precision', 'quantity', 'projectile-speed']
  },
  {
    id: 'scythe',
    name: 'Scythe',
    type: 'weapon',
    description: 'Wide sweeping arc attacks that hit multiple enemies',
    imageUrl: '/images/weapons/scythe.png',
    unlockCondition: 'Collect 4 Crypt Keys in the Graveyard map, then defeat Big Bob in the Crypt while positioned near lanterns',
    beneficialStats: ['damage', 'cooldown', 'precision', 'size']
  },
  {
    id: 'shotgun',
    name: 'Shotgun',
    type: 'weapon',
    description: 'Fires a spread shot, stronger at close range. Can be manually aimed.',
    imageUrl: '/images/weapons/shotgun.png',
    unlockCondition: '5% drop chance from breaking a Tumbleweed on Desert stage 2',
    beneficialStats: ['damage', 'precision', 'quantity', 'size']
  },
  {
    id: 'slutty-rocket',
    name: 'Slutty Rocket',
    type: 'weapon',
    description: 'Fires missiles that automatically seek out enemies.',
    imageUrl: '/images/weapons/slutty-rocket.png',
    unlockCondition: 'Kill 15,000 enemies as CL4NK',
    beneficialStats: ['damage', 'precision', 'quantity', 'projectile-speed']
  },
  {
    id: 'sniper-rifle',
    name: 'Sniper Rifle',
    type: 'weapon',
    description: 'Fires a high-powered, piercing bullet that can be manually aimed.',
    imageUrl: '/images/weapons/sniper-rifle.png',
    unlockCondition: 'Get the Precision Tome to Level 10',
    beneficialStats: ['damage', 'quantity', 'size']
  },
  {
    id: 'space-noodle',
    name: 'Space Noodle',
    type: 'weapon',
    description: 'Attaches to a nearby enemy. Deals damage to enemies in-between',
    imageUrl: '/images/weapons/space-noodle.png',
    unlockCondition: 'Complete Desert Tier 2 as Tony McZoom',
    beneficialStats: ['damage', 'duration', 'size']
  },
  {
    id: 'sword',
    name: 'Sword',
    type: 'weapon',
    description: 'Slashes through multiple enemies',
    imageUrl: '/images/weapons/sword.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'knockback', 'size']
  },
  {
    id: 'tornado',
    name: 'Tornado',
    type: 'weapon',
    description: 'Sends out tornadoes that knock enemies back',
    imageUrl: '/images/weapons/tornado.png',
    unlockCondition: 'Charge a Charge Shrine during a Sandstorm on any Desert stage',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'knockback', 'size']
  },
  {
    id: 'wireless-dagger',
    name: 'Wireless Dagger',
    type: 'weapon',
    description: 'Throws smart daggers at your enemies. Wireless tech goes crazy these days.',
    imageUrl: '/images/weapons/wireless-dagger.png',
    unlockCondition: 'Get the Lightning Staff to Level 15',
    beneficialStats: ['damage', 'quantity', 'projectile-speed']
  }
];

// Helper function to get weapon by ID
export function getWeaponById(id: string): Weapon | undefined {
  return weapons.find(weapon => weapon.id === id);
}
