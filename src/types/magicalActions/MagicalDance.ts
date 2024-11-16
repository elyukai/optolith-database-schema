/**
 * @main MagicalDance
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import { FamiliarsTrickFixedOneTimeCostTranslation } from "../FamiliarsTrick.js"
import { OldParameter } from "../_ActivatableSkill.js"
import { CheckResultBasedModifier } from "../_ActivatableSkillCheckResultBased.js"
import { IndefiniteOneTimeCostTranslation } from "../_ActivatableSkillCost.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck } from "../_SkillCheck.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { MusicDuration, MusicTraditionReference } from "./_MusicTradition.js"

/**
 * @title Magical Dance
 */
export type MagicalDance = {
  /**
   * The magical dance's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * Measurable parameters of a magical dance.
   */
  parameters: MagicalDancePerformanceParameters

  /**
   * The associated property.
   */
  property: PropertyReference

  /**
   * The music tradition(s) the magical dance is available for. This also
   * defines the different names in each music tradition.
   * @minItems 1
   */
  music_tradition: MusicTraditionReference[]

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<MagicalDanceTranslation>
}

export type MagicalDanceTranslation = {
  /**
   * The name of the magical dance.
   */
  name: NonEmptyString

  /**
   * The effect description may be either a plain text or a text that is
   * divided by a list of effects for each quality level. It may also be a
   * list for each two quality levels.
   */
  effect: ActivatableSkillEffect

  /**
   * @deprecated
   */
  duration: OldParameter

  /**
   * @deprecated
   */
  cost: OldParameter

  errata?: Errata
}

/**
 * Measurable parameters of a magical dance.
 */
export type MagicalDancePerformanceParameters = {
  duration: MusicDuration
  cost: MagicalDanceCost
}

export type MagicalDanceCost =
  | { tag: "Fixed"; fixed: FixedMagicalDanceCost }
  | { tag: "Indefinite"; indefinite: IndefiniteMagicalDanceCost }

export type FixedMagicalDanceCost = {
  /**
   * The (temporary) AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<FamiliarsTrickFixedOneTimeCostTranslation>
}

export type IndefiniteMagicalDanceCost = {
  /**
   * Specified if the indefinite description's result value is to be
   * modified by a certain number.
   */
  modifier?: CheckResultBasedModifier

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefiniteOneTimeCostTranslation>
}

export const config: TypeConfig<MagicalDance, MagicalDance["id"], "MagicalDance"> = {
  name: "MagicalDance",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("MagicalDance"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
