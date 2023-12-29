/**
 * @main SkillGroup
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
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

export const config: TypeConfig<SkillGroup, SkillGroup["id"], "SkillGroup"> = {
  name: "SkillGroup",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("SkillGroup"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
