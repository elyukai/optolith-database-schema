/**
 *
 */

import { Dice } from "../_Dice"

/**
 * The structure points of the item. Use an array if the item consists of
 * multiple components that have individual structure points.
 * @title Structure Points
 * @minItems 1
 */
export type StructurePoints = {
  /**
   * The structure points.
   * @integer
   * @minimum 1
   */
  points: number
}[]

/**
 * If the weapon is sanctified by a god and thus restricted to it's Blessed
 * Ones.
 */
export type SanctifiedBy = {
  /**
   * The tradition's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

/**
 * Define if during character creation this weapon can only be bought by
 * characters of a specific race or culture.
 */
export type RestrictedToCultures =
  | {
    tag: "CulturesOfRace"

    /**
     * The race's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "Culture"

    /**
     * The culture's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "Cultures"

    /**
     * The cultures' identifiers.
     * @minitems 1
     */
    list: {
      /**
       * The culture's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }
  }

/**
 * The primary attribute damage and threshold value. You can either use an
 * integer, an object or a pair. Use an integer if you just have to define a
 * single threshold value for the default primary attribute of the combat
 * technique. Use an object if you need to define the value only or if you need
 * to define the value as well as a single different primary attribute than
 * which the combat technique uses. Use the pair if you need to set the primary
 * attributes to AGI and STR (the combat technique has AGI but this item has
 * AGI/STR) and/or if you need to set different thresholds for AGI and STR (e.g.
 * AGI 14/STR 15). If the same values are in the pair, they will be merged (AGI
 * 14/STR 14 will be AGI/STR 14).
 */
type PrimaryAttributeDamageThreshold =
  | {
    tag: "Single"

    /**
     * The primary attribute(s) if different from the default primary
     * attribute(s) of the combat technique.
     * @minItems 1
     * @uniqueItems
     */
    attribute?: {
      /**
       * The attribute's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]

    /**
     * The attribute value representing the damage threshold.
     * @integer
     * @minimum 1
     */
    threshold: number
  }
  | {
    tag: "Differing"

    /**
     * A list of primary attributes, each featuring a different threshold.
     * @minItems 2
     * @uniqueItems
     */
    list: {
      /**
       * The primary attribute.
       */
      attribute: {
        /**
         * The attribute's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }

      /**
       * The attribute value representing the damage threshold.
       * @integer
       * @minimum 1
       */
      threshold: number
    }[]
  }

/**
 * The damage of a weapon consists of a random part using dice and an optional
 * flat part.
 */
type DamageMelee = {
  /**
   * How many dice of which type are rolled to get the damage.
   */
  dice: Dice

  /**
   * Flat damage, if any. It gets added to the result of the dice rolls.
   * @integer
   * @default 0
   */
  flat?: number
}

/**
 * The damage of a ranged weapon. It consists of a random part using dice and an
 * optional flat part ny default. Some ranged weapons may work different so that
 * damage is either not applicable at all or it is outlined as *Special* and
 * further defined in a description.
 */
type DamageRanged =
  | {
    tag: "Default"

    /**
     * How many dice of which type are rolled to get the damage.
     */
    dice: Dice

    /**
     * Flat damage, if any. It gets added to the result of the dice rolls.
     * @integer
     * @default 0
     */
    flat?: number
  }
  | { tag: "NotApplicable" }
  | { tag: "Special" }

/**
 * The AT modifier.
 * @integer
 */
type Attack = number

/**
 * The PA modifier.
 * @integer
 */
type Parry = number

/**
 * The reach of the weapon.
 * @integer
 * @minimum 1
 * @maximum 4
 */
type Reach = number

/**
 * The length of the weapon in cm/halffingers.
 * @integer
 * @minimum 1
 */
type Length = number

/**
 */
type ShieldSize =
  | {
    tag: "Large"

    /**
     * The attack penalty from the shield.
     * @integer
     * @default 1
     */
    attack_penalty?: number
  }
  | { tag: "Medium" }
  | { tag: "Small" }

/**
 * @title Melee Weapon
 */
export type MeleeWeapon = {
  tag: "Melee"

  /**
   * The combat techniques and dependent values.
   */
  combat_technique:
    | {
      tag: "ChainWeapons"

      damage_threshold: PrimaryAttributeDamageThreshold

      at: Attack

      reach: Reach

      length: Length
    }
    | {
      tag: "Whips"

      damage_threshold: PrimaryAttributeDamageThreshold

      at: Attack

      reach: Reach

      length: Length
    }
    | {
      tag: "Lances"

      at: Attack

      length: Length
    }
    | {
      tag: "Shields"

      size: ShieldSize

      damage_threshold: PrimaryAttributeDamageThreshold

      at: Attack

      pa: Parry

      reach: Reach
    }
    | {
      tag: "Fans"

      size: ShieldSize

      damage_threshold: PrimaryAttributeDamageThreshold

      at: Attack

      pa: Parry

      reach: Reach

      length: Length
    }
    | {
      tag: "Default"

      /**
       * The close combat technique's identifier.
       * @integer
       * @minimum 1
       */
      id: number

      damage_threshold: PrimaryAttributeDamageThreshold

      at: Attack

      pa: Parry

      reach: Reach

      length: Length
    }

  damage: DamageMelee

  /**
   * Is the weapon a parrying weapon?
   */
  is_parrying_weapon: boolean

  /**
   * Is the weapon a two-handed weapon?
   */
  is_two_handed_weapon: boolean
}

/**
 * @title Ranged Weapon
 */
export type RangedWeapon = {
  tag: "Ranged"

  /**
   * The combat techniques and dependent values.
   */
  combat_technique:
    | {
      tag: "ThrownWeapons"
    }
    | {
      tag: "Default"

      /**
       * The needed ammunition.
       */
      ammunition: {
        /**
         * The item's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }
    }

  damage: DamageRanged

  /**
   * The range brackets for the weapon: close, medium, far. Distances in m.
   */
  range: {
    /**
     * The close range bracket for the weapon. Distance in m.
     * @integer
     * @minimum 1
     */
    close: number

    /**
     * The medium range bracket for the weapon. Distance in m.
     * @integer
     * @minimum 1
     */
    medium: number

    /**
     * The far range bracket for the weapon. Distance in m.
     * @integer
     * @minimum 1
     */
    far: number
  }

  /**
   * One or multiple reload times.
   * @minItems 1
   * @uniqueItems
   */
  reload_time: {
    /**
     * A reload time value in actions.
     * @integer
     * @minimum 1
     */
    value: number
  }[]

  length: Length
}
