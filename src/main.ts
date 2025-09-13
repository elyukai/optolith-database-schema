import { Schema } from "tsondb/schema"
import { Advantage } from "./types/Advantage.js"
import { AnimalDisease } from "./types/AnimalDisease.js"
import { AnimalType } from "./types/AnimalType.js"
import { ArcaneBardTradition } from "./types/ArcaneBardTradition.js"
import { ArcaneDancerTradition } from "./types/ArcaneDancerTradition.js"
import { Aspect } from "./types/Aspect.js"
import { Attribute } from "./types/Attribute.js"
import { Blessing } from "./types/Blessing.js"
import { Cantrip } from "./types/Cantrip.js"
import { Ceremony } from "./types/Ceremony.js"
import { CloseCombatTechnique, RangedCombatTechnique } from "./types/CombatTechnique.js"
import { Condition } from "./types/Condition.js"
import { Continent } from "./types/Continent.js"
import { Culture } from "./types/Culture.js"
import { DerivedCharacteristic } from "./types/DerivedCharacteristic.js"
import { Disadvantage } from "./types/Disadvantage.js"
import { Disease } from "./types/Disease.js"
import { Element } from "./types/Element.js"
import { ExperienceLevel } from "./types/ExperienceLevel.js"
import { EyeColor } from "./types/EyeColor.js"
import { FamiliarsTrick } from "./types/FamiliarsTrick.js"
import { HairColor } from "./types/HairColor.js"
import { Curriculum, Guideline } from "./types/Lessons.js"
import { LiturgicalChant } from "./types/LiturgicalChant.js"
import { Locale } from "./types/Locale.js"
import { MetaCondition } from "./types/MetaCondition.js"
import { PactCategory } from "./types/PactCategory.js"
import { Patron } from "./types/Patron.js"
import { PatronCategory } from "./types/PatronCategory.js"
import { PersonalityTrait } from "./types/PersonalityTrait.js"
import { Profession } from "./types/Profession.js"
import { Property } from "./types/Property.js"
import { Race } from "./types/Race.js"
import { Region } from "./types/Region.js"
import { Ritual } from "./types/Ritual.js"
import { Service } from "./types/Service.js"
import { SexPractice } from "./types/SexPractice.js"
import { Skill } from "./types/Skill.js"
import { SkillGroup } from "./types/SkillGroup.js"
import { SkillModificationLevel } from "./types/SkillModificationLevel.js"
import { SocialStatus } from "./types/SocialStatus.js"
import { Spell } from "./types/Spell.js"
import { State } from "./types/State.js"
import { Talisman } from "./types/Talisman.js"
import { TargetCategory } from "./types/TargetCategory.js"
import { EquipmentPackage } from "./types/equipment/EquipmentPackage.js"
import { Ammunition } from "./types/equipment/item/Ammunition.js"
import { Animal } from "./types/equipment/item/Animal.js"
import { AnimalCare } from "./types/equipment/item/AnimalCare.js"
import { Armor } from "./types/equipment/item/Armor.js"
import { BandageOrRemedy } from "./types/equipment/item/BandageOrRemedy.js"
import { Book } from "./types/equipment/item/Book.js"
import { CeremonialItem } from "./types/equipment/item/CeremonialItem.js"
import { Clothes } from "./types/equipment/item/Clothes.js"
import { Container } from "./types/equipment/item/Container.js"
import { Elixir } from "./types/equipment/item/Elixir.js"
import { EquipmentOfBlessedOnes } from "./types/equipment/item/EquipmentOfBlessedOnes.js"
import { GemOrPreciousStone } from "./types/equipment/item/GemOrPreciousStone.js"
import { IlluminationLightSource } from "./types/equipment/item/IlluminationLightSource.js"
import { IlluminationRefillsOrSupplies } from "./types/equipment/item/IlluminationRefillsOrSupplies.js"
import { Jewelry } from "./types/equipment/item/Jewelry.js"
import { Liebesspielzeug } from "./types/equipment/item/Liebesspielzeug.js"
import { LuxuryGood } from "./types/equipment/item/LuxuryGood.js"
import { MagicalArtifact } from "./types/equipment/item/MagicalArtifact.js"
import { MusicalInstrument } from "./types/equipment/item/MusicalInstrument.js"
import { OrienteeringAid } from "./types/equipment/item/OrienteeringAid.js"
import { Poison } from "./types/equipment/item/Poison.js"
import { RopeOrChain } from "./types/equipment/item/RopeOrChain.js"
import { Stationery } from "./types/equipment/item/Stationery.js"
import { ThievesTool } from "./types/equipment/item/ThievesTool.js"
import { ToolOfTheTrade } from "./types/equipment/item/ToolOfTheTrade.js"
import { TravelGearOrTool } from "./types/equipment/item/TravelGearOrTool.js"
import { Vehicle } from "./types/equipment/item/Vehicle.js"
import { Weapon } from "./types/equipment/item/Weapon.js"
import { WeaponAccessory } from "./types/equipment/item/WeaponAccessory.js"
import { ArmorType } from "./types/equipment/item/sub/ArmorType.js"
import { Reach } from "./types/equipment/item/sub/Reach.js"
import { AnimistPower } from "./types/magicalActions/AnimistPower.js"
import { Tribe } from "./types/magicalActions/AnimistPower_Tribe.js"
import { Curse } from "./types/magicalActions/Curse.js"
import { DominationRitual } from "./types/magicalActions/DominationRitual.js"
import { ElvenMagicalSong } from "./types/magicalActions/ElvenMagicalSong.js"
import { GeodeRitual } from "./types/magicalActions/GeodeRitual.js"
import { JesterTrick } from "./types/magicalActions/JesterTrick.js"
import { MagicalDance } from "./types/magicalActions/MagicalDance.js"
import { MagicalMelody } from "./types/magicalActions/MagicalMelody.js"
import { MagicalRune } from "./types/magicalActions/MagicalRune.js"
import { ZibiljaRitual } from "./types/magicalActions/ZibiljaRitual.js"
import { CoreRule } from "./types/rule/CoreRule.js"
import { FocusRule } from "./types/rule/FocusRule.js"
import { Subject } from "./types/rule/FocusRule_Subject.js"
import { OptionalRule } from "./types/rule/OptionalRule.js"
import { Publication } from "./types/source/Publication.js"
import { AdvancedCombatSpecialAbility } from "./types/specialAbility/AdvancedCombatSpecialAbility.js"
import { AdvancedKarmaSpecialAbility } from "./types/specialAbility/AdvancedKarmaSpecialAbility.js"
import { AdvancedMagicalSpecialAbility } from "./types/specialAbility/AdvancedMagicalSpecialAbility.js"
import { AdvancedSkillSpecialAbility } from "./types/specialAbility/AdvancedSkillSpecialAbility.js"
import { AncestorGlyph } from "./types/specialAbility/AncestorGlyph.js"
import { BlessedTradition } from "./types/specialAbility/BlessedTradition.js"
import { BrawlingSpecialAbility } from "./types/specialAbility/BrawlingSpecialAbility.js"
import { CeremonialItemSpecialAbility } from "./types/specialAbility/CeremonialItemSpecialAbility.js"
import { CombatSpecialAbility } from "./types/specialAbility/CombatSpecialAbility.js"
import { CombatStyleSpecialAbility } from "./types/specialAbility/CombatStyleSpecialAbility.js"
import { CommandSpecialAbility } from "./types/specialAbility/CommandSpecialAbility.js"
import { FamiliarSpecialAbility } from "./types/specialAbility/FamiliarSpecialAbility.js"
import { FatePointSexSpecialAbility } from "./types/specialAbility/FatePointSexSpecialAbility.js"
import { FatePointSpecialAbility } from "./types/specialAbility/FatePointSpecialAbility.js"
import { GeneralSpecialAbility } from "./types/specialAbility/GeneralSpecialAbility.js"
import { KarmaSpecialAbility } from "./types/specialAbility/KarmaSpecialAbility.js"
import { LiturgicalStyleSpecialAbility } from "./types/specialAbility/LiturgicalStyleSpecialAbility.js"
import { LycantropicGift } from "./types/specialAbility/LycantropicGift.js"
import { MagicStyleSpecialAbility } from "./types/specialAbility/MagicStyleSpecialAbility.js"
import { MagicalSign } from "./types/specialAbility/MagicalSign.js"
import { MagicalSpecialAbility } from "./types/specialAbility/MagicalSpecialAbility.js"
import { MagicalTradition } from "./types/specialAbility/MagicalTradition.js"
import { PactGift } from "./types/specialAbility/PactGift.js"
import { ProtectiveWardingCircleSpecialAbility } from "./types/specialAbility/ProtectiveWardingCircleSpecialAbility.js"
import { Sermon } from "./types/specialAbility/Sermon.js"
import { SexSpecialAbility } from "./types/specialAbility/SexSpecialAbility.js"
import { SikaryanDrainSpecialAbility } from "./types/specialAbility/SikaryanDrainSpecialAbility.js"
import { SkillStyleSpecialAbility } from "./types/specialAbility/SkillStyleSpecialAbility.js"
import { VampiricGift } from "./types/specialAbility/VampiricGift.js"
import { Vision } from "./types/specialAbility/Vision.js"
import { Language } from "./types/specialAbility/sub/Language.js"
import { Script } from "./types/specialAbility/sub/Script.js"
import { TradeSecret } from "./types/specialAbility/sub/TradeSecret.js"
import { ArcaneOrbEnchantment } from "./types/traditionArtifacts/ArcaneOrbEnchantment.js"
import { AttireEnchantment } from "./types/traditionArtifacts/AttireEnchantment.js"
import { BowlEnchantment } from "./types/traditionArtifacts/BowlEnchantment.js"
import { CauldronEnchantment } from "./types/traditionArtifacts/CauldronEnchantment.js"
import { ChronicleEnchantment } from "./types/traditionArtifacts/ChronicleEnchantment.js"
import { DaggerRitual } from "./types/traditionArtifacts/DaggerRitual.js"
import { FoolsHatEnchantment } from "./types/traditionArtifacts/FoolsHatEnchantment.js"
import { InstrumentEnchantment } from "./types/traditionArtifacts/InstrumentEnchantment.js"
import { Krallenkettenzauber } from "./types/traditionArtifacts/Krallenkettenzauber.js"
import { OrbEnchantment } from "./types/traditionArtifacts/OrbEnchantment.js"
import { RingEnchantment } from "./types/traditionArtifacts/RingEnchantment.js"
import { SickleRitual } from "./types/traditionArtifacts/SickleRitual.js"
import { SpellSwordEnchantment } from "./types/traditionArtifacts/SpellSwordEnchantment.js"
import { StaffEnchantment } from "./types/traditionArtifacts/StaffEnchantment.js"
import { ToyEnchantment } from "./types/traditionArtifacts/ToyEnchantment.js"
import { Trinkhornzauber } from "./types/traditionArtifacts/Trinkhornzauber.js"
import { WandEnchantment } from "./types/traditionArtifacts/WandEnchantment.js"
import { WeaponEnchantment } from "./types/traditionArtifacts/WeaponEnchantment.js"
import { AnimalShape } from "./types/traditionArtifacts/sub/AnimalShape.js"
import { AnimalShapePath } from "./types/traditionArtifacts/sub/AnimalShapePath.js"
import { AnimalShapeSize } from "./types/traditionArtifacts/sub/AnimalShapeSize.js"
import { Brew } from "./types/traditionArtifacts/sub/Brew.js"

