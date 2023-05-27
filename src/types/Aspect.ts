/**
 * @main Aspect
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Aspect
 */
export type Aspect = {
  /**
   * The aspect's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AspectTranslation>
}

export type AspectTranslation = {
  /**
   * The aspect name.
   */
  name: NonEmptyString

  /**
   * The aspect's name appended to the simple name (not `name_in_library`)
   * of the special ability *Master of (Aspect)*.
   */
  master_of_aspect_suffix?: NonEmptyString
}

export const config: TypeConfig<Aspect> = {
  name: "Aspect",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Aspect"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
