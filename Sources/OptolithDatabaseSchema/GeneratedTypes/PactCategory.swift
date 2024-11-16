//
//  PactCategory.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct PactCategory: LocalizableEntity {
    /// The pact category's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Types of creatures in this category.
    public let types: [PactType]
    
    /// Domains in this category.
    public let domains: [PactDomain]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PactCategoryTranslation>
}

public struct PactCategoryTranslation: EntitySubtype {
    /// The name of the pact category.
    public let name: NonEmptyString
    
    public let errata: Errata?
}

public struct PactType: EntitySubtype {
    /// The type's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PactTypeTranslation>
}

public struct PactTypeTranslation: EntitySubtype {
    /// The name of the type.
    public let name: NonEmptyString
}

public struct PactDomain: EntitySubtype {
    /// The domain's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PactDomainTranslation>
}

public struct PactDomainTranslation: EntitySubtype {
    /// The name of the domain.
    public let name: NonEmptyString
}
