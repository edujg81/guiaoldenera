import type { GuideSpell } from '../../types';

// Datos exclusivos de la guía. Los datos canónicos del hechizo proceden de generated/api/spells.json.
export const ARCANE_SPELL_GUIDE: GuideSpell[] = [
  {
    "id": "space_1_magic_early_start",
    "priority": "Alta (P3)",
    "tacticalUtility": "Garantiza que tus tropas lentas como Minotauros e Hidras actúen antes que las escuadras enemigas.",
    "whereToLearn": "Cofradía de Magos Nivel 1, Santuarios Arcanos.",
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
    "id": "space_3_magic_energyze",
    "priority": "Alta (P3)",
    "tacticalUtility": "Permite a criaturas con habilidades con recarga (como miradas petrificantes o disparos cargados) usarlas de inmediato.",
    "whereToLearn": "Cofradía de Magos Nivel 2, Santuarios Arcanos.",
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
    "id": "space_4_magic_optical_illusion",
    "priority": "Alta (P3)",
    "tacticalUtility": "Duplicar una pila de Hidras, Minotauros o Dragones duplica inmediatamente tu potencia de fuego en combate.",
    "whereToLearn": "Cofradía de Magos Nivel 3, Santuarios Arcanos.",
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
    "id": "space_6_magic_blink",
    "priority": "Imprescindible (P1)",
    "tacticalUtility": "Coloca a tu Hidra Infernal justo en el centro de 4 escuadras enemigas para que descargue su ataque de 360º sin represalia.",
    "whereToLearn": "Cofradía de Magos Nivel 3, Santuarios Arcanos.",
    "unlockCost": {
      "formula": "Tier 3 × (2 Cristales, 2 Gemas, 2 Mercurio) + 1.500 Oro",
      "gold": 1500,
      "crystals": 6,
      "gems": 6,
      "mercury": 6,
      "astrologyPoints": 6,
      "description": "Cofradía III o compra en Observatorio por 6 Cristales, 6 Gemas, 6 Mercurio y 1.500 Oro."
    },
    "astrologyCost": 6,
    "astrologyPointsCost": "6 Pts Astrología"
  },
  {
    "id": "space_11_magic_decimate",
    "priority": "Alta (P3)",
    "tacticalUtility": "Remata pilas gigantescas semidañadas sin darles oportunidad de contraatacar o ser revividas.",
    "whereToLearn": "Cofradía de Magos Nivel 3, Santuarios Arcanos.",
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

];
