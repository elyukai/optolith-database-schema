/**
 * @main MusicalInstrument
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { CombatUse, Complexity, Cost, DefaultItemTranslation, Weight } from "./_Item.js"

export type MusicalInstrument = {
  /**
   * The cost in silverthalers.
   */
  cost: Cost

  /**
   * The weight in kg.
   */
  weight: Weight

  /**
   * The complexity of crafting the item.
   */
  complexity?: Complexity

  /**
   * The item can also be used either as an improvised weapon or as an armor,
   * although this is not the primary use case of the item.
   */
  combat_use?: CombatUse

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DefaultItemTranslation>
}

export const config: TypeConfig<MusicalInstrument, number, "MusicalInstrument"> = {
  name: "MusicalInstrument",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("MusicalInstrument"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
