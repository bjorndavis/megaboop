import { CharacterSelector } from '../selectors/CharacterSelector';
import { WeaponSelector } from '../selectors/WeaponSelector';
import { TomeSelector } from '../selectors/TomeSelector';
import { CharacterDisplay } from '../preview/CharacterDisplay';
import { WeaponSlots } from '../preview/WeaponSlots';
import { TomeSlots } from '../preview/TomeSlots';
import './GridLayout.css';

export function GridLayout() {
  return (
    <div className="grid-layout">
      <div className="grid-character-selector">
        <CharacterSelector />
      </div>
      <div className="grid-preview">
        <CharacterDisplay />
        <WeaponSlots />
        <TomeSlots />
      </div>
      <div className="grid-weapon-selector">
        <WeaponSelector />
      </div>
      <div className="grid-tome-selector">
        <TomeSelector />
      </div>
    </div>
  );
}
