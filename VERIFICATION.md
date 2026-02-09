# Verification Guide

This guide will help you verify that all features of the Mega Bonk Build Preview website are working correctly.

## Quick Start

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## Feature Testing Checklist

### ✅ Character Selection
1. Click on any character card
2. **Expected:** Character appears in the preview area
3. **Expected:** Character's starting weapon appears in the first weapon slot
4. **Expected:** First weapon slot shows a lock icon (🔒)
5. Try clicking different characters
6. **Expected:** Build resets each time with new character and their starting weapon

**Test Characters:**
- Fox → Should start with Firestaff
- Sir Oofie → Should start with Sword
- Calcium → Should start with Bone
- CL4NK → Should start with Revolver
- Ninja → Should start with Katana

### ✅ Weapon Management
1. Select a character first
2. Click on weapon cards to add them
3. **Expected:** Weapons appear in slots 2, 3, 4
4. **Expected:** Counter shows "X/4 weapons"
5. Try adding a 4th weapon (after starting weapon)
6. **Expected:** Cannot add a 5th weapon (cards should be disabled)
7. Try clicking the same weapon twice
8. **Expected:** Already selected weapons appear dimmed/disabled
9. Click the × button on slots 2, 3, or 4
10. **Expected:** Weapon is removed from build
11. Try clicking × on the first slot (with lock icon)
12. **Expected:** Cannot remove starting weapon

### ✅ Tome Management
1. Select a character first
2. Click on tome cards to add them
3. **Expected:** Tomes appear in slots 1, 2, 3, 4
4. **Expected:** Counter shows "X/4 tomes"
5. Add 4 tomes
6. **Expected:** Cannot add a 5th tome (cards should be disabled)
7. Try clicking the same tome twice
8. **Expected:** Already selected tomes appear dimmed/disabled
9. Click the × button on any tome slot
10. **Expected:** Tome is removed from build

### ✅ Layout Switching
1. Build a complete character with some weapons and tomes
2. Click "Side-by-Side Layout" button
3. **Expected:** Layout changes to two columns
4. **Expected:** All your selected items are still there
5. **Expected:** Build summary appears showing weapon/tome counts
6. Click "Grid Layout" button
7. **Expected:** Layout changes to four quadrants
8. **Expected:** All your selected items are still there

### ✅ Validation & Errors
1. Try adding a weapon without selecting a character first
2. **Expected:** Error banner appears at top: "Please select a character first"
3. **Expected:** Error disappears after 3 seconds
4. Build a full loadout (4 weapons, 4 tomes)
5. Try adding more items
6. **Expected:** Error banner shows max item limit message
7. Click × on error banner
8. **Expected:** Error dismisses immediately

### ✅ Visual Feedback
1. Hover over item cards
2. **Expected:** Cards slightly enlarge and border changes
3. **Expected:** Tooltip shows item description
4. Click on items
5. **Expected:** Selected items have blue border/glow
6. Check disabled items (duplicates or when at max)
7. **Expected:** Items appear faded/grayed out with not-allowed cursor

### ✅ Data Integrity

**All 21 Characters Present:**
Fox, Sir Oofie, Calcium, Megachad, Ogre, CL4NK, Athena, Robinette, Monke, Tony McZoom, Bush, Birdo, Noelle, Amog, Spaceman, Bandit, Ninja, Vlad, Sir Chadwell, Dicehead, Roberto

**All 29 Weapons Present:**
- Starters: Sword, Flamewalker, Lightning Staff, Firestaff, Chunkers, Bone, Bow
- Unlockable: Revolver, Aegis, Bananarang, Aura, Axe, Space Noodle, Sniper Rifle, Slutty Rocket, Shotgun, Mines, Wireless Dagger, Frostwalker, Tornado, Dexecutioner, Blood Magic, Black Hole, Poison Flask, Katana, Dragon's Breath, Dice, Hero Sword, Corrupted Sword, Scythe

**All 23 Tomes Present:**
- Default: Agility, Cooldown, Damage, Evasion, Golden, Health, Knockback, Precision, Projectile Speed, Regen, Shield, Silver, Size
- Unlockable: Armor, Attraction, Bloody, Chaos, Cursed, Duration, Luck, Quantity, Thorns, XP

### ✅ Responsive Design
1. Resize browser window to narrow width (< 768px)
2. **Expected:** Grid layout stacks vertically
3. **Expected:** Side-by-side layout stacks vertically
4. Resize to medium width (768px - 1024px)
5. **Expected:** Layouts adapt appropriately
6. Resize to full width (> 1024px)
7. **Expected:** Full grid/side-by-side layouts display

### ✅ Placeholder Colors
1. Check that each item has a colored background
2. **Expected:** Same item always has the same color
3. **Expected:** Characters use one color palette
4. **Expected:** Weapons use a different color palette
5. **Expected:** Tomes use a different color palette

## Common Issues

### Development Server Won't Start
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### TypeScript Errors
```bash
# Rebuild
npm run build
```

### Port Already in Use
If you see "Port 5173 is already in use":
```bash
# Kill the process
lsof -ti:5173 | xargs kill -9
# Or use a different port
npm run dev -- --port 3000
```

### Images Not Loading
- Placeholders are used by default (colored boxes)
- To add real images, see DATA_TEMPLATE.md

## Build Testing

### Production Build
```bash
npm run build
npm run preview
```

Open http://localhost:4173 to test the production build.

### Build Output
Check that these files exist:
- `dist/index.html` - Entry point
- `dist/assets/index-*.js` - JavaScript bundle
- `dist/assets/index-*.css` - Styles

## Performance Testing

1. Open browser developer tools (F12)
2. Go to Network tab
3. Refresh the page
4. **Expected:** Page loads in < 2 seconds
5. **Expected:** No console errors
6. Go to Performance tab
7. Click on various items
8. **Expected:** UI responds immediately (< 100ms)

## Browser Compatibility

Test in:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+

## Success Criteria

All of the following should work:
- ✅ All 21 characters selectable
- ✅ All 29 weapons available
- ✅ All 23 tomes available
- ✅ Starting weapon auto-assigned and locked
- ✅ Max 4 weapons enforced
- ✅ Max 4 tomes enforced
- ✅ No duplicate items allowed
- ✅ Both layouts functional
- ✅ State persists across layout changes
- ✅ Errors display and dismiss
- ✅ Responsive on mobile/tablet/desktop
- ✅ No console errors
- ✅ Build completes without errors

## Next Steps

Once verification is complete, you can:
1. Replace placeholders with real game images (see DATA_TEMPLATE.md)
2. Share the app with others
3. Deploy to a hosting service (Vercel, Netlify, etc.)
4. Add additional features from the plan

## Need Help?

Check these files:
- `README.md` - General usage and setup
- `DATA_TEMPLATE.md` - How to update game data
- Browser console (F12) - Error messages and debugging
