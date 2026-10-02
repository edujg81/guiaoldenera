import rawHeroes from './generated/api/heroes.json';
import type { ApiHero } from '../types-api';

export const API_HEROES_DATA =
  rawHeroes as ApiHero[];

export const API_HEROES_COUNT = API_HEROES_DATA.length;

export function getApiHeroById(id: string): ApiHero | undefined {
  return API_HEROES_DATA.find(h => h.id === id);
}
