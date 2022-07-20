/**
 * @main Ceremony
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { SlowPerformanceParameters } from "./_ActivatableSkill.js"
import { Effect } from "./_ActivatableSkillEffect.js"
import { TargetCategory } from "./_ActivatableSkillTargetCategory.js"
import { SkillTradition } from "./_Blessed.js"
import { Enhancements } from "./_Enhancements.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { LiturgyPrerequisites } from "./_Prerequisite.js"
import { SkillCheck, SkillCheckPenalty } from "./_SkillCheck.js"

/**
 * @title Ceremony
 */
export type Ceremony = {
  /**
   * The ceremony's identifier. An unique, increasing integer.
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
   * Measurable parameters of a ceremony.
   */
  parameters: SlowPerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory

  /**
   * The tradition(s) the ceremony is available for. Note that general aspects
   * do not have an associated tradition and thus need to be defined in a
   * special way.
   * @minItems 1
   */
  traditions: SkillTradition[]

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  prerequisites?: LiturgyPrerequisites

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<CeremonyTranslation>

  enhancements?: Enhancements
}

export type CeremonyTranslation ={
  /**
   * The name of the ceremony.
   */
  name: NonEmptyString

  /**
   * A compressed name of the ceremony for use in small areas (e.g. on
   * character sheet). Should only be defined if the `name` does not fit on
   * character sheet.
   */
  name_compressed?: NonEmptyString

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


export const validateSchema = validateSchemaCreator<Ceremony>(import.meta.url)
