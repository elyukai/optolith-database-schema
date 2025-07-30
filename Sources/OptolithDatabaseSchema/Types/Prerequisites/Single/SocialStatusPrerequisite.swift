import FileDB

/// Requires a minimum social status.
@Embedded
public struct SocialStatusPrerequisite {
    /// The minimum social status’s identifier.
    @Relationship(SocialStatus.self)
    let id: SocialStatus.ID

    let display_option: DisplayOption?
}
