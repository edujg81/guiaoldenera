import type { AbilityInfo } from '../types-api';
import { API_ABILITIES_DATA } from './apiAbilitiesData';

export const ABILITIES_DATA: AbilityInfo[] = API_ABILITIES_DATA.map((ability) => ({
  ...ability,
  effect: '',
  faction: '',
  creatureType: '',
}));

export const ABILITIES_COUNT = ABILITIES_DATA.length;

export function getAbilityById(id: string): AbilityInfo | undefined {
  return ABILITIES_DATA.find((ability) => ability.id === id);
}
