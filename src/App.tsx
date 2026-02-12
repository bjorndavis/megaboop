import { useEffect, useState } from 'react';
import { BuildProvider, useBuild } from './context/BuildContext';
import { SideBySideLayout } from './components/layouts/SideBySideLayout';
import { getShareableUrl, copyToClipboard, decodeBuildFromUrl } from './utils/urlSharing';
import { characters } from './data/characters';
import { weapons } from './data/weapons';
import { tomes } from './data/tomes';
import './App.css';

function AppContent() {
  const { build, error, clearError, resetBuild, selectCharacter, addWeapon, addTome, setBuildName, setBuildDescription } = useBuild();
  const [showCopied, setShowCopied] = useState(false);

  // Load build from URL on mount
  useEffect(() => {
    const urlBuild = decodeBuildFromUrl();
    if (urlBuild) {
      // Find character
      const character = characters.find(c => c.id === urlBuild.characterId);
      if (character) {
        selectCharacter(character);

        // Set build name
        if (urlBuild.name) {
          setBuildName(urlBuild.name);
        }

        // Add weapons
        urlBuild.weaponIds.forEach(weaponId => {
          const weapon = weapons.find(w => w.id === weaponId);
          if (weapon) {
            addWeapon(weapon);
          }
        });

        // Add tomes
        urlBuild.tomeIds.forEach(tomeId => {
          const tome = tomes.find(t => t.id === tomeId);
          if (tome) {
            addTome(tome);
          }
        });

        // Set description
        if (urlBuild.description) {
          setBuildDescription(urlBuild.description);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  const handleShare = async () => {
    const url = getShareableUrl(build);
    if (!url) {
      return;
    }

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
