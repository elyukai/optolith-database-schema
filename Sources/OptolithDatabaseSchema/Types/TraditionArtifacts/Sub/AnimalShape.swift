import FileDB

@Model
public struct AnimalShape {
    /// The animal shape’s path.
    @Relationship(AnimalShapePath.self)
    let path: AnimalShapePath.ID

    /// The animal shape’s size.
    @Relationship(AnimalShapeSize.self)
    let size: AnimalShapeSize.ID

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // AnimalShapeTranslation
        /// The animal shape’s name.
        @MinLength(1)
        let name: String
    }
}
