import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import type { ApiUnit } from '../../../types-api';
import { UNIT_ASSETS_CATALOG } from '../../../data/unitAssetsData';
import { UnitImage } from '../../ui/UnitImage';
import { ResolvedText } from '../../ui/ResolvedText';

interface UnitCatalogTableProps {
  title: string;
  description: string;
  units: ApiUnit[];
  themeMode?: 'dark' | 'light';
}

const UNIT_ASSETS_BY_ID = new Map(
  UNIT_ASSETS_CATALOG.map((asset) => [asset.unit_id, asset]),
);

type SortColumn = 'name' | 'faction' | 'tier' | 'attackType' | 'movement' | 'attack' | 'defense' | 'health' | 'cost' | 'squadValue';

interface MultiSelectFilterProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValues: string[];
  onChange: (value: string) => void;
  themeMode: 'dark' | 'light';
}

const MultiSelectFilter: React.FC<MultiSelectFilterProps> = ({
  label,
  options,
  selectedValues,
  onChange,
  themeMode,
}) => (
  <details className="group relative">
    <summary className={`flex cursor-pointer list-none items-center justify-between rounded-lg border p-2 text-xs font-normal normal-case tracking-normal ${
      themeMode === 'light'
        ? 'border-slate-300 bg-slate-50 text-slate-900'
        : 'border-slate-700 bg-slate-900 text-slate-100'
    }`}>
      <span>{selectedValues.length === 0 ? `Todos: ${label.toLowerCase()}` : `${label}: ${selectedValues.length} seleccionados`}</span>
      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
    </summary>
    <div className={`absolute left-0 right-0 top-full z-30 mt-1 max-h-64 overflow-y-auto rounded-lg border p-2 shadow-xl ${
      themeMode === 'light'
        ? 'border-slate-300 bg-white text-slate-900'
        : 'border-slate-700 bg-slate-900 text-slate-100'
    }`}>
      {options.map((option) => (
        <label key={option.value} className={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
          themeMode === 'light' ? 'hover:bg-slate-100' : 'hover:bg-white/10'
        }`}>
          <input
            type="checkbox"
            checked={selectedValues.includes(option.value)}
            onChange={() => onChange(option.value)}
            className="accent-amber-500"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  </details>
);

const SORTABLE_COLUMNS: { key: SortColumn; label: string; align?: 'right' | 'center' }[] = [
  { key: 'name', label: 'Nombre' },
  { key: 'faction', label: 'Facción' },
  { key: 'tier', label: 'Tier', align: 'center' },
  { key: 'attackType', label: 'Tipo de ataque' },
  { key: 'movement', label: 'Movimiento' },
  { key: 'attack', label: 'Ataque', align: 'right' },
  { key: 'defense', label: 'Defensa', align: 'right' },
  { key: 'health', label: 'Salud', align: 'right' },
  { key: 'cost', label: 'Coste' },
  { key: 'squadValue', label: 'Valor de escuadra' , align: 'right' },
];

function getUnitName(unit: ApiUnit): string {
  const assetName = UNIT_ASSETS_BY_ID.get(unit.id)?.nameEs;
  if (assetName) return assetName;
  return unit.localizedName.includes('_name') ? 'Dato no verificado' : unit.localizedName;
}

function getAttackType(unit: ApiUnit): string {
  const abilityNames = unit.passiveAbilities.map((ability) => ability.name);
  const attackTypes = [
    abilityNames.includes('Ataque cuerpo a cuerpo') ? 'Melé' : null,
    abilityNames.includes('Ataque a distancia') ? 'A distancia' : null,
    abilityNames.includes('Largo alcance') ? 'Largo alcance' : null,
  ].filter((type): type is string => type !== null);

  return attackTypes.length > 0 ? attackTypes.join(' / ') : 'Dato no verificado';
}

function getMovementType(unit: ApiUnit): string {
  const abilityNames = unit.passiveAbilities.map((ability) => ability.name);
  if (abilityNames.includes('Volador')) return 'Volador';
  if (abilityNames.includes('Traslación')) return 'Traslación';
  return 'Terrestre';
}

function getCost(unit: ApiUnit): string {
  if (unit.costEntries.length === 0) return '—';
  return unit.costEntries
    .map(({ amount, displayName }) => `${amount.toLocaleString('es-ES')} ${displayName}`)
    .join(' + ');
}

function getSortValue(unit: ApiUnit, column: SortColumn): string | number {
  switch (column) {
    case 'name':
      return getUnitName(unit);
    case 'faction':
      return unit.faction === 'neutral' ? 'Neutral' : unit.factionDisplay;
    case 'tier':
      return unit.tier;
    case 'attackType':
      return getAttackType(unit);
    case 'movement':
      return getMovementType(unit);
    case 'attack':
      return unit.attack;
    case 'defense':
      return unit.defense;
    case 'health':
      return unit.health;
    case 'cost':
      return getCost(unit);
    case 'squadValue':
      return unit.squadValue;
  }
}

export const UnitCatalogTable: React.FC<UnitCatalogTableProps> = ({
  title,
  description,
  units,
  themeMode = 'dark',
}) => {
  const [sortColumn, setSortColumn] = useState<SortColumn>('squadValue');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [factionFilters, setFactionFilters] = useState<string[]>([]);
  const [tierFilters, setTierFilters] = useState<string[]>([]);
  const [attackTypeFilters, setAttackTypeFilters] = useState<string[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<ApiUnit | null>(null);
  const factionOptions = useMemo(() => [...new Map(
    units.map((unit) => [
      unit.faction,
      { value: unit.faction, label: unit.faction === 'neutral' ? 'Neutral' : unit.factionDisplay },
    ]),
  ).values()].sort((a, b) => a.label.localeCompare(b.label, 'es')), [units]);
  const tierOptions = useMemo(() => [...new Set(units.map((unit) => unit.tier))].sort((a, b) => a - b), [units]);
  const attackTypeOptions = useMemo(() => [...new Set(
    units.flatMap((unit) => getAttackType(unit).split(' / ')),
  )].sort((a, b) => a.localeCompare(b, 'es')), [units]);
  const toggleFilterValue = (
    value: string,
    setValues: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setValues((current) => current.includes(value)
      ? current.filter((selected) => selected !== value)
      : [...current, value]);
  };
  const filteredUnits = useMemo(() => units.filter((unit) => (
    (factionFilters.length === 0 || factionFilters.includes(unit.faction))
    && (tierFilters.length === 0 || tierFilters.includes(String(unit.tier)))
    && (
      attackTypeFilters.length === 0
      || attackTypeFilters.some((type) => getAttackType(unit).split(' / ').includes(type))
    )
  )), [units, factionFilters, tierFilters, attackTypeFilters]);
  const sortedUnits = useMemo(() => [...filteredUnits].sort((a, b) => {
    const first = getSortValue(a, sortColumn);
    const second = getSortValue(b, sortColumn);
    const comparison = typeof first === 'number' && typeof second === 'number'
      ? first - second
      : String(first).localeCompare(String(second), 'es', { sensitivity: 'base' });
    return (sortDirection === 'asc' ? comparison : -comparison)
      || getUnitName(a).localeCompare(getUnitName(b), 'es', { sensitivity: 'base' });
  }), [filteredUnits, sortColumn, sortDirection]);

  useEffect(() => {
    if (!selectedUnit) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedUnit(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedUnit]);

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection((direction) => direction === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection(column === 'squadValue' ? 'desc' : 'asc');
    }
  };

  return (
  <section className="space-y-4">
    <header className={`rounded-2xl border p-5 ${
      themeMode === 'light'
        ? 'border-slate-200 bg-white text-slate-900 shadow-sm'
        : 'border-slate-800 bg-black/40 text-white'
    }`}>
      <h3 className="text-lg font-serif font-bold uppercase tracking-wide">{title}</h3>
      <p className={`mt-1 text-xs ${themeMode === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>{description}</p>
      <span className={`mt-3 inline-flex rounded-lg border px-2.5 py-1 text-[11px] font-mono font-bold ${
        themeMode === 'light'
          ? 'border-amber-300 bg-amber-50 text-amber-900'
          : 'border-amber-700/50 bg-amber-950/40 text-amber-300'
      }`}>
        {sortedUnits.length} de {units.length} unidades
      </span>
    </header>

    <div className={`grid grid-cols-1 gap-3 rounded-2xl border p-4 sm:grid-cols-3 ${
      themeMode === 'light' ? 'border-slate-200 bg-white' : 'border-slate-800 bg-black/40'
    }`}>
      <div className="space-y-1 text-[10px] font-mono font-bold uppercase tracking-wider">
        <span className={themeMode === 'light' ? 'text-slate-600' : 'text-slate-400'}>Facción</span>
        <MultiSelectFilter
          label="Facción"
          options={factionOptions}
          selectedValues={factionFilters}
          onChange={(value) => toggleFilterValue(value, setFactionFilters)}
          themeMode={themeMode}
        />
      </div>
      <div className="space-y-1 text-[10px] font-mono font-bold uppercase tracking-wider">
        <span className={themeMode === 'light' ? 'text-slate-600' : 'text-slate-400'}>Tier</span>
        <MultiSelectFilter
          label="Tier"
          options={tierOptions.map((tier) => ({ value: String(tier), label: `Tier ${tier}` }))}
          selectedValues={tierFilters}
          onChange={(value) => toggleFilterValue(value, setTierFilters)}
          themeMode={themeMode}
        />
      </div>
      <div className="space-y-1 text-[10px] font-mono font-bold uppercase tracking-wider">
        <span className={themeMode === 'light' ? 'text-slate-600' : 'text-slate-400'}>Tipo de ataque</span>
        <MultiSelectFilter
          label="Tipo de ataque"
          options={attackTypeOptions.map((type) => ({ value: type, label: type }))}
          selectedValues={attackTypeFilters}
          onChange={(value) => toggleFilterValue(value, setAttackTypeFilters)}
          themeMode={themeMode}
        />
      </div>
    </div>

    <div className={`overflow-x-auto rounded-2xl border ${
      themeMode === 'light' ? 'border-slate-200 bg-white' : 'border-slate-800 bg-black/50'
    }`}>
      <table className={`w-full min-w-[1050px] text-left text-xs font-mono ${
        themeMode === 'light' ? 'text-slate-800' : 'text-slate-200'
      }`}>
        <thead className={`text-[10px] uppercase tracking-wider ${
          themeMode === 'light' ? 'bg-slate-100 text-slate-600' : 'bg-slate-900/90 text-slate-400'
        }`}>
          <tr>
            {SORTABLE_COLUMNS.map(({ key, label, align }) => (
              <th
                key={key}
                scope="col"
                aria-sort={sortColumn === key
                  ? sortDirection === 'asc' ? 'ascending' : 'descending'
                  : 'none'}
                className={`p-3 ${align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => handleSort(key)}
                  className={`inline-flex items-center gap-1 transition-colors hover:text-amber-400 ${
                    align === 'right' ? 'flex-row-reverse' : ''
                  }`}
                  aria-label={`Ordenar por ${label}${sortColumn === key ? (sortDirection === 'asc' ? ', ascendente' : ', descendente') : ''}`}
                >
                  {label}
                  {sortColumn === key
                    ? sortDirection === 'asc'
                      ? <ChevronUp className="h-3 w-3" />
                      : <ChevronDown className="h-3 w-3" />
                    : null}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`divide-y ${themeMode === 'light' ? 'divide-slate-200' : 'divide-slate-800/70'}`}>
          {sortedUnits.map((unit) => (
            <tr
              key={unit.id}
              className={`transition-colors ${
                themeMode === 'light' ? 'hover:bg-slate-50' : 'hover:bg-white/5'
              }`}
            >
              <th scope="row" className={`p-3 font-semibold ${
                themeMode === 'light' ? 'text-slate-900' : 'text-white'
              }`}>
                <button
                  type="button"
                  onClick={() => setSelectedUnit(unit)}
                  className="text-left underline decoration-transparent underline-offset-2 transition-colors hover:text-amber-500 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500"
                  aria-label={`Abrir ficha de ${getUnitName(unit)}`}
                >
                  {getUnitName(unit)}
                </button>
              </th>
              <td className="p-3">{unit.faction === 'neutral' ? 'Neutral' : unit.factionDisplay}</td>
              <td className="p-3 text-center">{unit.tier}</td>
              <td className="p-3">{getAttackType(unit)}</td>
              <td className="p-3">{getMovementType(unit)}</td>
              <td className="p-3 text-right">{unit.attack}</td>
              <td className="p-3 text-right">{unit.defense}</td>
              <td className="p-3 text-right">{unit.health}</td>
              <td className="p-3">{getCost(unit)}</td>
              <td className={`p-3 text-right font-bold ${
                themeMode === 'light' ? 'text-amber-800' : 'text-amber-300'
              }`}>
                {unit.squadValue.toLocaleString('es-ES')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {sortedUnits.length === 0 && (
      <p className={`rounded-xl border p-4 text-center text-sm ${
        themeMode === 'light'
          ? 'border-slate-200 bg-white text-slate-600'
          : 'border-slate-800 bg-black/40 text-slate-400'
      }`}>
        No hay unidades que coincidan con los filtros seleccionados.
      </p>
    )}
    {selectedUnit && (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="unit-catalog-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        onClick={() => setSelectedUnit(null)}
      >
        <section
          className={`max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border shadow-2xl ${
            themeMode === 'light'
              ? 'border-slate-200 bg-white text-slate-900'
              : 'border-slate-700 bg-[#100e17] text-slate-100'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <header className={`sticky top-0 z-10 flex items-start justify-between gap-4 border-b p-5 ${
            themeMode === 'light' ? 'border-slate-200 bg-white' : 'border-slate-800 bg-[#100e17]'
          }`}>
            <div className="flex items-center gap-4">
              <UnitImage
                name={selectedUnit.id}
                alt={getUnitName(selectedUnit)}
                nameEn={UNIT_ASSETS_BY_ID.get(selectedUnit.id)?.nameEn ?? selectedUnit.name}
                size="xl"
                className="w-48 h-48"
              />
              <div>
                <p className={`text-xs font-mono uppercase tracking-wider ${
                  themeMode === 'light' ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {selectedUnit.faction === 'neutral' ? 'Neutral' : selectedUnit.factionDisplay} · Tier {selectedUnit.tier}
                </p>
                <h3 id="unit-catalog-modal-title" className="mt-1 text-xl font-serif font-bold">
                  {getUnitName(selectedUnit)}
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSelectedUnit(null)}
              className={`rounded-lg border p-2 ${
                themeMode === 'light'
                  ? 'border-slate-200 text-slate-600 hover:bg-slate-100'
                  : 'border-slate-700 text-slate-300 hover:bg-white/10'
              }`}
              aria-label="Cerrar ficha"
            >
              <X className="h-4 w-4" />
            </button>
          </header>
          <div className="space-y-5 p-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['Ataque', selectedUnit.attack],
                ['Defensa', selectedUnit.defense],
                ['Salud', selectedUnit.health],
                ['Daño', `${selectedUnit.minDamage}-${selectedUnit.maxDamage}`],
                ['Velocidad', selectedUnit.speed],
                ['Iniciativa', selectedUnit.initiative],
                ['Movimiento', getMovementType(selectedUnit)],
                ['Valor de escuadra', selectedUnit.squadValue.toLocaleString('es-ES')],
              ].map(([label, value]) => (
                <div key={label} className={`rounded-xl border p-3 ${
                  themeMode === 'light' ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-black/30'
                }`}>
                  <p className={`text-[9px] font-mono uppercase tracking-wider ${
                    themeMode === 'light' ? 'text-slate-500' : 'text-slate-400'
                  }`}>{label}</p>
                  <p className="mt-1 text-sm font-bold">{value}</p>
                </div>
              ))}
            </div>
            <div className={`rounded-xl border p-4 ${
              themeMode === 'light' ? 'border-amber-200 bg-amber-50' : 'border-amber-900/60 bg-amber-950/20'
            }`}>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider">Coste de reclutamiento</h4>
              <p className="mt-2 text-sm">{getCost(selectedUnit)}</p>
            </div>
            {(selectedUnit.narrativeDescription || selectedUnit.description) && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider">Descripción</h4>
                <p className={`mt-2 text-sm leading-relaxed ${
                  themeMode === 'light' ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  <ResolvedText text={selectedUnit.narrativeDescription || selectedUnit.description || ''} />
                </p>
              </div>
            )}
            {selectedUnit.passiveAbilities.length + (selectedUnit.activeAbilities?.length ?? 0) > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider">Habilidades</h4>
                <ul className="mt-2 space-y-2">
                  {[...selectedUnit.passiveAbilities, ...(selectedUnit.activeAbilities ?? [])].map((ability) => (
                    <li key={ability.id} className={`rounded-lg border p-3 ${
                      themeMode === 'light' ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-black/30'
                    }`}>
                      <p className="text-sm font-bold">{ability.name}</p>
                      {ability.description && (
                        <p className={`mt-1 text-xs leading-relaxed ${
                          themeMode === 'light' ? 'text-slate-600' : 'text-slate-400'
                        }`}>
                          <ResolvedText text={ability.description} />
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    )}
  </section>
  );
};
