/**
 * @main Service
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"

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
   * @minProperties 1
   */
  translations: LocaleMap<ServiceTranslation>
}

export type ServiceAvailability =
  | { tag: "SummonedCreatures" }
  | { tag: "Monstrosities" }

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

export const validateSchema = validateSchemaCreator<Service>(import.meta.url)
