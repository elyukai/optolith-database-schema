//
//  _ArcaneTradition.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct ArcaneTradition: LocalizableEntity {
    /// The arcane tradition's identifier. An unique, increasing integer.
    public let id: Int
    
    public let prerequisites: ArcaneTraditionPrerequisites
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ArcaneTraditionTranslation>
}

public struct ArcaneTraditionTranslation: EntitySubtype {
    /// The arcane tradition's name.
    public let name: NonEmptyString
}
