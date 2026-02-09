// Generate consistent colored placeholders based on item ID
export function generatePlaceholder(id: string, type: 'character' | 'weapon' | 'tome'): string {
  // Color palettes for each type
  const palettes = {
    character: [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
      '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788'
    ],
    weapon: [
      '#E63946', '#457B9D', '#2A9D8F', '#E76F51', '#F4A261',
      '#264653', '#8D5B4C', '#6A4C93', '#1982C4', '#8AC926'
    ],
    tome: [
      '#9D4EDD', '#7209B7', '#560BAD', '#3A0CA3', '#4361EE',
      '#4CC9F0', '#06FFA5', '#F72585', '#B5179E', '#480CA8'
    ]
  };

  // Simple hash function to get consistent color
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }

  const palette = palettes[type];
  const colorIndex = Math.abs(hash) % palette.length;

  return palette[colorIndex];
}
