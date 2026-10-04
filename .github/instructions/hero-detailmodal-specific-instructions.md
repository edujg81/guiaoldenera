# HeroDetailModal Specific Instructions

## Subclasses Tab Implementation

### Recommendation Block Placement
1. **Location**: Place the recommendation block **immediately after** the `map` of subclases (after `</div>` closing the `space-y-4` container) but **inside** the `factionSubclasses.length > 0` ternary condition.
2. **Structure**: Use a standalone `<div>` with:
   ```tsx
   <div className="mt-6 p-4 bg-slate-900/60 rounded-2xl border border-amber-900/30 shadow-lg">
     <div className="flex items-center gap-2 mb-2">
       <Target className="w-5 h-5 text-amber-400" />
       <h4 className="font-serif font-bold text-amber-300 text-lg">Recomendación de subclase</h4>
     </div>
     <p className="text-sm text-slate-200 leading-relaxed font-medium">
       {getSubclassRecommendation(hero, factionSubclasses)}
     </p>
   </div>
   ```
3. **Positioning**: Ensure it appears **once** below both subclasse cards (not inside any individual card).

### ResolvedText Usage
- Apply `<ResolvedText text={subclass.bonusEffect} />` **only** to bonus effect descriptions.
- Eliminate all un-resolved text (no `<ResolvedText>` tags) from bonus descriptions.
- Verify no duplicate descriptions exist in the UI.

### Skill Badging Logic
- For each required skill:
  - Check if `hero.startingSkills` contains matching skill (by `skillId` or name).
  - If match: add `text-amber-300 font-semibold` class + `Inicial` badge (12px text, amber background).
  - If no match: use default `text-slate-300` class.

### Data Flow
- `factionSubclasses` must be computed in `HeroDetailModalContent` using:
  ```ts
  const factionSubclasses = useMemo(() => 
    OFFICIAL_SUBCLASSES.filter(sc => 
      sc.faction === hero.factionDisplay && 
      (isMage ? sc.classType === 'Magia' : sc.classType === 'Poder')
    ),
  );
  ```
- `getSubclassRecommendation` must be defined at module level (not inside components) for cross-file accessibility.