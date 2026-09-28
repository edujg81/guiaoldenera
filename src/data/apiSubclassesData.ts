import { ApiSubclass } from '../types-api';

/**
 * Datos puros de la API /api/subclasses (catálogo)
 * Fuente de verdad: http://localhost:5176/api/subclasses
 * Se sincroniza manualmente desde la API cuando hay cambios.
 * Los campos locales extendidos están en subclassesData.ts
 */
export const API_SUBCLASSES_DATA: ApiSubclass[] = [
  // Datos extraídos de http://localhost:5176/api/subclasses (muestra real)
  // La API devuelve objetos con: id, name, faction, factionDisplay, classType,
  // classDisplay, icon, description, requiredSkills
  // Ejemplo real: { id: 'sub_class_demons_might_1', name: 'Madre de cría', faction: 'demon', factionDisplay: 'Colmena', classType: 'might', classDisplay: 'Ejecutor', icon: 'icons/hero_sub_classes/sub_class_demons_might_1_icon' }
];