import FileDB

/// Requires a specific extension rule (focus rule or optional rule) to be used/active.
@Embedded
public struct RulePrerequisite {
    let id: ExtensionRuleIdentifier

    let display_option: DisplayOption?
}
