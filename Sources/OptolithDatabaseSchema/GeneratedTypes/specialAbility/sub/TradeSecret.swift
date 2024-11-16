//
//  TradeSecret.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct TradeSecret: LocalizableEntity {
    /// The trade secret's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The adventure points value of the trade secret.
    public let apValue: Int
    
    /// Is this trade secret considered secret knowledge?
    public let isSecretKnowledge: Bool
    
    public let prerequisites: GeneralPrerequisites?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<TradeSecretTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case apValue = "ap_value"
        case isSecretKnowledge = "is_secret_knowledge"
        case prerequisites = "prerequisites"
        case src = "src"
        case translations = "translations"
    }
}

public struct TradeSecretTranslation: EntitySubtype {
    /// The name of the trade secret.
    public let name: NonEmptyString
    
    /// The description of the trade secret.
    public let description: NonEmptyMarkdown?
    
    public let errata: Errata?
}
