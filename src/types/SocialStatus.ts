/**
 * @main SocialStatus
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Social Status
 */
export type SocialStatus = {
  /**
   * The social status' identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<SocialStatusTranslation>
}

export type SocialStatusTranslation = {
  /**
   * The social status name.
   */
  name: NonEmptyString
}

export const config: TypeConfig<SocialStatus> = {
  name: "SocialStatus",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("SocialStatus"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
