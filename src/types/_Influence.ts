/**
 * @main Influence
 */

import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { InfluencePrerequisites } from "./_Prerequisite.js"

/**
 * @title Influence
 */
export type Influence = {
  /**
   * The influence's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  prerequisites: InfluencePrerequisites

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<InfluenceTranslation>
}

export type InfluenceTranslation = {
  /**
   * The influence name.
   */
  name: NonEmptyString

  /**
   * The effects of the influence. They should be sorted like they are in
   * the book.
   * @minItems 1
   */
  effects: InfluenceEffect[]

  errata?: Errata
}

export type InfluenceEffect = {
  /**
   * An optional label that is displayed and placed before the actual
   * text.
   */
  label?: NonEmptyString

  /**
   * The effect text.
   */
  text: NonEmptyString
}
