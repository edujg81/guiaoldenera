# Data Layer Instructions

## Jerarquía de Fuentes
1. **Canónica (API)**: `src/data/generated/api/*.json` → importada por `src/data/api*Data.ts`. Es la autoridad para todos los datos del juego.
2. **Editorial (Guía)**: `src/data/*Data.ts` (ej. `subclassesData.ts`) fusiona los datos de la API con datos editoriales (ej. `GUIDE_SUBCLASSES`).
3. **Tipos**: canónicos en `src/types-api.ts`, editoriales en `src/types.ts`.

## Protocolo de Modificación
- Nunca modifiques los JSON en `src/data/generated/api/`. Se regeneran con `npm run sync-data`.
- Para añadir datos editoriales (análisis, recomendaciones), edita el archivo `*Data.ts` correspondiente.
- Los datos de la API son canónicos; los editoriales deben identificarse claramente como análisis derivado.
- Ante una discrepancia, conserva el dato de la API como canónico y documenta la afirmación discrepante con su fuente.

## Convenciones
- Los archivos de datos deben estar en castellano neutro y preciso.
- Los nombres de unidades, héroes y habilidades deben seguir la ortografía oficial de Olden Era.
- Los datos de la API no deben ser contradichos por datos editoriales.