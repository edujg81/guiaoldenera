import React, { useState, useMemo } from 'react';
import type { HeroWithExtras, HeroSubskillChoice, SubclassInfo } from '../../../types';
import type { ApiSkill } from '../../../types-api';
import { TierBadge } from '../../ui/TierBadge';
import { ResolvedText } from '../../ui/ResolvedText';
import {
  X,
  Swords,
  Wand2,
  Shield,
  BookOpen,
  Sparkles,
  Zap,
  Target,
  Clock,
  Compass,
  CheckCircle2,
  ArrowRightLeft,
  Flame,
  Award,
  GitBranch,
  RotateCcw,
  Copy,
  Check,
  Users,
  Flame as FlameIcon,
  Award as AwardIcon,
} from 'lucide-react';
//import { getHeroPortrait } from '../../../data/heroAssetsData';
import { HeroImage } from '../../ui/HeroImage';
import { OFFICIAL_SKILLS_DATA } from '../../../data/officialSkillsData';
import { OFFICIAL_SUBCLASSES } from '../../../data/subclassesData';
import { HERO_SUBSKILL_CHOICES } from '../../../data/subskillsRecommendationData';
import { useStickyState } from '../../../utils/useStickyState';
import { HeroBuildSimulator } from '../../HeroBuildSimulator';
import type { FactionId } from '../../../data/factionDataProvider';

