/**
 * @main Race
 */

import { Errata } from "./source/_Erratum"
import { PublicationRefs } from "./source/_PublicationRef"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage"

/**
 * A playable race with stats and skills.
 * @title Race
 */
export type Race = {
  /**
   * The race's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * How many Adventure Points does the race cost during character creation?
   * @integer
   * @minimum 0
   */
  ap_value: number

  /**
   * The race’s base values.
   */
  base_values: BaseValues

  /**
   * Describes how to raise or lower maximum attribute values during character
   * creation.
   */
  attribute_adjustments: AttributeAdjustments.Config

  /**
   * A list of automatically applied advantages. This does only work for
   * advantages with no further configuration such as level or special
   * selection.
   * @minItems 1
   */
  automatic_advantages?: AutomaticAdvantage[]

  /**
   * A list of strongly recommended advantages.
   * @minItems 1
   */
  strongly_recommended_advantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of strongly recommended disadvantages.
   * @minItems 1
   */
  strongly_recommended_disadvantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of common advantages. If common advantages are defined by race
   * variants, leave this field empty. It is overridden by the same field in
   * race variants.
   * @minItems 1
   */
  common_advantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of common disadvantages. If common disadvantages are defined by race
   * variants, leave this field empty. It is overridden by the same field in
   * race variants.
   * @minItems 1
   */
  common_disadvantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of uncommon advantages. If uncommon advantages are defined by race
   * variants, leave this field empty. It is overridden by the same field in
   * race variants.
   * @minItems 1
   */
  uncommon_advantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of uncommon disadvantages. If uncommon disadvantages are defined by
   * race variants, leave this field empty. It is overridden by the same field
   * in race variants.
   * @minItems 1
   */
  uncommon_disadvantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * Configuration for random weight generation.
   */
  weight: Weight.Config

  /**
   * Defines the starting ages for the race. It depends on the selected
   * experience level.
   * @minItems 7
   * @maxItems 7
   */
  starting_age: StartingAgeConfigForExperienceLevel[]

  /**
   * The race may have variants and associated configuration for each variant.
   * If the race is plain (has no variants), the values that would otherwise be
   * defined in the variant configuration need to be set for the whole race.
   * This excludes common and uncommon advantages and disadvantages, since they
   * may be defined for the whole race even if variants exist.
   */
  variant_dependent: VariantDependent

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
   translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: RaceTranslation
  }
}

/**
 * The race’s base values.
 */
type BaseValues = {
  /**
   * The race’s life point base value.
   * @integer
   */
  life_points: number

  /**
   * The race’s Spirit base value.
   * @integer
   */
  spirit: number

  /**
   * The race’s Toughness base value.
   * @integer
   */
  toughness: number

  /**
   * The race’s tactical movement rate.
   * @integer
   * @minimum 1
   */
  movement: number
}

namespace AttributeAdjustments {
  /**
   * Describes how to raise or lower maximum attribute values during character
   * creation.
   */
   export type Config = {
    /**
     * An array of attribute maximum modifiers. The value will be added to the
     * current maximum of the ID-specified attribute (negative values will lower
     * the maximum).
     * @minItems 1
     */
    fix?: Fix[]

    /**
     * Used if the player has to choose between different modifiers.
     */
    selection: Selection
  }

  type Fix = {
    /**
     * The attribute's identifier.
     * @integer
     * @minimum 1
     * @maximum 8
     */
    id: number

    /**
     * The value by which the attribute's maximum is modified (negative values
     * will lower the maximum).
     * @integer
     */
    value: number
  }

  type Selection = {
    /**
     * The value by which the selected attribute's maximum is modified
     * (negative values will lower the maximum).
     * @integer
     */
    value: number

    /**
     * A list of attributes the player has to choose from.
     * @minItems 2
     */
    list: SelectionItem[]
  }

  type SelectionItem = {
    /**
     * The attribute's identifier.
     * @integer
     * @minimum 1
     * @maximum 8
     */
    id: number
  }
}

type AutomaticAdvantage = {
  /**
   * The advantage's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

namespace Weight {
  /**
   * Configuration for random weight generation.
   */
  export type Config = {
    /**
     * The base value used for random weight. The height subtrahend; in case of
     * `Height - 110 + 2D6` it is `110`.
     * @integer
     * @minimum 1
     */
    base: number

    /**
     * The dice used for random weight.
     * @minItems 1
     */
    random: Die[]
  }

  type Die = {
    /**
     * Number of dice of the same type. Example: 2 in 2D6.
     * @integer
     * @minimum 1
     */
    number: number

    /**
     * Number of sides on every die. Example: 6 in 2D6.
     */
    sides: DieType

    /**
     * The strategy how to offset the randomly generated values against the
     * base value. Either they are all added or subtracted or even results are
     * added and odd results are subtracted.
     */
    offset_strategy: OffsetStrategy
  }

  /**
   * The strategy how to offset the randomly generated values against the
   * base value. Either they are all added or subtracted or even results are
   * added and odd results are subtracted.
   */
  type OffsetStrategy =
    | { tag: "Add" }
    | { tag: "Subtract" }
    | { tag: "AddEvenSubtractOdd" }
}

type StartingAgeConfigForExperienceLevel = {
  /**
   * The selected experience level's identifier.
   * @integer
   * @minimum 1
   * @maximum 7
   */
  experience_level_id: number

  /**
   * The base value for the selected experience level.
   * @integer
   * @minimum 1
   */
  base: number

  /**
   * The random value for the selected experience level. It is going to be
   * added to the base value.
   */
  random: Die
}

