/**
 * @main Reach
 */

import { validateSchemaCreator } from "../../../../validation/schema.js"
import { LocaleMap } from "../../../_LocaleMap.js"
import { NonEmptyString } from "../../../_NonEmptyString.js"

/**
 * @title Reach
 */
export type Reach = {
  /**
   * The reach's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ReachTranslation>
}

export type ReachTranslation = {
  /**
   * The name of the reach.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<Reach>(import.meta.url)
