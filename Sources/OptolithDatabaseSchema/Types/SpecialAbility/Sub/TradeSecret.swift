import FileDB

@Model
public struct TradeSecret {
    /// The trade secret’s adventure point value
    @Minimum(1)
    let ap_value: Int?

    /// Is this trade secret considered secret knowledge?
    let is_secret_knowledge: Bool

    let prerequisites: GeneralPrerequisites?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // TradeSecretTranslation
        /// The trade secret’s name.
        @MinLength(1)
        let name: String

        /// The description of the trade secret.
        @MinLength(1)
        @Markdown
        let description: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
