import FileDB

@Model
public struct EyeColor {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // EyeColorTranslation

        /// The eye color’s name.
        let name: String({ minLength: 1 })
    }
}
