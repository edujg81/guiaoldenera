/*import { ApiMapObject } from '../types-api';

/**
 * Datos puros de la API /api/map-objects (catálogo)
 * Fuente de verdad: http://localhost:5176/api/map-objects
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos (description, narrativeDescription, interactionType) están en MapObjectInfo.
 */
/*export const API_MAP_OBJECTS_DATA: ApiMapObject[] = [
  // Datos reales de http://localhost:5176/api/map-objects
  // Ejemplo: { id: 'abandoned_corpse', name: 'Restos olvidados', description: '...', narrativeDescription: '...', icon: '...', creatureBankInfo: { ... } }
];*/
import rawMapObjects from './generated/api/map-objects.json';
import type { ApiMapObject } from '../types-api';

export const API_MAP_OBJECTS_DATA =
  rawMapObjects as unknown as ApiMapObject[];