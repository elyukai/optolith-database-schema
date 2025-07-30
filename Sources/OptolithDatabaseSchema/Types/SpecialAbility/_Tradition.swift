import FileDB

@Embedded
public struct SpecialRule {
  /// An optional label that is displayed and placed before the actual text.
  @MinLength(1)
  let label: String?

  /// The text of a special rule.
  @MinLength(1)
  let text: String
  }
