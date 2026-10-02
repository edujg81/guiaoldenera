import type { SubclassInfo, GuideSubclass } from '../types';
import { API_SUBCLASSES_DATA } from './apiSubclassesData';

const GUIDE_SUBCLASSES: GuideSubclass[] = [
  {
    "id": "sub_class_dungeon_might_1",
    "recommendedHeroes": [
      "Enatee",
      "Devir, hijo de Devir",
      "Tellaris el Traicionado",
      "Mouaren",
      "Gleard el Gris"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Ideal para Señores Supremos que buscan aniquilar pilas enemigas de un solo impacto. Duplicar el ataque convierte el asalto del ejército de Mazmorra en una fuerza imparable en el combate decisivo.",
    "synergyNotes": "Combina de forma devastadora con tropas de alto daño base como Danzantes de Ónice, Minotauros e Hidras de las Cavernas."
  },
  {
    "id": "sub_class_dungeon_might_2",
    "recommendedHeroes": [
      "Kieran",
      "Creta, hija de Navarr",
      "Rhea",
      "Aguijón",
      "Devir, hijo de Devir"
    ],
    "tacticalTier": "Tier A",
    "strategicAnalysis": "Excelente contra facciones que dependen de daño masivo a distancia o asaltos rápidos. Permite a las Hidras y Trogloditas absorber asedios completos con bajas mínimas.",
    "synergyNotes": "Permite tanquear torres de asedio y contraataques enemigos con pérdidas prácticamente nulas."
  },
  {
    "id": "sub_class_dungeon_magic_1",
    "recommendedHeroes": [
      "Zakron el Grande",
      "Typhona",
      "Kelarr, hijo de Navarr",
      "Motley",
      "Lodos"
    ],
    "tacticalTier": "Tier S+",
    "strategicAnalysis": "La subclase mágica definitiva de Mazmorra. Convierte a héroes como Zakron o Typhona en bombarderos mágicos capaces de barrer la mitad del ejército rival en el Turno 1 con hechizos en área.",
    "synergyNotes": "Sinergia brutal con la estrategia de Dragón Negro + Armageddon, amplificando el daño del cataclismo a cifras astronómicas."
  },
  {
    "id": "sub_class_dungeon_magic_2",
    "recommendedHeroes": [
      "Glastor",
      "Ylwari",
      "Rauktol el Soleado",
      "Hermana Deira"
    ],
    "tacticalTier": "Tier A (Económica)",
    "strategicAnalysis": "Magnífica en mapas gigantes de largo desarrollo o héroes de apoyo económico. +10.000 de oro al día asegura costear todas las moradas de Dragones Negros y ejércitos en múltiples ciudades.",
    "synergyNotes": "Combina perfectamente con Leyes de Prosperidad y el Banco/Tesorería de Alvar."
  },
  {
    "id": "sub_class_human_might_1",
    "recommendedHeroes": [
      "Viejo Lord Mandall",
      "Lord Edgar",
      "Leon Dedos Pegajosos",
      "Avis el Hereje"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Otorga una presión ofensiva constante cada turno sin coste de recursos. En Old Lord Mandall, la amplificación de daño de su especialidad combinada con los +200 de daño aniquila criaturas de tier alto al instante.",
    "synergyNotes": "Ideal para combates rápidos donde el héroe actúa como una unidad de aniquilación adicional."
  },
  {
    "id": "sub_class_human_might_2",
    "recommendedHeroes": [
      "Kestrel",
      "Keandra",
      "John Johnson",
      "Lord Edgar",
      "Aeos la Exaltada"
    ],
    "tacticalTier": "Tier S+",
    "strategicAnalysis": "Elimina el factor aleatorio del rango de daño a favor absoluto del jugador en cada intercambio físico.",
    "synergyNotes": "Multiplica la efectividad de los Tiradores de Kestrel, la Caballería de Keandra y las Égidas del Sol de John Johnson."
  },
  {
    "id": "sub_class_human_magic_1",
    "recommendedHeroes": [
      "Lia la Desatada",
      "Zenith",
      "Nadir",
      "Anastasia la Dócil"
    ],
    "tacticalTier": "Tier S (Anti-Mago)",
    "strategicAnalysis": "La herramienta definitiva contra Brujos y Nigromantes centrados en magia ofensiva.",
    "synergyNotes": "Desactiva el control de masas y los reinicios mágicos de los rivales, encajando a la perfección con la purga de maná de Lia."
  },
  {
    "id": "sub_class_human_magic_2",
    "recommendedHeroes": [
      "Julius",
      "Pip",
      "Elias el Alegre",
      "Clarissa",
      "Vesper"
    ],
    "tacticalTier": "Tier S+",
    "strategicAnalysis": "Rompe la economía de recursos mágicos permitiendo lanzar hechizos de máximo calibre en cada ronda sin preocuparse por la reserva.",
    "synergyNotes": "Permite invocar elementos y usar resurrección masiva continuamente turno tras turno. Julius con Resistencia inicial y Pip con ganancia de XP acelerada son los mejores candidatos."
  },
  {
    "id": "sub_class_nature_might_2",
    "recommendedHeroes": [
      "Octavia",
      "Mreowa",
      "Gorel Punta de Lanza",
      "Colajengibre"
    ],
    "tacticalTier": "Tier S+",
    "strategicAnalysis": "Multiplica el daño crítico de todas las tropas de la Arboleda y acelera la activación de habilidades activas de facción.",
    "synergyNotes": "Sinergia extrema con faunos arqueros, ninfas iriyad, herbomantes y qilins celestiales."
  },
  {
    "id": "sub_class_nature_might_1",
    "recommendedHeroes": [
      "Viejo Peregrino",
      "Faleor",
      "Eith",
      "Tía Daliar",
      "Seductora Sh'a"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Convierte al héroe en una pieza de control de multitudes física de primer orden con sustento grupal.",
    "synergyNotes": "Permite limpiar grupos compactos de infantería enemiga sin depender de maná."
  },
  {
    "id": "sub_class_nature_magic_2",
    "recommendedHeroes": [
      "Vatawna",
      "Aeliniel",
      "Halon",
      "Glacia"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Capacidad de bombardeo mágico dual devastadora para controlar el tablero.",
    "synergyNotes": "Combina con hechizos de relámpago en cadena y vendaval."
  },
  {
    "id": "sub_class_nature_magic_1",
    "recommendedHeroes": [
      "Anciano Tss'kish",
      "Suli",
      "Vim",
      "Echolily",
      "El juglar"
    ],
    "tacticalTier": "Tier A+",
    "strategicAnalysis": "Excelente para batallas de desgaste donde el avatar absorbe todo el daño pesado.",
    "synergyNotes": "Protege las líneas traseras silvanas frente a asaltos voladores."
  },
  {
    "id": "sub_class_undead_might_2",
    "recommendedHeroes": [
      "Baluarte",
      "Onkos",
      "Zam"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Drena la vitalidad del ejército rival mientras las hordas de no-muertos resisten.",
    "synergyNotes": "Especialmente demoledor contra facciones con grandes acumulaciones de tropas de nivel 1-3."
  },
  {
    "id": "sub_class_undead_might_1",
    "recommendedHeroes": [
      "Rey de reyes",
      "Baluarte",
      "Zam"
    ],
    "tacticalTier": "Tier S+",
    "strategicAnalysis": "Inhabilita la sincronización del ejército enemigo mediante pérdidas constantes de turno.",
    "synergyNotes": "Potencia los ataques de los Segadores de Almas y Vampiros del Château."
  },
  {
    "id": "sub_class_undead_magic_1",
    "recommendedHeroes": [
      "Ethric",
      "Laura",
      "Artorius Veritas",
      "Oona Tejesombras"
    ],
    "tacticalTier": "Tier S+",
    "strategicAnalysis": "Genera un efecto bola de nieve masivo donde cada victoria incrementa exponencialmente el tamaño de tu ejército.",
    "synergyNotes": "Permite conquistar mapas enteros sin necesidad de comprar unidades en castillos."
  },
  {
    "id": "sub_class_undead_magic_2",
    "recommendedHeroes": [
      "Mag",
      "Funerella",
      "Lord Rufus"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Garantiza el control de la iniciativa en los primeros instantes críticos del combate.",
    "synergyNotes": "Permite que unidades lentas pero demoledoras como Liches o Dragones de Sombra actúen antes que las tropas rápidas enemigas."
  },
  {
    "id": "sub_class_demons_might_1",
    "recommendedHeroes": [
      "Abigor",
      "Zoran",
      "Tavi"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Satura el campo de batalla con unidades prescindibles que absorben contraataques.",
    "synergyNotes": "Permite a las unidades principales golpear sin recibir represalias enemigas."
  },
  {
    "id": "sub_class_demons_might_2",
    "recommendedHeroes": [
      "Curson",
      "Niev",
      "Goldentongue",
      "Lo",
      "Pauper"
    ],
    "tacticalTier": "Tier S+",
    "strategicAnalysis": "Remata ejércitos pesados con armaduras impenetrables con una velocidad pasmosa.",
    "synergyNotes": "Ideal contra Paladines de Templo o Señores Supremos de Mazmorra."
  },
  {
    "id": "sub_class_demons_magic_1",
    "recommendedHeroes": [
      "Khariseth",
      "Fleu",
      "Groo"
    ],
    "tacticalTier": "Tier A+",
    "strategicAnalysis": "Bloquea eficazmente a tiradores y asedios enemigos.",
    "synergyNotes": "Protege las tropas frágiles mientras los devoradores avanzan."
  },
  {
    "id": "sub_class_demons_magic_2",
    "recommendedHeroes": [
      "Mila",
      "Oriax",
      "Pauper"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Seca la reserva mágica del adversario mientras te mantiene en combustible infinito.",
    "synergyNotes": "Desactiva por completo a magos rivales en batallas prolongadas."
  },
  {
    "id": "sub_class_unfrozen_magic_1",
    "recommendedHeroes": [
      "Nihil",
      "Cuerno Negro",
      "Matastala la Blanca",
      "Jänhei"
    ],
    "tacticalTier": "Tier S+",
    "strategicAnalysis": "Inhabilita las herramientas de control del tablero de los magos rivales.",
    "synergyNotes": "Permite cruzar todo el mapa de combate en el Turno 1 e impactar las líneas enemigas sin frenos."
  },
  {
    "id": "sub_class_unfrozen_might_1",
    "recommendedHeroes": [
      "Mara Mat'ha",
      "El Doncel de Hierro",
      "Wal'kha",
      "Urgo el Cambiante",
      "Mártir Tho"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Capacidad de flanqueo instantáneo que deja obsoletas las murallas y las barreras defensivas.",
    "synergyNotes": "Permite teletransportar infantería pesada directamente sobre arqueros y artillería."
  },
  {
    "id": "sub_class_unfrozen_magic_2",
    "recommendedHeroes": [
      "Grellekh el Traidor",
      "Reina de Hielo Hel'Ghat",
      "Tölketh",
      "Hermana Keiri"
    ],
    "tacticalTier": "Tier S",
    "strategicAnalysis": "Zonifica el mapa forzando al enemigo a maniobrar a través de terrenos letales.",
    "synergyNotes": "Convierte el campo de batalla en una trampa mortal combinada con empujes y aturdimientos."
  },
  {
    "id": "sub_class_unfrozen_might_2",
    "recommendedHeroes": [
      "Dhüvri",
      "Ra'Davok",
      "La Mirada Colectiva",
      "Kwinri",
      "Ulkuth"
    ],
    "tacticalTier": "Tier S+",
    "strategicAnalysis": "El contraataque definitivo contra estrategias de debuff y maldiciones masivas.",
    "synergyNotes": "Convierte a las tropas de Cisma en tanques indestructibles ante cualquier ofensiva de hechizos."
  }
];

const GUIDE_BY_ID = new Map(GUIDE_SUBCLASSES.map((guide) => [guide.id, guide]));

const FACTION_MAP: Record<string, SubclassInfo['faction']> = {
  dungeon: 'Mazmorra',
  human: 'Templo',
  nature: 'Foresta',
  undead: 'Necrópolis',
  unfrozen: 'Cisma',
  demons: 'Colmena',
};

const CLASS_TYPE_MAP: Record<string, SubclassInfo['classType']> = {
  might: 'Poder',
  magic: 'Magia',
};

export const OFFICIAL_SUBCLASSES: SubclassInfo[] = GUIDE_SUBCLASSES
  .map((guide) => {
    const api = API_SUBCLASSES_DATA.find((item) => item.id === guide.id);
    if (!api) return null;

    return {
      id: api.id,
      name: api.name,
      nameEn: api.name,
      faction: FACTION_MAP[api.faction],
      baseClass: api.classDisplay,
      classType: CLASS_TYPE_MAP[api.classType],
      bonusTitle: api.description,
      bonusEffect: api.description,
      requiredSkills: api.requiredSkills.map((skill) => ({
        name: skill.skillName,
        nameEn: skill.skillName,
        tier: 'Experta' as const,
      })),
      recommendedHeroes: guide.recommendedHeroes ?? [],
      tacticalTier: guide.tacticalTier ?? 'Tier A',
      strategicAnalysis: guide.strategicAnalysis ?? '',
      synergyNotes: guide.synergyNotes ?? '',
    };
  })
  .filter((item): item is SubclassInfo => item !== null);

export const getSubclassWithGuide = (id: string): SubclassInfo | undefined => {
  return OFFICIAL_SUBCLASSES.find((subclass) => subclass.id === id);
};
