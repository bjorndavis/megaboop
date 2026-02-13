import { Build } from '../types/game.types';
import { characters } from '../data/characters';
import { weapons } from '../data/weapons';
import { tomes } from '../data/tomes';
import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from 'lz-string';

function encodeParam(key: string, value: string): string {
  return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
}

export function encodeBuildToUrl(build: Build): string {
  if (!build.character) {
    return '';
  }

  const parts: string[] = [];

  // Character: array index as base36
  const cIndex = characters.findIndex(c => c.id === build.character!.id);
  parts.push(`c=${cIndex.toString(36)}`);

  if (build.name && build.name.trim()) {
    parts.push(encodeParam('n', build.name.trim()));
  }

  // Additional weapons: bitmask of array indices, encoded as base36
  const additionalWeapons = build.weapons.slice(1);
  if (additionalWeapons.length > 0) {
    let wMask = 0;
    for (const w of additionalWeapons) {
      const idx = weapons.findIndex(x => x.id === w.id);
      if (idx >= 0) wMask |= (1 << idx);
    }
    parts.push(`w=${wMask.toString(36)}`);
  }

  // Tomes: bitmask of array indices, encoded as base36
  if (build.tomes.length > 0) {
    let tMask = 0;
    for (const t of build.tomes) {
      const idx = tomes.findIndex(x => x.id === t.id);
      if (idx >= 0) tMask |= (1 << idx);
    }
    parts.push(`t=${tMask.toString(36)}`);
  }

  // Description: lz-string compressed
  if (build.description && build.description.trim()) {
    const compressed = compressToEncodedURIComponent(build.description.trim());
    parts.push(`d=${compressed}`);
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

  const cParam = params.get('c');
  if (!cParam) {
    return null;
  }

  const cIndex = parseInt(cParam, 36);
  const isNewFormat = !isNaN(cIndex) && cIndex >= 0 && cIndex < characters.length && /^[0-9a-z]+$/.test(cParam);

  if (isNewFormat) {
    const character = characters[cIndex];
    if (!character) return null;

    // Decode weapons bitmask
    const weaponIds: string[] = [];
    const wParam = params.get('w');
    if (wParam) {
      const wMask = parseInt(wParam, 36);
      for (let i = 0; i < weapons.length; i++) {
        if (wMask & (1 << i)) {
          weaponIds.push(weapons[i].id);
        }
      }
    }

    // Decode tomes bitmask
    const tomeIds: string[] = [];
    const tParam = params.get('t');
    if (tParam) {
      const tMask = parseInt(tParam, 36);
      for (let i = 0; i < tomes.length; i++) {
        if (tMask & (1 << i)) {
          tomeIds.push(tomes[i].id);
        }
      }
    }

    const name = params.get('n') || undefined;

    // Decode lz-string compressed description
    const dParam = params.get('d');
    let description: string | undefined;
    if (dParam) {
      const decompressed = decompressFromEncodedURIComponent(dParam);
      description = decompressed || undefined;
    }

    return {
      characterId: character.id,
      weaponIds,
      tomeIds,
      name,
      description,
    };
  }

  // Old format fallback: string IDs
  const weaponsParam = params.get('w');
  const weaponIds = weaponsParam ? weaponsParam.split(',') : [];

  const tomesParam = params.get('t');
  const tomeIds = tomesParam ? tomesParam.split(',') : [];

  const name = params.get('n') || undefined;
  const description = params.get('d') || undefined;

  return {
    characterId: cParam,
    weaponIds,
    tomeIds,
    name,
    description,
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
