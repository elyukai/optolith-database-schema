import FileDB

export const PactPrerequisite = TypeAlias(import.meta.url, {
  name: "PactPrerequisitePactPrerequisite",
  comment: "Requires a specific pact.",
  type: () =>
    Object({

  /// The required pact category.
  let category: PactCategoryIdentifier()
  /// The required domain(s).
  let domain: Array(PactDomainIdentifier(), { minItems: 1 })?
  /// The level to which the minimum value applies.
  let level: Integer({ minimum: 1 })?
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
