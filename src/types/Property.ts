/**
 * @main Property
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { SkillCheck } from "./_SkillCheck.js"

/**
 * @title Property
 */
export type Property = {
  /**
   * The property's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The property check's attributes. Only the properties from the Core Rules
   * have defined property checks.
   */
  check?: SkillCheck

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<PropertyTranslation>
}

export type PropertyTranslation = {
  /**
   * The property's name.
   */
  name: NonEmptyString
}

export const config: TypeConfig<Property> = {
  name: "Property",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Property"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
