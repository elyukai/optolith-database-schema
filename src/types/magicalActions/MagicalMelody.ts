/**
 * @main MagicalMelody
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import { Effect } from "../_ActivatableSkillEffect.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { MusicDuration, MusicTraditionReference } from "./_MusicTradition.js"
import { MusicalSkillReference } from "./_SkillReference.js"

/**
 * @title Magical Melody
 */
export type MagicalMelody = {
  /**
   * The magical melody's identifier. An unique, increasing integer.
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
   * Arcane bards must make a *Singing (area of application)* or *Music (area of
   * application)* check for each magical melody.
   * @minItems 1
   * @maxItems 2
   * @uniqueItems
   */
  skill: MusicalSkillReference[]

  /**
   * Measurable parameters of a magical melody.
   */
  parameters: MagicalMelodyPerformanceParameters

  /**
   * The associated property.
   */
  property: PropertyReference

  /**
   * The music tradition(s) the magical melody is available for. This also
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
  translations: LocaleMap<MagicalMelodyTranslation>
}

export type MagicalMelodyTranslation = {
  /**
   * The name of the magical melody.
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
  duration: { full: string; abbr: string }

  /**
   * @deprecated
   */
  cost: { full: string; abbr: string }

  errata?: Errata
}

/**
 * Measurable parameters of a magical melody.
 */
export type MagicalMelodyPerformanceParameters = {
  duration: MusicDuration
  cost: MagicalMelodyCost
}

export type MagicalMelodyCost =
  | { tag: "Fixed"; fixed: FixedMagicalMelodyCost }
  | { tag: "FirstPerson"; first_person: FirstPersonMagicalMelodyCost }

export type FixedMagicalMelodyCost = {
  /**
   * The (temporary) AE cost value.
   * @integer
   * @minimum 1
   */
  value: number
}

export type FirstPersonMagicalMelodyCost = {
  /**
   * The (temporary) AE cost value for the first targeted person. The AE
   * cost for each additional person is half this value.
   * @integer
   * @minimum 1
   * @multipleOf 2
   */
  value: number
}

export const config: TypeConfig<MagicalMelody> = {
  name: "MagicalMelody",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("MagicalMelody"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
