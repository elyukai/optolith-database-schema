import FileDB

@Embedded
public struct RatedSumPrerequisite {

  /// The minimum required sum of the targets’ ratings.
  let sum: Integer({ minimum: 0 })

  /// The targets that are included in calculating the sum.
  let targets: Array(SkillIdentifier(), { minItems: 2 })
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
