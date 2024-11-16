//
//  AnimalCare.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct AnimalCare: LocalizableEntity {
    /// Values depending on whether the animal care is feed.
    public let type: AnimalCareType
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DefaultItemTranslation>
}

/// Values depending on whether the animal care is feed.
@DiscriminatedEnum
public enum AnimalCareType: EntitySubtype {
    case general(GeneralAnimalCare)
    case feed(AnimalFeed)
}

public struct GeneralAnimalCare: EntitySubtype {
    /// The cost in silverthalers.
    public let cost: Cost
    
    /// The weight in kg.
    public let weight: Weight
}

public struct AnimalFeed: EntitySubtype {
    /// The cost in silverthalers.
    public let cost: AnimalFeedCost
}

@DiscriminatedEnum
public enum AnimalFeedCost: EntitySubtype {
    case perWeek(FixedCost)
}
