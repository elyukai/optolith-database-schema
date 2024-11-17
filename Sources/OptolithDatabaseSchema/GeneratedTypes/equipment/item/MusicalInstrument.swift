//
//  MusicalInstrument.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct MusicalInstrument: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost

    /// The weight in kg.
    public let weight: Weight

    /// The complexity of crafting the item.
    public let complexity: Complexity?

    /// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
    public let combatUse: CombatUse?

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DefaultItemTranslation>

    public init(cost: Cost, weight: Weight, complexity: Complexity? = nil, combatUse: CombatUse? = nil, src: PublicationRefs, translations: LocaleMap<DefaultItemTranslation>) {
        self.cost = cost
        self.weight = weight
        self.complexity = complexity
        self.combatUse = combatUse
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case weight = "weight"
        case complexity = "complexity"
        case combatUse = "combat_use"
        case src = "src"
        case translations = "translations"
    }
}
