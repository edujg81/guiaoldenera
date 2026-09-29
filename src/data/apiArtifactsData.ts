import { ApiArtifact } from '../types-api';

/**
 * Datos puros de la API /api/artifacts (catálogo)
 * Fuente de verdad: http://localhost:5176/api/artifacts
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos (isOrphan, prefabPath, faction, idealSlot, metaTier, synergyTags) están en ArtifactInfo.
 */
export const API_ARTIFACTS_DATA: ApiArtifact[] = [
  // Datos reales de http://localhost:5176/api/artifacts
  // Ejemplo: { id: 'beelzebubs_blessing_heartbeat_artifact', name: 'Latido', rarity: 'legendary', slot: 'armor', ... }
];