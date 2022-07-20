/**
 * @main SexPractice
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Sex Practice
 */
export type SexPractice = {
  /**
   * The sex practice's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<SexPracticeTranslation>
}

export type SexPracticeTranslation = {
  /**
   * The sex practice's name.
   */
  name: NonEmptyString

  /**
   * The rules of the sex practice.
   */
  rules: NonEmptyString

  /**
   * How long a round of this sex practice takes.
   */
  duration: NonEmptyString

  /**
   * Prerequisites of participants and environment. Do not specify if the
   * sex practice has no prerequisites.
   */
  prerequisites?: NonEmptyString

  /**
   * Effects of a failed *Seduction* check.
   */
  failed: NonEmptyString
}

export const validateSchema = validateSchemaCreator<SexPractice>(import.meta.url)
