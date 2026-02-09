# Game Data Template

This document explains how to update the game data with real information and images.

## Data Structure

All game data is stored in TypeScript files in the `src/data/` directory.

### Character Data Format

Located in: `src/data/characters.ts`

```typescript
{
  id: 'unique-kebab-case-id',           // Unique identifier
  name: 'Display Name',                  // Character name shown to users
  type: 'character',                     // Must be 'character'
  startingWeaponId: 'weapon-id',        // ID of starting weapon (must match a weapon ID)
  passive: 'Description of passive',     // Character's passive ability
  description: 'Character description',  // Additional character info
  imageUrl: '/images/characters/name.png', // Path to character image
  unlockCondition: 'How to unlock'      // e.g., 'Beat wave 5'
}
```

**Example:**
```typescript
{
  id: 'fox',
  name: 'Fox',
  type: 'character',
  startingWeaponId: 'firestaff',
  passive: 'Extra projectiles',
  description: 'Cunning and agile starter character',
  imageUrl: '/images/characters/fox.png',
  unlockCondition: 'Available from start'
}
```

### Weapon Data Format

Located in: `src/data/weapons.ts`

```typescript
{
  id: 'unique-kebab-case-id',           // Unique identifier
  name: 'Display Name',                  // Weapon name shown to users
  type: 'weapon',                        // Must be 'weapon'
  description: 'What the weapon does',   // Weapon behavior/effect
  imageUrl: '/images/weapons/name.png',  // Path to weapon image
  unlockCondition: 'How to unlock'      // Optional, omit for starter weapons
}
```

**Example:**
```typescript
{
  id: 'firestaff',
  name: 'Firestaff',
  type: 'weapon',
  description: 'Launches fireballs in multiple directions',
  imageUrl: '/images/weapons/firestaff.png',
  unlockCondition: 'Available from start'
}
```

### Tome Data Format

Located in: `src/data/tomes.ts`

```typescript
{
  id: 'unique-kebab-case-id',           // Unique identifier
  name: 'Display Name',                  // Tome name shown to users
  type: 'tome',                          // Must be 'tome'
  effect: 'Primary effect',              // Main effect of the tome
  description: 'Additional details',     // More info about the effect
  imageUrl: '/images/tomes/name.png',    // Path to tome image
  unlockCondition: 'How to unlock'      // Optional, omit for default tomes
}
```

**Example:**
```typescript
{
  id: 'damage',
  name: 'Damage',
  type: 'tome',
  effect: 'Increases damage dealt',
  description: 'Hit harder',
  imageUrl: '/images/tomes/damage.png',
  unlockCondition: 'Available from start'
}
```

## Adding Real Images

### Step 1: Organize Your Images

Create the following directory structure in the `public/` folder:

```
public/
├── images/
│   ├── characters/
│   │   ├── fox.png
│   │   ├── sir-oofie.png
│   │   └── ... (other characters)
│   ├── weapons/
│   │   ├── firestaff.png
│   │   ├── sword.png
│   │   └── ... (other weapons)
│   └── tomes/
│       ├── damage.png
│       ├── health.png
│       └── ... (other tomes)
```

### Step 2: Image Requirements

- **Format:** PNG (with transparency) or JPG
- **Recommended Size:**
  - Characters: 150x150px
  - Weapons: 80x80px
  - Tomes: 80x80px
- **File Naming:** Use kebab-case matching the ID (e.g., `tony-mczoom.png` for character with id `'tony-mczoom'`)

### Step 3: Update Data Files

Replace the placeholder URLs with real image paths:

**Before:**
```typescript
imageUrl: generatePlaceholder('fox', 'character'),
```

**After:**
```typescript
imageUrl: '/images/characters/fox.png',
```

You can also remove the import for `generatePlaceholder` once all placeholders are replaced:

```typescript
// Remove this line:
import { generatePlaceholder } from '../utils/placeholder';
```

## Updating Existing Data

### To Update a Character:

