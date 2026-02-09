import { Build } from '../types/game.types';

export function encodeBuildToUrl(build: Build): string {
  if (!build.character) {
    return '';
  }

  const params = new URLSearchParams();

  // Add character
  params.set('c', build.character.id);

  // Add build name
  if (build.name && build.name.trim()) {
    params.set('n', build.name.trim());
  }

  // Add weapons (excluding the starting weapon since it's automatic)
  const additionalWeapons = build.weapons.slice(1).map(w => w.id);
  if (additionalWeapons.length > 0) {
    params.set('w', additionalWeapons.join(','));
  }

  // Add tomes
  if (build.tomes.length > 0) {
    params.set('t', build.tomes.map(t => t.id).join(','));
  }

  return params.toString();
}

export function getShareableUrl(build: Build): string {
  const encoded = encodeBuildToUrl(build);
  if (!encoded) {
    return '';
  }

  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?${encoded}`;
}

export interface BuildFromUrl {
  characterId: string;
  weaponIds: string[];
  tomeIds: string[];
  name?: string;
}

export function decodeBuildFromUrl(): BuildFromUrl | null {
  const params = new URLSearchParams(window.location.search);

  const characterId = params.get('c');
  if (!characterId) {
    return null;
  }

  const weaponsParam = params.get('w');
  const weaponIds = weaponsParam ? weaponsParam.split(',') : [];

  const tomesParam = params.get('t');
  const tomeIds = tomesParam ? tomesParam.split(',') : [];

  const name = params.get('n') || undefined;

  return {
    characterId,
    weaponIds,
    tomeIds,
    name
  };
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
}
