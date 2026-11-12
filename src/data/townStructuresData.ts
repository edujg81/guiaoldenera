import { ApiBuilding } from '../types-api';
import { StructureUpgradeLevel, TownStructure, TownStructureCost } from '../types';
import { BUILDINGS_DATA } from './buildingsData';
import { TEMPLE_STRUCTURES } from './structures/templeStructures';
import { NECROPOLIS_STRUCTURES } from './structures/necropolisStructures';
import { GROVE_STRUCTURES } from './structures/groveStructures';
import { HIVE_STRUCTURES } from './structures/hiveStructures';
import { SCHISM_STRUCTURES } from './structures/schismStructures';
import { DUNGEON_STRUCTURES } from './structures/dungeonStructures';

const FACTION_EDITORIAL_PREFIX: Record<string, string> = {
  human: 'temple',
  undead: 'necropolis',
  nature: 'grove',
  demon: 'hive',
  unfrozen: 'schism',
  dungeon: 'dungeon',
};

const FACTION_MAIN_BUILDING: Record<string, string> = {
  temple: 'temple-solar-temple',
  necropolis: 'necropolis-eternal-visage',
  grove: 'grove-grove-palace',
  hive: 'hive-apiarys-heart',
  schism: 'schism-abyssal-remnant',
  dungeon: 'dungeon-byzantine-palace',
};

const EDITORIAL_SPECIAL_BUILDINGS: Record<string, string> = {
  human_Build_Intelligence_Academy_L1: 'temple-scouting-skyship',
  human_Build_Training_Range_L1: 'temple-guild-six-winds',
  human_Build_Golden_Calf_L1: 'temple-golden-calf',
  undead_Build_Skeleton_Converter_L1: 'necropolis-undead-transformer',
  undead_Build_Well_Of_Souls_L1: 'necropolis-well-of-souls',
  undead_Build_Gaping_Maw_L1: 'necropolis-everserpent',
  nature_Build_Spring_of_Life_L1: 'grove-grail-sanctuary',
  demon_Build_Eternal_Flame_L1: 'hive-grail-sanctuary',
  unfrozen_Build_Frigid_Firmament_L1: 'schism-grail-sanctuary',
  dungeon_Build_Gymnasium_L1: 'dungeon-gymnasium',
  dungeon_Build_Spy_Network_L1: 'dungeon-grail-sanctuary',
};

const STRUCTURE_CATEGORIES: TownStructure['category'][] = [
  'Cívica y Economía',
  'Fortificaciones',
  'Magia & Cofradía',
  'Moradas de Criaturas',
  'Estructuras Especiales de Facción',
];

const EDITORIAL_STRUCTURES = [
  ...TEMPLE_STRUCTURES,
  ...NECROPOLIS_STRUCTURES,
  ...GROVE_STRUCTURES,
  ...HIVE_STRUCTURES,
  ...SCHISM_STRUCTURES,
  ...DUNGEON_STRUCTURES,
];

function getStructureCategory(building: ApiBuilding): TownStructure['category'] {
  switch (building.category) {
    case 'hires':
      return 'Moradas de Criaturas';
    case 'walls':
      return 'Fortificaciones';
    case 'magicGuilds':
      return 'Magia & Cofradía';
    case 'mains':
    case 'taverns':
    case 'markets':
    case 'artifactMarkets':
    case 'banks':
      return 'Cívica y Economía';
    default:
      return 'Estructuras Especiales de Facción';
  }
}

function getGroupKey(building: ApiBuilding): string {
  if (building.category === 'hires') {
    const tier = building.id.match(/_Build_Tier_(\d+)_/i)?.[1];
    return `${building.faction}:hires:${tier ?? building.id}`;
  }
  if (['mains', 'magicGuilds', 'walls'].includes(building.category)) {
    return `${building.faction}:${building.category}`;
  }
  return building.id;
}

function getBuildingLevel(building: ApiBuilding): number {
  return building.level;
}

function getCost(building: ApiBuilding): TownStructureCost {
  const cost: TownStructureCost = {};
  const resourceKeys: Record<string, keyof TownStructureCost> = {
    gold: 'gold',
    wood: 'wood',
    ore: 'ore',
    gemstones: 'gems',
    crystals: 'crystal',
    mercury: 'mercury',
    dust: 'alchemicalDust',
    graal: 'grail',
  };

  for (const item of building.costs ?? []) {
    const key = resourceKeys[item.resourceName];
    if (key) cost[key] = (cost[key] ?? 0) + item.amount;
  }
  return cost;
}

