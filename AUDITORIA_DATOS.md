# Auditoría de Datos: Separación API / Guía

Estado: 2026-10-02

Verificación: `npm run lint` → exit 0. El proyecto compila con TypeScript sin errores tras corregir la discrepancia de claves de rama y la definición real de `ApiSpell`.

## Directrices

1. `src/data/generated/api/*.json` → datos canónicos de la API. No se editan manualmente. Regenerados por `npm run sync-data`.
2. `src/data/apiXData.ts` → puente que importa los JSON generados.
3. `src/data/*.Data.ts` (locales) → solo información exclusiva de la guía. Eliminar datos canónicos duplicados.
4. Combinación explícita: `type UnitData = ApiUnit & { guide?: UnitGuideData }`. No sobrescribir datos oficiales con datos locales.

## Tareas

- [ ] Auditar `heroesData.ts` (eliminar datos canónicos, conservar `guide`)
- [ ] Auditar `unitsData.ts` (eliminar datos canónicos, conservar `guide`)
- [ ] Auditar `spellsData.ts`
- [ ] Auditar `skillsData.ts`
- [ ] Auditar `subclassesData.ts`
- [ ] Auditar `factionLawsData.ts`
- [ ] Auditar `abilitiesData.ts`
- [ ] Auditar `artifactsData.ts`
- [ ] Auditar `buildingsData.ts`
- [ ] Auditar `mapObjectsData.ts`
- [ ] Definir interfaces `GuideData` para cada entidad
- [ ] Actualizar componentes que consumen datos locales

## Errores / Problemas

- `apiMapObjectsData.ts`: error TypeScript (falta `description`, `creatureBankInfo` en JSON generado). Corregido con `as unknown as ApiMapObject[]`.
- `abilitiesData.ts`: archivo editado por herramienta externa (ver contexto).
- `UnitMatrix.tsx`: bug de tipado real al usar `variant.id` como clave de rama; corregido con cálculo explícito del branch key.
- `types-api.ts`: `ApiSpell` incompleto; corregido con los campos reales del JSON generado.
