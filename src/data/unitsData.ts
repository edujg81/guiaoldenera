import { API_UNITS_DATA } from './apiUnitsData';
import { ARBOLEDA_UNITS } from './arboledaData';
import { CISMA_UNITS } from './cismaData';
import { DUNGEON_UNITS } from './dungeonData';
import { ENJAMBRE_UNITS } from './enjambreData';
import { NECROPOLIS_UNITS } from './necropolisData';
import { TEMPLE_UNITS } from './templeData';
import type { FactionId } from './factionDataProvider';
import type { UnitInfo, UnitVariant } from '../types';
import type { ApiUnit, CostEntry, PassiveAbilitie } from '../types-api';

const EDITORIAL_UNITS_BY_FACTION: Record<FactionId, UnitInfo[]> = {
  Mazmorra: DUNGEON_UNITS,
  Templo: TEMPLE_UNITS,
  Foresta: ARBOLEDA_UNITS,
  Necrópolis: NECROPOLIS_UNITS,
  Colmena: ENJAMBRE_UNITS,
  Cisma: CISMA_UNITS,
};

const API_UNITS_BY_ID = new Map(API_UNITS_DATA.map((unit) => [unit.id, unit]));

function getApiUnit(id: string): ApiUnit {
  const apiUnit = API_UNITS_BY_ID.get(id);
  if (!apiUnit) {
    throw new Error(`Missing API unit data for editorial unit "${id}".`);
  }
  return apiUnit;
}

const RESOURCE_COST_KEYS: Record<string, keyof UnitVariant['cost']> = {
  gold: 'gold',
  ore: 'ore',
  wood: 'wood',
  gemstones: 'gems',
  gems: 'gems',
  crystals: 'crystal',
  crystal: 'crystal',
  mercury: 'mercury',
  alchemical_dust: 'alchemicalDust',
};

function getApiAbilities(unit: ApiUnit): string[] {
  const formatAbility = (ability: PassiveAbilitie, prefix: '[Activa]' | '[Pasiva]') => {
    const text = ability.description ? `${ability.name}: ${ability.description}` : ability.name;
    return `${prefix} ${text}`;
  };

  return [
    ...unit.passiveAbilities.map((ability) => formatAbility(ability, '[Pasiva]')),
    ...(unit.activeAbilities ?? []).map((ability) => formatAbility(ability, '[Activa]')),
  ].filter(Boolean);
}

function getApiCost(entries: CostEntry[]): UnitVariant['cost'] {
  const cost: UnitVariant['cost'] = { gold: 0 };

  for (const entry of entries) {
    const key = RESOURCE_COST_KEYS[entry.resourceKey];
    if (!key) {
      throw new Error(`Unsupported API unit cost resource "${entry.resourceKey}".`);
    }
    cost[key] = entry.amount;
  }

  return cost;
}

function mergeVariant(variant: UnitVariant): UnitVariant {
  const apiUnit = getApiUnit(variant.id);

  return {
    ...variant,
    name: apiUnit.localizedName,
    squadValue: apiUnit.squadValue,
    cost: getApiCost(apiUnit.costEntries),
    stats: {
      ...variant.stats,
      hp: apiUnit.health,
      attack: apiUnit.attack,
      defense: apiUnit.defense,
      damage: `${apiUnit.minDamage}-${apiUnit.maxDamage}`,
      speed: apiUnit.speed,
      initiative: apiUnit.initiative,
      weeklyGrowth: apiUnit.growth ?? variant.stats.weeklyGrowth,
    },
    abilities: getApiAbilities(apiUnit),
  };
}

function mergeUnit(guide: UnitInfo): UnitInfo {
  const variants = {
    base: mergeVariant(guide.variants.base),
    branchA: mergeVariant(guide.variants.branchA),
    branchB: mergeVariant(guide.variants.branchB),
  };
  const apiBase = getApiUnit(guide.id);

  return {
    ...guide,
    tier: apiBase.tier,
    name: variants.base.name,
    speed: variants.base.stats.speed,
    squadValue: variants.base.squadValue,
    abilities: variants.base.abilities,
    variants,
  };
}

export const UNITS_BY_FACTION: Record<FactionId, UnitInfo[]> = {
  Mazmorra: EDITORIAL_UNITS_BY_FACTION.Mazmorra.map(mergeUnit),
  Templo: EDITORIAL_UNITS_BY_FACTION.Templo.map(mergeUnit),
  Foresta: EDITORIAL_UNITS_BY_FACTION.Foresta.map(mergeUnit),
  Necrópolis: EDITORIAL_UNITS_BY_FACTION['Necrópolis'].map(mergeUnit),
  Colmena: EDITORIAL_UNITS_BY_FACTION.Colmena.map(mergeUnit),
  Cisma: EDITORIAL_UNITS_BY_FACTION.Cisma.map(mergeUnit),
};

export const UNITS_DATA: UnitInfo[] = Object.values(UNITS_BY_FACTION).flat();
export const UNITS_COUNT = API_UNITS_DATA.length;

const GUIDE_BY_VARIANT_ID = new Map<string, UnitInfo>();
for (const unit of UNITS_DATA) {
  GUIDE_BY_VARIANT_ID.set(unit.variants.base.id, unit);
  GUIDE_BY_VARIANT_ID.set(unit.variants.branchA.id, unit);
  GUIDE_BY_VARIANT_ID.set(unit.variants.branchB.id, unit);
}

export function getUnitsForFaction(faction: FactionId | string): UnitInfo[] {
  return UNITS_BY_FACTION[faction as FactionId] ?? UNITS_BY_FACTION.Mazmorra;
}

export function getUnitWithGuide(id: string): UnitInfo | undefined {
  return GUIDE_BY_VARIANT_ID.get(id);
}

export function getUnitById(id: string): ApiUnit | undefined {
  return API_UNITS_BY_ID.get(id);
}
