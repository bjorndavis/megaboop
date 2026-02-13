# Mega Bonk Build Preview

A fun experiment with claude + my kiddo!

An interactive web tool for previewing and experimenting with character builds in the video game "Mega Bonk".

## Features

- **21 Characters** - Each with unique starting weapons and passives
- **29 Weapons** - Including 7 starter weapons and 22 unlockables
- **23 Tomes** - Including 13 default tomes and 10 unlockables
- **Build Constraints** - Max 4 weapons (including starting weapon), max 4 tomes
- **Build Names & Descriptions** - Name your build and describe your strategy, shareable via URL
- **Synergy Highlights** - Weapons and tomes that work well together glow amber; intensity scales with the number of matching tomes (1–4)
- **Stat Filter Bar** - Filter weapons by tome synergy to quickly find what you need
- **Item Detail View** - Added weapons and tomes show their full descriptions, effects, and stat chips in the build preview
- **Real-time Validation** - Prevents invalid builds and duplicate items
- **Shareable Builds** - Copy a URL that encodes your full build including name and description

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## How to Use

1. **Select a Character** - Click on a character card to select them. This will automatically add their starting weapon to the build.

2. **Add Weapons** - Click on weapon cards to add them to your build (up to 4 total, including the starting weapon). Use the stat filter buttons above the grid to filter by tome synergy.

3. **Add Tomes** - Click on tome cards to add them to your build (up to 4 total). Tomes that synergise with your current weapons glow amber.

4. **See Synergies** - As you add items, the build preview shows amber glows on weapons that benefit from your tomes. Green stat chips indicate which tomes are actively boosting each weapon.

5. **Name Your Build** - Enter a name and optional description in the preview panel.

6. **Share** - Click "Share Build" to copy a shareable URL with your full build encoded.

7. **Remove Items** - Click the × button on any item row to remove it. The starting weapon cannot be removed.

## Project Structure

```
src/
├── types/
│   └── game.types.ts          # TypeScript interfaces
├── data/
│   ├── characters.ts          # All character data
│   ├── weapons.ts             # All weapon data
│   └── tomes.ts               # All tome data
├── hooks/
│   └── useBuildState.ts       # Build state management
├── utils/
│   ├── validation.ts          # Build validation logic
│   ├── urlSharing.ts          # URL encode/decode for build sharing
│   └── placeholder.ts         # Placeholder color generation
├── context/
│   └── BuildContext.tsx       # React context provider
├── components/
│   ├── shared/
│   │   ├── ItemCard.tsx       # Reusable item card (with synergy glow)
│   │   └── ItemSlot.tsx       # Build slot display
│   ├── selectors/
│   │   ├── CharacterSelector.tsx
│   │   ├── WeaponSelector.tsx  # Includes stat filter bar
│   │   └── TomeSelector.tsx
│   ├── preview/
│   │   ├── CharacterDisplay.tsx
│   │   ├── WeaponSlots.tsx    # Detail list with synergy glow + stat chips
│   │   └── TomeSlots.tsx      # Detail list with effect descriptions
│   └── layouts/
│       ├── GridLayout.tsx
│       ├── SideBySideLayout.tsx
│       └── LayoutToggle.tsx
├── App.tsx                    # Main app component
└── main.tsx                   # Entry point
```

## Game Data

### Characters (21 total)
Fox, Sir Oofie, Calcium, Megachad, Ogre, CL4NK, Athena, Robinette, Monke, Tony McZoom, Bush, Birdo, Noelle, Amog, Spaceman, Bandit, Ninja, Vlad, Sir Chadwell, Dicehead, Roberto

### Weapons (29 total)
- **Starter Weapons (7):** Sword, Flamewalker, Lightning Staff, Firestaff, Chunkers, Bone, Bow
- **Unlockable Weapons (22):** Revolver, Aegis, Bananarang, Aura, Axe, Space Noodle, Sniper Rifle, Slutty Rocket, Shotgun, Mines, Wireless Dagger, Frostwalker, Tornado, Dexecutioner, Blood Magic, Black Hole, Poison Flask, Katana, Dragon's Breath, Dice, Hero Sword, Corrupted Sword, Scythe

### Tomes (23 total)
- **Default Tomes (13):** Agility, Cooldown, Damage, Evasion, Golden, Health, Knockback, Precision, Projectile Speed, Regen, Shield, Silver, Size
- **Unlockable Tomes (10):** Armor, Attraction, Bloody, Chaos, Cursed, Duration, Luck, Quantity, Thorns, XP

## Build Rules

- Each build must have exactly 1 character
- Each character has a fixed starting weapon that cannot be changed or removed
- Maximum 4 weapons total (including the starting weapon)
- Maximum 4 tomes (characters start with 0 tomes)
- No duplicate weapons or tomes in a single build

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS** - Component styling

## Browser Support

Modern browsers with ES2020+ support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

This is a fan-made tool for the Mega Bonk game. All game content and trademarks belong to their respective owners.
Data was sourced from the Megabonk wiki, `https://megabonk.wiki/wiki/`, whose content is licensed under Creative Commons Attribution-ShareAlike `https://creativecommons.org/licenses/by-sa/4.0/`
