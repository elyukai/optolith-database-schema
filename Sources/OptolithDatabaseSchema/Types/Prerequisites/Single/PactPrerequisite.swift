import FileDB

/// Requires a specific pact.
@Embedded
public struct PactPrerequisite {
    /// The required pact category.
    @Relationship(PactCategory.self)
    let category: PactCategory.ID

    /// The required domain(s).
    @MinItems(1)
    @Relationship(PactDomain.self)
    let domain: [PactDomain.ID]?

    /// The level to which the minimum value applies.
    @Minimum(1)
    let level: Int?

    let display_option: DisplayOption?
}
