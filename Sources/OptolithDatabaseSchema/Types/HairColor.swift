import FileDB

@Model
public struct HairColor {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // HairColorTranslation
        /// The hair color’s name.
        @MinLength(1)
        let name: String
    }
}
