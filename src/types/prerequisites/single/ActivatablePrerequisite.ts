import { ActivatableIdentifier, RequirableSelectOptionIdentifier } from "../../_Identifier.js"
import { Preconditions } from "../ConditionalPrerequisites.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a specific advantage, disadvantage or special ability.
 * @title Activatable Prerequisite
 */
export type ActivatablePrerequisite = {
  /**
   * The activatable entry's identifier.
   */
  id: ActivatableIdentifier

  /**
   * If the required entry should be required to be active or inactive.
   */
  active: boolean

  /**
   * The required minimum level of the entry.
   * @integer
   * @minimum 1
   */
  level?: number

  /**
   * Required select options. Order is important. Typically, you only need the
   * first array index, though.
   * @minItems 1
   */
  options?: RequirableSelectOptionIdentifier[]

  display_option?: DisplayOption

  when?: Preconditions
}

/**
 * Requires a specific advantage, disadvantage or special ability from a given
 * set of entries.
 * @title Activatable Set Prerequisite
 */
export type ActivatableSetPrerequisite = {
  /**
   * The possible activatable entries' identifiers.
   * @minItems 2
   */
  id: ActivatableIdentifier[]

  /**
   * If the required entry should be required to be active or inactive.
   */
  active: boolean

  /**
   * The required minimum level of the entry.
   * @integer
   * @minimum 1
   */
  level?: number

  /**
   * Required select options. Order is important. Typically, you only need the
   * first array index, though.
   * @minItems 1
   */
  options?: RequirableSelectOptionIdentifier[]

  display_option?: DisplayOption
}

/**
 * Requires one option from a set of options from a specific advantage,
 * disadvantage or special ability.
 * @title Activatable Option Set Prerequisite
 */
export type ActivatableOptionSetPrerequisite = {
  /**
   * The activatable entry's identifier.
   */
  id: ActivatableIdentifier

  /**
   * If the required entry should be required to be active or inactive.
   */
  active: boolean

  /**
   * The required minimum level of the entry.
   * @integer
   * @minimum 1
   */
  level?: number

  /**
   * The possible set of first options.
   * @minItems 2
   */
  first_option: RequirableSelectOptionIdentifier[]

  /**
   * Required other select options. Order is important.
   * @minItems 1
   */
  other_options?: RequirableSelectOptionIdentifier[]

  display_option?: DisplayOption
}
