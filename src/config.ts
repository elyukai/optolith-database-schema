import { Advantage, validateSchema as validateAdvantageSchema } from "./types/Advantage.js"
import { AnimalDisease, validateSchema as validateAnimalDiseaseSchema } from "./types/AnimalDisease.js"
import { AnimalType, validateSchema as validateAnimalTypeSchema } from "./types/AnimalType.js"
import { ArcaneBardTradition, validateSchema as validateArcaneBardTraditionSchema } from "./types/ArcaneBardTradition.js"
import { ArcaneDancerTradition, validateSchema as validateArcaneDancerTraditionSchema } from "./types/ArcaneDancerTradition.js"
import { Aspect, validateSchema as validateAspectSchema } from "./types/Aspect.js"
import { Attribute, validateSchema as validateAttributeSchema } from "./types/Attribute.js"
import { Blessing, validateSchema as validateBlessingSchema } from "./types/Blessing.js"
import { Cantrip, validateSchema as validateCantripSchema } from "./types/Cantrip.js"
import { Ceremony, validateSchema as validateCeremonySchema } from "./types/Ceremony.js"
import { CloseCombatTechnique, validateSchema as validateCloseCombatTechniqueSchema } from "./types/CombatTechnique_Close.js"
import { RangedCombatTechnique, validateSchema as validateRangedCombatTechniqueSchema } from "./types/CombatTechnique_Ranged.js"
import { Condition, validateSchema as validateConditionSchema } from "./types/Condition.js"
import { Continent, validateSchema as validateContinentSchema } from "./types/Continent.js"
import { Culture, validateSchema as validateCultureSchema } from "./types/Culture.js"
import { DerivedCharacteristic, validateSchema as validateDerivedCharacteristicSchema } from "./types/DerivedCharacteristic.js"
import { Disadvantage, validateSchema as validateDisadvantageSchema } from "./types/Disadvantage.js"
import { Disease, validateSchema as validateDiseaseSchema } from "./types/Disease.js"
import { Element, validateSchema as validateElementSchema } from "./types/Element.js"
import { ArmorType, validateSchema as validateArmorTypeSchema } from "./types/equipment/ArmorType.js"
import { EquipmentPackage, validateSchema as validateEquipmentPackageSchema } from "./types/equipment/EquipmentPackage.js"
import { ItemGroup, validateSchema as validateItemGroupSchema } from "./types/equipment/ItemGroup.js"
import { Reach, validateSchema as validateReachSchema } from "./types/equipment/Reach.js"
import { ExperienceLevel, validateSchema as validateExperienceLevelSchema } from "./types/ExperienceLevel.js"
import { EyeColor, validateSchema as validateEyeColorSchema } from "./types/EyeColor.js"
import { FamiliarsTrick, validateSchema as validateFamiliarsTrickSchema } from "./types/FamiliarsTrick.js"
import { HairColor, validateSchema as validateHairColorSchema } from "./types/HairColor.js"
import { Kirchenpraegung, validateSchema as validateKirchenpraegungSchema } from "./types/Kirchenpraegung.js"
import { Curriculum, validateSchema as validateCurriculumSchema } from "./types/Lessons_Curriculum.js"
import { Guideline, validateSchema as validateGuidelineSchema } from "./types/Lessons_Guideline.js"
import { LiturgicalChant, validateSchema as validateLiturgicalChantSchema } from "./types/LiturgicalChant.js"
import { Locales, validateSchema as validateLocaleSchema } from "./types/Locale.js"
import { AnimistPower, validateSchema as validateAnimistPowerSchema } from "./types/magicalActions/AnimistPower.js"
import { Tribe, validateSchema as validateTribeSchema } from "./types/magicalActions/AnimistPower_Tribe.js"
import { Curse, validateSchema as validateCurseSchema } from "./types/magicalActions/Curse.js"
import { DominationRitual, validateSchema as validateDominationRitualSchema } from "./types/magicalActions/DominationRitual.js"
import { ElvenMagicalSong, validateSchema as validateElvenMagicalSongSchema } from "./types/magicalActions/ElvenMagicalSong.js"
import { GeodeRitual, validateSchema as validateGeodeRitualSchema } from "./types/magicalActions/GeodeRitual.js"
import { JesterTrick, validateSchema as validateJesterTrickSchema } from "./types/magicalActions/JesterTrick.js"
import { MagicalDance, validateSchema as validateMagicalDanceSchema } from "./types/magicalActions/MagicalDance.js"
import { MagicalMelody, validateSchema as validateMagicalMelodySchema } from "./types/magicalActions/MagicalMelody.js"
import { MagicalRune, validateSchema as validateMagicalRuneSchema } from "./types/magicalActions/MagicalRune.js"
import { validateSchema as validateZibiljaRitualSchema, ZibiljaRitual } from "./types/magicalActions/ZibiljaRitual.js"
import { MagicalTraditionPlaceholder, validateSchema as validateMagicalTraditionPlaceholderSchema } from "./types/MagicalTraditionPlaceholder.js"
import { MetaCondition, validateSchema as validateMetaConditionSchema } from "./types/MetaCondition.js"
import { PactCategory, validateSchema as validatePactCategorySchema } from "./types/PactCategory.js"
import { Patron, validateSchema as validatePatronSchema } from "./types/Patron.js"
import { PatronCategory, validateSchema as validatePatronCategorySchema } from "./types/PatronCategory.js"
import { PersonalityTrait, validateSchema as validatePersonalityTraitSchema } from "./types/PersonalityTrait.js"
import { Poison, validateSchema as validatePoisonSchema } from "./types/Poison.js"
import { Profession, validateSchema as validateProfessionSchema } from "./types/Profession.js"
import { Property, validateSchema as validatePropertySchema } from "./types/Property.js"
import { Race, validateSchema as validateRaceSchema } from "./types/Race.js"
import { Region, validateSchema as validateRegionSchema } from "./types/Region.js"
import { Ritual, validateSchema as validateRitualSchema } from "./types/Ritual.js"
import { CoreRule, validateSchema as validateCoreRuleSchema } from "./types/rule/CoreRule.js"
import { FocusRule, validateSchema as validateFocusRuleSchema } from "./types/rule/FocusRule.js"
import { Subject, validateSchema as validateSubjectSchema } from "./types/rule/FocusRule_Subject.js"
import { OptionalRule, validateSchema as validateOptionalRuleSchema } from "./types/rule/OptionalRule.js"
import { Service, validateSchema as validateServiceSchema } from "./types/Service.js"
import { SexPractice, validateSchema as validateSexPracticeSchema } from "./types/SexPractice.js"
import { Skill, validateSchema as validateSkillSchema } from "./types/Skill.js"
import { SkillGroup, validateSchema as validateSkillGroupSchema } from "./types/SkillGroup.js"
import { SkillModificationLevel, validateSchema as validateSkillModificationLevelSchema } from "./types/SkillModificationLevel.js"
import { SocialStatus, validateSchema as validateSocialStatusSchema } from "./types/SocialStatus.js"
import { Publication, validateSchema as validatePublicationSchema } from "./types/source/Publication.js"
import { AdvancedCombatSpecialAbility, validateSchema as validateAdvancedCombatSpecialAbilitySchema } from "./types/specialAbility/AdvancedCombatSpecialAbility.js"
import { AdvancedKarmaSpecialAbility, validateSchema as validateAdvancedKarmaSpecialAbilitySchema } from "./types/specialAbility/AdvancedKarmaSpecialAbility.js"
import { AdvancedMagicalSpecialAbility, validateSchema as validateAdvancedMagicalSpecialAbilitySchema } from "./types/specialAbility/AdvancedMagicalSpecialAbility.js"
import { AdvancedSkillSpecialAbility, validateSchema as validateAdvancedSkillSpecialAbilitySchema } from "./types/specialAbility/AdvancedSkillSpecialAbility.js"
import { AncestorGlyph, validateSchema as validateAncestorGlyphSchema } from "./types/specialAbility/AncestorGlyph.js"
import { BlessedTradition, validateSchema as validateBlessedTraditionSchema } from "./types/specialAbility/BlessedTradition.js"
import { BrawlingSpecialAbility, validateSchema as validateBrawlingSpecialAbilitySchema } from "./types/specialAbility/BrawlingSpecialAbility.js"
import { CeremonialItemSpecialAbility, validateSchema as validateCeremonialItemSpecialAbilitySchema } from "./types/specialAbility/CeremonialItemSpecialAbility.js"
import { CombatSpecialAbility, validateSchema as validateCombatSpecialAbilitySchema } from "./types/specialAbility/CombatSpecialAbility.js"
import { CombatStyleSpecialAbility, validateSchema as validateCombatStyleSpecialAbilitySchema } from "./types/specialAbility/CombatStyleSpecialAbility.js"
import { CommandSpecialAbility, validateSchema as validateCommandSpecialAbilitySchema } from "./types/specialAbility/CommandSpecialAbility.js"
import { FamiliarSpecialAbility, validateSchema as validateFamiliarSpecialAbilitySchema } from "./types/specialAbility/FamiliarSpecialAbility.js"
import { FatePointSexSpecialAbility, validateSchema as validateFatePointSexSpecialAbilitySchema } from "./types/specialAbility/FatePointSexSpecialAbility.js"
import { FatePointSpecialAbility, validateSchema as validateFatePointSpecialAbilitySchema } from "./types/specialAbility/FatePointSpecialAbility.js"
import { GeneralSpecialAbility, validateSchema as validateGeneralSpecialAbilitySchema } from "./types/specialAbility/GeneralSpecialAbility.js"
import { KarmaSpecialAbility, validateSchema as validateKarmaSpecialAbilitySchema } from "./types/specialAbility/KarmaSpecialAbility.js"
import { LiturgicalStyleSpecialAbility, validateSchema as validateLiturgicalStyleSpecialAbilitySchema } from "./types/specialAbility/LiturgicalStyleSpecialAbility.js"
import { LycantropicGift, validateSchema as validateLycantropicGiftSchema } from "./types/specialAbility/LycantropicGift.js"
import { MagicalSpecialAbility, validateSchema as validateMagicalSpecialAbilitySchema } from "./types/specialAbility/MagicalSpecialAbility.js"
import { MagicalTradition, validateSchema as validateMagicalTraditionSchema } from "./types/specialAbility/MagicalTradition.js"
import { MagicStyleSpecialAbility, validateSchema as validateMagicStyleSpecialAbilitySchema } from "./types/specialAbility/MagicStyleSpecialAbility.js"
import { PactGift, validateSchema as validatePactGiftSchema } from "./types/specialAbility/PactGift.js"
import { ProtectiveWardingCircleSpecialAbility, validateSchema as validateProtectiveWardingCircleSpecialAbilitySchema } from "./types/specialAbility/ProtectiveWardingCircleSpecialAbility.js"
import { Sermon, validateSchema as validateSermonSchema } from "./types/specialAbility/Sermon.js"
import { SexSpecialAbility, validateSchema as validateSexSpecialAbilitySchema } from "./types/specialAbility/SexSpecialAbility.js"
import { SikaryanDrainSpecialAbility, validateSchema as validateSikaryanDrainSpecialAbilitySchema } from "./types/specialAbility/SikaryanDrainSpecialAbility.js"
import { SkillStyleSpecialAbility, validateSchema as validateSkillStyleSpecialAbilitySchema } from "./types/specialAbility/SkillStyleSpecialAbility.js"
import { Language, validateSchema as validateLanguageSchema } from "./types/specialAbility/sub/Language.js"
import { Script, validateSchema as validateScriptSchema } from "./types/specialAbility/sub/Script.js"
import { TradeSecret, validateSchema as validateTradeSecretSchema } from "./types/specialAbility/sub/TradeSecret.js"
import { validateSchema as validateVampiricGiftSchema, VampiricGift } from "./types/specialAbility/VampiricGift.js"
import { validateSchema as validateVisionSchema, Vision } from "./types/specialAbility/Vision.js"
import { Spell, validateSchema as validateSpellSchema } from "./types/Spell.js"
import { State, validateSchema as validateStateSchema } from "./types/State.js"
import { Talisman, validateSchema as validateTalismanSchema } from "./types/Talisman.js"
import { TargetCategory, validateSchema as validateTargetCategorySchema } from "./types/TargetCategory.js"
import { ArcaneOrbEnchantment, validateSchema as validateArcaneOrbEnchantmentSchema } from "./types/traditionArtifacts/ArcaneOrbEnchantment.js"
import { AttireEnchantment, validateSchema as validateAttireEnchantmentSchema } from "./types/traditionArtifacts/AttireEnchantment.js"
import { BowlEnchantment, validateSchema as validateBowlEnchantmentSchema } from "./types/traditionArtifacts/BowlEnchantment.js"
import { CauldronEnchantment, validateSchema as validateCauldronEnchantmentSchema } from "./types/traditionArtifacts/CauldronEnchantment.js"
import { ChronicleEnchantment, validateSchema as validateChronicleEnchantmentSchema } from "./types/traditionArtifacts/ChronicleEnchantment.js"
import { DaggerRitual, validateSchema as validateDaggerRitualSchema } from "./types/traditionArtifacts/DaggerRitual.js"
import { FoolsHatEnchantment, validateSchema as validateFoolsHatEnchantmentSchema } from "./types/traditionArtifacts/FoolsHatEnchantment.js"
import { InstrumentEnchantment, validateSchema as validateInstrumentEnchantmentSchema } from "./types/traditionArtifacts/InstrumentEnchantment.js"
import { Krallenkettenzauber, validateSchema as validateKrallenkettenzauberSchema } from "./types/traditionArtifacts/Krallenkettenzauber.js"
import { OrbEnchantment, validateSchema as validateOrbEnchantmentSchema } from "./types/traditionArtifacts/OrbEnchantment.js"
import { RingEnchantment, validateSchema as validateRingEnchantmentSchema } from "./types/traditionArtifacts/RingEnchantment.js"
import { SickleRitual, validateSchema as validateSickleRitualSchema } from "./types/traditionArtifacts/SickleRitual.js"
import { SpellSwordEnchantment, validateSchema as validateSpellSwordEnchantmentSchema } from "./types/traditionArtifacts/SpellSwordEnchantment.js"
import { StaffEnchantment, validateSchema as validateStaffEnchantmentSchema } from "./types/traditionArtifacts/StaffEnchantment.js"
import { AnimalShape, validateSchema as validateAnimalShapeSchema } from "./types/traditionArtifacts/sub/AnimalShape.js"
import { AnimalShapePath, validateSchema as validateAnimalShapePathSchema } from "./types/traditionArtifacts/sub/AnimalShapePath.js"
import { AnimalShapeSize, validateSchema as validateAnimalShapeSizeSchema } from "./types/traditionArtifacts/sub/AnimalShapeSize.js"
import { Brew, validateSchema as validateBrewSchema } from "./types/traditionArtifacts/sub/Brew.js"
import { ToyEnchantment, validateSchema as validateToyEnchantmentSchema } from "./types/traditionArtifacts/ToyEnchantment.js"
import { Trinkhornzauber, validateSchema as validateTrinkhornzauberSchema } from "./types/traditionArtifacts/Trinkhornzauber.js"
import { validateSchema as validateWandEnchantmentSchema, WandEnchantment } from "./types/traditionArtifacts/WandEnchantment.js"
import { validateSchema as validateWeaponEnchantmentSchema, WeaponEnchantment } from "./types/traditionArtifacts/WeaponEnchantment.js"
import { TypeValidator } from "./validation/schema.js"

