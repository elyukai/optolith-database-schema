//
//  _MusicTradition.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// A reference to a music tradition with the music-tradition-specific name of
/// the entry
public struct MusicTraditionReference: EntitySubtype {
    /// The music tradition's identifier.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MusicTraditionReferenceTranslation>
}

public struct MusicTraditionReferenceTranslation: EntitySubtype {
    /// The music-tradition-specific name of the entry.
    public let name: NonEmptyString
}

public struct MusicDuration: EntitySubtype {
    public let length: MusicLength
    
    public let reusability: MusicReusability
}

public enum MusicLength: String, EntitySubtype {
    case long = "Long"
    case short = "Short"
}

public enum MusicReusability: String, EntitySubtype {
    case oneTime = "OneTime"
    case sustainable = "Sustainable"
}
