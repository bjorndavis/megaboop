import { GameItem } from '../../types/game.types';
import './ItemCard.css';

interface ItemCardProps {
  item: GameItem;
  onClick?: () => void;
  isSelected?: boolean;
  isDisabled?: boolean;
  size?: 'small' | 'large';
}

export function ItemCard({ item, onClick, isSelected, isDisabled, size = 'small' }: ItemCardProps) {
  const isPlaceholder = item.imageUrl.startsWith('#');

  return (
    <div
      className={`item-card ${size} ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
      onClick={isDisabled ? undefined : onClick}
      title={item.description}
      style={{
        backgroundColor: isPlaceholder ? item.imageUrl : '#1a1a1a',
        backgroundImage: isPlaceholder ? undefined : `url(${item.imageUrl})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        cursor: isDisabled ? 'not-allowed' : onClick ? 'pointer' : 'default'
      }}
    >
      <div className="item-card-content">
        <div className="item-card-name">{item.name}</div>
      </div>
    </div>
  );
}
