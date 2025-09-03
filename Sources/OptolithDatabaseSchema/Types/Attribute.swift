import FileDB

/// A base attribute of a character.
@Model
public struct Attribute {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // AttributeTranslation
        /// The attribute’s name.
        @MinLength(1)
        let name: String

        /// The abbreviation of the attribute’s name.
        @MinLength(1)
        let abbreviation: String

        /// The description of the attribute.
        @MinLength(1)
        let description: String
    }
}
