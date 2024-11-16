//
//  EquipmentPackage.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct EquipmentPackage: LocalizableEntity {
    /// The equipment package's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All items in the package. You have to provide the item (template)
    /// identifier and you can optionally provide the number of how often an item
    /// is included in the package.
    public let items: [EquipmentPackageItem]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<EquipmentPackageTranslation>
}

public struct EquipmentPackageItem: EntitySubtype {
    /// The item's identifier.
    public let id: EquipmentIdentifier
    
    /// The number of how often the item is included in the package.
    public let number: Int?
}

public struct EquipmentPackageTranslation: EntitySubtype {
    /// The name of the equipment package.
    public let name: NonEmptyString
}
