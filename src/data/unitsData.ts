import { API_UNITS_DATA } from './apiUnitsData';
import { ARBOLEDA_UNITS } from './arboledaData';
import { CISMA_UNITS } from './cismaData';
import { DUNGEON_UNITS } from './dungeonData';
import { ENJAMBRE_UNITS } from './enjambreData';
import { NECROPOLIS_UNITS } from './necropolisData';
import { TEMPLE_UNITS } from './templeData';
import { UNIT_ASSETS_CATALOG } from './unitAssetsData';
import type { FactionId } from './factionDataProvider';
import type { UnitInfo, UnitVariant } from '../types';
import type { ApiUnit, CostEntry, PassiveAbilitie, ActiveAbilitie } from '../types-api';

export type UnitFactionId = FactionId | 'Neutral';

const EDITORIAL_UNITS_BY_FACTION: Record<FactionId, UnitInfo[]> = {
  Mazmorra: DUNGEON_UNITS,
  Templo: TEMPLE_UNITS,
  Foresta: ARBOLEDA_UNITS,
  Necrópolis: NECROPOLIS_UNITS,
  Colmena: ENJAMBRE_UNITS,
  Cisma: CISMA_UNITS,
};

const API_UNITS_BY_ID = new Map(API_UNITS_DATA.map((unit) => [unit.id, unit]));
const UNIT_ASSETS_BY_ID = new Map(UNIT_ASSETS_CATALOG.map((asset) => [asset.unit_id, asset]));

interface NeutralUnitEditorial {
  role: string;
  strengths: string;
  tacticalUsage: string;
  idealMatchup: string;
}

