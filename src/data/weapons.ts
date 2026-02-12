import { Weapon } from '../types/game.types';

export const weapons: Weapon[] = [
  // Starter Weapons (7)
  {
    id: 'sword',
    name: 'Sword',
    type: 'weapon',
    description: 'Slashes through multiple enemies in a wide sweeping melee arc',
    imageUrl: '/images/weapons/sword.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'knockback', 'size']
  },
  {
    id: 'flamewalker',
    name: 'Flamewalker',
    type: 'weapon',
    description: 'Generates a persistent fire trail as you move, continuously damaging enemies who walk through it',
    imageUrl: '/images/weapons/flamewalker.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'duration', 'size']
  },
  {
    id: 'lightning-staff',
    name: 'Lightning Staff',
    type: 'weapon',
    description: 'Summons lightning to smite nearby enemies with instant area-of-effect damage',
    imageUrl: '/images/weapons/lightning-staff.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'size']
  },
  {
    id: 'firestaff',
    name: 'Firestaff',
    type: 'weapon',
    description: 'Launches fireballs that explode on contact, dealing damage to the initial target and nearby enemies',
    imageUrl: '/images/weapons/firestaff.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'chunkers',
    name: 'Chunkers',
    type: 'weapon',
    description: 'Summons orbiting rocky projectiles that damage and knock back enemies on contact',
    imageUrl: '/images/weapons/chunkers.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'knockback', 'size']
  },
  {
    id: 'bone',
    name: 'Bone',
    type: 'weapon',
    description: 'Fires projectiles that ricochet off enemies, allowing a single shot to hit multiple targets',
    imageUrl: '/images/weapons/bone.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'precision']
  },
  {
    id: 'bow',
    name: 'Bow',
    type: 'weapon',
    description: 'Fires piercing arrows that can strike multiple enemies simultaneously',
    imageUrl: '/images/weapons/bow.png',
    unlockCondition: 'Starter weapon',
    beneficialStats: ['damage', 'precision', 'quantity', 'projectile-speed', 'size']
  },

  // Unlockable Weapons (22)
  {
    id: 'revolver',
    name: 'Revolver',
    type: 'weapon',
    description: 'Fires multiple projectiles that bounce off enemies and obstacles, chaining across large groups for crowd control',
    imageUrl: '/images/weapons/revolver.png',
    unlockCondition: 'Kill 7,500 enemies, then purchase for 1 Silver',
    beneficialStats: ['damage', 'precision', 'quantity', 'projectile-speed']
  },
  {
    id: 'aegis',
    name: 'Aegis',
    type: 'weapon',
    description: 'Creates a protective barrier that blocks enemy attacks while releasing shockwaves for crowd control',
    imageUrl: '/images/weapons/aegis.png',
    unlockCondition: 'Block a total of 500 damage using Armor while playing as Sir Oofie',
    beneficialStats: ['damage', 'quantity', 'knockback', 'size']
  },
  {
    id: 'bananarang',
    name: 'Bananarang',
    type: 'weapon',
    description: 'Launches bananas that arc outward and return to the player, dealing damage on both the outgoing and return paths',
    imageUrl: '/images/weapons/bananarang.png',
    unlockCondition: 'Find the hidden banana in the Forest map, then purchase for 1 Silver',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'aura',
    name: 'Aura',
    type: 'weapon',
    description: 'Continuously damages all enemies within a close-range radius around the player',
    imageUrl: '/images/weapons/aura.png',
    unlockCondition: 'Survive for 2 consecutive minutes without taking any damage in a single run, then purchase for 1 Silver',
    beneficialStats: ['damage', 'size']
  },
  {
    id: 'axe',
    name: 'Axe',
    type: 'weapon',
    description: 'Throws spinning projectiles that linger on the field, creating zones of continuous damage',
    imageUrl: '/images/weapons/axe.png',
    unlockCondition: 'Kill 2,000 enemies using the Sword, then purchase for 1 Silver',
    beneficialStats: ['damage', 'quantity', 'duration', 'size']
  },
  {
    id: 'space-noodle',
    name: 'Space Noodle',
    type: 'weapon',
    description: 'Attaches a green beam to an enemy, damaging any foes that make contact with the link between the player and the target',
    imageUrl: '/images/weapons/space-noodle.png',
    unlockCondition: 'Complete Desert Tier 2 as Tony McZoom',
    beneficialStats: ['damage', 'duration', 'size']
  },
  {
    id: 'sniper-rifle',
    name: 'Sniper Rifle',
    type: 'weapon',
    description: 'Fires a high-powered, manually-aimed bullet that pierces through multiple enemies in a straight line',
    imageUrl: '/images/weapons/sniper-rifle.png',
    unlockCondition: 'Upgrade the Precision Tome to Level 10, then purchase for 2 Silver',
    beneficialStats: ['damage', 'quantity', 'size']
  },
  {
    id: 'slutty-rocket',
    name: 'Slutty Rocket',
    type: 'weapon',
    description: 'Launches homing missiles that automatically seek out and deal with threats while the player focuses on dodging',
    imageUrl: '/images/weapons/slutty-rocket.png',
    unlockCondition: 'Unlock CL4NK by defeating the Forest Tier 1 final boss, then accumulate 15,000 enemy kills as CL4NK, then purchase for 2 Silver',
    beneficialStats: ['damage', 'precision', 'quantity', 'projectile-speed']
  },
  {
    id: 'shotgun',
    name: 'Shotgun',
    type: 'weapon',
    description: 'Fires a spread of bullets in a 2-round burst cycle, with damage that decreases based on distance to the target',
    imageUrl: '/images/weapons/shotgun.png',
    unlockCondition: '5% drop chance from breaking a Tumbleweed on Desert Stage 2',
    beneficialStats: ['damage', 'precision', 'quantity', 'size']
  },
  {
    id: 'mines',
    name: 'Mines',
    type: 'weapon',
    description: 'Deploys proximity-triggered explosive mines that detonate when enemies approach, dealing area-of-effect damage with knockback',
    imageUrl: '/images/weapons/mines.png',
    unlockCondition: 'Kill 7,500 enemies with the Slutty Rocket',
    beneficialStats: ['damage', 'quantity', 'duration', 'size']
  },
  {
    id: 'wireless-dagger',
    name: 'Wireless Dagger',
    type: 'weapon',
    description: 'Automatically throws homing daggers that seek out nearby enemies, requiring no manual aiming',
    imageUrl: '/images/weapons/wireless-dagger.png',
    unlockCondition: 'Upgrade the Lightning Staff to Level 15, then purchase for 2 Silver',
    beneficialStats: ['damage', 'quantity', 'projectile-speed']
  },
  {
    id: 'frostwalker',
    name: 'Frostwalker',
    type: 'weapon',
    description: 'Creates ice pulses around the player to freeze and damage nearby enemies, making them vulnerable to follow-up attacks',
    imageUrl: '/images/weapons/frostwalker.png',
    unlockCondition: 'Freeze 1,000 enemies using the Ice Cube item, then purchase for 2 Silver',
    beneficialStats: ['damage', 'duration', 'size']
  },
  {
    id: 'tornado',
    name: 'Tornado',
    type: 'weapon',
    description: 'Launches projectiles that push enemies away, functioning primarily as a defensive crowd-control tool',
    imageUrl: '/images/weapons/tornado.png',
    unlockCondition: 'Charge 5 Charge Shrines during a Sandstorm event on any Desert stage',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'knockback', 'size']
  },
  {
    id: 'dexecutioner',
    name: 'Dexecutioner',
    type: 'weapon',
    description: 'Shoots a piercing blade that hits multiple enemies and has a 2% chance to instantly execute any non-boss enemy on impact',
    imageUrl: '/images/weapons/dexecutioner.png',
    unlockCondition: 'Kill 12,500 enemies using the Sword',
    beneficialStats: ['damage', 'precision', 'quantity', 'size']
  },
  {
    id: 'blood-magic',
    name: 'Blood Magic',
    type: 'weapon',
    description: 'Grants a 5% chance to permanently increase maximum HP by 1 when killing enemies, enabling extremely tanky builds',
    imageUrl: '/images/weapons/blood-magic.png',
    unlockCondition: 'Get the Bloody Tome to Level 12, then purchase for 2 Silver',
    beneficialStats: ['damage', 'quantity', 'size']
  },
  {
    id: 'black-hole',
    name: 'Black Hole',
    type: 'weapon',
    description: 'Fires a projectile that pulls nearby enemies toward its impact point, clustering them together for crowd control',
    imageUrl: '/images/weapons/black-hole.png',
    unlockCondition: 'Upgrade the Knockback Tome to Level 10, then purchase for 2 Silver',
    beneficialStats: ['damage', 'quantity', 'duration', 'size']
  },
  {
    id: 'poison-flask',
    name: 'Poison Flask',
    type: 'weapon',
    description: 'Throws toxic bottles that deal area damage and inflict a stackable poison status effect on enemies',
    imageUrl: '/images/weapons/poison-flask.png',
    unlockCondition: 'Kill the Scorpionussy Miniboss in the Desert 3 times',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'duration', 'size']
  },
  {
    id: 'katana',
    name: 'Katana',
    type: 'weapon',
    description: 'Automatically targets and strikes the nearest enemy, excelling at delivering concentrated single-target damage',
    imageUrl: '/images/weapons/katana.png',
    unlockCondition: '5% chance to be found after breaking a Tumbleweed on any Desert Stage 1 map, then purchase for 2 Silver',
    beneficialStats: ['damage', 'precision', 'quantity', 'size']
  },
  {
    id: 'dragons-breath',
    name: "Dragon's Breath",
    type: 'weapon',
    description: 'Exhales a cone of fire in the player\'s movement direction, dealing damage to multiple enemies simultaneously',
    imageUrl: '/images/weapons/dragons-breath.png',
    unlockCondition: 'Kill 1,000 Wisp as Fox on Desert',
    beneficialStats: ['damage', 'duration', 'size']
  },
  {
    id: 'dice',
    name: 'Dice',
    type: 'weapon',
    description: 'Fires a projectile that randomly deals 1-6 damage per hit, with each roll of 6 permanently increasing the weapon\'s critical hit chance by 0.5% for the run',
    imageUrl: '/images/weapons/dice.png',
    unlockCondition: 'Get the Luck Tome to Level 12, then purchase for 4 Silver',
    beneficialStats: ['damage', 'precision', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'hero-sword',
    name: 'Hero Sword',
    type: 'weapon',
    description: 'Combines melee and ranged combat by firing slashing projectiles whenever the player performs a close-range slash attack',
    imageUrl: '/images/weapons/hero-sword.png',
    unlockCondition: 'Defeat a Stage Boss without picking up any ground items, powerups, or using shrines',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'corrupted-sword',
    name: 'Corrupted Sword',
    type: 'weapon',
    description: 'Delivers slashes in both directions with damage that scales inversely with health, reaching triple damage at 1 HP',
    imageUrl: '/images/weapons/corrupted-sword.png',
    unlockCondition: 'Upgrade the Cursed Tome to Level 20 within 10 minutes of starting a run (requires first unlocking the Cursed Tome by defeating a stage boss in under 5 minutes)',
    beneficialStats: ['damage', 'quantity', 'projectile-speed', 'size']
  },
  {
    id: 'scythe',
    name: 'Scythe',
    type: 'weapon',
    description: 'Wide sweeping arc attacks that hit multiple enemies with excellent crowd control and solid base damage',
    imageUrl: '/images/weapons/scythe.png',
    unlockCondition: 'Collect 4 Crypt Keys in the Graveyard map, then defeat Big Bob in the Crypt while positioned near lanterns',
    beneficialStats: ['damage', 'cooldown', 'precision', 'size']
  }
];

// Helper function to get weapon by ID
export function getWeaponById(id: string): Weapon | undefined {
  return weapons.find(weapon => weapon.id === id);
}
