import { PactCategoryReference, PactDomainReference } from "../../_SimpleReferences.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a specific pact.
 * @title Pact Prerequisite
 */
export type PactPrerequisite = {
  /**
   * The required pact category.
   */
  category: PactCategoryReference

  /**
   * The required domain(s).
   */
  domain_id?: PactDomainReference[]

  /**
   * The required pact level.
   * @integer
   * @minimum 1
   */
  level?: number

  display_option?: DisplayOption
}
