import { SkillWithEnhancementsIdentifier } from "../../_Identifier"
import { DisplayOption } from "../DisplayOption"

/**
 * Requires a specific enhancement from a skill. This should **not** be used
 * for enhancements themselves; they can only require enhancements from the same
 * skill they enhance.
 * @title External Enhancement Prerequisite
 */
export type ExternalEnhancementPrerequisite = {
  tag: "Enhancement"

  /**
   * The required skill's identifier.
   */
  skill_id: SkillWithEnhancementsIdentifier

  /**
   * The required enhancement's identifier.
   * @integer
   * @minimum 1
   */
  enhancement_id: number

  display_option?: DisplayOption
}

/**
 * Requires a specific enhancement from a skill. This can only be used by an
 * enhancement to require another enhancement from the same skill.
 * @title Internal Enhancement Prerequisite
 */
export type InternalEnhancementPrerequisite = {
  tag: "Enhancement"

  /**
   * The enhancement's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}