export const schema = Schema(
  [
    AdvancedCombatSpecialAbility,
    AdvancedKarmaSpecialAbility,
    AdvancedMagicalSpecialAbility,
    AdvancedSkillSpecialAbility,
    Advantage,
    Ammunition,
    AncestorGlyph,
    AnimalCare,
    AnimalDisease,
    Animal,
    AnimalShapePath,
    AnimalShape,
    AnimalShapeSize,
    AnimalType,
    AnimistPower,
    Tribe,
    ArcaneBardTradition,
    ArcaneDancerTradition,
    ArcaneOrbEnchantment,
    Armor,
    ArmorType,
    Aspect,
    AttireEnchantment,
    Attribute,
    BandageOrRemedy,
    BlessedTradition,
    Blessing,
    Book,
    BowlEnchantment,
    BrawlingSpecialAbility,
    Brew,
    Cantrip,
    CauldronEnchantment,
    CeremonialItem,
    CeremonialItemSpecialAbility,
    Ceremony,
    ChronicleEnchantment,
    CloseCombatTechnique,
    Clothes,
    CombatSpecialAbility,
    CombatStyleSpecialAbility,
    CommandSpecialAbility,
    Condition,
    Container,
    Continent,
    CoreRule,
    Culture,
    Curse,
    DaggerRitual,
    DerivedCharacteristic,
    Disadvantage,
    Disease,
    DominationRitual,
    Element,
    Elixir,
    ElvenMagicalSong,
    EquipmentOfBlessedOnes,
    EquipmentPackage,
    ExperienceLevel,
    EyeColor,
    FamiliarSpecialAbility,
    FamiliarsTrick,
    FatePointSexSpecialAbility,
    FatePointSpecialAbility,
    FocusRule,
    Subject,
    FoolsHatEnchantment,
    GemOrPreciousStone,
    GeneralSpecialAbility,
    GeodeRitual,
    HairColor,
    IlluminationLightSource,
    IlluminationRefillsOrSupplies,
    InstrumentEnchantment,
    JesterTrick,
    Jewelry,
    KarmaSpecialAbility,
    Krallenkettenzauber,
    Language,
    Curriculum,
    Guideline,
    Liebesspielzeug,
    LiturgicalChant,
    LiturgicalStyleSpecialAbility,
    LuxuryGood,
    LycantropicGift,
    MagicalArtifact,
    MagicalDance,
    MagicalMelody,
    MagicalRune,
    MagicalSign,
    MagicalSpecialAbility,
    MagicalTradition,
    MagicStyleSpecialAbility,
    MetaCondition,
    MusicalInstrument,
    OptionalRule,
    OrbEnchantment,
    OrienteeringAid,
    PactCategory,
    PactGift,
    PatronCategory,
    Patron,
    PersonalityTrait,
    Poison,
    Profession,
    Property,
    ProtectiveWardingCircleSpecialAbility,
    Publication,
    Race,
    RangedCombatTechnique,
    Reach,
    Region,
    RingEnchantment,
    Ritual,
    RopeOrChain,
    Script,
    Sermon,
    Service,
    SexPractice,
    SexSpecialAbility,
    SickleRitual,
    SikaryanDrainSpecialAbility,
    SkillGroup,
    SkillModificationLevel,
    Skill,
    SkillStyleSpecialAbility,
    SocialStatus,
    Spell,
    SpellSwordEnchantment,
    StaffEnchantment,
    State,
    Stationery,
    Talisman,
    TargetCategory,
    ThievesTool,
    ToolOfTheTrade,
    ToyEnchantment,
    TradeSecret,
    TravelGearOrTool,
    Trinkhornzauber,
    VampiricGift,
    Vehicle,
    Vision,
    WandEnchantment,
    WeaponAccessory,
    WeaponEnchantment,
    Weapon,
    ZibiljaRitual,
  ],
  Locale
)

