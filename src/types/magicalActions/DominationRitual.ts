/**
 * @main DominationRitual
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import { CheckResultBasedDuration, DurationUnit, IndefiniteDurationTranslation } from "../_ActivatableSkillDuration.js"
import { Effect } from "../_ActivatableSkillEffect.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { ResponsiveText } from "../_ResponsiveText.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Domination Ritual
 */
export type DominationRitual = {
  /**
   * The domination ritual's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * In some cases, the target's Spirit or Toughness is applied as a penalty.
   */
  check_penalty?: SkillCheckPenalty

  /**
   * Measurable parameters of a curse.
   */
  parameters: DominationRitualPerformanceParameters

  /**
   * The associated property.
   */
  property: PropertyReference

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DominationRitualTranslation>
}

export type DominationRitualTranslation = {
  /**
   * The name of the domination ritual.
   */
  name: NonEmptyString

  /**
   * The effect description may be either a plain text or a text that is
   * divided by a list of effects for each quality level. It may also be a
   * list for each two quality levels.
   */
  effect: Effect

  /**
   * @deprecated
   */
  cost: { full: string; abbr: string }

  /**
   * @deprecated
   */
  duration: { full: string; abbr: string }

  errata?: Errata
}

/**
 * Measurable parameters of a curse.
 */
export type DominationRitualPerformanceParameters = {
  /**
   * The AE cost.
   */
  cost: DominationRitualCost

  /**
   * The duration.
   */
  duration: DominationRitualDuration
}

export type DominationRitualCost = {
  /**
   * The initial skill modification identifier/level.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  initial_modification_level: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations?: LocaleMap<DominationRitualCostTranslation>
}

export type DominationRitualCostTranslation = {
  /**
   * AE cost in addition to the normal AE cost.
   */
  additional: ResponsiveText
}

export type DominationRitualDuration =
  | { tag: "Fixed"; fixed: FixedDominationRitualDuration }
  | { tag: "CheckResultBased"; check_result_based: CheckResultBasedDuration }
  | { tag: "Indefinite"; indefinite: IndefiniteDominationRitualDuration }

export type FixedDominationRitualDuration = {
  /**
   * The (unitless) duration value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The unit of the `value`.
   */
  unit: DurationUnit
}

export type IndefiniteDominationRitualDuration = {
  /**
   * Specified if the duration has a maximum time span.
   */
  maximum?: MaximumIndefiniteCurseDuration

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefiniteDurationTranslation>
}

export type MaximumIndefiniteCurseDuration =
  | { tag: "Fixed"; fixed: FixedDominationRitualDuration }
  | { tag: "CheckResultBased"; check_result_based: CheckResultBasedDuration }

export const config: TypeConfig<DominationRitual, DominationRitual["id"], "DominationRitual"> = {
  name: "DominationRitual",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("DominationRitual"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
