/**
 * @main Brew
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyString } from "../../_NonEmptyString.js"

/**
 * @title Brew
 */
export type Brew = {
  /**
   * The brew's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<BrewTranslation>
}

export type BrewTranslation = {
  /**
   * The brew name.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<Brew>(import.meta.url)
