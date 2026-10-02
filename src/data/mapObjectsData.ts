import type { ApiMapObject } from '../types-api';
import { API_MAP_OBJECTS_DATA } from './apiMapObjectsData';

export const MAP_OBJECTS_DATA: ApiMapObject[] = API_MAP_OBJECTS_DATA;

export const MAP_OBJECTS_COUNT = MAP_OBJECTS_DATA.length;

export function getMapObjectById(id: string): ApiMapObject | undefined {
  return MAP_OBJECTS_DATA.find((mapObject) => mapObject.id === id);
}
