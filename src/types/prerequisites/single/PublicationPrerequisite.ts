import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Publication Prerequisite
 */
export type PublicationPrerequisite = {
  /**
   * @integer
   * @minimum 1
   */
  id: number

  display_option?: DisplayOption
}
