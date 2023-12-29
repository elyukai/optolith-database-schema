/**
 * @main Service
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
 * @title Service of Summoned Creatures and Monstrosities
 */
export type Service = {
  /**
   * The service's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Defines for which creature type(s) the service is available.
   * @minItems 1
   * @uniqueItems
   */
  availability: ServiceAvailability[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ServiceTranslation>
}

export type ServiceAvailability =
  | "SummonedCreatures"
  | "Monstrosities"

export type ServiceTranslation = {
  /**
   * The name of the service.
   */
  name: NonEmptyString

  /**
   * The description of the service.
   */
  description: NonEmptyMarkdown

  errata?: Errata
}

export const config: TypeConfig<Service, Service["id"], "Service"> = {
  name: "Service",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Service"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
