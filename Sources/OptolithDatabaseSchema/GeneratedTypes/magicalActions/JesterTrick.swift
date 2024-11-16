//
//  JesterTrick.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct JesterTrick: LocalizableEntity {
    /// The jester trick's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck
    
    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    public let checkPenalty: SkillCheckPenalty?
    
    /// Measurable parameters of a jester trick.
    public let parameters: JesterTrickPerformanceParameters
    
    /// The target category – the kind of creature or object – the skill affects.
    public let target: AffectedTargetCategories
    
    /// The associated property.
    public let property: PropertyReference
    
    /// States which column is used to improve the skill.
    public let improvementCost: ImprovementCost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<JesterTrickTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case checkPenalty = "check_penalty"
        case parameters = "parameters"
        case target = "target"
        case property = "property"
        case improvementCost = "improvement_cost"
        case src = "src"
        case translations = "translations"
    }
}

public struct JesterTrickTranslation: EntitySubtype {
    /// The name of the jester trick.
    public let name: NonEmptyString
    
    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
    public let effect: ActivatableSkillEffect
    
    @available(*, deprecated)
    public let castingTime: OldParameter
    
    @available(*, deprecated)
    public let cost: OldParameter
    
    @available(*, deprecated)
    public let range: OldParameter
    
    @available(*, deprecated)
    public let duration: OldParameter
    
    @available(*, deprecated)
    public let target: String
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case effect = "effect"
        case castingTime = "casting_time"
        case cost = "cost"
        case range = "range"
        case duration = "duration"
        case target = "target"
        case errata = "errata"
    }
}

/// Measurable parameters of a geode ritual.
public struct JesterTrickPerformanceParameters: EntitySubtype {
    /// The casting time.
    public let castingTime: JesterTrickCastingTime
    
    /// The AE cost.
    public let cost: JesterTrickCost
    
    /// The range.
    public let range: JesterTrickRange
    
    /// The duration.
    public let duration: JesterTrickDuration    
    
    private enum CodingKeys: String, CodingKey {
        case castingTime = "casting_time"
        case cost = "cost"
        case range = "range"
        case duration = "duration"
    }
}

public struct JesterTrickCastingTime: EntitySubtype {
    /// The casting time in actions.
    public let value: Int
}

public struct JesterTrickCost: EntitySubtype {
    /// The AE cost value.
    public let value: Int
}

@DiscriminatedEnum
public enum JesterTrickRange: EntitySubtype {
    case touch
    case `self`
    case fixed(FixedJesterTrickRange)
}

public struct FixedJesterTrickRange: EntitySubtype {
    /// The range in steps/m.
    public let value: Int
}

@DiscriminatedEnum
public enum JesterTrickDuration: EntitySubtype {
    case immediate
    case fixed(FixedJesterTrickDuration)
    case checkResultBased(CheckResultBasedDuration)
}

public struct FixedJesterTrickDuration: EntitySubtype {
    /// The (unitless) duration.
    public let value: Int
    
    /// The duration unit.
    public let unit: DurationUnit
}
