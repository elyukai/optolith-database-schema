import * as Advantage from "./types/Advantage.js"
import * as AnimalDisease from "./types/AnimalDisease.js"
import * as AnimalType from "./types/AnimalType.js"
import * as ArcaneBardTradition from "./types/ArcaneBardTradition.js"
import * as ArcaneDancerTradition from "./types/ArcaneDancerTradition.js"
import * as Aspect from "./types/Aspect.js"
import * as Attribute from "./types/Attribute.js"
import * as Blessing from "./types/Blessing.js"
import * as Cantrip from "./types/Cantrip.js"
import * as Ceremony from "./types/Ceremony.js"
import * as CloseCombatTechnique from "./types/CombatTechnique_Close.js"
import * as RangedCombatTechnique from "./types/CombatTechnique_Ranged.js"
import * as Condition from "./types/Condition.js"
import * as Continent from "./types/Continent.js"
import * as Culture from "./types/Culture.js"
import * as DerivedCharacteristic from "./types/DerivedCharacteristic.js"
import * as Disadvantage from "./types/Disadvantage.js"
import * as Disease from "./types/Disease.js"
import * as Element from "./types/Element.js"
import * as EquipmentPackage from "./types/equipment/EquipmentPackage.js"
import * as Poison from "./types/equipment/item/Poison.js"
import * as ArmorType from "./types/equipment/item/sub/ArmorType.js"
import * as Reach from "./types/equipment/item/sub/Reach.js"
import * as ItemGroup from "./types/equipment/ItemGroup.js"
import * as ExperienceLevel from "./types/ExperienceLevel.js"
import * as EyeColor from "./types/EyeColor.js"
import * as FamiliarsTrick from "./types/FamiliarsTrick.js"
import * as HairColor from "./types/HairColor.js"
import * as Kirchenpraegung from "./types/Kirchenpraegung.js"
import * as Curriculum from "./types/Lessons_Curriculum.js"
import * as Guideline from "./types/Lessons_Guideline.js"
import * as LiturgicalChant from "./types/LiturgicalChant.js"
import * as Locales from "./types/Locale.js"
import * as AnimistPower from "./types/magicalActions/AnimistPower.js"
import * as Tribe from "./types/magicalActions/AnimistPower_Tribe.js"
import * as Curse from "./types/magicalActions/Curse.js"
import * as DominationRitual from "./types/magicalActions/DominationRitual.js"
import * as ElvenMagicalSong from "./types/magicalActions/ElvenMagicalSong.js"
import * as GeodeRitual from "./types/magicalActions/GeodeRitual.js"
import * as JesterTrick from "./types/magicalActions/JesterTrick.js"
import * as MagicalDance from "./types/magicalActions/MagicalDance.js"
import * as MagicalMelody from "./types/magicalActions/MagicalMelody.js"
import * as MagicalRune from "./types/magicalActions/MagicalRune.js"
import * as ZibiljaRitual from "./types/magicalActions/ZibiljaRitual.js"
import * as MetaCondition from "./types/MetaCondition.js"
import * as PactCategory from "./types/PactCategory.js"
import * as Patron from "./types/Patron.js"
import * as PatronCategory from "./types/PatronCategory.js"
import * as PersonalityTrait from "./types/PersonalityTrait.js"
import * as Profession from "./types/Profession.js"
import * as Property from "./types/Property.js"
import * as Race from "./types/Race.js"
import * as Region from "./types/Region.js"
import * as Ritual from "./types/Ritual.js"
import * as CoreRule from "./types/rule/CoreRule.js"
import * as FocusRule from "./types/rule/FocusRule.js"
import * as Subject from "./types/rule/FocusRule_Subject.js"
import * as OptionalRule from "./types/rule/OptionalRule.js"
import * as Service from "./types/Service.js"
import * as SexPractice from "./types/SexPractice.js"
import * as Skill from "./types/Skill.js"
import * as SkillGroup from "./types/SkillGroup.js"
import * as SkillModificationLevel from "./types/SkillModificationLevel.js"
import * as SocialStatus from "./types/SocialStatus.js"
import * as Publication from "./types/source/Publication.js"
import * as AdvancedCombatSpecialAbility from "./types/specialAbility/AdvancedCombatSpecialAbility.js"
import * as AdvancedKarmaSpecialAbility from "./types/specialAbility/AdvancedKarmaSpecialAbility.js"
import * as AdvancedMagicalSpecialAbility from "./types/specialAbility/AdvancedMagicalSpecialAbility.js"
import * as AdvancedSkillSpecialAbility from "./types/specialAbility/AdvancedSkillSpecialAbility.js"
import * as AncestorGlyph from "./types/specialAbility/AncestorGlyph.js"
import * as BlessedTradition from "./types/specialAbility/BlessedTradition.js"
import * as BrawlingSpecialAbility from "./types/specialAbility/BrawlingSpecialAbility.js"
import * as CeremonialItemSpecialAbility from "./types/specialAbility/CeremonialItemSpecialAbility.js"
import * as CombatSpecialAbility from "./types/specialAbility/CombatSpecialAbility.js"
import * as CombatStyleSpecialAbility from "./types/specialAbility/CombatStyleSpecialAbility.js"
import * as CommandSpecialAbility from "./types/specialAbility/CommandSpecialAbility.js"
import * as FamiliarSpecialAbility from "./types/specialAbility/FamiliarSpecialAbility.js"
import * as FatePointSexSpecialAbility from "./types/specialAbility/FatePointSexSpecialAbility.js"
import * as FatePointSpecialAbility from "./types/specialAbility/FatePointSpecialAbility.js"
import * as GeneralSpecialAbility from "./types/specialAbility/GeneralSpecialAbility.js"
import * as KarmaSpecialAbility from "./types/specialAbility/KarmaSpecialAbility.js"
import * as LiturgicalStyleSpecialAbility from "./types/specialAbility/LiturgicalStyleSpecialAbility.js"
import * as LycantropicGift from "./types/specialAbility/LycantropicGift.js"
import * as MagicalSpecialAbility from "./types/specialAbility/MagicalSpecialAbility.js"
import * as MagicalTradition from "./types/specialAbility/MagicalTradition.js"
import * as MagicStyleSpecialAbility from "./types/specialAbility/MagicStyleSpecialAbility.js"
import * as PactGift from "./types/specialAbility/PactGift.js"
import * as ProtectiveWardingCircleSpecialAbility from "./types/specialAbility/ProtectiveWardingCircleSpecialAbility.js"
import * as Sermon from "./types/specialAbility/Sermon.js"
import * as SexSpecialAbility from "./types/specialAbility/SexSpecialAbility.js"
import * as SikaryanDrainSpecialAbility from "./types/specialAbility/SikaryanDrainSpecialAbility.js"
import * as SkillStyleSpecialAbility from "./types/specialAbility/SkillStyleSpecialAbility.js"
import * as Language from "./types/specialAbility/sub/Language.js"
import * as Script from "./types/specialAbility/sub/Script.js"
import * as TradeSecret from "./types/specialAbility/sub/TradeSecret.js"
import * as VampiricGift from "./types/specialAbility/VampiricGift.js"
import * as Vision from "./types/specialAbility/Vision.js"
import * as Spell from "./types/Spell.js"
import * as State from "./types/State.js"
import * as Talisman from "./types/Talisman.js"
import * as TargetCategory from "./types/TargetCategory.js"
import * as ArcaneOrbEnchantment from "./types/traditionArtifacts/ArcaneOrbEnchantment.js"
import * as AttireEnchantment from "./types/traditionArtifacts/AttireEnchantment.js"
import * as BowlEnchantment from "./types/traditionArtifacts/BowlEnchantment.js"
import * as CauldronEnchantment from "./types/traditionArtifacts/CauldronEnchantment.js"
import * as ChronicleEnchantment from "./types/traditionArtifacts/ChronicleEnchantment.js"
import * as DaggerRitual from "./types/traditionArtifacts/DaggerRitual.js"
import * as FoolsHatEnchantment from "./types/traditionArtifacts/FoolsHatEnchantment.js"
import * as InstrumentEnchantment from "./types/traditionArtifacts/InstrumentEnchantment.js"
import * as Krallenkettenzauber from "./types/traditionArtifacts/Krallenkettenzauber.js"
import * as OrbEnchantment from "./types/traditionArtifacts/OrbEnchantment.js"
import * as RingEnchantment from "./types/traditionArtifacts/RingEnchantment.js"
import * as SickleRitual from "./types/traditionArtifacts/SickleRitual.js"
import * as SpellSwordEnchantment from "./types/traditionArtifacts/SpellSwordEnchantment.js"
import * as StaffEnchantment from "./types/traditionArtifacts/StaffEnchantment.js"
import * as AnimalShape from "./types/traditionArtifacts/sub/AnimalShape.js"
import * as AnimalShapePath from "./types/traditionArtifacts/sub/AnimalShapePath.js"
import * as AnimalShapeSize from "./types/traditionArtifacts/sub/AnimalShapeSize.js"
import * as Brew from "./types/traditionArtifacts/sub/Brew.js"
import * as ToyEnchantment from "./types/traditionArtifacts/ToyEnchantment.js"
import * as Trinkhornzauber from "./types/traditionArtifacts/Trinkhornzauber.js"
import * as WandEnchantment from "./types/traditionArtifacts/WandEnchantment.js"
import * as WeaponEnchantment from "./types/traditionArtifacts/WeaponEnchantment.js"
import * as UI from "./types/UI.js"
import { TypeValidator } from "./validation/schema.js"

