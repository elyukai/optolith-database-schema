import FileDB

@Model
public struct EquipmentPackage {
  /// All items in the package. You have to provide the item (template) identifier and you can optionally provide the number of how often an item is included in the package.
  @MinItems(2)
  let items: [EquipmentPackageItem]?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // EquipmentPackageTranslation

        /// The equipment package’s name.
        @MinLength(1)
        let name: String
    }
}

@Embedded
public struct EquipmentPackageItem {

  /// The item’s identifier.
  let id: EquipmentIdentifier

  /// The number of how often the item is included in the package.
  @Minimum(2)
  let number: Int?
  }
