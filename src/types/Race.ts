import {
  Array,
  Entity,
  Enum,
  EnumCase,
  GenIncludeIdentifier,
  IncludeIdentifier,
  Integer,
  NestedEntityMap,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage.js"
import { Dice, DieType } from "./_Dice.js"
import {
  AdvantageIdentifier,
  AttributeIdentifier,
  CultureIdentifier,
  DisadvantageIdentifier,
  EyeColorIdentifier,
  HairColorIdentifier,
  RaceIdentifier,
  RaceVariantIdentifier,
} from "./_Identifier.js"
import { ExperienceLevel } from "./ExperienceLevel.js"
import { NestedLocaleMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Race = Entity(import.meta.url, {
  name: "Race",
  namePlural: "Races",
  type: () =>
    Object({
      ap_value: Required({
        comment: "How many Adventure Points does the race cost during character creation?",
        type: Integer({ minimum: 0 }),
      }),
      base_values: Required({
        comment: "The race’s base values.",
        type: IncludeIdentifier(BaseValues),
      }),
      attribute_adjustments: Required({
        comment:
          "Describes how to raise or lower maximum attribute values during character creation.",
        type: IncludeIdentifier(AttributeAdjustments),
      }),
      automatic_advantages: Optional({
        comment:
          "A list of automatically applied advantages. This does only work for advantages with no further configuration such as level or special selection.",
        type: Array(IncludeIdentifier(AutomaticAdvantage), { minItems: 1 }),
      }),
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
      weight: Required({
        comment: "Configuration for random weight generation.",
        type: IncludeIdentifier(RandomWeightGeneration),
      }),
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
      src,
      translations: NestedLocaleMap(
        Required,
        "RaceTranslation",
        Object({
          name: Required({
            comment: "The race’s name.",
            type: String({ minLength: 1 }),
          }),
          attribute_adjustments: Required({
            comment: "The respective attribute adjustments text from the source book.",
            type: String({ minLength: 1 }),
          }),
          automatic_advantages: Optional({
            comment: "The respective automatic advantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          strongly_recommended_advantages: Optional({
            comment: "The respective strongly recommended advantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          strongly_recommended_disadvantages: Optional({
            comment: "The respective strongly recommended disadvantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const BaseValues = TypeAlias(import.meta.url, {
  name: "BaseValues",
  type: () =>
    Object({
      life_points: Required({
        comment: "The race’s life point base value.",
        type: Integer(),
      }),
      spirit: Required({
        comment: "The race’s Spirit base value.",
        type: Integer(),
      }),
      toughness: Required({
        comment: "The race’s Toughness base value.",
        type: Integer(),
      }),
      movement: Required({
        comment: "The race’s tactical movement rate.",
        type: Integer(),
      }),
    }),
})

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

const FixedAttributeAdjustment = TypeAlias(import.meta.url, {
  name: "FixedAttributeAdjustment",
  comment: "A value by which the maximum of the respective attribute is modified.",
  type: () =>
    Object({
      id: Required({
        comment: "The attribute the modifier applies to.",
        type: AttributeIdentifier(),
      }),
      value: Required({
        comment:
          "The value by which the specified attribute’s maximum is modified (negative values will lower the maximum).",
        type: Integer(),
      }),
    }),
})

const SelectableAttributeAdjustment = TypeAlias(import.meta.url, {
  name: "SelectableAttributeAdjustment",
  comment:
    "A value that will be added to the current maximum of the selected attribute that has been chosen from the listed attributes (negative values will lower the maximum).",
  type: () =>
    Object({
      list: Required({
        comment: "A list of attributes the player has to choose from.",
        type: Array(AttributeIdentifier(), { minItems: 2 }),
      }),
      value: Required({
        comment:
          "The value by which the selected attribute’s maximum is modified (negative values will lower the maximum).",
        type: Integer(),
      }),
    }),
})

const AutomaticAdvantage = TypeAlias(import.meta.url, {
  name: "AutomaticAdvantage",
  comment:
    "An advantage that is automatically applied to the character after selecting the race. This does only work for advantages with no further configuration such as level or special selection.",
  type: () =>
    Object({
      id: Required({
        comment: "The automatic advantage.",
        type: AdvantageIdentifier(),
      }),
    }),
})

const RandomWeightGeneration = TypeAlias(import.meta.url, {
  name: "RandomWeightGeneration",
  comment: "Configuration for random weight generation.",
  type: () =>
    Object({
      base: Required({
        comment:
          "The base value used for random weight. The height subtrahend; in case of `Height - 110 + 2D6` it is `110`.",
        type: Integer({ minimum: 1 }),
      }),
      random: Required({
        comment: "The dice used for random weight.",
        type: Array(IncludeIdentifier(WeightDice), { minItems: 1 }),
      }),
    }),
})

const WeightDice = TypeAlias(import.meta.url, {
  name: "WeightDice",
  type: () =>
    Object({
      number: Required({
        comment: "Number of dice of the same type. Example: 2 in 2D6.",
        type: Integer({ minimum: 1 }),
      }),
      sides: Required({
        comment: "Number of sides on every die. Example: 6 in 2D6.",
        type: IncludeIdentifier(DieType),
      }),
      offset_strategy: Required({
        comment:
          "The strategy how to offset the randomly generated values against the base value. Either they are all added or subtracted or even results are added and odd results are subtracted.",
        type: IncludeIdentifier(WeightDiceOffsetStrategy),
      }),
    }),
})

const WeightDiceOffsetStrategy = Enum(import.meta.url, {
  name: "WeightDiceOffsetStrategy",
  comment:
    "The strategy how to offset the randomly generated values against the base value. Either they are all added or subtracted or even results are added and odd results are subtracted.",
  values: () => ({
    Add: EnumCase({ type: null }),
    Subtract: EnumCase({ type: null }),
    AddEvenSubtractOdd: EnumCase({ type: null }),
  }),
})

const RaceVariants = TypeAlias(import.meta.url, {
  name: "RaceVariants",
  comment:
    "A list of available race variants where one has to be selected. If no variants are to be selected, a single variant with no name has to be provided which will be used as the missing values for the base race.",
  type: () => Array(RaceVariantIdentifier(), { minItems: 1 }),
})

export const RaceVariant = Entity(import.meta.url, {
  name: "RaceVariant",
  namePlural: "RaceVariants",
  type: () =>
    Object({
      race: Required({
        comment: "The associated race.",
        type: RaceIdentifier(),
      }),
      common_cultures: Optional({
        comment: "The list of common cultures.",
        type: Array(CultureIdentifier(), { minItems: 1 }),
      }),
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
      hair_color: Optional({
        comment:
          "An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.",
        type: Array(HairColorIdentifier(), { minItems: 20, maxItems: 20 }),
      }),
      eye_color: Optional({
        comment:
          "An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.",
        type: Array(EyeColorIdentifier(), { minItems: 20, maxItems: 20 }),
      }),
      height: Required({
        comment: "Configuration for random height generation.",
        type: IncludeIdentifier(RandomHeightGeneration),
      }),
      translations: NestedLocaleMap(
        Required,
        "RaceVariantTranslation",
        Object({
          name: Required({
            comment:
              "The race variant’s name. If this is the only variant for a base race and thus just provides the missing information without actually being able to select, fill in the name of the base race.",
            type: String({ minLength: 1 }),
          }),
          common_advantages: Optional({
            comment: "The respective common advantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          common_disadvantages: Optional({
            comment: "The respective common disadvantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          uncommon_advantages: Optional({
            comment: "The respective uncommon advantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          uncommon_disadvantages: Optional({
            comment: "The respective uncommon disadvantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  parentReferenceKey: "race",
  displayName: {},
})

const RandomHeightGeneration = TypeAlias(import.meta.url, {
  name: "RandomHeightGeneration",
  comment: "Configuration for random height generation.",
  type: () =>
    Object({
      base: Required({
        comment: "The base value used for random height.",
        type: Integer({ minimum: 1 }),
      }),
      random: Required({
        comment: "The dice used for random height.",
        type: Array(IncludeIdentifier(Dice), { minItems: 1 }),
      }),
    }),
})
