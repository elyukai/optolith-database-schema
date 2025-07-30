import FileDB

@Embedded
public struct PublicationPrerequisite {
    /// The publication’s identifier.
    @Relationship(Publication.self)
    let id: Publication.ID

    let display_option: DisplayOption?
}
