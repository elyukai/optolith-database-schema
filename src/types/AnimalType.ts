/**
 * @main AnimalType
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Animal Type
 */
export type AnimalType = {
  /**
   * The animal type's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AnimalTypeTranslation>
}

export type AnimalTypeTranslation = {
  /**
   * The animal type name.
   */
  name: NonEmptyString
}

export const config: TypeConfig<AnimalType> = {
  name: "AnimalType",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("AnimalType"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