export type TypeMap = {
  advancedCombatSpecialAbilities: AdvancedCombatSpecialAbility
  advancedKarmaSpecialAbilities: AdvancedKarmaSpecialAbility
  advancedMagicalSpecialAbilities: AdvancedMagicalSpecialAbility
  advancedSkillSpecialAbilities: AdvancedSkillSpecialAbility
  advantages: Advantage
  ancestorGlyphs: AncestorGlyph
  animalDiseases: AnimalDisease
  animalShapePaths: AnimalShapePath
  animalShapes: AnimalShape
  animalShapeSizes: AnimalShapeSize
  animalTypes: AnimalType
  animistPowers: AnimistPower
  animistPowerTribes: Tribe
  arcaneBardTraditions: ArcaneBardTradition
  arcaneDancerTraditions: ArcaneDancerTradition
  arcaneOrbEnchantments: ArcaneOrbEnchantment
  armorTypes: ArmorType
  aspects: Aspect
  attireEnchantments: AttireEnchantment
  attributes: Attribute
  blessedTraditions: BlessedTradition
  blessings: Blessing
  bowlEnchantments: BowlEnchantment
  brawlingSpecialAbilities: BrawlingSpecialAbility
  brews: Brew
  cantrips: Cantrip
  cauldronEnchantments: CauldronEnchantment
  ceremonialItemSpecialAbilities: CeremonialItemSpecialAbility
  ceremonies: Ceremony
  chronicleEnchantments: ChronicleEnchantment
  closeCombatTechniques: CloseCombatTechnique
  combatSpecialAbilities: CombatSpecialAbility
  combatStyleSpecialAbilities: CombatStyleSpecialAbility
  commandSpecialAbilities: CommandSpecialAbility
  conditions: Condition
  continents: Continent
  coreRules: CoreRule
  cultures: Culture
  curses: Curse
  daggerRituals: DaggerRitual
  derivedCharacteristics: DerivedCharacteristic
  disadvantages: Disadvantage
  diseases: Disease
  dominationRituals: DominationRitual
  elements: Element
  elvenMagicalSongs: ElvenMagicalSong
  equipmentPackages: EquipmentPackage
  experienceLevels: ExperienceLevel
  eyeColors: EyeColor
  familiarSpecialAbilities: FamiliarSpecialAbility
  familiarsTricks: FamiliarsTrick
  fatePointSexSpecialAbilities: FatePointSexSpecialAbility
  fatePointSpecialAbilities: FatePointSpecialAbility
  focusRules: FocusRule
  focusRuleSubjects: Subject
  foolsHatEnchantments: FoolsHatEnchantment
  generalSpecialAbilities: GeneralSpecialAbility
  geodeRituals: GeodeRitual
  hairColors: HairColor
  instrumentEnchantments: InstrumentEnchantment
  itemGroups: ItemGroup
  jesterTricks: JesterTrick
  karmaSpecialAbilities: KarmaSpecialAbility
  kirchenpraegungen: Kirchenpraegung
  krallenkettenzauber: Krallenkettenzauber
  languages: Language
  lessonsCurricula: Curriculum
  lessonsGuidelines: Guideline
  liturgicalChants: LiturgicalChant
  liturgicalStyleSpecialAbilities: LiturgicalStyleSpecialAbility
  locales: Locales
  lycantropicGifts: LycantropicGift
  magicalDances: MagicalDance
  magicalMelodies: MagicalMelody
  magicalRunes: MagicalRune
  magicalSpecialAbilities: MagicalSpecialAbility
  magicalTraditions: MagicalTradition
  magicalTraditionPlaceholders: MagicalTraditionPlaceholder
  magicStyleSpecialAbilities: MagicStyleSpecialAbility
  metaConditions: MetaCondition
  optionalRules: OptionalRule
  orbEnchantments: OrbEnchantment
  pactCategories: PactCategory
  pactGifts: PactGift
  patronCategories: PatronCategory
  patrons: Patron
  personalityTraits: PersonalityTrait
  poisons: Poison
  professions: Profession
  properties: Property
  protectiveWardingCircleSpecialAbilities: ProtectiveWardingCircleSpecialAbility
  publications: Publication
  races: Race
  rangedCombatTechniques: RangedCombatTechnique
  reaches: Reach
  regions: Region
  ringEnchantments: RingEnchantment
  rituals: Ritual
  scripts: Script
  sermons: Sermon
  services: Service
  sexPractices: SexPractice
  sexSpecialAbilities: SexSpecialAbility
  sickleRituals: SickleRitual
  sikaryanDrainSpecialAbilities: SikaryanDrainSpecialAbility
  skillGroups: SkillGroup
  skillModificationLevels: SkillModificationLevel
  skills: Skill
  skillStyleSpecialAbilities: SkillStyleSpecialAbility
  socialStatuses: SocialStatus
  spells: Spell
  spellSwordEnchantments: SpellSwordEnchantment
  staffEnchantments: StaffEnchantment
  states: State
  targetCategories: TargetCategory
  talismans: Talisman
  toyEnchantments: ToyEnchantment
  tradeSecrets: TradeSecret
  trinkhornzauber: Trinkhornzauber
  vampiricGifts: VampiricGift
  visions: Vision
  wandEnchantments: WandEnchantment
  weaponEnchantments: WeaponEnchantment
  zibiljaRituals: ZibiljaRitual
}

