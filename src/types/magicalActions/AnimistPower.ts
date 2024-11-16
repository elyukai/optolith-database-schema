/**
 * @main AnimistPower
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import { FamiliarsTrickFixedOneTimeCostTranslation } from "../FamiliarsTrick.js"
import { OldParameter } from "../_ActivatableSkill.js"
import { CheckResultBasedDuration, DurationUnitValue } from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../_NonEmptyString.js"
import { AnimistPowerPrerequisites } from "../_Prerequisite.js"
import { ResponsiveTextOptional } from "../_ResponsiveText.js"
import { AnimistTribeReference, PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck } from "../_SkillCheck.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Animist Power
 */
export type AnimistPower = {
  /**
   * The animist power's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * Measurable parameters of a animist power.
   */
  parameters: AnimistPowerPerformanceParameters

  /**
   * The associated property.
   */
  property: PropertyReference

  /**
   * The tribe traditions the animist power is available to. It may be available
   * to all or only specific tribes.
   *
   * If no tribe tradition is given, the animist power is generally available to
   * all tribe traditions.
   * @uniqueItems
   */
  tribe_tradition: AnimistTribeReference[]

  /**
   * States which column is used to improve the skill. It is a fixed value or
   * depends on the primary patron.
   */
  improvement_cost: AnimistPowerImprovementCost

  prerequisites?: AnimistPowerPrerequisites

  /**
   * The animist power can have multiple levels. Each level is skilled
   * separately. A previous level must be on at least 10 so that the next higher
   * level can be activated and skilled. A higher level cannot be skilled higher
   * than a lower level. Each level also adds an effect text to the text of the
   * first level.
   * @minItems 1
   */
  levels?: AnimistPowerLevel[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AnimistPowerTranslation>
}

export type AnimistPowerTranslation = {
  /**
   * The name of the animist power.
   */
  name: NonEmptyString

  /**
   * The full name of the entry as stated in the sources. Only use when
   * `name` needs to be different from full name for text generation
   * purposes.
   */
  name_in_library?: NonEmptyString

  /**
   * The effect description may be either a plain text or a text that is
   * divided by a list of effects for each quality level. It may also be a
   * list for each two quality levels.
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

  /**
   * A prerequisites text.
   * @deprecated
   */
  prerequisites?: string

  errata?: Errata
}

export type AnimistPowerLevel = {
  /**
   * The level number.
   * @integer
   * @minimum 2
   */
  level: number

  /**
   * The source references, if different than the references for level 1.
   */
  src?: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AnimistPowerLevelTranslation>
}

export type AnimistPowerLevelTranslation = {
  /**
   * An additional effect description for this level.
   */
  effect: NonEmptyMarkdown
}

/**
 * Measurable parameters of a animist power.
 */
export type AnimistPowerPerformanceParameters =
  | { tag: "OneTime"; one_time: OneTimeAnimistPowerPerformanceParameters }
  | { tag: "Sustained"; sustained: SustainedAnimistPowerPerformanceParameters }

export type OneTimeAnimistPowerPerformanceParameters = {
  /**
   * The AE cost value, either a flat value or defined dynamically by the
   * primary patron.
   */
  cost: OneTimeAnimistPowerCost

  /**
   * The duration.
   */
  duration: OneTimeAnimistPowerDuration
}

export type OneTimeAnimistPowerCost =
  | { tag: "Fixed"; fixed: FixedOneTimeAnimistPowerCost }
  | { tag: "ByPrimaryPatron"; by_primary_patron: OneTimeAnimistPowerCostByPrimaryPatron }

export type FixedOneTimeAnimistPowerCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * If defined, half of the AE cost `value` has to be paid each interval.
   */
  interval?: DurationUnitValue
}

export type OneTimeAnimistPowerCostByPrimaryPatron = {
  /**
   * If defined, half of the AE cost `value` has to be paid each interval.
   */
  interval?: DurationUnitValue

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<AnimistPowerCostByPrimaryPatronTranslation>
}

export type OneTimeAnimistPowerDuration =
  | { tag: "Immediate"; immediate: {} }
  | { tag: "Fixed"; fixed: FamiliarsTrickFixedOneTimeCostTranslation }
  | { tag: "CheckResultBased"; check_result_based: CheckResultBasedDuration }

export type SustainedAnimistPowerPerformanceParameters = {
  /**
   * The AE cost value, either a flat value or defined dynamically by the
   * primary patron.
   */
  cost: SustainedAnimistPowerCost
}

export type SustainedAnimistPowerCost =
  | { tag: "Fixed"; fixed: FixedSustainedAnimistPowerCost }
  | { tag: "ByPrimaryPatron"; by_primary_patron: SustainedAnimistPowerCostByPrimaryPatron }

export type FixedSustainedAnimistPowerCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * Half of the AE cost `value` has to be paid each interval.
   */
  interval: DurationUnitValue
}

export type SustainedAnimistPowerCostByPrimaryPatron = {
  /**
   * Half of the AE cost `value` has to be paid each interval.
   */
  interval: DurationUnitValue

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<AnimistPowerCostByPrimaryPatronTranslation>
}

export type AnimistPowerCostByPrimaryPatronTranslation = {
  /**
   * A note, appended to the generated string in parenthesis.
   */
  note: ResponsiveTextOptional
}

export type AnimistPowerImprovementCost =
  | { tag: "Fixed"; fixed: ImprovementCost }
  | { tag: "ByPrimaryPatron"; by_primary_patron: {} }

export const config: TypeConfig<AnimistPower, AnimistPower["id"], "AnimistPower"> = {
  name: "AnimistPower",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("AnimistPower"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
