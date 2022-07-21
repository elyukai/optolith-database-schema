/**
 * @main MusicalInstrument
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { Complexity, Cost, DefaultItemTranslation, StructurePoints } from "./_Item.js"

export type MusicalInstrument = {
  /**
   * The cost in silverthalers.
   */
  cost: Cost

  /**
   * The complexity of crafting the item.
   */
  complexity: Complexity

  /**
   * The structure points of the item. Use an array if the item consists of
   * multiple components that have individual structure points.
   */
  structure_points: StructurePoints

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DefaultItemTranslation>
}

export const validateSchema = validateSchemaCreator<MusicalInstrument>(import.meta.url)
