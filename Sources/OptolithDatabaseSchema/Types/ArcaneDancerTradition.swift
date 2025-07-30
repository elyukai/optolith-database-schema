import FileDB

@Model
public struct ArcaneDancerTradition {
    let prerequisites: ArcaneTraditionPrerequisites

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // ArcaneDancerTraditionTranslation
        /// The arcane tradition’s name.
        @MinLength(1)
        let name: String
    }
}
