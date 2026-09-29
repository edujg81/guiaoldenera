/*import { ApiAbility } from '../types-api';

/**
 * Datos puros de la API /api/abilities (catálogo)
 * Fuente de verdad: http://localhost:5176/api/abilities
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos (effect, faction, creatureType) están en AbilityInfo.
 */
/*export const API_ABILITIES_DATA: ApiAbility[] = [
  // Datos reales de http://localhost:5176/api/abilities
  // Ejemplo: { id: 'angel_ability_1_name', name: 'Refractar y reflejar', abilityType: 'Active', description: '...', rank: 1, energyCost: 1, ... }
];*/
import rawAbilities from './generated/api/abilities.json';
import type { ApiAbility } from '../types-api';

export const API_ABILITIES_DATA =
  rawAbilities as ApiAbility[];