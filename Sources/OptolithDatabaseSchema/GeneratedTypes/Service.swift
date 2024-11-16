//
//  Service.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Service: LocalizableEntity {
    /// The service's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Defines for which creature type(s) the service is available.
    public let availability: [ServiceAvailability]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ServiceTranslation>
}

public enum ServiceAvailability: String, EntitySubtype {
    case summonedCreatures = "SummonedCreatures"
    case monstrosities = "Monstrosities"
}

public struct ServiceTranslation: EntitySubtype {
    /// The name of the service.
    public let name: NonEmptyString
    
    /// The description of the service.
    public let description: NonEmptyMarkdown
    
    public let errata: Errata?
}
