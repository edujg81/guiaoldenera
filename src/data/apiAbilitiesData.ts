import rawAbilities from './generated/api/abilities.json';
import type { ApiAbility } from '../types-api';

export const API_ABILITIES_DATA =
  rawAbilities as ApiAbility[];

export const ABILITIES_COUNT = API_ABILITIES_DATA.length;

export function getAbilityById(id: string): ApiAbility | undefined {
  return API_ABILITIES_DATA.find(a => a.id === id);
}