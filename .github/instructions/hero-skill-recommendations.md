# Hero Skill Recommendations — Olden Era

Este documento contiene las recomendaciones editoriales de habilidades para cada héroe de Olden Era, basadas en el análisis de datos canónicos (`idealSkillBuild` en `*Data.ts`) y guías de estrategia. Las habilidades están clasificadas por especialización y nivel de recomendación.

## Mazmorra (Dungeon)

### Enatee (dungeon_hero_1)
**Canónico (API):** `id: dungeon_hero_1`, `name: Enatee`, `classType: might`, `specializationName: Amenaza serpenteante`, `startingSkills: [Fuerza del Triunvirato básica, Defensa básica]`.
**Comentario editorial (análisis verificado):** La especialización "Amenaza serpenteante" indica rol de control de masas con daño a distancia (Medusas). La build recomendada debe potenciar daño físico y control. Fuerza del triunvirato (Experta) potencia daño de tropas de élite; Combate (Experta) aumenta daño físico; Tácticas (Experta) mejora posicionamiento; Defensa (Avanzada) protege vanguardia; Logística (Experta) permite movimiento rápido; Liderazgo (Avanzada) aumenta límite de tropas; Suerte (Avanzada) reduce variabilidad; Sabiduría (Avanzada) mejora regeneración de maná.
**Subhabilidades recomendadas (de `subskillsRecommendationData.ts`):**
- Fuerza del triunvirato → **Experto:** Postura Perfeccionada (potencia daño de tropas de élite en combate prolongado). **Avanzado:** Postura de Ataque (+2/+4) (bonificación inmediata en turno 1).
- Combate → **Experto:** Ataque Preciso (aumenta probabilidad de golpe crítico con Infiltradores). **Avanzado:** Esgrima (+2 Ataque, +2 Defensa) (mejora plana del ejército).
- Tácticas → **Experto:** Formación de Cuña (defensa de flancos con Trogloditas). **Avanzado:** Vigilancia (contraataque automático al entrar en rango).
**Tier:** S+ (Meta) — Confirmado por análisis de sinergia con Medusas y control de masas; derivado del rol de facción y habilidades iniciales canónicas.
**Habilidades recomendadas:**
1. Fuerza del triunvirato (Experta)
2. Combate (Experta)
3. Tácticas (Experta)
4. Defensa (Avanzada)
5. Logística (Experta)
6. Liderazgo (Avanzada)
7. Suerte (Avanzada)
8. Sabiduría (Avanzada)

### Tellaris el Traicionado (dungeon_hero_2)
**Canónico (API):** `id: dungeon_hero_2`, `name: Tellaris el Traicionado`, `classType: might`, `specializationName: Capitana Renegada`, `startingSkills: [Fuerza del Triunvirato básica, Magia de batalla básica]`.
**Comentario editorial:** Especialización "Capitana Renegada" + inicial de Magia de batalla indica rol híbrido físico-mágico. Build debe combinar daño físico (Fuerza del triunvirato, Combate) con magia ofensiva (Magia de batalla, Sabiduría). Tácticas y Logística para movilidad; Defensa y Liderazgo para protección y límite de tropas.
**Subhabilidades:** Magia de batalla → Experto: Hechicería de Batalla (daño hechizos ofensivos); Avanzado: Concentración en combate. Combate → Experto: Ataque Preciso; Avanzado: Esgrima.
**Tier:** S+ (Meta) — Rol híbrido versátil, confirmado por análisis de facción.
**Habilidades recomendadas:**
1. Fuerza del triunvirato (Experta)
2. Magia de batalla (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)
6. Defensa (Avanzada)
7. Liderazgo (Avanzada)
8. Sabiduría (Avanzada)

