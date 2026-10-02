import type { GuideSpell } from '../../types';

// Datos exclusivos de la guía. Los datos canónicos del hechizo proceden de generated/api/spells.json.
export const NEUTRAL_SPELL_GUIDE: GuideSpell[] = [
  {
    "id": "neutral_magic_town_portal",
    "priority": "Imprescindible (P1)",
    "tacticalUtility": "HECHIZO NEUTRAL SUPREMO. Permite defender cualquier castillo asediado al instante y recoger refuerzos semanales de múltiples capitales en 1 solo turno sin perder tempo.",
    "whereToLearn": "Observatorio del Reino, Santuarios Supremos neutrales, Pirámides y Códices de Aventura.",
    "unlockCost": {
      "formula": "3 Puntos de Observación (Nivel 1) • +1 Pto adicional por cada nivel posterior",
      "gold": 0,
      "astrologyPoints": 3,
      "observationPoints": 3,
      "insight": 3,
      "description": "Confirmado: Adquisición en el Observatorio mediante 3 Puntos de Observación para Nivel 1. Cada nivel posterior cuesta +1 punto de observación adicional (+1 Pto/Nivel). Sin coste de oro, polvo alquímico ni recursos minerales."
    },
    "astrologyCost": 3,
    "astrologyPointsCost": "3 Pts Observación",
    "observationCost": 3,
    "observationPerLevelCost": 1,
    "isConfirmedCost": true,
    "isNeutral": true,
    "guildPointsCost": "3 Puntos de Observación (Nivel 1)"
  },
  {
    "id": "neutral_magic_dimension_door",
    "priority": "Imprescindible (P1)",
    "tacticalUtility": "HECHIZO NEUTRAL DE ASALTO SUPREMO. Permite saltar guarniciones enemigas fortificadas y caer directamente sobre la capital del rival antes de que pueda reaccionar.",
    "whereToLearn": "Observatorio del Reino, Santuarios Supremos, Pirámides y Tomos Arcanos.",
    "unlockCost": {
      "formula": "4 Puntos de Observación (Nivel 1) • +1 Pto adicional por cada nivel posterior",
      "gold": 0,
      "astrologyPoints": 4,
      "observationPoints": 4,
      "insight": 4,
      "description": "Confirmado: Adquisición en el Observatorio mediante 4 Puntos de Observación / Astrología para Nivel 1 (High Neutral Magic). Cada nivel posterior cuesta +1 punto de observación adicional (+1 Pto/Nivel). Sin coste de oro, polvo alquímico ni recursos minerales."
    },
    "astrologyCost": 4,
    "astrologyPointsCost": "4 Pts Observación",
    "observationCost": 4,
    "observationPerLevelCost": 1,
    "isConfirmedCost": true,
    "isNeutral": true,
    "guildPointsCost": "4 Puntos de Observación (Nivel 1)"
  },
  {
    "id": "neutral_magic_shadow_form",
    "priority": "Muy Alta (P2)",
    "tacticalUtility": "Hechizo neutral de movilidad absoluta. Evita perder días enteros rodeando terreno difícil y permite asaltar minas y castillos tras líneas defensivas naturales.",
    "whereToLearn": "Observatorio del Reino, Santuarios Supremos, Pirámides y Códices Arcanos.",
    "unlockCost": {
      "formula": "Sin definir (Pendiente de confirmación oficial)",
      "gold": 0,
      "description": "Adquisición en el Observatorio mediante Puntos de Observación. El coste exacto de puntos de observación no ha sido publicado oficialmente aún para este hechizo y permanece pendiente de confirmación en el compendio canónico. Sin coste de oro, polvo ni recursos minerales."
    },
    "astrologyPointsCost": "Sin definir (Pendiente de confirmación)",
    "isConfirmedCost": false,
    "isNeutral": true,
    "guildPointsCost": "Sin definir (Pendiente de confirmación)"
  },
  {
    "id": "bonus_magic_pure_bolt",
    "priority": "Básica (P4)",
    "tacticalUtility": "Ataque de remate de muy bajo coste en los primeros combates para liquidar unidades enemigas con pocos PV.",
    "whereToLearn": "Libro de Hechizos inicial, Observatorio del Reino, Cofradía de Magos.",
    "unlockCost": {
      "formula": "Sin definir (Pendiente de confirmación oficial)",
      "gold": 0,
      "description": "Conocido automáticamente al inicio por la mayoría de héroes o adquirido en Observatorio mediante Puntos de Observación. El coste exacto de puntos de observación no ha sido publicado oficialmente aún para este hechizo y permanece pendiente de confirmación en la versión final. Sin coste de oro, polvo ni recursos minerales."
    },
    "astrologyPointsCost": "Sin definir (Pendiente de confirmación)",
    "isConfirmedCost": false,
    "isNeutral": true,
    "guildPointsCost": "Sin definir (Pendiente de confirmación)"
  },
  {
    "id": "bonus_magic_kill_summon",
    "priority": "Situacional",
    "tacticalUtility": "Anula invocaciones de Elementales o Reflejos Ilusorios lanzados por magos rivales.",
    "whereToLearn": "Observatorio del Reino, Cofradía de Magos, Santuarios Neutrales.",
    "unlockCost": {
      "formula": "Sin definir (Pendiente de confirmación oficial)",
      "gold": 0,
      "description": "Adquisición en el Observatorio mediante Puntos de Observación. El coste exacto en puntos no ha sido publicado oficialmente aún para este hechizo y permanece pendiente de confirmación en la versión final. Sin coste de oro, polvo ni recursos minerales."
    },
    "astrologyPointsCost": "Sin definir (Pendiente de confirmación)",
    "isConfirmedCost": false,
    "isNeutral": true,
    "guildPointsCost": "Sin definir (Pendiente de confirmación)"
  },
  {
    "id": "night_bonus_magic_1_magic",
    "priority": "Alta (P3)",
    "tacticalUtility": "Protege a tu ejército contra cadenas de rayos, bolas de fuego y lluvias de meteoros de magos rivales.",
    "whereToLearn": "Observatorio del Reino, Cofradía de Magos, Santuarios Neutrales.",
    "unlockCost": {
      "formula": "Sin definir (Pendiente de confirmación oficial)",
      "gold": 0,
      "description": "Adquisición en el Observatorio mediante Puntos de Observación. El coste exacto en puntos no ha sido publicado oficialmente aún para este hechizo y permanece pendiente de confirmación en la versión final. Sin coste de oro, polvo ni recursos minerales."
    },
    "astrologyPointsCost": "Sin definir (Pendiente de confirmación)",
    "isConfirmedCost": false,
    "isNeutral": true,
    "guildPointsCost": "Sin definir (Pendiente de confirmación)"
  },
  {
    "id": "primal_bonus_magic_1_magic",
    "priority": "Situacional",
    "tacticalUtility": "Castiga a unidades fuertemente buffadas por el enemigo haciéndolas estallar por la saturación de magia.",
    "whereToLearn": "Observatorio del Reino, Cofradía de Magos, Santuarios Neutrales.",
    "unlockCost": {
      "formula": "Sin definir (Pendiente de confirmación oficial)",
      "gold": 0,
      "description": "Adquisición en el Observatorio mediante Puntos de Observación. El coste exacto en puntos no ha sido publicado oficialmente aún para este hechizo y permanece pendiente de confirmación en la versión final. Sin coste de oro, polvo ni recursos minerales."
    },
    "astrologyPointsCost": "Sin definir (Pendiente de confirmación)",
    "isConfirmedCost": false,
    "isNeutral": true,
    "guildPointsCost": "Sin definir (Pendiente de confirmación)"
  }
];
