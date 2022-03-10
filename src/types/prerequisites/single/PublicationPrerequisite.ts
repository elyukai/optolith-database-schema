import { DisplayOption } from "../DisplayOption"

/**
 * @title Publication Prerequisite
 */
export type PublicationPrerequisite = {
  tag: "Publication"

  /**
   * @integer
   * @minimum 1
   */
  id: number

  display_option?: DisplayOption
}
