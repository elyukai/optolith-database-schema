import FileDB

@Model
public struct HairColor {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // HairColorTranslation

        /// The hair color’s name.
        let name: String({ minLength: 1 })
    }
}
