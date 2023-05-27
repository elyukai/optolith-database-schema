/**
 * @main MusicalInstrument
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { Cost, DefaultItemTranslation, Weight } from "./_Item.js"

export type MusicalInstrument = {
  /**
   * The cost in silverthalers.
   */
  cost: Cost

  /**
   * The weight in kg.
   */
  weight: Weight

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DefaultItemTranslation>
}

export const config: TypeConfig<MusicalInstrument> = {
  name: "MusicalInstrument",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("MusicalInstrument"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
