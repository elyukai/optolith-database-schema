//
//  _Prerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// A prerequisite group has no influence on validation logic. It serves as a single unit for displaying purposes, where the source uses a prerequisites item that cannot be represented as a single prerequisite.
public struct PrerequisiteGroup<T: EntitySubtype>: EntitySubtype {
    public let list: [T]
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<NonEmptyString>
}

public struct PrerequisitesDisjunction<T: EntitySubtype>: EntitySubtype {
    public let list: [T]
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case list = "list"
        case displayOption = "display_option"
    }
}

@DiscriminatedEnum
public enum PrerequisitesElement<T: EntitySubtype>: EntitySubtype {
    case single(T)
    case disjunction(PrerequisitesDisjunction<T>)
    case group(PrerequisiteGroup<T>)
}

public typealias PlainPrerequisites<T: EntitySubtype> = [PrerequisitesElement<T>]

public struct PrerequisiteForLevel<T: EntitySubtype>: EntitySubtype {
    public let level: Int
    
    public let prerequisite: PrerequisitesElement<T>
}

public typealias PrerequisitesForLevels<T: EntitySubtype> = [PrerequisiteForLevel<T>]

public typealias DerivedCharacteristicPrerequisites = PlainPrerequisites<DerivedCharacteristicPrerequisiteGroup>

public typealias PublicationPrerequisites = PlainPrerequisites<PublicationPrerequisiteGroup>

public typealias PlainGeneralPrerequisites = PlainPrerequisites<GeneralPrerequisiteGroup>

public typealias GeneralPrerequisites = PrerequisitesForLevels<GeneralPrerequisiteGroup>

public typealias ProfessionPrerequisites = PlainPrerequisites<ProfessionPrerequisiteGroup>

public typealias AdvantageDisadvantagePrerequisites = PrerequisitesForLevels<AdvantageDisadvantagePrerequisiteGroup>

public typealias ArcaneTraditionPrerequisites = PlainPrerequisites<ArcaneTraditionPrerequisiteGroup>

public typealias PersonalityTraitPrerequisites = PlainPrerequisites<PersonalityTraitPrerequisiteGroup>

public typealias SpellworkPrerequisites = PlainPrerequisites<SpellworkPrerequisiteGroup>

public typealias LiturgyPrerequisites = PlainPrerequisites<LiturgyPrerequisiteGroup>

public typealias InfluencePrerequisites = PlainPrerequisites<InfluencePrerequisiteGroup>

public typealias LanguagePrerequisites = PrerequisitesForLevels<LanguagePrerequisiteGroup>

public typealias AnimistPowerPrerequisites = PlainPrerequisites<AnimistPowerPrerequisiteGroup>

public typealias GeodeRitualPrerequisites = PlainPrerequisites<GeodeRitualPrerequisiteGroup>

public typealias EnhancementPrerequisites = PlainPrerequisites<EnhancementPrerequisiteGroup>
