/**
 * @main JesterTrick
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { CheckResultBasedDuration, DurationUnit } from "../_ActivatableSkillDuration.js"
import { Effect } from "../_ActivatableSkillEffect.js"
import { TargetCategory } from "../_ActivatableSkillTargetCategory.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"

/**
 * @title Jester Trick
 */
export type JesterTrick = {
  /**
   * The jester trick's identifier. An unique, increasing integer.
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
   * Measurable parameters of a jester trick.
   */
  parameters: JesterTrickPerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory

  /**
   * The associated property.
   */
  property: PropertyReference

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<JesterTrickTranslation>
}

export type JesterTrickTranslation = {
  /**
   * The name of the jester trick.
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
  casting_time: { full: string; abbr: string }

  /**
   * @deprecated
   */
  cost: { full: string; abbr: string }

  /**
   * @deprecated
   */
  range: { full: string; abbr: string }

  /**
   * @deprecated
   */
  duration: { full: string; abbr: string }

  /**
   * @deprecated
   */
  target: string

  errata?: Errata
}

/**
 * Measurable parameters of a geode ritual.
 */
export type JesterTrickPerformanceParameters = {
  /**
   * The casting time.
   */
  casting_time: JesterTrickCastingTime

  /**
   * The AE cost.
   */
  cost: JesterTrickCost

  /**
   * The range.
   */
  range: JesterTrickRange

  /**
   * The duration.
   */
  duration: JesterTrickDuration
}

export type JesterTrickCastingTime = {
  /**
   * The casting time in actions.
   * @integer
   * @minimum 1
   */
  value: number
}

export type JesterTrickCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number
}

export type JesterTrickRange =
  | { tag: "Touch" }
  | { tag: "Self" }
  | { tag: "Fixed"; fixed: FixedJesterTrickRange }

export type FixedJesterTrickRange = {
  /**
   * The range in steps/m.
   * @integer
   * @minimum 1
   */
  value: number
}

export type JesterTrickDuration =
  | { tag: "Immediate" }
  | { tag: "Fixed"; fixed: FixedJesterTrickDuration }
  | { tag: "CheckResultBased"; check_result_based: CheckResultBasedDuration }

export type FixedJesterTrickDuration = {
  /**
   * The (unitless) duration.
   * @integer
   * @minimum 2
   */
  value: number

  /**
   * The duration unit.
   */
  unit: DurationUnit
}

export const validateSchema = validateSchemaCreator<JesterTrick>(import.meta.url)
