import { ApiSpell } from '../types-api';

/**
 * Datos puros de la API /api/spells (catálogo)
 * Fuente de verdad: http://localhost:5176/api/spells
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos (school, rank, category, description, etc.) están en spellsData.ts
 */
export const API_SPELLS_DATA: ApiSpell[] = [
  // Datos extraídos de http://localhost:5176/api/spells (muestra real)
  // La API devuelve objetos con: id, name, school, schoolDisplay, schoolTierText,
  // rank, category, icon, isMasterful, baseNameForSort
  // Ejemplo real: { id: 'day_1_magic_healing_water', name: 'Agua curativa', school: 'day', schoolDisplay: 'Magia de luz solar', schoolTierText: 'Magia de luz solar de rango 1', rank: 1, category: 'Combate mágico', icon: 'icons/hero_magics/day_1_magic_healing_water', isMasterful: false, baseNameForSort: 'Agua curativa' }
];