export type TypeMap = {
  advancedCombatSpecialAbilities: AdvancedCombatSpecialAbility.AdvancedCombatSpecialAbility
  advancedKarmaSpecialAbilities: AdvancedKarmaSpecialAbility.AdvancedKarmaSpecialAbility
  advancedMagicalSpecialAbilities: AdvancedMagicalSpecialAbility.AdvancedMagicalSpecialAbility
  advancedSkillSpecialAbilities: AdvancedSkillSpecialAbility.AdvancedSkillSpecialAbility
  advantages: Advantage.Advantage
  ancestorGlyphs: AncestorGlyph.AncestorGlyph
  animalDiseases: AnimalDisease.AnimalDisease
  animalShapePaths: AnimalShapePath.AnimalShapePath
  animalShapes: AnimalShape.AnimalShape
  animalShapeSizes: AnimalShapeSize.AnimalShapeSize
  animalTypes: AnimalType.AnimalType
  animistPowers: AnimistPower.AnimistPower
  animistPowerTribes: Tribe.Tribe
  arcaneBardTraditions: ArcaneBardTradition.ArcaneBardTradition
  arcaneDancerTraditions: ArcaneDancerTradition.ArcaneDancerTradition
  arcaneOrbEnchantments: ArcaneOrbEnchantment.ArcaneOrbEnchantment
  armorTypes: ArmorType.ArmorType
  aspects: Aspect.Aspect
  attireEnchantments: AttireEnchantment.AttireEnchantment
  attributes: Attribute.Attribute
  blessedTraditions: BlessedTradition.BlessedTradition
  blessings: Blessing.Blessing
  bowlEnchantments: BowlEnchantment.BowlEnchantment
  brawlingSpecialAbilities: BrawlingSpecialAbility.BrawlingSpecialAbility
  brews: Brew.Brew
  cantrips: Cantrip.Cantrip
  cauldronEnchantments: CauldronEnchantment.CauldronEnchantment
  ceremonialItemSpecialAbilities: CeremonialItemSpecialAbility.CeremonialItemSpecialAbility
  ceremonies: Ceremony.Ceremony
  chronicleEnchantments: ChronicleEnchantment.ChronicleEnchantment
  closeCombatTechniques: CloseCombatTechnique.CloseCombatTechnique
  combatSpecialAbilities: CombatSpecialAbility.CombatSpecialAbility
  combatStyleSpecialAbilities: CombatStyleSpecialAbility.CombatStyleSpecialAbility
  commandSpecialAbilities: CommandSpecialAbility.CommandSpecialAbility
  conditions: Condition.Condition
  continents: Continent.Continent
  coreRules: CoreRule.CoreRule
  cultures: Culture.Culture
  curses: Curse.Curse
  daggerRituals: DaggerRitual.DaggerRitual
  derivedCharacteristics: DerivedCharacteristic.DerivedCharacteristic
  disadvantages: Disadvantage.Disadvantage
  diseases: Disease.Disease
  dominationRituals: DominationRitual.DominationRitual
  elements: Element.Element
  elvenMagicalSongs: ElvenMagicalSong.ElvenMagicalSong
  equipmentPackages: EquipmentPackage.EquipmentPackage
  experienceLevels: ExperienceLevel.ExperienceLevel
  eyeColors: EyeColor.EyeColor
  familiarSpecialAbilities: FamiliarSpecialAbility.FamiliarSpecialAbility
  familiarsTricks: FamiliarsTrick.FamiliarsTrick
  fatePointSexSpecialAbilities: FatePointSexSpecialAbility.FatePointSexSpecialAbility
  fatePointSpecialAbilities: FatePointSpecialAbility.FatePointSpecialAbility
  focusRules: FocusRule.FocusRule
  focusRuleSubjects: Subject.Subject
  foolsHatEnchantments: FoolsHatEnchantment.FoolsHatEnchantment
  generalSpecialAbilities: GeneralSpecialAbility.GeneralSpecialAbility
  geodeRituals: GeodeRitual.GeodeRitual
  hairColors: HairColor.HairColor
  instrumentEnchantments: InstrumentEnchantment.InstrumentEnchantment
  itemGroups: ItemGroup.ItemGroup
  jesterTricks: JesterTrick.JesterTrick
  karmaSpecialAbilities: KarmaSpecialAbility.KarmaSpecialAbility
  kirchenpraegungen: Kirchenpraegung.Kirchenpraegung
  krallenkettenzauber: Krallenkettenzauber.Krallenkettenzauber
  languages: Language.Language
  lessonsCurricula: Curriculum.Curriculum
  lessonsGuidelines: Guideline.Guideline
  liturgicalChants: LiturgicalChant.LiturgicalChant
  liturgicalStyleSpecialAbilities: LiturgicalStyleSpecialAbility.LiturgicalStyleSpecialAbility
  locales: Locales.Locales
  lycantropicGifts: LycantropicGift.LycantropicGift
  magicalDances: MagicalDance.MagicalDance
  magicalMelodies: MagicalMelody.MagicalMelody
  magicalRunes: MagicalRune.MagicalRune
  magicalSpecialAbilities: MagicalSpecialAbility.MagicalSpecialAbility
  magicalTraditions: MagicalTradition.MagicalTradition
  magicStyleSpecialAbilities: MagicStyleSpecialAbility.MagicStyleSpecialAbility
  metaConditions: MetaCondition.MetaCondition
  optionalRules: OptionalRule.OptionalRule
  orbEnchantments: OrbEnchantment.OrbEnchantment
  pactCategories: PactCategory.PactCategory
  pactGifts: PactGift.PactGift
  patronCategories: PatronCategory.PatronCategory
  patrons: Patron.Patron
  personalityTraits: PersonalityTrait.PersonalityTrait
  poisons: Poison.Poison
  professions: Profession.Profession
  properties: Property.Property
  protectiveWardingCircleSpecialAbilities: ProtectiveWardingCircleSpecialAbility.ProtectiveWardingCircleSpecialAbility
  publications: Publication.Publication
  races: Race.Race
  rangedCombatTechniques: RangedCombatTechnique.RangedCombatTechnique
  reaches: Reach.Reach
  regions: Region.Region
  ringEnchantments: RingEnchantment.RingEnchantment
  rituals: Ritual.Ritual
  scripts: Script.Script
  sermons: Sermon.Sermon
  services: Service.Service
  sexPractices: SexPractice.SexPractice
  sexSpecialAbilities: SexSpecialAbility.SexSpecialAbility
  sickleRituals: SickleRitual.SickleRitual
  sikaryanDrainSpecialAbilities: SikaryanDrainSpecialAbility.SikaryanDrainSpecialAbility
  skillGroups: SkillGroup.SkillGroup
  skillModificationLevels: SkillModificationLevel.SkillModificationLevel
  skills: Skill.Skill
  skillStyleSpecialAbilities: SkillStyleSpecialAbility.SkillStyleSpecialAbility
  socialStatuses: SocialStatus.SocialStatus
  spells: Spell.Spell
  spellSwordEnchantments: SpellSwordEnchantment.SpellSwordEnchantment
  staffEnchantments: StaffEnchantment.StaffEnchantment
  states: State.State
  targetCategories: TargetCategory.TargetCategory
  talismans: Talisman.Talisman
  toyEnchantments: ToyEnchantment.ToyEnchantment
  tradeSecrets: TradeSecret.TradeSecret
  trinkhornzauber: Trinkhornzauber.Trinkhornzauber
  ui: UI.UI
  vampiricGifts: VampiricGift.VampiricGift
  visions: Vision.Vision
  wandEnchantments: WandEnchantment.WandEnchantment
  weaponEnchantments: WeaponEnchantment.WeaponEnchantment
  zibiljaRituals: ZibiljaRitual.ZibiljaRitual
}

