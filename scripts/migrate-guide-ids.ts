import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const API_DIR = path.join(ROOT, 'src/data/generated/api');

function normalize(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

async function readJson<T>(fileName: string): Promise<T> {
  const filePath = path.join(API_DIR, fileName);
  return JSON.parse(await readFile(filePath, 'utf8')) as T;
}

type ApiUnit = {
  id: string;
  name?: string;
  localizedName?: string;
};

type ApiSubclass = {
  id: string;
  name: string;
};

async function migrateUnits(): Promise<void> {
  const apiUnits = await readJson<ApiUnit[]>('units.json');

  const unitsByName = new Map<string, string>();

  for (const unit of apiUnits) {
    const names = [unit.localizedName, unit.name];

    for (const name of names) {
      if (name) {
        unitsByName.set(normalize(name), unit.id);
      }
    }
  }

  const files = [
    'dungeonData.ts',
    'templeData.ts',
    'arboledaData.ts',
    'necropolisData.ts',
    'enjambreData.ts',
    'cismaData.ts',
  ];

  let totalChanged = 0;

  for (const fileName of files) {
    const filePath = path.join(ROOT, 'src/data', fileName);
    let source = await readFile(filePath, 'utf8');

    /*
     * Buscamos únicamente:
     *
     *   base:    { id: '...' ... name: '...' }
     *   branchA: { id: '...' ... name: '...' }
     *   branchB: { id: '...' ... name: '...' }
     *
     * La cadena del nombre puede contener caracteres escapados.
     */
    const regex =
      /((?:base|branchA|branchB)\s*:\s*\{\s*id:\s*['"])([^'"]+)(['"][\s\S]{0,2000}?\bname:\s*)(['"])((?:\\.|(?!\4)[\s\S])*)(\4)/g;

    let fileChanged = 0;

    source = source.replace(
      regex,
      (
        match,
        idPrefix,
        currentId,
        namePrefix,
        quote,
        rawName,
        closingQuote
      ) => {
        if (
          currentId !== 'base' &&
          currentId !== 'branch_a' &&
          currentId !== 'branch_b'
        ) {
          return match;
        }

        // Convertimos las secuencias escapadas habituales a su valor real.
        const name = rawName
          .replace(/\\"/g, '"')
          .replace(/\\'/g, "'")
          .replace(/\\\\/g, '\\');

        const apiId = unitsByName.get(normalize(name));

        if (!apiId) {
          throw new Error(
            `No se encontró unidad API para "${name}" en ${fileName}.`
          );
        }

        if (currentId === apiId) {
          return match;
        }

        fileChanged++;
        totalChanged++;

        return `${idPrefix}${apiId}${closingQuote}${namePrefix}${quote}${rawName}${closingQuote}`;
      }
    );

    await writeFile(filePath, source, 'utf8');

    console.log(
      `${fileName}: ${fileChanged} IDs de variantes corregidos.`
    );
  }

  console.log(`\nUnidades: ${totalChanged} IDs corregidos.`);
}

async function migrateSubclasses(): Promise<void> {
  const apiSubclasses =
    await readJson<ApiSubclass[]>('subclasses.json');

  const subclassesByName = new Map<string, string>();

  for (const subclass of apiSubclasses) {
    subclassesByName.set(
      normalize(subclass.name),
      subclass.id
    );
  }

  const filePath = path.join(ROOT, 'src/data/subclassesData.ts');
  let source = await readFile(filePath, 'utf8');

  const regex =
    /(\bid:\s*['"])(subclass-[^'"]+)(['"][\s\S]{0,1500}?\bname:\s*['"])([^'"]+)(['"])/g;

  let changed = 0;

  source = source.replace(
    regex,
    (
      match,
      idPrefix,
      currentId,
      namePrefix,
      name,
      closingQuote
    ) => {
      const apiId = subclassesByName.get(normalize(name));

      if (!apiId) {
        throw new Error(
          `No se encontró subclase API para "${name}".`
        );
      }

      if (currentId === apiId) {
        return match;
      }

      changed++;

      return `${idPrefix}${apiId}${namePrefix}${name}${closingQuote}`;
    }
  );

  await writeFile(filePath, source, 'utf8');

  console.log(
    `subclassesData.ts: ${changed} IDs de subclases corregidos.`
  );
}

await migrateUnits();
await migrateSubclasses();

console.log('\nMigración completada correctamente.');