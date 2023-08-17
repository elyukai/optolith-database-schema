/**
 * @main Advantage
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import * as Activatable from "./_Activatable.js"
import { LocaleMap } from "./_LocaleMap.js"
import { AdvantageDisadvantagePrerequisites } from "./_Prerequisite.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Advantage
 */
export type Advantage = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  maximum?: Activatable.Maximum

  prerequisites?: AdvantageDisadvantagePrerequisites

  ap_value: Activatable.AdventurePointsValue

  /**
   * Does this advantage count towards the maximum of AP to be spent on
   * advantages?
   * @default true
   */
  has_maximum_spent_influence: boolean

  /**
   * Does this advantage exclusively applies to arcane spellworks and not
   * to magical actions and magical applications?
   * @default false
   */
  is_exclusive_to_arcane_spellworks: boolean

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AdvantageTranslation>
}

export type AdvantageTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  /**
   * A string that is used as a label for an input field.
   */
  input?: Activatable.Input

  rules: Activatable.Rules

  /**
   * The range.
   * @markdown
   * @minLength 1
   */
  range?: string

  // prerequisites?: Activatable.PrerequisitesReplacement

  // prerequisites_start?: Activatable.PrerequisitesStart

  // prerequisites_end?: Activatable.PrerequisitesEnd

  ap_value?: Activatable.AdventurePointsValueReplacement

  /**
   * A string that gets appended to the default AP Value text with a preceding
   * space. This always happens if present, even if the generated AP Value text
   * is replaced.
   */
  ap_value_append?: Activatable.AdventurePointsValueAppend

  errata?: Errata
}

export const config: TypeConfig<Advantage> = {
  name: "Advantage",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Advantage"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
