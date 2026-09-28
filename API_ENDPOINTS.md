# Endpoints de la API Descubiertos (Actualizado 2026-09-28)

Servidor: `http://localhost:5176` (OldenEraExplorer - .NET 10)
Fuente: https://github.com/laszlo-gilanyi/OldenEraExplorer

## Endpoints Confirmados (200 OK) — Catálogos

### Unidades y Criaturas
- `GET /api/units` — 148 unidades (id, name, faction, factionDisplay, tier, iconPath, isOrphan, scale, prefabPath)
- `GET /api/units/{id}` — Datos completos (localizedName, factionIcon, attack, defense, minDamage, maxDamage, health, speed, initiative, growth, luck, morale, squadValue, expBonus, description, narrativeDescription, creatureType, passiveAbilities, activeAbilities, costEntries, upgradeCostEntries, usedByHeroes, statLabels)

### Héroes
- `GET /api/heroes` — 108 héroes (id, name, faction, factionDisplay, classType, classDisplay, iconPath)
- `GET /api/heroes/{id}` — Datos completos (attack, defence, spellPower, knowledge, specializationName, specializationDescription, startingArmy, startingSkills, startingSpells, description, motto, statLabels, classIcon, specializationIcon, factionIcon)

### Hechizos
- `GET /api/spells` — 115 hechizos (id, name, school, schoolDisplay, schoolTierText, rank, category, icon, isMasterful, baseNameForSort)
- `GET /api/spells/{id}` — Detalle completo

### Habilidades de Héroe (Skills)
- `GET /api/skills` — 30 habilidades (id, name, icon)
- `GET /api/skills/{id}` — Detalle completo (levels, sub-skills, localized text)

### Subclases
- `GET /api/subclasses` — 24 subclases (id, name, faction, factionDisplay, classType, classDisplay, icon)
- `GET /api/subclasses/{id}` — Detalle completo

### Habilidades de Unidades/Hechizos (Abilities)
- `GET /api/abilities` — 337 habilidades (id, name, abilityType, icon)
- `GET /api/abilities/{id}` — Detalle completo (localized text, immunities, info notes)

### Artefactos
- `GET /api/artifacts` — 298 artefactos (id, name, rarity, slot, raritySlotText, icon, isOrphan, prefabPath)
- `GET /api/artifacts/{id}` — Detalle completo (stats, set bonuses, localized text)

### Edificios
- `GET /api/buildings` — 207 edificios (id, name, faction, factionDisplay, level, maxLevel, iconPath, category)
- `GET /api/buildings/{id}` — Detalle completo (costs, effects, localized text)

### Objetos del Mapa
- `GET /api/map-objects` — 201 objetos (id, name, category, icon, isOrphan, prefabPath, bankType, hasGuards, rewardTypes)
- `GET /api/map-objects/categories` — Categorías disponibles
- `GET /api/map-objects/{*id}` — Detalle completo

### Leyes de Facción
- `GET /api/faction-laws` — Leyes de facción (id, name, faction, factionDisplay, icon)
- `GET /api/faction-laws/{id}` — Detalle completo (levels, localized text)

### Búsqueda Global
- `GET /api/search?q={query}` — Búsqueda full-text en todas las entidades (con location-aware highlighting)

### Referencias Cruzadas
- `GET /api/references/{entityType}/{id}` — Entidades que referencian a esta entidad (backward links)

## Endpoints de Game / Configuración

- `GET /api/game/detect` — Auto-detectar instalaciones del juego (confianza por ruta)
- `POST /api/game/path` — Configurar ruta manualmente (con locale opcional)
- `GET /api/game/status` — Estado de carga y configuración
- `POST /api/game/load` — Cargar datos del juego (requiere ruta válida)
- `DELETE /api/game/path` — Limpiar ruta y descargar datos

- `GET /api/settings` — Configuración actual (theme, locale, resolver, auto-extract)
- `PUT /api/settings` — Actualizar configuración
- `GET /api/settings/locales` — Locales disponibles (16 idiomas)

- `GET /api/labels` — Etiquetas UI localizadas

## Endpoints de Assets / Modelos 3D

- `GET /api/assets/info` — Configuración de servicio de assets
- `GET /api/assets/exists/png/{*path}` — Verificar existencia de ícono
- `GET /api/models/units` — Listar modelos GLB de unidades
- `GET /api/models/map-objects` — Listar modelos GLB de objetos
- `GET /api/models/artifacts` — Listar modelos GLB de artefactos
- `GET /api/models/extracted` — Listar todos los modelos extraídos
- `GET /api/models/unit/{id}/glb` — Obtener archivo GLB de unidad
- `GET /api/models/map-object/{category}/{name}/glb` — Obtener GLB de objeto

## Endpoints de Extracción

- `POST /api/extraction/start` — Iniciar extracción (PNG y/o GLB)
- `POST /api/extraction/cancel` — Cancelar extracción en curso

## Endpoints de Vista / Viewer

