import * as Advantage from "../types/Advantage.js"
import * as AnimalDisease from "../types/AnimalDisease.js"
import * as AnimalType from "../types/AnimalType.js"
import * as ArcaneBardTradition from "../types/ArcaneBardTradition.js"
import * as ArcaneDancerTradition from "../types/ArcaneDancerTradition.js"
import * as Aspect from "../types/Aspect.js"
import * as Attribute from "../types/Attribute.js"
import * as Blessing from "../types/Blessing.js"
import * as Cantrip from "../types/Cantrip.js"
import * as Ceremony from "../types/Ceremony.js"
import * as CloseCombatTechnique from "../types/CombatTechnique_Close.js"
import * as RangedCombatTechnique from "../types/CombatTechnique_Ranged.js"
import * as Condition from "../types/Condition.js"
import * as Continent from "../types/Continent.js"
import * as Culture from "../types/Culture.js"
import * as DerivedCharacteristic from "../types/DerivedCharacteristic.js"
import * as Disadvantage from "../types/Disadvantage.js"
import * as Disease from "../types/Disease.js"
import * as Element from "../types/Element.js"
import * as ExperienceLevel from "../types/ExperienceLevel.js"
import * as EyeColor from "../types/EyeColor.js"
import * as FamiliarsTrick from "../types/FamiliarsTrick.js"
import * as HairColor from "../types/HairColor.js"
import * as Kirchenpraegung from "../types/Kirchenpraegung.js"
import * as Curriculum from "../types/Lessons_Curriculum.js"
import * as Guideline from "../types/Lessons_Guideline.js"
import * as LiturgicalChant from "../types/LiturgicalChant.js"
import * as Locales from "../types/Locale.js"
import * as MetaCondition from "../types/MetaCondition.js"
import * as PactCategory from "../types/PactCategory.js"
import * as Patron from "../types/Patron.js"
import * as PatronCategory from "../types/PatronCategory.js"
import * as PersonalityTrait from "../types/PersonalityTrait.js"
import * as Profession from "../types/Profession.js"
import * as Property from "../types/Property.js"
import * as Race from "../types/Race.js"
import * as Region from "../types/Region.js"
import * as Ritual from "../types/Ritual.js"
import * as Service from "../types/Service.js"
import * as SexPractice from "../types/SexPractice.js"
import * as Skill from "../types/Skill.js"
import * as SkillGroup from "../types/SkillGroup.js"
import * as SkillModificationLevel from "../types/SkillModificationLevel.js"
import * as SocialStatus from "../types/SocialStatus.js"
import * as Spell from "../types/Spell.js"
import * as State from "../types/State.js"
import * as Talisman from "../types/Talisman.js"
import * as TargetCategory from "../types/TargetCategory.js"
import * as UI from "../types/UI.js"
import * as EquipmentPackage from "../types/equipment/EquipmentPackage.js"
import * as Ammunition from "../types/equipment/item/Ammunition.js"
import * as Animal from "../types/equipment/item/Animal.js"
import * as AnimalCare from "../types/equipment/item/AnimalCare.js"
import * as Armor from "../types/equipment/item/Armor.js"
import * as BandageOrRemedy from "../types/equipment/item/BandageOrRemedy.js"
import * as Book from "../types/equipment/item/Book.js"
import * as CeremonialItem from "../types/equipment/item/CeremonialItem.js"
import * as Clothes from "../types/equipment/item/Clothes.js"
import * as Container from "../types/equipment/item/Container.js"
import * as Elixir from "../types/equipment/item/Elixir.js"
import * as EquipmentOfBlessedOnes from "../types/equipment/item/EquipmentOfBlessedOnes.js"
import * as GemOrPreciousStone from "../types/equipment/item/GemOrPreciousStone.js"
import * as IlluminationLightSource from "../types/equipment/item/IlluminationLightSource.js"
import * as IlluminationRefillsOrSupplies from "../types/equipment/item/IlluminationRefillsOrSupplies.js"
import * as Jewelry from "../types/equipment/item/Jewelry.js"
import * as Liebesspielzeug from "../types/equipment/item/Liebesspielzeug.js"
import * as LuxuryGood from "../types/equipment/item/LuxuryGood.js"
import * as MagicalArtifact from "../types/equipment/item/MagicalArtifact.js"
import * as MusicalInstrument from "../types/equipment/item/MusicalInstrument.js"
import * as OrienteeringAid from "../types/equipment/item/OrienteeringAid.js"
import * as Poison from "../types/equipment/item/Poison.js"
import * as RopeOrChain from "../types/equipment/item/RopeOrChain.js"
import * as Stationary from "../types/equipment/item/Stationary.js"
import * as ThievesTool from "../types/equipment/item/ThievesTool.js"
import * as ToolOfTheTrade from "../types/equipment/item/ToolOfTheTrade.js"
import * as TravelGearOrTool from "../types/equipment/item/TravelGearOrTool.js"
import * as Vehicle from "../types/equipment/item/Vehicle.js"
import * as Weapon from "../types/equipment/item/Weapon.js"
import * as WeaponAccessory from "../types/equipment/item/WeaponAccessory.js"
import * as ArmorType from "../types/equipment/item/sub/ArmorType.js"
import * as Reach from "../types/equipment/item/sub/Reach.js"
import * as AnimistPower from "../types/magicalActions/AnimistPower.js"
import * as Tribe from "../types/magicalActions/AnimistPower_Tribe.js"
import * as Curse from "../types/magicalActions/Curse.js"
import * as DominationRitual from "../types/magicalActions/DominationRitual.js"
import * as ElvenMagicalSong from "../types/magicalActions/ElvenMagicalSong.js"
import * as GeodeRitual from "../types/magicalActions/GeodeRitual.js"
import * as JesterTrick from "../types/magicalActions/JesterTrick.js"
import * as MagicalDance from "../types/magicalActions/MagicalDance.js"
import * as MagicalMelody from "../types/magicalActions/MagicalMelody.js"
import * as MagicalRune from "../types/magicalActions/MagicalRune.js"
import * as ZibiljaRitual from "../types/magicalActions/ZibiljaRitual.js"
import * as CoreRule from "../types/rule/CoreRule.js"
import * as FocusRule from "../types/rule/FocusRule.js"
import * as Subject from "../types/rule/FocusRule_Subject.js"
import * as OptionalRule from "../types/rule/OptionalRule.js"
import * as Publication from "../types/source/Publication.js"
import * as AdvancedCombatSpecialAbility from "../types/specialAbility/AdvancedCombatSpecialAbility.js"
import * as AdvancedKarmaSpecialAbility from "../types/specialAbility/AdvancedKarmaSpecialAbility.js"
import * as AdvancedMagicalSpecialAbility from "../types/specialAbility/AdvancedMagicalSpecialAbility.js"
import * as AdvancedSkillSpecialAbility from "../types/specialAbility/AdvancedSkillSpecialAbility.js"
import * as AncestorGlyph from "../types/specialAbility/AncestorGlyph.js"
import * as BlessedTradition from "../types/specialAbility/BlessedTradition.js"
import * as BrawlingSpecialAbility from "../types/specialAbility/BrawlingSpecialAbility.js"
import * as CeremonialItemSpecialAbility from "../types/specialAbility/CeremonialItemSpecialAbility.js"
import * as CombatSpecialAbility from "../types/specialAbility/CombatSpecialAbility.js"
import * as CombatStyleSpecialAbility from "../types/specialAbility/CombatStyleSpecialAbility.js"
import * as CommandSpecialAbility from "../types/specialAbility/CommandSpecialAbility.js"
import * as FamiliarSpecialAbility from "../types/specialAbility/FamiliarSpecialAbility.js"
import * as FatePointSexSpecialAbility from "../types/specialAbility/FatePointSexSpecialAbility.js"
import * as FatePointSpecialAbility from "../types/specialAbility/FatePointSpecialAbility.js"
import * as GeneralSpecialAbility from "../types/specialAbility/GeneralSpecialAbility.js"
import * as KarmaSpecialAbility from "../types/specialAbility/KarmaSpecialAbility.js"
import * as LiturgicalStyleSpecialAbility from "../types/specialAbility/LiturgicalStyleSpecialAbility.js"
import * as LycantropicGift from "../types/specialAbility/LycantropicGift.js"
import * as MagicStyleSpecialAbility from "../types/specialAbility/MagicStyleSpecialAbility.js"
import * as MagicalSign from "../types/specialAbility/MagicalSign.js"
import * as MagicalSpecialAbility from "../types/specialAbility/MagicalSpecialAbility.js"
import * as MagicalTradition from "../types/specialAbility/MagicalTradition.js"
import * as PactGift from "../types/specialAbility/PactGift.js"
import * as ProtectiveWardingCircleSpecialAbility from "../types/specialAbility/ProtectiveWardingCircleSpecialAbility.js"
import * as Sermon from "../types/specialAbility/Sermon.js"
import * as SexSpecialAbility from "../types/specialAbility/SexSpecialAbility.js"
import * as SikaryanDrainSpecialAbility from "../types/specialAbility/SikaryanDrainSpecialAbility.js"
import * as SkillStyleSpecialAbility from "../types/specialAbility/SkillStyleSpecialAbility.js"
import * as VampiricGift from "../types/specialAbility/VampiricGift.js"
import * as Vision from "../types/specialAbility/Vision.js"
import * as Language from "../types/specialAbility/sub/Language.js"
import * as Script from "../types/specialAbility/sub/Script.js"
import * as TradeSecret from "../types/specialAbility/sub/TradeSecret.js"
import * as ArcaneOrbEnchantment from "../types/traditionArtifacts/ArcaneOrbEnchantment.js"
import * as AttireEnchantment from "../types/traditionArtifacts/AttireEnchantment.js"
import * as BowlEnchantment from "../types/traditionArtifacts/BowlEnchantment.js"
import * as CauldronEnchantment from "../types/traditionArtifacts/CauldronEnchantment.js"
import * as ChronicleEnchantment from "../types/traditionArtifacts/ChronicleEnchantment.js"
import * as DaggerRitual from "../types/traditionArtifacts/DaggerRitual.js"
import * as FoolsHatEnchantment from "../types/traditionArtifacts/FoolsHatEnchantment.js"
import * as InstrumentEnchantment from "../types/traditionArtifacts/InstrumentEnchantment.js"
import * as Krallenkettenzauber from "../types/traditionArtifacts/Krallenkettenzauber.js"
import * as OrbEnchantment from "../types/traditionArtifacts/OrbEnchantment.js"
import * as RingEnchantment from "../types/traditionArtifacts/RingEnchantment.js"
import * as SickleRitual from "../types/traditionArtifacts/SickleRitual.js"
import * as SpellSwordEnchantment from "../types/traditionArtifacts/SpellSwordEnchantment.js"
import * as StaffEnchantment from "../types/traditionArtifacts/StaffEnchantment.js"
import * as ToyEnchantment from "../types/traditionArtifacts/ToyEnchantment.js"
import * as Trinkhornzauber from "../types/traditionArtifacts/Trinkhornzauber.js"
import * as WandEnchantment from "../types/traditionArtifacts/WandEnchantment.js"
import * as WeaponEnchantment from "../types/traditionArtifacts/WeaponEnchantment.js"
import * as AnimalShape from "../types/traditionArtifacts/sub/AnimalShape.js"
import * as AnimalShapePath from "../types/traditionArtifacts/sub/AnimalShapePath.js"
import * as AnimalShapeSize from "../types/traditionArtifacts/sub/AnimalShapeSize.js"
import * as Brew from "../types/traditionArtifacts/sub/Brew.js"

