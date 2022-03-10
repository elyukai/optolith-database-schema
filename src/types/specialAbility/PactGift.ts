/**
 * @main PactGift
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import * as Activatable from "../_Activatable"
import { ActivatableIdentifier } from "../_Identifier"
import { GeneralPrerequisites } from "../_Prerequisite"

/**
 * @title Pact Gift
 */
export type PactGift = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  permanent_demonic_consumption?:
    | {
      tag: "Fixed"

      /**
       * The levels of *Demonic Consumption* the pact gift causes.
       * @integer
       * @minimum 1
       * @maximum 4
       */
      levels: number
    }
    | {
      tag: "PerLevel"

      /**
       * The levels of *Demonic Consumption* the pact gift causes per activated
       * level of the pact gift.
       * @integer
       * @minimum 1
       * @maximum 4
       */
      levels: number
    }

  /**
   * This pact gift has direct influence on the existence of other entries. It
   * may add or remove entries.
   * @minItems 1
   */
  automatic_entries?: {
    /**
     * What type of action is applied to the target entry?
     */
    action:
      | { tag: "Add" }
      | { tag: "Remove" }

    /**
     * If an entry is added or removed, does is cost or grant adventure points
     * or is it free of charge?
     */
    apply_ap_value: boolean

    /**
     * The entry that is to be added or removed. It can be a fixed entry or a
     * selection where the player must choose one entry.
     */
    target:
      | {
        tag: "Selection"

        list:
          | { tag: "MagicalTraditions" }
          | { tag: "MagicalDilettanteTraditions" }
      }
      | {
        tag: "Fixed"

        id: ActivatableIdentifier
      }
  }[]

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

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

      effect: Activatable.Effect

      // prerequisites?: Activatable.PrerequisitesReplacement

      // prerequisites_start?: Activatable.PrerequisitesStart

      // prerequisites_end?: Activatable.PrerequisitesEnd

      // ap_value?: Activatable.AdventurePointsValueReplacement

      // ap_value_append?: Activatable.AdventurePointsValueAppend

      errata?: Errata
    }
  }
}