const heroDetailAssetUrls = import.meta.glob(
  '/src/assets/**/*.{png,jpg,jpeg,webp,svg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>;

const resolveHeroDetailAsset = (assetPath?: string): string | null => {
  if (!assetPath) return null;

  let path = assetPath.trim();
  if (!path) return null;

  if (path.startsWith('src/assets/')) {
    path = path.substring('src/assets/'.length);
  }

  if (!path.endsWith('.png')) {
    path += '.png';
  }

  return heroDetailAssetUrls[`/src/assets/${path}`] ?? null;
};

interface HeroDetailModalProps {
  hero: HeroWithExtras | null;
  onClose: () => void;
  onCompare?: (hero: HeroWithExtras) => void;
  themeMode?: 'dark' | 'light';
  themeAccentClass?: string;
}

const normalize = (str: string) =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

const findOfficialSkill = (skillStr: string): ApiSkill | undefined => {
  const clean = normalize(skillStr.replace(/\s*\((Experta|Avanzada|Básica)\)/, ''));
  return OFFICIAL_SKILLS_DATA.find((s) => {
    const sNorm = normalize(s.name);
    return sNorm === clean || clean.includes(sNorm) || sNorm.includes(clean);
  });
};

const resolveSubskillChoice = (
  skillName: string,
  tier: 'advanced' | 'expert',
  preferredName?: string
) => {
  const skill = findOfficialSkill(skillName);
  if (!skill) return null;

  const choices = tier === 'advanced' ? skill.level2.subSkillChoices : skill.level3.subSkillChoices;
  if (!choices.length) return null;

  const target = preferredName ? normalize(preferredName) : '';

  if (target) {
    const exact = choices.find((choice) => normalize(choice.name) === target);
    if (exact) return exact;

    const partial = choices.find(
      (choice) =>
        normalize(choice.name).includes(target) ||
        target.includes(normalize(choice.name))
    );
    if (partial) return partial;
  }

  return choices[0] ?? null;
};

const getSubskillChoicesForHero = (hero: HeroWithExtras): HeroSubskillChoice[] =>
  HERO_SUBSKILL_CHOICES[hero.id] ?? [];

export const HeroDetailModal: React.FC<HeroDetailModalProps> = (props) =>
  props.hero ? <HeroDetailModalContent {...props} hero={props.hero} /> : null;

const HeroDetailModalContent: React.FC<HeroDetailModalProps & { hero: HeroWithExtras }> = ({
  hero,
  onClose,
  onCompare,
  themeMode = 'dark',
  themeAccentClass = 'text-amber-400',
}) => {
  const isMage = hero.classType === 'magic';
  const [activeTab, setActiveTab] = useStickyState<'overview' | 'skills' | 'tactics' | 'subclasses' | 'simulator'>('overview', `hero_detail_tab_${hero.id}`);
  const [inspectedSkill, setInspectedSkill] = useState<ApiSkill | null>(null);
  const [showSubskillsDetails, setShowSubskillsDetails] = useStickyState<boolean>(true, 'hero_show_subskills_details');

  // The modal has no active skill allocation, so show API requirements without inventing progress.
  const factionSubclasses = useMemo(() => {
    const list = OFFICIAL_SUBCLASSES.filter(
      (sc) => sc.faction === hero.factionDisplay && sc.classType === (isMage ? 'Magia' : 'Poder')
    );
    return list;
  }, [hero.factionDisplay, isMage]);

  // Get skill recommendations for this hero
  const skillRecommendations = useMemo(() => {
    return getSubskillChoicesForHero(hero);
  }, [hero.id]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 shadow-2xl transition-all ${
          themeMode === 'light'
            ? 'bg-white border-slate-300 text-slate-900'
            : 'bg-slate-950 border-slate-800 text-slate-100'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header */}
        <div className="flex items-start grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-4 mb-4">
          <div className="w-40 shrink-0 flex flex-col items-center">
            <HeroImage
              heroId={hero.id}
              heroName={hero.name}
              faction={hero.faction}
              iconPath={hero.iconPath}
              alt={`Retrato de ${hero.name}`}
              size="2xl"
              className="rounded-2xl border-2 border-slate-700 shadow-xl bg-slate-800 w-32 h-32"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-serif font-bold text-yellow-200">{hero.name}</h2>
              <TierBadge tier={hero.tierRank} size="sm" className="max-w-full whitespace-normal text-center" />
            </div>

            <p className="mt-1 text-[16px] leading-snug break-words text-slate-400 font-cursive italic">
              {hero.title}
            </p>

            
            <div className="mt-3 flex gap-3 text-sm">
              <div className="flex items-center gap-2 mt-2">
                <img src={resolveHeroDetailAsset(hero.classIcon) ?? undefined} alt={`Clase ${hero.classDisplay}`} className="w-10 h-10 object-cover" />
                <span className="text-slate-300 font-medium">{hero.classDisplay}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img src={resolveHeroDetailAsset(hero.factionIcon) ?? undefined} alt={`Facción ${hero.factionDisplay}`} className="w-10 h-10 object-cover" />
                <span className="text-slate-300 font-medium">{hero.factionDisplay}</span>
              </div>
            </div>

            <div className="grid grid-cols-8 gap-0 mt-4">
              <div className="rounded-lg bg-slate-950/40 text-center">
                <img src={new URL(`../../../assets/icons/hero_stats/offence.png`, import.meta.url).href} alt="ATQ" className="w-6 h-6 mx-auto mb-1" />
              </div>
              <div className="font-bold text-slate-200">{hero.attack}</div>
              <div className="rounded-lg bg-slate-950/40 text-center">
                <img src={new URL(`../../../assets/icons/hero_stats/defence.png`, import.meta.url).href} alt="DEF" className="w-6 h-6 mx-auto mb-1" />
              </div>
              <div className="font-bold text-slate-200">{hero.defence}</div>
              <div className="rounded-lg bg-slate-950/40 text-center">
                <img src={new URL(`../../../assets/icons/hero_stats/spellpower.png`, import.meta.url).href} alt="PODER" className="w-6 h-6 mx-auto mb-1" />
              </div>
              <div className="font-bold text-slate-200">{hero.spellPower}</div>
              <div className="rounded-lg bg-slate-950/40 text-center">
                <img src={new URL(`../../../assets/icons/hero_stats/intelligence.png`, import.meta.url).href} alt="CONOC" className="w-6 h-6 mx-auto mb-1" />
              </div>
              <div className="font-bold text-slate-200">{hero.knowledge}</div>
            </div>
            
          </div>

          <div className="flex flex-col justify-right mt-5">
            <div className="p-4 rounded-xl">
              <div className="space-y-2.5">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-red-400 font-medium">Ataque Físico</span>
                    <span className="text-slate-300 font-mono">{hero.statGrowth.attack}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: `${hero.statGrowth.attack}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-blue-400 font-medium">Defensa</span>
                    <span className="text-slate-300 font-mono">{hero.statGrowth.defense}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${hero.statGrowth.defense}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-purple-400 font-medium">Poder Mágico (SP)</span>
                    <span className="text-slate-300 font-mono">{hero.statGrowth.spellPower}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: `${hero.statGrowth.spellPower}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-cyan-400 font-medium">Conocimiento (Maná)</span>
                    <span className="text-slate-300 font-mono">{hero.statGrowth.knowledge}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-500" style={{ width: `${hero.statGrowth.knowledge}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-6 border-b border-slate-700/50">
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-t-lg font-medium transition-all ${
                activeTab === 'overview'
                  ? `bg-slate-800/50 text-slate-200 border-b-2 border-amber-400`
                  : 'hover:bg-slate-700/50 text-slate-400'
              }`}
            >
              <BookOpen className="w-4 h-4 mr-2" /> Ficha
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 rounded-t-lg font-medium transition-all ${
                activeTab === 'skills'
                  ? `bg-slate-800/50 text-slate-200 border-b-2 border-amber-400`
                  : 'hover:bg-slate-700/50 text-slate-400'
              }`}
            >
              <Sparkles className="w-4 h-4 mr-2" /> Habilidades
            </button>
            <button
              onClick={() => setActiveTab('tactics')}
              className={`px-4 py-2 rounded-t-lg font-medium transition-all ${
                activeTab === 'tactics'
                  ? `bg-slate-800/50 text-slate-200 border-b-2 border-amber-400`
                  : 'hover:bg-slate-700/50 text-slate-400'
              }`}
            >
              <Target className="w-4 h-4 mr-2" /> Tácticas
            </button>
            <button
              onClick={() => setActiveTab('subclasses')}
              className={`px-4 py-2 rounded-t-lg font-medium transition-all ${
                activeTab === 'subclasses'
                  ? `bg-slate-800/50 text-slate-200 border-b-2 border-amber-400`
                  : 'hover:bg-slate-700/50 text-slate-400'
              }`}
            >
              <Award className="w-4 h-4 mr-2" /> Subclases
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 rounded-t-lg font-medium transition-all ${
                activeTab === 'simulator'
                  ? `bg-slate-800/50 text-slate-200 border-b-2 border-amber-400`
                  : 'hover:bg-slate-700/50 text-slate-400'
              }`}
            >
              <GitBranch className="w-4 h-4 mr-2" /> Simulador
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <OverviewTab hero={hero} onCompare={onCompare} themeMode={themeMode} themeAccentClass={themeAccentClass} />
        )}
        {activeTab === 'skills' && (
          <SkillsTab hero={hero} skillRecommendations={skillRecommendations} inspectedSkill={inspectedSkill} setInspectedSkill={setInspectedSkill} showSubskillsDetails={showSubskillsDetails} setShowSubskillsDetails={setShowSubskillsDetails} themeMode={themeMode} themeAccentClass={themeAccentClass} />
        )}
        {activeTab === 'tactics' && (
          <TacticsTab hero={hero} themeMode={themeMode} themeAccentClass={themeAccentClass} />
        )}
        {activeTab === 'subclasses' && (
          <SubclassesTab hero={hero} factionSubclasses={factionSubclasses} themeMode={themeMode} themeAccentClass={themeAccentClass} />
        )}
        {activeTab === 'simulator' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <GitBranch className="w-4 h-4" />
              <h3 className="text-lg font-semibold font-serif">Simulador de Build para {hero.name}</h3>
            </div>
            
            <HeroBuildSimulator
              selectedFaction={hero.faction as FactionId}
              themeMode={themeMode}
              initialHeroId={hero.id}
            />
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          {onCompare && activeTab === 'overview' ? (
            <button
              onClick={() => {
                onCompare(hero);
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-lg shadow-amber-600/20"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>Comparar en Pantalla Dividida</span>
            </button>
          ) : <div />}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};

// Overview Tab Component
const OverviewTab: React.FC<{
  hero: HeroWithExtras;
  onCompare?: (hero: HeroWithExtras) => void;
  themeMode?: 'dark' | 'light';
  themeAccentClass?: string;
}> = ({ hero, onCompare, themeMode, themeAccentClass }) => {
  const isMage = hero.classType === 'magic';

  return (
    <div className="space-y-6">
      {/* 2-Column Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Specialty Box */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-3 mb-2">
            {hero.specializationIcon ? (
              <img src={resolveHeroDetailAsset(hero.specializationIcon) ?? undefined} alt="Especialidad" className="w-16 h-16 rounded-md object-cover" />
            ) : (
              <Sparkles className="w-10 h-10 text-amber-400" />
            )}
            <span className="text-sm font-bold text-amber-400">Especialidad: {hero.specializationName}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed"><ResolvedText text={hero.specializationDescription} /></p>
        </div>

        {/* Starting Army Box */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-200 mb-2">
            <Shield className="w-4 h-4 text-rose-400" />
            <span>Ejército Inicial</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {hero.startingArmy?.map((unit, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                {unit.icon ? (
                  <img src={resolveHeroDetailAsset(unit.icon) ?? undefined} alt={unit.unitName} className="w-16 h-16 rounded-sm object-cover" />
                ) : null}
                <div className="text-xs font-mono text-slate-200 max-w-[4.5rem] leading-tight">{unit.unitName}</div>
                <div className="text-xs font-mono text-amber-300">{unit.countInterval}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Starting Skills */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-200 mb-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Habilidades Iniciales</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {hero.startingSkills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                {skill.icon ? (
                  <img src={resolveHeroDetailAsset(skill.icon) ?? undefined} alt={skill.skillName} className="w-16 h-16 rounded-sm object-cover" />
                ) : null}
                <div className="text-xs font-mono text-slate-200 max-w-[4.5rem] leading-tight">{skill.skillName}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Starting Spells */}
        {hero.startingSpells && hero.startingSpells.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-200 mb-2">
              <Wand2 className="w-4 h-4 text-purple-400" />
              <span>Hechizos Iniciales</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {hero.startingSpells.map((spell, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  {spell.icon ? (
                    <img src={resolveHeroDetailAsset(spell.icon) ?? undefined} alt={spell.spellName} className="w-16 h-16 rounded-sm object-cover" />
                  ) : null}
                  <div className="text-xs font-mono text-slate-200 max-w-[4.5rem] leading-tight">{spell.spellName}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Biography - full row */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 md:col-span-2">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-200 mb-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Biografía</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed"><ResolvedText text={hero.description} /></p>
        </div>

        {/* Motto - full row */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 md:col-span-2">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-200 mb-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Lema</span>
          </div>
          <p className="text-xs text-slate-300 italic leading-relaxed">&ldquo;{hero.motto}&rdquo;</p>
        </div>

        {/* Recommendation & Role - shared row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-200 mb-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Recomendación de Inicio</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{hero.recommendedStartingTier}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-200 mb-2">
              <Target className="w-4 h-4 text-rose-400" />
              <span>Rol Competitivo</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{hero.role}</p>
          </div>
        </div>
      </div>


    </div>
  );
};

// Skills Tab Component
const SkillsTab: React.FC<{
  hero: HeroWithExtras;
  skillRecommendations: HeroSubskillChoice[];
  inspectedSkill: ApiSkill | null;
  setInspectedSkill: (skill: ApiSkill | null) => void;
  showSubskillsDetails: boolean;
  setShowSubskillsDetails: (show: boolean) => void;
  themeMode?: 'dark' | 'light';
  themeAccentClass?: string;
}> = ({ hero, skillRecommendations, inspectedSkill, setInspectedSkill, showSubskillsDetails, setShowSubskillsDetails, themeMode, themeAccentClass }) => {
  return (
    <div className="space-y-6">
      {/* Skill Recommendations */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4" />
          <h3 className="text-lg font-semibold font-serif">Recomendaciones de habilidades para {hero.name}</h3>
        </div>
        
        {skillRecommendations.length === 0 ? (
          <p className="text-sm text-slate-400">No hay recomendaciones de subhabilidades revisadas para este héroe.</p>
        ) : skillRecommendations.map((rec, index) => {
          const officialSkill = findOfficialSkill(rec.skillName);
          const officialSkillIcon = officialSkill ? resolveHeroDetailAsset(officialSkill.icon) : null;
          const advancedSelected = resolveSubskillChoice(rec.skillName, 'advanced', rec.advancedSubskill);
          const expertSelected = resolveSubskillChoice(rec.skillName, 'expert', rec.expertSubskill);

          return (
            <div key={index} className="border rounded-xl p-4 mb-4 transition-all hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-slate-800/50 rounded-full text-slate-400">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-3 flex items-start gap-3">
                    {officialSkillIcon ? (
                      <img
                        src={officialSkillIcon}
                        alt={officialSkill?.name ?? rec.skillName}
                        className="h-10 w-10 shrink-0 rounded-md object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-800 text-slate-400">
                        <Sparkles className="h-5 w-5" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-200">{officialSkill?.name ?? rec.skillName}</h4>
                      {officialSkill?.level1.description ? (
                        <p className="mt-1 text-xs leading-relaxed text-slate-300">
                          <ResolvedText text={officialSkill.level1.description} />
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-blue-600/40 bg-blue-950/40">
                          {advancedSelected?.icon ? (
                            <img
                              src={resolveHeroDetailAsset(advancedSelected.icon) ?? undefined}
                              alt={advancedSelected.name}
                              className="h-8 w-8 object-cover"
                            />
                          ) : (
                            <Zap className="h-4 w-4 text-blue-400" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-blue-400" />
                            <span className="font-mono text-xs uppercase tracking-wide text-slate-400">Avanzada</span>
                          </div>
                          <div className="mt-1 font-semibold text-slate-100">
                            {advancedSelected?.name ?? rec.advancedSubskill}
                          </div>
                          {officialSkill?.level2.description ? (
                            <p className="mt-1 text-[11px] leading-relaxed text-sky-200/90">
                              <ResolvedText text={officialSkill.level2.description} />
                            </p>
                          ) : null}
                          {advancedSelected?.description ? (
                            <p className="mt-1 text-xs leading-relaxed text-slate-300">
                              <ResolvedText text={advancedSelected.description} />
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-amber-600/40 bg-amber-950/40">
                          {expertSelected?.icon ? (
                            <img
                              src={resolveHeroDetailAsset(expertSelected.icon) ?? undefined}
                              alt={expertSelected.name}
                              className="h-8 w-8 object-cover"
                            />
                          ) : (
                            <Award className="h-4 w-4 text-amber-400" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-amber-400" />
                            <span className="font-mono text-xs uppercase tracking-wide text-slate-400">Experta</span>
                          </div>
                          <div className="mt-1 font-semibold text-slate-100">
                            {expertSelected?.name ?? rec.expertSubskill}
                          </div>
                          {officialSkill?.level3.description ? (
                            <p className="mt-1 text-[11px] leading-relaxed text-amber-200/90">
                              <ResolvedText text={officialSkill.level3.description} />
                            </p>
                          ) : null}
                          {expertSelected?.description ? (
                            <p className="mt-1 text-xs leading-relaxed text-slate-300">
                              <ResolvedText text={expertSelected.description} />
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const skill = findOfficialSkill(rec.skillName);
                      if (skill) setInspectedSkill(skill);
                    }}
                    className={`mt-3 inline-flex items-center gap-2 rounded px-3 py-1.5 text-xs font-mono transition-all ${
                      showSubskillsDetails
                        ? 'bg-slate-800/50 text-slate-200'
                        : 'hover:bg-slate-700/50 text-slate-400'
                    }`}
                  >
                    {showSubskillsDetails ? 'Ver detalle oficial' : 'Ver detalle oficial'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subskill Details Modal */}
      {inspectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 shadow-2xl bg-slate-950 text-slate-100">
            <button
              onClick={() => setInspectedSkill(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5" />
                <h2 className="text-xl font-serif font-bold">{inspectedSkill.name}</h2>
              </div>
              
              <div className="space-y-3">
                <div className="border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold text-slate-200">Básica</span>
                  </div>
                  <p className="text-slate-300">{inspectedSkill.level1.levelName}</p>
                </div>
                
                <div className="border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-slate-200">Avanzada</span>
                  </div>
                  <p className="text-slate-300">{inspectedSkill.level2.levelName}</p>
                  {inspectedSkill.level2.description ? (
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      <ResolvedText text={inspectedSkill.level2.description} />
                    </p>
                  ) : null}
                  {showSubskillsDetails && inspectedSkill.level2.subSkillChoices.length > 0 && (
                    <div className="mt-3 space-y-3">
                      <div className="flex items-center gap-2 mb-1 text-xs font-mono">
                        <Sparkles className="w-3 h-3" />
                        <span>Subskills Avanzadas:</span>
                      </div>
                      {inspectedSkill.level2.subSkillChoices.map((sub, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-slate-700 bg-slate-950">
                            {sub.icon ? (
                              <img
                                src={resolveHeroDetailAsset(sub.icon) ?? undefined}
                                alt={sub.name}
                                className="h-7 w-7 object-cover"
                              />
                            ) : (
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold text-slate-100">{sub.name}</div>
                            <p className="mt-1 text-xs leading-relaxed text-slate-300">
                              <ResolvedText text={sub.description} />
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold text-slate-200">Experta</span>
                  </div>
                  <p className="text-slate-300">{inspectedSkill.level3.levelName}</p>
                  {inspectedSkill.level3.description ? (
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      <ResolvedText text={inspectedSkill.level3.description} />
                    </p>
                  ) : null}
                  {showSubskillsDetails && inspectedSkill.level3.subSkillChoices.length > 0 && (
                    <div className="mt-3 space-y-3">
                      <div className="flex items-center gap-2 mb-1 text-xs font-mono">
                        <Award className="w-3 h-3 text-yellow-400" />
                        <span>Subskills Expertas:</span>
                      </div>
                      {inspectedSkill.level3.subSkillChoices.map((sub, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-slate-700 bg-slate-950">
                            {sub.icon ? (
                              <img
                                src={resolveHeroDetailAsset(sub.icon) ?? undefined}
                                alt={sub.name}
                                className="h-7 w-7 object-cover"
                              />
                            ) : (
                              <Award className="w-3 h-3 text-yellow-400" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold text-slate-100">{sub.name}</div>
                            <p className="mt-1 text-xs leading-relaxed text-slate-300">
                              <ResolvedText text={sub.description} />
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowSubskillsDetails(!showSubskillsDetails)}
                className="px-3 py-1 rounded text-xs font-mono transition-all hover:bg-slate-700/50"
              >
                {showSubskillsDetails ? 'Ocultar Subskills' : 'Mostrar Subskills'}
              </button>
              <button
                onClick={() => setInspectedSkill(null)}
                className="ml-3 px-3 py-1 rounded text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Tactics Tab Component
const TacticsTab: React.FC<{
  hero: HeroWithExtras;
  themeMode?: 'dark' | 'light';
  themeAccentClass?: string;
}> = ({ hero, themeMode, themeAccentClass }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-4 h-4" />
          <h3 className="text-lg font-semibold font-serif">Análisis Táctico de {hero.name}</h3>
        </div>
        
        <div className="border rounded-xl p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-slate-200">Sinergia de Facción</span>
            </div>
            <p className="text-slate-300">{hero.synergyCombo}</p>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-slate-200">Apertura Día 1</span>
          </div>
          {hero.day1Action ? (
            <p className="text-slate-300">{hero.day1Action}</p>
          ) : (
            <p className="text-slate-400 italic">No tiene una acción específica de apertura definida.</p>
          )}
          
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-4 h-4 text-rose-400" />
            <span className="font-semibold text-slate-200">Estilo de Juego</span>
          </div>
          <p className="text-slate-300">{hero.tacticalPlaystyle}</p>
          
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-slate-200">Build Recomendada</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {hero.idealSkillBuild?.map((skill, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-mono text-[11px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Subclasses Tab Component
const SubclassesTab: React.FC<{
  hero: HeroWithExtras;
  factionSubclasses: SubclassInfo[];
  themeMode?: 'dark' | 'light';
  themeAccentClass?: string;
}> = ({ hero, factionSubclasses, themeMode, themeAccentClass }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-4 h-4" />
          <h3 className="text-lg font-semibold font-serif">Subclases y requisitos para {hero.name}</h3>
        </div>
        
        {factionSubclasses.length > 0 ? (
          <div className="space-y-4">
            {factionSubclasses.map((subclass, index) => (
              <div key={subclass.id} className="border rounded-xl p-4 mb-4 transition-all hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-slate-800/50 rounded-full text-slate-400">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <h4 className="font-semibold text-slate-200">{subclass.name}</h4>
                      <p className="text-xs text-slate-400">{subclass.bonusTitle}</p>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <BookOpen className="w-3 h-3" />
                        <span>Requisitos oficiales: 5 habilidades a nivel Experto</span>
                      </div>
                      <ul className="list-disc pl-5 text-sm text-slate-300">
                        {subclass.requiredSkills.map((skill) => (
                          <li key={skill.name}>{skill.name} (Experta)</li>
                        ))}
                      </ul>
                      <p className="text-xs text-slate-400">El progreso actual de habilidades no está disponible en esta ficha.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-slate-400">No hay subclases disponibles para la combinación de facción y clase de este héroe.</p>
          </div>
        )}
      </div>
    </div>
  );
};
