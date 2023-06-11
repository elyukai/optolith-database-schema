/**
 * @main SexPractice
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

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

export const config: TypeConfig<SexPractice> = {
  name: "SexPractice",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("SexPractice"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
