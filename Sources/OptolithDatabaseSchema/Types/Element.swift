import FileDB

@Model
public struct Element {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ElementTranslation

        /// The element’s name.
        let name: String({ minLength: 1 })
    }
}