export type TypeMap = {
  advancedCombatSpecialAbilities: AdvancedCombatSpecialAbility.AdvancedCombatSpecialAbility
  advancedKarmaSpecialAbilities: AdvancedKarmaSpecialAbility.AdvancedKarmaSpecialAbility
  advancedMagicalSpecialAbilities: AdvancedMagicalSpecialAbility.AdvancedMagicalSpecialAbility
  advancedSkillSpecialAbilities: AdvancedSkillSpecialAbility.AdvancedSkillSpecialAbility
  advantages: Advantage.Advantage
  ammunition: Ammunition.Ammunition
  ancestorGlyphs: AncestorGlyph.AncestorGlyph
  animalCare: AnimalCare.AnimalCare
  animalDiseases: AnimalDisease.AnimalDisease
  animals: Animal.Animal
  animalShapePaths: AnimalShapePath.AnimalShapePath
  animalShapes: AnimalShape.AnimalShape
  animalShapeSizes: AnimalShapeSize.AnimalShapeSize
  animalTypes: AnimalType.AnimalType
  animistPowers: AnimistPower.AnimistPower
  animistPowerTribes: Tribe.Tribe
  arcaneBardTraditions: ArcaneBardTradition.ArcaneBardTradition
  arcaneDancerTraditions: ArcaneDancerTradition.ArcaneDancerTradition
  arcaneOrbEnchantments: ArcaneOrbEnchantment.ArcaneOrbEnchantment
  armors: Armor.Armor
  armorTypes: ArmorType.ArmorType
  aspects: Aspect.Aspect
  attireEnchantments: AttireEnchantment.AttireEnchantment
  attributes: Attribute.Attribute
  bandagesAndRemedies: BandageOrRemedy.BandageOrRemedy
  blessedTraditions: BlessedTradition.BlessedTradition
  blessings: Blessing.Blessing
  books: Book.Book
  bowlEnchantments: BowlEnchantment.BowlEnchantment
  brawlingSpecialAbilities: BrawlingSpecialAbility.BrawlingSpecialAbility
  brews: Brew.Brew
  cantrips: Cantrip.Cantrip
  cauldronEnchantments: CauldronEnchantment.CauldronEnchantment
  ceremonialItems: CeremonialItem.CeremonialItem
  ceremonialItemSpecialAbilities: CeremonialItemSpecialAbility.CeremonialItemSpecialAbility
  ceremonies: Ceremony.Ceremony
  chronicleEnchantments: ChronicleEnchantment.ChronicleEnchantment
  closeCombatTechniques: CloseCombatTechnique.CloseCombatTechnique
  clothes: Clothes.Clothes
  combatSpecialAbilities: CombatSpecialAbility.CombatSpecialAbility
  combatStyleSpecialAbilities: CombatStyleSpecialAbility.CombatStyleSpecialAbility
  commandSpecialAbilities: CommandSpecialAbility.CommandSpecialAbility
  conditions: Condition.Condition
  containers: Container.Container
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
  elixirs: Elixir.Elixir
  elvenMagicalSongs: ElvenMagicalSong.ElvenMagicalSong
  equipmentOfBlessedOnes: EquipmentOfBlessedOnes.EquipmentOfBlessedOnes
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
  gemsAndPreciousStones: GemOrPreciousStone.GemOrPreciousStone
  generalSpecialAbilities: GeneralSpecialAbility.GeneralSpecialAbility
  geodeRituals: GeodeRitual.GeodeRitual
  hairColors: HairColor.HairColor
  illuminationLightSources: IlluminationLightSource.IlluminationLightSource
  illuminationRefillsAndSupplies: IlluminationRefillsOrSupplies.IlluminationRefillsOrSupplies
  instrumentEnchantments: InstrumentEnchantment.InstrumentEnchantment
  jesterTricks: JesterTrick.JesterTrick
  jewelry: Jewelry.Jewelry
  karmaSpecialAbilities: KarmaSpecialAbility.KarmaSpecialAbility
  kirchenpraegungen: Kirchenpraegung.Kirchenpraegung
  krallenkettenzauber: Krallenkettenzauber.Krallenkettenzauber
  languages: Language.Language
  lessonsCurricula: Curriculum.Curriculum
  lessonsGuidelines: Guideline.Guideline
  liebesspielzeug: Liebesspielzeug.Liebesspielzeug
  liturgicalChants: LiturgicalChant.LiturgicalChant
  liturgicalStyleSpecialAbilities: LiturgicalStyleSpecialAbility.LiturgicalStyleSpecialAbility
  locales: Locales.Locale
  luxuryGoods: LuxuryGood.LuxuryGood
  lycantropicGifts: LycantropicGift.LycantropicGift
  magicalArtifacts: MagicalArtifact.MagicalArtifact
  magicalDances: MagicalDance.MagicalDance
  magicalMelodies: MagicalMelody.MagicalMelody
  magicalRunes: MagicalRune.MagicalRune
  magicalSigns: MagicalSign.MagicalSign
  magicalSpecialAbilities: MagicalSpecialAbility.MagicalSpecialAbility
  magicalTraditions: MagicalTradition.MagicalTradition
  magicStyleSpecialAbilities: MagicStyleSpecialAbility.MagicStyleSpecialAbility
  metaConditions: MetaCondition.MetaCondition
  musicalInstruments: MusicalInstrument.MusicalInstrument
  optionalRules: OptionalRule.OptionalRule
  orbEnchantments: OrbEnchantment.OrbEnchantment
  orienteeringAids: OrienteeringAid.OrienteeringAid
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
  ropesAndChains: RopeOrChain.RopeOrChain
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
  stationary: Stationary.Stationary
  talismans: Talisman.Talisman
  targetCategories: TargetCategory.TargetCategory
  thievesTools: ThievesTool.ThievesTool
  toolsOfTheTrade: ToolOfTheTrade.ToolOfTheTrade
  toyEnchantments: ToyEnchantment.ToyEnchantment
  tradeSecrets: TradeSecret.TradeSecret
  travelGearAndTools: TravelGearOrTool.TravelGearOrTool
  trinkhornzauber: Trinkhornzauber.Trinkhornzauber
  ui: UI.UI
  vampiricGifts: VampiricGift.VampiricGift
  vehicles: Vehicle.Vehicle
  visions: Vision.Vision
  wandEnchantments: WandEnchantment.WandEnchantment
  weaponAccessories: WeaponAccessory.WeaponAccessory
  weaponEnchantments: WeaponEnchantment.WeaponEnchantment
  weapons: Weapon.Weapon
  zibiljaRituals: ZibiljaRitual.ZibiljaRitual
}

