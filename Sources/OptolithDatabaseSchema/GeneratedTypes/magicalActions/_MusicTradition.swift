//
//  _MusicTradition.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// A reference to a music tradition with the music-tradition-specific name of the entry
public struct MusicTraditionReference: EntitySubtype {
    /// The music tradition's identifier.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MusicTraditionReferenceTranslation>

    public init(id: Int, translations: LocaleMap<MusicTraditionReferenceTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct MusicTraditionReferenceTranslation: EntitySubtype {
    /// The music-tradition-specific name of the entry.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}

public struct MusicDuration: EntitySubtype {
    public let length: MusicLength

    public let reusability: MusicReusability

    public init(length: MusicLength, reusability: MusicReusability) {
        self.length = length
        self.reusability = reusability
    }
}

public enum MusicLength: String, EntitySubtype {
    case long = "Long"
    case short = "Short"
}

public enum MusicReusability: String, EntitySubtype {
    case oneTime = "OneTime"
    case sustainable = "Sustainable"
}
