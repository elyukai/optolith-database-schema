//
//  RatedMinimumNumberPrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct RatedMinimumNumberPrerequisite: EntitySubtype {
    /// The minimum number of skills that need to be on the defined minimum skill rating.
    public let number: Int

    /// The minimum skill rating the defined minimum number of skills need to be on.
    public let value: Int

    /// The targets that contribute to satisfying the prerequisite.
    public let targets: RatedMinimumNumberPrerequisiteTarget

    public let displayOption: DisplayOption?

    public init(number: Int, value: Int, targets: RatedMinimumNumberPrerequisiteTarget, displayOption: DisplayOption? = nil) {
        self.number = number
        self.value = value
        self.targets = targets
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case number = "number"
        case value = "value"
        case targets = "targets"
        case displayOption = "display_option"
    }
}

@DiscriminatedEnum
public enum RatedMinimumNumberPrerequisiteTarget: EntitySubtype {
    case skills(RatedMinimumNumberPrerequisiteSkillsTarget)
    case combatTechniques(CombatTechniquesTarget)
    case spellworks(PropertyReference)
    case liturgies(AspectReference)
}

public struct RatedMinimumNumberPrerequisiteSkillsTarget: EntitySubtype {
    /// The skills that are taken into account for satisfying the prerequisite.
    public let list: [SkillReference]

    public init(list: [SkillReference]) {
        self.list = list
    }
}

public struct CombatTechniquesTarget: EntitySubtype {
    public let group: CombatTechniquesTargetGroup

    public init(group: CombatTechniquesTargetGroup) {
        self.group = group
    }
}

public enum CombatTechniquesTargetGroup: String, EntitySubtype {
    case all = "All"
    case close = "Close"
    case ranged = "Ranged"
}

public struct RatedMinimumNumberPrerequisiteSpellworksTarget: EntitySubtype {
    /// The skills that are taken into account for satisfying the prerequisite.
    public let property: PropertyReference

    public init(property: PropertyReference) {
        self.property = property
    }
}

public struct RatedMinimumNumberPrerequisiteLiturgiesTarget: EntitySubtype {
    /// The skills that are taken into account for satisfying the prerequisite.
    public let aspect: AspectReference

    public init(aspect: AspectReference) {
        self.aspect = aspect
    }
}
