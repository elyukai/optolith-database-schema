import FileDB

@Embedded
public struct Range {

  /// The range value.
  let value: RangeValue

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation { // RangeTranslation
            /// A note, appended to the generated string in parenthesis. If the generated is modified using `replacement`, the note is appended to the modifier string.
            let note: ResponsiveTextOptional?

            /// A replacement string. If `note` is provided, it is appended to the replaced string.
            let replacement: ResponsiveTextReplace?
          }
  }

@ModelEnum
public enum RangeValue {
    case Modifiable(ModifiableRange)
    case Sight
    case `Self`
    /// German: *dereumfassend*
    case Global
    case Touch
    case Fixed(FixedRange)
    case CheckResultBased(CheckResultBasedRange)
}

@Embedded
public struct ModifiableRange {
  /// If `true`, the range is a maximum range.
  let is_maximum: Bool?

  /// The initial skill modification identifier/level.
  @Relationship(SkillModificationLevel.self)
  let initial_modification_level: SkillModificationLevel.ID

  /// If `true`, the range is a radius.
  let is_radius: Bool?
  }

@Embedded
public struct FixedRange {
  /// If `true`, the range is a maximum range.
  let is_maximum: Bool?

  /// The (unitless) range value.
  @Minimum(1)
  let value: Int

  /// The unit of the `value`.
  let unit: RangeUnit

  /// If `true`, the range is a radius.
  let is_radius: Bool?
  }

@Embedded
public struct CheckResultBasedRange {
  /// If the range is the maximum range.
  let is_maximum: Bool?

  /// The base value that is derived from the check result.
  let base: CheckResultValue

  /// If defined, it modifies the base value.
  let modifier: CheckResultBasedModifier?

  /// The duration unit.
  let unit: RangeUnit

  /// If `true`, the range is a radius.
  let is_radius: Bool?
  }

@ModelEnum
public enum RangeUnit {
    case Steps
    case Miles
}
