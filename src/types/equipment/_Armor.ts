/**
 *
 */

/**
 * The PRO value.
 * @integer
 * @minimum 0
 */
export type Protection = number

/**
 * The ENC value.
 * @integer
 * @minimum 0
 */
export type Encumbrance = number

/**
 * Does the armor have additional penalties (MOV -1, INI -1)?
 */
export type HasAdditionalPenalties = boolean

/**
 * The armor type.
 * @title Armor Type
 */
export type ArmorType = {
  /**
   * The armor type's identifier.
   * @integer
   * @minimum 1
   * @maximum 10
   */
  id: number
}

/**
 * Specify if armor is only available for a specific hit zone.
 * @title Hit Zone
 */
export type HitZone =
  | {
    tag: "Head"

    /**
     * In some cases, multiple armors for the same hit zone can be combined.
     * They're listed at the item that can be combined with others.
     */
    combination_possibilities?: {
      /**
       * A list of armors that can be combined with this armor.
       * @minItems 1
       */
      armors: {
        /**
         * The armor's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }[]

      /**
       * The PRO value that is added to the PRO value of the other armor instead
       * of adding the normale PRO value.
       * @integer
       * @minimum 0
       */
      protection?: number
    }
  }
  | { tag: "Torso" }
  | { tag: "Arms" }
  | { tag: "Legs" }
