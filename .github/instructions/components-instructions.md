# Component Architecture Instructions

## Estructura
- `src/components/ui/`: componentes atómicos reutilizables (`GenericGuideTemplate`, `ResourceBadge`, `TierBadge`, `SearchBar`, `FilterChipGroup`, `ResolvedText`).
- `src/components/features/`: módulos funcionales (`heroes/`, `units/`, `spells/`, `combat/`, `laws/`, `planner/`).
- `src/components/layout/`: estructura del shell (`Header`).

## Convenciones
- Todo componente debe ser funcional (no clases).
- Usa `lucide-react` para iconos; no introduzcas SVGs inline a menos que sea estrictamente necesario.
- Usa `motion/react` para animaciones suaves.
- Usa `React.lazy` para nuevas vistas del dashboard; no uses importaciones estáticas.
- El componente `App.tsx` centraliza el estado global (facción, pestaña, tema, jugadores, ronda, modo de partida).
- `HeroDetailModal.tsx` es el modal de inspección profunda con pestañas (overview, skills, tactics, subclasses, simulator).
- `ResolvedText` debe aplicarse a textos con etiquetas `<resolved>`.
- No hardcodees datos de juego en `.tsx`; consume siempre los datos de `/src/data/`.
