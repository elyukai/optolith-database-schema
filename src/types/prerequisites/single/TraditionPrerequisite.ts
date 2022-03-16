import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Blessed Tradition Prerequisite
 */
export type BlessedTraditionPrerequisite = {
  tag: "BlessedTradition"

  /**
   * The blessed tradition prerequisite may only be satified if the blessed
   * tradition is either church or shamanistic.
   */
  restriction?:
    | { tag: "Church" }
    | { tag: "Shamanistic" }

  display_option?: DisplayOption
}

/**
 * @title Magical Tradition Prerequisite
 */
export type MagicalTraditionPrerequisite = {
  tag: "MagicalTradition"

  /**
   * The magical tradition prerequisite may only be satified if the magical
   * tradition can learn rituals or can bind familiars.
   */
  restriction?:
    | { tag: "CanLearnRituals" }
    | { tag: "CanBindFamiliars" }

  display_option?: DisplayOption
}
