import FileDB

/// Requires a specific extension rule (focus rule or optional rule) to be used/active.
@Embedded
public struct RulePrerequisite {
      id: Required({
        type: IncludeIdentifier(ExtensionRuleIdentifier),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
