import type { ArtifactInfo } from '../types-api';
import { API_ARTIFACTS_DATA } from './apiArtifactsData';

export const ARTIFACTS_DATA: ArtifactInfo[] = API_ARTIFACTS_DATA.map((artifact) => ({
  ...artifact,
  isOrphan: false,
  prefabPath: null,
  faction: '',
  idealSlot: '',
  metaTier: '',
  synergyTags: [],
}));

export const ARTIFACTS_COUNT = ARTIFACTS_DATA.length;

export function getArtifactById(id: string): ArtifactInfo | undefined {
  return ARTIFACTS_DATA.find((artifact) => artifact.id === id);
}
