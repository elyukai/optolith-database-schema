import FileDB

@Embedded
public struct RatedSumPrerequisite {

  /// The minimum required sum of the targets’ ratings.
  @Minimum(0)
  let sum: Int

  /// The targets that are included in calculating the sum.
  @MinItems(2)
  @Relationship(Skill.self)
  let targets: [Skill.ID]

      let display_option: DisplayOption?
  }