function getEditorialStructure(building: ApiBuilding): TownStructure | undefined {
  const prefix = FACTION_EDITORIAL_PREFIX[building.faction];
  if (!prefix) return undefined;

  const mappedSpecialId = EDITORIAL_SPECIAL_BUILDINGS[building.id];
  if (mappedSpecialId) {
    return EDITORIAL_STRUCTURES.find((structure) => structure.id === mappedSpecialId);
  }

  if (building.category === 'mains') {
    const mainId = FACTION_MAIN_BUILDING[prefix];
    return EDITORIAL_STRUCTURES.find((structure) => structure.id === mainId);
  }

  if (building.category === 'hires') {
    const tier = Number(building.id.match(/_Build_Tier_(\d+)_/i)?.[1]);
    return EDITORIAL_STRUCTURES.find(
      (structure) =>
        structure.id.startsWith(`${prefix}-`) &&
        structure.category === 'Moradas de Criaturas' &&
        structure.tier === tier,
    );
  }

  let suffix: string | undefined;
  if (building.category === 'walls') suffix = 'fortifications';
  else if (building.category === 'magicGuilds') suffix = 'mage-guild';
  else if (building.category === 'taverns') suffix = 'tavern';
  else if (building.category === 'markets') suffix = 'marketplace';
  else if (building.category === 'artifactMarkets') suffix = 'artifact-merchant';
  else if (building.category === 'banks') {
    if (building.id.includes('Treasury')) suffix = 'treasury';
    else if (building.id.includes('Resource_Depot_level_2')) suffix = 'alchemical-silo';
    else if (building.id.includes('Resource_Depot')) suffix = 'resource-silo';
    else if (building.id.includes('_Bank_')) suffix = 'bank';
  }

  return suffix
    ? EDITORIAL_STRUCTURES.find((structure) => structure.id === `${prefix}-${suffix}`)
    : undefined;
}

function toUpgradeLevel(building: ApiBuilding, editorial?: TownStructure): StructureUpgradeLevel {
  const editorialLevel = editorial?.upgradeLevels?.find(
    (level) => level.level === getBuildingLevel(building),
  );
  return {
    level: getBuildingLevel(building),
    name: building.name,
    nameEn: editorialLevel?.nameEn,
    apiIconPath: building.iconPath,
    cost: getCost(building),
    prerequisites: (building.requirements ?? []).map((requirement) => requirement.buildingName),
    description: building.description,
    effects: building.effects ?? editorialLevel?.effects ?? [],
    bonusIncome: editorialLevel?.bonusIncome,
    growthBonus: editorialLevel?.growthBonus,
    defenseBonus: editorialLevel?.defenseBonus,
    strategicTip: editorialLevel?.strategicTip,
  };
}

function toTownStructure(buildings: ApiBuilding[]): TownStructure {
  const sortedBuildings = [...buildings].sort((a, b) => getBuildingLevel(a) - getBuildingLevel(b));
  const firstBuilding = sortedBuildings[0];
  const editorial = getEditorialStructure(firstBuilding);
  const requirements = firstBuilding.requirements ?? [];
  const apiRecruitableUnits = sortedBuildings.flatMap((building) =>
    (building.recruitableUnits ?? []).map((unit) => ({
      name: unit.unitName,
      iconPath: unit.iconPath,
      buildingLevel: getBuildingLevel(building),
    })),
  );
  const apiUpgradeOptions = sortedBuildings.flatMap((building) =>
    (building.upgradeOptions ?? []).map((option) => option.description),
  );
  const upgradeLevels = sortedBuildings.length > 1
    ? sortedBuildings.map((building) => toUpgradeLevel(building, editorial))
    : undefined;

  return {
    id: editorial?.id ?? firstBuilding.id,
    name: firstBuilding.name,
    nameEn: editorial?.nameEn ?? firstBuilding.name,
    category: getStructureCategory(firstBuilding),
    faction: firstBuilding.factionDisplay,
    tier: firstBuilding.category === 'hires'
      ? Number(firstBuilding.id.match(/_Build_Tier_(\d+)_/i)?.[1])
      : editorial?.tier,
    unitRecruited: editorial?.unitRecruited,
    unitRecruitedBase: editorial?.unitRecruitedBase,
    dwellingUpgradeCost: sortedBuildings.length > 1 && firstBuilding.category === 'hires'
      ? getCost(sortedBuildings[1])
      : editorial?.dwellingUpgradeCost,
    unitUpgrades: editorial?.unitUpgrades,
    cost: getCost(firstBuilding),
    prerequisites: requirements.map((requirement) => requirement.buildingName),
    prerequisiteIds: requirements.map((requirement) => requirement.buildingId),
    apiBuildingIds: sortedBuildings.map((building) => building.id),
    apiDescription: firstBuilding.description,
    apiIconPath: firstBuilding.iconPath,
    apiEffects: firstBuilding.effects ?? [],
    apiRecruitableUnits: apiRecruitableUnits.length > 0 ? apiRecruitableUnits : undefined,
    apiUpgradeOptions: apiUpgradeOptions.length > 0 ? apiUpgradeOptions : undefined,
    effects: [...(firstBuilding.effects ?? []), ...(editorial?.effects ?? [])],
    strategicTip: editorial?.strategicTip ?? 'Dato no verificado',
    timingRecommendation: editorial?.timingRecommendation ?? 'Dato no verificado',
    isFactionUnique: getStructureCategory(firstBuilding) === 'Estructuras Especiales de Facción',
    upgradeLevels,
  };
}