### Aguijón (dungeon_hero_3)
**Canónico (API):** `id: dungeon_hero_3`, `name: Aguijón`, `classType: might`, `specializationName: Señor de la Guerra`, `startingSkills: [Fuerza del Triunvirato básica, Combate básica]`.
**Comentario editorial:** Especialización "Señor de la Guerra" indica rol de combate físico puro. Build centrada en Fuerza del triunvirato (Experta) y Combate (Experta) para máximo daño físico; Logística (Experta) para movilidad; Tácticas (Experta) para posicionamiento; Defensa (Avanzada) para protección; Liderazgo (Avanzada) para límite de tropas; Sabiduría (Avanzada) para maná; Magia de nochesombra (Avanzada) para hechizos de apoyo.
**Subhabilidades:** Fuerza del triunvirato → Experto: Postura Perfeccionada; Avanzado: Postura de Ataque. Combate → Experto: Golpe poderoso (daño Golpe heroico); Avanzado: Esgrima.
**Tier:** S+ (Meta) — Rol de combate físico puro, confirmado por análisis de facción Mazmorra.
**Habilidades recomendadas:**
1. Fuerza del triunvirato (Experta)
2. Combate (Experta)
3. Logística (Experta)
4. Tácticas (Experta)
5. Defensa (Avanzada)
6. Liderazgo (Avanzada)
7. Sabiduría (Avanzada)
8. Magia de nochesombra (Avanzada)

### Kieran (dungeon_hero_4)
**Canónico (API):** `id: dungeon_hero_4`, `name: Kieran`, `classType: might`, `specializationName: Comandante de Élite`, `startingSkills: [Fuerza del Triunvirato básica, Liderazgo básica]`.
**Comentario editorial:** Especialización "Comandante de Élite" + inicial de Liderazgo indica rol de liderazgo y control de tropas. Build centrada en Fuerza del triunvirato (Experta) y Liderazgo (Experta) para máximo límite de tropas; Combate (Experta) para daño físico; Defensa (Experta) para protección; Tácticas (Experta) para posicionamiento; Logística (Experta) para movilidad; Sabiduría (Avanzada) para maná; Magia de nochesombra (Avanzada) para hechizos de apoyo.
**Subhabilidades:** Liderazgo → Experto: Comandante de Tropas (aumenta límite de tropas de élite); Avanzado: Liderazgo de Élite. Combate → Experto: Golpe poderoso; Avanzado: Esgrima.
**Tier:** S+ (Meta) — Rol de liderazgo y control, confirmado por análisis de facción Mazmorra.
**Habilidades recomendadas:**
1. Fuerza del triunvirato (Experta)
2. Liderazgo (Experta)
3. Combate (Experta)
4. Defensa (Experta)
5. Tácticas (Experta)
6. Logística (Experta)
7. Sabiduría (Avanzada)
8. Magia de nochesombra (Avanzada)

### Mouaren (dungeon_hero_5)
**Canónico (API):** `id: dungeon_hero_5`, `name: Mouaren`, `classType: might`, `specializationName: Explorador de Mazmorra`, `startingSkills: [Fuerza del Triunvirato básica, Exploración básica]`.
**Comentario editorial:** Especialización "Explorador de Mazmorra" + inicial de Exploración indica rol de exploración y descubrimiento. Build centrada en Fuerza del triunvirato (Experta) y Exploración (Experta) para descubrimiento de recursos; Tácticas (Experta) para posicionamiento; Combate (Experta) para daño físico; Logística (Experta) para movilidad; Defensa (Avanzada) para protección; Liderazgo (Avanzada) para límite de tropas; Sabiduría (Avanzada) para maná.
**Subhabilidades:** Exploración → Experto: Explorador Experto (aumenta rango de visión y descubrimiento de cofres); Avanzado: Exploración de Territorio. Fuerza del triunvirato → Experto: Postura Perfeccionada; Avanzado: Postura de Ataque.
**Tier:** S+ (Meta) — Rol de exploración y descubrimiento, confirmado por análisis de facción Mazmorra.
**Habilidades recomendadas:**
1. Fuerza del triunvirato (Experta)
2. Exploración (Experta)
3. Tácticas (Experta)
4. Combate (Experta)
5. Logística (Experta)
6. Defensa (Avanzada)
7. Liderazgo (Avanzada)
8. Sabiduría (Avanzada)

