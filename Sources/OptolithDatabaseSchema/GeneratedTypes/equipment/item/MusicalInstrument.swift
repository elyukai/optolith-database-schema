//
//  MusicalInstrument.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct MusicalInstrument: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost
    
    /// The weight in kg.
    public let weight: Weight
    
    /// The complexity of crafting the item.
    public let complexity: Complexity?
    
    /// The item can also be used either as an improvised weapon or as an armor,
    /// although this is not the primary use case of the item.
    public let combatUse: CombatUse?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DefaultItemTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case weight = "weight"
        case complexity = "complexity"
        case combatUse = "combat_use"
        case src = "src"
        case translations = "translations"
    }
}
