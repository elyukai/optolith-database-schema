/**
 * This file defines some shared types for different diseases.
 * @title Disease (shared)
 */

import { Errata } from "./source/_Erratum.js"
import { LocaleMap } from "./_LocaleMap.js"

/**
 * Depending on the disease, apply Spirit or Toughness as a penalty to the
 * disease roll. It may also happen that the lower of both is applied as a
 * penalty.
 */
export type Resistance =
  | { tag: "Spirit" }
  | { tag: "Toughness" }
  | { tag: "LowerOfSpiritAndToughness" }

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
   * @minProperties 1
   */
  translations: LocaleMap<CauseTranslation>
}

type CauseTranslation = {
  /**
   * The name of the cause.
   * @minLength 1
   */
  name: string

  /**
   * The chance to get infected by this cause. If present for this
   * language, this overrides the universal `chance` field; they cannot be
   * used at the same time.
   * @minLength 1
   */
  chance?: string

  /**
   * An additional note about this cause.
   * @minLength 1
   */
  note?: string
}

export type DiseaseTranslation = {
  /**
   * The name of the disease.
   * @minLength 1
   */
  name: string

  /**
   * A list of alternative names.
   * @minItems 1
   */
  alternative_names?: AlternativeName[]

  /**
   * The disease’s progress, in detail.
   * @markdown
   * @minLength 1
   */
  progress: string

  /**
   * After infection, how much time passes before symptoms appear?
   * @minLength 1
   */
  incubation_time: string

  /**
   * The damage caused by the disease. If the disease check fails, apply the
   * lessened effects.
   */
  damage: Lessenable

  /**
   * The duration of the disease. If the disease check fails, use the
   * lessened duration.
   */
  duration: Lessenable

  /**
   * Special information about the disease.
   * @markdown
   * @minLength 1
   */
  special?: string

  /**
   * Methods known to lessen the disease’s progress or relieve symptoms.
   * @markdown
   * @minLength 1
   */
  treatment: string

  /**
   * Known remedies for the disease.
   * @markdown
   * @minLength 1
   */
  cure: string

  errata?: Errata
}

type AlternativeName = {
  /**
   * An alternative name of the disease.
   * @minLength 1
   */
  name: string

  /**
   * The region where this alternative name is used.
   * @minLength 1
   */
  region?: string
}

/**
 * An effect or other parameter that may be lessened by a failed disease check.
 */
type Lessenable = {
  /**
   * The default value. In the source, it's the text before the
   * slash.
   * @markdown
   * @minLength 1
   */
  default: string

  /**
   * The lessened value. In the source, it's the text after the
   * slash. Some entries may not have a lessened value.
   * @markdown
   * @minLength 1
   */
  lessened?: string
}
