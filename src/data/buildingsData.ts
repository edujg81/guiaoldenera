import type { ApiBuilding } from '../types-api';
import { API_BUILDINGS_DATA } from './apiBuildingsData';

export const BUILDINGS_DATA: ApiBuilding[] = API_BUILDINGS_DATA;

export const BUILDINGS_COUNT = BUILDINGS_DATA.length;

export function getBuildingById(id: string): ApiBuilding | undefined {
  return BUILDINGS_DATA.find((building) => building.id === id);
}
