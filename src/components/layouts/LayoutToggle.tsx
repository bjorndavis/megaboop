import './LayoutToggle.css';

interface LayoutToggleProps {
  currentLayout: 'grid' | 'side-by-side';
  onLayoutChange: (layout: 'grid' | 'side-by-side') => void;
}

export function LayoutToggle({ currentLayout, onLayoutChange }: LayoutToggleProps) {
  return (
    <div className="layout-toggle">
      <button
        className={`toggle-button ${currentLayout === 'grid' ? 'active' : ''}`}
        onClick={() => onLayoutChange('grid')}
      >
        Grid Layout
      </button>
      <button
        className={`toggle-button ${currentLayout === 'side-by-side' ? 'active' : ''}`}
        onClick={() => onLayoutChange('side-by-side')}
      >
        Side-by-Side Layout
      </button>
    </div>
  );
}