/**
 * The race may have variants and associated configuration for each variant.
 * If the race is plain (has no variants), the values that would otherwise be
 * defined in the variant configuration need to be set for the whole race.
 * This excludes common and uncommon advantages and disadvantages, since they
 * may be defined for the whole race even if variants exist.
 */
type VariantDependent =
  | {
    tag: "HasVariants"
    /**
     * A list of available race variants.
     * @minItems 1
     */
    variants: RaceVariant[]
  }
  | {
    tag: "Plain"

    /**
     * The list of common cultures.
     * @minItems 1
     */
    common_cultures: CommonCulture[]

    /**
     * An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.
     * @minItems 20
     * @maxItems 20
     */
    hair_color: HairColor[]

    /**
     * An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.
     * @minItems 20
     * @maxItems 20
     */
    eye_color: EyeColor[]

    /**
     * Configuration for random height generation.
     */
    height: Height
  }

/**
 * @title Race Variant
 */
type RaceVariant = {
  /**
   * An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The list of common cultures.
   * @minItems 1
   */
  common_cultures: CommonCulture[]

  /**
   * A list of common advantages. If common advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.
   * @minItems 1
   */
  common_advantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of common disadvantages. If common disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.
   * @minItems 1
   */
  common_disadvantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of uncommon advantages. If uncommon advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.
   * @minItems 1
   */
  uncommon_advantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of uncommon disadvantages. If uncommon disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.
   * @minItems 1
   */
  uncommon_disadvantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.
   * @minItems 20
   * @maxItems 20
   */
  hair_color: HairColor[]

  /**
   * An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.
   * @minItems 20
   * @maxItems 20
   */
  eye_color: EyeColor[]

  /**
   * Configuration for random height generation.
   */
  height: Height

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: RaceVariantTranslation
  }
}

type CommonCulture = {
  /**
   * The culture's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

type HairColor = {
  /**
   * The hair color's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

type EyeColor = {
  /**
   * The hair color's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

/**
 * Configuration for random height generation.
 */
type Height = {
  /**
   * The base value used for random height.
   * @integer
   * @minimum 1
   */
  base: number

  /**
   * The dice used for random height.
   * @minItems 1
   */
  random: Die[]
}

type RaceVariantTranslation = {
  /**
   * The race variant's name.
   * @minLength 1
   */
  name: string

  /**
   * The respective common advantages text from the source book. If common
   * advantages are defined by the base race, leave this field empty. This field
   * overrides the same field of the base race, if both are defined.
   * @minLength 1
   */
  common_advantages?: string

  /**
   * The respective common disadvantages text from the source book. If common
   * disadvantages are defined by the base race, leave this field empty. This
   * field overrides the same field of the base race, if both are defined.
   * @minLength 1
   */
  common_disadvantages?: string

  /**
   * The respective uncommon advantages text from the source book. If uncommon
   * advantages are defined by the base race, leave this field empty. This field
   * overrides the same field of the base race, if both are defined.
   * @minLength 1
   */
  uncommon_advantages?: string

  /**
   * The respective uncommon disadvantages text from the source book. If
   * uncommon disadvantages are defined by the base race, leave this field
   * empty. This field overrides the same field of the base race, if both are
   * defined.
   * @minLength 1
   */
  uncommon_disadvantages?: string
}

type RaceTranslation = {
  /**
   * The race's name.
   * @minLength 1
   */
  name: string

  /**
   * The respective attribute adjustments text from the source book.
   * @minLength 1
   */
  attribute_adjustments: string

  /**
   * The respective automatic advantages text from the source book.
   * @minLength 1
   */
  automatic_advantages?: string

  /**
   * The respective strongly recommended advantages text from the source book.
   * @minLength 1
   */
  strongly_recommended_advantages?: string

  /**
   * The respective strongly recommended disadvantages text from the source book.
   * @minLength 1
   */
  strongly_recommended_disadvantages?: string

  /**
   * The respective common advantages text from the source book. If common
   * advantages are defined by race variants, leave this field empty. It is
   * overridden by the same field in race variants.
   * @minLength 1
   */
  common_advantages?: string

  /**
   * The respective common disadvantages text from the source book. If common
   * disadvantages are defined by race variants, leave this field empty. It is
   * overridden by the same field in race variants.
   * @minLength 1
   */
  common_disadvantages?: string

  /**
   * The respective uncommon advantages text from the source book. If uncommon
   * advantages are defined by race variants, leave this field empty. It is
   * overridden by the same field in race variants.
   * @minLength 1
   */
  uncommon_advantages?: string

  /**
   * The respective uncommon disadvantages text from the source book. If
   * uncommon disadvantages are defined by race variants, leave this field
   * empty. It is overridden by the same field in race variants.
   * @minLength 1
   */
  uncommon_disadvantages?: string

  errata?: Errata
}

/**
 * @title Die
 */
type Die = {
  /**
   * Number of dice of the same type. Example: 2 in 2D6.
   * @integer
   * @minimum 1
   */
  number: number

  /**
   * Number of sides on every die. Example: 6 in 2D6.
   */
  sides: DieType
}

/**
 * Number of sides on every dice. Example: 6 in 2D6.
 */
enum DieType {
  D3 = 3,
  D6 = 6,
  D20 = 20,
}
