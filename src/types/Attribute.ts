/**
 * @main Attribute
 */

import { getReferencialIntegrityErrorsForTranslatable, ReferencialIntegrityValidators } from "../validation/integrity.js"
import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

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
  translations: LocaleMap<AttributeTranslation>
}

export type AttributeTranslation = {
  /**
   * The attribute's name.
   */
  name: NonEmptyString

  /**
   * The abbreviation of the attribute's name.
   */
  abbreviation: NonEmptyString

  /**
   * The description of the attribute.
   */
  description: NonEmptyString
}

export const validateIntegrity = (
  attribute: Attribute,
  { checkLocaleId }: ReferencialIntegrityValidators
) => getReferencialIntegrityErrorsForTranslatable(attribute, checkLocaleId)

export const validateSchema = validateSchemaCreator<Attribute>(import.meta.url)
