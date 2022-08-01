/**
 * The relevance of the rule for Optolith. It may be that it influences
 * character creating but it may also just influnce the character sheet. If it
 * is linked to systems in Optolith, it may be specified if this rule has not
 * been implemented in Optolith yet.
 */
export type Relevance =
  | { tag: "Extraneous"; extraneous: {} }
  | { tag: "Linked"; linked: LinkedRelevance }

export type LinkedRelevance = {
  /**
   * Does the optional rule have an impact on character creation or character
   * sheet and this effect has not been implemented in Optolith yet?
   */
  is_missing_implementation: boolean
}
