import FileDB

@Model
public struct Brew {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // BrewTranslation
        /// The brew’s name.
        @MinLength(1)
        let name: String
    }
}
