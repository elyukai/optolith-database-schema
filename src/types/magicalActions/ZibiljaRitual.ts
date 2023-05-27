/**
 * @main ZibiljaRitual
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import { OneTimePerformanceParameters } from "../_ActivatableSkill.js"
import { CastingTime, SlowSkillNonModifiableCastingTime } from "../_ActivatableSkillCastingTime.js"
import { Effect } from "../_ActivatableSkillEffect.js"
import { TargetCategory } from "../_ActivatableSkillTargetCategory.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Zibilja Ritual
 */
export type ZibiljaRitual = {
  /**
   * The zibilja ritual's identifier. An unique, increasing integer.
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
   * Measurable parameters of a zibilja ritual.
   */
  parameters: ZibiljaRitualPerformanceParameters

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
  translations: LocaleMap<ZibiljaRitualTranslation>
}

export type ZibiljaRitualTranslation = {
  /**
   * The name of the zibilja ritual.
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

export type ZibiljaRitualPerformanceParameters = OneTimePerformanceParameters<CastingTime<SlowSkillNonModifiableCastingTime>>

export const config: TypeConfig<ZibiljaRitual> = {
  name: "ZibiljaRitual",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("ZibiljaRitual"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
