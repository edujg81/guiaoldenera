import rawMapObjects from './generated/api/map-objects.json';
import type { ApiMapObject } from '../types-api';

export const API_MAP_OBJECTS_DATA =
  rawMapObjects as unknown as ApiMapObject[];