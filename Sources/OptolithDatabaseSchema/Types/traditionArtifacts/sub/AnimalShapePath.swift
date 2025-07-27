import FileDB

@Model
public struct AnimalShapePath {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AnimalShapePathTranslation

        /// The animal shape path’s name.
        let name: String({ minLength: 1 })
    }
}
