import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd(), 'src/data');

const ID_MAP: Record<string, string> = {
  // =========================
  // MAZMORRA
  // =========================
  'law-t1-troglodytes': 'fraction_law_dungeon_4',
  'law-t1-leaders-nation': 'fraction_law_dungeon_2',
  'law-t1-resource-riches-1': 'fraction_law_dungeon_3',
  'law-t1-dungeon-masters-1': 'fraction_law_dungeon_6',
  'law-t1-celestial-maps': 'fraction_law_dungeon_33',
  'law-t1-arcane-knowledge': 'fraction_law_dungeon_34',
  'law-t1-dragon-scales': 'fraction_law_dungeon_5',

  'law-t2-tax-collectors': 'fraction_law_dungeon_1',
  'law-t2-mining-gems': 'fraction_law_dungeon_14',
  'law-t2-infiltrators': 'fraction_law_dungeon_10',
  'law-t2-dancers': 'fraction_law_dungeon_11',
  'law-t2-dungeon-masters-2': 'fraction_law_dungeon_12',
  'law-t2-dungeon-masters-3': 'fraction_law_dungeon_13',
  'law-t2-alchemists-code-1': 'fraction_law_dungeon_9',

  'law-t3-jadame-maps': 'fraction_law_dungeon_8',
  'law-t3-minotaurs': 'fraction_law_dungeon_18',
  'law-t3-medusae': 'fraction_law_dungeon_19',
  'law-t3-tactical-advantage': 'fraction_law_dungeon_20',
  'law-t3-dungeon-masters-4': 'fraction_law_dungeon_21',
  'law-t3-resource-riches-2': 'fraction_law_dungeon_17',
  'law-t3-or-no-ore': 'fraction_law_dungeon_7',
  'law-t3-spy-network': 'fraction_law_dungeon_15',

  'law-t4-triumvirate-agents': 'fraction_law_dungeon_22',
  'law-t4-hydras': 'fraction_law_dungeon_25',
  'law-t4-dungeon-masters-5': 'fraction_law_dungeon_26',
  'law-t4-dungeon-masters-6': 'fraction_law_dungeon_27',
  'law-t4-alchemists-code-2': 'fraction_law_dungeon_24',
  'law-t4-merchants-guild': 'fraction_law_dungeon_23',
  'law-t4-peoples-jadame': 'fraction_law_dungeon_16',

  'law-t5-dragons': 'fraction_law_dungeon_31',
  'law-t5-dungeon-masters-7': 'fraction_law_dungeon_32',
  'law-t5-resource-riches-3': 'fraction_law_dungeon_30',
  'law-t5-magical-education': 'fraction_law_dungeon_28',
  'law-t5-saturation': 'fraction_law_dungeon_29',

  // =========================
  // CISMA
  // =========================
  'law-cisma-t1-tax-collectors': 'fraction_law_unfrozen_1',
  'law-cisma-t1-generational-wisdom': 'fraction_law_unfrozen_2',
  'law-cisma-t1-ice-power': 'fraction_law_unfrozen_7',
  'law-cisma-t1-unfrozen-strength-1': 'fraction_law_unfrozen_6',
  'law-cisma-t2-mining-mercury': 'fraction_law_unfrozen_14',
  'law-cisma-t2-elite-cultists': 'fraction_law_unfrozen_12',
  'law-cisma-t2-elite-agashoth': 'fraction_law_unfrozen_13',
  'law-cisma-t3-cold-shoulder': 'fraction_law_unfrozen_16',
  'law-cisma-t3-the-abyss-stares-back': 'fraction_law_unfrozen_29',
  'law-cisma-t3-elite-grand-shoths': 'fraction_law_unfrozen_19',
  'law-cisma-t4-absolute-zero': 'fraction_law_unfrozen_36',
  'law-cisma-t4-elite-arbitrators': 'fraction_law_unfrozen_27',
  'law-cisma-t5-elite-abyssal-envoys': 'fraction_law_unfrozen_32',

  // =========================
  // FORESTA
  // =========================
  'law-arboleda-t1-faun-harmony': 'fraction_law_nature_5',
  'law-arboleda-t1-canopy-striders': 'fraction_law_nature_7',
  'law-arboleda-t3-phoenix-ascension': 'fraction_law_nature_27',
  'law-arboleda-t3-iriyad-grace': 'fraction_law_nature_10',
  'law-arboleda-t3-herbomancy-mastery': 'fraction_law_nature_22',
  'law-arboleda-t4-qilin-celestial-ward': 'fraction_law_nature_23',

  // =========================
  // COLMENA
  // =========================
  'law-enjambre-t1-mass-hatching': 'fraction_law_demon_6',
  'law-enjambre-t2-crystal-metabolism': 'fraction_law_demon_13',
  'law-enjambre-t3-hive-queen-majesty': 'fraction_law_demon_23',
  'law-enjambre-t4-biomass-assimilation': 'fraction_law_demon_21',
  'law-enjambre-t4-synaptic-tunnels': 'fraction_law_demon_8',
  'law-enjambre-t5-hivemind-transcendence': 'fraction_law_demon_22',

  // =========================
  // TEMPLO
  // =========================
  'law-temple-t1-double-build': 'fraction_law_human_28',
  'law-temple-t1-encouragement': 'fraction_law_human_25',
  'law-temple-t3-universal-light': 'fraction_law_human_27',
};

const extensions = new Set(['.ts', '.tsx']);

function collectFiles(dir: string): string[] {
  const result: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      result.push(...collectFiles(fullPath));
    } else if (extensions.has(path.extname(entry.name))) {
      result.push(fullPath);
    }
  }

  return result;
}

const files = collectFiles(ROOT);

let totalReplacements = 0;
let changedFiles = 0;

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  let content = original;
  let replacementsInFile = 0;

  for (const [oldId, newId] of Object.entries(ID_MAP)) {
    const escaped = oldId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'g');
    const matches = content.match(regex);

    if (matches) {
      content = content.replace(regex, newId);
      replacementsInFile += matches.length;
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
    totalReplacements += replacementsInFile;
    console.log(
      `${path.relative(process.cwd(), file)}: ${replacementsInFile} referencias corregidas.`
    );
  }
}

console.log('');
console.log(`Archivos modificados: ${changedFiles}`);
console.log(`Referencias corregidas: ${totalReplacements}`);
console.log(`IDs migrados: ${Object.keys(ID_MAP).length}`);