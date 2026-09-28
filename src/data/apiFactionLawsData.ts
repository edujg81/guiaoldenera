import { ApiLaw, ApiLawLayout, ApiLawGroup, ApiLawInGroup, ApiLawLevel } from '../types-api';

/**
 * Datos puros de la API /api/faction-laws (catálogo)
 * Fuente de verdad: http://localhost:5176/api/faction-laws
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos están en factionLawsData.ts
 */
export interface ApiFactionLaw {
  id: string;
  name: string;
  faction: string;
  factionDisplay: string;
  icon: string;
  levels: ApiLawLevel[];
  layout: ApiLawLayout;
}

export const API_FACTION_LAWS_DATA: ApiFactionLaw[] = [
  // Datos extraídos de http://localhost:5176/api/faction-laws (muestra real)
  // La API devuelve objetos con: id, name, faction, factionDisplay, icon
  // El detalle (/api/faction-laws/{id}) incluye: levels, layout
  // Ejemplo real: { id: 'fraction_law_demon_1', name: 'Recaudadores de impuestos', faction: 'demon', factionDisplay: 'Colmena', icon: 'icons/fraction_laws/fraction_law_demon_1_icon' }
];