export const typeValidatorMap: { [K in keyof TypeMap]: TypeValidator<TypeMap[K]> } = {
  advancedCombatSpecialAbilities: AdvancedCombatSpecialAbility.validateSchema,
  advancedKarmaSpecialAbilities: AdvancedKarmaSpecialAbility.validateSchema,
  advancedMagicalSpecialAbilities: AdvancedMagicalSpecialAbility.validateSchema,
  advancedSkillSpecialAbilities: AdvancedSkillSpecialAbility.validateSchema,
  advantages: Advantage.validateSchema,
  ancestorGlyphs: AncestorGlyph.validateSchema,
  animalDiseases: AnimalDisease.validateSchema,
  animalShapePaths: AnimalShapePath.validateSchema,
  animalShapes: AnimalShape.validateSchema,
  animalShapeSizes: AnimalShapeSize.validateSchema,
  animalTypes: AnimalType.validateSchema,
  animistPowers: AnimistPower.validateSchema,
  animistPowerTribes: Tribe.validateSchema,
  arcaneBardTraditions: ArcaneBardTradition.validateSchema,
  arcaneDancerTraditions: ArcaneDancerTradition.validateSchema,
  arcaneOrbEnchantments: ArcaneOrbEnchantment.validateSchema,
  armorTypes: ArmorType.validateSchema,
  aspects: Aspect.validateSchema,
  attireEnchantments: AttireEnchantment.validateSchema,
  attributes: Attribute.validateSchema,
  blessedTraditions: BlessedTradition.validateSchema,
  blessings: Blessing.validateSchema,
  bowlEnchantments: BowlEnchantment.validateSchema,
  brawlingSpecialAbilities: BrawlingSpecialAbility.validateSchema,
  brews: Brew.validateSchema,
  cantrips: Cantrip.validateSchema,
  cauldronEnchantments: CauldronEnchantment.validateSchema,
  ceremonialItemSpecialAbilities: CeremonialItemSpecialAbility.validateSchema,
  ceremonies: Ceremony.validateSchema,
  chronicleEnchantments: ChronicleEnchantment.validateSchema,
  closeCombatTechniques: CloseCombatTechnique.validateSchema,
  combatSpecialAbilities: CombatSpecialAbility.validateSchema,
  combatStyleSpecialAbilities: CombatStyleSpecialAbility.validateSchema,
  commandSpecialAbilities: CommandSpecialAbility.validateSchema,
  conditions: Condition.validateSchema,
  continents: Continent.validateSchema,
  coreRules: CoreRule.validateSchema,
  cultures: Culture.validateSchema,
  curses: Curse.validateSchema,
  daggerRituals: DaggerRitual.validateSchema,
  derivedCharacteristics: DerivedCharacteristic.validateSchema,
  disadvantages: Disadvantage.validateSchema,
  diseases: Disease.validateSchema,
  dominationRituals: DominationRitual.validateSchema,
  elements: Element.validateSchema,
  elvenMagicalSongs: ElvenMagicalSong.validateSchema,
  equipmentPackages: EquipmentPackage.validateSchema,
  experienceLevels: ExperienceLevel.validateSchema,
  eyeColors: EyeColor.validateSchema,
  familiarSpecialAbilities: FamiliarSpecialAbility.validateSchema,
  familiarsTricks: FamiliarsTrick.validateSchema,
  fatePointSexSpecialAbilities: FatePointSexSpecialAbility.validateSchema,
  fatePointSpecialAbilities: FatePointSpecialAbility.validateSchema,
  focusRules: FocusRule.validateSchema,
  focusRuleSubjects: Subject.validateSchema,
  foolsHatEnchantments: FoolsHatEnchantment.validateSchema,
  generalSpecialAbilities: GeneralSpecialAbility.validateSchema,
  geodeRituals: GeodeRitual.validateSchema,
  hairColors: HairColor.validateSchema,
  instrumentEnchantments: InstrumentEnchantment.validateSchema,
  itemGroups: ItemGroup.validateSchema,
  jesterTricks: JesterTrick.validateSchema,
  karmaSpecialAbilities: KarmaSpecialAbility.validateSchema,
  kirchenpraegungen: Kirchenpraegung.validateSchema,
  krallenkettenzauber: Krallenkettenzauber.validateSchema,
  languages: Language.validateSchema,
  lessonsCurricula: Curriculum.validateSchema,
  lessonsGuidelines: Guideline.validateSchema,
  liturgicalChants: LiturgicalChant.validateSchema,
  liturgicalStyleSpecialAbilities: LiturgicalStyleSpecialAbility.validateSchema,
  locales: Locales.validateSchema,
  lycantropicGifts: LycantropicGift.validateSchema,
  magicalDances: MagicalDance.validateSchema,
  magicalMelodies: MagicalMelody.validateSchema,
  magicalRunes: MagicalRune.validateSchema,
  magicalSpecialAbilities: MagicalSpecialAbility.validateSchema,
  magicalTraditions: MagicalTradition.validateSchema,
  magicStyleSpecialAbilities: MagicStyleSpecialAbility.validateSchema,
  metaConditions: MetaCondition.validateSchema,
  optionalRules: OptionalRule.validateSchema,
  orbEnchantments: OrbEnchantment.validateSchema,
  pactCategories: PactCategory.validateSchema,
  pactGifts: PactGift.validateSchema,
  patronCategories: PatronCategory.validateSchema,
  patrons: Patron.validateSchema,
  personalityTraits: PersonalityTrait.validateSchema,
  poisons: Poison.validateSchema,
  professions: Profession.validateSchema,
  properties: Property.validateSchema,
  protectiveWardingCircleSpecialAbilities: ProtectiveWardingCircleSpecialAbility.validateSchema,
  publications: Publication.validateSchema,
  races: Race.validateSchema,
  rangedCombatTechniques: RangedCombatTechnique.validateSchema,
  reaches: Reach.validateSchema,
  regions: Region.validateSchema,
  ringEnchantments: RingEnchantment.validateSchema,
  rituals: Ritual.validateSchema,
  scripts: Script.validateSchema,
  sermons: Sermon.validateSchema,
  services: Service.validateSchema,
  sexPractices: SexPractice.validateSchema,
  sexSpecialAbilities: SexSpecialAbility.validateSchema,
  sickleRituals: SickleRitual.validateSchema,
  sikaryanDrainSpecialAbilities: SikaryanDrainSpecialAbility.validateSchema,
  skillGroups: SkillGroup.validateSchema,
  skillModificationLevels: SkillModificationLevel.validateSchema,
  skills: Skill.validateSchema,
  skillStyleSpecialAbilities: SkillStyleSpecialAbility.validateSchema,
  socialStatuses: SocialStatus.validateSchema,
  spells: Spell.validateSchema,
  spellSwordEnchantments: SpellSwordEnchantment.validateSchema,
  staffEnchantments: StaffEnchantment.validateSchema,
  states: State.validateSchema,
  targetCategories: TargetCategory.validateSchema,
  talismans: Talisman.validateSchema,
  toyEnchantments: ToyEnchantment.validateSchema,
  tradeSecrets: TradeSecret.validateSchema,
  trinkhornzauber: Trinkhornzauber.validateSchema,
  ui: UI.validateSchema,
  vampiricGifts: VampiricGift.validateSchema,
  visions: Vision.validateSchema,
  wandEnchantments: WandEnchantment.validateSchema,
  weaponEnchantments: WeaponEnchantment.validateSchema,
  zibiljaRituals: ZibiljaRitual.validateSchema,
}
