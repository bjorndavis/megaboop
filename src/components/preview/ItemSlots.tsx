import { useBuild } from '../../context/BuildContext';
import { ItemTier } from '../../types/game.types';
import './Slots.css';

const TIER_COLORS: Record<ItemTier, string> = {
  common: '#4caf82',
  uncommon: '#4a9eff',
  rare: '#c060ff',
  legendary: '#ffc840',
};

export function ItemSlots() {
  const { build, removeItem } = useBuild();

  if (build.items.length === 0) return null;

  // Group items by id, keeping track of indices for removal
  const grouped: { id: string; indices: number[] }[] = [];
  build.items.forEach((item, index) => {
    const existing = grouped.find(g => g.id === item.id);
    if (existing) {
      existing.indices.push(index);
    } else {
      grouped.push({ id: item.id, indices: [index] });
    }
  });

  return (
    <div className="slots-container">
      <h3 className="slots-title">Items ({build.items.length})</h3>
      <div className="detail-list">
        {grouped.map(group => {
          const item = build.items[group.indices[0]];
          const count = group.indices.length;
          const lastIndex = group.indices[group.indices.length - 1];

          return (
            <div key={item.id} className="item-detail-row">
              <div
                className="item-detail-icon"
                style={{
                  backgroundColor: item.imageUrl.startsWith('#') ? item.imageUrl : '#1a1a1a',
                  backgroundImage: item.imageUrl.startsWith('#') ? undefined : `url(${import.meta.env.BASE_URL + item.imageUrl.replace(/^\//, '')})`,
                  position: 'relative'
                }}
              >
                {count > 1 && (
                  <span style={{
                    position: 'absolute', bottom: 2, right: 2,
                    background: '#c060ff', color: '#fff',
                    fontSize: '10px', fontWeight: 'bold',
                    width: '16px', height: '16px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>{count}</span>
                )}
              </div>
              <div className="item-detail-info">
                <div className="item-detail-name">
                  {item.name}
                  <span style={{ marginLeft: 6, fontSize: 10, color: TIER_COLORS[item.tier], fontWeight: 600, textTransform: 'uppercase' }}>
                    {item.tier}
                  </span>
                </div>
                <div className="item-detail-desc">{item.effect}</div>
              </div>
              <button className="remove-button" onClick={() => removeItem(lastIndex)} title="Remove item">×</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
