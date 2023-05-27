/**
 * @main CeremonialItem
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { BlessedTraditionReference } from "../../_SimpleReferences.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { CombatUse, Complexity, Cost, DefaultItemTranslation, StructurePoints, Weight } from "./_Item.js"

export type CeremonialItem = {
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
   * The structure points of the item. Use an array if the item consists of
   * multiple components that have individual structure points.
   */
  structure_points: StructurePoints

  /**
   * The deity associated with the equipment item.
   */
  associated_tradition: BlessedTraditionReference

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

export const config: TypeConfig<CeremonialItem> = {
  name: "CeremonialItem",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("CeremonialItem"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
