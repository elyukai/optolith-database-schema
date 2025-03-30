//
//  OptionalRule.swift
//  OptolithDatabaseSchema
//

public struct OptionalRule: LocalizableEntity {
    /// The optional rule's identifier. An unique, increasing integer.
    public let id: Int

    /// Has the focus rule not been implemented in Optolith yet? This is also true if the focus rule does not (currently) apply to any Optolith feature.
    public let isMissingImplementation: Bool

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<OptionalRuleTranslation>

    public init(id: Int, isMissingImplementation: Bool, src: PublicationRefs, translations: LocaleMap<OptionalRuleTranslation>) {
        self.id = id
        self.isMissingImplementation = isMissingImplementation
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case isMissingImplementation = "is_missing_implementation"
        case src = "src"
        case translations = "translations"
    }
}

public struct OptionalRuleTranslation: EntitySubtype {
    /// The name of the optional rule.
    public let name: NonEmptyString

    /// The description of the optional rule.
    public let description: NonEmptyMarkdown

    public let errata: Errata?

    public init(name: NonEmptyString, description: NonEmptyMarkdown, errata: Errata? = nil) {
        self.name = name
        self.description = description
        self.errata = errata
    }
}
