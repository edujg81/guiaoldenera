import { ApiSkill } from '../types-api';

/**
 * Datos puros de la API /api/skills (catálogo)
 * Fuente de verdad: http://localhost:5176/api/skills
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos (idealSlot, metaTier, etc.) están en officialSkillsData.ts
 */
export const API_SKILLS_DATA: ApiSkill[] = [
  // Datos extraídos de http://localhost:5176/api/skills (muestra real)
  // La API devuelve objetos con: id, name, icon, skillType, level1, level2, level3, statLabels
  // Ejemplo real: { id: 'skill_assault', name: 'Ofensiva', icon: 'icons/hero_skills/skill_assault', skillType: 'Common', level1: {...}, level2: {...}, level3: {...} }
  // Nota: La API devuelve 30 habilidades con sus 3 niveles y subhabilidades
];