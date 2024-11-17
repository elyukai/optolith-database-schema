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

    public init(id: Int, types: [PactType], domains: [PactDomain], src: PublicationRefs, translations: LocaleMap<PactCategoryTranslation>) {
        self.id = id
        self.types = types
        self.domains = domains
        self.src = src
        self.translations = translations
    }
}

public struct PactCategoryTranslation: EntitySubtype {
    /// The name of the pact category.
    public let name: NonEmptyString

    public let errata: Errata?

    public init(name: NonEmptyString, errata: Errata? = nil) {
        self.name = name
        self.errata = errata
    }
}

public struct PactType: EntitySubtype {
    /// The type's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PactTypeTranslation>

    public init(id: Int, translations: LocaleMap<PactTypeTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct PactTypeTranslation: EntitySubtype {
    /// The name of the type.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}

public struct PactDomain: EntitySubtype {
    /// The domain's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PactDomainTranslation>

    public init(id: Int, translations: LocaleMap<PactDomainTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct PactDomainTranslation: EntitySubtype {
    /// The name of the domain.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
