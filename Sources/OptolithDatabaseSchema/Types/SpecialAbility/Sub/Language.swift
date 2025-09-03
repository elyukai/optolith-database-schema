import FileDB

@Model
public struct Language {
    /// The continents this language is present on.
    @MinItems(1)
    let continent: [AssociatedContinent]

    /// Language-specific specializations. Either a list of possible options or a indefinite description of what may be a specialization.
    let specializations: Specializations?

    let prerequisites: LanguagePrerequisites?

    /// The maximum possible level of the language. Only specified if lower than default of 3.
    @Minimum(1)
    @Maximum(2)
    let max_level: Int?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // LanguageTranslation
        /// The language’s name.
        @MinLength(1)
        let name: String

        /// A list of alternative names.
        @MinItems(1)
        let alternative_names: [AlternativeName]?

        /// The description of the language.
        @MinLength(1)
        let description: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@ModelEnum
public enum Specializations {
    case specific(SpecificSpecializations)
    case indefinite(IndefiniteSpecializations)
}

@Embedded
public struct SpecificSpecializations {
    /// A list of specific possible specializations.
    @MinItems(1)
    let list: [SpecificSpecialization]
}

@Embedded
public struct SpecificSpecialization {
    /// The specialization’s identifier.
    @Minimum(1)
    let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // SpecificSpecializationTranslation
        /// The specialization’s name.
        @MinLength(1)
        let name: String
        /// The specialization description. It will be appended to the name in parenthesis.
        @MinLength(1)
        let description: String?
    }
}

@Embedded
public struct IndefiniteSpecializations {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // IndefiniteSpecializationsTranslation
        /// The specializations description.
        @MinLength(1)
        let description: String
        /// An input label or placeholder text for an UI element if it differs from the `description`.
        @MinLength(1)
        let label: String?
    }
}
