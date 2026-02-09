import { characters } from '../../data/characters';
import { useBuild } from '../../context/BuildContext';
import { ItemCard } from '../shared/ItemCard';
import './CharacterSelector.css';

export function CharacterSelector() {
  const { build, selectCharacter } = useBuild();

  const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="selector-container">
      <h2 className="selector-title">Select Character</h2>
      <div className="selector-grid">
        {sortedCharacters.map(character => (
          <ItemCard
            key={character.id}
            item={character}
            onClick={() => selectCharacter(character)}
            isSelected={build.character?.id === character.id}
            size="large"
          />
        ))}
      </div>
    </div>
  );
}
