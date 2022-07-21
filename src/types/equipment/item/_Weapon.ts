import { AttributeReference } from "../../_SimpleReferences.js"

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
 * @minItems 1
 * @uniqueItems
 */
export type PrimaryAttributeDamageThreshold =
  | { tag: "Default"; default: DefaultPrimaryAttributeDamageThreshold }
  | { tag: "List"; list: PrimaryAttributeDamageThresholdList }

export type DefaultPrimaryAttributeDamageThreshold = {
  /**
   * The attribute value representing the damage threshold for the primary
   * attribute of the item's combat technique.
   * @integer
   * @minimum 1
   */
  threshold: number
}

export type PrimaryAttributeDamageThresholdList = {
  /**
   * A list of primary attributes with their associated threshold.
   * @minItems 1
   * @uniqueItems
   */
  list: SinglePrimaryAttributeDamageThreshold[]
}

export type SinglePrimaryAttributeDamageThreshold = {
  /**
   * The primary attribute.
   */
  attribute: AttributeReference

  /**
   * The attribute value representing the damage threshold.
   * @integer
   * @minimum 1
   */
  threshold: number
}

/**
 * The length of the weapon in cm/halffingers.
 * @integer
 * @minimum 1
 */
export type Length = number
