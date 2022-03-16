/**
 * @main PactCategory
 */

import { validateSchemaCreator } from "../validation/schema.js"
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
  types: {
    /**
     * The type's identifier. An unique, increasing integer.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * All translations for the entry, identified by IETF language tag (BCP47).
     * @minProperties 1
     */
    translations: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       */
      [localeId: string]: {
        /**
         * The name of the type.
         * @minLength 1
         */
        name: string
      }
    }
  }[]

  /**
   * Domains in this category.
   * @minItems 1
   */
   domains: {
    /**
     * The domain's identifier. An unique, increasing integer.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * All translations for the entry, identified by IETF language tag (BCP47).
     * @minProperties 1
     */
    translations: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       */
      [localeId: string]: {
        /**
         * The name of the domain.
         * @minLength 1
         */
        name: string
      }
    }
  }[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The name of the pact category.
       * @minLength 1
       */
      name: string

      errata?: Errata
    }
  }
}

export const validateSchema = validateSchemaCreator<PactCategory>(import.meta.url)
