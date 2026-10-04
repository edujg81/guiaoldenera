import { API_HEROES_DATA } from './apiHeroesData';
import type { HeroWithExtras, ExtrasHero } from '../types';
import type { ApiHero } from '../types-api';
import { API_SKILLS_DATA } from './apiSkillsData';
import { getHeroBuildAudit } from './heroBuildAuditData';

// Tipo de extensión local: solo identidad (para matching) + campos locales exclusivos.
export type HeroExtension = Pick<ApiHero, 'id' | 'name'> & ExtrasHero;

export function getHeroById(id: string): HeroWithExtras | undefined {
  const api = API_HEROES_DATA.find(h => h.id === id);
  if (!api) return undefined;
  return api as HeroWithExtras;
}

export function getHeroesByFaction(faction: string): HeroWithExtras[] {
  const key = faction.toLowerCase();
  return API_HEROES_DATA.filter(h => h.faction.toLowerCase() === key) as HeroWithExtras[];
}

export const ALL_HEROES: HeroWithExtras[] = API_HEROES_DATA as HeroWithExtras[];

// Helper para fusionar API + extensiones locales por facción
export function mergeFactionHeroes(
  apiFactionKey: string,
  localHeroes: HeroExtension[] = []
): HeroWithExtras[] {
  const apiFiltered = getHeroesByFaction(apiFactionKey);
  const localById = new Map(localHeroes.map(h => [h.id, h]));
  const localByName = new Map(localHeroes.map(h => [h.name.toLowerCase(), h]));
  const merged = apiFiltered.map(apiHero => {
    const local = localById.get(apiHero.id) || localByName.get(apiHero.name.toLowerCase());
    const audit = getHeroBuildAudit(apiHero.id);
    const auditOverlay = audit
      ? {
          tierRank: `Tier ${audit.tier}`,
          idealSkillBuild: audit.recommendedSkills
            .map((entry) => API_SKILLS_DATA.find((skill) => skill.id === entry.skillId)?.name)
            .filter((name): name is string => Boolean(name)),
        }
      : {};

    if (local) {
      return { ...apiHero, ...local, ...auditOverlay } as HeroWithExtras;
    }
    return { ...apiHero, ...auditOverlay } as HeroWithExtras;
  });
  const apiIds = new Set(apiFiltered.map(h => h.id));
  const apiNames = new Set(apiFiltered.map(h => h.name.toLowerCase()));
  for (const local of localHeroes) {
    if (!apiIds.has(local.id) && !apiNames.has(local.name.toLowerCase())) {
      merged.push(local as HeroWithExtras);
    }
  }
  return merged;
}

export type { HeroWithExtras } from '../types';