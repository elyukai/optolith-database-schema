/**
 * @main BlessedTradition
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import * as Activatable from "../_Activatable"
import { Identifier } from "../_Identifier"

/**
 * @title Blessed Tradition
 */
export type BlessedTradition = {
  id: Activatable.Id

  // select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  /**
   * The tradition's primary attribute. Leave empty if the tradition does not
   * have one.
   */
  primary?: {
    /**
     * The attribute's identifier.
     * @integer
     * @minimum 1
     * @maximum 8
     */
    id: number
  }

  /**
   * The tradition's aspects, if any
   */
  aspects?: [
    {
      /**
       * The first aspect's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    },
    {
      /**
       * The second aspect's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }
  ]

  /**
   * If a tradition restricts the possible blessings, the blessings that are not
   * allowed.
   * @minItems 3
   * @maxItems 6
   */
  restricted_blessings?: {
    /**
     * The blessing's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }[]

  /**
   * A list of favored combat techniques.
   */
  favored_combat_techniques?:
    | { tag: "All" }
    | { tag: "AllClose" }
    | { tag: "AllUsedInHunting" }
    | {
      tag: "Specific"

      /**
       * A list of specific favored combat techniques.
       * @minItems 1
       */
      list: {
        /**
         * The combat technique's identifier.
         */
        id: Identifier.Group.CombatTechnique
      }[]
    }

  /**
   * A list of favored skills.
   * @minItems 1
   */
  favored_skills: {
    /**
     * The skill's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }[]

  /**
   * On activation of the tradition, a specific number of skills from a list of
   * skills must be selected as being favored.
   * @minItems 1
   */
  favored_skills_selection?: {
    /**
     * The number of skills that can be selected.
     * @integer
     * @minimum 1
     */
    number: number

    /**
     * The possible set of skills.
     */
    options: {
      /**
       * The skill's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]
  }

  /**
   * Is this a schamanistic tradition?
   */
  is_shamanistic: boolean

  /**
   * The select option's identifier of the disadvantage *Principles* that
   * represent this tradition's code, if any.
   */
  associated_principles_id?: number

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

      /**
       * A shorter name of the tradition's name, used in liturgical chant
       * descriptions.
       * @minLength 1
       */
      name_compressed: string

      name_in_library?: Activatable.NameInLibrary

      // input?: Activatable.Input

      /**
       * The special rules of the tradition. They should be sorted like they are
       * in the book.
       * @minItems 1
       */
      special_rules: {
        /**
         * An optional label that is displayed and placed before the actual
         * text.
         * @minLength 1
         */
        label?: string

        /**
         * The text of a special rule.
         * @minLength 1
         */
        text: string
      }[]

      // prerequisites?: Activatable.PrerequisitesReplacement

      // prerequisites_start?: Activatable.PrerequisitesStart

      // prerequisites_end?: Activatable.PrerequisitesEnd

      // ap_value?: Activatable.AdventurePointsValueReplacement

      // ap_value_append?: Activatable.AdventurePointsValueAppend

      errata?: Errata
    }
  }
}
