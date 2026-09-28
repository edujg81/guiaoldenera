# Sincronización de Endpoints API → Datos Locales

Servidor: `http://localhost:5176`
Estado: API = fuente de verdad absoluta para datos del juego

---

## Endpoints con Estructura Local Existente

| Endpoint API | Archivo Local | Estado | Notas |
|---|---|---|---|
| `/api/heroes` | `src/data/heroesData.ts` | ✅ Completo | 108 héroes, 6 facciones, `DungeonHero` interface |
| `/api/heroes/{id}` | `src/data/heroesData.ts` | ✅ Detalles | Héroe individual con stats, skills, spells, army |
| `/api/units` | `src/data/apiUnitsData.ts` | ✅ API Catálogo | 148 unidades (id, name, faction, tier, iconPath, isOrphan, scale, prefabPath) |
| `/api/units/{id}` | `src/data/apiUnitsData.ts` | ✅ API Detalles | Unidad individual con stats, abilities, costs (ver unitAssetsData.ts para locales) |
| `/api/spells` | `src/data/apiSpellsData.ts` | ✅ API Catálogo | 115 hechizos (id, name, school, rank, category, icon, isMasterful) |
| `/api/spells/{id}` | `src/data/apiSpellsData.ts` | ✅ API Detalles | Hechizo individual con descripción, coste, duración (ver spellsData.ts para locales) |
| `/api/skills` | `src/data/apiSkillsData.ts` | ✅ API Catálogo | 30 habilidades (id, name, icon, skillType, levels) |
| `/api/skills/{id}` | `src/data/apiSkillsData.ts` | ✅ API Detalles | Habilidad individual con niveles, subhabilidades (ver officialSkillsData.ts para locales) |
| `/api/subclasses` | `src/data/apiSubclassesData.ts` | ✅ API Catálogo | 24 subclases (id, name, faction, classType, icon) |
| `/api/subclasses/{id}` | `src/data/apiSubclassesData.ts` | ✅ API Detalles | Subclase individual con requisitos, análisis (ver subclassesData.ts para locales) |
| `/api/faction-laws` | `src/data/apiFactionLawsData.ts` | ✅ API Catálogo | Leyes por facción (id, name, faction, icon) |
| `/api/faction-laws/{id}` | `src/data/apiFactionLawsData.ts` | ✅ API Detalles | Ley individual con niveles, efectos (ver factionLawsData.ts para locales) |

---

## Endpoints SIN Estructura Local (Requieren Creación)

| Endpoint API | Registros | Archivo Propuesto | Interfaz Propuesta | Prioridad | Estado |
|---|---|---|---|---|---|
| `/api/artifacts` | 298 | `src/data/artifactsData.ts` | `ArtifactInfo` | Alta | ✅ Existe |
| `/api/artifacts/{id}` | 298 | `src/data/artifactsData.ts` | `ArtifactInfo` | Alta | ✅ Existe |
| `/api/abilities` | 337 | `src/data/abilitiesData.ts` | `AbilityInfo` | Alta | ✅ Existe |
| `/api/abilities/{id}` | 337 | `src/data/abilitiesData.ts` | `AbilityInfo` | Alta | ✅ Existe |
| `/api/buildings` | 207 | `src/data/buildingsData.ts` | `BuildingInfo` | Media | ✅ Existe |
| `/api/buildings/{id}` | 207 | `src/data/buildingsData.ts` | `BuildingInfo` | Media | ✅ Existe |
| `/api/map-objects` | 201 | `src/data/mapObjectsData.ts` | `MapObjectInfo` | Media | ✅ Existe |
| `/api/map-objects/{*id}` | 201 | `src/data/mapObjectsData.ts` | `MapObjectInfo` | Media | ✅ Existe |

---

## Mapeo Completo API → Local (Todos los Endpoints)

### 1. `/api/heroes` → `heroesData.ts`
- **Campos API**: `id`, `name`, `faction`, `factionDisplay`, `classType`, `classDisplay`, `iconPath`
- **Campos locales adicionales**: `idealSkillBuild`, `statGrowth`, `tacticalPlaystyle`, `synergyCombo`, `day1Action`, `title`, `heroClass`, `tierRank`, `recommendedStartingTier`, `role`
- **Estado**: Sincronizado (API = catálogo, local = extensión)

### 2. `/api/units` → `unitAssetsData.ts`
- **Campos API**: `id`, `name`, `faction`, `factionDisplay`, `tier`, `iconPath`, `isOrphan`, `scale`, `prefabPath`
- **Campos locales adicionales**: `nameEs`, `nameEn`, `faction_id`, `faction_image`, `visual_3d`
- **Estado**: Sincronizado (API = datos canónicos, local = assets + nombres ES/EN)

### 3. `/api/spells` → `spellsData.ts`
- **Campos API**: `id`, `name`, `school`, `schoolDisplay`, `schoolTierText`, `rank`, `category`, `icon`, `isMasterful`, `baseNameForSort`
- **Campos locales adicionales**: `description`, `effect`, `manaCost`, `duration`, `targetType`
- **Estado**: Sincronizado (API = catálogo oficial, local = efectos y descripciones)

### 4. `/api/skills` → `officialSkillsData.ts`
- **Campos API**: `id`, `name`, `icon`
- **Campos locales adicionales**: `category`, `upgrades` (basic/advanced/expert), `subskills`, `startingHeroes`
- **Estado**: Sincronizado (API = catálogo básico, local = árbol completo de subhabilidades)

