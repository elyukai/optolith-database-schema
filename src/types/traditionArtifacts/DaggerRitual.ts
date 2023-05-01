/**
 * @main DaggerRitual
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import * as Activatable from "../_Activatable.js"
import { ArcaneEnergyCost, BindingCost } from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Dagger Ritual
 */
export type DaggerRitual = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  prerequisites?: GeneralPrerequisites

  volume: Activatable.Volume

  cost?: DaggerRitualCost

  property: Activatable.Property

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DaggerRitualTranslation>
}

export type DaggerRitualCost =
  | { tag: "ArcaneEnergyCost"; arcane_energy_cost: DaggerRitualArcaneEnergyCost }
  | { tag: "BindingCost"; binding_cost: BindingCost }

export type DaggerRitualArcaneEnergyCost = {
  ae_cost: ArcaneEnergyCost
  lp_cost?: LifePointsCost
}

export type LifePointsCost =
  | { tag: "Fixed"; fixed: FixedLifePointsCost }

export type FixedLifePointsCost = {
  /**
   * The LP cost value.
   * @integer
   * @minimum 1
   */
  value: number
}

export type DaggerRitualTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  effect: Activatable.Effect

  /**
   * @deprecated
   */
  volume: string

  /**
   * @deprecated
   */
  aeCost?: string

  /**
   * @deprecated
   */
  bindingCost?: string

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<DaggerRitual>(import.meta.url)
