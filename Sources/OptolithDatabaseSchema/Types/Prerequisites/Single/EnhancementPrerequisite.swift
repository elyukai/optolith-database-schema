import FileDB

/// Requires a specific enhancement from a skill.
@Embedded
public struct EnhancementPrerequisite {
    /// The required enhancement.
    @Relationship(Enhancement.self)
    let id: Enhancement.ID
}
