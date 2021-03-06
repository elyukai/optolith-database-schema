/**
 * @main ArcaneTradition
 */

import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { ArcaneTraditionPrerequisites } from "./_Prerequisite.js"

/**
 * @title Arcane Tradition
 */
export type ArcaneTradition = {
  /**
   * The arcane tradition's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  prerequisites: ArcaneTraditionPrerequisites

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ArcaneTraditionTranslation>
}

export type ArcaneTraditionTranslation = {
  /**
   * The arcane tradition's name.
   */
  name: NonEmptyString
}
