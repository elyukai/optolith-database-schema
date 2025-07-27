import FileDB

/// A base attribute of a character.
@Model
public struct Attribute {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AttributeTranslation

        /// The attribute’s name.
        let name: String({ minLength: 1 })

        /// The abbreviation of the attribute’s name.
        let abbreviation: String({ minLength: 1 })

        /// The description of the attribute.
        let description: String({ minLength: 1 })
    }
}
