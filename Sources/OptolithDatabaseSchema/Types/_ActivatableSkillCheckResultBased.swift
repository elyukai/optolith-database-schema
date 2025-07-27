import FileDB

/// Defines the derived (unitless) value.
@ModelEnum
public enum CheckResultValue {
    case QualityLevels
    case SkillPoints
}

/// Defines how the the `value` is set off against the check result.
@ModelEnum
public enum CheckResultArithmetic {
    case Multiply
    case Divide
}

@Embedded
public struct CheckResultBasedModifier {

  /// The arithmetic how to apply the `value` to the `base`.
  @Relationship(CheckResultArithmetic)
  let arithmetic: CheckResultArithmetic.ID

  /// The value that is applied to the `base` using the defined `arithmetic`.
  let value: Integer({ minimum: 2 })
  }

/// Defines a parameter being based on a check result.
@Embedded
public struct CheckResultBased {

  /// The base value that is derived from the check result.
  @Relationship(CheckResultValue)
  let base: CheckResultValue.ID
  /// If defined, it modifies the base value.
  @Relationship(CheckResultBasedModifier)
  let modifier: CheckResultBasedModifier.ID?
  }
