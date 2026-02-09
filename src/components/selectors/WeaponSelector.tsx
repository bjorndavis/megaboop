import { weapons } from '../../data/weapons';
import { useBuild } from '../../context/BuildContext';
import { ItemCard } from '../shared/ItemCard';
import { MAX_WEAPONS } from '../../utils/validation';
import '../selectors/CharacterSelector.css';

export function WeaponSelector() {
  const { build, addWeapon } = useBuild();

  const selectedWeaponIds = build.weapons.map(w => w.id);
  const isMaxReached = build.weapons.length >= MAX_WEAPONS;

  const sortedWeapons = [...weapons].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="selector-container">
      <h2 className="selector-title">
        Select Weapons ({build.weapons.length}/{MAX_WEAPONS})
      </h2>
      <div className="selector-grid">
        {sortedWeapons.map(weapon => {
          const isSelected = selectedWeaponIds.includes(weapon.id);
          const isDisabled = !build.character || isSelected || isMaxReached;

          return (
            <ItemCard
              key={weapon.id}
              item={weapon}
              onClick={() => addWeapon(weapon)}
              isSelected={isSelected}
              isDisabled={isDisabled}
            />
          );
        })}
      </div>
    </div>
  );
}
