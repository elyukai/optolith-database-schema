import FileDB

@Embedded
public struct RatedMinimumNumberPrerequisite {

  /// The minimum number of skills that need to be on the defined minimum skill rating.
  let number: Integer({ minimum: 1 })

  /// The minimum skill rating the defined minimum number of skills need to be on.
  let value: Integer({ minimum: 1 })

  /// The targets that contribute to satisfying the prerequisite.
  @Relationship(RatedMinimumNumberPrerequisiteTarget)
  let targets: RatedMinimumNumberPrerequisiteTarget.ID
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }

@ModelEnum
public enum RatedMinimumNumberPrerequisiteTarget {
    case Skills(IncludeIdentifier(RatedMinimumNumberPrerequisiteSkillsTarget))
    case CombatTechniques(IncludeIdentifier(RatedMinimumNumberPrerequisiteCombatTechniquesTarget))
    case Spellworks(IncludeIdentifier(RatedMinimumNumberPrerequisiteSpellworksTarget))
    case Liturgies(IncludeIdentifier(RatedMinimumNumberPrerequisiteLiturgiesTarget))
}

@Embedded
public struct RatedMinimumNumberPrerequisiteSkillsTarget {

  /// The skills that are taken into account for satisfying the prerequisite.
  let targets: Array(SkillIdentifier(), { minItems: 2, uniqueItems: true })
  }

@Embedded
public struct RatedMinimumNumberPrerequisiteCombatTechniquesTarget {

  /// The skills that are taken into account for satisfying the prerequisite.
  @Relationship(RatedMinimumNumberPrerequisiteCombatTechniquesTargetGroup)
  let group: RatedMinimumNumberPrerequisiteCombatTechniquesTargetGroup.ID
  }

@ModelEnum
public enum RatedMinimumNumberPrerequisiteCombatTechniquesTargetGroup {
    case All
    case Close
    case Ranged
}

@Embedded
public struct RatedMinimumNumberPrerequisiteSpellworksTarget {

  /// The skills that are taken into account for satisfying the prerequisite.
  let property: PropertyIdentifier()
  }

@Embedded
public struct RatedMinimumNumberPrerequisiteLiturgiesTarget {

  /// The skills that are taken into account for satisfying the prerequisite.
  let aspect: AspectIdentifier()
  }
