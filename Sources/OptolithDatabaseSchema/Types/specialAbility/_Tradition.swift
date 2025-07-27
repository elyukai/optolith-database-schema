import FileDB

@Embedded
public struct SpecialRule {
  /// An optional label that is displayed and placed before the actual text.
  let label: String({ minLength: 1 })?

  /// The text of a special rule.
  let text: String({ minLength: 1 })
  }
