//
//  MagicalRune.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct MagicalRune: LocalizableEntity {
    /// The magical rune's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The options the magical rune has, if any.
    /// 
    /// If there are multiple options, the magical rune may be activated for each
    /// option, that is, multiple times.
    public let options: [MagicalRuneOption]?
    
    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck
    
    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    public let checkPenalty: MagicalRuneCheckPenalty?
    
    /// Measurable parameters of a magical rune.
    public let parameters: MagicalRunePerformanceParameters
    
    /// The associated property.
    public let property: PropertyReference
    
    /// States which column is used to improve the skill.
    public let improvementCost: MagicalRuneImprovementCost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalRuneTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case options = "options"
        case check = "check"
        case checkPenalty = "check_penalty"
        case parameters = "parameters"
        case property = "property"
        case improvementCost = "improvement_cost"
        case src = "src"
        case translations = "translations"
    }
}

public struct MagicalRuneTranslation: EntitySubtype {
    /// The name of the magical rune.
    /// 
    /// If the rune has an option, the option’s name will/should not be included in
    /// the name as well as its surrounding parenthesis. It will/should be combined
    /// on demand.
    public let name: NonEmptyString
    
    /// The full name of the entry as stated in the sources. Only use when `name`
    /// needs to be different from full name for text generation purposes.
    public let nameInLibrary: NonEmptyString?
    
    /// The native name of the magical rune.
    public let nativeName: NonEmptyString?
    
    /// The effect description may be either a plain text or a text that is
    /// divided by a list of effects for each quality level. It may also be a
    /// list for each two quality levels.
    public let effect: ActivatableSkillEffect
    
    @available(*, deprecated)
    public let cost: OldParameter
    
    @available(*, deprecated)
    public let craftingTime: OldParameterBySpeed
    
    @available(*, deprecated)
    public let duration: OldParameterBySpeed
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case nativeName = "native_name"
        case effect = "effect"
        case cost = "cost"
        case craftingTime = "crafting_time"
        case duration = "duration"
        case errata = "errata"
    }
}

public struct OldParameterBySpeed: EntitySubtype {
    public let slow: OldParameter
    
    public let fast: OldParameter
}

@DiscriminatedEnum
public enum MagicalRuneCheckPenalty: EntitySubtype {
    case combatTechnique(MagicalRuneCombatTechniqueCheckPenalty)
}

public struct MagicalRuneCombatTechniqueCheckPenalty: EntitySubtype {
    /// A map from combat techniques to their modifiers.
    public let map: [MagicalRuneCombatTechniqueCheckPenaltyMapping]
    
    public let rest: MagicalRuneCombatTechniqueCheckPenaltyRest
}

public struct MagicalRuneCombatTechniqueCheckPenaltyMapping: EntitySubtype {
    /// The combat technique's identifier.
    public let id: CombatTechniqueIdentifier
    
    /// The check modifier for the specified combat technique.
    public let modifier: Int
}

public struct MagicalRuneCombatTechniqueCheckPenaltyRest: EntitySubtype {
    /// The check modifier for combat techniques not specified in `map`.
    public let modifier: Int
}

/// Measurable parameters of a magical rune.
public struct MagicalRunePerformanceParameters: EntitySubtype {
    /// The AE cost.
    public let cost: MagicalRuneCost
    
    /// The crafting time.
    public let craftingTime: MagicalRuneCraftingTime
    
    /// The duration.
    public let duration: MagicalRuneDuration    
    
    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case craftingTime = "crafting_time"
        case duration = "duration"
    }
}

@DiscriminatedEnum
public enum MagicalRuneCost: EntitySubtype {
    case single(SingleMagicalRuneCost)
    case disjunction(MagicalRuneCostDisjunction)
    case derivedFromOption
}

@DiscriminatedEnum
public enum MagicalRuneOptionCost: EntitySubtype {
    case single(SingleMagicalRuneCost)
    case disjunction(MagicalRuneCostDisjunction)
}

public struct SingleMagicalRuneCost: EntitySubtype {
    /// The AE cost value.
    public let value: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SingleMagicalRuneCostTranslation>?
}

public struct SingleMagicalRuneCostTranslation: EntitySubtype {
    /// A note, appended to the generated string in parenthesis.
    public let note: ResponsiveTextOptional
}

public struct MagicalRuneCostDisjunction: EntitySubtype {
    /// A set of possible AE cost values.
    public let list: [SingleMagicalRuneCost]
}

public struct MagicalRuneCraftingTime: EntitySubtype {
    /// The (unitless) crafting time.
    public let value: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalRuneCraftingTimeTranslation>?
}

public struct MagicalRuneCraftingTimeTranslation: EntitySubtype {
    /// The crafting time has to be per a specific countable entity, e.g. `8
    /// action per person`.
    public let per: ResponsiveText
}

public struct MagicalRuneDuration: EntitySubtype {
    /// The duration on slow rune application.
    public let slow: CheckResultBasedDuration
    
    /// The duration on fast rune application.
    public let fast: CheckResultBasedDuration
}

@DiscriminatedEnum
public enum MagicalRuneImprovementCost: EntitySubtype {
    case constant(ConstantMagicalRuneImprovementCost)
    case derivedFromOption
}

public struct ConstantMagicalRuneImprovementCost: EntitySubtype {
    public let value: ImprovementCost
}

public struct MagicalRuneOption: EntitySubtype {
    /// The magical rune option’s identifier. An unique, increasing integer.
    public let id: Int
    
    /// The option-specific AE cost.
    public let cost: MagicalRuneOptionCost
    
    /// The option-specific improvement cost.
    public let improvementCost: ImprovementCost
    
    public let suboption: MagicalRuneSuboption
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalRuneOptionTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case cost = "cost"
        case improvementCost = "improvement_cost"
        case suboption = "suboption"
        case translations = "translations"
    }
}

@DiscriminatedEnum
public enum MagicalRuneSuboption: EntitySubtype {
    case custom(CustomMagicalRuneSuboption)
}

public struct CustomMagicalRuneSuboption: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CustomMagicalRuneSuboptionTranslation>
}

public struct CustomMagicalRuneSuboptionTranslation: EntitySubtype {
    /// One or more examples for the suboption.
    public let examples: [NonEmptyString]?
}

public struct MagicalRuneOptionTranslation: EntitySubtype {
    /// The name of the option.
    /// 
    /// The surrounding parenthesis will/should not be included, they will/should
    /// be generated.
    public let name: NonEmptyString
    
    /// The native name of the magical rune option.
    public let nativeName: NonEmptyString    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nativeName = "native_name"
    }
}
