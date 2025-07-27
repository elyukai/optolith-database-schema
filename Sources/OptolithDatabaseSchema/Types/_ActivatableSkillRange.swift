import FileDB

@Embedded
public struct Range {

  /// The range value.
  @Relationship(RangeValue)
  let value: RangeValue.ID
      translations: NestedLocaleMap(
        Optional,
        "RangeTranslation",
        Object(
          {
            note: Optional({
              comment:
                "A note, appended to the generated string in parenthesis. If the generated is modified using `replacement`, the note is appended to the modifier string.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            replacement: Optional({
              comment:
                "A replacement string. If `note` is provided, it is appended to the replaced string.",
              type: IncludeIdentifier(ResponsiveTextReplace),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }

@ModelEnum
public enum RangeValue {
    case Modifiable(IncludeIdentifier(ModifiableRange))
    case Sight
    case Self
    Global: EnumCase({ comment: "German: *dereumfassend*", type: null }),
    case Touch
    case Fixed(IncludeIdentifier(FixedRange))
    case CheckResultBased(IncludeIdentifier(CheckResultBasedRange))
}

@Embedded
public struct ModifiableRange {
  /// If `true`, the range is a maximum range.
  let is_maximum: Boolean()?

  /// The initial skill modification identifier/level.
  let initial_modification_level: SkillModificationLevelIdentifier()
  /// If `true`, the range is a radius.
  let is_radius: Boolean()?
  }

@Embedded
public struct FixedRange {
  /// If `true`, the range is a maximum range.
  let is_maximum: Boolean()?

  /// The (unitless) range value.
  let value: Integer({ minimum: 1 })

  /// The unit of the `value`.
  @Relationship(RangeUnit)
  let unit: RangeUnit.ID
  /// If `true`, the range is a radius.
  let is_radius: Boolean()?
  }

@Embedded
public struct CheckResultBasedRange {
  /// If the range is the maximum range.
  let is_maximum: Boolean()?

  /// The base value that is derived from the check result.
  @Relationship(CheckResultValue)
  let base: CheckResultValue.ID
  /// If defined, it modifies the base value.
  @Relationship(CheckResultBasedModifier)
  let modifier: CheckResultBasedModifier.ID?

  /// The duration unit.
  @Relationship(RangeUnit)
  let unit: RangeUnit.ID
  /// If `true`, the range is a radius.
  let is_radius: Boolean()?
  }

@ModelEnum
public enum RangeUnit {
    case Steps
    case Miles
}
