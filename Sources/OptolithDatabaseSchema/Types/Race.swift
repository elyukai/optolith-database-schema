import FileDB

@Model
public struct Race {

  /// How many Adventure Points does the race cost during character creation?
  let ap_value: Integer({ minimum: 0 })

  /// The race’s base values.
  @Relationship(BaseValues)
  let base_values: BaseValues.ID

  /// Describes how to raise or lower maximum attribute values during character creation.
  @Relationship(AttributeAdjustments)
  let attribute_adjustments: AttributeAdjustments.ID
  /// A list of automatically applied advantages. This does only work for advantages with no further configuration such as level or special selection.
  let automatic_advantages: Array(AdvantageIdentifier(), { minItems: 1 })?
      strongly_recommended_advantages: Optional({
        comment: "A list of strongly recommended advantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),
      strongly_recommended_disadvantages: Optional({
        comment: "A list of strongly recommended disadvantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),

  /// Configuration for random weight generation.
  @Relationship(RandomWeightGeneration)
  let weight: RandomWeightGeneration.ID
      starting_age: Required({
        comment:
          "Defines the starting ages for the race. It depends on the selected experience level.",
        type: NestedEntityMap({
          name: "StartingAgeConfigForExperienceLevel",
          secondaryEntity: ExperienceLevel,
          type: Object({
            base: Required({
              comment: "The base value for the selected experience level.",
              type: Integer({ minimum: 1 }),
            }),
            random: Required({
              comment:
                "The random value for the selected experience level. It is going to be added to the base value.",
              type: IncludeIdentifier(Dice),
            }),
          }),
        }),
      }),
      variants: Required({
        comment:
          "A list of available race variants where one has to be selected. If no variants are to be selected, a single variant with no name has to be provided which will be used as the missing values for the base race.",
        type: IncludeIdentifier(RaceVariants),
        // isTransient: true,
      }),

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // RaceTranslation

        /// The race’s name.
        let name: String({ minLength: 1 })

        /// The respective attribute adjustments text from the source book.
        let attribute_adjustments: String({ minLength: 1 })

        /// The respective automatic advantages text from the source book.
        let automatic_advantages: String({ minLength: 1 })

        /// The respective strongly recommended advantages text from the source book.
        let strongly_recommended_advantages: String({ minLength: 1 })

        /// The respective strongly recommended disadvantages text from the source book.
        let strongly_recommended_disadvantages: String({ minLength: 1 })

        let errata: Errata?
    }
}

@Embedded
public struct BaseValues {

  /// The race’s life point base value.
  let life_points: Integer()

  /// The race’s Spirit base value.
  let spirit: Integer()

  /// The race’s Toughness base value.
  let toughness: Integer()

  /// The race’s tactical movement rate.
  let movement: Integer()
  }

const AttributeAdjustments = TypeAlias(import.meta.url, {
  name: "AttributeAdjustments",
  comment: "Describes how to raise or lower maximum attribute values during character creation.",
  type: () =>
    Object(
      {
        fixed: Optional({
          comment: "The values by which the maximum of the respective attribute is modified.",
          type: Array(IncludeIdentifier(FixedAttributeAdjustment), { minItems: 1 }),
        }),
        selectable: Optional({
          comment: `An array of attribute maximum modifiers, where the attribute they apply to is selected from a list of options.

The array only permits a single entry because no race specified more than one selectable attribute adjustment so far. But the schema allows for multiple entries to be future-proof.`,
          type: Array(IncludeIdentifier(SelectableAttributeAdjustment), {
            minItems: 1,
            maxItems: 1,
          }),
        }),
      },
      { minProperties: 1 }
    ),
})

/// A value by which the maximum of the respective attribute is modified.
@Embedded
public struct FixedAttributeAdjustment {

  /// The attribute the modifier applies to.
  let id: AttributeIdentifier()

  /// The value by which the specified attribute’s maximum is modified (negative values will lower the maximum).
  let value: Integer()
  }

/// A value that will be added to the current maximum of the selected attribute that has been chosen from the listed attributes (negative values will lower the maximum).
@Embedded
public struct SelectableAttributeAdjustment {

  /// A list of attributes the player has to choose from.
  let list: Array(AttributeIdentifier(), { minItems: 2 })

  /// The value by which the selected attribute’s maximum is modified (negative values will lower the maximum).
  let value: Integer()
  }

/// Configuration for random weight generation.
@Embedded
public struct RandomWeightGeneration {

  /// The base value used for random weight. The height subtrahend; in case of `Height - 110 + 2D6` it is `110`.
  let base: Integer({ minimum: 1 })

  /// The dice used for random weight.
  let random: Array(IncludeIdentifier(WeightDice), { minItems: 1 })
  }

@Embedded
public struct WeightDice {

  /// Number of dice of the same type. Example: 2 in 2D6.
  let number: Integer({ minimum: 1 })

  /// Number of sides on every die. Example: 6 in 2D6.
  @Relationship(DieType)
  let sides: DieType.ID

  /// The strategy how to offset the randomly generated values against the base value. Either they are all added or subtracted or even results are added and odd results are subtracted.
  @Relationship(WeightDiceOffsetStrategy)
  let offset_strategy: WeightDiceOffsetStrategy.ID
  }

/// The strategy how to offset the randomly generated values against the base value. Either they are all added or subtracted or even results are added and odd results are subtracted.
@ModelEnum
public enum WeightDiceOffsetStrategy {
    case Add
    case Subtract
    case AddEvenSubtractOdd
}

const RaceVariants = TypeAlias(import.meta.url, {
  name: "RaceVariants",
  comment:
    "A list of available race variants where one has to be selected. If no variants are to be selected, a single variant with no name has to be provided which will be used as the missing values for the base race.",
  type: () => Array(RaceVariantIdentifier(), { minItems: 1 }),
})

@Model
public struct RaceVariant {

  /// The associated race.
  let race: RaceIdentifier()
  /// The list of common cultures.
  let common_cultures: Array(CultureIdentifier(), { minItems: 1 })?
      common_advantages: Optional({
        comment: "A list of common advantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),
      common_disadvantages: Optional({
        comment: "A list of common disadvantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),
      uncommon_advantages: Optional({
        comment: "A list of uncommon advantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),
      uncommon_disadvantages: Optional({
        comment: "A list of uncommon disadvantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),
  /// An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.
  let hair_color: Array(HairColorIdentifier(), { minItems: 20, maxItems: 20 })?
  /// An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.
  let eye_color: Array(EyeColorIdentifier(), { minItems: 20, maxItems: 20 })?

  /// Configuration for random height generation.
  @Relationship(RandomHeightGeneration)
  let height: RandomHeightGeneration.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // RaceVariantTranslation
          name: Required({
            comment:
              "The race variant’s name. If this is the only variant for a base race and thus just provides the missing information without actually being able to select, fill in the name of the base race.",
            type: String({ minLength: 1 }),
          }),

        /// The respective common advantages text from the source book.
        let common_advantages: String({ minLength: 1 })?

        /// The respective common disadvantages text from the source book.
        let common_disadvantages: String({ minLength: 1 })?

        /// The respective uncommon advantages text from the source book.
        let uncommon_advantages: String({ minLength: 1 })?

        /// The respective uncommon disadvantages text from the source book.
        let uncommon_disadvantages: String({ minLength: 1 })?
    }
}

/// Configuration for random height generation.
@Embedded
public struct RandomHeightGeneration {

  /// The base value used for random height.
  let base: Integer({ minimum: 1 })

  /// The dice used for random height.
  let random: Array(IncludeIdentifier(Dice), { minItems: 1 })
  }
