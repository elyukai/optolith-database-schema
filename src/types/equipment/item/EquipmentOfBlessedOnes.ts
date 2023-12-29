/**
 * @main EquipmentOfBlessedOnes
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { BlessedTraditionReference } from "../../_SimpleReferences.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { Cost, DefaultItemTranslation, StructurePoints } from "./_Item.js"

export type EquipmentOfBlessedOnes = {
  /**
   * The cost in silverthalers.
   */
  cost: Cost

  /**
   * The structure points of the item. Use an array if the item consists of
   * multiple components that have individual structure points.
   */
  structure_points: StructurePoints

  /**
   * The deity associated with the equipment item.
   */
  associated_tradition: BlessedTraditionReference[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DefaultItemTranslation>
}

export const config: TypeConfig<EquipmentOfBlessedOnes, number, "EquipmentOfBlessedOnes"> = {
  name: "EquipmentOfBlessedOnes",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("EquipmentOfBlessedOnes"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
