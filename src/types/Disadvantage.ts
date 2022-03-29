/**
 * @main Disadvantage
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import * as Activatable from "./_Activatable.js"
import { AdvantageDisadvantagePrerequisites } from "./_Prerequisite.js"

/**
 * @title Disadvantage
 */
export type Disadvantage = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  prerequisites?: AdvantageDisadvantagePrerequisites

  ap_value: Activatable.AdventurePointsValueAdvantagesDisadvantages

  /**
   * Does this disadvantage not count towards the maximum of AP to be granted by
   * disadvantages?
   */
  has_no_maximum_spent_influence?: true

  /**
   * Does this disadvantage exclusively applies to arcane spellworks but not
   * to magical actions and applications?
   */
  is_exclusive_to_arcane_spellworks?: true

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      name: Activatable.Name

      name_in_library?: Activatable.NameInLibrary

      // input?: Activatable.Input

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

      // ap_value?: Activatable.AdventurePointsValueReplacement

      // ap_value_append?: Activatable.AdventurePointsValueAppend

      errata?: Errata
    }
  }
}

export const validateSchema = validateSchemaCreator<Disadvantage>(import.meta.url)
