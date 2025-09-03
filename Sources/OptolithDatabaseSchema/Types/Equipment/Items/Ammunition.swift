import FileDB

@Model
public struct Ammunition {
    /// The cost in silverthalers.
    let cost: Cost

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // AmmunitionTranslation
        /// The item’s name.
        @MinLength(1)
        let name: String

        /// An auxiliary name or label of the item, if available.
        @MinLength(1)
        let secondary_name: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
