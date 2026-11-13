import type { ApiSpell } from '../types-api';
import type { GuideSpell, RecommendedSpell, SpellLevelInfo } from '../types';
import { API_SPELLS_DATA } from './apiSpellsData';
import { DAYLIGHT_SPELL_GUIDE } from './spells/daylightSpells';
import { NIGHTSHADE_SPELL_GUIDE } from './spells/nightshadeSpells';
import { PRIMAL_SPELL_GUIDE } from './spells/primalSpells';
import { ARCANE_SPELL_GUIDE } from './spells/arcaneSpells';
import { NEUTRAL_SPELL_GUIDE } from './spells/neutralSpells';
import { matchSpellSchool } from '../utils/spellScalingCalculator';

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

function createApiBasedGuide(api: ApiSpell): GuideSpell {
  const baseEffect = stripMarkup(api.levels[0]?.description).trim();
  const isNeutral =
    api.school.toLowerCase() === 'neutral' ||
    api.schoolDisplay.toLowerCase().includes('neutral');

  return {
    id: api.id,
    priority: 'Dato no verificado',
    tacticalUtility: baseEffect
      ? `${baseEffect}`
      : 'Dato no verificado',
    whereToLearn: 'Dato no verificado',
    unlockCost: {
      formula: 'Dato no verificado',
      gold: 0,
      description: 'Dato no verificado',
    },
    isConfirmedCost: false,
    isNeutral,
  };
}

function mergeSpell(
  api: ApiSpell,
  guide: GuideSpell,
  hasEditorialGuide: boolean,
): RecommendedSpell {
  const special = API_BY_ID.get(`${api.id}_special`);
  const firstLevel = api.levels[0];
  const isNeutralByApi =
    api.school.toLowerCase() === 'neutral' ||
    api.schoolDisplay.toLowerCase().includes('neutral');

  return {
    id: api.id,
    hasEditorialGuide,
    icon: api.icon,
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
      formula: 'Dato no verificado',
      gold: 0,
      description: 'Dato no verificado',
    },
    levels: buildLevels(api),
    effect: stripMarkup(firstLevel?.description),
    tacticalUtility: guide.tacticalUtility ?? 'Dato no verificado',
    whereToLearn: guide.whereToLearn ?? 'Dato no verificado',
    isNeutral: isNeutralByApi || guide.isNeutral === true,
    guildPointsCost: guide.guildPointsCost,
    acquisitionMethod: guide.acquisitionMethod,
  };
}

export const OFFICIAL_SPELLS_DATA: RecommendedSpell[] = API_SPELLS_DATA.map((api) => {
  const guide = GUIDE_BY_ID.get(api.id);
  return mergeSpell(api, guide ?? createApiBasedGuide(api), !!guide);
});

export const DAYLIGHT_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => matchSpellSchool(spell.school, 'Luz'));
export const NIGHTSHADE_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => matchSpellSchool(spell.school, 'Nochesombra'));
export const PRIMAL_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => matchSpellSchool(spell.school, 'Primigenia'));
export const ARCANE_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => matchSpellSchool(spell.school, 'Arcana'));
export const NEUTRAL_SPELLS = OFFICIAL_SPELLS_DATA.filter((spell) => matchSpellSchool(spell.school, 'Neutral'));

export const getSpellWithGuide = (id: string): RecommendedSpell | undefined => {
  const guide = GUIDE_BY_ID.get(id);
  const api = API_BY_ID.get(id);
  return api ? mergeSpell(api, guide ?? createApiBasedGuide(api), !!guide) : undefined;
};
