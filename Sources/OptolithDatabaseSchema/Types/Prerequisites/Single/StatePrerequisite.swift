import FileDB

/// Requires a specific state to be active.
@Embedded
public struct StatePrerequisite {
    @Relationship(State.self)
    let id: State.ID

    let display_option: DisplayOption?
}
