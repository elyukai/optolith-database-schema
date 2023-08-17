/**
 * @main Animal
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { Cost, DefaultItemTranslation } from "./_Item.js"

export type Animal = {
  /**
   * The cost in silverthalers.
   */
  cost: Cost

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DefaultItemTranslation>
}

export const config: TypeConfig<Animal> = {
  name: "Animal",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Animal"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
