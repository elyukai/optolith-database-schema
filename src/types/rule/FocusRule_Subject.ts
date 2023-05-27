/**
 * @main Subject
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"

/**
 * Subjects or Subject Areas are the categories of Focus Rules.
 * @title Subject
 */
export type Subject = {
  /**
   * The subject's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<SubjectTranslation>
}

export type SubjectTranslation = {
  /**
   * The subject.
   */
  name: NonEmptyString
}

export const config: TypeConfig<Subject> = {
  name: "Subject",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Subject"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
