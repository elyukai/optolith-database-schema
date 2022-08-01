/**
 * Auxiliary types for ranged weapons.
 */

import { Dice } from "../../_Dice.js"
import { RangedCombatTechniqueReference } from "../../_SimpleReferences.js"
import { Length } from "./_Weapon.js"

/**
 * The damage of a ranged weapon. It consists of a random part using dice and an
 * optional flat part ny default. Some ranged weapons may work different so that
 * damage is either not applicable at all or it is outlined as *Special* and
 * further defined in a description.
 */
export type RangedDamage =
  | { tag: "Default"; default: DefaultRangedDamage }
  | { tag: "NotApplicable"; not_applicable: {} }
  | { tag: "Special"; special: {} }

/**
 * The damage of a weapon consists of a random part using dice and an optional
 * flat part.
 */
export type DefaultRangedDamage = {
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
 * @title Ranged Weapon
 */
export type RangedWeapon = {
  /**
   * The combat techniques and dependent values.
   */
  combat_technique: RangedCombatTechniqueReference

  /**
   * The damage of a weapon consists of a random part using dice and an optional
   * flat part.
   */
  damage: RangedDamage

  /**
   * One or multiple reload times.
   * @minItems 1
   * @uniqueItems
   */
  reload_time: ReloadTime[]

  /**
   * The range brackets for the weapon: close, medium, far. Distances in m.
   */
  range: Range

  /**
   * The needed ammunition.
   */
  ammunition?: AmmunitionReference

  /**
   * The length of the weapon in cm/halffingers.
   */
  length: Length

  /**
   * Is the weapon an improvised weapon?
   */
  is_improvised_weapon: boolean
}

export type AmmunitionReference = {
  /**
   * The item's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type Range = {
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

export type ReloadTime = {
  /**
   * A reload time value in actions.
   * @integer
   * @minimum 1
   */
  value: number
}
