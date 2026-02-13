import { Build } from '../../types/game.types';
import { SavedBuild } from '../../hooks/useSavedBuilds';
import './SavedBuilds.css';

interface Props {
  savedBuilds: SavedBuild[];
  currentBuild: Build;
  onSave: (build: Build) => void;
  onLoad: (build: Build) => void;
  onDelete: (id: string) => void;
  onClose?: () => void; // optional: used by modal to close after load
}

export function SavedBuildsList({ savedBuilds, currentBuild, onSave, onLoad, onDelete, onClose }: Props) {
  const canSave = currentBuild.character !== null;

  function handleLoad(build: Build) {
    onLoad(build);
    onClose?.();
  }

  return (
    <div className="saved-builds-list">
      <button
        className="saved-builds-save-btn"
        disabled={!canSave}
        onClick={() => onSave(currentBuild)}
      >
        💾 Save Current Build
      </button>

      {savedBuilds.length === 0 ? (
        <p className="saved-builds-empty">No saved builds yet.</p>
      ) : (
        savedBuilds.map(entry => (
          <div key={entry.id} className="saved-build-row">
            <div className="saved-build-info">
              <div className="saved-build-name">{entry.name}</div>
              <div className="saved-build-meta">
                {entry.build.character?.name ?? '—'} · {entry.build.weapons.length} weapon{entry.build.weapons.length !== 1 ? 's' : ''} · {entry.build.tomes.length} tome{entry.build.tomes.length !== 1 ? 's' : ''}
              </div>
            </div>
            <button className="saved-build-load-btn" onClick={() => handleLoad(entry.build)}>
              Load
            </button>
            <button className="saved-build-delete-btn" onClick={() => onDelete(entry.id)}>
              ✕
            </button>
          </div>
        ))
      )}
    </div>
  );
}
