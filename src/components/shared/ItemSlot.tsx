import { GameItem } from '../../types/game.types';
import './ItemSlot.css';

interface ItemSlotProps {
  item?: GameItem;
  index: number;
  isLocked?: boolean;
  onRemove?: () => void;
}

export function ItemSlot({ item, index, isLocked, onRemove }: ItemSlotProps) {
  const isPlaceholder = item?.imageUrl.startsWith('#');

  return (
    <div className="item-slot-container">
      <div
        className={`item-slot ${item ? 'filled' : 'empty'} ${isLocked ? 'locked' : ''}`}
        style={item ? {
          backgroundColor: isPlaceholder ? item.imageUrl : '#1a1a1a',
          backgroundImage: isPlaceholder ? undefined : `url(${item.imageUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}
      >
        {item ? (
          <>
            <div className="item-slot-content">
              <div className="item-slot-name">{item.name}</div>
            </div>
            {isLocked && (
              <div className="lock-icon" title="Starting weapon (cannot remove)">
                🔒
              </div>
            )}
            {!isLocked && onRemove && (
              <button
                className="remove-button"
                onClick={onRemove}
                title="Remove item"
              >
                ×
              </button>
            )}
          </>
        ) : (
          <div className="slot-number">{index + 1}</div>
        )}
      </div>
    </div>
  );
}
