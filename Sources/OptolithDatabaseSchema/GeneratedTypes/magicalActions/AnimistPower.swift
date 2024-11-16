//
//  AnimistPower.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct AnimistPower: LocalizableEntity {
    /// The animist power's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck
    
    /// Measurable parameters of a animist power.
    public let parameters: AnimistPowerPerformanceParameters
    
    /// The associated property.
    public let property: PropertyReference
    
    /// The tribe traditions the animist power is available to. It may be available to all or only specific tribes.
    /// 
    /// If no tribe tradition is given, the animist power is generally available to all tribe traditions.
    public let tribeTradition: [AnimistTribeReference]
    
    /// States which column is used to improve the skill. It is a fixed value or depends on the primary patron.
    public let improvementCost: AnimistPowerImprovementCost
    
    public let prerequisites: AnimistPowerPrerequisites?
    
    /// The animist power can have multiple levels. Each level is skilled separately. A previous level must be on at least 10 so that the next higher level can be activated and skilled. A higher level cannot be skilled higher than a lower level. Each level also adds an effect text to the text of the first level.
    public let levels: [AnimistPowerLevel]?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimistPowerTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case parameters = "parameters"
        case property = "property"
        case tribeTradition = "tribe_tradition"
        case improvementCost = "improvement_cost"
        case prerequisites = "prerequisites"
        case levels = "levels"
        case src = "src"
        case translations = "translations"
    }
}

public struct AnimistPowerTranslation: EntitySubtype {
    /// The name of the animist power.
    public let name: NonEmptyString
    
    /// The full name of the entry as stated in the sources. Only use when
    /// `name` needs to be different from full name for text generation
    /// purposes.
    public let nameInLibrary: NonEmptyString?
    
    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
    public let effect: ActivatableSkillEffect
    
    @available(*, deprecated)
    public let cost: OldParameter
    
    @available(*, deprecated)
    public let duration: OldParameter
    
    /// A prerequisites text.
    @available(*, deprecated)
    public let prerequisites: String?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case effect = "effect"
        case cost = "cost"
        case duration = "duration"
        case prerequisites = "prerequisites"
        case errata = "errata"
    }
}

public struct AnimistPowerLevel: EntitySubtype {
    /// The level number.
    public let level: Int
    
    /// The source references, if different than the references for level 1.
    public let src: PublicationRefs?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimistPowerLevelTranslation>
}

public struct AnimistPowerLevelTranslation: EntitySubtype {
    /// An additional effect description for this level.
    public let effect: NonEmptyMarkdown
}

/// Measurable parameters of a animist power.
@DiscriminatedEnum
public enum AnimistPowerPerformanceParameters: EntitySubtype {
    case oneTime(OneTimeAnimistPowerPerformanceParameters)
    case sustained(SustainedAnimistPowerPerformanceParameters)
}

public struct OneTimeAnimistPowerPerformanceParameters: EntitySubtype {
    /// The AE cost value, either a flat value or defined dynamically by the primary patron.
    public let cost: OneTimeAnimistPowerCost
    
    /// The duration.
    public let duration: OneTimeAnimistPowerDuration
}

@DiscriminatedEnum
public enum OneTimeAnimistPowerCost: EntitySubtype {
    case fixed(FixedOneTimeAnimistPowerCost)
    case byPrimaryPatron(OneTimeAnimistPowerCostByPrimaryPatron)
}

public struct FixedOneTimeAnimistPowerCost: EntitySubtype {
    /// The AE cost value.
    public let value: Int
    
    /// If defined, half of the AE cost `value` has to be paid each interval.
    public let interval: DurationUnitValue?
}

public struct OneTimeAnimistPowerCostByPrimaryPatron: EntitySubtype {
    /// If defined, half of the AE cost `value` has to be paid each interval.
    public let interval: DurationUnitValue?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimistPowerCostByPrimaryPatronTranslation>?
}

@DiscriminatedEnum
public enum OneTimeAnimistPowerDuration: EntitySubtype {
    case immediate
    case fixed(FamiliarsTrickFixedOneTimeCostTranslation)
    case checkResultBased(CheckResultBasedDuration)
}

public struct SustainedAnimistPowerPerformanceParameters: EntitySubtype {
    /// The AE cost value, either a flat value or defined dynamically by the primary patron.
    public let cost: SustainedAnimistPowerCost
}

@DiscriminatedEnum
public enum SustainedAnimistPowerCost: EntitySubtype {
    case fixed(FixedSustainedAnimistPowerCost)
    case byPrimaryPatron(SustainedAnimistPowerCostByPrimaryPatron)
}

public struct FixedSustainedAnimistPowerCost: EntitySubtype {
    /// The AE cost value.
    public let value: Int
    
    /// Half of the AE cost `value` has to be paid each interval.
    public let interval: DurationUnitValue
}

public struct SustainedAnimistPowerCostByPrimaryPatron: EntitySubtype {
    /// Half of the AE cost `value` has to be paid each interval.
    public let interval: DurationUnitValue
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimistPowerCostByPrimaryPatronTranslation>?
}

public struct AnimistPowerCostByPrimaryPatronTranslation: EntitySubtype {
    /// A note, appended to the generated string in parenthesis.
    public let note: ResponsiveTextOptional
}

@DiscriminatedEnum
public enum AnimistPowerImprovementCost: EntitySubtype {
    case fixed(ImprovementCost)
    case byPrimaryPatron
}
