/**
 * @main LiturgicalChant
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { FastPerformanceParameters } from "./_ActivatableSkill.js"
import { Effect } from "./_ActivatableSkillEffect.js"
import { TargetCategory } from "./_ActivatableSkillTargetCategory.js"
import { SkillTradition } from "./_Blessed.js"
import { Enhancements } from "./_Enhancements.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { LiturgyPrerequisites } from "./_Prerequisite.js"
import { SkillCheck, SkillCheckPenalty } from "./_SkillCheck.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Liturgical Chant
 */
export type LiturgicalChant = {
  /**
   * The liturgical chant's identifier. An unique, increasing integer.
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
   * Measurable parameters of a liturgical chant.
   */
  parameters: FastPerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory

  /**
   * The tradition(s) the liturgical chant is available for. Note that general
   * aspects do not have an associated tradition and thus need to be defined in
   * a special way.
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
   */
  translations: LocaleMap<LiturgicalChantTranslation>

  enhancements?: Enhancements
}

export type LiturgicalChantTranslation = {
  /**
   * The name of the liturgical chant.
   */
  name: NonEmptyString

  /**
   * A compressed name of the liturgical chant for use in small areas (e.g.
   * on character sheet). Should only be defined if the `name` does not fit
   * on character sheet.
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

export const config: TypeConfig<LiturgicalChant> = {
  name: "LiturgicalChant",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("LiturgicalChant"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
