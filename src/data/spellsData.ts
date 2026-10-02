import type { ApiSpell } from '../types-api';
import type { GuideSpell, RecommendedSpell, SpellLevelInfo } from '../types';
import { API_SPELLS_DATA } from './apiSpellsData';
import { DAYLIGHT_SPELL_GUIDE } from './spells/daylightSpells';
import { NIGHTSHADE_SPELL_GUIDE } from './spells/nightshadeSpells';
import { PRIMAL_SPELL_GUIDE } from './spells/primalSpells';
import { ARCANE_SPELL_GUIDE } from './spells/arcaneSpells';
import { NEUTRAL_SPELL_GUIDE } from './spells/neutralSpells';

const GUIDE_SPELLS: GuideSpell[] = [
  ...DAYLIGHT_SPELL_GUIDE,
  ...NIGHTSHADE_SPELL_GUIDE,
  ...PRIMAL_SPELL_GUIDE,
  ...ARCANE_SPELL_GUIDE,
  ...NEUTRAL_SPELL_GUIDE,
];

const GUIDE_BY_ID = new Map(GUIDE_SPELLS.map((guide) => [guide.id, guide]));
const API_BY_ID = new Map(API_SPELLS_DATA.map((spell) => [spell.id, spell]));

function stripMarkup(text: string | null | undefined): string {
  return (text ?? '').replace(/<[^>]+>/g, '');
}

function buildLevels(spell: ApiSpell): SpellLevelInfo[] {
  return spell.levels.map((level) => ({
    level: level.level as 1 | 2 | 3 | 4,
    title: `Nivel ${level.level}`,
    manaCost: level.manaCost,
    effect: stripMarkup(level.description),
    keyBonus: stripMarkup(level.bonusDescription) || '',
    upgradeCost: {
      dust: level.starDustCost ?? 0,
      gold: 0,
    },
  }));
}

function mergeSpell(api: ApiSpell, guide: GuideSpell): RecommendedSpell {
  const special = API_BY_ID.get(`${api.id}_special`);
  const firstLevel = api.levels[0];

  return {
    id: api.id,
    name: api.localizedName,
    // The API currently exposes the canonical localized name, not a separate English label.
    nameEn: api.localizedName,
    masterfulName: special?.localizedName,
    tier: api.rank,
    type: api.category,
    school: api.schoolDisplay,
    schoolRequirement: api.schoolTierText,
    priority: guide.priority ?? 'Situacional',
    manaCost: firstLevel?.manaCost ?? 0,
    astrologyCost: guide.astrologyCost,
    astrologyPointsCost: guide.astrologyPointsCost,
    observationCost: guide.observationCost,
    observationPerLevelCost: guide.observationPerLevelCost,
    isConfirmedCost: guide.isConfirmedCost,
    unlockCost: guide.unlockCost ?? {
      formula: 'Sin información editorial',
      gold: 0,
      description: '',
    },
    levels: buildLevels(api),
    effect: stripMarkup(firstLevel?.description),
    tacticalUtility: guide.tacticalUtility ?? '',
    whereToLearn: guide.whereToLearn ?? '',
    isNeutral: guide.isNeutral,
    guildPointsCost: guide.guildPointsCost,
    acquisitionMethod: guide.acquisitionMethod,
  };
}

export const OFFICIAL_SPELLS_DATA: RecommendedSpell[] = GUIDE_SPELLS
  .map((guide) => {
    const api = API_BY_ID.get(guide.id);
    return api ? mergeSpell(api, guide) : null;
  })
  .filter((spell): spell is RecommendedSpell => spell !== null);

// Exports grouped by the guide's editorial sections. Their factual fields are supplied by the API at merge time.
export const DAYLIGHT_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => DAYLIGHT_SPELL_GUIDE.some((g) => g.id === spell.id));
export const NIGHTSHADE_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => NIGHTSHADE_SPELL_GUIDE.some((g) => g.id === spell.id));
export const PRIMAL_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => PRIMAL_SPELL_GUIDE.some((g) => g.id === spell.id));
export const ARCANE_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => ARCANE_SPELL_GUIDE.some((g) => g.id === spell.id));
export const NEUTRAL_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => NEUTRAL_SPELL_GUIDE.some((g) => g.id === spell.id));

export const getSpellWithGuide = (id: string): RecommendedSpell | undefined => {
  const guide = GUIDE_BY_ID.get(id);
  const api = API_BY_ID.get(id);
  return api && guide ? mergeSpell(api, guide) : undefined;
};
