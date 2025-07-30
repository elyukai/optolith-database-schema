import FileDB

@Embedded
public struct InfluencePrerequisite {

  /// The influence’s identifier.
  @Relationship(Influence.self)
  let id: Influence.ID

  /// If the referenced influence must or must not be chosen.
  let active: Bool

      let display_option: DisplayOption?
  }
