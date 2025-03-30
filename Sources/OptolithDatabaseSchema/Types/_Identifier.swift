//
//  __Identifier.swift
//  OptolithDatabaseSchema
//
//  Created by Lukas Obermann on 16.11.24.
//

import Foundation

public protocol EntityIdentifier: EntitySubtype {
    var numericId: Int { get }
}

@freestanding(declaration, names: arbitrary)
public macro IdentifierObject(entity: String) = #externalMacro(module: "OptolithDatabaseSchemaMacros", type: "IdentifierObjectMacro")

public struct PublicationIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Publication")
}

public struct ExperienceLevelIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ExperienceLevel")
}

public struct CoreRuleIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "CoreRule")
}

public struct FocusRuleIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "FocusRule")
}

public struct SubjectIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Subject")
}

public struct OptionalRuleIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "OptionalRule")
}

public struct RaceIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Race")
}

public struct CultureIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Culture")
}

public struct ProfessionIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Profession")
}

public struct ProfessionVariantIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ProfessionVariant")
}

public struct CurriculumIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Curriculum")
}

public struct GuidelineIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Guideline")
}

public struct AdvantageIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Advantage")
}

public struct DisadvantageIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Disadvantage")
}

public struct GeneralSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "GeneralSpecialAbility")
}

public struct FatePointSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "FatePointSpecialAbility")
}

public struct CombatSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "CombatSpecialAbility")
}

public struct MagicalSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "MagicalSpecialAbility")
}

public struct StaffEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "StaffEnchantment")
}

public struct FamiliarSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "FamiliarSpecialAbility")
}

public struct KarmaSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "KarmaSpecialAbility")
}

public struct ProtectiveWardingCircleSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ProtectiveWardingCircleSpecialAbility")
}

public struct CombatStyleSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "CombatStyleSpecialAbility")
}

public struct AdvancedCombatSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AdvancedCombatSpecialAbility")
}

public struct CommandSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "CommandSpecialAbility")
}

public struct MagicStyleSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "MagicStyleSpecialAbility")
}

public struct AdvancedMagicalSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AdvancedMagicalSpecialAbility")
}

public struct SpellSwordEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "SpellSwordEnchantment")
}

public struct DaggerRitualIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "DaggerRitual")
}

public struct InstrumentEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "InstrumentEnchantment")
}

public struct AttireEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AttireEnchantment")
}

public struct OrbEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "OrbEnchantment")
}

public struct WandEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "WandEnchantment")
}

public struct BrawlingSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "BrawlingSpecialAbility")
}

public struct AncestorGlyphIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AncestorGlyph")
}

public struct CeremonialItemSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "CeremonialItemSpecialAbility")
}

public struct SermonIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Sermon")
}

public struct LiturgicalStyleSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "LiturgicalStyleSpecialAbility")
}

public struct AdvancedKarmaSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AdvancedKarmaSpecialAbility")
}

public struct VisionIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Vision")
}

public struct MagicalTraditionIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "MagicalTradition")
}

public struct BlessedTraditionIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "BlessedTradition")
}

public struct PactGiftIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "PactGift")
}

public struct VampiricGiftIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "VampiricGift")
}

public struct SikaryanDrainSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "SikaryanDrainSpecialAbility")
}

public struct LycantropicGiftIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "LycantropicGift")
}

public struct SkillStyleSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "SkillStyleSpecialAbility")
}

public struct AdvancedSkillSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AdvancedSkillSpecialAbility")
}

public struct ArcaneOrbEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ArcaneOrbEnchantment")
}

public struct CauldronEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "CauldronEnchantment")
}

public struct FoolsHatEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "FoolsHatEnchantment")
}

public struct ToyEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ToyEnchantment")
}

public struct BowlEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "BowlEnchantment")
}

public struct FatePointSexSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "FatePointSexSpecialAbility")
}

public struct SexSpecialAbilityIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "SexSpecialAbility")
}

public struct WeaponEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "WeaponEnchantment")
}

public struct SickleRitualIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "SickleRitual")
}

public struct RingEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "RingEnchantment")
}

public struct ChronicleEnchantmentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ChronicleEnchantment")
}

public struct KrallenkettenzauberIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Krallenkettenzauber")
}

public struct TrinkhornzauberIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Trinkhornzauber")
}

public struct MagicalRuneIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "MagicalRune")
}

