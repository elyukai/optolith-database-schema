/**
 * @main Condition
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Condition
 */
export type Condition = {
  /**
   * The condition's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ConditionTranslation>
}

export type ConditionTranslation = {
  /**
   * The condition's name.
   */
  name: NonEmptyString

  /**
   * Additional rules for the condition, if applicable.
   */
  rules?: NonEmptyMarkdown

  /**
   * The effects for level 1 to 4.
   */
  effects: [NonEmptyMarkdown, NonEmptyMarkdown, NonEmptyMarkdown, NonEmptyMarkdown]

  errata?: Errata
}

export const config: TypeConfig<Condition> = {
  name: "Condition",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Condition"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
