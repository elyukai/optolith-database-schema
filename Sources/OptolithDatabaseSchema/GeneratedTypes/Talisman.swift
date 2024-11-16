//
//  Talisman.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Talisman: LocalizableEntity {
    /// The talisman's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The tradition(s) the talisman belongs to.
    public let tradition: [BlessedTraditionReference]
    
    /// The talisman type, if any.
    public let type: TalismanType?
    
    /// The AP value for the required trade secret, if possible.
    public let apValue: Int?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<TalismanTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case tradition = "tradition"
        case type = "type"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public enum TalismanType: String, EntitySubtype {
    case mainTalisman = "MainTalisman"
    case talisman = "Talisman"
    case minorTalisman = "MinorTalisman"
    case regalia = "Regalia"
    case powerfulTalisman = "PowerfulTalisman"
}

public struct TalismanTranslation: EntitySubtype {
    /// The name of the talisman.
    public let name: NonEmptyString
    
    /// The effect description.
    public let effect: NonEmptyMarkdown
    
    /// The activation parameters.
    public let activation: TalismanActivationTranslation?
    
    public let errata: Errata?
}

public struct TalismanActivationTranslation: EntitySubtype {
    /// The KP cost.
    public let cost: Int
    
    /// The duration.
    public let duration: NonEmptyString
}
