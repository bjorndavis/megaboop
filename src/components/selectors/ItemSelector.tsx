import { items } from '../../data/items';
import { ItemTier } from '../../types/game.types';
import { useBuild } from '../../context/BuildContext';
import { ItemCard } from '../shared/ItemCard';
import '../selectors/CharacterSelector.css';
import './ItemSelector.css';

const TIER_ORDER: ItemTier[] = ['common', 'uncommon', 'rare', 'legendary'];

const TIER_LABELS: Record<ItemTier, string> = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  legendary: 'Legendary',
};

const TIER_COLORS: Record<ItemTier, string> = {
  common: '#4caf82',
  uncommon: '#4a9eff',
  rare: '#c060ff',
  legendary: '#ffc840',
};

export function ItemSelector() {
  const { build, addItem } = useBuild();

  const byTier = TIER_ORDER.map(tier => ({
    tier,
    items: [...items]
      .filter(i => i.tier === tier)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  return (
    <div className="selector-container">
      <h2 className="selector-title">
        Select Items ({build.items.length})
      </h2>
      {byTier.map(({ tier, items: tierItems }) => (
        <div key={tier} className="item-tier-section">
          <div className="item-tier-header" style={{ color: TIER_COLORS[tier] }}>
            {TIER_LABELS[tier]}
          </div>
          <div className="selector-grid">
            {tierItems.map(item => {
              const count = build.items.filter(i => i.id === item.id).length;
              const isDisabled = !build.character;

              return (
                <div key={item.id} className="item-card-wrapper">
                  <ItemCard
                    item={item}
                    onClick={() => addItem(item)}
                    isSelected={count > 0}
                    isDisabled={isDisabled}
                  />
                  {count > 1 && (
                    <div className="item-count-badge">{count}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
