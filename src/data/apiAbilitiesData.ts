import rawAbilities from './generated/api/abilities.json';
import type { ApiAbility } from '../types-api';

export const API_ABILITIES_DATA =
  rawAbilities as ApiAbility[];