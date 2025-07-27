import FileDB

@Model
public struct EquipmentPackage {
  /// All items in the package. You have to provide the item (template) identifier and you can optionally provide the number of how often an item is included in the package.
  let items: Array(IncludeIdentifier(EquipmentPackageItem), { minItems: 2 })?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // EquipmentPackageTranslation

        /// The equipment package’s name.
        let name: String({ minLength: 1 })
    }
}

@Embedded
public struct EquipmentPackageItem {

  /// The item’s identifier.
  @Relationship(EquipmentIdentifier)
  let id: EquipmentIdentifier.ID
  /// The number of how often the item is included in the package.
  let number: Integer({ minimum: 2 })?
  }
