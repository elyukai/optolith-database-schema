//
//  MagicalSign.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct MagicalSign: LocalizableEntity {
    public let id: Id
    
    public let prerequisites: GeneralPrerequisites?
    
    /// The associated magic property.
    public let property: PropertyReference
    
    /// The adventure points value.
    public let apValue: Int
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalSignTranslation>

    public init(id: Id, prerequisites: GeneralPrerequisites? = nil, property: PropertyReference, apValue: Int, src: PublicationRefs, translations: LocaleMap<MagicalSignTranslation>) {
        self.id = id
        self.prerequisites = prerequisites
        self.property = property
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case prerequisites = "prerequisites"
        case property = "property"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct MagicalSignTranslation: EntitySubtype {
    public let name: Name
    
    public let nameInLibrary: NameInLibrary?
    
    public let effect: Effect
    
    public let errata: Errata?

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, effect: Effect, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.effect = effect
        self.errata = errata
    }    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case effect = "effect"
        case errata = "errata"
    }
}
