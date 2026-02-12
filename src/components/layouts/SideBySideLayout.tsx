import { CharacterSelector } from '../selectors/CharacterSelector';
import { WeaponSelector } from '../selectors/WeaponSelector';
import { TomeSelector } from '../selectors/TomeSelector';
import { CharacterDisplay } from '../preview/CharacterDisplay';
import { WeaponSlots } from '../preview/WeaponSlots';
import { TomeSlots } from '../preview/TomeSlots';
import { useBuild } from '../../context/BuildContext';
import './SideBySideLayout.css';

export function SideBySideLayout() {
  const { build, setBuildName, setBuildDescription } = useBuild();

  return (
    <div className="side-by-side-layout">
      <div className="side-selectors">
        <CharacterSelector />
        <WeaponSelector />
        <TomeSelector />
      </div>
      <div className="side-preview">
        {build.character && (
          <div className="build-name-container">
            <input
              type="text"
              className="build-name-input"
              placeholder="Name your build..."
              value={build.name || ''}
              onChange={(e) => setBuildName(e.target.value)}
              maxLength={50}
            />
            <textarea
              className="build-description-input"
              placeholder="Describe your build strategy..."
              value={build.description || ''}
              onChange={(e) => setBuildDescription(e.target.value)}
              maxLength={500}
              rows={3}
            />
          </div>
        )}
        <CharacterDisplay />
        <WeaponSlots />
        <TomeSlots />
      </div>
    </div>
  );
}
