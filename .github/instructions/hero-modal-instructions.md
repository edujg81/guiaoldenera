# HeroDetailModal Specific Instructions

## Subclases (Pestaña Subclases)
- **Iconos**: mostrar `subclass.icon` (resuelto con `resolveHeroDetailAsset`) en cada tarjeta de subclase.
- **Requisitos**: listar `subclass.requiredSkills`; cada habilidad debe mostrar su `icon` (w-10 h-10) y nivel `Experta`.
- **Destacar iniciales**: comparar `hero.startingSkills` con `requiredSkills`; si coincide, añadir badge `Inicial` (texto pequeño, fondo ámbar) y resaltar el texto en ámbar.
- **Texto de subclase**: usar `<ResolvedText text={subclass.bonusEffect} />`; eliminar cualquier descripción duplicada sin `ResolvedText`.
- **Recomendación**: calcular con `getSubclassRecommendation(hero, factionSubclasses)`; mostrar **una sola vez**, fuera de los recuadros de subclase, debajo de ambas.
- **Eliminar mensaje**: no debe aparecer "El progreso actual de habilidades no está disponible en esta ficha".

## Datos
- `factionSubclasses` se calcula en `HeroDetailModalContent` filtrando `OFFICIAL_SUBCLASSES` por `faction` y `classType`.
- `getSubclassRecommendation` debe estar definido a nivel de módulo (no dentro del componente) para ser accesible desde `SubclassesTab`.
