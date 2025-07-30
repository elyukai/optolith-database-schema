import FileDB

@Model
public struct AnimalShapePath {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // AnimalShapePathTranslation

        /// The animal shape path’s name.
        @MinLength(1)
        let name: String
    }
}
