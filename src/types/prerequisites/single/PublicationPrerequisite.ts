import { PublicationIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Publication Prerequisite
 */
export type PublicationPrerequisite = {
  id: PublicationIdentifier

  display_option?: DisplayOption
}
