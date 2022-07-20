/**
 * @main GeodeRitual
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { SlowSkillCastingTimeUnit } from "../SkillModificationLevel.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { CostMap } from "../_ActivatableSkillCost.js"
import { CheckResultBasedDuration, DurationUnit } from "../_ActivatableSkillDuration.js"
import { Effect } from "../_ActivatableSkillEffect.js"
import { TargetCategory } from "../_ActivatableSkillTargetCategory.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { GeodeRitualPrerequisites } from "../_Prerequisite.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck } from "../_SkillCheck.js"

/**
 * @title Geode Ritual
 */
export type GeodeRitual = {
  /**
   * The geode ritual's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * Measurable parameters of a geode ritual.
   */
  parameters: GeodeRitualPerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory

  /**
   * The associated property.
   */
  property: PropertyReference

  prerequisites?: GeodeRitualPrerequisites

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<GeodeRitualTranslation>
}

export type GeodeRitualTranslation = {
  /**
   * The name of the geode ritual.
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
export type GeodeRitualPerformanceParameters = {
  /**
   * The casting time.
   */
  casting_time: GeodeRitualCastingTime

  /**
   * The AE cost.
   */
  cost: GeodeRitualCost

  /**
   * The range.
   */
  range: GeodeRitualRange

  /**
   * The duration.
   */
  duration: GeodeRitualDuration
}

export type GeodeRitualCastingTime = {
  /**
   * The (unitless) casting time.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The casting time unit.
   */
  unit: SlowSkillCastingTimeUnit
}

export type GeodeRitualCost =
  | { tag: "Fixed"; fixed: FixedGeodeRitualCost }
  | { tag: "Map"; map: CostMap }

export type FixedGeodeRitualCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number
}

export type GeodeRitualRange =
  | { tag: "Self" }
  | { tag: "Fixed"; fixed: FixedGeodeRitualRange }

export type FixedGeodeRitualRange = {
  /**
   * The range in steps/m.
   * @integer
   * @minimum 1
   */
  value: number
}

export type GeodeRitualDuration =
  | { tag: "Immediate" }
  | { tag: "Fixed"; fixed: FixedGeodeRitualDuration }
  | { tag: "CheckResultBased"; check_result_based: CheckResultBasedDuration }

export type FixedGeodeRitualDuration = {
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

export const validateSchema = validateSchemaCreator<GeodeRitual>(import.meta.url)
