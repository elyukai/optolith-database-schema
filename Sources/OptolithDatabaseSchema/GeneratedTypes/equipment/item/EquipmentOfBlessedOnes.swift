//
//  EquipmentOfBlessedOnes.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct EquipmentOfBlessedOnes: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost
    
    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    public let structurePoints: StructurePoints
    
    /// The deity associated with the equipment item.
    public let associatedTradition: [BlessedTraditionReference]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DefaultItemTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case structurePoints = "structure_points"
        case associatedTradition = "associated_tradition"
        case src = "src"
        case translations = "translations"
    }
}
