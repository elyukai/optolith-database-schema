import FileDB

@Model
public struct AnimalShapeSize {
    /// The animal shape size’s volume points
    @Minimum(1)
    let volume: Int

    /// The animal shape size’s adventure point value
    @Minimum(1)
    let ap_value: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // AnimalShapeSizeTranslation
        /// The animal shape size’s name.
        @MinLength(1)
        let name: String
    }
}
