// Auditoría editorial de builds de héroes. Los datos factuales (nombres, efectos, etc.) se resuelven desde la API.
// Las probabilidades son la probabilidad de que la habilidad aparezca al subir de nivel, según olden-era.com/en/heroes.
export interface HeroBuildSkillAudit { skillId: string; starting: boolean; appearanceChance: number | null; why: string; advancedSubskillId: string | null; advancedWhy: string; expertSubskillId: string | null; expertWhy: string; }
export interface HeroSubclassAudit { id: string; name: string; pursue: boolean; reason: string; requiredSkills: { skillId: string; starting: boolean; appearanceChance: number | null }[]; }
export interface HeroBuildAudit { heroId: string; tier: 'S+'|'S'|'A'|'B'|'C'|'D'; tierReason: string; buildReason: string; recommendedSkills: HeroBuildSkillAudit[]; recommendedSubclass: HeroSubclassAudit; sources: string[]; }

export const HERO_BUILD_AUDIT: Record<string, HeroBuildAudit> = {
  "demon_hero_1": {
    "heroId": "demon_hero_1",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
    "buildReason": "Build editorial centrada en Tiradora: prioriza Invocar enjambre, Ofensiva, Arte de batalla, Suerte y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
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
        "appearanceChance": 10,
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
        "appearanceChance": 7.5,
        "why": "Mejora el despliegue y la generación/uso de concentración; es especialmente eficiente cuando la especialización depende de posicionamiento o tempo.",
        "advancedSubskillId": "sub_skill_tactics_1",
        "advancedWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build.",
        "expertSubskillId": "sub_skill_tactics_6",
        "expertWhy": "Aprovecha el posicionamiento y transforma la concentración gastada en recursos para la build."
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_10": {
    "heroId": "demon_hero_10",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
    "buildReason": "Build editorial centrada en Caminante: prioriza Invocar enjambre, Logística, Tácticas, Exploración y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_11": {
    "heroId": "demon_hero_11",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_12": {
    "heroId": "demon_hero_12",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_13": {
    "heroId": "demon_hero_13",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_14": {
    "heroId": "demon_hero_14",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_15": {
    "heroId": "demon_hero_15",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_16": {
    "heroId": "demon_hero_16",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_17": {
    "heroId": "demon_hero_17",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_18": {
    "heroId": "demon_hero_18",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_2": {
    "heroId": "demon_hero_2",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_3": {
    "heroId": "demon_hero_3",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_4": {
    "heroId": "demon_hero_4",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_5": {
    "heroId": "demon_hero_5",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_6": {
    "heroId": "demon_hero_6",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_7": {
    "heroId": "demon_hero_7",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_8": {
    "heroId": "demon_hero_8",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "demon_hero_9": {
    "heroId": "demon_hero_9",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_1": {
    "heroId": "dungeon_hero_1",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
    "buildReason": "Build editorial centrada en Amenaza serpenteante: prioriza Fuerza del Triunvirato, Defensa, Resistencia, Reclutamiento y conserva el hueco restante para adaptarse a las ofertas de nivel. La subclase se trata como una bonificación posible, no como requisito.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_10": {
    "heroId": "dungeon_hero_10",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_11": {
    "heroId": "dungeon_hero_11",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_12": {
    "heroId": "dungeon_hero_12",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_13": {
    "heroId": "dungeon_hero_13",
    "tier": "S",
    "tierReason": "S: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_14": {
    "heroId": "dungeon_hero_14",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_15": {
    "heroId": "dungeon_hero_15",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_16": {
    "heroId": "dungeon_hero_16",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_17": {
    "heroId": "dungeon_hero_17",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_18": {
    "heroId": "dungeon_hero_18",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_2": {
    "heroId": "dungeon_hero_2",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_3": {
    "heroId": "dungeon_hero_3",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_4": {
    "heroId": "dungeon_hero_4",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_5": {
    "heroId": "dungeon_hero_5",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_6": {
    "heroId": "dungeon_hero_6",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_7": {
    "heroId": "dungeon_hero_7",
    "tier": "D",
    "tierReason": "D: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_8": {
    "heroId": "dungeon_hero_8",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "dungeon_hero_9": {
    "heroId": "dungeon_hero_9",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_1": {
    "heroId": "human_hero_1",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_10": {
    "heroId": "human_hero_10",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_11": {
    "heroId": "human_hero_11",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_12": {
    "heroId": "human_hero_12",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_13": {
    "heroId": "human_hero_13",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_14": {
    "heroId": "human_hero_14",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_15": {
    "heroId": "human_hero_15",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_16": {
    "heroId": "human_hero_16",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_17": {
    "heroId": "human_hero_17",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_18": {
    "heroId": "human_hero_18",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_2": {
    "heroId": "human_hero_2",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_3": {
    "heroId": "human_hero_3",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_4": {
    "heroId": "human_hero_4",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_5": {
    "heroId": "human_hero_5",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_6": {
    "heroId": "human_hero_6",
    "tier": "D",
    "tierReason": "D: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_7": {
    "heroId": "human_hero_7",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_8": {
    "heroId": "human_hero_8",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "human_hero_9": {
    "heroId": "human_hero_9",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_1": {
    "heroId": "nature_hero_1",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_10": {
    "heroId": "nature_hero_10",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_11": {
    "heroId": "nature_hero_11",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_12": {
    "heroId": "nature_hero_12",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_13": {
    "heroId": "nature_hero_13",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_14": {
    "heroId": "nature_hero_14",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_15": {
    "heroId": "nature_hero_15",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_16": {
    "heroId": "nature_hero_16",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_17": {
    "heroId": "nature_hero_17",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_18": {
    "heroId": "nature_hero_18",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_2": {
    "heroId": "nature_hero_2",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_3": {
    "heroId": "nature_hero_3",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_4": {
    "heroId": "nature_hero_4",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_5": {
    "heroId": "nature_hero_5",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_6": {
    "heroId": "nature_hero_6",
    "tier": "D",
    "tierReason": "D: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_7": {
    "heroId": "nature_hero_7",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_8": {
    "heroId": "nature_hero_8",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "nature_hero_9": {
    "heroId": "nature_hero_9",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_1": {
    "heroId": "necro_hero_1",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_10": {
    "heroId": "necro_hero_10",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_11": {
    "heroId": "necro_hero_11",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_12": {
    "heroId": "necro_hero_12",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_13": {
    "heroId": "necro_hero_13",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_14": {
    "heroId": "necro_hero_14",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_15": {
    "heroId": "necro_hero_15",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_16": {
    "heroId": "necro_hero_16",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_17": {
    "heroId": "necro_hero_17",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_18": {
    "heroId": "necro_hero_18",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_2": {
    "heroId": "necro_hero_2",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_3": {
    "heroId": "necro_hero_3",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_4": {
    "heroId": "necro_hero_4",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_5": {
    "heroId": "necro_hero_5",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_6": {
    "heroId": "necro_hero_6",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_7": {
    "heroId": "necro_hero_7",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_8": {
    "heroId": "necro_hero_8",
    "tier": "D",
    "tierReason": "D: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "necro_hero_9": {
    "heroId": "necro_hero_9",
    "tier": "D",
    "tierReason": "D: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_1": {
    "heroId": "unfrozen_hero_1",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_10": {
    "heroId": "unfrozen_hero_10",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_11": {
    "heroId": "unfrozen_hero_11",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_12": {
    "heroId": "unfrozen_hero_12",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_13": {
    "heroId": "unfrozen_hero_13",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_14": {
    "heroId": "unfrozen_hero_14",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_15": {
    "heroId": "unfrozen_hero_15",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_16": {
    "heroId": "unfrozen_hero_16",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_17": {
    "heroId": "unfrozen_hero_17",
    "tier": "A",
    "tierReason": "A: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_18": {
    "heroId": "unfrozen_hero_18",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de magia que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_2": {
    "heroId": "unfrozen_hero_2",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_3": {
    "heroId": "unfrozen_hero_3",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_4": {
    "heroId": "unfrozen_hero_4",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_5": {
    "heroId": "unfrozen_hero_5",
    "tier": "C",
    "tierReason": "C: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_6": {
    "heroId": "unfrozen_hero_6",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_7": {
    "heroId": "unfrozen_hero_7",
    "tier": "S+",
    "tierReason": "S+: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_8": {
    "heroId": "unfrozen_hero_8",
    "tier": "B",
    "tierReason": "B: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  },
  "unfrozen_hero_9": {
    "heroId": "unfrozen_hero_9",
    "tier": "D",
    "tierReason": "D: combina la especialización canónica, las habilidades iniciales y una ruta de combate físico que no depende de conseguir una subclase. La dificultad real de las tiradas se tiene en cuenta mediante las probabilidades de aparición; las habilidades de baja probabilidad no son condiciones de la build.",
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
    "sources": [
      "https://www.olden-era.com/en/heroes",
      "https://www.olden-era.com/en/classes",
      "https://heavenlyforge.gg/es/olden-era/skills",
      "https://heroes-olden-era.com/es/"
    ]
  }
};

export function getHeroBuildAudit(heroId: string): HeroBuildAudit | null {
  return HERO_BUILD_AUDIT[heroId] ?? null;
}
