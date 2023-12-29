/**
 * @main State
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

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

export const config: TypeConfig<State, State["id"], "State"> = {
  name: "State",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("State"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
