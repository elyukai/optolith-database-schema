/**
 * @main Race
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage.js"
import { Dice } from "./_Dice.js"
import { AdvantageIdentifier, DisadvantageIdentifier, ExperienceLevelIdentifier } from "./_Identifier.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { AdvantageReference, AttributeReference, CultureReference, EyeColorReference, HairColorReference } from "./_SimpleReferences.js"

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
  attribute_adjustments: AttributeAdjustments

  /**
   * A list of automatically applied advantages. This does only work for
   * advantages with no further configuration such as level or special
   * selection.
   * @minItems 1
   */
  automatic_advantages?: AdvantageReference[]

  /**
   * A list of strongly recommended advantages.
   * @minItems 1
   */
  strongly_recommended_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * A list of strongly recommended disadvantages.
   * @minItems 1
   */
  strongly_recommended_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * A list of common advantages. If common advantages are defined by race
   * variants, leave this field empty. It is overridden by the same field in
   * race variants.
   * @minItems 1
   */
  common_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * A list of common disadvantages. If common disadvantages are defined by race
   * variants, leave this field empty. It is overridden by the same field in
   * race variants.
   * @minItems 1
   */
  common_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * A list of uncommon advantages. If uncommon advantages are defined by race
   * variants, leave this field empty. It is overridden by the same field in
   * race variants.
   * @minItems 1
   */
  uncommon_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * A list of uncommon disadvantages. If uncommon disadvantages are defined by
   * race variants, leave this field empty. It is overridden by the same field
   * in race variants.
   * @minItems 1
   */
  uncommon_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * Configuration for random weight generation.
   */
  weight: Weight

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
  variant_dependent: RaceVariantDependent

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<RaceTranslation>
}

/**
 * The race’s base values.
 */
