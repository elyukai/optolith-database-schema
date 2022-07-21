/**
 * Auxiliary types for melee weapons.
 */

import { Dice } from "../../_Dice.js"
import { CloseCombatTechniqueReference } from "../../_SimpleReferences.js"
import { Length, PrimaryAttributeDamageThreshold } from "./_Weapon.js"

/**
 * The AT modifier.
 * @integer
 */
export type AttackModifier = number

/**
 * The PA modifier.
 * @integer
 */
export type ParryModifier = number

/**
 * The reach of the weapon.
 */
export type Reach = {
  /**
   * The identifier of the weapon's reach.
   * @integer
   * @minimum 1
   * @maximum 4
   */
  id: number
}

/**
 * The damage of a weapon consists of a random part using dice and an optional
 * flat part.
 */
export type MeleeDamage = {
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
 * The shield size and potential size-depending values.
 */
export type ShieldSize =
  | { tag: "Small" }
  | { tag: "Medium" }
  | { tag: "Large"; large?: LargeShieldSize }

export type LargeShieldSize = {
  /**
   * The attack penalty from the shield.
   * @integer
   * @default 1
   */
  attack_penalty: number
}

/**
 * @title Melee Weapon
 */
export type MeleeWeapon = {
  /**
   * The combat techniques and dependent values.
   */
  combat_technique: CloseCombatTechniqueReference

  /**
   * The damage of a weapon consists of a random part using dice and an optional
   * flat part.
   */
  damage: MeleeDamage

  /**
   * The primary attribute damage and threshold value.
   */
  damage_threshold?: PrimaryAttributeDamageThreshold

  /**
   * The AT modifier.
   */
  at: AttackModifier

  /**
   * The PA modifier.
   */
  pa?: ParryModifier

  /**
   * The reach of the weapon.
   */
  reach?: Reach

  /**
   * The length of the weapon in cm/halffingers.
   */
  length?: Length

  /**
   * The shield size and potential size-depending values.
   */
  size?: ShieldSize

  /**
   * Is the weapon a parrying weapon?
   */
  is_parrying_weapon: boolean

  /**
   * Is the weapon a two-handed weapon?
   */
  is_two_handed_weapon: boolean

  /**
   * Is the weapon an improvised weapon?
   */
  is_improvised_weapon: boolean
}
