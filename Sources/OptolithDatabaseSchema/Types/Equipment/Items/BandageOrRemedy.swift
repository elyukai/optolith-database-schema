import FileDB

@Model
public struct BandageOrRemedy {
    /// The cost in silverthalers.
    let cost: Cost

    /// The weight in kg.
    let weight: Weight

    /// The complexity of crafting the item.
    let complexity: Complexity?

    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    let structure_points: StructurePoints

    /// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
    let combat_use: CombatUse?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    public struct Translation {  // BandageOrRemedyTranslation
        /// The item’s name.
        @MinLength(1)
        let name: String

        /// An auxiliary name or label of the item, if available.
        @MinLength(1)
        let secondary_name: String?

        /// Note text.
        @MinLength(1)
        @Markdown
        let note: String?

        /// Special rules text.
        @MinLength(1)
        @Markdown
        let rules: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }

    public static let namePlural = "BandagesAndRemedies"
}
