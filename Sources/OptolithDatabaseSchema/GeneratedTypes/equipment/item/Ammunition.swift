//
//  Ammunition.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Ammunition: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AmmunitionTranslation>
}

public struct AmmunitionTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString
    
    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case secondaryName = "secondary_name"
        case errata = "errata"
    }
}
