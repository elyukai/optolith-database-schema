/**
 * @main SkillGroup
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { SkillCheck } from "./_SkillCheck.js"

/**
 * @title Skill Group
 */
 export type SkillGroup = {
  /**
   * The skill group's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill group check's attributes.
   */
  check: SkillCheck

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<SkillGroupTranslation>
}

export type SkillGroupTranslation = {
  /**
   * The skill group's name.
   */
  name: NonEmptyString

  /**
   * The skill group's long name.
   */
  long_name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<SkillGroup>(import.meta.url)