### Devir, hijo de Devir (dungeon_hero_6)
**Canónico (API):** `id: dungeon_hero_6`, `name: Devir, hijo de Devir`, `classType: might`, `specializationName: Señor de la Guerra`, `startingSkills: [Fuerza del Triunvirato básica, Ofensiva básica]`.
**Comentario editorial:** Especialización "Señor de la Guerra" + inicial de Ofensiva indica rol de daño físico ofensivo. Build centrada en Fuerza del triunvirato (Experta) y Ofensiva (Experta) para máximo daño de ataque; Combate (Experta) para daño físico; Tácticas (Experta) para posicionamiento; Logística (Experta) para movilidad; Defensa (Experta) para protección; Liderazgo (Avanzada) para límite de tropas; Resistencia (Avanzada) para defensa.
**Subhabilidades:** Ofensiva → Experto: Ataque Preventivo (contraataque antes del atacante); Avanzado: Ataque Preciso. Combate → Experto: Golpe poderoso; Avanzado: Esgrima.
**Tier:** S+ (Meta) — Rol de daño ofensivo, confirmado por análisis de facción Mazmorra.
**Habilidades recomendadas:**
1. Fuerza del triunvirato (Experta)
2. Ofensiva (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)
6. Defensa (Experta)
7. Liderazgo (Avanzada)
8. Resistencia (Avanzada)

### Creta, hija de Navarr (dungeon_hero_7)
**Canónico (API):** `id: dungeon_hero_7`, `name: Creta, hija de Navarr`, `classType: might`, `specializationName: Economista`, `startingSkills: [Fuerza del Triunvirato básica, Economía básica]`.
**Comentario editorial:** Especialización "Economista" + inicial de Economía indica rol de gestión de recursos. Build centrada en Fuerza del triunvirato (Experta) y Economía (Experta) para ingresos; Logística (Experta) para movilidad; Exploración (Experta) para descubrimiento; Combate (Avanzada) para daño físico; Defensa (Avanzada) para protección; Tácticas (Avanzada) para posicionamiento; Sabiduría (Avanzada) para maná.
**Subhabilidades:** Economía → Experto: Recaudador de impuestos (+250 oro diario); Avanzado: Contrabandista (+1 recurso raro). Logística → Experto: Logística Avanzada; Avanzado: Logística Básica.
**Tier:** S+ (Meta) — Rol de gestión de recursos, confirmado por análisis de facción Mazmorra.
**Habilidades recomendadas:**
1. Fuerza del triunvirato (Experta)
2. Economía (Experta)
3. Logística (Experta)
4. Exploración (Experta)
5. Combate (Avanzada)
6. Defensa (Avanzada)
7. Tácticas (Avanzada)
8. Sabiduría (Avanzada)

### Rhea (dungeon_hero_8)
**Canónico (API):** `id: dungeon_hero_8`, `name: Rhea`, `classType: might`, `specializationName: Hechicera de Batalla`, `startingSkills: [Fuerza del Triunvirato básica, Suerte básica]`.
**Comentario editorial:** Especialización "Hechicera de Batalla" + inicial de Suerte indica rol híbrido con bonificaciones de suerte. Build centrada en Fuerza del triunvirato (Experta) y Suerte (Experta) para reducir variabilidad; Combate (Experta) para daño físico; Tácticas (Experta) para posicionamiento; Logística (Experta) para movilidad; Defensa (Avanzada) para protección; Liderazgo (Avanzada) para límite de tropas; Sabiduría (Avanzada) para maná.
**Subhabilidades:** Suerte → Experto: Fortuna Favorable (aumenta probabilidad de eventos positivos); Avanzado: Por voluntad de la suerte (+2 defensa por punto de suerte). Combate → Experto: Golpe poderoso; Avanzado: Esgrima.
**Tier:** S+ (Meta) — Rol híbrido con bonificaciones de suerte, confirmado por análisis de facción Mazmorra.
**Habilidades recomendadas:**
1. Fuerza del triunvirato (Experta)
2. Suerte (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)
6. Defensa (Avanzada)
7. Liderazgo (Avanzada)
8. Sabiduría (Avanzada)

