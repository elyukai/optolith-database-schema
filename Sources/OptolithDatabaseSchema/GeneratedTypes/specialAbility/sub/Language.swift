//
//  Language.swift
//  OptolithDatabaseSchema
//

public struct Language: LocalizableEntity {
    /// The language's identifier. An unique, increasing integer.
    public let id: Int

    /// The continents this language is present on.
    public let continent: [AssociatedContinent]

    /// Language-specific specializations. Either a list of possible options or a indefinite description of what may be a specialization.
    public let specializations: Specializations?

    public let prerequisites: LanguagePrerequisites?

    /// The maximum possible level of the language. Only specified if lower than default of 3.
    public let maxLevel: Double?

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<LanguageTranslation>

    public init(id: Int, continent: [AssociatedContinent], specializations: Specializations? = nil, prerequisites: LanguagePrerequisites? = nil, maxLevel: Double? = nil, src: PublicationRefs, translations: LocaleMap<LanguageTranslation>) {
        self.id = id
        self.continent = continent
        self.specializations = specializations
        self.prerequisites = prerequisites
        self.maxLevel = maxLevel
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case continent = "continent"
        case specializations = "specializations"
        case prerequisites = "prerequisites"
        case maxLevel = "max_level"
        case src = "src"
        case translations = "translations"
    }
}

public enum Specializations: EntitySubtype {
    case specific(SpecificSpecializations)
    case indefinite(IndefiniteSpecializations)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case specific = "specific"
        case indefinite = "indefinite"
    }

    private enum Discriminator: String, Decodable {
        case specific = "Specific"
        case indefinite = "Indefinite"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .specific:
            self = .specific(try container.decode(SpecificSpecializations.self, forKey: .specific))
        case .indefinite:
            self = .indefinite(try container.decode(IndefiniteSpecializations.self, forKey: .indefinite))
        }
    }
}

public struct SpecificSpecializations: EntitySubtype {
    /// A list of specific possible specializations.
    public let list: [SpecificSpecialization]

    public init(list: [SpecificSpecialization]) {
        self.list = list
    }
}

public struct SpecificSpecialization: EntitySubtype {
    /// The specialization's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SpecificSpecializationTranslation>

    public init(id: Int, translations: LocaleMap<SpecificSpecializationTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct SpecificSpecializationTranslation: EntitySubtype {
    /// The name of the specialization.
    public let name: NonEmptyString

    /// The specialization description. It will be appended to the name in parenthesis.
    public let description: NonEmptyString?

    public init(name: NonEmptyString, description: NonEmptyString? = nil) {
        self.name = name
        self.description = description
    }
}

public struct IndefiniteSpecializations: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteSpecializationsTranslation>

    public init(translations: LocaleMap<IndefiniteSpecializationsTranslation>) {
        self.translations = translations
    }
}

public struct IndefiniteSpecializationsTranslation: EntitySubtype {
    /// The specializations description.
    public let description: NonEmptyString

    /// An input label or placeholder text for an UI element if it differs from the `description`.
    public let label: NonEmptyString?

    public init(description: NonEmptyString, label: NonEmptyString? = nil) {
        self.description = description
        self.label = label
    }
}

public struct LanguageTranslation: EntitySubtype {
    /// The name of the language.
    public let name: NonEmptyString

    /// A list of alternative names.
    public let alternativeNames: [AlternativeName]?

    /// The description of the language.
    public let description: NonEmptyString?

    public let errata: Errata?

    public init(name: NonEmptyString, alternativeNames: [AlternativeName]? = nil, description: NonEmptyString? = nil, errata: Errata? = nil) {
        self.name = name
        self.alternativeNames = alternativeNames
        self.description = description
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case alternativeNames = "alternative_names"
        case description = "description"
        case errata = "errata"
    }
}