### 5. `/api/subclasses` → `subclassesData.ts`
- **Campos API**: `id`, `name`, `faction`, `factionDisplay`, `classType`, `classDisplay`, `icon`
- **Campos locales adicionales**: `baseClass`, `bonusTitle`, `bonusEffect`, `requiredSkills`, `recommendedHeroes`, `tacticalTier`, `strategicAnalysis`, `synergyNotes`
- **Estado**: Sincronizado (API = catálogo básico, local = análisis táctico completo)

### 6. `/api/faction-laws` → `factionLawsData.ts`
- **Campos API**: `id`, `name`, `faction`, `factionDisplay`, `level`, `maxLevel`, `iconPath`, `category`
- **Campos locales adicionales**: `description`, `effect`, `sealRequirements`, `tierProgression`
- **Estado**: Sincronizado

---

## Endpoints que Requieren Creación de Estructuras (COMPLETADOS)

### `/api/artifacts` y `/api/artifacts/{id}` (298 registros)
**Archivo**: `src/data/artifactsData.ts` ✅ EXISTE
**Interfaz**: `ArtifactInfo` con campos API + locales (description, narrativeDescription, upgradeDescription, upgradeCost, destroyReward, setBonus, setItems, faction)
**Estado**: ✅ Sincronizado - datos completos con conjuntos, mejoras y bonificaciones

### `/api/abilities` y `/api/abilities/{id}` (337 registros)
**Archivo**: `src/data/abilitiesData.ts` ✅ EXISTE
**Interfaz**: `AbilityInfo` con campos API + locales (description, effect, faction, creatureType)
**Estado**: ✅ Sincronizado - datos completos con tipos Active/Passive/Aura

### `/api/buildings` y `/api/buildings/{id}` (207 registros)
**Archivo**: `src/data/buildingsData.ts` ✅ EXISTE
**Interfaz**: `BuildingInfo` con campos API + locales (description, cost, prerequisites)
**Estado**: ✅ Sincronizado - datos completos con categorías y costes

### `/api/map-objects` y `/api/map-objects/{*id}` (201 registros)
**Archivo**: `src/data/mapObjectsData.ts` ✅ EXISTE
**Interfaz**: `MapObjectInfo` con campos API + locales (description, interactionType)
**Estado**: ✅ Sincronizado - datos completos con categorías, bankType, guards, rewards

---

## Estrategia de Creación para Endpoints Faltantes

1. **Artefactos (`/api/artifacts`)**: Crear `src/data/artifactsData.ts` con `ArtifactInfo[]` y exportar `ARTIFACTS_DATA`. Incluir datos mínimos (id, name, rarity, slot, icon) y dejar campos locales (description, effect) como opcionales para completar posteriormente.

2. **Habilidades (`/api/abilities`)**: Crear `src/data/abilitiesData.ts` con `AbilityInfo[]`. Mapear `abilityType` (Active/Passive/Aura) y `icon`. Dejar `description` y `effect` para completar con datos del juego.

3. **Edificios (`/api/buildings`)**: Crear `src/data/buildingsData.ts` con `BuildingInfo[]`. Mapear `category` (mains/creature/magic/defense/economy) y `level/maxLevel`. Dejar `cost` y `prerequisites` para completar.

4. **Objetos del mapa (`/api/map-objects`)**: Crear `src/data/mapObjectsData.ts` con `MapObjectInfo[]`. Mapear `category`, `bankType`, `hasGuards`, `rewardTypes`. Dejar `description` para completar.

---

## Resumen de Estado de Sincronización

| Endpoint | Registros | Archivo Local | Estado | Acción Requerida |
|---|---|---|---|---|
| `/api/heroes` | 108 | `heroesData.ts` | ✅ Sincronizado | Ninguna |
| `/api/units` | 148 | `unitAssetsData.ts` | ✅ Sincronizado | Ninguna |
| `/api/spells` | 115 | `spellsData.ts` | ✅ Sincronizado | Ninguna |
| `/api/skills` | 30 | `officialSkillsData.ts` | ✅ Sincronizado | Ninguna |
| `/api/subclasses` | 24 | `subclassesData.ts` | ✅ Sincronizado | Ninguna |
| `/api/faction-laws` | - | `factionLawsData.ts` | ✅ Sincronizado | Ninguna |
| `/api/artifacts` | 298 | `artifactsData.ts` | ✅ Sincronizado | Ninguna |
| `/api/abilities` | 337 | `abilitiesData.ts` | ✅ Sincronizado | Ninguna |
| `/api/buildings` | 207 | `buildingsData.ts` | ✅ Sincronizado | Ninguna |
| `/api/map-objects` | 201 | `mapObjectsData.ts` | ✅ Sincronizado | Ninguna |

---

## Recomendación Final

La API es la fuente de verdad para todos los datos del juego. La aplicación debe:

1. **Mantener** los archivos locales existentes (`heroesData.ts`, `unitAssetsData.ts`, etc.) como extensiones con datos exclusivos de la aplicación.
2. **Crear** los 4 archivos faltantes (`artifactsData.ts`, `abilitiesData.ts`, `buildingsData.ts`, `mapObjectsData.ts`) con estructuras mínimas que mapeen los campos de la API.
3. **Implementar** un mecanismo de sincronización que compare los datos de la API con los locales y actualice los campos canónicos sin perder los datos exclusivos.
4. **Documentar** cualquier cambio en `API_ENDPOINTS.md` y `sync-log.md`.