export const configMap = {
  advancedCombatSpecialAbilities: AdvancedCombatSpecialAbility.config,
  advancedKarmaSpecialAbilities: AdvancedKarmaSpecialAbility.config,
  advancedMagicalSpecialAbilities: AdvancedMagicalSpecialAbility.config,
  advancedSkillSpecialAbilities: AdvancedSkillSpecialAbility.config,
  advantages: Advantage.config,
  ammunition: Ammunition.config,
  ancestorGlyphs: AncestorGlyph.config,
  animalCare: AnimalCare.config,
  animalDiseases: AnimalDisease.config,
  animals: Animal.config,
  animalShapePaths: AnimalShapePath.config,
  animalShapes: AnimalShape.config,
  animalShapeSizes: AnimalShapeSize.config,
  animalTypes: AnimalType.config,
  animistPowers: AnimistPower.config,
  animistPowerTribes: Tribe.config,
  arcaneBardTraditions: ArcaneBardTradition.config,
  arcaneDancerTraditions: ArcaneDancerTradition.config,
  arcaneOrbEnchantments: ArcaneOrbEnchantment.config,
  armors: Armor.config,
  armorTypes: ArmorType.config,
  aspects: Aspect.config,
  attireEnchantments: AttireEnchantment.config,
  attributes: Attribute.config,
  bandagesAndRemedies: BandageOrRemedy.config,
  blessedTraditions: BlessedTradition.config,
  blessings: Blessing.config,
  books: Book.config,
  bowlEnchantments: BowlEnchantment.config,
  brawlingSpecialAbilities: BrawlingSpecialAbility.config,
  brews: Brew.config,
  cantrips: Cantrip.config,
  cauldronEnchantments: CauldronEnchantment.config,
  ceremonialItems: CeremonialItem.config,
  ceremonialItemSpecialAbilities: CeremonialItemSpecialAbility.config,
  ceremonies: Ceremony.config,
  chronicleEnchantments: ChronicleEnchantment.config,
  closeCombatTechniques: CloseCombatTechnique.config,
  clothes: Clothes.config,
  combatSpecialAbilities: CombatSpecialAbility.config,
  combatStyleSpecialAbilities: CombatStyleSpecialAbility.config,
  commandSpecialAbilities: CommandSpecialAbility.config,
  conditions: Condition.config,
  containers: Container.config,
  continents: Continent.config,
  coreRules: CoreRule.config,
  cultures: Culture.config,
  curses: Curse.config,
  daggerRituals: DaggerRitual.config,
  derivedCharacteristics: DerivedCharacteristic.config,
  disadvantages: Disadvantage.config,
  diseases: Disease.config,
  dominationRituals: DominationRitual.config,
  elements: Element.config,
  elixirs: Elixir.config,
  elvenMagicalSongs: ElvenMagicalSong.config,
  equipmentOfBlessedOnes: EquipmentOfBlessedOnes.config,
  equipmentPackages: EquipmentPackage.config,
  experienceLevels: ExperienceLevel.config,
  eyeColors: EyeColor.config,
  familiarSpecialAbilities: FamiliarSpecialAbility.config,
  familiarsTricks: FamiliarsTrick.config,
  fatePointSexSpecialAbilities: FatePointSexSpecialAbility.config,
  fatePointSpecialAbilities: FatePointSpecialAbility.config,
  focusRules: FocusRule.config,
  focusRuleSubjects: Subject.config,
  foolsHatEnchantments: FoolsHatEnchantment.config,
  gemsAndPreciousStones: GemOrPreciousStone.config,
  generalSpecialAbilities: GeneralSpecialAbility.config,
  geodeRituals: GeodeRitual.config,
  hairColors: HairColor.config,
  illuminationLightSources: IlluminationLightSource.config,
  illuminationRefillsAndSupplies: IlluminationRefillsOrSupplies.config,
  instrumentEnchantments: InstrumentEnchantment.config,
  jesterTricks: JesterTrick.config,
  jewelry: Jewelry.config,
  karmaSpecialAbilities: KarmaSpecialAbility.config,
  kirchenpraegungen: Kirchenpraegung.config,
  krallenkettenzauber: Krallenkettenzauber.config,
  languages: Language.config,
  lessonsCurricula: Curriculum.config,
  lessonsGuidelines: Guideline.config,
  liebesspielzeug: Liebesspielzeug.config,
  liturgicalChants: LiturgicalChant.config,
  liturgicalStyleSpecialAbilities: LiturgicalStyleSpecialAbility.config,
  locales: Locales.config,
  luxuryGoods: LuxuryGood.config,
  lycantropicGifts: LycantropicGift.config,
  magicalArtifacts: MagicalArtifact.config,
  magicalDances: MagicalDance.config,
  magicalMelodies: MagicalMelody.config,
  magicalRunes: MagicalRune.config,
  magicalSigns: MagicalSign.config,
  magicalSpecialAbilities: MagicalSpecialAbility.config,
  magicalTraditions: MagicalTradition.config,
  magicStyleSpecialAbilities: MagicStyleSpecialAbility.config,
  metaConditions: MetaCondition.config,
  musicalInstruments: MusicalInstrument.config,
  optionalRules: OptionalRule.config,
  orbEnchantments: OrbEnchantment.config,
  orienteeringAids: OrienteeringAid.config,
  pactCategories: PactCategory.config,
  pactGifts: PactGift.config,
  patronCategories: PatronCategory.config,
  patrons: Patron.config,
  personalityTraits: PersonalityTrait.config,
  poisons: Poison.config,
  professions: Profession.config,
  properties: Property.config,
  protectiveWardingCircleSpecialAbilities: ProtectiveWardingCircleSpecialAbility.config,
  publications: Publication.config,
  races: Race.config,
  rangedCombatTechniques: RangedCombatTechnique.config,
  reaches: Reach.config,
  regions: Region.config,
  ringEnchantments: RingEnchantment.config,
  rituals: Ritual.config,
  ropesAndChains: RopeOrChain.config,
  scripts: Script.config,
  sermons: Sermon.config,
  services: Service.config,
  sexPractices: SexPractice.config,
  sexSpecialAbilities: SexSpecialAbility.config,
  sickleRituals: SickleRitual.config,
  sikaryanDrainSpecialAbilities: SikaryanDrainSpecialAbility.config,
  skillGroups: SkillGroup.config,
  skillModificationLevels: SkillModificationLevel.config,
  skills: Skill.config,
  skillStyleSpecialAbilities: SkillStyleSpecialAbility.config,
  socialStatuses: SocialStatus.config,
  spells: Spell.config,
  spellSwordEnchantments: SpellSwordEnchantment.config,
  staffEnchantments: StaffEnchantment.config,
  states: State.config,
  stationary: Stationary.config,
  talismans: Talisman.config,
  targetCategories: TargetCategory.config,
  thievesTools: ThievesTool.config,
  toolsOfTheTrade: ToolOfTheTrade.config,
  toyEnchantments: ToyEnchantment.config,
  tradeSecrets: TradeSecret.config,
  travelGearAndTools: TravelGearOrTool.config,
  trinkhornzauber: Trinkhornzauber.config,
  ui: UI.config,
  vampiricGifts: VampiricGift.config,
  vehicles: Vehicle.config,
  visions: Vision.config,
  wandEnchantments: WandEnchantment.config,
  weaponAccessories: WeaponAccessory.config,
  weaponEnchantments: WeaponEnchantment.config,
  weapons: Weapon.config,
  zibiljaRituals: ZibiljaRitual.config,
}

export type TypeId<K extends keyof TypeMap> = ReturnType<(typeof configMap)[K]["id"]>
export type TypeName<K extends keyof TypeMap> = (typeof configMap)[K]["name"]
