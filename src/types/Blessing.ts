/**
 * @main Blessing
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { DurationUnit } from "./_ActivatableSkillDuration.js"
import { FixedRange } from "./_ActivatableSkillRange.js"
import { TargetCategory } from "./_ActivatableSkillTargetCategory.js"
import { LocaleMap } from "./_LocaleMap.js"
import { ResponsiveText } from "./_ResponsiveText.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

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
  | { tag: "Self"; self: {} }
  | { tag: "Touch"; touch: {} }
  | { tag: "Fixed"; fixed: FixedRange }

export type BlessingDuration =
  | { tag: "Immediate"; immediate: {} }
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
   */
  description: ResponsiveText
}

export const config: TypeConfig<Blessing, Blessing["id"], "Blessing"> = {
  name: "Blessing",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Blessing"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
