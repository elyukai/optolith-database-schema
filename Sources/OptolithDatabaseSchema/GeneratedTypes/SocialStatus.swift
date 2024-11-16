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
}

public struct SocialStatusTranslation: EntitySubtype {
    /// The social status name.
    public let name: NonEmptyString
}
