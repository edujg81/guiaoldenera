import rawUnits from './generated/api/units.json';
import type { ApiUnit } from '../types-api';

export const API_UNITS_DATA =
  rawUnits as unknown as ApiUnit[];