const NEUTRAL_UNIT_EDITORIAL: Record<string, NeutralUnitEditorial> = {
  dragon_upg: {
    role: 'Atacante volador de gran resistencia',
    strengths: 'Golpe de aliento de dragón alcanza también a la criatura situada detrás del objetivo; Golpe rápido evita el contraataque. Es inmune a hechizos de rango IV o inferior y recibe menos daño de ataques físicos y a distancia.',
    tacticalUsage: 'Análisis táctico: alinea el ataque para que el aliento alcance una segunda unidad y aprovecha Golpe rápido para atacar sin recibir contraataque. Su vuelo facilita el acceso a posiciones protegidas.',
    idealMatchup: 'Formaciones compactas en las que el aliento pueda alcanzar varias criaturas y enemigos dependientes de hechizos de rango bajo o medio.',
  },
  dragon: {
    role: 'Atacante volador con daño en línea',
    strengths: 'Golpe de aliento de dragón alcanza también a la criatura situada detrás del objetivo. Es volador e inmune a hechizos de rango III o inferior.',
    tacticalUsage: 'Análisis táctico: busca líneas de ataque que permitan alcanzar una segunda criatura con el aliento y utiliza el vuelo para sortear obstáculos y trampas.',
    idealMatchup: 'Formaciones compactas y ejércitos que dependan de hechizos de rango bajo o medio.',
  },
  animated_armor: {
    role: 'Defensor resistente',
    strengths: 'Reduce en un 60 % el daño cuerpo a cuerpo, a distancia y mágico.',
    tacticalUsage: 'Análisis táctico: empléala para resistir presión de varias fuentes de daño y proteger otras tropas; su perfil defensivo prima sobre la movilidad o el daño especializado.',
    idealMatchup: 'Enemigos que basen su daño en ataques físicos o mágicos directos.',
  },
  avatar: {
    role: 'Combatiente de reposicionamiento',
    strengths: 'Traslación le permite teletransportarse directamente a una casilla de destino, ignorando obstáculos y trampas.',
    tacticalUsage: 'Análisis táctico: usa Traslación para alcanzar posiciones inaccesibles por movimiento normal o para elegir el momento y el lugar del combate cuerpo a cuerpo.',
    idealMatchup: 'Mapas con obstáculos o trampas y enemigos cuya retaguardia sea difícil de alcanzar.',
  },
  coatl: {
    role: 'Atacante volador resistente a la magia',
    strengths: 'Es inmune al daño mágico y los efectos negativos no permanecen sobre él más de una ronda. También puede volar.',
    tacticalUsage: 'Análisis táctico: aprovecha su vuelo para posicionarlo y su resistencia para mantenerlo operativo frente a daño mágico y efectos negativos.',
    idealMatchup: 'Ejércitos que dependan del daño mágico o de efectos negativos prolongados.',
  },
  dragon_hunter: {
    role: 'Especialista contra dragones',
    strengths: 'Inflige un 100 % más de daño a los dragones. Sus ataques aplican Disección, un efecto acumulable que causa daño al inicio del turno del objetivo.',
    tacticalUsage: 'Análisis táctico: prioriza dragones para aprovechar su bonificación y concentra ataques para acumular Disección. Sangre del dragón concede inmunidad total a hechizos hasta el final de la ronda siguiente.',
    idealMatchup: 'Ejércitos con dragones y objetivos que puedan permanecer bajo Disección acumulada.',
  },
  fairy_dragon: {
    role: 'Control y neutralización mágica',
    strengths: 'Combina Traslación, inmunidad a hechizos de rango V o inferior y reducción del maná del héroe enemigo. Burbuja de silencio impide usar aptitudes a los enemigos adyacentes; sus activas disipan efectos o invocaciones.',
    tacticalUsage: 'Análisis táctico: acércate mediante Traslación para silenciar amenazas adyacentes. Reserva Anular para retirar efectos y Desterrar invocaciones para eliminar criaturas invocadas y formaciones temporales.',
    idealMatchup: 'Ejércitos que dependan de aptitudes, hechizos o criaturas invocadas.',
  },
  giant_frog: {
    role: 'Controlador de posición y daño prolongado',
    strengths: 'Escupitajo ablandador aplica veneno acumulable. Salto desplaza a las criaturas adyacentes al aterrizar y Lengua pegajosa atrae a un enemigo a una casilla adyacente.',
    tacticalUsage: 'Análisis táctico: usa Lengua pegajosa para sacar de posición a un objetivo y Salto para alterar grupos cercanos. Mantén el veneno sobre objetivos que puedan sufrir varios turnos de daño.',
    idealMatchup: 'Formaciones agrupadas y objetivos vulnerables al desplazamiento o al daño prolongado.',
  },
  gnat: {
    role: 'Combatiente básico de primera línea',
    strengths: 'Su ficha API no registra aptitudes especiales además del ataque cuerpo a cuerpo.',
    tacticalUsage: 'Análisis táctico: úsalo como presencia de primera línea y valora su despliegue según sus estadísticas canónicas y el resto del ejército.',
    idealMatchup: 'Encuentros en los que se necesite una unidad de contacto sencilla.',
  },
  gorilla: {
    role: 'Atacante de salto y aturdimiento',
    strengths: 'Rrr, ¡salta! permite saltar hasta cuatro casillas e infligir daño básico a enemigos adyacentes. ¡Gran roca, rrr! inflige daño mágico y aturde al objetivo hasta la ronda siguiente.',
    tacticalUsage: 'Análisis táctico: utiliza el salto para alcanzar grupos o cambiar de posición y reserva la roca para interrumpir una amenaza prioritaria con el aturdimiento.',
    idealMatchup: 'Enemigos agrupados o amenazas clave que puedan ser interrumpidas mediante aturdimiento.',
  },
  halfling: {
    role: 'Tirador móvil',
    strengths: 'Puede disparar a cualquier distancia sin penalización de alcance y conserva el daño completo en cuerpo a cuerpo gracias a Duelista. Brincar le permite trasladarse a otra casilla dentro de su rango de movimiento.',
    tacticalUsage: 'Análisis táctico: mantén la presión a distancia y usa Brincar para reposicionarlo. Si queda trabado en melé, Duelista evita la penalización de daño cuerpo a cuerpo.',
    idealMatchup: 'Enemigos vulnerables al fuego a distancia y mapas donde el reposicionamiento mejore sus líneas de tiro.',
  },
  kitten_horn: {
    role: 'Apoyo volador y moral',
    strengths: 'Su habilidad activa aumenta en 3 la moral de todas las criaturas aliadas durante 2 rondas. Además, su vuelo ignora obstáculos y trampas.',
    tacticalUsage: 'Análisis táctico: aprovecha su movilidad para posicionarlo y activa ¡Yupiii! cuando varias tropas aliadas puedan beneficiarse del aumento de moral. Si cae, Posos de locura fuerza a su asesino a atacar a la criatura más cercana.',
    idealMatchup: 'Ejércitos aliados que puedan aprovechar el aumento de moral y mapas con obstáculos o trampas.',
  },
  kitten_skeleton: {
    role: 'Combatiente no muerto de contacto',
    strengths: 'Es un no muerto con ataque cuerpo a cuerpo. La API no registra otras aptitudes especiales para esta unidad.',
    tacticalUsage: 'Análisis táctico: empléalo como unidad de contacto y planifica sus enfrentamientos teniendo en cuenta sus estadísticas canónicas; no se le atribuyen habilidades adicionales.',
    idealMatchup: 'Encuentros en los que convenga una unidad cuerpo a cuerpo sencilla.',
  },
  lich_dragon: {
    role: 'Atacante volador de área y resurrección',
    strengths: 'Golpe cónico daña varias casillas alrededor del objetivo. Absorción ósea potencia sus aptitudes al consumir cadáveres; sus activas infligen daño puro a otras criaturas o restauran y reviven unidades de forma temporal.',
    tacticalUsage: 'Análisis táctico: busca posiciones para maximizar Golpe cónico y cadáveres que consumir con Absorción ósea. Elige entre Apocalipsis óseo y Autorreconstrucción según convenga dañar al resto del campo o recuperar tropas.',
    idealMatchup: 'Batallas con varios cadáveres disponibles y formaciones enemigas agrupadas.',
  },
  mech_guard: {
    role: 'Tirador y controlador de terreno',
    strengths: 'Ataca a cualquier distancia sin penalización de alcance y también conserva el daño cuerpo a cuerpo completo. Bucle temporal devuelve a una criatura terrestre enemiga a su punto inicial y termina su turno.',
    tacticalUsage: 'Análisis táctico: mantén una línea de tiro y coloca Bucle temporal en una ruta terrestre probable para interrumpir el avance. Su defensa mágica reduce el daño mágico recibido.',
    idealMatchup: 'Enemigos terrestres que necesiten avanzar por rutas previsibles y objetivos expuestos al fuego a distancia.',
  },
  trickster: {
    role: 'Atacante de activaciones acumulables',
    strengths: 'Crecimiento de cola le permite actuar una vez adicional después de su turno hasta el final de la batalla; el efecto se acumula.',
    tacticalUsage: 'Análisis táctico: utiliza Crecimiento de cola pronto para disponer de más activaciones durante el resto de la batalla y acumular el efecto. Su ataque es cuerpo a cuerpo y provoca contraataques.',
    idealMatchup: 'Enfrentamientos prolongados en los que pueda acumular activaciones adicionales.',
  },
  peasant: {
    role: 'Unidad de apoyo económico',
    strengths: 'Contribuyente otorga 10 de oro al comienzo del día por cada unidad en su formación.',
    tacticalUsage: 'Análisis táctico: su aporte depende del tamaño de la formación; valora mantenerlo en el ejército cuando el ingreso acumulado compense el coste de reclutamiento y su espacio.',
    idealMatchup: 'Partidas en las que una formación numerosa pueda generar ingresos durante varios días.',
  },
  pixie: {
    role: 'Combatiente volador inmune a la magia',
    strengths: 'Puede volar e ignora obstáculos y trampas; Resistencia absoluta la hace inmune a todo el daño mágico.',
    tacticalUsage: 'Análisis táctico: aprovecha el vuelo para sortear obstáculos y alcanzar posiciones; su inmunidad la protege del daño mágico, pero no implica inmunidad a otros tipos de daño.',
    idealMatchup: 'Ejércitos con daño mágico y mapas donde el vuelo facilite el movimiento.',
  },
  primal_remnant: {
    role: 'Apoyo de purificación y proliferación',
    strengths: 'Purificación de esporas elimina efectos negativos propios y de criaturas amistosas adyacentes. Propagación de la vegetación crea una formación equivalente adyacente, pero el Remanente muere al recibir daño.',
    tacticalUsage: 'Análisis táctico: mantén aliados afectados a su alrededor para aprovechar la purificación y protege al Remanente del daño antes de usar Propagación de la vegetación.',
    idealMatchup: 'Ejércitos aliados afectados por estados negativos y situaciones en que sea posible protegerlo mientras se multiplica.',
  },
  sentinel: {
    role: 'Combatiente volador con recursos por batalla',
    strengths: 'Dispone de cuatro aptitudes activas de un solo uso: curación y purificación, aumento de daño y reducción del daño recibido, teletransporte con daño puro adyacente, o inmunidad temporal a daño mágico y efectos negativos.',
    tacticalUsage: 'Análisis táctico: elige el camino según la necesidad del turno: Arina para restaurar y purificar, Naira para resistir y golpear, Doreath para reposicionarse y dañar a los adyacentes, o Hksmilla para protegerse de magia y efectos negativos.',
    idealMatchup: 'Enfrentamientos en los que la flexibilidad de sus aptitudes de un solo uso responda a amenazas distintas.',
  },
  star_child: {
    role: 'Tiradora de área con teletransporte',
    strengths: 'Puede atacar a distancia, teletransportarse y golpear en área. Lluvia de estrellas selecciona tres casillas y daña también a las criaturas adyacentes.',
    tacticalUsage: 'Análisis táctico: utiliza Traslación para buscar una posición segura, y aprovecha Golpe de área o Lluvia de estrellas cuando haya varios enemigos agrupados. Evita dejarla junto a enemigos si necesitas conservar su ataque a distancia.',
    idealMatchup: 'Formaciones agrupadas y mapas en los que el teletransporte permita elegir la posición de ataque.',
  },
  mummy: {
    role: 'Maldiciones y recuperación de tropas',
    strengths: 'Pestilencia maldice a todas las criaturas enemigas y causa daño puro al inicio de sus turnos. Ansias de muerte activa de inmediato los efectos prolongados del objetivo al atacarlo.',
    tacticalUsage: 'Análisis táctico: Pestilencia aplica su maldición a todo el ejército enemigo. Ataca con Ansias de muerte a objetivos con efectos prolongados para activarlos y agotarlos. Reserva Bendición retorcida para cuando compense disipar los efectos positivos de la propia Momia a cambio de recuperar o revivir unidades.',
    idealMatchup: 'Ejércitos enemigos susceptibles a maldiciones y objetivos que tengan efectos prolongados activos.',
  },
  undead_peasant: {
    role: 'Combatiente que se fortalece con el tiempo',
    strengths: 'Enfurecido mejora sus atributos al comienzo de cada ronda y aumenta en 2 tanto el daño mínimo como el máximo.',
    tacticalUsage: 'Análisis táctico: si la batalla se prolonga, cada ronda aumenta su capacidad ofensiva; procura mantenerlo con vida para aprovechar esa progresión.',
    idealMatchup: 'Combates prolongados en los que pueda beneficiarse de varias mejoras al inicio de ronda.',
  },
  unicorn: {
    role: 'Combatiente de control',
    strengths: 'Golpe cegador impide actuar al objetivo durante un máximo de tres rondas; el efecto termina cuando la criatura cegada recibe daño.',
    tacticalUsage: 'Análisis táctico: aplica Ceguera a una amenaza prioritaria y evita que otros ataques dañen al objetivo antes de aprovechar los turnos de control.',
    idealMatchup: 'Amenazas prioritarias que puedan mantenerse sin recibir daño mientras dura Ceguera.',
  },
};

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
  const formatAbility = (
    ability: PassiveAbilitie | ActiveAbilitie,
    prefix: '[Activa]' | '[Pasiva]',
  ) => {
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

function getNeutralUnitName(unit: ApiUnit): string {
  const assetName = UNIT_ASSETS_BY_ID.get(unit.id)?.nameEs;
  if (assetName) return assetName;
  return unit.localizedName.includes('_name') ? 'Dato no verificado' : unit.localizedName;
}

function getNeutralAttackType(unit: ApiUnit): UnitVariant['attackType'] {
  const abilities = unit.passiveAbilities.map((ability) => ability.name);
  if (abilities.includes('Largo alcance')) return 'Largo alcance';
  if (abilities.includes('Ataque a distancia')) return 'A distancia';
  if (abilities.includes('Ataque cuerpo a cuerpo')) return 'Melé';
}

function getNeutralMovementType(unit: ApiUnit): UnitVariant['movementType'] {
  const abilities = unit.passiveAbilities.map((ability) => ability.name);
  if (abilities.includes('Volador')) return 'Volador';
  if (abilities.includes('Traslación')) return 'Traslación';
  return 'Terrestre';
}

function getNeutralUnitClass(unit: ApiUnit): UnitVariant['unitClass'] {
  const knownClasses: NonNullable<UnitVariant['unitClass']>[] = [
    'Viviente',
    'No muerto',
    'Criatura mágica',
    'Encarnación',
    'Engendro de la Colmena',
    'Dragón',
    'Constructo',
  ];
  return knownClasses.find((unitClass) => unitClass === unit.creatureType.name) ?? 'Viviente';
}

function createNeutralUnit(apiUnit: ApiUnit): UnitInfo {
  const name = getNeutralUnitName(apiUnit);
  const editorial = NEUTRAL_UNIT_EDITORIAL[apiUnit.id];
  if (!editorial) {
    throw new Error(`Missing editorial data for neutral unit "${apiUnit.id}".`);
  }
  const abilities = getApiAbilities(apiUnit);
  const movementType = getNeutralMovementType(apiUnit);
  const attackType = getNeutralAttackType(apiUnit);
  const unitClass = getNeutralUnitClass(apiUnit);
  const variant: UnitVariant = {
    id: apiUnit.id,
    branchLabel: 'Base',
    name,
    nameEn: UNIT_ASSETS_BY_ID.get(apiUnit.id)?.nameEn ?? apiUnit.name,
    subtitle: apiUnit.narrativeDescription || name,
    dwellingName: 'Unidad neutral',
    unitClass,
    movementType,
    attackType,
    squadValue: apiUnit.squadValue,
    cost: getApiCost(apiUnit.costEntries),
    stats: {
      hp: apiUnit.health,
      attack: apiUnit.attack,
      defense: apiUnit.defense,
      damage: `${apiUnit.minDamage}-${apiUnit.maxDamage}`,
      speed: apiUnit.speed,
      initiative: apiUnit.initiative,
      attackType,
      weeklyGrowth: apiUnit.growth ?? 0,
    },
    combatStance: `${attackType ?? 'Tipo de ataque no verificado'} • ${movementType}`,
    abilities,
    strengths: (editorial?.strengths ?? apiUnit.narrativeDescription) || 'Dato no verificado',
    tacticalUsage: (editorial?.tacticalUsage ?? apiUnit.narrativeDescription) || 'Dato no verificado',
    idealMatchup: editorial?.idealMatchup ?? 'Dato no verificado',
    synergyLaws: [],
  };

  return {
    id: apiUnit.id,
    tier: apiUnit.tier,
    name,
    upgradeName: name,
    unitClass,
    movementType,
    attackType,
    squadValue: apiUnit.squadValue,
    dwelling: 'Neutral',
    role: editorial?.role ?? 'Unidad neutral',
    speed: apiUnit.speed,
    combatStance: variant.combatStance,
    abilities,
    strengths: variant.strengths,
    tacticalUsage: variant.tacticalUsage,
    iconName: 'Sparkles',
    variants: { base: variant, branchA: variant, branchB: variant },
    comparison: {
      summary: 'Esta unidad neutral no tiene ramas ni mejoras alternativas.',
      whenToPickA: '',
      whenToPickB: '',
      synergyHeroA: '',
      synergyHeroB: '',
    },
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

export const NEUTRAL_UNITS = API_UNITS_DATA
  .filter((unit) => unit.faction === 'neutral')
  .map(createNeutralUnit)
  .sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name, 'es'));
export const UNITS_BY_UNIT_FACTION: Record<UnitFactionId, UnitInfo[]> = {
  ...UNITS_BY_FACTION,
  Neutral: NEUTRAL_UNITS,
};
export const UNITS_DATA: UnitInfo[] = Object.values(UNITS_BY_FACTION).flat();
export const UNITS_COUNT = API_UNITS_DATA.length;
export const ALL_UNITS_SORTED = [...API_UNITS_DATA].sort(
  (a, b) => b.squadValue - a.squadValue || a.localizedName.localeCompare(b.localizedName),
);

const GUIDE_BY_VARIANT_ID = new Map<string, UnitInfo>();
for (const unit of UNITS_DATA) {
  GUIDE_BY_VARIANT_ID.set(unit.variants.base.id, unit);
  GUIDE_BY_VARIANT_ID.set(unit.variants.branchA.id, unit);
  GUIDE_BY_VARIANT_ID.set(unit.variants.branchB.id, unit);
}

export function getUnitsForFaction(faction: FactionId | string): UnitInfo[] {
  return UNITS_BY_UNIT_FACTION[faction as UnitFactionId] ?? UNITS_BY_FACTION.Mazmorra;
}

export function getUnitWithGuide(id: string): UnitInfo | undefined {
  return GUIDE_BY_VARIANT_ID.get(id);
}

export function getUnitById(id: string): ApiUnit | undefined {
  return API_UNITS_BY_ID.get(id);
}
