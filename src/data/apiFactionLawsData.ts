import rawFactionLaws from './generated/api/faction-laws.json';
import type { ApiFactionLaw } from '../types-api';

export const API_FACTION_LAWS_DATA =
  rawFactionLaws as ApiFactionLaw[];
