import { ApiBuilding } from '../types-api';

/**
 * Datos puros de la API /api/buildings (catálogo)
 * Fuente de verdad: http://localhost:5176/api/buildings
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos (costs, effects, requirements, recruitableUnits, upgradeOptions) están en BuildingInfo.
 */
export const API_BUILDINGS_DATA: ApiBuilding[] = [
  // Datos reales de http://localhost:5176/api/buildings
  // Ejemplo: { id: 'demon_Build_Main_L1', name: 'Corazón del colmenar', faction: 'demon', factionDisplay: 'Colmena', description: '...', iconPath: '...', costs: [...], effects: null, requirements: null, ... }
];