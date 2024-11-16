//
//  MagicalSign.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
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
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case effect = "effect"
        case errata = "errata"
    }
}
