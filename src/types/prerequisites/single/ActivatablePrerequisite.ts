import { ActivatableIdentifier, RequirableSelectOptionIdentifier } from "../../_IdentifierGroup.js"
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
