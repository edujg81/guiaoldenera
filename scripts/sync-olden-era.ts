import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const API_BASE = process.env.OLDEN_ERA_API ?? 'http://localhost:5176/api';

const OUTPUT_DIR = path.resolve(
  process.cwd(),
  'src/data/generated/api'
);

interface EndpointConfig {
  name: string;
  path: string;
}

const ENDPOINTS: EndpointConfig[] = [
  { name: 'heroes', path: '/heroes' },
  { name: 'units', path: '/units' },
  { name: 'spells', path: '/spells' },
  { name: 'skills', path: '/skills' },
  { name: 'subclasses', path: '/subclasses' },
  { name: 'faction-laws', path: '/faction-laws' },
  { name: 'abilities', path: '/abilities' },
  { name: 'artifacts', path: '/artifacts' },
  { name: 'buildings', path: '/buildings' },
  { name: 'map-objects', path: '/map-objects' },
];

async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText} — ${url}`
    );
  }

  return response.json();
}

function countRecords(data: unknown): number {
  if (Array.isArray(data)) {
    return data.length;
  }

  if (
    data &&
    typeof data === 'object' &&
    'items' in data &&
    Array.isArray((data as { items?: unknown }).items)
  ) {
    return (data as { items: unknown[] }).items.length;
  }

  return 1;
}

async function main() {
  console.log('');
  console.log('========================================');
  console.log(' Olden Era — sincronización de datos');
  console.log('========================================');
  console.log('');
  console.log(`API: ${API_BASE}`);
  console.log('');

  await mkdir(OUTPUT_DIR, { recursive: true });

  // Primero comprobamos que el servidor responde.
  try {
    await fetchJson(`${API_BASE}/game/status`);
  } catch (error) {
    console.error('✗ No se puede conectar con OldenEraExplorer.');
    console.error('');
    console.error(`Comprueba que esté ejecutándose en: ${API_BASE}`);
    console.error('');
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }

  console.log('✓ API de OldenEraExplorer disponible');
  console.log('');

  let successCount = 0;
  let errorCount = 0;

  for (const endpoint of ENDPOINTS) {
    const url = `${API_BASE}${endpoint.path}`;

    try {
      const data = await fetchJson(url);

      const outputPath = path.join(
        OUTPUT_DIR,
        `${endpoint.name}.json`
      );

      await writeFile(
        outputPath,
        `${JSON.stringify(data, null, 2)}\n`,
        'utf8'
      );

      console.log(
        `✓ ${endpoint.name.padEnd(15)} ${String(countRecords(data)).padStart(4)} registros`
      );

      successCount++;
    } catch (error) {
      console.error(
        `✗ ${endpoint.name.padEnd(15)} ERROR`
      );

      console.error(
        `  ${error instanceof Error ? error.message : error}`
      );

      errorCount++;
    }
  }

  console.log('');
  console.log('----------------------------------------');
  console.log(
    `Resultado: ${successCount} correctos, ${errorCount} errores`
  );
  console.log(`Destino: ${OUTPUT_DIR}`);
  console.log('----------------------------------------');
  console.log('');

  if (errorCount > 0) {
    process.exit(1);
  }

  console.log('✓ Sincronización completada.');
  console.log('');
}

main().catch((error) => {
  console.error('');
  console.error('✗ Error inesperado durante la sincronización.');
  console.error(error);
  process.exit(1);
});