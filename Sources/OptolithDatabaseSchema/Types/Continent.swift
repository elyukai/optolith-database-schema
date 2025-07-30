import FileDB

/// Continents are mostly referenced to in languages and scripts that occur on a specific continent.
@Model
public struct Continent {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // ContinentTranslation

        /// The continent name.
        @MinLength(1)
        let name: String
    }
}
