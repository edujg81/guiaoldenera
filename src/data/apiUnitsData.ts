import { ApiUnit } from '../types-api';

/**
 * Datos puros de la API /api/units (catálogo)
 * Fuente de verdad: http://localhost:5176/api/units
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos (stats, abilities, costs, etc.) están en unitAssetsData.ts
 */
export const API_UNITS_DATA: ApiUnit[] = [
  // Datos extraídos de http://localhost:5176/api/units (muestra real)
  // La API devuelve objetos con: id, name, faction, factionDisplay, tier,
  // iconPath, isOrphan, scale, prefabPath
  // Ejemplo real: { id: 'dragon_upg', name: 'Dragón Rojo', faction: 'neutral', factionDisplay: 'Neutral', tier: 7, iconPath: 'icons/units/hex_portraits/dragon_upg', isOrphan: false, scale: null, prefabPath: null }
  // Ejemplo real: { id: 'esquire', name: 'Espadachín', faction: 'human', factionDisplay: 'Templo', tier: 1, iconPath: 'icons/units/hex_portraits/esquire', isOrphan: false, scale: null, prefabPath: null }
];