public struct MagicalSignIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "MagicalSign")
}

public struct LanguageIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Language")
}

public struct ScriptIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Script")
}

public struct ContinentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Continent")
}

public struct SocialStatusIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "SocialStatus")
}

public struct AttributeIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Attribute")
}

public struct SkillIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Skill")
}

public struct SkillGroupIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "SkillGroup")
}

public struct CloseCombatTechniqueIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "CloseCombatTechnique")
}

public struct RangedCombatTechniqueIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "RangedCombatTechnique")
}

public struct SpellIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Spell")
}

public struct RitualIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Ritual")
}

public struct CantripIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Cantrip")
}

public struct PropertyIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Property")
}

public struct LiturgicalChantIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "LiturgicalChant")
}

public struct CeremonyIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Ceremony")
}

public struct BlessingIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Blessing")
}

public struct AspectIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Aspect")
}

public struct CurseIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Curse")
}

public struct ElvenMagicalSongIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ElvenMagicalSong")
}

public struct DominationRitualIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "DominationRitual")
}

public struct MagicalMelodyIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "MagicalMelody")
}

public struct MagicalDanceIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "MagicalDance")
}

public struct JesterTrickIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "JesterTrick")
}

public struct AnimistPowerIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AnimistPower")
}

public struct GeodeRitualIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "GeodeRitual")
}

public struct ZibiljaRitualIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ZibiljaRitual")
}

public struct AnimalTypeIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AnimalType")
}

public struct TargetCategoryIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "TargetCategory")
}

public struct GeneralIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "General")
}

public struct ElementIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Element")
}

public struct AnimalShapeSizeIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AnimalShapeSize")
}

public struct PatronIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Patron")
}

public struct AmmunitionIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Ammunition")
}

public struct AnimalIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Animal")
}

public struct AnimalCareIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AnimalCare")
}

public struct ArmorIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Armor")
}

public struct BandageOrRemedyIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "BandageOrRemedy")
}

public struct BookIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Book")
}

public struct CeremonialItemIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "CeremonialItem")
}

public struct ClothesIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Clothes")
}

public struct ContainerIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Container")
}

public struct ElixirIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Elixir")
}

public struct EquipmentOfBlessedOnesIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "EquipmentOfBlessedOnes")
}

public struct GemOrPreciousStoneIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "GemOrPreciousStone")
}

public struct IlluminationLightSourceIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "IlluminationLightSource")
}

public struct IlluminationRefillsOrSuppliesIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "IlluminationRefillsOrSupplies")
}

public struct JewelryIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Jewelry")
}

public struct LiebesspielzeugIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Liebesspielzeug")
}

public struct LuxuryGoodIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "LuxuryGood")
}

public struct MagicalArtifactIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "MagicalArtifact")
}

public struct MusicalInstrumentIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "MusicalInstrument")
}

public struct OrienteeringAidIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "OrienteeringAid")
}

public struct PoisonIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Poison")
}

public struct RopeOrChainIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "RopeOrChain")
}

public struct StationaryIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Stationary")
}

public struct ThievesToolIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ThievesTool")
}

public struct ToolOfTheTradeIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ToolOfTheTrade")
}

public struct TravelGearOrToolIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "TravelGearOrTool")
}

public struct VehicleIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Vehicle")
}

public struct WeaponIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Weapon")
}

public struct WeaponAccessoryIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "WeaponAccessory")
}

public struct ReachIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Reach")
}

public struct PatronCategoryIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "PatronCategory")
}

public struct PersonalityTraitIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "PersonalityTrait")
}

public struct HairColorIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "HairColor")
}

public struct EyeColorIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "EyeColor")
}

public struct PactCategoryIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "PactCategory")
}

public struct PactDomainIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "PactDomain")
}

public struct AnimistTribeIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AnimistTribe")
}

public struct InfluenceIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Influence")
}

public struct ConditionIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Condition")
}

public struct StateIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "State")
}

public struct DiseaseIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "Disease")
}

public struct SexPracticeIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "SexPractice")
}

public struct TradeSecretIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "TradeSecret")
}

public struct AnimalShapeIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "AnimalShape")
}

public struct ArcaneBardTraditionIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ArcaneBardTradition")
}

public struct ArcaneDancerTraditionIdentifier: EntityIdentifier {
    #IdentifierObject(entity: "ArcaneDancerTradition")
}
