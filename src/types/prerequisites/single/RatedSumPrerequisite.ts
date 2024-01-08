import { SkillIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Rated Sum Prerequisite
 */
export type RatedSumPrerequisite = {
  /**
   * The minimum required sum of the targets’ ratings.
   * @integer
   * @minimum 1
   */
  sum: number

  /**
   * The targets that are included in calculating the sum.
   * @minItems 2
   */
  targets: SkillIdentifier[]

  display_option?: DisplayOption
}
