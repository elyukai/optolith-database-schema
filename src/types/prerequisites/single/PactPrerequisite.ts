import { DisplayOption } from "../DisplayOption"

/**
 * Requires a specific pact.
 * @title Pact Prerequisite
 */
export type PactPrerequisite = {
  tag: "Pact"

  /**
   * The required pact category's identifier.
   * @integer
   * @minimum 1
   */
  category_id: number

  /**
   * The required domains' identifiers.
   */
  domain_id?: DomainId[]

  /**
   * The required pact level.
   * @integer
   * @minimum 1
   */
  level?: number

  display_option?: DisplayOption
}

/**
 * A domain's identifier.
 * @integer
 * @minimum 1
 */
type DomainId = number