// /**
//  * A dictionary of cache types and their associated location.
//  */
// export type CachePaths = {
//   [K in keyof CacheMap]: string
// }

// export type CacheOptions = {
//   /**
//    * Whether to pretty-print the JSON. Default is `false`.
//    */
//   pretty?: boolean
// }

// /**
//  * Builds the cache and writes it to the specified paths in JSON format.
//  * @param cachePaths The absolute paths to write each cache to.
//  * @param validResults The data to build the cache from. Usually the result of
//  * `getAllValidData`.
//  * @param options Configuration options for building the cache.
//  */
// export const buildCache = async (
//   cachePaths: CachePaths,
//   validResults: ValidResults,
//   options: CacheOptions = {}
// ): Promise<void> => {
//   const { pretty = false } = options

//   const activatableSelectOptionsCache = cacheMap.activatableSelectOptions.builder(validResults)
//   const ancestorBloodAdvantagesCache = cacheMap.ancestorBloodAdvantages.builder(validResults)
//   const magicalAndBlessedAdvantagesAndDisadvantagesCache =
//     cacheMap.magicalAndBlessedAdvantagesAndDisadvantages.builder(validResults)
//   const newApplicationsAndUsesCache = cacheMap.newApplicationsAndUses.builder(
//     validResults,
//     activatableSelectOptionsCache
//   )

