/**
 * @main Talisman
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"
import { BlessedTraditionReference } from "./_SimpleReferences.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

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
   * The talisman type, if any.
   */
  type?: TalismanType

  /**
   * The AP value for the required trade secret, if possible.
   * @integer
   * @minimum 5
   * @multipleOf 5
   */
  ap_value?: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<TalismanTranslation>
}

export type TalismanType =
  | "MainTalisman"
  | "Talisman"
  | "MinorTalisman"
  | "Regalia"
  | "PowerfulTalisman"

export type TalismanTranslation = {
  /**
   * The name of the talisman.
   */
  name: NonEmptyString

  /**
   * The effect description.
   */
  effect: NonEmptyMarkdown

  /**
   * The activation parameters.
   */
  activation?: TalismanActivationTranslation

  errata?: Errata
}

export type TalismanActivationTranslation = {
  /**
   * The KP cost.
   * @integer
   * @minimum 0
   */
  cost: number

  /**
   * The duration.
   */
  duration: NonEmptyString
}

export const config: TypeConfig<Talisman> = {
  name: "Talisman",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Talisman"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
