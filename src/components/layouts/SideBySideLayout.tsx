import { CharacterSelector } from '../selectors/CharacterSelector';
import { WeaponSelector } from '../selectors/WeaponSelector';
import { TomeSelector } from '../selectors/TomeSelector';
import { CharacterDisplay } from '../preview/CharacterDisplay';
import { WeaponSlots } from '../preview/WeaponSlots';
import { TomeSlots } from '../preview/TomeSlots';
import { useBuild } from '../../context/BuildContext';
import './SideBySideLayout.css';

export function SideBySideLayout() {
  const { build, setBuildName } = useBuild();

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
          </div>
        )}
        <CharacterDisplay />
        <WeaponSlots />
        <TomeSlots />
        {build.character && (
          <div className="build-summary">
            <h3>Build Summary</h3>
            <div className="summary-item">
              <span className="summary-label">Weapons:</span>
              <span className="summary-value">{build.weapons.length}/4</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Tomes:</span>
              <span className="summary-value">{build.tomes.length}/4</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
