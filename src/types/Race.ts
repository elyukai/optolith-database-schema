/**
 * @main Race
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage.js"
import { Dice } from "./_Dice.js"
import { AdvantageIdentifier, AttributeIdentifier, DisadvantageIdentifier, ExperienceLevelIdentifier } from "./_Identifier.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { AdvantageReference, AttributeReference, CultureReference, EyeColorReference, HairColorReference } from "./_SimpleReferences.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

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
   * A list of available race variants where one has to be selected. If no
   * variants are to be selected, a single variant with no name has to be provided
   * which will be used as the missing values for the base race.
   */
  variants: RaceVariants

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
 * @minProperties 1
 */
export type AttributeAdjustments = {
  /**
   * The values by which the maximum of the respective attribute is modified.
   * @minItems 1
   */
  fixed?: FixedAttributeAdjustment[]

  /**
   * An array of attribute maximum modifiers, where the attribute they apply to
   * is selected from a list of options.
   *
   * The array only permits a single entry because no race specified more than
   * one selectable attribute adjustment so far. But the schema allows for
   * multiple entries to be future-proof.
   * @minItems 1
   * @maxItems 1
   */
  selectable?: SelectableAttributeAdjustment[]
}

/**
 * A value by which the maximum of the respective attribute is modified.
 */
export type FixedAttributeAdjustment = {
  /**
   * The attribute the modifier applies to.
   */
  id: AttributeIdentifier

  /**
   * The value by which the specified attribute's maximum is modified
   * (negative values will lower the maximum).
   * @integer
   */
  value: number
}

/**
 * A value that will be added to the current maximum of the selected attribute
 * that has been chosen from the listed attributes (negative values will lower
 * the maximum).
 * @minItems 1
 */
export type SelectableAttributeAdjustment = {
  /**
   * A list of attributes the player has to choose from.
   * @minItems 2
   */
  list: AttributeReference[]

  /**
   * The value by which the selected attribute's maximum is modified
   * (negative values will lower the maximum).
   * @integer
   */
  value: number
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
export type WeightDiceOffsetStrategy =
  | "Add"
  | "Subtract"
  | "AddEvenSubtractOdd"

export type StartingAgeConfigForExperienceLevel = {
  /**
   * The selected experience level's identifier.
   */
  id: ExperienceLevelIdentifier

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
 * A list of available race variants where one has to be selected. If no
 * variants are to be selected, a single variant with no name has to be provided
 * which will be used as the missing values for the base race.
 * @minItems 1
 */
export type RaceVariants = RaceVariant[]

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
   * A list of common advantages.
   * @minItems 1
   */
  common_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * A list of common disadvantages.
   * @minItems 1
   */
  common_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * A list of uncommon advantages.
   * @minItems 1
   */
  uncommon_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * A list of uncommon disadvantages.
   * @minItems 1
   */
  uncommon_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * An array containing 20 (numeric) hair color identifiers. The array also
   * represents the 20-sided die for a random hair color.
   * @minItems 20
   * @maxItems 20
   */
  hair_color: HairColorReference[]

  /**
   * An array containing 20 (numeric) eye color identifiers. The array also
   * represents the 20-sided die for a random eye color.
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
   * The race variant's name. If left empty, it defaults to the base race name.
   * This can be used if the race has no (visible) variants so that a single
   * variant has to be provided.
   */
  name?: NonEmptyString

  /**
   * The respective common advantages text from the source book.
   */
  common_advantages?: NonEmptyString

  /**
   * The respective common disadvantages text from the source book.
   */
  common_disadvantages?: NonEmptyString

  /**
   * The respective uncommon advantages text from the source book.
   */
  uncommon_advantages?: NonEmptyString

  /**
   * The respective uncommon disadvantages text from the source book.
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

  errata?: Errata
}

export const config: TypeConfig<Race, Race["id"], "Race"> = {
  name: "Race",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Race"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
