import type { GuideSpell } from '../../types';

// Datos exclusivos de la guía. Los datos canónicos del hechizo proceden de generated/api/spells.json.
export const DAYLIGHT_SPELL_GUIDE: GuideSpell[] = [
  {
    "id": "day_3_magic_haste",
    "priority": "Muy Alta (P2)",
    "tacticalUtility": "Permite que Minotauros e Hidras alcancen las líneas enemigas en el Turno 1 antes de que disparen.",
    "whereToLearn": "Cofradía de Magos Nivel 1, Santuarios de Luz Nivel 1.",
    "unlockCost": {
      "formula": "Tier 1 × (2 Cristales, 2 Gemas, 2 Mercurio) + 500 Oro",
      "gold": 500,
      "crystals": 2,
      "gems": 2,
      "mercury": 2,
      "astrologyPoints": 2,
      "description": "Cofradía I o compra en Observatorio por 2 Cristales, 2 Gemas, 2 Mercurio y 500 Oro."
    },
    "astrologyCost": 2,
    "astrologyPointsCost": "2 Pts Astrología"
  },
  {
    "id": "day_2_magic_sharp_edge",
    "priority": "Alta (P3)",
    "tacticalUtility": "Ideal en unidades con rangos de daño muy variables (ej. Hidras y Trogloditas) para maximizar DPS.",
    "whereToLearn": "Cofradía de Magos Nivel 1, Santuarios de Luz Nivel 1.",
    "unlockCost": {
      "formula": "Tier 1 × (2 Cristales, 2 Gemas, 2 Mercurio) + 500 Oro",
      "gold": 500,
      "crystals": 2,
      "gems": 2,
      "mercury": 2,
      "astrologyPoints": 2,
      "description": "Cofradía I o compra en Observatorio por 2 Cristales, 2 Gemas, 2 Mercurio y 500 Oro."
    },
    "astrologyCost": 2,
    "astrologyPointsCost": "2 Pts Astrología"
  },
  {
    "id": "day_1_magic_healing_water",
    "priority": "Media (P3)",
    "tacticalUtility": "Mantiene viva a la primera línea de Minotauros durante las primeras limpiezas del mapa.",
    "whereToLearn": "Cofradía de Magos Nivel 1, Santuarios de Luz Nivel 1.",
    "unlockCost": {
      "formula": "Tier 1 × (2 Cristales, 2 Gemas, 2 Mercurio) + 500 Oro",
      "gold": 500,
      "crystals": 2,
      "gems": 2,
      "mercury": 2,
      "astrologyPoints": 2,
      "description": "Cofradía I o compra en Observatorio por 2 Cristales, 2 Gemas, 2 Mercurio y 500 Oro."
    },
    "astrologyCost": 2,
    "astrologyPointsCost": "2 Pts Astrología"
  },
  {
    "id": "day_5_magic_shorten_shadow",
    "priority": "Situacional",
    "tacticalUtility": "Contra facciones oscuras o héroes nigromantes, neutraliza su ventaja de maldiciones.",
    "whereToLearn": "Cofradía de Magos Nivel 3, Santuarios de Luz.",
    "unlockCost": {
      "formula": "Tier 3 × (2 Cristales, 2 Gemas, 2 Mercurio) + 1.500 Oro",
      "gold": 1500,
      "crystals": 6,
      "gems": 6,
      "mercury": 6,
      "astrologyPoints": 5,
      "description": "Cofradía III o compra en Observatorio."
    },
    "astrologyCost": 5,
    "astrologyPointsCost": "5 Pts Astrología"
  }
];
