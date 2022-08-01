import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Blessed Tradition Prerequisite
 */
export type BlessedTraditionPrerequisite = {
  /**
   * The blessed tradition prerequisite may only be satified if the blessed
   * tradition is either church or shamanistic.
   */
  restriction?: BlessedTraditionPrerequisiteRestriction

  display_option?: DisplayOption
}

/**
 * The blessed tradition prerequisite may only be satified if the blessed
 * tradition is either church or shamanistic.
 */
export enum BlessedTraditionPrerequisiteRestriction {
  Church = "Church",
  Shamanistic = "Shamanistic",
}

/**
 * @title Magical Tradition Prerequisite
 */
export type MagicalTraditionPrerequisite = {
  /**
   * The magical tradition prerequisite may only be satified if the magical
   * tradition can learn rituals or can bind familiars.
   */
  restriction?: MagicalTraditionPrerequisiteRestriction

  display_option?: DisplayOption
}

/**
 * The magical tradition prerequisite may only be satified if the magical
 * tradition can learn rituals or can bind familiars.
 */
export enum MagicalTraditionPrerequisiteRestriction {
  CanLearnRituals = "CanLearnRituals",
  CanBindFamiliars = "CanBindFamiliars",
}
