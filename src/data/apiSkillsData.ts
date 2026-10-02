import rawSkills from './generated/api/skills.json';
import type { ApiSkill } from '../types-api';

export const API_SKILLS_DATA =
  rawSkills as ApiSkill[];