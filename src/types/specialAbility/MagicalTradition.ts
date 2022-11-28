/**
 * @main MagicalTradition
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import * as Activatable from "../_Activatable.js"
import { AttributeIdentifier } from "../_Identifier.js"
import { Influence } from "../_Influence.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { MagicalTraditionReference } from "../_SimpleReferences.js"
import { SpecialRule } from "./_Tradition.js"

/**
 * @title Magical Tradition
 */
export type MagicalTradition = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  /**
   * The tradition's primary attribute. Leave empty if the tradition does not
   * have one.
   */
  primary?: PrimaryAttribute

  /**
   * Can a member of the tradition learn cantrips?
   */
  can_learn_cantrips: boolean

  /**
   * Can a member of the tradition learn spells?
   */
  can_learn_spells: boolean

  /**
   * Can a member of the tradition learn rituals?
   */
  can_learn_rituals: boolean

  /**
   * Can this magical tradition bind familiars?
   */
  can_bind_familiars: boolean

  /**
   * Does the tradition allow learning more traditions or having learned a
   * different tradition before learning this tradition?
   */
  allows_multiple_traditions: boolean

  /**
   * Is the maximum AP you're able to spent on magical advantages and able to
   * get by magical disadvantages different than the default of 50 AP?
   * @integer
   * @minimum 25
   * @maximum 30
   * @multipleOf 5
   */
  alternative_magical_adventure_points_maximum: number

  /**
   * Are advantages/disadvantages required to not exclusively apply to arcane
   * spellworks, but also to the tradition's magical actions or applications?
   */
  require_non_spellwork_exclusive_effects: boolean

  /**
   * Is this a magical dilettante tradition?
   */
  is_magical_dilettante: boolean

  /**
   * If arcane spellworks from a different tradition count as arcane spellworks
   * of this tradition, this is the different tradition's reference.
   */
  use_arcane_spellworks_from_tradition: MagicalTraditionReference

  /**
   * The Influences for the traditions. Influences are enabled by Focus Rules.
   * @minItems 2
   */
  influences?: Influence[]

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<MagicalTraditionTranslation>
}

export type PrimaryAttribute = {
  /**
   * The attribute's identifier.
   */
  id: AttributeIdentifier

  /**
   * Typically, the value of the primary attribute (if one exists) is added
   * onto the base of 20 AE to get the actual AE. But sometimes, only half the
   * value is added.
   */
  use_half_for_arcane_energy: boolean
}

export type MagicalTraditionTranslation = {
  name: Activatable.Name

  /**
   * The name used for the traditions list of arcane spellworks if it is
   * different than the `name` of the special ability.
   * @minLength 1
   */
  name_for_arcane_spellworks?: string

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  /**
   * The special rules of the tradition. They should be sorted like they are
   * in the book.
   * @minItems 1
   */
  special_rules: SpecialRule[]

  // prerequisites?: Activatable.PrerequisitesReplacement

  // prerequisites_start?: Activatable.PrerequisitesStart

  // prerequisites_end?: Activatable.PrerequisitesEnd

  // ap_value?: Activatable.AdventurePointsValueReplacement

  // ap_value_append?: Activatable.AdventurePointsValueAppend

  errata?: Errata
}
export const validateSchema = validateSchemaCreator<MagicalTradition>(import.meta.url)
