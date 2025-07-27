import FileDB

@Model
public struct Region {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // RegionTranslation

        /// The region’s name.
        let name: String({ minLength: 1 })
    }
}
