import FileDB

@Model
public struct Script {
    /// The script’s adventure point value
    @Minimum(2)
    @MultipleOf(2)
    let ap_value: Int?

    /// A list of languages that use this script.
    @Relationship(Language.self)
    let associated_languages: [Language.ID]

    /// The continents this language is present on.
    @MinItems(1)
    let continent: [AssociatedContinent]

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // ScriptTranslation
        /// The script’s name.
        @MinLength(1)
        let name: String

        /// A list of alternative names.
        @MinItems(1)
        let alternative_names: [AlternativeName]?

        /// The description of the alphabet.
        @MinLength(1)
        let alphabet: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
