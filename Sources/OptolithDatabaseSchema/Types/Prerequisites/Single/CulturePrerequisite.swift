import FileDB

/// Requires a specific culture or one of a specific set of cultures.
@Embedded
public struct CulturePrerequisite {
    /// The culture’s identifier.
    @Relationship(Culture.self)
    let id: Culture.ID

    let display_option: DisplayOption?
}