export const typeValidatorMap: { [K in keyof TypeMap]: TypeValidator<TypeMap[K]> } = {
  advancedCombatSpecialAbilities: validateAdvancedCombatSpecialAbilitySchema,
  advancedKarmaSpecialAbilities: validateAdvancedKarmaSpecialAbilitySchema,
  advancedMagicalSpecialAbilities: validateAdvancedMagicalSpecialAbilitySchema,
  advancedSkillSpecialAbilities: validateAdvancedSkillSpecialAbilitySchema,
  advantages: validateAdvantageSchema,
  ancestorGlyphs: validateAncestorGlyphSchema,
  animalDiseases: validateAnimalDiseaseSchema,
  animalShapePaths: validateAnimalShapePathSchema,
  animalShapes: validateAnimalShapeSchema,
  animalShapeSizes: validateAnimalShapeSizeSchema,
  animalTypes: validateAnimalTypeSchema,
  animistPowers: validateAnimistPowerSchema,
  animistPowerTribes: validateTribeSchema,
  arcaneBardTraditions: validateArcaneBardTraditionSchema,
  arcaneDancerTraditions: validateArcaneDancerTraditionSchema,
  arcaneOrbEnchantments: validateArcaneOrbEnchantmentSchema,
  armorTypes: validateArmorTypeSchema,
  aspects: validateAspectSchema,
  attireEnchantments: validateAttireEnchantmentSchema,
  attributes: validateAttributeSchema,
  blessedTraditions: validateBlessedTraditionSchema,
  blessings: validateBlessingSchema,
  bowlEnchantments: validateBowlEnchantmentSchema,
  brawlingSpecialAbilities: validateBrawlingSpecialAbilitySchema,
  brews: validateBrewSchema,
  cantrips: validateCantripSchema,
  cauldronEnchantments: validateCauldronEnchantmentSchema,
  ceremonialItemSpecialAbilities: validateCeremonialItemSpecialAbilitySchema,
  ceremonies: validateCeremonySchema,
  chronicleEnchantments: validateChronicleEnchantmentSchema,
  closeCombatTechniques: validateCloseCombatTechniqueSchema,
  combatSpecialAbilities: validateCombatSpecialAbilitySchema,
  combatStyleSpecialAbilities: validateCombatStyleSpecialAbilitySchema,
  commandSpecialAbilities: validateCommandSpecialAbilitySchema,
  conditions: validateConditionSchema,
  continents: validateContinentSchema,
  coreRules: validateCoreRuleSchema,
  cultures: validateCultureSchema,
  curses: validateCurseSchema,
  daggerRituals: validateDaggerRitualSchema,
  derivedCharacteristics: validateDerivedCharacteristicSchema,
  disadvantages: validateDisadvantageSchema,
  diseases: validateDiseaseSchema,
  dominationRituals: validateDominationRitualSchema,
  elements: validateElementSchema,
  elvenMagicalSongs: validateElvenMagicalSongSchema,
  equipmentPackages: validateEquipmentPackageSchema,
  experienceLevels: validateExperienceLevelSchema,
  eyeColors: validateEyeColorSchema,
  familiarSpecialAbilities: validateFamiliarSpecialAbilitySchema,
  familiarsTricks: validateFamiliarsTrickSchema,
  fatePointSexSpecialAbilities: validateFatePointSexSpecialAbilitySchema,
  fatePointSpecialAbilities: validateFatePointSpecialAbilitySchema,
  focusRules: validateFocusRuleSchema,
  focusRuleSubjects: validateSubjectSchema,
  foolsHatEnchantments: validateFoolsHatEnchantmentSchema,
  generalSpecialAbilities: validateGeneralSpecialAbilitySchema,
  geodeRituals: validateGeodeRitualSchema,
  hairColors: validateHairColorSchema,
  instrumentEnchantments: validateInstrumentEnchantmentSchema,
  itemGroups: validateItemGroupSchema,
  jesterTricks: validateJesterTrickSchema,
  karmaSpecialAbilities: validateKarmaSpecialAbilitySchema,
  kirchenpraegungen: validateKirchenpraegungSchema,
  krallenkettenzauber: validateKrallenkettenzauberSchema,
  languages: validateLanguageSchema,
  lessonsCurricula: validateCurriculumSchema,
  lessonsGuidelines: validateGuidelineSchema,
  liturgicalChants: validateLiturgicalChantSchema,
  liturgicalStyleSpecialAbilities: validateLiturgicalStyleSpecialAbilitySchema,
  locales: validateLocaleSchema,
  lycantropicGifts: validateLycantropicGiftSchema,
  magicalDances: validateMagicalDanceSchema,
  magicalMelodies: validateMagicalMelodySchema,
  magicalRunes: validateMagicalRuneSchema,
  magicalSpecialAbilities: validateMagicalSpecialAbilitySchema,
  magicalTraditions: validateMagicalTraditionSchema,
  magicalTraditionPlaceholders: validateMagicalTraditionPlaceholderSchema,
  magicStyleSpecialAbilities: validateMagicStyleSpecialAbilitySchema,
  metaConditions: validateMetaConditionSchema,
  optionalRules: validateOptionalRuleSchema,
  orbEnchantments: validateOrbEnchantmentSchema,
  pactCategories: validatePactCategorySchema,
  pactGifts: validatePactGiftSchema,
  patronCategories: validatePatronCategorySchema,
  patrons: validatePatronSchema,
  personalityTraits: validatePersonalityTraitSchema,
  poisons: validatePoisonSchema,
  professions: validateProfessionSchema,
  properties: validatePropertySchema,
  protectiveWardingCircleSpecialAbilities: validateProtectiveWardingCircleSpecialAbilitySchema,
  publications: validatePublicationSchema,
  races: validateRaceSchema,
  rangedCombatTechniques: validateRangedCombatTechniqueSchema,
  reaches: validateReachSchema,
  regions: validateRegionSchema,
  ringEnchantments: validateRingEnchantmentSchema,
  rituals: validateRitualSchema,
  scripts: validateScriptSchema,
  sermons: validateSermonSchema,
  services: validateServiceSchema,
  sexPractices: validateSexPracticeSchema,
  sexSpecialAbilities: validateSexSpecialAbilitySchema,
  sickleRituals: validateSickleRitualSchema,
  sikaryanDrainSpecialAbilities: validateSikaryanDrainSpecialAbilitySchema,
  skillGroups: validateSkillGroupSchema,
  skillModificationLevels: validateSkillModificationLevelSchema,
  skills: validateSkillSchema,
  skillStyleSpecialAbilities: validateSkillStyleSpecialAbilitySchema,
  socialStatuses: validateSocialStatusSchema,
  spells: validateSpellSchema,
  spellSwordEnchantments: validateSpellSwordEnchantmentSchema,
  staffEnchantments: validateStaffEnchantmentSchema,
  states: validateStateSchema,
  targetCategories: validateTargetCategorySchema,
  talismans: validateTalismanSchema,
  toyEnchantments: validateToyEnchantmentSchema,
  tradeSecrets: validateTradeSecretSchema,
  trinkhornzauber: validateTrinkhornzauberSchema,
  vampiricGifts: validateVampiricGiftSchema,
  visions: validateVisionSchema,
  wandEnchantments: validateWandEnchantmentSchema,
  weaponEnchantments: validateWeaponEnchantmentSchema,
  zibiljaRituals: validateZibiljaRitualSchema,
}
