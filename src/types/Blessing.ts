/**
 * @main Blessing
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { DurationUnit } from "./_ActivatableSkillDuration.js"
import { FixedRange } from "./_ActivatableSkillRange.js"
import { TargetCategory } from "./_ActivatableSkillTargetCategory.js"
import { LocaleMap } from "./_LocaleMap.js"

/**
 * @title Blessing
 */
export type Blessing = {
  /**
   * The blessing's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Measurable parameters of a blessing.
   */
  parameters: BlessingPerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<BlessingTranslation>
}

export type BlessingTranslation = {
  /**
   * The name of the blessing.
   * @minLength 1
   */
  name: string

  /**
   * The effect description.
   * @markdown
   * @minLength 1
   */
  effect: string

  /**
   * @deprecated
   */
  range: string

  /**
   * @deprecated
   */
  duration: string

  /**
   * @deprecated
   */
  target: string

  errata?: Errata
}

/**
 * Measurable parameters of a blessing.
 */
export type BlessingPerformanceParameters = {
  range: BlessingRange
  duration: BlessingDuration
}

export type BlessingRange =
  | { tag: "Self" }
  | { tag: "Touch" }
  | { tag: "Fixed"; fixed: FixedRange }

export type BlessingDuration =
  | { tag: "Immediate" }
  | { tag: "Fixed"; fixed: FixedBlessingDuration }
  | { tag: "Indefinite"; indefinite: IndefiniteBlessingDuration }

export type FixedBlessingDuration = {
  /**
   * The (unitless) duration.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The duration unit.
   */
  unit: DurationUnit
}

export type IndefiniteBlessingDuration = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefiniteDurationTranslation>
}

export type IndefiniteDurationTranslation = {
  /**
   * A description of the duration.
   * @minLength 1
   */
  description: string
}

export const validateSchema = validateSchemaCreator<Blessing>(import.meta.url)