1. Open `src/data/characters.ts`
2. Find the character object by its `id`
3. Update the fields you want to change
4. Save the file

The changes will appear immediately in development mode (hot reload).

### To Add a New Character:

1. Open `src/data/characters.ts`
2. Add a new character object to the `characters` array:

```typescript
export const characters: Character[] = [
  // ... existing characters
  {
    id: 'new-character',
    name: 'New Character',
    type: 'character',
    startingWeaponId: 'sword', // Must be a valid weapon ID
    passive: 'Some cool passive',
    description: 'A new awesome character',
    imageUrl: '/images/characters/new-character.png',
    unlockCondition: 'Beat wave 30'
  }
];
```

3. Make sure the `startingWeaponId` matches an existing weapon's `id`

### Same Process for Weapons and Tomes

Follow the same steps for:
- Weapons in `src/data/weapons.ts`
- Tomes in `src/data/tomes.ts`

## Important Notes

### Character-Weapon Relationship

Each character **must** have a valid `startingWeaponId` that matches a weapon's `id`. The app will validate this when you select a character.

**Current Mappings:**
- Fox → firestaff
- Sir Oofie → sword
- Calcium → bone
- Megachad → aura
- Ogre → axe
- CL4NK → revolver
- Athena → aegis
- Robinette → bow
- Monke → bananarang
- Tony McZoom → wireless-dagger
- Bush → sniper-rifle
- Birdo → tornado
- Noelle → frostwalker
- Amog → poison-flask
- Spaceman → black-hole
- Bandit → dexecutioner
- Ninja → katana
- Vlad → blood-magic
- Sir Chadwell → corrupted-sword
- Dicehead → dice
- Roberto → scythe

### ID Consistency

When changing an ID, you must update it in all places:

1. The item's own `id` field
2. Any references to that ID (e.g., `startingWeaponId` in characters)
3. The image filename

### Type Safety

TypeScript will catch many errors. If you see red squiggly lines in your editor:
- Make sure all required fields are present
- Check that string values match expected formats
- Verify that `type` is exactly 'character', 'weapon', or 'tome'

## Testing Your Changes

After updating data:

1. Start the dev server: `npm run dev`
2. Open the app in your browser
3. Test the affected items:
   - Select characters to verify starting weapons
   - Add weapons and tomes to verify they appear
   - Check that images load correctly
   - Verify descriptions and effects display properly

## Troubleshooting

### Images Not Showing

- Check that the image path is correct and starts with `/images/`
- Verify the image file exists in `public/images/`
- Check the browser console for 404 errors
- Make sure the filename matches exactly (case-sensitive)

### Character Selection Fails

- Verify `startingWeaponId` matches a valid weapon `id`
- Check the browser console for validation errors

### TypeScript Errors

- Make sure all required fields are present
- Check that field names are spelled correctly
- Verify that types match (e.g., `type: 'weapon'` not `type: 'weapons'`)

## Example: Complete Data Update

Here's a full example of adding a new character with a new starting weapon:

### 1. Add the weapon:

```typescript
// In src/data/weapons.ts
{
  id: 'magic-wand',
  name: 'Magic Wand',
  type: 'weapon',
  description: 'Casts magical spells',
  imageUrl: '/images/weapons/magic-wand.png',
  unlockCondition: 'Unlock Wizard'
}
```

### 2. Add the character:

```typescript
// In src/data/characters.ts
{
  id: 'wizard',
  name: 'Wizard',
  type: 'character',
  startingWeaponId: 'magic-wand',
  passive: 'Increased spell power',
  description: 'Master of arcane arts',
  imageUrl: '/images/characters/wizard.png',
  unlockCondition: 'Beat wave 15 with Fox'
}
```

### 3. Add the images:

- Place `wizard.png` in `public/images/characters/`
- Place `magic-wand.png` in `public/images/weapons/`

### 4. Test:

- Start dev server
- Select Wizard
- Verify Magic Wand appears as starting weapon
- Check images load correctly
