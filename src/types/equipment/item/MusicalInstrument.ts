/**
 * @main MusicalInstrument
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LocaleMap } from "../../_LocaleMap.js"
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

export const validateSchema = validateSchemaCreator<MusicalInstrument>(import.meta.url)
