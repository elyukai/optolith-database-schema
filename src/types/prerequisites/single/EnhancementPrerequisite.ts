import { SkillWithEnhancementsIdentifier } from "../../_IdentifierGroup.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a specific enhancement from a skill. This should **not** be used
 * for enhancements themselves; they can only require enhancements from the same
 * skill they enhance.
 * @title External Enhancement Prerequisite
 */
export type ExternalEnhancementPrerequisite = {
  /**
   * The required skill.
   */
  skill: SkillWithEnhancementsReference

  /**
   * The required enhancement.
   */
  enhancement: EnhancementsReference

  display_option?: DisplayOption
}

export type SkillWithEnhancementsReference = {
  /**
   * The skill's identifier.
   */
  id: SkillWithEnhancementsIdentifier
}

export type EnhancementsReference = {
  /**
   * The enhancement's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

/**
 * Requires a specific enhancement from a skill. This can only be used by an
 * enhancement to require another enhancement from the same skill.
 * @title Internal Enhancement Prerequisite
 */
export type InternalEnhancementPrerequisite = EnhancementsReference
