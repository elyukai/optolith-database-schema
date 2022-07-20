/**
 * @main Talisman
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"
import { BlessedTraditionReference } from "./_SimpleReferences.js"

/**
 * @title Talisman
 */
export type Talisman = {
  /**
   * The talisman's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The tradition(s) the talisman belongs to.
   * @minItems 1
   */
  tradition: BlessedTraditionReference[]

  /**
   * The talisman type.
   */
  type: TalismanType

  /**
   * The AP value for the required trade secret.
   * @integer
   * @minimum 5
   * @multipleOf 5
   */
  ap_value: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<TalismanTranslation>
}

export type TalismanType =
  | { tag: "MainTalisman" }
  | { tag: "Talisman" }
  | { tag: "MinorTalisman" }
  | { tag: "Regalia" }
  | { tag: "PowerfulTalisman" }

export type TalismanTranslation = {
  /**
   * The name of the talisman.
   */
  name: NonEmptyString

  /**
   * The effect description.
   */
  description: NonEmptyMarkdown

  /**
   * The activation parameters.
   */
  activation: TalismanActivationTranslation

  errata?: Errata
}

export type TalismanActivationTranslation = {
  /**
   * The KP cost.
   */
  cost: NonEmptyString

  /**
   * The duration.
   */
  duration: NonEmptyString
}

export const validateSchema = validateSchemaCreator<Talisman>(import.meta.url)
