import { DisplayOption } from "../DisplayOption.js"

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
