import FileDB

@Model
public struct Tribe {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // TribeTranslation

        /// The tribe’s name.
        let name: String({ minLength: 1 })
    }
}
