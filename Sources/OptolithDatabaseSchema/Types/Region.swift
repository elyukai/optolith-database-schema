import FileDB

@Model
public struct Region {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // RegionTranslation

        /// The region’s name.
        @MinLength(1)
        let name: String
    }
}
