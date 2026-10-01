import rawSpells from './generated/api/spells.json';
import type { ApiSpell } from '../types-api';

export const API_SPELLS_DATA =
  rawSpells as ApiSpell[];