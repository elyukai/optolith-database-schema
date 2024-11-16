//
//  Race.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// A playable race with stats and skills.
public struct Race: LocalizableEntity {
    /// The race's identifier. An unique, increasing integer.
    public let id: Int
    
    /// How many Adventure Points does the race cost during character creation?
    public let apValue: Int
    
    /// The race’s base values.
    public let baseValues: BaseValues
    
    /// Describes how to raise or lower maximum attribute values during character
    /// creation.
    public let attributeAdjustments: AttributeAdjustments
    
    /// A list of automatically applied advantages. This does only work for
    /// advantages with no further configuration such as level or special
    /// selection.
    public let automaticAdvantages: [AdvantageReference]?
    
    /// A list of strongly recommended advantages.
    public let stronglyRecommendedAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]?
    
    /// A list of strongly recommended disadvantages.
    public let stronglyRecommendedDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]?
    
    /// Configuration for random weight generation.
    public let weight: RandomWeightGeneration
    
    /// Defines the starting ages for the race. It depends on the selected
    /// experience level.
    public let startingAge: [StartingAgeConfigForExperienceLevel]
    
    /// A list of available race variants where one has to be selected. If no
    /// variants are to be selected, a single variant with no name has to be provided
    /// which will be used as the missing values for the base race.
    public let variants: RaceVariants
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<RaceTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case apValue = "ap_value"
        case baseValues = "base_values"
        case attributeAdjustments = "attribute_adjustments"
        case automaticAdvantages = "automatic_advantages"
        case stronglyRecommendedAdvantages = "strongly_recommended_advantages"
        case stronglyRecommendedDisadvantages = "strongly_recommended_disadvantages"
        case weight = "weight"
        case startingAge = "starting_age"
        case variants = "variants"
        case src = "src"
        case translations = "translations"
    }
}

/// The race’s base values.
public struct BaseValues: EntitySubtype {
    /// The race’s life point base value.
    public let lifePoints: Int
    
    /// The race’s Spirit base value.
    public let spirit: Int
    
    /// The race’s Toughness base value.
    public let toughness: Int
    
    /// The race’s tactical movement rate.
    public let movement: Int    
    
    private enum CodingKeys: String, CodingKey {
        case lifePoints = "life_points"
        case spirit = "spirit"
        case toughness = "toughness"
        case movement = "movement"
    }
}

/// Describes how to raise or lower maximum attribute values during character
/// creation.
public struct AttributeAdjustments: EntitySubtype {
    /// The values by which the maximum of the respective attribute is modified.
    public let fixed: [FixedAttributeAdjustment]?
    
    /// An array of attribute maximum modifiers, where the attribute they apply to
    /// is selected from a list of options.
    /// 
    /// The array only permits a single entry because no race specified more than
    /// one selectable attribute adjustment so far. But the schema allows for
    /// multiple entries to be future-proof.
    public let selectable: [SelectableAttributeAdjustment]?
}

/// A value by which the maximum of the respective attribute is modified.
public struct FixedAttributeAdjustment: EntitySubtype {
    /// The attribute the modifier applies to.
    public let id: AttributeIdentifier
    
    /// The value by which the specified attribute's maximum is modified
    /// (negative values will lower the maximum).
    public let value: Int
}

/// A value that will be added to the current maximum of the selected attribute
/// that has been chosen from the listed attributes (negative values will lower
/// the maximum).
public struct SelectableAttributeAdjustment: EntitySubtype {
    /// A list of attributes the player has to choose from.
    public let list: [AttributeReference]
    
    /// The value by which the selected attribute's maximum is modified
    /// (negative values will lower the maximum).
    public let value: Int
}

/// Configuration for random weight generation.
public struct RandomWeightGeneration: EntitySubtype {
    /// The base value used for random weight. The height subtrahend; in case of
    /// `Height - 110 + 2D6` it is `110`.
    public let base: Int
    
    /// The dice used for random weight.
    public let random: [WeightDice]
}

public struct WeightDice: EntitySubtype {
    /// Number of dice of the same type. Example: 2 in 2D6.
    public let number: Int
    
    /// Number of sides on every die. Example: 6 in 2D6.
    public let sides: DieType
    
    /// The strategy how to offset the randomly generated values against the
    /// base value. Either they are all added or subtracted or even results are
    /// added and odd results are subtracted.
    public let offsetStrategy: WeightDiceOffsetStrategy    
    