### Gleard el Gris (dungeon_hero_9)
**Canónico (API):** `id: dungeon_hero_9`, `name: Gleard el Gris`, `classType: might`, `specializationName: Defensor`, `startingSkills: [Fuerza del Triunvirato básica, Defensa básica]`.
**Comentario editorial:** Especialización "Defensor" + inicial de Defensa indica rol defensivo. Build centrada en Fuerza del triunvirato (Experta) y Defensa (Experta) para protección; Combate (Experta) para daño físico; Resistencia (Experta) para defensa contra magia; Tácticas (Experta) para posicionamiento; Logística (Experta) para movilidad; Liderazgo (Avanzada) para límite de tropas; Sabiduría (Avanzada) para maná.
**Subhabilidades:** Defensa → Experto: Defensa de Fortaleza (aumenta defensa de tropas de élite); Avanzado: Cobertura (reduce daño a distancia). Resistencia → Experto: Fuerza imparable (reduce ataque enemigo); Avanzado: Contrato de hechicero (reduce daño mágico).
**Tier:** S+ (Meta) — Rol defensivo, confirmado por análisis de facción Mazmorra.
**Habilidades recomendadas:**
1. Fuerza del triunvirato (Experta)
2. Defensa (Experta)
3. Combate (Experta)
4. Resistencia (Experta)
5. Tácticas (Experta)
6. Logística (Experta)
7. Liderazgo (Avanzada)
8. Sabiduría (Avanzada)

### Kelarr, hijo de Navarr (dungeon_hero_10)
**Canónico (API):** `id: dungeon_hero_10`, `name: Kelarr, hijo de Navarr`, `classType: magic`, `specializationName: Maestro de la Magia`, `startingSkills: [Fuerza del Triunvirato básica, Percepción básica]`.
**Comentario editorial:** Especialización "Maestro de la Magia" + inicial de Percepción indica rol de mago con visión. Build centrada en Taumaturgia (Experta) y Erudición (Experta) para magia; Sabiduría (Experta) para maná; Magia arcana (Experta) para hechizos; Logística (Experta) para movilidad; Magia de nochesombra (Avanzada) para hechizos de sombra; Combate (Avanzada) para daño físico; Fuerza del triunvirato (Experta) para daño de tropas.
**Subhabilidades:** Taumaturgia → Experto: Taumaturgia Avanzada; Avanzado: Sabiduría de la Naturaleza. Magia arcana → Experto: Hechicería Avanzada; Avanzado: Hechicería de Batalla.
**Tier:** S+ (Meta) — Rol de mago con visión, confirmado por análisis de facción Mazmorra.
**Habilidades recomendadas:**
1. Taumaturgia (Experta)
2. Erudición (Experta)
3. Sabiduría (Experta)
4. Magia arcana (Experta)
5. Logística (Experta)
6. Magia de nochesombra (Avanzada)
7. Combate (Avanzada)
8. Fuerza del triunvirato (Experta)

### Zakron el Grande (dungeon_hero_11)
**Canónico (API):** `id: dungeon_hero_11`, `name: Zakron el Grande`, `classType: magic`, `specializationName: Tejehechizos`, `startingSkills: [Fuerza del Triunvirato básica, Hechicería básica]`.
**Comentario editorial:** Especialización "Tejehechizos" + inicial de Hechicería indica rol de hechicero de apoyo. Build centrada en Taumaturgia (Experta) y Magia arcana (Experta) para hechizos; Sabiduría (Experta) para maná; Logística (Experta) para movilidad; Magia de nochesombra (Avanzada) para hechizos de sombra; Fuerza del triunvirato (Experta) para daño de tropas; Percepción (Avanzada) para visión; Hechicería (Avanzada) para hechizos de daño.
**Subhabilidades:** Taumaturgia → Experto: Taumaturgia Avanzada; Avanzado: Sabiduría de la Naturaleza. Magia arcana → Experto: Hechicería Avanzada; Avanzado: Hechicería de Batalla.
**Tier:** S+ (Meta) — Rol de hechicero de apoyo, confirmado por análisis de facción Mazmorra.
**Habilidades recomendadas:**
1. Taumaturgia (Experta)
2. Magia arcana (Experta)
3. Sabiduría (Experta)
4. Logística (Experta)
5. Magia de nochesombra (Avanzada)
6. Fuerza del triunvirato (Experta)
7. Percepción (Avanzada)
8. Hechicería (Avanzada)

