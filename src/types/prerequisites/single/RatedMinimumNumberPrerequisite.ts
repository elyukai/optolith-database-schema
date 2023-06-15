import { AspectReference, PropertyReference, SkillReference } from "../../_SimpleReferences.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Rated Minimum Number Prerequisite
 */
export type RatedMinimumNumberPrerequisite = {
  /**
   * The minimum number of skills that need to be on the defined minimum skill
   * rating.
   * @integer
   * @minimum 1
   */
  number: number

  /**
   * The minimum skill rating the defined minimum number of skills need to be
   * on.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The targets that contribute to satisfying the prerequisite.
   */
  targets: RatedMinimumNumberPrerequisiteTarget

  display_option?: DisplayOption
}

export type RatedMinimumNumberPrerequisiteTarget =
  | { tag: "Skills"; skills: RatedMinimumNumberPrerequisiteSkillsTarget }
  | { tag: "CombatTechniques"; combat_techniques: CombatTechniquesTarget }
  | { tag: "Spellworks"; spellworks: PropertyReference }
  | { tag: "Liturgies"; liturgies: AspectReference }

export type RatedMinimumNumberPrerequisiteSkillsTarget = {
  /**
   * The skills that are taken into account for satisfying the prerequisite.
   * @minItems 2
   * @uniqueItems
   */
  list: SkillReference[]
}

export type CombatTechniquesTarget = {
  group: CombatTechniquesTargetGroup
}

export type CombatTechniquesTargetGroup =
  | "All"
  | "Close"
  | "Ranged"

export type RatedMinimumNumberPrerequisiteSpellworksTarget = {
  /**
   * The skills that are taken into account for satisfying the prerequisite.
   */
  property: PropertyReference
}

export type RatedMinimumNumberPrerequisiteLiturgiesTarget = {
  /**
   * The skills that are taken into account for satisfying the prerequisite.
   */
  aspect: AspectReference
}
