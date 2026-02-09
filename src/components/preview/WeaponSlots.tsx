import { useBuild } from '../../context/BuildContext';
import { ItemSlot } from '../shared/ItemSlot';
import { MAX_WEAPONS } from '../../utils/validation';
import './Slots.css';

export function WeaponSlots() {
  const { build, removeWeapon } = useBuild();

  const slots = Array.from({ length: MAX_WEAPONS }, (_, index) => {
    const weapon = build.weapons[index];
    const isLocked = index === 0;

    return (
      <ItemSlot
        key={index}
        item={weapon}
        index={index}
        isLocked={isLocked}
        onRemove={weapon && !isLocked ? () => removeWeapon(index) : undefined}
      />
    );
  });

  return (
    <div className="slots-container">
      <h3 className="slots-title">Weapons</h3>
      <div className="slots-row">{slots}</div>
    </div>
  );
}
