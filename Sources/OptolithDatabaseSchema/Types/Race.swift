import FileDB

@Model
public struct Race {
    /// How many Adventure Points does the race cost during character creation?
    @Minimum(0)
    let ap_value: Int

    /// The race’s base values.
    let base_values: BaseValues

    /// Describes how to raise or lower maximum attribute values during character creation.
    let attribute_adjustments: AttributeAdjustments

    /// A list of automatically applied advantages. This does only work for advantages with no further configuration such as level or special selection.
    @MinItems(1)
    @Relationship(Advantage.self)
    let automatic_advantages: [Advantage.ID]?

    /// A list of strongly recommended advantages.
    @MinItems(1)
    @Relationship(Advantage.self)
    let strongly_recommended_advantages: [CommonnessRatedAdvantageDisadvantage<Advantage.ID>]?

    /// A list of strongly recommended disadvantages.
    @MinItems(1)
    @Relationship(Disadvantage.self)
    let strongly_recommended_disadvantages: [CommonnessRatedAdvantageDisadvantage<Disadvantage.ID>]?

    /// Configuration for random weight generation.
    let weight: RandomWeightGeneration

    /// Defines the starting ages for the race. It depends on the selected experience level.
    @Relationship(ExperienceLevel.self)
    let starting_age: [Locale.ID: StartingAge]

    /// A list of available race variants where one has to be selected. If no variants are to be selected, a single variant with no name has to be provided which will be used as the missing values for the base race.
    @Relationship(RaceVariant.self)
    @MinItems(1)
    let variants: [RaceVariant.ID]
    // isTransient: true,

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // RaceTranslation
        /// The race’s name.
        @MinLength(1)
        let name: String

        /// The respective attribute adjustments text from the source book.
        @MinLength(1)
        let attribute_adjustments: String

        /// The respective automatic advantages text from the source book.
        @MinLength(1)
        let automatic_advantages: String

        /// The respective strongly recommended advantages text from the source book.
        @MinLength(1)
        let strongly_recommended_advantages: String

        /// The respective strongly recommended disadvantages text from the source book.
        @MinLength(1)
        let strongly_recommended_disadvantages: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Embedded
public struct BaseValues {
    /// The race’s life point base value.
    let life_points: Int

    /// The race’s Spirit base value.
    let spirit: Int

    /// The race’s Toughness base value.
    let toughness: Int

    /// The race’s tactical movement rate.
    let movement: Int
}

/// Describes how to raise or lower maximum attribute values during character creation.
@Embedded
@MinProperties(1)
public struct AttributeAdjustments {
    /// The values by which the maximum of the respective attribute is modified.
    @MinItems(1)
    let fixed: [FixedAttributeAdjustment]?

    /// An array of attribute maximum modifiers, where the attribute they apply to is selected from a list of options.
    ///
    /// The array only permits a single entry because no race specified more than one selectable attribute adjustment so far. But the schema allows for multiple entries to be future-proof.
    @MinItems(1)
    @MaxItems(1)
    let selectable: [SelectableAttributeAdjustment]?
}

/// A value by which the maximum of the respective attribute is modified.
@Embedded
public struct FixedAttributeAdjustment {
    /// The attribute the modifier applies to.
    @Relationship(Attribute.self)
    let id: Attribute.ID

    /// The value by which the specified attribute’s maximum is modified (negative values will lower the maximum).
    let value: Int
}

/// A value that will be added to the current maximum of the selected attribute that has been chosen from the listed attributes (negative values will lower the maximum).
@Embedded
public struct SelectableAttributeAdjustment {
    /// A list of attributes the player has to choose from.
    @MinItems(2)
    @Relationship(Attribute.self)
    let list: [Attribute.ID]

    /// The value by which the selected attribute’s maximum is modified (negative values will lower the maximum).
    let value: Int
}

/// Configuration for random weight generation.
@Embedded
public struct RandomWeightGeneration {
    /// The base value used for random weight. The height subtrahend; in case of `Height - 110 + 2D6` it is `110`.
    @Minimum(1)
    let base: Int

    /// The dice used for random weight.
    @MinItems(1)
    let random: [WeightDice]
}

@Embedded
public struct WeightDice {
    /// Number of dice of the same type. Example: 2 in 2D6.
    @Minimum(1)
    let number: Int

    /// Number of sides on every die. Example: 6 in 2D6.
    let sides: DieType

    /// The strategy how to offset the randomly generated values against the base value. Either they are all added or subtracted or even results are added and odd results are subtracted.
    let offset_strategy: WeightDiceOffsetStrategy
}

/// The strategy how to offset the randomly generated values against the base value. Either they are all added or subtracted or even results are added and odd results are subtracted.
@ModelEnum
public enum WeightDiceOffsetStrategy {
    case add
    case subtract
    case addEvenSubtractOdd
}

@Model
public struct RaceVariant {
    /// The associated race.
    @Relationship(Race.self)
    let race: Race.ID

    /// The list of common cultures.
    @MinItems(1)
    @Relationship(Culture.self)
    let common_cultures: [Culture.ID]?

    /// A list of common advantages.
    @Relationship(Advantage.self)
    @MinItems(1)
    let common_advantages: [CommonnessRatedAdvantageDisadvantage<Advantage.ID>]?

    /// A list of common disadvantages.
    @Relationship(Disadvantage.self)
    @MinItems(1)
    let common_disadvantages: [CommonnessRatedAdvantageDisadvantage<Disadvantage.ID>]?

    /// A list of uncommon advantages.
    @Relationship(Advantage.self)
    @MinItems(1)
    let uncommon_advantages: [CommonnessRatedAdvantageDisadvantage<Advantage.ID>]?

    /// A list of uncommon disadvantages.
    @Relationship(Disadvantage.self)
    @MinItems(1)
    let uncommon_disadvantages: [CommonnessRatedAdvantageDisadvantage<Disadvantage.ID>]?

    /// An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.
    @MinItems(20)
    @MaxItems(20)
    @Relationship(HairColor.self)
    let hair_color: [HairColor.ID]?

    /// An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.
    @MinItems(20)
    @MaxItems(20)
    @Relationship(EyeColor.self)
    let eye_color: [EyeColor.ID]?

    /// Configuration for random height generation.
    let height: RandomHeightGeneration

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // RaceVariantTranslation
        /// The race variant’s name. If this is the only variant for a base race and thus just provides the missing information without actually being able to select, fill in the name of the base race.
        @MinLength(1)
        let name: String

        /// The respective common advantages text from the source book.
        @MinLength(1)
        let common_advantages: String?

        /// The respective common disadvantages text from the source book.
        @MinLength(1)
        let common_disadvantages: String?

        /// The respective uncommon advantages text from the source book.
        @MinLength(1)
        let uncommon_advantages: String?

        /// The respective uncommon disadvantages text from the source book.
        @MinLength(1)
        let uncommon_disadvantages: String?
    }
}

/// Configuration for random height generation.
@Embedded
public struct RandomHeightGeneration {
    /// The base value used for random height.
    @Minimum(1)
    let base: Int

    /// The dice used for random height.
    @MinItems(1)
    let random: [Dice]
}

@Embedded
struct StartingAge {
    /// The base value for the selected experience level.
    @Minimum(1)
    let base: Int

    /// The random value for the selected experience level. It is going to be added to the base value.
    let random: Dice
}
