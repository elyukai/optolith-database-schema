import FileDB

@Model
public struct Ammunition {

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AmmunitionTranslation

        /// The item’s name.
        let name: String({ minLength: 1 })

        /// An auxiliary name or label of the item, if available.
        let secondary_name: String({ minLength: 1 })?

        let errata: Errata?
    }
}
