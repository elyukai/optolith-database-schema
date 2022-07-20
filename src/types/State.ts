/**
 * @main State
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title State
 */
export type State = {
  /**
   * The state's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<StateTranslation>
}

export type StateTranslation = {
  /**
   * The name of the state.
   */
  name: NonEmptyString

  /**
   * The description of the state.
   */
  description: NonEmptyMarkdown

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<State>(import.meta.url)
