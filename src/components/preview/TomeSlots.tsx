import { useBuild } from '../../context/BuildContext';
import { ItemSlot } from '../shared/ItemSlot';
import { MAX_TOMES } from '../../utils/validation';
import './Slots.css';

export function TomeSlots() {
  const { build, removeTome } = useBuild();

  const slots = Array.from({ length: MAX_TOMES }, (_, index) => {
    const tome = build.tomes[index];

    return (
      <ItemSlot
        key={index}
        item={tome}
        index={index}
        onRemove={tome ? () => removeTome(index) : undefined}
      />
    );
  });

  return (
    <div className="slots-container">
      <h3 className="slots-title">Tomes</h3>
      <div className="slots-row">{slots}</div>
    </div>
  );
}
