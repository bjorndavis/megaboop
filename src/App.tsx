import { useEffect, useState } from 'react';
import { BuildProvider, useBuild } from './context/BuildContext';
import { SideBySideLayout } from './components/layouts/SideBySideLayout';
import { SavedBuildsList } from './components/saved/SavedBuildsList';
import { useSavedBuilds } from './hooks/useSavedBuilds';
import { getShareableUrl, copyToClipboard, decodeBuildFromUrl } from './utils/urlSharing';
import { characters } from './data/characters';
import { weapons } from './data/weapons';
import { tomes } from './data/tomes';
import './App.css';
import './components/saved/SavedBuilds.css';

function AppContent() {
  const { build, error, clearError, resetBuild, selectCharacter, addWeapon, addTome, setBuildName, setBuildDescription, loadBuild } = useBuild();
  const { savedBuilds, saveCurrentBuild, deleteSavedBuild } = useSavedBuilds();
  const [showCopied, setShowCopied] = useState(false);
  const [savesOpen, setSavesOpen] = useState(false);

  // Load build from URL on mount
  useEffect(() => {
    const urlBuild = decodeBuildFromUrl();
    if (urlBuild) {
      const character = characters.find(c => c.id === urlBuild.characterId);
      if (character) {
        selectCharacter(character);
        if (urlBuild.name) setBuildName(urlBuild.name);
        urlBuild.weaponIds.forEach(weaponId => {
          const weapon = weapons.find(w => w.id === weaponId);
          if (weapon) addWeapon(weapon);
        });
        urlBuild.tomeIds.forEach(tomeId => {
          const tome = tomes.find(t => t.id === tomeId);
          if (tome) addTome(tome);
        });
        if (urlBuild.description) setBuildDescription(urlBuild.description);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => clearError(), 3000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  const handleShare = async () => {
    const url = getShareableUrl(build);
    if (!url) return;
    const success = await copyToClipboard(url);
    if (success) {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1>O & B's weird but cool megabonk builds</h1>
            <p className="app-subtitle">Create and preview your character builds</p>
          </div>
          <div className="header-buttons">
            <button
              className="saves-button"
              onClick={() => setSavesOpen(true)}
              title="View saved builds"
            >
              💾 Saves{savedBuilds.length > 0 ? ` (${savedBuilds.length})` : ''}
            </button>
            <button
              className="share-button"
              onClick={handleShare}
              disabled={!build.character}
              title={build.character ? "Copy shareable link" : "Select a character first"}
            >
              {showCopied ? '✓ Copied!' : 'Share Build'}
            </button>
            <button className="clear-button" onClick={resetBuild}>
              Clear Build
            </button>
          </div>
        </div>
      </header>

      {error && (
        <div className="error-banner">
          <span>{error}</span>
          <button className="error-close" onClick={clearError}>×</button>
        </div>
      )}

      <main className="app-main">
        <SideBySideLayout />
      </main>

      {savesOpen && (
        <div className="saved-modal-overlay" onClick={() => setSavesOpen(false)}>
          <div className="saved-modal" onClick={e => e.stopPropagation()}>
            <div className="saved-modal-header">
              <h3>Saved Builds</h3>
              <button className="saved-modal-close" onClick={() => setSavesOpen(false)}>✕</button>
            </div>
            <div className="saved-modal-body">
              <SavedBuildsList
                savedBuilds={savedBuilds}
                currentBuild={build}
                onSave={saveCurrentBuild}
                onLoad={loadBuild}
                onDelete={deleteSavedBuild}
                onClose={() => setSavesOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BuildProvider>
      <AppContent />
    </BuildProvider>
  );
}

export default App;
