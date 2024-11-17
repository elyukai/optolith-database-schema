//
//  Script.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Script: LocalizableEntity {
    /// The script's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The script's adventure point value.
    public let apValue: Int
    
    /// A list of languages that use this script.
    public let associatedLanguages: [LanguageReference]
    
    /// The continents this script is present on.
    public let continent: [AssociatedContinent]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ScriptTranslation>

    public init(id: Int, apValue: Int, associatedLanguages: [LanguageReference], continent: [AssociatedContinent], src: PublicationRefs, translations: LocaleMap<ScriptTranslation>) {
        self.id = id
        self.apValue = apValue
        self.associatedLanguages = associatedLanguages
        self.continent = continent
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case apValue = "ap_value"
        case associatedLanguages = "associated_languages"
        case continent = "continent"
        case src = "src"
        case translations = "translations"
    }
}

public struct ScriptTranslation: EntitySubtype {
    /// The name of the language.
    public let name: NonEmptyString
    
    /// A list of alternative names.
    public let alternativeNames: [AlternativeName]?
    
    /// The description of the alphabet.
    public let alphabet: NonEmptyString?
    
    public let errata: Errata?

    public init(name: NonEmptyString, alternativeNames: [AlternativeName]? = nil, alphabet: NonEmptyString? = nil, errata: Errata? = nil) {
        self.name = name
        self.alternativeNames = alternativeNames
        self.alphabet = alphabet
        self.errata = errata
    }    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case alternativeNames = "alternative_names"
        case alphabet = "alphabet"
        case errata = "errata"
    }
}
