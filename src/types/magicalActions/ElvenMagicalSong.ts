/**
 * @main ElvenMagicalSong
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import { OldParameter } from "../_ActivatableSkill.js"
import { DurationUnitValue } from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { ResponsiveText, ResponsiveTextReplace } from "../_ResponsiveText.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { MusicalSkillReference } from "./_SkillReference.js"

/**
 * @title Elven Magical Song
 */
export type ElvenMagicalSong = {
  /**
   * The elven magical song's identifier. An unique, increasing integer.
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
   * To enhance their songs, elves can make a check on either *Singing
   * (Two-Voiced Singing)* or *Music (appropriate application)* before making
   * the check for the song.
   * @minItems 1
   * @maxItems 2
   * @uniqueItems
   */
  skill: MusicalSkillReference[]

  /**
   * Measurable parameters of an elven magical song.
   */
  parameters: ElvenMagicalSongPerformanceParameters

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
  translations: LocaleMap<ElvenMagicalSongTranslation>
}

export type ElvenMagicalSongTranslation = {
  /**
   * The name of the elven magical song.
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
  cost: OldParameter

  errata?: Errata
}

/**
 * Measurable parameters of an elven magical song.
 */
export type ElvenMagicalSongPerformanceParameters = {
  /**
   * The AE cost.
   */
  cost: ElvenMagicalSongCost
}

export type ElvenMagicalSongCost = {
  /**
   * The (temporary) AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * Specified if the AE cost `value` has to be paid for each time interval.
   */
  interval?: DurationUnitValue

  /**
   * A permanent AE cost, independent from a possible interval.
   */
  permanent?: ElvenMagicalSongPermanentCost

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<ElvenMagicalSongCostTranslation>
}

export type ElvenMagicalSongPermanentCost = {
  /**
   * The permanent AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<ElvenMagicalSongPermanentCostTranslation>
}

export type ElvenMagicalSongPermanentCostTranslation = {
  /**
   * A replacement string for the permanent cost.
   */
  replacement: ResponsiveTextReplace
}

export type ElvenMagicalSongCostTranslation = {
  /**
   * The cost have to be per a specific countable entity, e.g. `8 AE
   * per person`.
   */
  per: ResponsiveText
}

export const config: TypeConfig<ElvenMagicalSong, ElvenMagicalSong["id"], "ElvenMagicalSong"> = {
  name: "ElvenMagicalSong",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("ElvenMagicalSong"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
