import { useMemo } from 'react';
import { useBuild } from '../../context/BuildContext';
import { MAX_WEAPONS } from '../../utils/validation';
import { Weapon } from '../../types/game.types';
import { tomes } from '../../data/tomes';
import './Slots.css';

export function WeaponSlots() {
  const { build, removeWeapon } = useBuild();

  const buildTomeIds = new Set(build.tomes.map(t => t.id));

  const tomeNameById = useMemo(() => {
    const map = new Map<string, string>();
    tomes.forEach(t => map.set(t.id, t.name));
    return map;
  }, []);

  const synergyCount = (weapon?: Weapon): number =>
    weapon?.beneficialStats?.filter(s => buildTomeIds.has(s)).length ?? 0;

  return (
    <div className="slots-container">
      <h3 className="slots-title">Weapons ({build.weapons.length}/{MAX_WEAPONS})</h3>
      <div className="detail-list">
        {build.weapons.map((weapon, index) => {
          const isLocked = index === 0;
          const count = synergyCount(weapon);
          return (
            <div
              key={weapon.id}
              className="weapon-slot-wrapper"
              data-synergy={count > 0 ? count : undefined}
            >
              <div className="item-detail-row">
                <div
                  className="item-detail-icon"
                  style={{ backgroundImage: `url(${weapon.imageUrl})` }}
                />
                <div className="item-detail-info">
                  <div className="item-detail-name">{weapon.name}</div>
                  <div className="item-detail-desc">{weapon.description}</div>
                  {weapon.beneficialStats && weapon.beneficialStats.length > 0 && (
                    <div className="item-detail-stats">
                      {weapon.beneficialStats.map(s => (
                        <span
                          key={s}
                          className={`stat-chip${buildTomeIds.has(s) ? ' active' : ''}`}
                        >
                          {tomeNameById.get(s) ?? s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {isLocked
                  ? <span className="lock-icon" title="Starting weapon (cannot remove)">🔒</span>
                  : <button className="remove-button" onClick={() => removeWeapon(index)} title="Remove weapon">×</button>
                }
              </div>
            </div>
          );
        })}
        {Array.from({ length: MAX_WEAPONS - build.weapons.length }, (_, i) => (
          <div key={`empty-${i}`} className="item-detail-row empty">
            <div className="item-detail-icon-empty">{build.weapons.length + i + 1}</div>
            <div className="item-detail-info">
              <div className="item-detail-name empty-name">Empty slot</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
