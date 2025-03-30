/**
 * @main Curse
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import { OldParameter } from "../_ActivatableSkill.js"
import { IndefiniteOneTimeCost } from "../_ActivatableSkillCost.js"
import {
  CheckResultBasedDuration,
  DurationUnit,
  IndefiniteDurationTranslation,
} from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { ResponsiveText, ResponsiveTextOptional } from "../_ResponsiveText.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Curse
 */
export type Curse = {
  /**
   * The curse's identifier. An unique, increasing integer.
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
  parameters: CursePerformanceParameters

  /**
   * The associated property.
   */
  property: PropertyReference

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<CurseTranslation>
}

export type CurseTranslation = {
  /**
   * The name of the curse.
   */
  name: NonEmptyString

  /**
   * The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
   */
  effect: ActivatableSkillEffect

  /**
   * @deprecated
   */
  cost: OldParameter

  /**
   * @deprecated
   */
  duration: OldParameter

  errata?: Errata
}

/**
 * Measurable parameters of a curse.
 */
export type CursePerformanceParameters = {
  /**
   * The AE cost.
   */
  cost: CurseCost

  /**
   * The duration.
   */
  duration: CurseDuration
}

export type CurseCost =
  | { tag: "Fixed"; fixed: FixedCurseCost }
  | { tag: "Indefinite"; indefinite: IndefiniteOneTimeCost }

export type FixedCurseCost = {
  /**
   * The (temporary) AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<FixedCurseCostTranslation>
}

/**
 * @minProperties 1
 */
export type FixedCurseCostTranslation = {
  /**
   * The cost have to be per a specific countable entity, e.g. `8 KP per person`.
   */
  per?: ResponsiveText

  /**
   * A note, appended to the generated string in parenthesis.
   */
  note?: ResponsiveTextOptional
}

export type CurseDuration =
  | { tag: "Immediate"; immediate: {} }
  | { tag: "Fixed"; fixed: FixedCurseDuration }
  | { tag: "CheckResultBased"; check_result_based: CheckResultBasedDuration }
  | { tag: "Indefinite"; indefinite: IndefiniteCurseDuration }

export type FixedCurseDuration = {
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

export type IndefiniteCurseDuration = {
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
  | { tag: "Fixed"; fixed: FixedCurseDuration }
  | { tag: "CheckResultBased"; check_result_based: CheckResultBasedDuration }

export const config: TypeConfig<Curse, Curse["id"], "Curse"> = {
  name: "Curse",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Curse"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
