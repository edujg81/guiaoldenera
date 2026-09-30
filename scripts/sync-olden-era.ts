import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const API_BASE =
  process.env.OLDEN_ERA_API ?? 'http://localhost:5176/api';

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

/**
 * Convierte las distintas formas de respuesta de los catálogos
 * de OldenEraExplorer en una lista de registros.
 *
 * Normalmente la API devuelve:
 *   [...]
 *
 * Algunas rutas devuelven:
 *   { value: [...], Count: n }
 *
 * Y otras podrían devolver:
 *   { items: [...] }
 */
function extractItems(data: unknown): unknown[] {
  if (Array.isArray(data)) {
    return data;
  }

  if (!data || typeof data !== 'object') {
    return [];
  }

  const record = data as Record<string, unknown>;

  if (Array.isArray(record.value)) {
    return record.value;
  }

  if (Array.isArray(record.items)) {
    return record.items;
  }

  return [];
}

/**
 * Obtiene el ID de una entrada del catálogo.
 */
function getId(item: unknown): string | null {
  if (!item || typeof item !== 'object') {
    return null;
  }

  const id = (item as Record<string, unknown>).id;

  return typeof id === 'string' && id.length > 0
    ? id
    : null;
}

/**
 * Algunos endpoints tienen IDs que pueden contener caracteres
 * especiales. URLSearchParams/encodeURIComponent evita problemas
 * al construir la ruta del detalle.
 */
function buildDetailUrl(endpoint: string, id: string): string {
  return `${API_BASE}${endpoint}/${encodeURIComponent(id)}`;
}

/**
 * Descarga todos los detalles de un catálogo.
 *
 * Importante:
 * - Primero se obtiene el catálogo.
 * - Después se consulta /{id} para cada entrada.
 * - El JSON final contiene únicamente los detalles completos.
 */
async function fetchDetails(
  endpoint: EndpointConfig,
  catalog: unknown
): Promise<unknown[]> {
  const items = extractItems(catalog);

  const entries = items
    .map((item) => ({
      item,
      id: getId(item),
    }))
    .filter(
      (
        entry
      ): entry is {
        item: unknown;
        id: string;
      } => entry.id !== null
    );

  if (entries.length === 0) {
    throw new Error(
      `El catálogo /${endpoint.name} no contiene registros con id.`
    );
  }

  const details: unknown[] = [];

  for (let index = 0; index < entries.length; index++) {
    const { item: catalogItem, id } = entries[index];
    const url = buildDetailUrl(endpoint.path, id);

    process.stdout.write(
      `  [${String(index + 1).padStart(String(entries.length).length, ' ')}/${entries.length}] ${id}`
    );

    try {
      const detail = await fetchJson(url);

      if (
        catalogItem &&
        typeof catalogItem === 'object' &&
        detail &&
        typeof detail === 'object'
      ) {
        details.push({
          ...(catalogItem as Record<string, unknown>),
          ...(detail as Record<string, unknown>),
        });
      } else {
        details.push(detail);
      }

      console.log(' ✓');
    } catch (error) {
      console.log(' ✗');

      throw new Error(
        `Error obteniendo el detalle de ${endpoint.name}/${id}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }

  return details;
}

async function main() {
  console.log('');
  console.log('========================================');
  console.log(' Olden Era — sincronización de datos');
  console.log('========================================');
  console.log('');
  console.log(`API: ${API_BASE}`);
  console.log(`Destino: ${OUTPUT_DIR}`);
  console.log('');

  await mkdir(OUTPUT_DIR, { recursive: true });

  // Comprobamos primero que OldenEraExplorer está disponible.
  try {
    await fetchJson(`${API_BASE}/game/status`);
  } catch (error) {
    console.error('✗ No se puede conectar con OldenEraExplorer.');
    console.error('');
    console.error(
      `Comprueba que esté ejecutándose en: ${API_BASE}`
    );
    console.error('');
    console.error(
      error instanceof Error ? error.message : error
    );
    console.error('');
    process.exit(1);
  }

  console.log('✓ API de OldenEraExplorer disponible');
  console.log('');

  let successCount = 0;
  let errorCount = 0;
  let totalRecords = 0;

  for (const endpoint of ENDPOINTS) {
    console.log(`▶ ${endpoint.name}`);

    try {
      // 1. Obtener catálogo.
      const catalogUrl = `${API_BASE}${endpoint.path}`;
      const catalog = await fetchJson(catalogUrl);

      const catalogItems = extractItems(catalog);

      console.log(
        `  Catálogo: ${catalogItems.length} registros`
      );

      // 2. Obtener detalle completo de cada registro.
      const details = await fetchDetails(endpoint, catalog);

      // 3. Guardar catálogo + detalle completo.
      const outputPath = path.join(
        OUTPUT_DIR,
        `${endpoint.name}.json`
      );

      await writeFile(
        outputPath,
        `${JSON.stringify(details, null, 2)}\n`,
        'utf8'
      );

      console.log(
        `  ✓ Guardado: ${details.length} registros`
      );
      console.log('');

      successCount++;
      totalRecords += details.length;
    } catch (error) {
      console.error(
        `  ✗ ERROR en ${endpoint.name}`
      );
      console.error(
        `  ${error instanceof Error ? error.message : error}`
      );
      console.log('');

      errorCount++;
    }
  }

  console.log('----------------------------------------');
  console.log(
    `Resultado: ${successCount} correctos, ${errorCount} errores`
  );
  console.log(`Registros descargados: ${totalRecords}`);
  console.log(`Destino: ${OUTPUT_DIR}`);
  console.log('----------------------------------------');
  console.log('');

  if (errorCount > 0) {
    console.error(
      '✗ La sincronización ha terminado con errores.'
    );
    console.error('');
    process.exit(1);
  }

  console.log('✓ Sincronización completada.');
  console.log('');
}

main().catch((error) => {
  console.error('');
  console.error(
    '✗ Error inesperado durante la sincronización.'
  );
  console.error(
    error instanceof Error ? error.message : error
  );
  console.error('');
  process.exit(1);
});