//   const cacheData: CacheMap = {
//     activatableSelectOptions: activatableSelectOptionsCache,
//     ancestorBloodAdvantages: ancestorBloodAdvantagesCache,
//     magicalAndBlessedAdvantagesAndDisadvantages: magicalAndBlessedAdvantagesAndDisadvantagesCache,
//     newApplicationsAndUses: newApplicationsAndUsesCache,
//   }

//   for (const [cacheName, cachePath] of Object.entries(cachePaths)) {
//     await mkdir(dirname(cachePath), { recursive: true })
//     await writeFile(
//       cachePath,
//       JSON.stringify(cacheData[cacheName as keyof CachePaths], null, pretty ? 2 : undefined),
//       "utf-8"
//     )
//   }
// }

// /**
//  * Reads the cache from the specified paths in JSON format.
//  * @param cachePaths The absolute paths to read each cache from.
//  * @returns
//  */
// export const getCache = async (cachePaths: CachePaths): Promise<CacheMap> => {
//   const cache: Partial<CacheMap> = {}
//   for (const [cacheName, cachePath] of Object.entries(cachePaths)) {
//     const cacheData = JSON.parse(await readFile(cachePath, "utf-8"))
//     cache[cacheName as keyof CacheMap] = cacheData
//   }
//   return cache as CacheMap
// }
