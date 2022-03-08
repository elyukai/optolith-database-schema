/**
 * @main OrbEnchantment
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import * as Activatable from "../_Activatable"

/**
 * @title Orb Enchantment
 */
export type OrbEnchantment = {
  id: Activatable.Id

  levels?: Activatable.Levels

  // max?: Activatable.Maximum

  // select_options?: Activatable.SelectOptions

  property: Activatable.Property

  // prerequisites?: Prerequisite.GroupCollection.General

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

      // ae_cost?: Activatable.ArcaneEnergyCost

      // volume: Activatable.Volume

      // binding_cost?: Activatable.BindingCost

      // prerequisites?: Activatable.PrerequisitesReplacement

      // prerequisites_start?: Activatable.PrerequisitesStart

      // prerequisites_end?: Activatable.PrerequisitesEnd

      // ap_value?: Activatable.AdventurePointsValueReplacement

      // ap_value_append?: Activatable.AdventurePointsValueAppend

      errata?: Errata
    }
  }
}
