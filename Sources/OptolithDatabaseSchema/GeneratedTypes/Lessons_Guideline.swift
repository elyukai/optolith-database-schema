//
//  Lessons_Guideline.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Guideline: LocalizableEntity {
    /// The guideline's identifier. An unique, increasing integer.
    public let id: Int

    /// Maximum number of spells that can be exchanged.
    public let spellworkChangesAllowed: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<GuidelineTranslation>

    public init(id: Int, spellworkChangesAllowed: Int, translations: LocaleMap<GuidelineTranslation>) {
        self.id = id
        self.spellworkChangesAllowed = spellworkChangesAllowed
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case spellworkChangesAllowed = "spellwork_changes_allowed"
        case translations = "translations"
    }
}

public struct GuidelineTranslation: EntitySubtype {
    /// The guideline name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
