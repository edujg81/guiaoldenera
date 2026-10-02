import type { GuideSpell } from '../../types';

// Datos exclusivos de la guía. Los datos canónicos del hechizo proceden de generated/api/spells.json.
export const NIGHTSHADE_SPELL_GUIDE: GuideSpell[] = [
  {
    "id": "night_4_magic_despair",
    "priority": "Alta (P3)",
    "tacticalUtility": "Impide que las tropas enemigas obtengan turnos dobles por moral alta y fuerza turnos congelados.",
    "whereToLearn": "Cofradía de Magos Nivel 1, Santuarios de Sombras.",
    "unlockCost": {
      "formula": "Tier 1 × (2 Cristales, 2 Gemas, 2 Mercurio) + 500 Oro",
      "gold": 500,
      "crystals": 2,
      "gems": 2,
      "mercury": 2,
      "astrologyPoints": 2,
      "description": "Cofradía I o compra en Observatorio."
    },
    "astrologyCost": 2,
    "astrologyPointsCost": "2 Pts Astrología"
  },
  {
    "id": "night_7_magic_fatal_decay",
    "priority": "Alta (P3)",
    "tacticalUtility": "Excelente contra criaturas neutrales con enormes pilas de vida que tardan varios turnos en morir.",
    "whereToLearn": "Cofradía de Magos Nivel 2, Santuarios de Sombras.",
    "unlockCost": {
      "formula": "Tier 2 × (2 Cristales, 2 Gemas, 2 Mercurio) + 1.000 Oro",
      "gold": 1000,
      "crystals": 4,
      "gems": 4,
      "mercury": 4,
      "astrologyPoints": 3,
      "description": "Cofradía II o compra en Observatorio."
    },
    "astrologyCost": 3,
    "astrologyPointsCost": "3 Pts Astrología"
  },
  {
    "id": "night_3_magic_enlarge_shadow",
    "priority": "Media (P3)",
    "tacticalUtility": "Sinergiza a la perfección con Héroes Brujos centrados en la escuela de Sombras.",
    "whereToLearn": "Cofradía de Magos Nivel 3, Santuarios de Sombras.",
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
  },
  {
    "id": "night_1_magic_unnatural_calm",
    "priority": "Situacional",
    "tacticalUtility": "Anula el aliento de dragón enemigo, ataques en torbellino o habilidades mágicas de Celestiales de Temple, Nigromantes o Druidas Silvanos.",
    "whereToLearn": "Cofradía de Magos Nivel 3, Santuarios de Sombras.",
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
