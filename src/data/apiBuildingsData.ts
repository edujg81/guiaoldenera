import rawBuildings from './generated/api/buildings.json';
import type { ApiBuilding } from '../types-api';

export const API_BUILDINGS_DATA =
  rawBuildings as ApiBuilding[];