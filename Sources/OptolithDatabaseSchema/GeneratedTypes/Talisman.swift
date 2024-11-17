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

    public init(id: Int, tradition: [BlessedTraditionReference], type: TalismanType? = nil, apValue: Int? = nil, src: PublicationRefs, translations: LocaleMap<TalismanTranslation>) {
        self.id = id
        self.tradition = tradition
        self.type = type
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }    
    
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

    public init(name: NonEmptyString, effect: NonEmptyMarkdown, activation: TalismanActivationTranslation? = nil, errata: Errata? = nil) {
        self.name = name
        self.effect = effect
        self.activation = activation
        self.errata = errata
    }
}

public struct TalismanActivationTranslation: EntitySubtype {
    /// The KP cost.
    public let cost: Int
    
    /// The duration.
    public let duration: NonEmptyString

    public init(cost: Int, duration: NonEmptyString) {
        self.cost = cost
        self.duration = duration
    }
}
