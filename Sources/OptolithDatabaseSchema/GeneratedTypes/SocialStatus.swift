//
//  SocialStatus.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct SocialStatus: LocalizableEntity {
    /// The social status' identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SocialStatusTranslation>

    public init(id: Int, translations: LocaleMap<SocialStatusTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct SocialStatusTranslation: EntitySubtype {
    /// The social status name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
