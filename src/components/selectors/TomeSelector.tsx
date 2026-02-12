import { tomes } from '../../data/tomes';
import { useBuild } from '../../context/BuildContext';
import { ItemCard } from '../shared/ItemCard';
import { MAX_TOMES } from '../../utils/validation';
import '../selectors/CharacterSelector.css';

export function TomeSelector() {
  const { build, addTome } = useBuild();

  const selectedTomeIds = build.tomes.map(t => t.id);
  const isMaxReached = build.tomes.length >= MAX_TOMES;

  const sortedTomes = [...tomes].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="selector-container">
      <h2 className="selector-title">
        Select Tomes ({build.tomes.length}/{MAX_TOMES})
      </h2>
      <div className="selector-grid">
        {sortedTomes.map(tome => {
          const isSelected = selectedTomeIds.includes(tome.id);
          const isDisabled = !build.character || isSelected || isMaxReached;
          const synergyCount = build.weapons.filter(w => w.beneficialStats?.includes(tome.id)).length;

          return (
            <ItemCard
              key={tome.id}
              item={tome}
              onClick={() => addTome(tome)}
              isSelected={isSelected}
              isDisabled={isDisabled}
              synergyCount={synergyCount}
            />
          );
        })}
      </div>
    </div>
  );
}
