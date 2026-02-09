import { Weapon } from '../types/game.types';

export const weapons: Weapon[] = [
  // Starter Weapons (7)
  {
    id: 'sword',
    name: 'Sword',
    type: 'weapon',
    description: 'A basic melee weapon that swings in an arc',
    imageUrl: '/images/weapons/sword.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'flamewalker',
    name: 'Flamewalker',
    type: 'weapon',
    description: 'Creates a trail of fire behind you',
    imageUrl: '/images/weapons/flamewalker.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'lightning-staff',
    name: 'Lightning Staff',
    type: 'weapon',
    description: 'Shoots lightning bolts at enemies',
    imageUrl: '/images/weapons/lightning-staff.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'firestaff',
    name: 'Firestaff',
    type: 'weapon',
    description: 'Launches fireballs in multiple directions',
    imageUrl: '/images/weapons/firestaff.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'chunkers',
    name: 'Chunkers',
    type: 'weapon',
    description: 'Throws large chunks at enemies',
    imageUrl: '/images/weapons/chunkers.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'bone',
    name: 'Bone',
    type: 'weapon',
    description: 'Throws bones that bounce between enemies',
    imageUrl: '/images/weapons/bone.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'bow',
    name: 'Bow',
    type: 'weapon',
    description: 'Shoots arrows at enemies',
    imageUrl: '/images/weapons/bow.png',
    unlockCondition: 'Available from start'
  },

  // Unlockable Weapons (22)
  {
    id: 'revolver',
    name: 'Revolver',
    type: 'weapon',
    description: 'Rapid-fire gun that shoots bullets',
    imageUrl: '/images/weapons/revolver.png',
    unlockCondition: 'Unlock CL4NK'
  },
  {
    id: 'aegis',
    name: 'Aegis',
    type: 'weapon',
    description: 'A shield that protects and reflects projectiles',
    imageUrl: '/images/weapons/aegis.png',
    unlockCondition: 'Unlock Athena'
  },
  {
    id: 'bananarang',
    name: 'Bananarang',
    type: 'weapon',
    description: 'Throws boomerang bananas',
    imageUrl: '/images/weapons/bananarang.png',
    unlockCondition: 'Unlock Monke'
  },
  {
    id: 'aura',
    name: 'Aura',
    type: 'weapon',
    description: 'Creates a damaging aura around you',
    imageUrl: '/images/weapons/aura.png',
    unlockCondition: 'Unlock Megachad'
  },
  {
    id: 'axe',
    name: 'Axe',
    type: 'weapon',
    description: 'Powerful melee weapon with wide swings',
    imageUrl: '/images/weapons/axe.png',
    unlockCondition: 'Unlock Ogre'
  },
  {
    id: 'space-noodle',
    name: 'Space Noodle',
    type: 'weapon',
    description: 'Whips enemies with noodle physics',
    imageUrl: '/images/weapons/space-noodle.png',
    unlockCondition: 'Beat wave 15'
  },
  {
    id: 'sniper-rifle',
    name: 'Sniper Rifle',
    type: 'weapon',
    description: 'Long-range precision weapon',
    imageUrl: '/images/weapons/sniper-rifle.png',
    unlockCondition: 'Unlock Bush'
  },
  {
    id: 'slutty-rocket',
    name: 'Slutty Rocket',
    type: 'weapon',
    description: 'Fires homing rockets',
    imageUrl: '/images/weapons/slutty-rocket.png',
    unlockCondition: 'Beat wave 20'
  },
  {
    id: 'shotgun',
    name: 'Shotgun',
    type: 'weapon',
    description: 'Close-range spread weapon',
    imageUrl: '/images/weapons/shotgun.png',
    unlockCondition: 'Beat wave 10'
  },
  {
    id: 'mines',
    name: 'Mines',
    type: 'weapon',
    description: 'Places explosive mines',
    imageUrl: '/images/weapons/mines.png',
    unlockCondition: 'Beat wave 12'
  },
  {
    id: 'wireless-dagger',
    name: 'Wireless Dagger',
    type: 'weapon',
    description: 'Throws daggers that orbit around you',
    imageUrl: '/images/weapons/wireless-dagger.png',
    unlockCondition: 'Unlock Tony McZoom'
  },
  {
    id: 'frostwalker',
    name: 'Frostwalker',
    type: 'weapon',
    description: 'Creates a trail of ice that slows enemies',
    imageUrl: '/images/weapons/frostwalker.png',
    unlockCondition: 'Unlock Noelle'
  },
  {
    id: 'tornado',
    name: 'Tornado',
    type: 'weapon',
    description: 'Summons tornados that move around',
    imageUrl: '/images/weapons/tornado.png',
    unlockCondition: 'Unlock Birdo'
  },
  {
    id: 'dexecutioner',
    name: 'Dexecutioner',
    type: 'weapon',
    description: 'Dual-wielding axes',
    imageUrl: '/images/weapons/dexecutioner.png',
    unlockCondition: 'Unlock Bandit'
  },
  {
    id: 'blood-magic',
    name: 'Blood Magic',
    type: 'weapon',
    description: 'Uses health to deal massive damage',
    imageUrl: '/images/weapons/blood-magic.png',
    unlockCondition: 'Unlock Vlad'
  },
  {
    id: 'black-hole',
    name: 'Black Hole',
    type: 'weapon',
    description: 'Creates black holes that pull enemies in',
    imageUrl: '/images/weapons/black-hole.png',
    unlockCondition: 'Unlock Spaceman'
  },
  {
    id: 'poison-flask',
    name: 'Poison Flask',
    type: 'weapon',
    description: 'Throws flasks that create poison clouds',
    imageUrl: '/images/weapons/poison-flask.png',
    unlockCondition: 'Unlock Amog'
  },
  {
    id: 'katana',
    name: 'Katana',
    type: 'weapon',
    description: 'Fast slashing melee weapon',
    imageUrl: '/images/weapons/katana.png',
    unlockCondition: 'Unlock Ninja'
  },
  {
    id: 'dragons-breath',
    name: "Dragon's Breath",
    type: 'weapon',
    description: 'Breathes fire in a cone',
    imageUrl: '/images/weapons/dragons-breath.png',
    unlockCondition: 'Beat wave 25'
  },
  {
    id: 'dice',
    name: 'Dice',
    type: 'weapon',
    description: 'Random effects with each roll',
    imageUrl: '/images/weapons/dice.png',
    unlockCondition: 'Unlock Dicehead'
  },
  {
    id: 'hero-sword',
    name: 'Hero Sword',
    type: 'weapon',
    description: 'Legendary sword with special abilities',
    imageUrl: '/images/weapons/hero-sword.png',
    unlockCondition: 'Beat game on Hard'
  },
  {
    id: 'corrupted-sword',
    name: 'Corrupted Sword',
    type: 'weapon',
    description: 'Dark sword with corrupting power',
    imageUrl: '/images/weapons/corrupted-sword.png',
    unlockCondition: 'Unlock Sir Chadwell'
  },
  {
    id: 'scythe',
    name: 'Scythe',
    type: 'weapon',
    description: 'Wide-sweeping melee weapon',
    imageUrl: '#000000',
    unlockCondition: 'Unlock Roberto'
  }
];

// Helper function to get weapon by ID
export function getWeaponById(id: string): Weapon | undefined {
  return weapons.find(weapon => weapon.id === id);
}
