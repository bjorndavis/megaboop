import { useBuild } from '../../context/BuildContext';
import { MAX_TOMES } from '../../utils/validation';
import './Slots.css';

export function TomeSlots() {
  const { build, removeTome } = useBuild();

  return (
    <div className="slots-container">
      <h3 className="slots-title">Tomes ({build.tomes.length}/{MAX_TOMES})</h3>
      <div className="detail-list">
        {build.tomes.map((tome, index) => (
          <div key={tome.id} className="item-detail-row">
            <div
              className="item-detail-icon"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL + tome.imageUrl.replace(/^\//, '')})` }}
            />
            <div className="item-detail-info">
              <div className="item-detail-name">{tome.name}</div>
              <div className="item-detail-desc">{tome.effect}</div>
            </div>
            <button className="remove-button" onClick={() => removeTome(index)} title="Remove tome">×</button>
          </div>
        ))}
        {Array.from({ length: MAX_TOMES - build.tomes.length }, (_, i) => (
          <div key={`empty-${i}`} className="item-detail-row empty">
            <div className="item-detail-icon-empty">{build.tomes.length + i + 1}</div>
            <div className="item-detail-info">
              <div className="item-detail-name empty-name">Empty slot</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