- `GET /api/viewer/platform` — Modelo GLB de plataforma
- `GET /api/viewer/background` — Textura de fondo
- `GET /api/viewer/environment` — Mapa de entorno equirectangular

## Endpoints de Sistema de Archivos

- `GET /api/filesystem/roots` — Raíces disponibles
- `GET /api/filesystem/list` — Listar directorio

## Datos que NO contiene la API (exclusivos de la aplicación)

- `idealSkillBuild` (builds recomendados de habilidades)
- `statGrowth` (crecimiento de atributos por nivel)
- `tacticalPlaystyle` (estilo de juego táctico)
- `synergyCombo` (sinergia de facción)
- `day1Action` (acción recomendada Día 1)
- `title` (título del héroe)
- `heroClass` (clase específica del juego)
- `tierRank` (ranking de tier)
- `recommendedStartingTier` (recomendación de inicio)
- `role` (rol del héroe)

## Estrategia de Sincronización Recomendada

1. **Cargar datos del juego**: `POST /api/game/load` (requiere `POST /api/game/path` primero)
2. **Obtener catálogos**: `/api/units`, `/api/heroes`, `/api/spells`, `/api/skills`, `/api/subclasses`, `/api/abilities`, `/api/artifacts`, `/api/buildings`, `/api/map-objects`, `/api/faction-laws`
3. **Detalles individuales**: `/api/{entity}/{id}` para cada entidad
4. **Búsqueda**: `/api/search?q=` para consultas globales
5. **Referencias**: `/api/references/{entityType}/{id}` para relaciones cruzadas
6. **Assets**: `/api/assets/exists/png/` y `/api/models/` para iconos y modelos 3D

## Notas Técnicas

- Servidor: ASP.NET Core (.NET 10) — `OldenEraExplorer`
- Puerto por defecto: `5176`
- Datos fuente: `Core.zip` del juego instalado (Steam)
- Auto-detecta instalación de Steam automáticamente
- Lee JSON de `StreamingAssets/Core.zip`
- Resuelve texto dinámico con scripts del juego (placeholders `{0}` → valores reales)
- Soporta 16 idiomas (localización completa)
- No distribuye archivos del juego — solo lee de tu copia legal

1. **Usar `/api/heroes` como catálogo base** para obtener la lista de todos los héroes disponibles
2. **Usar `/api/heroes/{id}` para datos detallados** de cada héroe individual
3. **Mantener datos locales (`heroesData.ts`)** para los campos exclusivos de la aplicación (`idealSkillBuild`, `tacticalPlaystyle`, etc.)
4. **Crear un mecanismo de sincronización** que:
   - Lea los datos de la API (`/api/heroes` para catálogo, `/api/heroes/{id}` para detalle)
   - Actualice los datos locales que coincidan con la API (id, name, faction, classType, iconPath, stats)
   - Preserve los datos exclusivos de la aplicación (`idealSkillBuild`, `statGrowth`, `tacticalPlaystyle`, `synergyCombo`, `day1Action`, `role`, `tierRank`, `recommendedStartingTier`, `title`, `heroClass`)
   - Agregue nuevos héroes que aparezcan en la API (comparación por `id`)
   - Elimine héroes que ya no existan en la API (opcional, según política de retención)
   - Registre cambios en un log de sincronización (`sync-log.md`) para auditoría

## Mapeo de Campos API → Local (`DungeonHero`)

| Campo API (`/api/heroes/{id}`) | Campo Local (`heroesData.ts`) | Origen |
|---|---|---|
| `id` | `id` | API (fuente de verdad) |
| `name` | `name` | API |
| `faction` | `faction` | API |
| `factionDisplay` | `factionDisplay` | API |
| `classType` | `classType` | API |
| `classDisplay` | `classDisplay` | API |
| `iconPath` | `iconPath` | API |
| `attack` | `attack` | API |
| `defence` | `defence` | API |
| `spellPower` | `spellPower` | API |
| `knowledge` | `knowledge` | API |
| `specializationName` | `specializationName` | API |
| `specializationDescription` | `specializationDescription` | API |
| `startingArmy` | `startingArmy` | API |
| `startingSkills` | `startingSkills` | API |
| `startingSpells` | `startingSpells` | API |
| `description` | `description` | API |
| `motto` | `motto` | API |
| `statLabels` | `statLabels` | API |
| `idealSkillBuild` | `idealSkillBuild` | **Local exclusivo** |
| `statGrowth` | `statGrowth` | **Local exclusivo** |
| `tacticalPlaystyle` | `tacticalPlaystyle` | **Local exclusivo** |
| `synergyCombo` | `synergyCombo` | **Local exclusivo** |
| `day1Action` | `day1Action` | **Local exclusivo** |
| `title` | `title` | **Local exclusivo** |
| `heroClass` | `heroClass` | **Local exclusivo** |
| `tierRank` | `tierRank` | **Local exclusivo** |
| `recommendedStartingTier` | `recommendedStartingTier` | **Local exclusivo** |
| `role` | `role` | **Local exclusivo** |
