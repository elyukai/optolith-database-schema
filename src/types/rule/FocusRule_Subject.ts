/**
 * @main Subject
 */

import { validateSchemaCreator } from "../../validation/schema.js"
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
   * @minProperties 1
   */
  translations: LocaleMap<SubjectTranslation>
}

export type SubjectTranslation = {
  /**
   * The subject.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<Subject>(import.meta.url)
