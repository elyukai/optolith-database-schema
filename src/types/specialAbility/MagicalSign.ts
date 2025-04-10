/**
 * @main MagicalSign
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Magical Sign
 */
export type MagicalSign = {
  id: Activatable.Id

  prerequisites?: GeneralPrerequisites

  /**
   * The associated magic property.
   */
  property: PropertyReference

  /**
   * The adventure points value.
   * @integer
   * @minimum 0
   */
  ap_value: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<MagicalSignTranslation>
}

export type MagicalSignTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  effect: Activatable.Effect

  errata?: Errata
}

export const config: TypeConfig<MagicalSign, MagicalSign["id"], "MagicalSign"> = {
  name: "MagicalSign",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("MagicalSign"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
