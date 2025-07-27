import FileDB

/// Requires a specific enhancement from a skill.
@Embedded
public struct EnhancementPrerequisite {

  /// The required enhancement.
  let id: EnhancementIdentifier()
  }