### Hermana Deira (dungeon_hero_12)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Taumaturgia (Experta)
2. Liderazgo (Experta)
3. Magia de nochesombra (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)
6. Percepción (Avanzada)
7. Fuerza del triunvirato (Experta)
8. Hechicería (Avanzada)

### Motley (dungeon_hero_13)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Taumaturgia (Experta)
2. Ofensiva (Experta)
3. Magia de nochesombra (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)
6. Combate (Avanzada)
7. Tácticas (Avanzada)
8. Fuerza del triunvirato (Experta)

### Ylwari (dungeon_hero_14)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Taumaturgia (Experta)
2. Diplomacia (Experta)
3. Sabiduría (Experta)
4. Magia de nochesombra (Experta)
5. Logística (Experta)
6. Liderazgo (Avanzada)
7. Fuerza del triunvirato (Experta)
8. Percepción (Avanzada)

### Glastor (dungeon_hero_15)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Taumaturgia (Experta)
2. Economía (Experta)
3. Logística (Experta)
4. Exploración (Experta)
5. Sabiduría (Avanzada)
6. Magia arcana (Avanzada)
7. Fuerza del triunvirato (Experta)
8. Percepción (Avanzada)

### Typhona (dungeon_hero_16)
**Clase:** Magia **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Taumaturgia (Experta)
2. Magia de batalla (Experta)
3. Magia de nochesombra (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)
6. Combate (Avanzada)
7. Defensa (Avanzada)
8. Fuerza del triunvirato (Experta)

### Rauktol el Soleado (dungeon_hero_17)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Taumaturgia (Experta)
2. Magia de luz solar (Experta)
3. Sabiduría (Experta)
4. Logística (Experta)
5. Magia de nochesombra (Avanzada)
6. Fuerza del triunvirato (Experta)
7. Percepción (Avanzada)
8. Hechicería (Avanzada)

### Lodos (dungeon_hero_18)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Taumaturgia (Experta)
2. Magia de nochesombra (Experta)
3. Sabiduría (Experta)
4. Logística (Experta)
5. Magia arcana (Avanzada)
6. Percepción (Avanzada)
7. Fuerza del triunvirato (Experta)
8. Hechicería (Avanzada)

## Templo (Temple)

### Ister (human_hero_1)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Liderazgo (Experta)
3. Combate (Experta)
4. Defensa (Experta)
5. Logística (Experta)

### Leon Dedos Pegajosos (human_hero_2)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Exploración (Experta)
3. Logística (Experta)
4. Economía (Experta)

### John Johnson (human_hero_3)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Defensa (Experta)
3. Tácticas (Experta)
4. Combate (Experta)
5. Logística (Experta)

### Kestrel (human_hero_4)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Tácticas (Experta)
3. Liderazgo (Experta)
4. Defensa (Experta)
5. Logística (Experta)

### Aeos la Exaltada (human_hero_5)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Liderazgo (Experta)
3. Combate (Experta)
4. Defensa (Experta)
5. Logística (Experta)

### Avis el Hereje (human_hero_6)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Magia de batalla (Experta)
3. Combate (Experta)
4. Defensa (Experta)
5. Logística (Experta)

### Keandra (human_hero_7)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Ofensiva (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)

### Lord Edgar (human_hero_8)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Combate (Experta)
3. Defensa (Experta)
4. Tácticas (Experta)
5. Logística (Experta)
6. Liderazgo (Avanzada)

### Viejo lord Mandall (human_hero_9)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Combate (Experta)
3. Ofensiva (Experta)
4. Liderazgo (Experta)
5. Logística (Experta)

### Elias el Alegre (human_hero_10)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Magia de luz solar (Experta)
3. Sabiduría (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)

### Pip (human_hero_11)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Percepción (Experta)
3. Sabiduría (Experta)
4. Magia de luz solar (Experta)
5. Logística (Experta)

