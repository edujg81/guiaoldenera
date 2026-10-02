import type { GuideSpell } from '../../types';

// Datos exclusivos de la guía. Los datos canónicos del hechizo proceden de generated/api/spells.json.
export const PRIMAL_SPELL_GUIDE: GuideSpell[] = [
  {
    "id": "primal_2_magic_thick_hide",
    "priority": "Alta (P3)",
    "tacticalUtility": "Convierte a los Trogloditas y Minotauros en tanques resistentes frente a daño físico neutral.",
    "whereToLearn": "Cofradía de Magos Nivel 1, Santuarios Primigenios Nivel 1.",
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
    "id": "primal_1_magic_thunderbolt",
    "priority": "Alta (P3)",
    "tacticalUtility": "Elimina de un solo golpe tiradores neutrales y pilas de apoyo antes de que se activen.",
    "whereToLearn": "Cofradía de Magos Nivel 2, Santuarios Primigenios.",
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
    "id": "primal_4_magic_fire_globe",
    "priority": "Alta (P3)",
    "tacticalUtility": "Destruye agrupaciones de unidades de nivel bajo a medio de un solo lanzamiento en Turno 1.",
    "whereToLearn": "Cofradía de Magos Nivel 3, Santuarios Primigenios.",
    "unlockCost": {
      "formula": "Tier 3 × (2 Cristales, 2 Gemas, 2 Mercurio) + 1.500 Oro",
      "gold": 1500,
      "crystals": 6,
      "gems": 6,
      "mercury": 6,
      "astrologyPoints": 6,
      "description": "Cofradía III o compra en Observatorio."
    },
    "astrologyCost": 6,
    "astrologyPointsCost": "6 Pts Astrología"
  },
  {
    "id": "primal_6_magic_ice_bolt",
    "priority": "Media (P3)",
    "tacticalUtility": "Combina daño mono-objetivo con un efecto de ralentización para kitear con Medusas.",
    "whereToLearn": "Cofradía de Magos Nivel 2, Santuarios Primigenios.",
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
    "id": "primal_7_magic_wall_of_flame",
    "priority": "Alta (P3)",
    "tacticalUtility": "Canaliza los movimientos enemigos y castiga a la infantería que intente acercarse a tu línea de tiradores.",
    "whereToLearn": "Cofradía de Magos Nivel 2, Santuarios Primigenios.",
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
    "id": "primal_12_magic_chain_lightning",
    "priority": "Muy Alta (P2)",
    "tacticalUtility": "Diezma ejércitos enteros en campo abierto si el rival agrupa sus tropas cerca entre sí.",
    "whereToLearn": "Cofradía de Magos Nivel 4 de Mazmorra, Santuarios de Nivel 4.",
    "unlockCost": {
      "formula": "Tier 4 × (2 Cristales, 2 Gemas, 2 Mercurio) + 2.000 Oro",
      "gold": 2000,
      "crystals": 8,
      "gems": 8,
      "mercury": 8,
      "astrologyPoints": 8,
      "description": "Cofradía IV o compra en Observatorio por 8 Cristales, 8 Gemas, 8 Mercurio y 2.000 Oro."
    },
    "astrologyCost": 8,
    "astrologyPointsCost": "8 Pts Astrología"
  }
];
