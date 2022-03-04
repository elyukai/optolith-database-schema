/**
 * @main Attribute
 */

import { getReferencialIntegrityErrorsForTranslatable, ReferencialIntegrityValidators } from "../validation/integrity"

/**
 * @title Attribute
 */
export type Attribute = {
  /**
   * The attribute's identifier. An unique, increasing integer.
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
       * The attribute's name.
       * @minLength 1
       */
      name: string

      /**
       * The abbreviation of the attribute's name.
       * @minLength 1
       */
      abbreviation: string

      /**
       * The description of the attribute.
       * @minLength 1
       */
      description: string
    }
  }
}

export const validateIntegrity = (
  attribute: Attribute,
  { checkLocaleId }: ReferencialIntegrityValidators
) => getReferencialIntegrityErrorsForTranslatable(attribute, checkLocaleId)
