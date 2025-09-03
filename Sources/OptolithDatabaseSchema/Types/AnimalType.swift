import FileDB

@Model
public struct AnimalType {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // AnimalTypeTranslation
        /// The animal type’s name.
        @MinLength(1)
        let name: String
    }
}
