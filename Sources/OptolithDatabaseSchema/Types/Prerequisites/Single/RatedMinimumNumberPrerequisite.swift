import FileDB

@Embedded
public struct RatedMinimumNumberPrerequisite {
    /// The minimum number of skills that need to be on the defined minimum skill rating.
    @Minimum(1)
    let number: Int

    /// The minimum skill rating the defined minimum number of skills need to be on.
    @Minimum(1)
    let value: Int

    /// The targets that contribute to satisfying the prerequisite.
    let targets: RatedMinimumNumberPrerequisiteTarget

    let display_option: DisplayOption?
}

@ModelEnum
public enum RatedMinimumNumberPrerequisiteTarget {
    case skills(RatedMinimumNumberPrerequisiteSkillsTarget)
    case combatTechniques(RatedMinimumNumberPrerequisiteCombatTechniquesTarget)
    case spellworks(RatedMinimumNumberPrerequisiteSpellworksTarget)
    case liturgies(RatedMinimumNumberPrerequisiteLiturgiesTarget)
}

@Embedded
public struct RatedMinimumNumberPrerequisiteSkillsTarget {
    /// The skills that are taken into account for satisfying the prerequisite.
    @MinItems(2)
    @UniqueItems
    @Relationship(Skill.self)
    let targets: [Skill.ID]
}

@Embedded
public struct RatedMinimumNumberPrerequisiteCombatTechniquesTarget {
    /// The skills that are taken into account for satisfying the prerequisite.
    let group: RatedMinimumNumberPrerequisiteCombatTechniquesTargetGroup
}

@ModelEnum
public enum RatedMinimumNumberPrerequisiteCombatTechniquesTargetGroup {
    case all
    case close
    case ranged
}

@Embedded
public struct RatedMinimumNumberPrerequisiteSpellworksTarget {
    /// The skills that are taken into account for satisfying the prerequisite.
    @Relationship(Property.self)
    let property: Property.ID
}

@Embedded
public struct RatedMinimumNumberPrerequisiteLiturgiesTarget {
    /// The skills that are taken into account for satisfying the prerequisite.
    @Relationship(Aspect.self)
    let aspect: Aspect.ID
}
