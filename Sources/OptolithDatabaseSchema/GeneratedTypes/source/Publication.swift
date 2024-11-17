//
//  Publication.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Publication: LocalizableEntity {
    /// The publication's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The publication category.
    public let category: Category
    
    /// If the publication may contain adult content.
    public let containsAdultContent: Bool
    
    /// If the publication is not (fully) implemented and thus needs to be excluded from * stable releases.
    public let isMissingImplementation: Bool
    
    /// The specific other publications this publication depends on data from.
    public let prerequisites: PublicationPrerequisites?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PublicationTranslation>

    public init(id: Int, category: Category, containsAdultContent: Bool, isMissingImplementation: Bool, prerequisites: PublicationPrerequisites? = nil, translations: LocaleMap<PublicationTranslation>) {
        self.id = id
        self.category = category
        self.containsAdultContent = containsAdultContent
        self.isMissingImplementation = isMissingImplementation
        self.prerequisites = prerequisites
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case category = "category"
        case containsAdultContent = "contains_adult_content"
        case isMissingImplementation = "is_missing_implementation"
        case prerequisites = "prerequisites"
        case translations = "translations"
    }
}

public struct PublicationTranslation: EntitySubtype {
    /// The publisher's publication identifier.
    public let id: String?
    
    /// The publication's name.
    public let name: NonEmptyString
    
    /// The publication's abbreviation.
    public let abbreviation: NonEmptyString
    
    /// The publication's release date.
    public let releaseDate: String?
    
    /// If this publication translation is not (fully) implemented and thus needs to be excluded from stable releases.
    public let isMissingImplementation: Bool

    public init(id: String? = nil, name: NonEmptyString, abbreviation: NonEmptyString, releaseDate: String? = nil, isMissingImplementation: Bool) {
        self.id = id
        self.name = name
        self.abbreviation = abbreviation
        self.releaseDate = releaseDate
        self.isMissingImplementation = isMissingImplementation
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case name = "name"
        case abbreviation = "abbreviation"
        case releaseDate = "release_date"
        case isMissingImplementation = "is_missing_implementation"
    }
}

/// The publication category.
public enum Category: String, EntitySubtype {
    case coreRules = "CoreRules"
    case expansionRules = "ExpansionRules"
    case sourcebook = "Sourcebook"
    case regionalSourcebook = "RegionalSourcebook"
}
