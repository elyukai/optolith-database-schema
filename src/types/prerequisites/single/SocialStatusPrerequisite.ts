import { DisplayOption } from "../DisplayOption"

/**
 * Requires a minimum social status.
 * @title Social Status Prerequisite
 */
export type SocialStatusPrerequisite = {
  tag: "SocialStatus"

  /**
   * The minimum social status' identifier.
   * @integer
   * @minimum 2
   * @maximum 5
   */
  id: number

  display_option?: DisplayOption
}