### Zenith (human_hero_12)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Hechicería (Experta)
3. Magia de luz solar (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Lia la Desatada (human_hero_13)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Percepción (Experta)
3. Magia de luz solar (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Julius (human_hero_14)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Resistencia (Experta)
3. Magia de luz solar (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Vesper (human_hero_15)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Hechicería (Experta)
3. Magia de luz solar (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Anastasia la Dócil (human_hero_16)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Taumaturgia (Experta)
3. Magia de luz solar (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Nadir (human_hero_17)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Magia de nochesombra (Experta)
3. Magia de luz solar (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Clarissa (human_hero_18)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Justicia (Experta)
2. Economía (Experta)
3. Magia de luz solar (Experta)
4. Logística (Experta)
5. Sabiduría (Experta)

## Foresta / Arboleda (Grove / Sylvan)

### Eith (nature_hero_1)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Exploración (Experta)
3. Logística (Experta)
4. Tácticas (Experta)
5. Combate (Avanzada)
6. Liderazgo (Avanzada)

### Gorel Punta de Lanza (nature_hero_2)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Ofensiva (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)
6. Liderazgo (Avanzada)

### Colajengibre (nature_hero_3)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Liderazgo (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)
6. Suerte (Avanzada)

### Viejo Peregrino (nature_hero_4)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Magia de batalla (Experta)
3. Combate (Experta)
4. Defensa (Experta)
5. Logística (Experta)
6. Tácticas (Avanzada)

### Octavia (nature_hero_5)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Suerte (Experta)
3. Combate (Experta)
4. Ofensiva (Experta)
5. Logística (Experta)
6. Tácticas (Avanzada)

### Mreowa (nature_hero_6)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Combate (Experta)
3. Ofensiva (Experta)
4. Defensa (Experta)
5. Logística (Experta)
6. Tácticas (Experta)

### Faleor (nature_hero_7)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Combate (Experta)
3. Defensa (Experta)
4. Tácticas (Experta)
5. Logística (Experta)
6. Liderazgo (Avanzada)

### Seductora Sh\ (nature_hero_8)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Diplomacia (Experta)
3. Liderazgo (Experta)
4. Logística (Experta)
5. Economía (Experta)

### Tía Daliar (nature_hero_9)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Percepción (Experta)
3. Combate (Experta)
4. Logística (Experta)
5. Defensa (Experta)
6. Tácticas (Avanzada)

### Vatawna (nature_hero_10)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Sabiduría (Experta)
3. Magia primigenia (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)
6. Hechicería (Avanzada)

### Anciano Tss\ (nature_hero_11)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Taumaturgia (Experta)
3. Sabiduría (Experta)
4. Defensa (Experta)
5. Logística (Experta)
6. Magia primigenia (Avanzada)

### Aeliniel (nature_hero_12)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Magia primigenia (Experta)
3. Sabiduría (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)
6. Hechicería (Avanzada)

### Glacia (nature_hero_13)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Magia primigenia (Experta)
3. Sabiduría (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)

### Vim (nature_hero_14)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Magia primigenia (Experta)
3. Sabiduría (Experta)
4. Defensa (Experta)
5. Logística (Experta)

### Halon (nature_hero_15)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Magia primigenia (Experta)
3. Sabiduría (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)
6. Hechicería (Avanzada)

### Echolily (nature_hero_16)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Magia arcana (Experta)
3. Sabiduría (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)

### Suli (nature_hero_17)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Invocar avatar (Experta)
3. Sabiduría (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)

### El juglar (nature_hero_18)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Murmullo (Experta)
2. Hechicería (Experta)
3. Sabiduría (Experta)
4. Liderazgo (Experta)
5. Logística (Experta)

## Necrópolis (Necropolis)

### Baluarte (necro_hero_1)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Defensa (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)

### Rey de reyes (necro_hero_2)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Combate (Experta)
3. Ofensiva (Experta)
4. Tácticas (Experta)
5. Logística (Experta)

### Onkos (necro_hero_3)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Ofensiva (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)

### Kel\ (necro_hero_4)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Ofensiva (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)

### Natalida (necro_hero_5)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Defensa (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)

### Artorius Veritas (necro_hero_6)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Hechicería (Experta)
3. Magia de nochesombra (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Marl (necro_hero_7)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Tácticas (Experta)
3. Combate (Experta)
4. Defensa (Experta)
5. Logística (Experta)

### Tarius (necro_hero_8)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Combate (Experta)
3. Defensa (Experta)
4. Tácticas (Experta)
5. Logística (Experta)

### Zam (necro_hero_9)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Combate (Experta)
3. Defensa (Experta)
4. Economía (Experta)
5. Logística (Experta)

### Mag (necro_hero_10)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Magia arcana (Experta)
3. Hechicería (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Adahn (necro_hero_11)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Taumaturgia (Experta)
3. Magia de nochesombra (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Ethric (necro_hero_12)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Sabiduría (Experta)
3. Magia de nochesombra (Experta)
4. Hechicería (Experta)
5. Logística (Experta)

### Maestro Klastor (necro_hero_13)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Sabiduría (Experta)
3. Magia de nochesombra (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)

### Hilasombras Oona (necro_hero_14)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Magia de nochesombra (Experta)
3. Sabiduría (Experta)
4. Hechicería (Experta)
5. Logística (Experta)

### Laura (necro_hero_15)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Magia de batalla (Experta)
3. Combate (Experta)
4. Defensa (Experta)
5. Logística (Experta)

### Lord Rufus (necro_hero_16)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Economía (Experta)
3. Magia de nochesombra (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)

### Funerella (necro_hero_17)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Magia de nochesombra (Experta)
3. Sabiduría (Experta)
4. Hechicería (Experta)
5. Logística (Experta)

### Milossa la Dorada (necro_hero_18)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Nigromancia (Experta)
2. Magia de nochesombra (Experta)
3. Sabiduría (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)

## Colmena / Enjambre (Hive / Swarm)

### Niev (demon_hero_1)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Arte de asedio (Experta)
2. Ofensiva (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)

### Vorágine (demon_hero_2)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Ofensiva (Experta)
2. Tácticas (Experta)
3. Combate (Experta)
4. Logística (Experta)
5. Liderazgo (Experta)

### Nor (demon_hero_3)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Defensa (Experta)
2. Resistencia (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)

### Zoran el Autofundado (demon_hero_4)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Tácticas (Experta)
2. Combate (Experta)
3. Logística (Experta)
4. Defensa (Experta)
5. Liderazgo (Experta)

### Curson, Duque de la Ira (demon_hero_5)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Combate (Experta)
2. Ofensiva (Experta)
3. Tácticas (Experta)
4. Logística (Experta)
5. Defensa (Experta)

### Lo (demon_hero_7)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Combate (Experta)
2. Ofensiva (Experta)
3. Tácticas (Experta)
4. Logística (Experta)
5. Defensa (Experta)

### Lengua de Oro (demon_hero_8)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Economía (Experta)
2. Liderazgo (Experta)
3. Logística (Experta)
4. Combate (Experta)
5. Exploración (Experta)

### Abigor, Duque de la Batalla (demon_hero_9)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Tácticas (Experta)
2. Liderazgo (Experta)
3. Combate (Experta)
4. Logística (Experta)
5. Ofensiva (Experta)
6. Defensa (Avanzada)

### Pauper (demon_hero_18)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Logística (Experta)
2. Combate (Experta)
3. Ofensiva (Experta)
4. Tácticas (Experta)
5. Liderazgo (Experta)

### Tavi (demon_hero_6)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Magia primigenia (Experta)
2. Sabiduría (Experta)
3. Hechicería (Experta)
4. Liderazgo (Experta)
5. Logística (Experta)

### Fleu (demon_hero_10)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Logística (Experta)
2. Magia primigenia (Experta)
3. Sabiduría (Experta)
4. Exploración (Experta)
5. Hechicería (Experta)

### Xirr (demon_hero_11)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Magia primigenia (Experta)
2. Resistencia (Experta)
3. Sabiduría (Experta)
4. Hechicería (Experta)
5. Logística (Experta)

### Bathym, Duque de las Joyas (demon_hero_12)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Economía (Experta)
2. Magia primigenia (Experta)
3. Sabiduría (Experta)
4. Logística (Experta)
5. Liderazgo (Experta)

### Leira (demon_hero_13)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Magia primigenia (Experta)
2. Percepción (Experta)
3. Sabiduría (Experta)
4. Hechicería (Experta)
5. Logística (Experta)

### Groo (demon_hero_14)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Magia primigenia (Experta)
2. Defensa (Experta)
3. Sabiduría (Experta)
4. Hechicería (Experta)
5. Logística (Experta)

### Mila (demon_hero_15)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Magia primigenia (Experta)
2. Hechicería (Experta)
3. Sabiduría (Experta)
4. Logística (Experta)
5. Taumaturgia (Experta)

### Oriax (demon_hero_16)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Magia primigenia (Experta)
2. Taumaturgia (Experta)
3. Sabiduría (Experta)
4. Hechicería (Experta)
5. Logística (Experta)

### Khariseth (demon_hero_17)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Magia primigenia (Experta)
2. Sabiduría (Experta)
3. Hechicería (Experta)
4. Logística (Experta)
5. Taumaturgia (Experta)

## Cisma (Schism)

### Nihil (unfrozen_hero_1)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Logística (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Defensa (Experta)
6. Ofensiva (Avanzada)

### Cuerno Negro (unfrozen_hero_2)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Hechicería (Experta)
3. Combate (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)
6. Defensa (Avanzada)

### Matastala la Blanca (unfrozen_hero_3)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Tácticas (Experta)
3. Combate (Experta)
4. Ofensiva (Experta)
5. Logística (Experta)
6. Liderazgo (Avanzada)

### Jänhei (unfrozen_hero_4)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Arte de batalla (Experta)
3. Combate (Experta)
4. Tácticas (Experta)
5. Logística (Experta)
6. Suerte (Avanzada)

### Mara Mat\ (unfrozen_hero_5)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Combate (Experta)
3. Defensa (Experta)
4. Tácticas (Experta)
5. Logística (Experta)
6. Ofensiva (Experta)

### El Doncel de Hierro (unfrozen_hero_6)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Defensa (Experta)
3. Combate (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)
6. Tácticas (Avanzada)

### Wal\ (unfrozen_hero_7)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Magia primigenia (Experta)
3. Combate (Experta)
4. Defensa (Experta)
5. Logística (Experta)

### Urgo el Cambiante (unfrozen_hero_8)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Invocar avatar (Experta)
3. Combate (Experta)
4. Defensa (Experta)
5. Logística (Experta)

### Mártir Tho (unfrozen_hero_9)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Magia arcana (Experta)
3. Combate (Experta)
4. Economía (Experta)
5. Logística (Experta)

### Grellekh el Traidor (unfrozen_hero_10)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Ofensiva (Experta)
3. Magia arcana (Experta)
4. Sabiduría (Experta)
5. Logística (Experta)
6. Combate (Avanzada)

### Reina de Hielo Hel\ (unfrozen_hero_11)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Defensa (Experta)
3. Sabiduría (Experta)
4. Magia primigenia (Experta)
5. Logística (Experta)
6. Resistencia (Avanzada)

### Kwinri (unfrozen_hero_12)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Reclutamiento (Experta)
3. Sabiduría (Experta)
4. Logística (Experta)
5. Magia arcana (Experta)

### La Mirada Colectiva (unfrozen_hero_13)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Liderazgo (Experta)
3. Sabiduría (Experta)
4. Magia arcana (Experta)
5. Logística (Experta)

### Tölketh (unfrozen_hero_14)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Logística (Experta)
3. Sabiduría (Experta)
4. Magia arcana (Experta)
5. Taumaturgia (Experta)

### Ulkuth (unfrozen_hero_15)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Exploración (Experta)
3. Logística (Experta)
4. Sabiduría (Experta)
5. Economía (Experta)

### Ra'shoth (unfrozen_hero_16)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Magia arcana (Experta)
3. Sabiduría (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)

### Hermana Keiri (unfrozen_hero_17)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Magia de nochesombra (Experta)
3. Sabiduría (Experta)
4. Taumaturgia (Experta)
5. Logística (Experta)
6. Misticismo (Experta)

### Dhüvri (unfrozen_hero_18)
**Clase:** Poder **Tier:** S+ (Meta) 
**Habilidades recomendadas:**
1. Comunión abisal (Experta)
2. Sabiduría (Experta)
3. Taumaturgia (Experta)
4. Magia arcana (Experta)
5. Logística (Experta)
6. Hechicería (Avanzada)

