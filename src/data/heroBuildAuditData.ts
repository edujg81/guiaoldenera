// Auditoría editorial de builds de héroes. Los datos factuales (nombres, efectos, etc.) se resuelven desde la API.
// Las probabilidades son la probabilidad de que la habilidad aparezca al subir de nivel, según olden-era.com/en/heroes.
import { getApiHeroById } from './apiHeroesData';
import { API_SKILLS_DATA } from './apiSkillsData';

export interface HeroBuildSkillAudit { skillId: string; starting: boolean; appearanceChance: number | null; why: string; advancedSubskillId: string | null; advancedWhy: string; expertSubskillId: string | null; expertWhy: string; }
export interface HeroSubclassAudit { id: string; name: string; pursue: boolean; reason: string; requiredSkills: { skillId: string; starting: boolean; appearanceChance: number | null }[]; }
export interface HeroBuildAudit { heroId: string; tier: 'S+'|'S'|'A'|'B'|'C'|'D'; tierReason: string; buildReason: string; recommendedSkills: HeroBuildSkillAudit[]; recommendedSubclass: HeroSubclassAudit; sources: string[]; }

export const HERO_BUILD_AUDIT: Record<string, HeroBuildAudit> = {
  "demon_hero_1": {
    "heroId": "demon_hero_1",
    "tier": "A",
    "tierReason": "Análisis derivado: Niev es una elección fuerte cuando el jugador quiere una presión temprana y un daño de ataque básico que crezca sin depender de una sola subclase. Su especialización de Tiradora es muy real y hace que la fuerza del héroe resida en la conversión de cada ataque de las criaturas en ventaja de combate, aunque no alcanza el nivel más explosivo de los mejores picks del roster.",
    "buildReason": "Análisis derivado: la build recomendada para Niev prioriza Invocar enjambre, Ofensiva y Formación porque su especialización Tiradora convierte el coste de combate y la presión de daño base en la ventaja más útil del héroe. La intención no es jugar a todo, sino maximizar el ataque básico, el tempo y la presencia del enjambre sin diluir la identidad de la build.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Invocar enjambre es la base de la identidad de Niev: convierte el enjambre en apoyo directo de su especialización Tiradora y refuerza el daño de ataque básico del ejército desde la apertura.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "La rama avanzada de Invocar enjambre amplifica la capacidad del ejército para sostener presión y hace más tangible la escalada de daño que Niev necesita para pegar en la fase media.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "La rama experta consolida la ventaja del enjambre y convierte la especialización de Niev en una rotura más consistente cuando el combate se alarga.",
      },
      {
        "skillId": "skill_assault",
        "starting": true,
        "appearanceChance": null,
        "why": "Ofensiva encaja por su efecto real: aumenta el daño de ataque básico de las criaturas amistosas, exactamente lo que más escala con la Tiradora de Niev.",
        "advancedSubskillId": "sub_skill_assault_2",
        "advancedWhy": "La rama avanzada de Ofensiva aumenta el daño de los ataques a distancia y de largo alcance, reforzando el patrón de línea con la composición inicial de Niev.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "La rama experta suma daño directo por unidad y acelera el momento en el que la Tiro tiradora de Niev rompe la formación enemiga.",
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Formación ayuda a mantener la cohesión del ejército cuando Niev ya está atacando en base a daño básico, evitando que la presión caiga al devolverse una vez el enemigo se estabiliza.",
        "advancedSubskillId": "sub_skill_formation_2",
        "advancedWhy": "La rama avanzada de Formación aporta más consistencia a la línea y hace que la escalada del protagonista dependa menos de una sola criatura u oportunidad puntual.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "La rama experta convierte esa coherencia en un coste menor de coordinación y hace más fiable la fase de ataque de Niev en batallas largas.",
      },
      {
        "skillId": "skill_luck",
        "starting": false,
        "appearanceChance": 10,
        "why": "Suerte da más estabilidad a una build de daño puro: para Niev, la especialización Tiradora necesita menos variabilidad cuando la presión de cada ataque debe sostenerse durante varios turnos.",
        "advancedSubskillId": null,
        "advancedWhy": "No hay rama avanzada en esta línea; el valor principal está en reducir la volatilidad de la salida de daño y hacer más predecible la presión del ejército.",
        "expertSubskillId": null,
        "expertWhy": "La mejora experta sigue reforzando esa consistencia, que es especialmente útil cuando la composición de Niev requiere que cada turno cuente.",
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Combate potencia el golpe heroico de Niev y ayuda a convertir el daño de base en un impacto adicional durante los intercambios decisivos.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Esgrima da ataque y defensa, de modo que el héroe no solo pega más, sino que también se mantiene más estable mientras ejecuta su plan de presión.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Golpe sin esfuerzo reduce la carga de concentración, permitiendo que el héroe recurra al golpe heroico con más frecuencia en la secuencia decisiva del combate.",
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Tácticas ayuda a Niev a encajar mejor el posicionamiento y el control del mapa: la especialización Tiradora no gana solo por daño bruto, sino por aprovechar cada distancia y cada línea de ataque.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "La rama avanzada fortalece la ejecución del primer intercambio y mejora la capacidad de iniciar o cerrar el contacto con mejor secuencia de turnos.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "La forma experta encaja con una build que quiere convertir la presión del daño en claridad táctica y no depender solo del valor bruto de cada criatura.",
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 10,
        "why": "Liderazgo aporta más iniciativa y más control del orden de turno, que es importante en una build que quiere que el daño de ataque básico llegue antes si se quiere cerrar la pelea.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa adicional de la rama avanzada hace que Niev mueva antes a la línea y que la presión del enjambre se sienta antes en la batalla.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La rama experta convierte la iniciativa en un flujo más estable, útil cuando la composición necesita romper la formación sin perder control de la secuencia.",
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Logística mejora la capacidad de mapear, explotar y sostener la presión de Niev: la Tiradora puede ser muy buena en combate, pero no lleva mucho valor si no llega antes a los puntos de contacto.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La rama avanzada añade movilidad real en el mapa y mejora la capacidad de ganar espacio y limpiar objetivos antes de que el enemigo se organice.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La rama experta deja la movilidad como una verdadera ventaja competitiva y convierte la presión de Niev en un mejor tempo general del partido.",
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_might_1",
      "name": "Madre de cría",
      "pursue": false,
      "reason": "Análisis derivado: la subclase puede servir como complemento de la Tiradora, pero la recomendación central de Niev no depende de ella; la prioridad está en mantener la lógica de daño básico y de enjambre.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_10": {
    "heroId": "demon_hero_10",
    "tier": "B",
    "tierReason": "Análisis derivado: Fleu tiene un valor real muy claro en control de mapa, movilidad y sostenibilidad, pero no es un héroe de ruptura absoluta del combate. Su especialización de heraldo funciona mejor como pieza de tempo y continuidad que como detonador único, por lo que su tier refleja un rol útil y estable, pero no necesariamente de meta.",
    "buildReason": "Análisis derivado: la build recomendada para Fleu prioriza Invocar enjambre, Logística y Tácticas para que la movilidad y la lectura del mapa sustentan la presión del enjambre. La ruta busca convertir a Fleu en un heraldo que sostenga el juego con mejor inicio y mejor juicio del tablero, en lugar de buscarle una explosividad que la clase no le da por naturaleza.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Invocar enjambre refleja la identidad de Fleu y sienta la base para una fase de mapa más constante y una presión más sostenida con la composición de la Colmena.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "La rama avanzada refuerza la presión del enjambre y refuerza la técnica que mejor encaja con la composición y la especialización del heraldo.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "La rama experta hace que la identidad de facción de Fleu se convierta en un verdadero motor de tempo y no solo en un bonus complementario.",
      },
      {
        "skillId": "skill_logistic",
        "starting": true,
        "appearanceChance": null,
        "why": "Logística es clave para Fleu porque la movilidad del mapa y el recorrido abierto del heraldo son la diferencia entre una presión sostenida y un castigo prematuro.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad extra de la rama avanzada deja más espacio para limpiar objetivos, contestar amenazas y conservar orden de turno en cada tanda.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La rama experta convierte la movilidad en ventaja sólida de tempo y reduce la dependencia del héroe de un único punto de contacto.",
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Tácticas ayuda a Fleu a armonizar el control del mapa con el combate: la lectura del posicionamiento mejora el valor de la circulación del ejército y de la reacción del heraldo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "La rama avanzada da mejor sequencia de turnos y permite convertir el contacto en una decisión más limpia y menos reactiva.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "La versión experta mejora la ejecución del combate y reduce la fricción cuando la composición quiere entrar en choque o salir de él con orden.",
      },
      {
        "skillId": "skill_scouting",
        "starting": false,
        "appearanceChance": 10,
        "why": "Exploración mejora la lectura del mapa, algo esencial para un heraldo que quiere aprovechar la movilidad y mantener la iniciativa en la apertura.",
        "advancedSubskillId": "sub_skill_scouting_2",
        "advancedWhy": "La rama avanzada favorece el control del territorio y devuelve la información necesaria para ordenar la presión del enjambre sin perder tiempo.",
        "expertSubskillId": "sub_skill_scouting_4",
        "expertWhy": "La rama experta sigue reforzando la capacidad de avanzar, reaccionar y mantener el tempo cuando las decisiones del mapa importan más que un único combate aislado.",
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Hechicería elevó la salida de daño mágico y mantiene la función de Fleu más allá del simple soporte, sin perder su perfil de control.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La rama avanzada eleva la traducción del daño mágico y ayuda a cerrar más rápidamente los puntos de todo el mapa cuando la presión ya está consolidada.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La rama experta hace más consistente la presión mágica y eleva la capacidad de Fleu para cerrar combates y respuestas más largas.",
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Sabiduría eleva la calidad del casting de Fleu y hace más eficiente el uso de sus hechizos en cada punto de entrada o de respuesta.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "La rama avanzada permite sostener la dimensión de magia con mejor flujo de recursos y menos dependencia de una sola tirada.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "La rama experta refuerza la puerta de entrada a la fase media y consolida la capacidad de Fleu para sostener mejor la presión total.",
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Magia de batalla convierte la magia de Fleu en un beneficio más directo durante el combate, con un puente útil entre apoyo y daño efectivo del ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "La rama avanzada multiplica la utilidad del poder de hechizo y hace que el combate sea más tolerante a la probabilidad y a la suma de efectos.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "La rama experta da una capa adicional de estabilidad al combate final y mejora la capacidad del heraldo para sostener su plan durante más tiempo.",
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_magic_2",
      "name": "Señor del caos",
      "pursue": false,
      "reason": "Análisis derivado: la subclase puede ser útil si aparece como bonificación natural, pero la prioridad de Fleu es mantener la base de presión, movilidad y lectura del mapa.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_11": {
    "heroId": "demon_hero_11",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Resistente a los elementos: prioriza Invocar enjambre, Resistencia, Magia de batalla, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_resistance",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_magic_1",
      "name": "Progenitor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_12": {
    "heroId": "demon_hero_12",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Brillo encantador: prioriza Invocar enjambre, Economía, Logística, Reclutamiento y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_economy",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_magic_2",
      "name": "Señor del caos",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_13": {
    "heroId": "demon_hero_13",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Punzante: prioriza Invocar enjambre, Magia de nochesombra, Magia de batalla, Resistencia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_night",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_night_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_night_5",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_magic_1",
      "name": "Progenitor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_14": {
    "heroId": "demon_hero_14",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Hijo de todas las madres: prioriza Invocar enjambre, Sabiduría, Magia de batalla, Resistencia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_mastery",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_mastery_2",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_mastery_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_magic_1",
      "name": "Progenitor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_15": {
    "heroId": "demon_hero_15",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Aleteo: prioriza Invocar enjambre, Magia de luz solar, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_day",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_day_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_day_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_magic_2",
      "name": "Señor del caos",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_16": {
    "heroId": "demon_hero_16",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Aquí y allí: prioriza Invocar enjambre, Magia de batalla, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_battlemage",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_magic_2",
      "name": "Señor del caos",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_17": {
    "heroId": "demon_hero_17",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Tejido primigenio: prioriza Invocar enjambre, Magia primigenia, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_primal",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_magic_2",
      "name": "Señor del caos",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_18": {
    "heroId": "demon_hero_18",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Picaduras de pulgas: prioriza Invocar enjambre, Arte de batalla, Ofensiva, Liderazgo y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_formation",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_might_1",
      "name": "Madre de cría",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_2": {
    "heroId": "demon_hero_2",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Al asalto: prioriza Invocar enjambre, Suerte, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_luck",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_might_2",
      "name": "Devorador de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_3": {
    "heroId": "demon_hero_3",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Deseo de aprender: prioriza Invocar enjambre, Percepción, Logística, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 0,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_might_2",
      "name": "Devorador de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_enlightenment",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_4": {
    "heroId": "demon_hero_4",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Vermificación: prioriza Invocar enjambre, Defensa, Resistencia, Reclutamiento y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_protection",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_might_2",
      "name": "Devorador de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_5": {
    "heroId": "demon_hero_5",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Golpe intimidante: prioriza Invocar enjambre, Combate, Ofensiva, Tácticas y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_might_1",
      "name": "Madre de cría",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_6": {
    "heroId": "demon_hero_6",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Proliferación: prioriza Invocar enjambre, Invocar avatar, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_magic_2",
      "name": "Señor del caos",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_7": {
    "heroId": "demon_hero_7",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Carroñera: prioriza Invocar enjambre, Reclutamiento, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_trainer",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_might_2",
      "name": "Devorador de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_8": {
    "heroId": "demon_hero_8",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Presencia inspiradora: prioriza Invocar enjambre, Liderazgo, Ofensiva, Arte de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_leadership",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_might_1",
      "name": "Madre de cría",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_leadership",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "demon_hero_9": {
    "heroId": "demon_hero_9",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Maestro de ajedrez: prioriza Invocar enjambre, Tácticas, Arte de batalla, Logística y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_demons",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_demons_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_demons_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_tactics",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_demons_might_1",
      "name": "Madre de cría",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_1": {
    "heroId": "dungeon_hero_1",
    "tier": "A",
    "tierReason": "Análisis derivado: Enatee tiene un perfil muy sólido y muy realista para una Mazmorra que quiere controlar la línea y evitar el desgaste innecesario. Su especialización de Amenaza serpenteante encaja con una presión constante y con una composición de control, aunque no alcanza la explosividad ni la versatilidad de los mejores picks de facción.",
    "buildReason": "Análisis derivado: la build recomendada para Enatee prioriza la lógica de control de masas, capitalizando su especialización y sus habilidades de protección para convertir la fortaleza defensiva en una ventaja duradera. La prioridad es mantener la presión real del ejército sin caer en una build demasiado rígida o demasiado dependiente de la subclase.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_protection",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 5,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_might_2",
      "name": "Enviado de Lengua de Plata",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_10": {
    "heroId": "dungeon_hero_10",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Deseo de aprender: prioriza Fuerza del Triunvirato, Percepción, Taumaturgia, Logística y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 5,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_magic_1",
      "name": "Heredero de Amelchia",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_enlightenment",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_11": {
    "heroId": "dungeon_hero_11",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Tejehechizos: prioriza Fuerza del Triunvirato, Hechicería, Magia de batalla, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_sorcery",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_magic_1",
      "name": "Heredero de Amelchia",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_12": {
    "heroId": "dungeon_hero_12",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Máscara del sol: prioriza Fuerza del Triunvirato, Taumaturgia, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_wisdom",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_magic_1",
      "name": "Heredero de Amelchia",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_13": {
    "heroId": "dungeon_hero_13",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Danza macabra: prioriza Fuerza del Triunvirato, Reclutamiento, Magia de batalla, Resistencia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_trainer",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 5,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_magic_2",
      "name": "Gran mercader",
      "pursue": true,
      "reason": "Objetivo secundario: merece la pena intentarla si las tiradas tempranas ofrecen sus habilidades raras; no sustituir una habilidad central de la build por forzarla.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_14": {
    "heroId": "dungeon_hero_14",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Carisma: prioriza Fuerza del Triunvirato, Diplomacia, Percepción, Liderazgo y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_diplomacy",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_diplomacy_1",
        "advancedWhy": "Facilita reclutamiento temprano y reduce el coste de convertir neutrales en ejército.",
        "expertSubskillId": "sub_skill_diplomacy_4",
        "expertWhy": "Facilita reclutamiento temprano y reduce el coste de convertir neutrales en ejército."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_magic_1",
      "name": "Heredero de Amelchia",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_15": {
    "heroId": "dungeon_hero_15",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Pudiente: prioriza Fuerza del Triunvirato, Economía, Logística, Reclutamiento y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_economy",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 5,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_magic_2",
      "name": "Gran mercader",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_economy",
          "starting": true,
          "appearanceChance": null
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_16": {
    "heroId": "dungeon_hero_16",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Hidra de Alvar: prioriza Fuerza del Triunvirato, Magia de batalla, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 5,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_magic_2",
      "name": "Gran mercader",
      "pursue": true,
      "reason": "Objetivo secundario: merece la pena intentarla si las tiradas tempranas ofrecen sus habilidades raras; no sustituir una habilidad central de la build por forzarla.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_17": {
    "heroId": "dungeon_hero_17",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Fuente de conocimiento: prioriza Fuerza del Triunvirato, Magia de luz solar, Magia de batalla, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_day",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_day_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_day_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_magic_1",
      "name": "Heredero de Amelchia",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_18": {
    "heroId": "dungeon_hero_18",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Maestría de las sombras: prioriza Fuerza del Triunvirato, Magia de nochesombra, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_night",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_night_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_night_5",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_magic_1",
      "name": "Heredero de Amelchia",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_2": {
    "heroId": "dungeon_hero_2",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Con un ojo abierto: prioriza Fuerza del Triunvirato, Arte de batalla, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_formation",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 5,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 0,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_might_1",
      "name": "Guardaespaldas de Baltasar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_3": {
    "heroId": "dungeon_hero_3",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Golpe venenoso: prioriza Fuerza del Triunvirato, Combate, Ofensiva, Tácticas y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_might_1",
      "name": "Guardaespaldas de Baltasar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_4": {
    "heroId": "dungeon_hero_4",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en El pueblo ciego: prioriza Fuerza del Triunvirato, Tácticas, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_tactics",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 5,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_might_2",
      "name": "Enviado de Lengua de Plata",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_5": {
    "heroId": "dungeon_hero_5",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Espía: prioriza Fuerza del Triunvirato, Exploración, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_scouting",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_scouting_2",
        "advancedWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo.",
        "expertSubskillId": "sub_skill_scouting_4",
        "expertWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 5,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_might_2",
      "name": "Enviado de Lengua de Plata",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_scouting",
          "starting": true,
          "appearanceChance": null
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_6": {
    "heroId": "dungeon_hero_6",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Guarida de Baltasar: prioriza Fuerza del Triunvirato, Liderazgo, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_leadership",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 5,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_might_1",
      "name": "Guardaespaldas de Baltasar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_leadership",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_7": {
    "heroId": "dungeon_hero_7",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Buscadora de gemas: prioriza Fuerza del Triunvirato, Economía, Logística, Reclutamiento y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_economy",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 5,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_might_1",
      "name": "Guardaespaldas de Baltasar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_8": {
    "heroId": "dungeon_hero_8",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Herradura de cuatro hojas: prioriza Fuerza del Triunvirato, Suerte, Ofensiva, Liderazgo y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_luck",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_might_1",
      "name": "Guardaespaldas de Baltasar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "dungeon_hero_9": {
    "heroId": "dungeon_hero_9",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Dominio arcano: prioriza Fuerza del Triunvirato, Magia arcana, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_dungeon",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_dungeon_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_dungeon_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_space",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_space_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_space_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 5,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_dungeon_might_1",
      "name": "Guardaespaldas de Baltasar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_1": {
    "heroId": "human_hero_1",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Caminante: prioriza Justicia, Logística, Tácticas, Exploración y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_logistic",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_scouting",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora visión, movilidad y lectura del mapa; es una inversión especialmente buena en héroes de exploración o movilidad.",
        "advancedSubskillId": "sub_skill_scouting_2",
        "advancedWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo.",
        "expertSubskillId": "sub_skill_scouting_4",
        "expertWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_might_2",
      "name": "Dechado",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_10": {
    "heroId": "human_hero_10",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Vigor espiritual: prioriza Justicia, Diplomacia, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_diplomacy",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_diplomacy_1",
        "advancedWhy": "Facilita reclutamiento temprano y reduce el coste de convertir neutrales en ejército.",
        "expertSubskillId": "sub_skill_diplomacy_4",
        "expertWhy": "Facilita reclutamiento temprano y reduce el coste de convertir neutrales en ejército."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_magic_2",
      "name": "Ascendente",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_11": {
    "heroId": "human_hero_11",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Deseo de aprender: prioriza Justicia, Percepción, Logística, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_magic_1",
      "name": "Gran Inquisidor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_enlightenment",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_12": {
    "heroId": "human_hero_12",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Tejiendo la luz: prioriza Justicia, Invocar avatar, Magia de batalla, Resistencia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_summoner",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_magic_day",
        "starting": false,
        "appearanceChance": 8,
        "why": "Potencia directamente una especialización o hechizos de luz solar cuando ese es el eje de la build.",
        "advancedSubskillId": "sub_skill_magic_day_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_day_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_magic_1",
      "name": "Gran Inquisidor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_13": {
    "heroId": "human_hero_13",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Fuente de conocimiento: prioriza Justicia, Magia de luz solar, Magia de batalla, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_day",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_day_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_day_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_magic_2",
      "name": "Ascendente",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_14": {
    "heroId": "human_hero_14",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Sanador compasivo: prioriza Justicia, Defensa, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_protection",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_magic_1",
      "name": "Gran Inquisidor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_15": {
    "heroId": "human_hero_15",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Bendición: prioriza Justicia, Magia de luz solar, Magia de batalla, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_day",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_day_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_day_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_magic_2",
      "name": "Ascendente",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_16": {
    "heroId": "human_hero_16",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Himno a Arina: prioriza Justicia, Taumaturgia, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_wisdom",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_magic_1",
      "name": "Gran Inquisidor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_17": {
    "heroId": "human_hero_17",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Corazón de corazones: prioriza Justicia, Magia de nochesombra, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_night",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_night_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_night_5",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_magic_2",
      "name": "Ascendente",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_18": {
    "heroId": "human_hero_18",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Pudiente: prioriza Justicia, Economía, Logística, Reclutamiento y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_economy",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_magic_2",
      "name": "Ascendente",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": true,
          "appearanceChance": null
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_2": {
    "heroId": "human_hero_2",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Explorador: prioriza Justicia, Exploración, Logística, Tácticas y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_scouting",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_scouting_2",
        "advancedWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo.",
        "expertSubskillId": "sub_skill_scouting_4",
        "expertWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_might_2",
      "name": "Dechado",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_3": {
    "heroId": "human_hero_3",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Sal de la tierra: prioriza Justicia, Defensa, Resistencia, Reclutamiento y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_protection",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_might_2",
      "name": "Dechado",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_4": {
    "heroId": "human_hero_4",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Jaeger: prioriza Justicia, Suerte, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_luck",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_might_1",
      "name": "Bravucón",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_luck",
          "starting": true,
          "appearanceChance": null
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_5": {
    "heroId": "human_hero_5",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Presencia inspiradora: prioriza Justicia, Liderazgo, Ofensiva, Arte de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_leadership",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_might_1",
      "name": "Bravucón",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_leadership",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_6": {
    "heroId": "human_hero_6",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Buscador de gemas: prioriza Justicia, Reclutamiento, Logística, Economía y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_trainer",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_might_1",
      "name": "Bravucón",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_7": {
    "heroId": "human_hero_7",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Experta en justas: prioriza Justicia, Ofensiva, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_assault",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_might_1",
      "name": "Bravucón",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_8": {
    "heroId": "human_hero_8",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Lord auténtico: prioriza Justicia, Arte de batalla, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_formation",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_might_1",
      "name": "Bravucón",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "human_hero_9": {
    "heroId": "human_hero_9",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Aniquilación heroica: prioriza Justicia, Combate, Ofensiva, Tácticas y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_humans",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_humans_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_humans_6",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_human_might_2",
      "name": "Dechado",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_1": {
    "heroId": "nature_hero_1",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Explorador: prioriza Murmullo, Exploración, Logística, Tácticas y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_scouting",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_scouting_2",
        "advancedWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo.",
        "expertSubskillId": "sub_skill_scouting_4",
        "expertWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_might_2",
      "name": "Favorecidos por el azar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_10": {
    "heroId": "nature_hero_10",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Vigor espiritual: prioriza Murmullo, Sabiduría, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_mastery",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_mastery_2",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_mastery_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_magic_2",
      "name": "Furia del cielo",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_11": {
    "heroId": "nature_hero_11",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en El árbol más antiguo: prioriza Murmullo, Taumaturgia, Magia de batalla, Resistencia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_wisdom",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_magic_1",
      "name": "Enviado celestial",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_12": {
    "heroId": "nature_hero_12",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Ascuas templadas: prioriza Murmullo, Magia primigenia, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_primal",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_magic_2",
      "name": "Furia del cielo",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_13": {
    "heroId": "nature_hero_13",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Descarga de hielo: prioriza Murmullo, Magia primigenia, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_primal",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_magic_2",
      "name": "Furia del cielo",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_14": {
    "heroId": "nature_hero_14",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Peñazo: prioriza Murmullo, Magia primigenia, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_primal",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_magic_2",
      "name": "Furia del cielo",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_15": {
    "heroId": "nature_hero_15",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Truenos y relámpagos: prioriza Murmullo, Magia primigenia, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_primal",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_magic_2",
      "name": "Furia del cielo",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_16": {
    "heroId": "nature_hero_16",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Copia murmurante: prioriza Murmullo, Magia arcana, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_space",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_space_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_space_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_magic_1",
      "name": "Enviado celestial",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_17": {
    "heroId": "nature_hero_17",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Nativa del Bosque Murmullo: prioriza Murmullo, Invocar avatar, Magia de batalla, Hechicería y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_summoner",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_magic_1",
      "name": "Enviado celestial",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_18": {
    "heroId": "nature_hero_18",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Músico errante: prioriza Murmullo, Hechicería, Taumaturgia, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_sorcery",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 15,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_magic_2",
      "name": "Furia del cielo",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_sorcery",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_2": {
    "heroId": "nature_hero_2",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Tirador: prioriza Murmullo, Ofensiva, Arte de batalla, Suerte y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_assault",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_assault_2",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_2",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_luck",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Multiplica el techo de daño de una build que ya busca impactos de suerte y encaja con especializaciones orientadas a explosión.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_might_2",
      "name": "Favorecidos por el azar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_3": {
    "heroId": "nature_hero_3",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Canto del fauno: prioriza Murmullo, Liderazgo, Arte de batalla, Ofensiva y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_leadership",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_might_1",
      "name": "Pozo de vigor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 15
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_4": {
    "heroId": "nature_hero_4",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Selección natural: prioriza Murmullo, Magia de batalla, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_battlemage",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 5,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 0,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_might_1",
      "name": "Pozo de vigor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_battlemage",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 15
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_5": {
    "heroId": "nature_hero_5",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Herradura de cuatro hojas: prioriza Murmullo, Suerte, Ofensiva, Liderazgo y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_luck",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_might_2",
      "name": "Favorecidos por el azar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_6": {
    "heroId": "nature_hero_6",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Brillo encantador: prioriza Murmullo, Combate, Logística, Economía y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_might_2",
      "name": "Favorecidos por el azar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_7": {
    "heroId": "nature_hero_7",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Huella de Hksmilla: prioriza Murmullo, Ofensiva, Combate, Tácticas y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 10,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 5,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 0,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_might_1",
      "name": "Pozo de vigor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 15
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_8": {
    "heroId": "nature_hero_8",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Carisma: prioriza Murmullo, Diplomacia, Liderazgo, Percepción y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_diplomacy",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_diplomacy_1",
        "advancedWhy": "Facilita reclutamiento temprano y reduce el coste de convertir neutrales en ejército.",
        "expertSubskillId": "sub_skill_diplomacy_4",
        "expertWhy": "Facilita reclutamiento temprano y reduce el coste de convertir neutrales en ejército."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_might_2",
      "name": "Favorecidos por el azar",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 12.5
        },
        {
          "skillId": "skill_diplomacy",
          "starting": true,
          "appearanceChance": null
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "nature_hero_9": {
    "heroId": "nature_hero_9",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Deseo de aprender: prioriza Murmullo, Percepción, Logística, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_nature",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_nature_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_nature_new_4",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 0,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_nature_might_1",
      "name": "Pozo de vigor",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_enlightenment",
          "starting": true,
          "appearanceChance": null
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_1": {
    "heroId": "necro_hero_1",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en De otra pasta: prioriza Nigromancia, Defensa, Ofensiva, Arte de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_protection",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_2",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_2",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_luck",
        "starting": false,
        "appearanceChance": 15,
        "why": "Multiplica el techo de daño de una build que ya busca impactos de suerte y encaja con especializaciones orientadas a explosión.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_might_1",
      "name": "Heraldo de la perdición",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_10": {
    "heroId": "necro_hero_10",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Dominio arcano: prioriza Nigromancia, Magia arcana, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_space",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_space_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_space_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_magic_1",
      "name": "Tejedor de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_11": {
    "heroId": "necro_hero_11",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Amnésico: prioriza Nigromancia, Arte de batalla, Magia de batalla, Resistencia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_formation",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_magic_1",
      "name": "Tejedor de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_12": {
    "heroId": "necro_hero_12",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Voluntad sepulcral: prioriza Nigromancia, Sabiduría, Magia de batalla, Resistencia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_mastery",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_mastery_2",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_mastery_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_magic_2",
      "name": "Cronomante",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_13": {
    "heroId": "necro_hero_13",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Gremio de huesos: prioriza Nigromancia, Suerte, Magia de batalla, Resistencia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_luck",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 5,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 5,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_magic_2",
      "name": "Cronomante",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_14": {
    "heroId": "necro_hero_14",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Maestría de las sombras: prioriza Nigromancia, Magia de nochesombra, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_night",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_night_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_night_5",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_magic_1",
      "name": "Tejedor de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_15": {
    "heroId": "necro_hero_15",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Marchitamiento: prioriza Nigromancia, Hechicería, Taumaturgia, Magia de nochesombra y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_sorcery",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_magic_night",
        "starting": false,
        "appearanceChance": 8,
        "why": "Potencia directamente una especialización o hechizos de nochesombra y aporta control/debilitamiento.",
        "advancedSubskillId": "sub_skill_magic_night_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_night_5",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_magic_1",
      "name": "Tejedor de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_16": {
    "heroId": "necro_hero_16",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Nostalgia melancólica: prioriza Nigromancia, Taumaturgia, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_wisdom",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_magic_1",
      "name": "Tejedor de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_17": {
    "heroId": "necro_hero_17",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Legión de no muertos: prioriza Nigromancia, Invocar avatar, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_summoner",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 15,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_magic_1",
      "name": "Tejedor de almas",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_summoner",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_18": {
    "heroId": "necro_hero_18",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Pudiente: prioriza Nigromancia, Magia de batalla, Logística, Economía y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_battlemage",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 15,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_magic_2",
      "name": "Cronomante",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_battlemage",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_2": {
    "heroId": "necro_hero_2",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Carisma: prioriza Nigromancia, Diplomacia, Liderazgo, Percepción y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_diplomacy",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_diplomacy_1",
        "advancedWhy": "Facilita reclutamiento temprano y reduce el coste de convertir neutrales en ejército.",
        "expertSubskillId": "sub_skill_diplomacy_4",
        "expertWhy": "Facilita reclutamiento temprano y reduce el coste de convertir neutrales en ejército."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 0,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 15,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_might_2",
      "name": "Podredumbre ambulante",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_diplomacy",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_3": {
    "heroId": "necro_hero_3",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Títeres perfectos: prioriza Nigromancia, Ofensiva, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_assault",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_might_1",
      "name": "Heraldo de la perdición",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_4": {
    "heroId": "necro_hero_4",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Guerra terrorífica: prioriza Nigromancia, Tácticas, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_tactics",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_might_2",
      "name": "Podredumbre ambulante",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_tactics",
          "starting": true,
          "appearanceChance": null
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_5": {
    "heroId": "necro_hero_5",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Parte de una manada: prioriza Nigromancia, Exploración, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_scouting",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_scouting_2",
        "advancedWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo.",
        "expertSubskillId": "sub_skill_scouting_4",
        "expertWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 15,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_might_1",
      "name": "Heraldo de la perdición",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_scouting",
          "starting": true,
          "appearanceChance": null
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_6": {
    "heroId": "necro_hero_6",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Vuélvelos locos: prioriza Nigromancia, Resistencia, Ofensiva, Arte de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_resistance",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_might_2",
      "name": "Podredumbre ambulante",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_7": {
    "heroId": "necro_hero_7",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Suelo lánguido: prioriza Nigromancia, Logística, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_logistic",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 5,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 0,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_might_1",
      "name": "Heraldo de la perdición",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_8": {
    "heroId": "necro_hero_8",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Legión de no muertos: prioriza Nigromancia, Invocar avatar, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 5,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_2",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 5,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 5,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_might_1",
      "name": "Heraldo de la perdición",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "necro_hero_9": {
    "heroId": "necro_hero_9",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Alquimista: prioriza Nigromancia, Reclutamiento, Logística, Economía y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_undead",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_undead_2",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_undead_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_trainer",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 10,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 10,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 15,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 15,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_undead_might_1",
      "name": "Heraldo de la perdición",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 15
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 10
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_1": {
    "heroId": "unfrozen_hero_1",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Caminante: prioriza Comunión abisal, Logística, Exploración, Tácticas y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_logistic",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_scouting",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Mejora visión, movilidad y lectura del mapa; es una inversión especialmente buena en héroes de exploración o movilidad.",
        "advancedSubskillId": "sub_skill_scouting_2",
        "advancedWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo.",
        "expertSubskillId": "sub_skill_scouting_4",
        "expertWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_might_1",
      "name": "Sin límites",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_10": {
    "heroId": "unfrozen_hero_10",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Combatiente: prioriza Comunión abisal, Ofensiva, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_assault",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_magic_2",
      "name": "Insondable",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 15
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_11": {
    "heroId": "unfrozen_hero_11",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Corazón de hielo: prioriza Comunión abisal, Defensa, Resistencia, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_protection",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 10,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_magic_primal",
        "starting": false,
        "appearanceChance": 2,
        "why": "Potencia magia primigenia y es especialmente valiosa en especializaciones centradas en daño elemental o caos.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_magic_1",
      "name": "Imparable",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_12": {
    "heroId": "unfrozen_hero_12",
    "tier": "S+",
    "tierReason": "Tier editorial S+: está entre las opciones de referencia más fuertes para la facción según las fuentes consultadas, con una especialización que aporta un impacto claro en tempo, limpieza del mapa y/o combate final.",
    "buildReason": "Build editorial centrada en Invocación inferior: prioriza Comunión abisal, Reclutamiento, Magia de batalla, Resistencia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_trainer",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 10,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 10,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_magic_2",
      "name": "Insondable",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 15
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_13": {
    "heroId": "unfrozen_hero_13",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Enviado de la Grieta: prioriza Comunión abisal, Liderazgo, Resistencia, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_leadership",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 10,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 10,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_magic_2",
      "name": "Insondable",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 15
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_14": {
    "heroId": "unfrozen_hero_14",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Dilatación estelar: prioriza Comunión abisal, Logística, Tácticas, Ofensiva y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_logistic",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 0,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_magic_2",
      "name": "Insondable",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_logistic",
          "starting": true,
          "appearanceChance": null
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_15": {
    "heroId": "unfrozen_hero_15",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Explorador: prioriza Comunión abisal, Exploración, Logística, Tácticas y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_scouting",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_scouting_2",
        "advancedWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo.",
        "expertSubskillId": "sub_skill_scouting_4",
        "expertWhy": "Aumenta movimiento al iniciar el día en territorio propio y aporta información exacta del enemigo."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_tactics",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_magic_1",
      "name": "Imparable",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_formation",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_battlemage",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_primal",
          "starting": false,
          "appearanceChance": 2
        },
        {
          "skillId": "skill_enlightenment",
          "starting": false,
          "appearanceChance": 7.5
        },
        {
          "skillId": "skill_tactics",
          "starting": false,
          "appearanceChance": 7.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_16": {
    "heroId": "unfrozen_hero_16",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Fortaleza mágica: prioriza Comunión abisal, Magia arcana, Magia de batalla, Hechicería y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_space",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_space_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_space_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 10,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 10,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_magic_2",
      "name": "Insondable",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_space",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 15
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_17": {
    "heroId": "unfrozen_hero_17",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Máscara de la luna: prioriza Comunión abisal, Magia de nochesombra, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_night",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_night_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_night_5",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_magic_2",
      "name": "Insondable",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 15
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_18": {
    "heroId": "unfrozen_hero_18",
    "tier": "A",
    "tierReason": "Tier editorial A: opción fuerte y consistente, aunque con más condicionantes o menor impacto global que los héroes S+.",
    "buildReason": "Build editorial centrada en Verdadera creyente: prioriza Comunión abisal, Hechicería, Taumaturgia, Logística y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_summoner",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza los avatares e invocaciones y es prioritaria cuando la especialización o la composición usa criaturas invocadas.",
        "advancedSubskillId": "sub_skill_summoner_3",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_enlightenment",
        "starting": false,
        "appearanceChance": 7.5,
        "why": "Acelera experiencia y mejora el crecimiento del héroe; es especialmente valiosa en héroes que escalan con niveles.",
        "advancedSubskillId": "sub_skill_enlightenment_1",
        "advancedWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades.",
        "expertSubskillId": "sub_skill_enlightenment_5",
        "expertWhy": "La experiencia adicional acelera el acceso a niveles y, por tanto, a mejores atributos y subhabilidades."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_magic_2",
      "name": "Insondable",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_protection",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_summoner",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_space",
          "starting": false,
          "appearanceChance": 8
        },
        {
          "skillId": "skill_luck",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_logistic",
          "starting": false,
          "appearanceChance": 15
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_2": {
    "heroId": "unfrozen_hero_2",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Tejedor de hechizos: prioriza Comunión abisal, Hechicería, Magia de batalla, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_sorcery",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_might_1",
      "name": "Sin límites",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_sorcery",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_3": {
    "heroId": "unfrozen_hero_3",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Maestra de ajedrez: prioriza Comunión abisal, Tácticas, Arte de batalla, Logística y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_tactics",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_leadership",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta la consistencia del ejército mediante iniciativa, moral y oportunidades de turnos adicionales.",
        "advancedSubskillId": "sub_skill_leadership_1",
        "advancedWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico.",
        "expertSubskillId": "sub_skill_leadership_5",
        "expertWhy": "La iniciativa plana mejora el orden de actuación y la opción experta busca mantener el ritmo del Golpe heroico."
      },
      {
        "skillId": "skill_battle_artistry",
        "starting": false,
        "appearanceChance": 15,
        "why": "Potencia Golpe heroico y convierte al héroe en una fuente adicional de daño y control durante el combate.",
        "advancedSubskillId": "sub_skill_battle_artistry_3",
        "advancedWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia.",
        "expertSubskillId": "sub_skill_battle_artistry_1",
        "expertWhy": "Mejora las estadísticas de combate y abarata el Golpe heroico para poder utilizarlo con mayor frecuencia."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_might_1",
      "name": "Sin límites",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_4": {
    "heroId": "unfrozen_hero_4",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Canalla: prioriza Comunión abisal, Arte de batalla, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_formation",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 10,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 10,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_might_2",
      "name": "Insensible",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_5": {
    "heroId": "unfrozen_hero_5",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Hermanos a sangre fría: prioriza Comunión abisal, Resistencia, Defensa, Reclutamiento y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 10,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 10,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_might_2",
      "name": "Insensible",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_mastery",
          "starting": false,
          "appearanceChance": 0.0
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_6": {
    "heroId": "unfrozen_hero_6",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Atadura de cadenas: prioriza Comunión abisal, Sabiduría, Resistencia, Defensa y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_mastery",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_mastery_2",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_mastery_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_resistance",
        "starting": false,
        "appearanceChance": 10,
        "why": "Añade herramientas contra magia y control, especialmente importantes cuando el héroe no dispone de una defensa mágica propia.",
        "advancedSubskillId": "sub_skill_resistance_1",
        "advancedWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica.",
        "expertSubskillId": "sub_skill_resistance_6",
        "expertWhy": "Dificulta la magia enemiga y, a Experto, reduce de forma directa su capacidad mágica."
      },
      {
        "skillId": "skill_protection",
        "starting": false,
        "appearanceChance": 10,
        "why": "Reduce las pérdidas y protege las tropas frente a los tipos de daño que más penalizan a una build física.",
        "advancedSubskillId": "sub_skill_protection_2",
        "advancedWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo.",
        "expertSubskillId": "sub_skill_protection_5",
        "expertWhy": "La defensa contra ataques a distancia reduce pérdidas y la opción experta baja el ataque enemigo."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_might_2",
      "name": "Insensible",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_resistance",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_mastery",
          "starting": true,
          "appearanceChance": null
        },
        {
          "skillId": "skill_magic_night",
          "starting": false,
          "appearanceChance": 6
        },
        {
          "skillId": "skill_diplomacy",
          "starting": false,
          "appearanceChance": 5
        },
        {
          "skillId": "skill_economy",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_7": {
    "heroId": "unfrozen_hero_7",
    "tier": "C",
    "tierReason": "Tier editorial C: opción de nicho; puede funcionar con una estrategia concreta, pero ofrece menos valor general que las alternativas superiores.",
    "buildReason": "Build editorial centrada en Tejido primigenio: prioriza Comunión abisal, Magia primigenia, Hechicería, Taumaturgia y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_primal",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": null,
        "advancedWhy": "",
        "expertSubskillId": null,
        "expertWhy": ""
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_might_1",
      "name": "Sin límites",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_8": {
    "heroId": "unfrozen_hero_8",
    "tier": "B",
    "tierReason": "Tier editorial B: héroe jugable y útil, pero más dependiente de la situación, del mapa o de una ejecución concreta que las opciones superiores.",
    "buildReason": "Build editorial centrada en Esencia siempre cambiante: prioriza Comunión abisal, Invocar avatar, Hechicería, Magia de batalla y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_summoner",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_summoner_2",
        "advancedWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala.",
        "expertSubskillId": "sub_skill_summoner_5",
        "expertWhy": "Aumenta la velocidad del Avatar y después el número de criaturas invocadas, priorizando tempo y escala."
      },
      {
        "skillId": "skill_sorcery",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta el rendimiento de la magia ofensiva y escala directamente con una especialización de daño mágico.",
        "advancedSubskillId": "sub_skill_sorcery_3",
        "advancedWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva.",
        "expertSubskillId": "sub_skill_sorcery_5",
        "expertWhy": "La combinación de daño mágico adicional y niveles de hechizo maximiza una build de magia ofensiva."
      },
      {
        "skillId": "skill_battlemage",
        "starting": false,
        "appearanceChance": 10,
        "why": "Convierte el uso de hechizos en estadísticas de combate y crea un puente eficaz entre magia y ejército.",
        "advancedSubskillId": "sub_skill_battlemage_3",
        "advancedWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla.",
        "expertSubskillId": "sub_skill_battlemage_6",
        "expertWhy": "Acumula poder de hechizo al lanzar magia y después reduce las recargas de las herramientas de batalla."
      },
      {
        "skillId": "skill_wisdom",
        "starting": false,
        "appearanceChance": 10,
        "why": "Amplía el acceso y la potencia de los hechizos; es prioritaria cuando la especialización gira alrededor de magia.",
        "advancedSubskillId": "sub_skill_wisdom_6",
        "advancedWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real.",
        "expertSubskillId": "sub_skill_wisdom_3",
        "expertWhy": "Aumenta los recursos mágicos y, en Experta, eleva el nivel de una escuela para que la inversión en magia tenga retorno real."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_might_1",
      "name": "Sin límites",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  },
  "unfrozen_hero_9": {
    "heroId": "unfrozen_hero_9",
    "tier": "D",
    "tierReason": "Tier editorial D: actualmente difícil de recomendar como elección por defecto; necesita condiciones muy concretas para competir con las alternativas de la facción.",
    "buildReason": "Build editorial centrada en Alquimista: prioriza Comunión abisal, Magia arcana, Logística, Economía y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
    "recommendedSkills": [
      {
        "skillId": "skill_faction_unfrozen",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_faction_unfrozen_1",
        "advancedWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase.",
        "expertSubskillId": "sub_skill_faction_unfrozen_5",
        "expertWhy": "Se escoge la mejora que más potencia el motor propio de la facción sin exigir que la build gire alrededor de una subclase."
      },
      {
        "skillId": "skill_magic_space",
        "starting": true,
        "appearanceChance": null,
        "why": "Es una habilidad inicial del héroe y ya forma parte de su identidad canónica; la llevamos a Experta porque refuerza directamente su especialización.",
        "advancedSubskillId": "sub_skill_magic_space_2",
        "advancedWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos.",
        "expertSubskillId": "sub_skill_magic_space_4",
        "expertWhy": "La elección aumenta el rendimiento de la escuela concreta y favorece una build que realmente utiliza esos hechizos."
      },
      {
        "skillId": "skill_logistic",
        "starting": false,
        "appearanceChance": 15,
        "why": "La movilidad tiene valor transversal y permite aprovechar mejor una especialización de mapa, experiencia o economía.",
        "advancedSubskillId": "sub_skill_logistic_2",
        "advancedWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día.",
        "expertSubskillId": "sub_skill_logistic_6",
        "expertWhy": "La movilidad adicional se convierte directamente en más acciones de mapa y limpieza por día."
      },
      {
        "skillId": "skill_economy",
        "starting": false,
        "appearanceChance": 12.5,
        "why": "Acelera recursos y permite convertir una especialización económica o de crecimiento en ventaja estructural.",
        "advancedSubskillId": "sub_skill_economy_1",
        "advancedWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos.",
        "expertSubskillId": "sub_skill_economy_6",
        "expertWhy": "Genera recursos permanentes y, a nivel Experto, mejora el valor económico de los artefactos."
      },
      {
        "skillId": "skill_trainer",
        "starting": false,
        "appearanceChance": 10,
        "why": "Refuerza crecimiento, ejército y logística de reclutamiento; tiene sentido en héroes cuya especialización potencia criaturas concretas.",
        "advancedSubskillId": "sub_skill_trainer_1",
        "advancedWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades.",
        "expertSubskillId": "sub_skill_trainer_4",
        "expertWhy": "Aumenta crecimiento y, a Experto, añade movilidad económica mediante transferencia entre ciudades."
      },
      {
        "skillId": "skill_assault",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aumenta de forma directa el daño básico del ejército y es especialmente valiosa para una especialización física o de ataque.",
        "advancedSubskillId": "sub_skill_assault_3",
        "advancedWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana.",
        "expertSubskillId": "sub_skill_assault_1",
        "expertWhy": "Se prioriza daño básico; la opción avanzada se adapta a distancia y la experta mantiene una mejora ofensiva plana."
      },
      {
        "skillId": "skill_formation",
        "starting": false,
        "appearanceChance": 10,
        "why": "Aporta una mejora global de combate y permite adaptar la build al tipo de tropas que realmente acompañen al héroe.",
        "advancedSubskillId": "sub_skill_formation_1",
        "advancedWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate.",
        "expertSubskillId": "sub_skill_formation_4",
        "expertWhy": "Se elige la maestría que coincide con el perfil de tropas; la experta genera concentración para sostener el plan de combate."
      }
    ],
    "recommendedSubclass": {
      "id": "sub_class_unfrozen_might_1",
      "name": "Sin límites",
      "pursue": false,
      "reason": "No perseguir activamente: la build principal tiene mayor prioridad. Si aparecen de forma natural varias habilidades requeridas, puede aprovecharse la subclase.",
      "requiredSkills": [
        {
          "skillId": "skill_assault",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_sorcery",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_magic_day",
          "starting": false,
          "appearanceChance": 4
        },
        {
          "skillId": "skill_leadership",
          "starting": false,
          "appearanceChance": 10
        },
        {
          "skillId": "skill_scouting",
          "starting": false,
          "appearanceChance": 12.5
        }
      ]
    },
    "sources": ["https://www.olden-era.com/en/heroes", "https://heavenlyforge.gg/es/tierlists/heroes", "https://townportal.gg/en/tier-lists"]
  }
};

function cleanDescription(description: string): string {
  return description
    .replace(/<resolved>|<\/resolved>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

type HeroTier = HeroBuildAudit['tier'];

const SKILLS_BY_ID = new Map(API_SKILLS_DATA.map((skill) => [skill.id, skill]));

function getEffectFocus(description: string): string {
  const text = description.toLowerCase();
  if (/movimiento|camino|carretera|movilidad|visión|explor|niebla/.test(text)) return 'movilidad y control del mapa';
  if (/defensa|resistencia|inmun|reduce.*daño|daño.*reduce|daño recibido|salud|puntos de vida/.test(text)) return 'protección y conservación del ejército';
  if (/oro|cristal|gema|mercurio|recurso|ingreso|crecimiento|reclut/.test(text)) return 'economía y desarrollo del ejército';
  if (/maná|hechizo|magia|poder de hechizo/.test(text)) return 'capacidad mágica';
  if (/daño|ataque|golpe|contraataque|iniciativa|velocidad/.test(text)) return 'presión e iniciativa de combate';
  if (/experiencia|experto|nivel/.test(text)) return 'progresión del héroe';
  return 'utilidad del ejército';
}

function analyzeHeroTier(hero: NonNullable<ReturnType<typeof getApiHeroById>>, audit: HeroBuildAudit) {
  const description = cleanDescription(hero.specializationDescription);
  const text = `${hero.specializationName} ${description}`.toLowerCase();
  const mapTempo = /movimiento|camino|carretera|movilidad|visión|explor|niebla/.test(text);
  const combatImpact = /daño|ataque|defensa|iniciativa|velocidad|salud|puntos de vida|contraataque|aturd|petrific|pierde su turno/.test(text);
  const armyWide = /todas las criaturas|criaturas de su ejército|todo el ejército|ejército entero|criaturas amistosas/.test(text);
  const economy = /oro|cristal|gema|mercurio|recursos|ingresos|produce .* al día|por día/.test(text);
  const magic = /hechizo|magia|maná|poder de hechizo/.test(text);
  const experience = /experiencia|puntos de experiencia|exp\b/.test(text);
  const armyGrowth = /crecimiento|añade .* criaturas|criaturas adicionales|unidades adicionales/.test(text);
  const conditional = /probabilidad|posibilidad|si conoce|si el héroe|solo cuando|en terreno|cuando .* hechizo/.test(text);
  const namesStartingUnit = hero.startingArmy.some((unit) => text.includes(unit.unitName.toLowerCase()));
  const startingSkillEffects = hero.startingSkills
    .map((startingSkill) => SKILLS_BY_ID.get(startingSkill.skillId)?.level1.description ?? '')
    .map(cleanDescription);
  const specialtyFocus = getEffectFocus(description);
  const hasMatchingStartingSkill = startingSkillEffects.some((effect) => getEffectFocus(effect) === specialtyFocus);

  let score = 0;
  if (mapTempo) score += 4;
  if (combatImpact) score += 2;
  if (combatImpact && armyWide) score += 2;
  if (economy) score += 1;
  if (armyGrowth) score += 2;
  if (magic) score += 2;
  if (experience) score += 3;
  if (namesStartingUnit) score += 1;
  if (hasMatchingStartingSkill) score += 1;
  if (conditional) score -= 1;

  let tier: HeroTier = 'D';
  if (score >= 6) tier = 'S+';
  else if (score >= 5) tier = 'S';
  else if (score >= 4) tier = 'A';
  else if (score >= 3) tier = 'B';
  else if (score >= 2) tier = 'C';

  const evidence: string[] = [];
  const limitations: string[] = [];
  if (mapTempo) evidence.push('la movilidad o exploración genera valor durante el mapa, no solo al combatir');
  if (combatImpact && armyWide) evidence.push('el efecto de combate alcanza a varias criaturas del ejército');
  else if (combatImpact) evidence.push('el efecto mejora directamente un aspecto de combate');
  if (armyGrowth) evidence.push('el efecto aumenta el acceso o crecimiento de tropas, que puede convertirse en más fuerza de ejército');
  if (namesStartingUnit) evidence.push('la especialización nombra una unidad que ya aparece en su ejército inicial');
  if (hasMatchingStartingSkill) evidence.push(`una habilidad inicial desarrolla ${specialtyFocus}`);
  if (economy) limitations.push('el componente económico no aumenta por sí solo la fuerza del ejército en una batalla');
  if (armyGrowth) limitations.push('la ventaja de crecimiento depende de disponer de tiempo y recursos para reclutar');
  if (magic) limitations.push('el valor mágico depende del acceso a hechizos y de los recursos para lanzarlos');
  if (experience) limitations.push('la progresión por experiencia tarda en traducirse en ventaja');
  if (conditional) limitations.push('parte del efecto depende de una condición, una tirada o la evolución del héroe');
  if (!namesStartingUnit && combatImpact && !armyWide) limitations.push('el efecto de combate depende de una unidad o situación concreta');
  if (limitations.length === 0) limitations.push('la ventaja principal no sustituye la necesidad de una ruta de habilidades y ejército coherente');

  const tierReason = `Análisis derivado para partida estándar: ${hero.name} queda en tier ${tier} porque ${evidence.join('; ') || `su efecto principal es ${specialtyFocus}`}. Su especialización es ${hero.specializationName}: ${description || 'sin descripción disponible en la API'}. Límite práctico: ${limitations.join('; ')}. Este tier compara alcance, momento de impacto y consistencia; no representa consenso estadístico ni datos de winrate.`;
  return { tier, tierReason, specialtyFocus };
}

function explainSkillFit(skillFocus: string, specialtyFocus: string, isStarting: boolean): string {
  const availability = isStarting
    ? 'Ya forma parte de sus habilidades iniciales, así que la build aprovecha esa inversión sin gastar una elección posterior.'
    : 'Debe aparecer como oferta al subir de nivel; no es una adquisición garantizada.';
  if (skillFocus === specialtyFocus) {
    return `Sinergia directa: desarrolla ${specialtyFocus}, el mismo eje que impulsa la especialización. ${availability}`;
  }
  if (skillFocus === 'movilidad y control del mapa') {
    return `Complemento de tempo: no aumenta por sí misma la especialización, pero permite llegar a más combates y objetivos con el ejército que esta potencia. ${availability}`;
  }
  if (skillFocus === 'protección y conservación del ejército') {
    return `Complemento de conservación: no amplifica directamente la especialización, pero ayuda a mantener tropas tras los combates necesarios para aprovecharla. ${availability}`;
  }
  if (skillFocus === 'capacidad mágica') {
    return `Complemento mágico: abre o sostiene una vía de hechizos; su prioridad depende de que el héroe pueda acceder a magia útil y pagar su coste. ${availability}`;
  }
  if (skillFocus === 'economía y desarrollo del ejército') {
    return `Complemento económico: acelera recursos o crecimiento, pero sacrifica impacto inmediato en combate; es mejor si la partida permite convertir esos recursos en ejército. ${availability}`;
  }
  return `Complemento de ${skillFocus}: cubre una necesidad distinta de la especialización y evita depender de una sola fuente de ventaja. ${availability}`;
}

function chooseSubskill(
  choices: { id: string; description: string }[],
  specialtyFocus: string,
  classFocus: string
): string | null {
  const ranked = choices
    .map((choice) => ({
      choice,
      score: (getEffectFocus(choice.description) === specialtyFocus ? 3 : 0)
        + (getEffectFocus(choice.description) === classFocus ? 2 : 0),
    }))
    .sort((left, right) => right.score - left.score);
  return ranked[0]?.score ? ranked[0].choice.id : null;
}

function selectEighthSkill(
  hero: NonNullable<ReturnType<typeof getApiHeroById>>,
  usedSkillIds: Set<string>,
  specialtyFocus: string,
  position: number
): HeroBuildSkillAudit | null {
  const classFocus = hero.classType === 'might'
    ? 'presión e iniciativa de combate'
    : 'capacidad mágica';
  const initialSkillIds = new Set(hero.startingSkills.map((skill) => skill.skillId));
  const ranked = API_SKILLS_DATA
    .filter((skill) => !usedSkillIds.has(skill.id))
    .filter((skill) => skill.skillType !== 'Faction' || initialSkillIds.has(skill.id))
    .map((skill) => {
      const focus = getEffectFocus(cleanDescription(skill.level1.description));
      let score = focus === specialtyFocus ? 4 : 0;
      if (focus === classFocus) score += 2;
      if (focus === 'movilidad y control del mapa') score += 1;
      if (focus === 'protección y conservación del ejército') score += 1;
      if (initialSkillIds.has(skill.id)) score += 4;
      return { skill, focus, score };
    })
    .sort((left, right) => right.score - left.score || left.skill.name.localeCompare(right.skill.name, 'es'));
  const selected = ranked[0];
  if (!selected) return null;

  return {
    skillId: selected.skill.id,
    starting: initialSkillIds.has(selected.skill.id),
    appearanceChance: null,
    why: `${selected.skill.name}: ${cleanDescription(selected.skill.level1.description)}. Recomendación ${position} derivada: ${explainSkillFit(selected.focus, specialtyFocus, initialSkillIds.has(selected.skill.id))}`,
    advancedSubskillId: chooseSubskill(selected.skill.level2.subSkillChoices, specialtyFocus, classFocus),
    advancedWhy: '',
    expertSubskillId: chooseSubskill(selected.skill.level3.subSkillChoices, specialtyFocus, classFocus),
    expertWhy: '',
  };
}

export function getHeroBuildAudit(heroId: string): HeroBuildAudit | null {
  const audit = HERO_BUILD_AUDIT[heroId];
  const hero = getApiHeroById(heroId);
  if (!audit || !hero) return audit ?? null;

  const specialization = cleanDescription(hero.specializationDescription);
  const initialSkills = hero.startingSkills.map((skill) => skill.skillName).join(' y ');
  const initialArmy = hero.startingArmy.map((unit) => unit.unitName).join(', ');
  const initialSpells = hero.startingSpells.map((spell) => spell.spellName).join(', ');
  const tierAnalysis = analyzeHeroTier(hero, audit);
  const seenSkillIds = new Set<string>();
  const auditRecommendations = audit.recommendedSkills.filter((recommendation) => {
    if (seenSkillIds.has(recommendation.skillId)) return false;
    seenSkillIds.add(recommendation.skillId);
    return true;
  }).slice(0, 8);
  while (auditRecommendations.length < 8) {
    const supplement = selectEighthSkill(hero, seenSkillIds, tierAnalysis.specialtyFocus, auditRecommendations.length + 1);
    if (!supplement || seenSkillIds.has(supplement.skillId)) break;
    seenSkillIds.add(supplement.skillId);
    auditRecommendations.push(supplement);
  }

  const recommendedSkills = auditRecommendations.map((recommendation) => {
    const skill = SKILLS_BY_ID.get(recommendation.skillId);
    if (!skill) return recommendation;

    const baseEffect = cleanDescription(skill.level1.description);
    const advanced = skill.level2.subSkillChoices.find((choice) => choice.id === recommendation.advancedSubskillId);
    const expert = skill.level3.subSkillChoices.find((choice) => choice.id === recommendation.expertSubskillId);
    const skillFocus = getEffectFocus(baseEffect);
    const isStarting = hero.startingSkills.some((startingSkill) => startingSkill.skillId === skill.id);
    const why = recommendation.why || `${skill.name}: ${baseEffect}. ${explainSkillFit(skillFocus, tierAnalysis.specialtyFocus, isStarting)}`;
    const advancedWhy = advanced
      ? `${advanced.name}: ${cleanDescription(advanced.description)}. ${explainSkillFit(getEffectFocus(advanced.description), tierAnalysis.specialtyFocus, isStarting)} Si la partida exige otro enfoque, compara este efecto con las demás opciones avanzadas.`
      : `La auditoría no selecciona una subhabilidad avanzada para ${skill.name}. Se conserva como prioridad su efecto base (${baseEffect}) sin atribuirle una mejora que esta build no ha elegido.`;
    const expertWhy = expert
      ? `${expert.name}: ${cleanDescription(expert.description)}. ${explainSkillFit(getEffectFocus(expert.description), tierAnalysis.specialtyFocus, isStarting)} Es una recomendación para el plan de ${hero.name}, no una respuesta universal a todos los enfrentamientos.`
      : `La auditoría no selecciona una subhabilidad experta para ${skill.name}; por tanto, no se inventa una justificación para una opción que la build no ha elegido.`;

    return {
      ...recommendation,
      starting: isStarting,
      appearanceChance: isStarting ? null : recommendation.appearanceChance,
      advancedSubskillId: advanced?.id ?? null,
      expertSubskillId: expert?.id ?? null,
      why,
      advancedWhy,
      expertWhy,
    };
  });

  const coreEffects = recommendedSkills.slice(0, 3).map((recommendation) => {
    const skill = SKILLS_BY_ID.get(recommendation.skillId);
    return skill ? `${skill.name}: ${cleanDescription(skill.level1.description)}` : recommendation.skillId;
  });

  return {
    ...audit,
    tier: tierAnalysis.tier,
    tierReason: tierAnalysis.tierReason,
    buildReason: `Análisis derivado para ${hero.name}. Perfil: ${hero.specializationName} (${specialization || 'sin descripción disponible en la API'}). Parte con ${initialSkills || 'sin habilidades iniciales registradas'}, ejército ${initialArmy || 'no registrado'} y hechizo(s) ${initialSpells || 'ninguno registrado'}. La ruta abre con ${coreEffects.join('; ')}; cada habilidad posterior cubre el eje explicado en su recomendación.`,
    recommendedSkills,
  };
}
