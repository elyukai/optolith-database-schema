/**
 * @main AncestorGlyph
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Ancestor Glyph
 */
export type AncestorGlyph = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  prerequisites?: GeneralPrerequisites

  /**
   * The AE cost of the ancestor glyph.
   * @integer
   * @minimum 1
   */
  ae_cost: number

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AncestorGlyphTranslation>
}

export type AncestorGlyphTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  rules: Activatable.Rules

  // ae_cost: Activatable.ArcaneEnergyCost

  errata?: Errata
}

export const config: TypeConfig<AncestorGlyph> = {
  name: "AncestorGlyph",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("AncestorGlyph"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
