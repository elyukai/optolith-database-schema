/**
 * @main MetaCondition
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * Meta Conditions are rule elements that work like conditions in the sense that
 * they have four levels with different effects, but which are not explicitly
 * listed as conditions.
 * @title Meta Condition
 */
export type MetaCondition = {
  /**
   * The meta condition's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<MetaConditionTranslation>
}

export type MetaConditionTranslation = {
  /**
   * The meta condition's name.
   */
  name: NonEmptyString

  /**
   * Additional rules for the meta condition, if applicable.
   */
  rules?: NonEmptyMarkdown

  /**
   * The effects for level 1 to 4.
   * @minItems 4
   * @maxItems 4
   */
  effects: NonEmptyMarkdown[]

  errata?: Errata
}

export const config: TypeConfig<MetaCondition, MetaCondition["id"], "MetaCondition"> = {
  name: "MetaCondition",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("MetaCondition"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