function getFactionBuildings(factionName: string): ApiBuilding[] {
  const factionMap: Record<string, string> = {
    Templo: 'human',
    Necrópolis: 'undead',
    Foresta: 'nature',
    Colmena: 'demon',
    Cisma: 'unfrozen',
    Mazmorra: 'dungeon',
  };
  const faction = factionMap[factionName] ?? 'dungeon';
  const groupedBuildings = new Map<string, ApiBuilding[]>();

  for (const building of BUILDINGS_DATA) {
    if (building.faction !== faction) continue;
    const key = getGroupKey(building);
    const group = groupedBuildings.get(key) ?? [];
    group.push(building);
    groupedBuildings.set(key, group);
  }

  return [...groupedBuildings.values()]
    .map((group) => [...group].sort((a, b) => getBuildingLevel(a) - getBuildingLevel(b)))
    .sort((a, b) => {
      const categoryDifference =
        STRUCTURE_CATEGORIES.indexOf(getStructureCategory(a[0])) -
        STRUCTURE_CATEGORIES.indexOf(getStructureCategory(b[0]));
      if (categoryDifference !== 0) return categoryDifference;
      return (Number(a[0].id.match(/_Build_Tier_(\d+)_/i)?.[1]) || 0) -
        (Number(b[0].id.match(/_Build_Tier_(\d+)_/i)?.[1]) || 0);
    })
    .flat();
}

export const TOWN_STRUCTURES_DATA: TownStructure[] = [...new Set(
  BUILDINGS_DATA.map((building) => building.factionDisplay),
)].flatMap((factionName) => {
  const groups = new Map<string, ApiBuilding[]>();
  for (const building of BUILDINGS_DATA.filter((item) => item.factionDisplay === factionName)) {
    const key = getGroupKey(building);
    const group = groups.get(key) ?? [];
    group.push(building);
    groups.set(key, group);
  }
  return [...groups.values()].map(toTownStructure);
}).concat(
  EDITORIAL_STRUCTURES.filter(
    (editorial) => !BUILDINGS_DATA.some((building) => getEditorialStructure(building)?.id === editorial.id),
  ),
);

export function getStructuresForFaction(factionName: string): TownStructure[] {
  const factionStructures = getFactionBuildings(factionName)
    .reduce<TownStructure[]>((structures, building, index, buildings) => {
      const key = getGroupKey(building);
      if (index > 0 && getGroupKey(buildings[index - 1]) === key) return structures;
      const group = buildings.filter((candidate) => getGroupKey(candidate) === key);
      structures.push(toTownStructure(group));
      return structures;
    }, []);
  const factionMap: Record<string, string> = {
    Templo: 'human',
    Necrópolis: 'undead',
    Foresta: 'nature',
    Colmena: 'demon',
    Cisma: 'unfrozen',
    Mazmorra: 'dungeon',
  };
  const editorialPrefix = FACTION_EDITORIAL_PREFIX[factionMap[factionName] ?? 'dungeon'];
  const matchedEditorialIds = new Set(factionStructures.map((structure) => structure.id));
  const editorialOnly = EDITORIAL_STRUCTURES.filter(
    (structure) =>
      structure.id.startsWith(`${editorialPrefix}-`) &&
      !matchedEditorialIds.has(structure.id),
  );

  return [...factionStructures, ...editorialOnly].sort((a, b) => {
    const categoryDifference =
      STRUCTURE_CATEGORIES.indexOf(a.category) - STRUCTURE_CATEGORIES.indexOf(b.category);
    if (categoryDifference !== 0) return categoryDifference;
    return (a.tier ?? 0) - (b.tier ?? 0);
  });
}

export function getDwellingForTier(factionName: string, tier: number): TownStructure | undefined {
  return getStructuresForFaction(factionName).find(
    (structure) =>
      structure.category === 'Moradas de Criaturas' &&
      structure.tier === tier,
  );
}
