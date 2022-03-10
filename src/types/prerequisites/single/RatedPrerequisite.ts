import { RatedIdentifier } from "../../_Identifier"
import { DisplayOption } from "../DisplayOption"

/**
 * @title Rated Prerequisite
 */
export type RatedPrerequisite = {
  tag: "Rated"

  /**
   * The rated entry's identifier.
   */
  id: RatedIdentifier

  /**
   * The required minimum value.
   * @integer
   * @minimum 0
   */
  value: number

  display_option?: DisplayOption
}

/**
 * @title Rated Set Prerequisite
 */
export type RatedSetPrerequisite = {
  tag: "RatedSet"

  /**
   * The possible rated entries' identifiers.
   * @minItems 2
   */
  id: RatedIdentifier[]

  /**
   * The required minimum value.
   * @integer
   * @minimum 0
   */
  value: number

  display_option?: DisplayOption
}

/**
 * @title Rated Minimum Number Prerequisite
 */
export type RatedMinimumNumberPrerequisite = {
  tag: "RatedMinimumNumber"

  /**
   * The minimum number of skills that need to be on the defined minimum skill
   * rating..
   * @integer
   * @minimum 1
   */
  number: number

  /**
   * The minimum skill rating the defined minimum number of skills need to be on.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The targets that contribute to satisfying the prerequisite.
   */
  targets:
    | {
      tag: "Skills"

      /**
       * The skills that are taken into account for satisfying the prerequisite.
       * @minItems 2
       * @uniqueItems
       */
      skills: {
        /**
         * The skill's identifier.
         */
        id: number
      }[]
    }
    | {
      tag: "Spellworks"

      /**
       * Spellworks with the referenced property are taken into account for
       * satisfying the prerequisite.
       */
      property: {
        /**
         * The property's identifier.
         */
        id: number
      }
    }
    | {
      tag: "Liturgies"

      /**
       * Liturgies with the referenced aspect are taken into account for
       * satisfying the prerequisite.
       */
      aspect: {
        /**
         * The aspect's identifier.
         */
        id: number
      }
    }

  display_option?: DisplayOption
}
