# Data Sync Instructions

## Sincronización de Datos
- Ejecutar `npm run sync-data` (`tsx scripts/sync-olden-era.ts`) para actualizar los datos de la API desde el repositorio remoto.
- Los datos sincronizados se guardan en `src/data/generated/api/*.json`.
- **Nunca edites manualmente** los JSON en `src/data/generated/api/`; se regeneran automáticamente.

## Flujo de Trabajo
1. Ejecuta `npm run sync-data` para obtener los últimos datos de la API.
2. Revisa los cambios en `src/data/generated/api/`.
3. Si necesitas añadir datos editoriales (análisis, recomendaciones), edita el archivo `*Data.ts` correspondiente.
4. Valida con `npm run lint` (tsc --noEmit) y `npm run build`.

## Archivos Clave
- `scripts/sync-olden-era.ts`: script de sincronización.
- `src/data/generated/api/`: datos canónicos de la API.
- `src/data/api*Data.ts`: importadores de datos de la API.
- `src/data/*Data.ts`: datos combinados (API + editorial).