export type BaseValues = {
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

/**
 * Describes how to raise or lower maximum attribute values during character
 * creation.
 */
export type AttributeAdjustments = AttributeAdjustment[]

/**
 * An array of attribute maximum modifiers. The value will be added to the
 * current maximum of the selected attribute that has been chosen from the
 * listed attributes (negative values will lower the maximum).
 * @minItems 1
 */
export type AttributeAdjustment = {
  /**
   * The value by which the selected attribute's maximum is modified
   * (negative values will lower the maximum).
   * @integer
   */
  value: number

  /**
   * A list of attributes the player has to choose from. If only one attribute
   * is listed, no attribute has to be chosen.
   * @minItems 1
   */
  list: AttributeReference[]
}

/**
 * Configuration for random weight generation.
 */
export type Weight = {
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
  random: WeightDice[]
}

export type WeightDice = Dice & {
  /**
   * The strategy how to offset the randomly generated values against the
   * base value. Either they are all added or subtracted or even results are
   * added and odd results are subtracted.
   */
  offset_strategy: WeightDiceOffsetStrategy
}

/**
 * The strategy how to offset the randomly generated values against the
 * base value. Either they are all added or subtracted or even results are
 * added and odd results are subtracted.
 */
export enum WeightDiceOffsetStrategy {
  Add = "Add",
  Subtract = "Subtract",
  AddEvenSubtractOdd = "AddEvenSubtractOdd",
}

export type StartingAgeConfigForExperienceLevel = {
  /**
   * The selected experience level's identifier.
   */
  experience_level_id: ExperienceLevelIdentifier

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
  random: Dice
}

/**
 * The race may have variants and associated configuration for each variant.
 * If the race is plain (has no variants), the values that would otherwise be
 * defined in the variant configuration need to be set for the whole race.
 * This excludes common and uncommon advantages and disadvantages, since they
 * may be defined for the whole race even if variants exist.
 */
export type RaceVariantDependent =
  | { tag: "HasVariants"; has_variants: RaceVariants }
  | { tag: "Plain"; plain: ValuesForRaceWithoutVariants }

/**
 * A list of available race variants.
 * @minItems 1
 */
export type RaceVariants = RaceVariant[]

export type ValuesForRaceWithoutVariants = {
  /**
   * The list of common cultures.
   * @minItems 1
   */
  common_cultures: CultureReference[]

  /**
   * An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.
   * @minItems 20
   * @maxItems 20
   */
  hair_color: HairColorReference[]

  /**
   * An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.
   * @minItems 20
   * @maxItems 20
   */
  eye_color: EyeColorReference[]

  /**
   * Configuration for random height generation.
   */
  height: Height
}

/**
 * @title Race Variant
 */
export type RaceVariant = {
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
  common_cultures: CultureReference[]

  /**
   * A list of common advantages. If common advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.
   * @minItems 1
   */
  common_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * A list of common disadvantages. If common disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.
   * @minItems 1
   */
  common_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * A list of uncommon advantages. If uncommon advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.
   * @minItems 1
   */
  uncommon_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * A list of uncommon disadvantages. If uncommon disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.
   * @minItems 1
   */
  uncommon_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.
   * @minItems 20
   * @maxItems 20
   */
  hair_color: HairColorReference[]

  /**
   * An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.
   * @minItems 20
   * @maxItems 20
   */
  eye_color: EyeColorReference[]

  /**
   * Configuration for random height generation.
   */
  height: Height

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<RaceVariantTranslation>
}

/**
 * Configuration for random height generation.
 */
export type Height = {
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
  random: Dice[]
}

export type RaceVariantTranslation = {
  /**
   * The race variant's name.
   */
  name: NonEmptyString

  /**
   * The respective common advantages text from the source book. If common
   * advantages are defined by the base race, leave this field empty. This field
   * overrides the same field of the base race, if both are defined.
   */
  common_advantages?: NonEmptyString

  /**
   * The respective common disadvantages text from the source book. If common
   * disadvantages are defined by the base race, leave this field empty. This
   * field overrides the same field of the base race, if both are defined.
   */
  common_disadvantages?: NonEmptyString

  /**
   * The respective uncommon advantages text from the source book. If uncommon
   * advantages are defined by the base race, leave this field empty. This field
   * overrides the same field of the base race, if both are defined.
   */
  uncommon_advantages?: NonEmptyString

  /**
   * The respective uncommon disadvantages text from the source book. If
   * uncommon disadvantages are defined by the base race, leave this field
   * empty. This field overrides the same field of the base race, if both are
   * defined.
   */
  uncommon_disadvantages?: NonEmptyString
}

export type RaceTranslation = {
  /**
   * The race's name.
   */
  name: NonEmptyString

  /**
   * The respective attribute adjustments text from the source book.
   */
  attribute_adjustments: NonEmptyString

  /**
   * The respective automatic advantages text from the source book.
   */
  automatic_advantages?: NonEmptyString

  /**
   * The respective strongly recommended advantages text from the source book.
   */
  strongly_recommended_advantages?: NonEmptyString

  /**
   * The respective strongly recommended disadvantages text from the source
   * book.
   */
  strongly_recommended_disadvantages?: NonEmptyString

  /**
   * The respective common advantages text from the source book. If common
   * advantages are defined by race variants, leave this field empty. It is
   * overridden by the same field in race variants.
   */
  common_advantages?: NonEmptyString

  /**
   * The respective common disadvantages text from the source book. If common
   * disadvantages are defined by race variants, leave this field empty. It is
   * overridden by the same field in race variants.
   */
  common_disadvantages?: NonEmptyString

  /**
   * The respective uncommon advantages text from the source book. If uncommon
   * advantages are defined by race variants, leave this field empty. It is
   * overridden by the same field in race variants.
   */
  uncommon_advantages?: NonEmptyString

  /**
   * The respective uncommon disadvantages text from the source book. If
   * uncommon disadvantages are defined by race variants, leave this field
   * empty. It is overridden by the same field in race variants.
   */
  uncommon_disadvantages?: NonEmptyString

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<Race>(import.meta.url)
