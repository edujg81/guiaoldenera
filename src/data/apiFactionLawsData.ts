//import { ApiLaw, ApiLawLayout, ApiLawGroup, ApiLawInGroup, ApiLawLevel } from '../types-api';

/**
 * Datos puros de la API /api/faction-laws (catálogo)
 * Fuente de verdad: http://localhost:5176/api/faction-laws
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos están en factionLawsData.ts
 */
/*export interface ApiFactionLaw {
  id: string;
  name: string;
  faction: string;
  factionDisplay: string;
  icon: string;
  levels: ApiLawLevel[];
  layout: ApiLawLayout;
}*/

import rawFactionLaws from './generated/api/faction-laws.json';
import type { ApiFactionLaw } from '../types-api';

export const API_FACTION_LAWS_DATA =
  rawFactionLaws as ApiFactionLaw[];
