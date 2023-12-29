/**
 * @main PactCategory
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Pact Category
 */
export type PactCategory = {
  /**
   * The pact category's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Types of creatures in this category.
   * @minItems 1
   */
  types: PactType[]

  /**
   * Domains in this category.
   * @minItems 1
   */
  domains: PactDomain[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<PactCategoryTranslation>
}

export type PactCategoryTranslation = {
  /**
   * The name of the pact category.
   */
  name: NonEmptyString

  errata?: Errata
}

export type PactType = {
  /**
   * The type's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<PactTypeTranslation>
}

export type PactTypeTranslation = {
  /**
   * The name of the type.
   */
  name: NonEmptyString
}

export type PactDomain = {
  /**
   * The domain's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<PactDomainTranslation>
}

export type PactDomainTranslation = {
  /**
   * The name of the domain.
   */
  name: NonEmptyString
}

export const config: TypeConfig<PactCategory, PactCategory["id"], "PactCategory"> = {
  name: "PactCategory",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("PactCategory"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
