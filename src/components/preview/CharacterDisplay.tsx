import { useBuild } from '../../context/BuildContext';
import { getWeaponById } from '../../data/weapons';
import './CharacterDisplay.css';

export function CharacterDisplay() {
  const { build } = useBuild();

  if (!build.character) {
    return (
      <div className="character-display empty">
        <div className="empty-message">Select a character to start building</div>
      </div>
    );
  }

  const startingWeapon = getWeaponById(build.character.startingWeaponId);
  const isPlaceholder = build.character.imageUrl.startsWith('#');
  const imgSrc = import.meta.env.BASE_URL + build.character.imageUrl.replace(/^\//, '');

  return (
    <div className="character-display">
      <div
        className="character-image"
        style={{
          backgroundColor: isPlaceholder ? build.character.imageUrl : '#1a1a1a',
          backgroundImage: isPlaceholder ? undefined : `url(${imgSrc})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="character-name">{build.character.name}</div>
      </div>
      <div className="character-info">
        <div className="info-row">
          <span className="info-label">Passive:</span>
          <span className="info-value">{build.character.passive}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Starting Weapon:</span>
          <span className="info-value">{startingWeapon?.name || 'Unknown'}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Unlock:</span>
          <span className="info-value">{build.character.unlockCondition}</span>
        </div>
      </div>
    </div>
  );
}
