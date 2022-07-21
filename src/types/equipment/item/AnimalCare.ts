/**
 * @main AnimalCare
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { Cost, DefaultItemTranslation, FixedCost } from "./_Item.js"

export type AnimalCare = {
  /**
   * The cost in silverthalers.
   */
  cost: AnimalCareCost

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DefaultItemTranslation>
}

export type AnimalCareCost =
  | Cost
  | { tag: "PerWeek"; per_week: FixedCost }

export const validateSchema = validateSchemaCreator<AnimalCare>(import.meta.url)
