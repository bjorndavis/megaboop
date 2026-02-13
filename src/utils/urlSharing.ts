import { Build } from '../types/game.types';

function encodeParam(key: string, value: string): string {
  return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
}

export function encodeBuildToUrl(build: Build): string {
  if (!build.character) {
    return '';
  }

  const parts: string[] = [];

  parts.push(encodeParam('c', build.character.id));

  if (build.name && build.name.trim()) {
    parts.push(encodeParam('n', build.name.trim()));
  }

  const additionalWeapons = build.weapons.slice(1).map(w => w.id);
  if (additionalWeapons.length > 0) {
    parts.push(encodeParam('w', additionalWeapons.join(',')));
  }

  if (build.tomes.length > 0) {
    parts.push(encodeParam('t', build.tomes.map(t => t.id).join(',')));
  }

  if (build.description && build.description.trim()) {
    parts.push(encodeParam('d', build.description.trim()));
  }

  return parts.join('&');
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
  description?: string;
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
  const description = params.get('d') || undefined;

  return {
    characterId,
    weaponIds,
    tomeIds,
    name,
    description
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
