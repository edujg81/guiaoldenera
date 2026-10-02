# Auditoría de Datos: Separación API / Guía

Estado: 2026-10-02

Verificación: `npm run lint` → exit 0. El proyecto compila con TypeScript sin errores tras cerrar la última duplicación canónica en los datasets locales.

## Directrices

1. `src/data/generated/api/*.json` → datos canónicos de la API. No se editan manualmente. Regenerados por `npm run sync-data`.
2. `src/data/apiXData.ts` → puente que importa los JSON generados.
3. `src/data/*.Data.ts` (locales) → solo información exclusiva de la guía. Eliminar duplicados canónicos.
4. Combinación explícita: `type UnitData = ApiUnit & { guide?: UnitGuideData }`. No sobrescribir datos oficiales con edición local.

## Estado actual

- [x] `heroesData.ts` mantiene el catálogo editorial y no duplica el JSON canónico.
- [x] `unitsData.ts` sigue el patrón de mezcla explícita con guías locales.
- [x] `spellsData.ts` usa API + guía editorial combinados por merge explícito.
- [x] `skillsData.ts` / `subclassesData.ts` / `factionLawsData.ts` mantienen la separación correcta.
- [x] `abilitiesData.ts` re-expone la API con campos editoriales vacíos, sin clonar el contenido canónico.
- [x] `artifactsData.ts` re-expone la API con campos editoriales vacíos, sin clonar el contenido canónico.
- [x] `buildingsData.ts` expone la API canónica sin duplicación estática.
- [x] `mapObjectsData.ts` expone la API canónica sin duplicación estática.
- [x] Definidas las interfaces extendidas en `src/types-api.ts` para marcar el punto de extensión editorial.

## Errores / Problemas cerrados

- `apiMapObjectsData.ts`: error TypeScript por `description` / `creatureBankInfo` en JSON generado. Corregido con casteo explícito.
- `abilitiesData.ts`: archivo con datos canónicos duplicados en un array local. Reescrito como wrapper sobre `API_ABILITIES_DATA`.
- `artifactsData.ts`: mismo problema de duplicación. Reescrito como wrapper sobre `API_ARTIFACTS_DATA`.
- `buildingsData.ts` / `mapObjectsData.ts`: duplicación canónica local. Reescritos como reexport explícito de la API.
- `UnitMatrix.tsx`: bug de clave de rama resuelto.
- `types-api.ts`: `ApiSpell` corregido con los campos reales del JSON generado.
