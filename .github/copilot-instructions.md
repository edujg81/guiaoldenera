# Copilot Instructions — Olden Era Hero Guide

## Build / Test / Lint
- `npm run lint` — `tsc --noEmit` (strict TypeScript 5.8, zero `any`)
- `npm run build` — Vite 6 production build
- `npm run dev` — Vite dev server (`--port=3000 --host=0.0.0.0`)
- `npm run sync-data` — `tsx scripts/sync-olden-era.ts` (API sync)
- No dedicated test runner configured; validate with `npm run lint` and `npm run build`

## High-level Architecture
- **Data-driven, feature-sliced**: all game data lives in `/src/data/` (JSON + TypeScript); components in `/src/components/features/` consume via types in `/src/types.ts` and `/src/types-api.ts`. Never hardcode data arrays in `.tsx`.
- **Canonicity hierarchy** (from `AGENTS.md`): API data (`src/data/generated/api/`) is authoritative; anything missing requires external source + user confirmation. Analysis/recommendations must be labeled as derived, not canonical.
- **UI shell**: `App.tsx` holds global state (faction, tab, theme); `HeroDetailModal.tsx` is the deep-inspection modal with tabs (overview, skills, tactics, subclasses, simulator). Subclass data comes from `apiSubclasses.ts` / `subclassesData.ts`; hero initial skills from the hero API.
- **Design system**: atomic UI components in `/src/components/ui/` (`GenericGuideTemplate`, `ResourceBadge`, `TierBadge`, etc.); Tailwind CSS v4 with dark premium palette (`#0d0a09`, `#1b1311`, slate borders).

## Data Layer & Canonicality
- **API data**: files named `api*Data.ts` (e.g., `apiSubclassesData.ts`) import the synchronized JSON from `src/data/generated/api/*.json`. These contain the canonical game data as provided by the Olden Era API.
- **Guide data**: files named `*Data.ts` (e.g., `subclassesData.ts`) merge the API data with editorial/guide data (e.g., `GUIDE_SUBCLASSES`) to produce the final dataset used by the UI (`OFFICIAL_SUBCLASSES`).
- **Types**: canonical types (e.g., `SubclassInfo`, `SubclassRequiredSkill`) are defined in `src/types-api.ts`; editorial types (e.g., `GuideSubclass`) in `src/types.ts`. The `*Data.ts` files import and extend these types.
- **Never hardcode**: always refer to the merged data (e.g., `OFFICIAL_SUBCLASSES`, `OFFICIAL_HEROES`) rather than the raw API or guide arrays directly.

## Key Conventions
- **Language**: all UI text, hero/unit names, and descriptions in Spanish (Castilian) using official Olden Era terminology.
- **Anti-alucination / lore guard**: never import heroes/units from prior HoMM titles (Sandro, Gelu, Crag Hack, etc.) unless confirmed in Olden Era roster. Six factions: Templo, Necrópolis, Mazmorra, Foresta, Colmena, Cisma.
- **Subclasses / recommendations**: subclass icons and required skills (always Expert tier) are canonical from API; only the recommendation text is editorial/derived and must be confirmed by user.
- **ResolvedText**: apply `<resolved>` tags via `ResolvedText` component for bonus descriptions; eliminate duplicate un-resolved descriptions.
- **Lazy loading**: new dashboard views must use `React.lazy` inside existing `<Suspense>` (see `App.tsx` imports); do not revert to static imports.
- **Strict types**: canonical types (`SubclassInfo`, `SubclassRequiredSkill`) in `src/types-api.ts`; editorial types (`GuideSubclass`) in `src/types.ts`; `skillId` + `icon` fields added for subclass skills.

## MCP Servers
MCP (Model Context Protocol) servers are not currently configured for this project. If you need to add one (e.g., for Playwright-based end-to-end testing), you can do so via the Copilot chat, but it is not required for standard development workflows.