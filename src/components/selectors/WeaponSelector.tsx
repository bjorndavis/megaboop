import { useState, useMemo } from 'react';
import { weapons } from '../../data/weapons';
import { tomes } from '../../data/tomes';
import { useBuild } from '../../context/BuildContext';
import { ItemCard } from '../shared/ItemCard';
import { MAX_WEAPONS } from '../../utils/validation';
import '../selectors/CharacterSelector.css';

export function WeaponSelector() {
  const { build, addWeapon } = useBuild();
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const selectedWeaponIds = build.weapons.map(w => w.id);
  const isMaxReached = build.weapons.length >= MAX_WEAPONS;

  const tomeNameById = useMemo(() => {
    const map = new Map<string, string>();
    tomes.forEach(t => map.set(t.id, t.name));
    return map;
  }, []);

  const allStatIds = useMemo(() => {
    const ids = new Set<string>();
    weapons.forEach(w => w.beneficialStats?.forEach(s => ids.add(s)));
    return [...ids].sort((a, b) =>
      (tomeNameById.get(a) ?? a).localeCompare(tomeNameById.get(b) ?? b)
    );
  }, [tomeNameById]);

  const toggleFilter = (id: string) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const buildTomeIds = new Set(build.tomes.map(t => t.id));

  const sortedWeapons = [...weapons].sort((a, b) => a.name.localeCompare(b.name));

  const filteredWeapons = activeFilters.size === 0
    ? sortedWeapons
    : sortedWeapons.filter(w => w.beneficialStats?.some(s => activeFilters.has(s)));

  return (
    <div className="selector-container">
      <h2 className="selector-title">
        Select Weapons ({build.weapons.length}/{MAX_WEAPONS})
      </h2>
      <div className="stat-filter-bar">
        {allStatIds.map(statId => (
          <button
            key={statId}
            className={`stat-filter-btn${activeFilters.has(statId) ? ' active' : ''}`}
            onClick={() => toggleFilter(statId)}
          >
            {tomeNameById.get(statId) ?? statId}
          </button>
        ))}
      </div>
      <div className="selector-grid">
        {filteredWeapons.map(weapon => {
          const isSelected = selectedWeaponIds.includes(weapon.id);
          const isDisabled = !build.character || isSelected || isMaxReached;
          const synergyCount = weapon.beneficialStats?.filter(s => buildTomeIds.has(s)).length ?? 0;

          return (
            <ItemCard
              key={weapon.id}
              item={weapon}
              onClick={() => addWeapon(weapon)}
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
