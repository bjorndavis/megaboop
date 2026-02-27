import { Item } from '../types/game.types';

export const items: Item[] = [
  // Default Items (35)
  {
    id: 'moldy-cheese',
    name: 'Moldy Cheese',
    type: 'item',
    effect: '+40% chance to poison enemies on hit',
    description: '+40% chance to poison enemies on hit',
    tier: 'common',
    imageUrl: '/images/items/moldy-cheese.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'borgar',
    name: 'Borgar',
    type: 'item',
    effect: '+2% chance to spawn a healing Borgar upon killing an enemy',
    description: '+2% chance to spawn a healing Borgar upon killing an enemy',
    tier: 'common',
    imageUrl: '/images/items/borgar.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'wrench',
    name: 'Wrench',
    type: 'item',
    effect: 'Charge Shrines take 4% less time to charge and give +7.5% shrine rewards',
    description: 'Charge Shrines take 4% less time to charge and give +7.5% shrine rewards',
    tier: 'common',
    imageUrl: '/images/items/wrench.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'clover',
    name: 'Clover',
    type: 'item',
    effect: '+7.5% Luck',
    description: '+7.5% Luck',
    tier: 'common',
    imageUrl: '/images/items/clover.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'time-bracelet',
    name: 'Time Bracelet',
    type: 'item',
    effect: '+8% XP Gain',
    description: '+8% XP Gain',
    tier: 'common',
    imageUrl: '/images/items/time-bracelet.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'slippery-ring',
    name: 'Slippery Ring',
    type: 'item',
    effect: '+15% Evasion',
    description: '+15% Evasion',
    tier: 'common',
    imageUrl: '/images/items/slippery-ring.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'golden-glove',
    name: 'Golden Glove',
    type: 'item',
    effect: '+15% more gold from killing enemies',
    description: '+15% more gold from killing enemies',
    tier: 'common',
    imageUrl: '/images/items/golden-glove.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'gym-sauce',
    name: 'Gym Sauce',
    type: 'item',
    effect: '+10% Damage',
    description: '+10% Damage',
    tier: 'common',
    imageUrl: '/images/items/gym-sauce.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'oats',
    name: 'Oats',
    type: 'item',
    effect: '+25 Max HP',
    description: '+25 Max HP',
    tier: 'common',
    imageUrl: '/images/items/oats.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'medkit',
    name: 'Medkit',
    type: 'item',
    effect: '+45 HP Regen (approx. 0.75 HP/sec)',
    description: '+45 HP Regen (approx. 0.75 HP/sec)',
    tier: 'common',
    imageUrl: '/images/items/medkit.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'credit-card-red',
    name: 'Credit Card (Red)',
    type: 'item',
    effect: 'Permanently gain +2.5% Damage when opening a chest',
    description: 'Permanently gain +2.5% Damage when opening a chest',
    tier: 'uncommon',
    imageUrl: '/images/items/credit-card-red.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'golden-shield',
    name: 'Golden Shield',
    type: 'item',
    effect: 'Gain gold when taking damage',
    description: 'Gain gold when taking damage',
    tier: 'uncommon',
    imageUrl: '/images/items/golden-shield.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'thunder-mitts',
    name: 'Thunder Mitts',
    type: 'item',
    effect: 'On hit, generate a lightning strike (10s cooldown)',
    description: 'On hit, generate a lightning strike (10s cooldown)',
    tier: 'uncommon',
    imageUrl: '/images/items/thunder-mitts.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'feathers',
    name: 'Feathers',
    type: 'item',
    effect: 'Lets you jump higher and further',
    description: 'Lets you jump higher and further',
    tier: 'uncommon',
    imageUrl: '/images/items/feathers.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'electric-plug',
    name: 'Electric Plug',
    type: 'item',
    effect: 'On taking damage, deal electric damage to nearby enemies',
    description: 'On taking damage, deal electric damage to nearby enemies',
    tier: 'uncommon',
    imageUrl: '/images/items/electric-plug.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'cowards-cloak',
    name: 'Cowards Cloak',
    type: 'item',
    effect: 'Boosts Move Speed for short time after taking damage; +5% base Move Speed',
    description: 'Boosts Move Speed for short time after taking damage; +5% base Move Speed',
    tier: 'uncommon',
    imageUrl: '/images/items/cowards-cloak.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'unstable-transfusion',
    name: 'Unstable Transfusion',
    type: 'item',
    effect: 'Has 27% chance to apply Bloodmark on hit',
    description: 'Has 27% chance to apply Bloodmark on hit',
    tier: 'uncommon',
    imageUrl: '/images/items/unstable-transfusion.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'beer',
    name: 'Beer',
    type: 'item',
    effect: '+20% Damage; -5% Max HP',
    description: '+20% Damage; -5% Max HP',
    tier: 'uncommon',
    imageUrl: '/images/items/beer.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'beacon',
    name: 'Beacon',
    type: 'item',
    effect: 'Charging a Charge Shrine creates a healing zone and spawns +2 extra Charge Shrines',
    description: 'Charging a Charge Shrine creates a healing zone and spawns +2 extra Charge Shrines',
    tier: 'uncommon',
    imageUrl: '/images/items/beacon.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'backpack',
    name: 'Backpack',
    type: 'item',
    effect: '+1 Projectile Count for all Weapons',
    description: '+1 Projectile Count for all Weapons',
    tier: 'uncommon',
    imageUrl: '/images/items/backpack.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'phantom-shroud',
    name: 'Phantom Shroud',
    type: 'item',
    effect: 'After evading, next hit deals 2x Damage; briefly boosts Attack Speed & Move Speed',
    description: 'After evading, next hit deals 2x Damage; briefly boosts Attack Speed & Move Speed',
    tier: 'uncommon',
    imageUrl: '/images/items/phantom-shroud.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'campfire',
    name: 'Campfire',
    type: 'item',
    effect: 'Standing still spawns a campfire that heals you',
    description: 'Standing still spawns a campfire that heals you',
    tier: 'uncommon',
    imageUrl: '/images/items/campfire.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'beefy-ring',
    name: 'Beefy Ring',
    type: 'item',
    effect: 'Increases Damage by +20% per 100 Max HP',
    description: 'Increases Damage by +20% per 100 Max HP',
    tier: 'rare',
    imageUrl: '/images/items/beefy-ring.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'credit-card-green',
    name: 'Credit Card (Green)',
    type: 'item',
    effect: 'Permanently gain +2% Luck when opening a chest',
    description: 'Permanently gain +2% Luck when opening a chest',
    tier: 'rare',
    imageUrl: '/images/items/credit-card-green.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'spiky-shield',
    name: 'Spiky Shield',
    type: 'item',
    effect: 'Gain +2 Thorns per 1% Armor. Also gain +10% Armor',
    description: 'Gain +2 Thorns per 1% Armor. Also gain +10% Armor',
    tier: 'rare',
    imageUrl: '/images/items/spiky-shield.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'scarf',
    name: 'Scarf',
    type: 'item',
    effect: 'Deal +50% Damage while airborne',
    description: 'Deal +50% Damage while airborne',
    tier: 'rare',
    imageUrl: '/images/items/scarf.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'slurp-gloves',
    name: 'Slurp Gloves',
    type: 'item',
    effect: 'Cast blood magic on hit; heals 7.5% with AoE burst (9s cooldown)',
    description: 'Cast blood magic on hit; heals 7.5% with AoE burst (9s cooldown)',
    tier: 'rare',
    imageUrl: '/images/items/slurp-gloves.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'mirror',
    name: 'Mirror',
    type: 'item',
    effect: 'Reflects all incoming damage and grants brief invulnerability',
    description: 'Reflects all incoming damage and grants brief invulnerability',
    tier: 'rare',
    imageUrl: '/images/items/mirror.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'overpowered-lamp',
    name: 'Overpowered Lamp',
    type: 'item',
    effect: 'Items with on-hit effects roll 1 additional time for triggers',
    description: 'Items with on-hit effects roll 1 additional time for triggers',
    tier: 'legendary',
    imageUrl: '/images/items/overpowered-lamp.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'za-warudo',
    name: 'Za Warudo',
    type: 'item',
    effect: 'On taking fatal damage, time frozen for 10 seconds. Item lost upon activation',
    description: 'On taking fatal damage, time frozen for 10 seconds. Item lost upon activation',
    tier: 'legendary',
    imageUrl: '/images/items/za-warudo.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'big-bonk',
    name: 'Big Bonk',
    type: 'item',
    effect: '2% chance on hit to BONK an enemy, dealing 20x damage',
    description: '2% chance on hit to BONK an enemy, dealing 20x damage',
    tier: 'legendary',
    imageUrl: '/images/items/big-bonk.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'spicy-meatball',
    name: 'Spicy Meatball',
    type: 'item',
    effect: '25% chance for attacks to explode, dealing 65% AoE Damage',
    description: '25% chance for attacks to explode, dealing 65% AoE Damage',
    tier: 'legendary',
    imageUrl: '/images/items/spicy-meatball.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'ice-cube',
    name: 'Ice Cube',
    type: 'item',
    effect: '20% chance to inflict Ice Damage when hitting enemies; can now freeze',
    description: '20% chance to inflict Ice Damage when hitting enemies; can now freeze',
    tier: 'legendary',
    imageUrl: '/images/items/ice-cube.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'giant-fork',
    name: 'Giant Fork',
    type: 'item',
    effect: '+15% Crit Chance and +14% chance to convert Crit into Megacrit',
    description: '+15% Crit Chance and +14% chance to convert Crit into Megacrit',
    tier: 'legendary',
    imageUrl: '/images/items/giant-fork.png',
    unlockCondition: 'Available from start'
  },
  {
    id: 'power-gloves',
    name: 'Power Gloves',
    type: 'item',
    effect: '8% chance to create a giant blast on hit',
    description: '8% chance to create a giant blast on hit',
    tier: 'legendary',
    imageUrl: '/images/items/power-gloves.png',
    unlockCondition: 'Available from start'
  },

  // Unlockable Items
  {
    id: 'turbo-socks',
    name: 'Turbo Socks',
    type: 'item',
    effect: '+15% Movement Speed',
    description: '+15% Movement Speed',
    tier: 'common',
    imageUrl: '/images/items/turbo-socks.png',
    unlockCondition: 'Upgrade Agility Tome to Level 5'
  },
  {
    id: 'tactical-glasses',
    name: 'Tactical Glasses',
    type: 'item',
    effect: '+20% more damage to enemies above 90% HP',
    description: '+20% more damage to enemies above 90% HP',
    tier: 'common',
    imageUrl: '/images/items/tactical-glasses.png',
    unlockCondition: 'Defeat Miniboss in under 25 seconds'
  },
  {
    id: 'battery',
    name: 'Battery',
    type: 'item',
    effect: '+8% Attack Speed',
    description: '+8% Attack Speed',
    tier: 'common',
    imageUrl: '/images/items/battery.png',
    unlockCondition: 'Upgrade Cooldown Tome to Level 5'
  },
  {
    id: 'forbidden-juice',
    name: 'Forbidden Juice',
    type: 'item',
    effect: '+10% Crit Chance',
    description: '+10% Crit Chance',
    tier: 'common',
    imageUrl: '/images/items/forbidden-juice.png',
    unlockCondition: 'Crit 100 times in single run'
  },
  {
    id: 'cursed-doll',
    name: 'Cursed Doll',
    type: 'item',
    effect: 'Curse up to 5 enemies per stack, dealing 30% of Max HP as damage/sec',
    description: 'Curse up to 5 enemies per stack, dealing 30% of Max HP as damage/sec',
    tier: 'common',
    imageUrl: '/images/items/cursed-doll.png',
    unlockCondition: 'Die 10 times'
  },
  {
    id: 'boss-buster',
    name: 'Boss Buster',
    type: 'item',
    effect: 'Deal +15% more damage to Elites and Bosses',
    description: 'Deal +15% more damage to Elites and Bosses',
    tier: 'common',
    imageUrl: '/images/items/boss-buster.png',
    unlockCondition: 'Defeat Stage Boss in under 30 seconds'
  },
  {
    id: 'key',
    name: 'Key',
    type: 'item',
    effect: '+10% chance to open a chest for free',
    description: '+10% chance to open a chest for free',
    tier: 'common',
    imageUrl: '/images/items/key.png',
    unlockCondition: 'Purchase items from 25 chests'
  },
  {
    id: 'ice-crystal',
    name: 'Ice Crystal',
    type: 'item',
    effect: '7.5% chance to freeze enemies upon hitting them',
    description: '7.5% chance to freeze enemies upon hitting them',
    tier: 'common',
    imageUrl: '/images/items/ice-crystal.png',
    unlockCondition: 'Get 50 kills with Frostwalker weapon'
  },
  {
    id: 'old-mask',
    name: 'Old Mask',
    type: 'item',
    effect: 'Effect not listed on wiki',
    description: 'Effect not listed on wiki',
    tier: 'common',
    imageUrl: '/images/items/old-mask.png',
    unlockCondition: 'Find on Graveyard'
  },
  {
    id: 'skuleg',
    name: 'Skuleg',
    type: 'item',
    effect: '+7% Difficulty',
    description: '+7% Difficulty',
    tier: 'common',
    imageUrl: '/images/items/skuleg.png',
    unlockCondition: 'Obtain 40% Difficulty in single run'
  },
  {
    id: 'ghost',
    name: 'Ghost',
    type: 'item',
    effect: 'Summons homing ghosts that attack enemies when breaking pots, opening chests, or using shrines',
    description: 'Summons homing ghosts that attack enemies when breaking pots, opening chests, or using shrines',
    tier: 'common',
    imageUrl: '/images/items/ghost.png',
    unlockCondition: 'Survive Final Swarm for 60 seconds'
  },
  {
    id: 'cactus',
    name: 'Cactus',
    type: 'item',
    effect: 'Shoots spikes when taking damage, scales with Thorns',
    description: 'Shoots spikes when taking damage, scales with Thorns',
    tier: 'common',
    imageUrl: '/images/items/cactus.png',
    unlockCondition: 'Kill 100 cactus enemies with Thorns damage'
  },
  {
    id: 'brass-knuckles',
    name: 'Brass Knuckles',
    type: 'item',
    effect: 'Deal +25% more damage to nearby enemies',
    description: 'Deal +25% more damage to nearby enemies',
    tier: 'uncommon',
    imageUrl: '/images/items/brass-knuckles.png',
    unlockCondition: 'Kill 5,000 enemies with Sword'
  },
  {
    id: 'demonic-blade',
    name: 'Demonic Blade',
    type: 'item',
    effect: 'Crits have +25% chance to heal 1 HP',
    description: 'Crits have +25% chance to heal 1 HP',
    tier: 'uncommon',
    imageUrl: '/images/items/demonic-blade.png',
    unlockCondition: 'Heal for 350 HP using Lifesteal'
  },
  {
    id: 'demonic-blood',
    name: 'Demonic Blood',
    type: 'item',
    effect: '+0.5 Max HP per kill (up to 100)',
    description: '+0.5 Max HP per kill (up to 100)',
    tier: 'uncommon',
    imageUrl: '/images/items/demonic-blood.png',
    unlockCondition: 'Increase Max HP with Blood Magic 400 times'
  },
  {
    id: 'echo-shard',
    name: 'Echo Shard',
    type: 'item',
    effect: '+12% chance to spawn a bonus XP Shard on kill',
    description: '+12% chance to spawn a bonus XP Shard on kill',
    tier: 'uncommon',
    imageUrl: '/images/items/echo-shard.png',
    unlockCondition: 'Upgrade XP Tome to Level 8'
  },
  {
    id: 'moldy-gloves',
    name: 'Moldy Gloves',
    type: 'item',
    effect: 'Create a moldy poison cloud upon hitting an enemy',
    description: 'Create a moldy poison cloud upon hitting an enemy',
    tier: 'uncommon',
    imageUrl: '/images/items/moldy-gloves.png',
    unlockCondition: 'Use Microwave to duplicate Moldy Cheese 3 times in a row'
  },
  {
    id: 'golden-sneakers',
    name: 'Golden Sneakers',
    type: 'item',
    effect: 'Earn money by moving',
    description: 'Earn money by moving',
    tier: 'uncommon',
    imageUrl: '/images/items/golden-sneakers.png',
    unlockCondition: 'Break 150 pots'
  },
  {
    id: 'idle-juice',
    name: 'Idle Juice',
    type: 'item',
    effect: 'Damage ramps up to +100% while standing still',
    description: 'Damage ramps up to +100% while standing still',
    tier: 'uncommon',
    imageUrl: '/images/items/idle-juice.png',
    unlockCondition: 'Kill 500 enemies while standing still'
  },
  {
    id: 'leeching-crystal',
    name: 'Leeching Crystal',
    type: 'item',
    effect: '+50% Max HP at cost of -50% HP Regen',
    description: '+50% Max HP at cost of -50% HP Regen',
    tier: 'uncommon',
    imageUrl: '/images/items/leeching-crystal.png',
    unlockCondition: 'Upgrade Regen Tome to Level 8'
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    type: 'item',
    effect: 'Effect not listed on wiki',
    description: 'Effect not listed on wiki',
    tier: 'uncommon',
    imageUrl: '/images/items/pumpkin.png',
    unlockCondition: 'As Roberto, break every pumpkin on Graveyard'
  },
  {
    id: 'kevin',
    name: 'Kevin',
    type: 'item',
    effect: '25% chance to punch you on hit (cannot kill). Triggers item effects when taking damage',
    description: '25% chance to punch you on hit (cannot kill). Triggers item effects when taking damage',
    tier: 'rare',
    imageUrl: '/images/items/kevin.png',
    unlockCondition: 'Obtain 3 Leeching Crystal items in one run'
  },
  {
    id: 'turbo-skates',
    name: 'Turbo Skates',
    type: 'item',
    effect: 'Gain up to +40% Attack Speed (per stack) based off speed moving at',
    description: 'Gain up to +40% Attack Speed (per stack) based off speed moving at',
    tier: 'rare',
    imageUrl: '/images/items/turbo-skates.png',
    unlockCondition: 'Upgrade both Cooldown and Agility Tomes to Level 5'
  },
  {
    id: 'slutty-cannon',
    name: 'Slutty Cannon',
    type: 'item',
    effect: '20% chance to spawn missiles on hit',
    description: '20% chance to spawn missiles on hit',
    tier: 'rare',
    imageUrl: '/images/items/slutty-cannon.png',
    unlockCondition: 'Kill 5,000 enemies with Slutty Rocket'
  },
  {
    id: 'shattered-knowledge',
    name: 'Shattered Knowledge',
    type: 'item',
    effect: 'XP Shards slice through enemies on travel',
    description: 'XP Shards slice through enemies on travel',
    tier: 'rare',
    imageUrl: '/images/items/shattered-knowledge.png',
    unlockCondition: 'Upgrade Attraction Tome to Level 8'
  },
  {
    id: 'quins-mask',
    name: 'Quins Mask',
    type: 'item',
    effect: 'Thorns damage has 50% chance to explode',
    description: 'Thorns damage has 50% chance to explode',
    tier: 'rare',
    imageUrl: '/images/items/quins-mask.png',
    unlockCondition: 'As Athena, land killing blow on Stage Boss with Aegis'
  },
  {
    id: 'toxic-barrel',
    name: 'Toxic Barrel',
    type: 'item',
    effect: 'Releases a toxic cloud when hit',
    description: 'Releases a toxic cloud when hit',
    tier: 'rare',
    imageUrl: '/images/items/toxic-barrel.png',
    unlockCondition: 'Kill 2,000 enemies using Poison damage'
  },
  {
    id: 'gas-mask',
    name: 'Gas Mask',
    type: 'item',
    effect: 'Gain Armor and Overheal for each poisoned enemy',
    description: 'Gain Armor and Overheal for each poisoned enemy',
    tier: 'rare',
    imageUrl: '/images/items/gas-mask.png',
    unlockCondition: 'Kill 5,000 enemies using Amog'
  },
  {
    id: 'gamer-goggles',
    name: 'Gamer Goggles',
    type: 'item',
    effect: 'Increased damage the lower your HP is',
    description: 'Increased damage the lower your HP is',
    tier: 'rare',
    imageUrl: '/images/items/gamer-goggles.png',
    unlockCondition: 'Defeat Stage Boss with less than 10% HP'
  },
  {
    id: 'eagle-claw',
    name: 'Eagle Claw',
    type: 'item',
    effect: '66% Damage vs airborne enemies; 8% chance to launch enemies into air',
    description: '66% Damage vs airborne enemies; 8% chance to launch enemies into air',
    tier: 'rare',
    imageUrl: '/images/items/eagle-claw.png',
    unlockCondition: 'Kill 10,000 enemies as Birdo'
  },
  {
    id: 'demonic-soul',
    name: 'Demonic Soul',
    type: 'item',
    effect: '+0.1% Damage per kill (up to 100%)',
    description: '+0.1% Damage per kill (up to 100%)',
    tier: 'rare',
    imageUrl: '/images/items/demonic-soul.png',
    unlockCondition: 'Reach Level 30 as Calcium'
  },
  {
    id: 'bob-dead',
    name: 'Bob (Dead)',
    type: 'item',
    effect: 'For every 14 units moved, summon Bob (dead)',
    description: 'For every 14 units moved, summon Bob (dead)',
    tier: 'rare',
    imageUrl: '/images/items/bob-dead.png',
    unlockCondition: 'Survive Final Swarm for 2 minutes'
  },
  {
    id: 'grandmas-secret-tonic',
    name: 'Grandmas Secret Tonic',
    type: 'item',
    effect: 'Crits have 50% chance to explode, dealing 50% damage to nearby enemies',
    description: 'Crits have 50% chance to explode, dealing 50% damage to nearby enemies',
    tier: 'rare',
    imageUrl: '/images/items/grandmas-secret-tonic.png',
    unlockCondition: 'Kill 3,000 enemies with Sniper Rifle'
  },
  {
    id: 'cursed-grabbies',
    name: 'Cursed Grabbies',
    type: 'item',
    effect: '+10% Difficulty, 0.8x Max HP, 5% on-hit chance to cast curse',
    description: '+10% Difficulty, 0.8x Max HP, 5% on-hit chance to cast curse',
    tier: 'rare',
    imageUrl: '/images/items/cursed-grabbies.png',
    unlockCondition: 'Get Cursed Tome to Level 10'
  },
  {
    id: 'bobs-light',
    name: "Bob's Light",
    type: 'item',
    effect: 'Effect not listed on wiki',
    description: 'Effect not listed on wiki',
    tier: 'rare',
    imageUrl: '/images/items/bobs-light.png',
    unlockCondition: 'Kill Big Bob on Graveyard using lamp damage as killing blow'
  },
  {
    id: 'lightning-orb',
    name: 'Lightning Orb',
    type: 'item',
    effect: '25% chance on hit to summon Lightning; can now stun enemies',
    description: '25% chance on hit to summon Lightning; can now stun enemies',
    tier: 'legendary',
    imageUrl: '/images/items/lightning-orb.png',
    unlockCondition: 'Kill 3,000 enemies with lightning damage'
  },
  {
    id: 'chonkplate',
    name: 'Chonkplate',
    type: 'item',
    effect: 'Grants +20% Lifesteal and allows overheal up to 75% of Max HP',
    description: 'Grants +20% Lifesteal and allows overheal up to 75% of Max HP',
    tier: 'legendary',
    imageUrl: '/images/items/chonkplate.png',
    unlockCondition: 'Reach 500 Max HP'
  },
  {
    id: 'dragonfire',
    name: 'Dragonfire',
    type: 'item',
    effect: '15% chance on hit to summon dragonfire that burns enemies',
    description: '15% chance on hit to summon dragonfire that burns enemies',
    tier: 'legendary',
    imageUrl: '/images/items/dragonfire.png',
    unlockCondition: 'Kill 4,000 enemies with fire damage'
  },
  {
    id: 'sucky-magnet',
    name: 'Sucky Magnet',
    type: 'item',
    effect: 'Periodically pulls in all XP Shards',
    description: 'Periodically pulls in all XP Shards',
    tier: 'legendary',
    imageUrl: '/images/items/sucky-magnet.png',
    unlockCondition: 'Complete every Charge Shrine on a map'
  },
  {
    id: 'holy-book',
    name: 'Holy Book',
    type: 'item',
    effect: '+100 Max HP, +50 HP Regen; healing radiates damaging energy',
    description: '+100 Max HP, +50 HP Regen; healing radiates damaging energy',
    tier: 'legendary',
    imageUrl: '/images/items/holy-book.png',
    unlockCondition: 'Kill first Stage Boss without taking damage'
  },
  {
    id: 'speed-boi',
    name: 'Speed Boi',
    type: 'item',
    effect: 'On less than 50% HP, can slow time and deal 2x Damage',
    description: 'On less than 50% HP, can slow time and deal 2x Damage',
    tier: 'legendary',
    imageUrl: '/images/items/speed-boi.png',
    unlockCondition: 'Complete stage with at least 2 Boss Curses'
  },
  {
    id: 'energy-core',
    name: 'Energy Core',
    type: 'item',
    effect: 'Shoot energy orbs at enemies',
    description: 'Shoot energy orbs at enemies',
    tier: 'legendary',
    imageUrl: '/images/items/energy-core.png',
    unlockCondition: 'Defeat Final Boss 2 times'
  },
  {
    id: 'anvil',
    name: 'Anvil',
    type: 'item',
    effect: 'Weapon upgrades now have +1 more stat bonus than normal',
    description: 'Weapon upgrades now have +1 more stat bonus than normal',
    tier: 'legendary',
    imageUrl: '/images/items/anvil.png',
    unlockCondition: 'Complete 3 Challenges'
  },
  {
    id: 'soul-harvester',
    name: 'Soul Harvester',
    type: 'item',
    effect: 'Killing an enemy summons two homing souls',
    description: 'Killing an enemy summons two homing souls',
    tier: 'legendary',
    imageUrl: '/images/items/soul-harvester.png',
    unlockCondition: 'Survive Final Swarm for 6 minutes'
  },
  {
    id: 'joes-dagger',
    name: "Joe's Dagger",
    type: 'item',
    effect: "1% chance to Execute. Each Execute adds +1% Damage",
    description: "1% chance to Execute. Each Execute adds +1% Damage",
    tier: 'legendary',
    imageUrl: '/images/items/joes-dagger.png',
    unlockCondition: 'Kill 10,000 enemies using Dexecutioner'
  },
  {
    id: 'bloody-cleaver',
    name: 'Bloody Cleaver',
    type: 'item',
    effect: 'Lifesteal activates Bloodmark stacks. Also adds 50% chance to apply Bloodmark',
    description: 'Lifesteal activates Bloodmark stacks. Also adds 50% chance to apply Bloodmark',
    tier: 'legendary',
    imageUrl: '/images/items/bloody-cleaver.png',
    unlockCondition: 'Reach Level 50 as Vlad'
  },
  {
    id: 'snek',
    name: 'Snek',
    type: 'item',
    effect: 'Apply +4 stacks of poison and 5% chance to instantly burst all poison damage',
    description: 'Apply +4 stacks of poison and 5% chance to instantly burst all poison damage',
    tier: 'legendary',
    imageUrl: '/images/items/snek.png',
    unlockCondition: 'Unknown'
  },
  {
    id: 'pot-stainless-steel',
    name: 'Pot (Stainless Steel)',
    type: 'item',
    effect: '+10 max levels for all weapons. Gives one less max level per stack',
    description: '+10 max levels for all weapons. Gives one less max level per stack',
    tier: 'legendary',
    imageUrl: '/images/items/pot-stainless-steel.png',
    unlockCondition: 'Collect every pot and chest in first crypt in Graveyard'
  },
  {
    id: 'wizards-hat',
    name: "Wizard's Hat",
    type: 'item',
    effect: 'Functions as a pot but for Tomes',
    description: 'Functions as a pot but for Tomes',
    tier: 'legendary',
    imageUrl: '/images/items/wizards-hat.png',
    unlockCondition: 'As Vlad, use Pot (Stainless Steel) to upgrade weapon above max level'
  },
  {
    id: 'golden-ring',
    name: 'Golden Ring',
    type: 'item',
    effect: "It doesn't seem to do anything...",
    description: "It doesn't seem to do anything...",
    tier: 'legendary',
    imageUrl: '/images/items/golden-ring.png',
    unlockCondition: 'Extremely low chance to receive from any chest'
  }
];

export function getItemById(id: string): Item | undefined {
  return items.find(item => item.id === id);
}
