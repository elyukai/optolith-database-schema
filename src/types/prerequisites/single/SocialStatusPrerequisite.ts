import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a minimum social status.
 * @title Social Status Prerequisite
 */
export type SocialStatusPrerequisite = {
  /**
   * The minimum social status' identifier.
   * @integer
   * @minimum 2
   * @maximum 5
   */
  id: number

  display_option?: DisplayOption
}