    private enum CodingKeys: String, CodingKey {
        case number = "number"
        case sides = "sides"
        case offsetStrategy = "offset_strategy"
    }
}

/// The strategy how to offset the randomly generated values against the
/// base value. Either they are all added or subtracted or even results are
/// added and odd results are subtracted.
public enum WeightDiceOffsetStrategy: String, EntitySubtype {
    case add = "Add"
    case subtract = "Subtract"
    case addEvenSubtractOdd = "AddEvenSubtractOdd"
}

public struct StartingAgeConfigForExperienceLevel: EntitySubtype {
    /// The selected experience level's identifier.
    public let id: ExperienceLevelIdentifier
    
    /// The base value for the selected experience level.
    public let base: Int
    
    /// The random value for the selected experience level. It is going to be
    /// added to the base value.
    public let random: Dice
}

/// A list of available race variants where one has to be selected. If no
/// variants are to be selected, a single variant with no name has to be provided
/// which will be used as the missing values for the base race.
public typealias RaceVariants = [RaceVariant]

public struct RaceVariant: EntitySubtype {
    /// An unique, increasing integer.
    public let id: Int
    
    /// The list of common cultures.
    public let commonCultures: [CultureReference]
    
    /// A list of common advantages.
    public let commonAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]?
    
    /// A list of common disadvantages.
    public let commonDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]?
    
    /// A list of uncommon advantages.
    public let uncommonAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]?
    
    /// A list of uncommon disadvantages.
    public let uncommonDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]?
    
    /// An array containing 20 (numeric) hair color identifiers. The array also
    /// represents the 20-sided die for a random hair color.
    public let hairColor: [HairColorReference]
    
    /// An array containing 20 (numeric) eye color identifiers. The array also
    /// represents the 20-sided die for a random eye color.
    public let eyeColor: [EyeColorReference]
    
    /// Configuration for random height generation.
    public let height: Height
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<RaceVariantTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case commonCultures = "common_cultures"
        case commonAdvantages = "common_advantages"
        case commonDisadvantages = "common_disadvantages"
        case uncommonAdvantages = "uncommon_advantages"
        case uncommonDisadvantages = "uncommon_disadvantages"
        case hairColor = "hair_color"
        case eyeColor = "eye_color"
        case height = "height"
        case translations = "translations"
    }
}

/// Configuration for random height generation.
public struct Height: EntitySubtype {
    /// The base value used for random height.
    public let base: Int
    
    /// The dice used for random height.
    public let random: [Dice]
}

public struct RaceVariantTranslation: EntitySubtype {
    /// The race variant's name. If left empty, it defaults to the base race name.
    /// This can be used if the race has no (visible) variants so that a single
    /// variant has to be provided.
    public let name: NonEmptyString?
    
    /// The respective common advantages text from the source book.
    public let commonAdvantages: NonEmptyString?
    
    /// The respective common disadvantages text from the source book.
    public let commonDisadvantages: NonEmptyString?
    
    /// The respective uncommon advantages text from the source book.
    public let uncommonAdvantages: NonEmptyString?
    
    /// The respective uncommon disadvantages text from the source book.
    public let uncommonDisadvantages: NonEmptyString?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case commonAdvantages = "common_advantages"
        case commonDisadvantages = "common_disadvantages"
        case uncommonAdvantages = "uncommon_advantages"
        case uncommonDisadvantages = "uncommon_disadvantages"
    }
}

public struct RaceTranslation: EntitySubtype {
    /// The race's name.
    public let name: NonEmptyString
    
    /// The respective attribute adjustments text from the source book.
    public let attributeAdjustments: NonEmptyString
    
    /// The respective automatic advantages text from the source book.
    public let automaticAdvantages: NonEmptyString?
    
    /// The respective strongly recommended advantages text from the source book.
    public let stronglyRecommendedAdvantages: NonEmptyString?
    
    /// The respective strongly recommended disadvantages text from the source
    /// book.
    public let stronglyRecommendedDisadvantages: NonEmptyString?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case attributeAdjustments = "attribute_adjustments"
        case automaticAdvantages = "automatic_advantages"
        case stronglyRecommendedAdvantages = "strongly_recommended_advantages"
        case stronglyRecommendedDisadvantages = "strongly_recommended_disadvantages"
        case errata = "errata"
    }
}
