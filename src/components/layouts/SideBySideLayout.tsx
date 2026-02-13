import { useState, useEffect } from 'react';
import { CharacterSelector } from '../selectors/CharacterSelector';
import { WeaponSelector } from '../selectors/WeaponSelector';
import { TomeSelector } from '../selectors/TomeSelector';
import { CharacterDisplay } from '../preview/CharacterDisplay';
import { WeaponSlots } from '../preview/WeaponSlots';
import { TomeSlots } from '../preview/TomeSlots';
import { useBuild } from '../../context/BuildContext';
import { MAX_WEAPONS, MAX_TOMES } from '../../utils/validation';
import './SideBySideLayout.css';

type Tab = 'characters' | 'loadout';

export function SideBySideLayout() {
  const { build, setBuildName, setBuildDescription } = useBuild();
  const [activeTab, setActiveTab] = useState<Tab>('characters');
  const [descOpen, setDescOpen] = useState(false);

  // Open description if build already has one (e.g. loaded from URL)
  useEffect(() => {
    if (build.description) setDescOpen(true);
  }, [build.description]);

  // Auto-advance to Loadout tab when a character is selected
  useEffect(() => {
    if (build.character && activeTab === 'characters') {
      setActiveTab('loadout');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [build.character?.id]);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'characters', label: build.character ? `✓ ${build.character.name}` : 'Characters' },
    { id: 'loadout', label: `Weapons (${build.weapons.length}/${MAX_WEAPONS}) · Tomes (${build.tomes.length}/${MAX_TOMES})` },
  ];

  return (
    <div className="side-by-side-layout">
      <div className="side-selectors">
        <div className="selector-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`selector-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="selector-tab-content">
          {activeTab === 'characters' && <CharacterSelector />}
          {activeTab === 'loadout' && (
            <>
              <WeaponSelector />
              <TomeSelector />
            </>
          )}
        </div>
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
            {descOpen ? (
              <div className="build-desc-wrap">
                <textarea
                  className="build-description-input"
                  placeholder="Describe your build strategy..."
                  value={build.description || ''}
                  onChange={(e) => setBuildDescription(e.target.value)}
                  maxLength={500}
                  rows={2}
                  autoFocus
                />
                <button
                  className="build-desc-toggle"
                  onClick={() => { setBuildDescription(''); setDescOpen(false); }}
                >
                  Remove description
                </button>
              </div>
            ) : (
              <button
                className="build-desc-toggle"
                onClick={() => setDescOpen(true)}
              >
                + Add description
              </button>
            )}
          </div>
        )}
        <CharacterDisplay />
        <WeaponSlots />
        <TomeSlots />
      </div>
    </div>
  );
}
