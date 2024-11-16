//
//  Language.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Language: LocalizableEntity {
    /// The language's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The continents this language is present on.
    public let continent: [AssociatedContinent]
    
    /// Language-specific specializations. Either a list of possible options or a
    /// indefinite description of what may be a specialization.
    public let specializations: Specializations?
    
    public let prerequisites: LanguagePrerequisites?
    
    /// The maximum possible level of the language. Only specified if lower than
    /// default of 3.
    public let maxLevel: Double?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<LanguageTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case continent = "continent"
        case specializations = "specializations"
        case prerequisites = "prerequisites"
        case maxLevel = "max_level"
        case src = "src"
        case translations = "translations"
    }
}

@DiscriminatedEnum
public enum Specializations: EntitySubtype {
    case specific(SpecificSpecializations)
    case indefinite(IndefiniteSpecializations)
}

public struct SpecificSpecializations: EntitySubtype {
    /// A list of specific possible specializations.
    public let list: [SpecificSpecialization]
}

public struct SpecificSpecialization: EntitySubtype {
    /// The specialization's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SpecificSpecializationTranslation>
}

public struct SpecificSpecializationTranslation: EntitySubtype {
    /// The name of the specialization.
    public let name: NonEmptyString
    
    /// The specialization description. It will be appended to the name in
    /// parenthesis.
    public let description: NonEmptyString?
}

public struct IndefiniteSpecializations: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteSpecializationsTranslation>
}

public struct IndefiniteSpecializationsTranslation: EntitySubtype {
    /// The specializations description.
    public let description: NonEmptyString
    
    /// An input label or placeholder text for an UI element if it differs
    /// from the `description`.
    public let label: NonEmptyString?
}

public struct LanguageTranslation: EntitySubtype {
    /// The name of the language.
    public let name: NonEmptyString
    
    /// A list of alternative names.
    public let alternativeNames: [AlternativeName]?
    
    /// The description of the language.
    public let description: NonEmptyString?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case alternativeNames = "alternative_names"
        case description = "description"
        case errata = "errata"
    }
}
