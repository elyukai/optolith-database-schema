/**
 * @main Vehicle
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { Cost, DefaultItemTranslation } from "./_Item.js"

export type Vehicle = {
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

export const validateSchema = validateSchemaCreator<Vehicle>(import.meta.url)
