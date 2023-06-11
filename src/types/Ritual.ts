/**
 * @main Ritual
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { SlowPerformanceParameters } from "./_ActivatableSkill.js"
import { Effect } from "./_ActivatableSkillEffect.js"
import { TargetCategory } from "./_ActivatableSkillTargetCategory.js"
import { Enhancements } from "./_Enhancements.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LocaleMap } from "./_LocaleMap.js"
import { SpellworkPrerequisites } from "./_Prerequisite.js"
import { PropertyReference } from "./_SimpleReferences.js"
import { SkillCheck, SkillCheckPenalty } from "./_SkillCheck.js"
import { Traditions } from "./_Spellwork.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Ritual
 */
export type Ritual = {
  /**
   * The ritual's identifier. An unique, increasing integer.
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
   * Measurable parameters of a ritual.
   */
  parameters: SlowPerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory

  /**
   * The associated property.
   */
  property: PropertyReference

  /**
   * The tradition(s) the ritual is available for. It may be *generally*
   * available to all traditions or it may be only familiar in specific
   * traditions.
   */
  traditions: Traditions

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  prerequisites?: SpellworkPrerequisites

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<RitualTranslation>

  enhancements?: Enhancements
}

export type RitualTranslation = {
  /**
   * The name of the ritual.
   * @minLength 1
   */
  name: string

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

export const config: TypeConfig<Ritual> = {
  name: "Ritual",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Ritual"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
