import { SocialStatusIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a minimum social status.
 * @title Social Status Prerequisite
 */
export type SocialStatusPrerequisite = {
  /**
   * The minimum social status' identifier.
   */
  id: SocialStatusIdentifier

  display_option?: DisplayOption
}
