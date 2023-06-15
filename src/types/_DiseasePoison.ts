/**
 * This file defines some shared types for different diseases and poisons.
 * @title Disease (shared)
 */

import { AlternativeName } from "./_AlternativeNames.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"
import { Errata } from "./source/_Erratum.js"

/**
 * Depending on the disease, apply Spirit or Toughness as a penalty to the
 * disease roll. It may also happen that the lower of both is applied as a
 * penalty.
 */
export type Resistance =
  | "Spirit"
  | "Toughness"
  | "LowerOfSpiritAndToughness"

/**
 * What causes the disease? The GM rolls 1D20 to see if a character gets
 * infected. If the infection check succeeds, the GM makes a disease check to
 * determine the severity of the infection.
 */
export type Cause = {
  /**
   * The chance to get infected by this cause, in percent.
   * @integer
   * @minimum 5
   * @multipleOf 5
   * @maximum 100
   */
  chance?: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<CauseTranslation>
}

export type CauseTranslation = {
  /**
   * The name of the cause.
   * @minLength 1
   */
  name: string

  /**
   * The chance to get infected by this cause. If present for this
   * language, this overrides the universal `chance` field; they cannot be
   * used at the same time.
   */
  chance?: NonEmptyString

  /**
   * An additional note about this cause.
   */
  note?: NonEmptyString
}

export type DiseaseTranslation = {
  /**
   * The name of the disease.
   */
  name: NonEmptyString

  /**
   * A list of alternative names.
   * @minItems 1
   */
  alternative_names?: AlternativeName[]

  /**
   * The disease’s progress, in detail.
   */
  progress: NonEmptyMarkdown

  /**
   * After infection, how much time passes before symptoms appear?
   */
  incubation_time: NonEmptyString

  /**
   * The damage caused by the disease. If the disease check fails, apply the
   * lessened effects.
   */
  damage: Reduceable

  /**
   * The duration of the disease. If the disease check fails, use the
   * lessened duration.
   */
  duration: Reduceable

  /**
   * Special information about the disease.
   */
  special?: NonEmptyMarkdown

  /**
   * Methods known to lessen the disease’s progress or relieve symptoms.
   */
  treatment: NonEmptyMarkdown

  /**
   * Known remedies for the disease.
   */
  cure: NonEmptyMarkdown

  errata?: Errata
}

/**
 * An effect or other parameter that may be reduced by a failed disease check
 * for lessening or a degraded poison.
 *
 * This streamlines the wording for diseases and poison by using a unified
 * wording for *lessened* (disease) and *degraded* (poison).
 */
export type Reduceable<Content = NonEmptyMarkdown> = {
  /**
   * The default value. In the source, it's the text before the slash.
   */
  default: Content

  /**
   * The reduced value. In the source, it's the text after the slash. Some
   * entries may not have a reduced value.
   */
  reduced?: Content
}
