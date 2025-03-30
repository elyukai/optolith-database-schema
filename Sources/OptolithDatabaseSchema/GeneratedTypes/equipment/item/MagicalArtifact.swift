//
//  MagicalArtifact.swift
//  OptolithDatabaseSchema
//

public struct MagicalArtifact: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalArtifactTranslation>

    public init(cost: Cost, src: PublicationRefs, translations: LocaleMap<MagicalArtifactTranslation>) {
        self.cost = cost
        self.src = src
        self.translations = translations
    }
}

public struct MagicalArtifactTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString

    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?

    /// Note text.
    public let note: NonEmptyMarkdown?

    /// Special rules text.
    public let rules: NonEmptyMarkdown?

    public let errata: Errata?

    public init(name: NonEmptyString, secondaryName: NonEmptyString? = nil, note: NonEmptyMarkdown? = nil, rules: NonEmptyMarkdown? = nil, errata: Errata? = nil) {
        self.name = name
        self.secondaryName = secondaryName
        self.note = note
        self.rules = rules
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case secondaryName = "secondary_name"
        case note = "note"
        case rules = "rules"
        case errata = "errata"
    }
}
