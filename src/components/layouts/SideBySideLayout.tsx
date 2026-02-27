import { useState, useEffect } from 'react';
import { CharacterSelector } from '../selectors/CharacterSelector';
import { WeaponSelector } from '../selectors/WeaponSelector';
import { TomeSelector } from '../selectors/TomeSelector';
import { ItemSelector } from '../selectors/ItemSelector';
import { CharacterDisplay } from '../preview/CharacterDisplay';
import { WeaponSlots } from '../preview/WeaponSlots';
import { TomeSlots } from '../preview/TomeSlots';
import { ItemSlots } from '../preview/ItemSlots';
import { useBuild } from '../../context/BuildContext';
import { MAX_WEAPONS, MAX_TOMES } from '../../utils/validation';
import { decodeBuildFromUrl } from '../../utils/urlSharing';
import './SideBySideLayout.css';

type Tab = 'characters' | 'loadout' | 'items' | 'preview';

export function SideBySideLayout() {
  const { build, setBuildName, setBuildDescription } = useBuild();
  const [activeTab, setActiveTab] = useState<Tab>(() => {
    const hasUrlBuild = decodeBuildFromUrl() !== null;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    return hasUrlBuild && isMobile ? 'preview' : 'characters';
  });
  const [descOpen, setDescOpen] = useState(false);

  useEffect(() => {
    if (build.description) setDescOpen(true);
  }, [build.description]);

  useEffect(() => {
    if (build.character && activeTab === 'characters') {
      setActiveTab('loadout');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [build.character?.id]);

  const tabs: { id: Tab; label: string; mobileOnly?: boolean }[] = [
    { id: 'characters', label: build.character ? `✓ ${build.character.name}` : 'Characters' },
    { id: 'loadout', label: `Weapons (${build.weapons.length}/${MAX_WEAPONS}) · Tomes (${build.tomes.length}/${MAX_TOMES})` },
    { id: 'items', label: build.items.length > 0 ? `Items (${build.items.length})` : 'Items' },
    { id: 'preview', label: 'Preview', mobileOnly: true },
  ];

  // Shared preview content — rendered in the tab on mobile, in side-preview on desktop
  const previewContent = (
    <>
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
                maxLength={300}
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
            <button className="build-desc-toggle" onClick={() => setDescOpen(true)}>
              + Add description
            </button>
          )}
        </div>
      )}
      <CharacterDisplay />
      <WeaponSlots />
      <TomeSlots />
      <ItemSlots />
    </>
  );

  return (
    <div className="side-by-side-layout">
      <div className="side-selectors">
        <div className="selector-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`selector-tab${activeTab === tab.id ? ' active' : ''}${tab.mobileOnly ? ' mobile-only-tab' : ''}`}
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
          {activeTab === 'items' && <ItemSelector />}
          {activeTab === 'preview' && (
            <div className="preview-tab-panel">
              {previewContent}
            </div>
          )}
        </div>
      </div>

      {/* Always visible on desktop; hidden on mobile (preview tab used instead) */}
      <div className="side-preview desktop-preview">
        {previewContent}
      </div>
    </div>
  );
}
