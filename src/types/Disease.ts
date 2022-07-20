/**
 * @main Disease
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { Cause, DiseaseTranslation, Resistance } from "./_DiseasePoison.js"
import { LocaleMap } from "./_LocaleMap.js"

/**
 * @title Disease
 */
export type Disease = {
  /**
   * The disease's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The disease's level.
   * @integer
   * @minimum 1
   */
  level: number

  /**
   * Depending on the disease, apply Spirit or Toughness as a penalty to the
   * disease roll. It may also happen that the lower of both is applied as a
   * penalty.
   */
  resistance: Resistance

  /**
   * What causes the disease? The GM rolls 1D20 to see if a character gets
   * infected. If the infection check succeeds, the GM makes a disease check to
   * determine the severity of the infection.
   * @minItems 1
   */
  cause: Cause[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DiseaseTranslation>
}

export const validateSchema = validateSchemaCreator<Disease>(import.meta.url)
