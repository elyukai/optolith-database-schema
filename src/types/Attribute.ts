/**
 * @main Attribute
 */

import { TypeConfig } from "../typeConfig.js"
import { getReferencialIntegrityErrorsForTranslatable, reduceIntegrityValidationResults, validateEntityIntegrity } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
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

export const config: TypeConfig<Attribute, Attribute["id"], "Attribute"> = {
  name: "Attribute",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: (validators, data, filepath) =>
    reduceIntegrityValidationResults(
      validateEntityIntegrity(
        validators.identity.attributes.exists,
        getFilenamePrefixAsNumericId(data, filepath),
        data.id,
        [{ k: "id" }]
      ),
      getReferencialIntegrityErrorsForTranslatable(validators, data),
    ),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
