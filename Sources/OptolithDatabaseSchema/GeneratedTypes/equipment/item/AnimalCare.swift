//
//  AnimalCare.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct AnimalCare: LocalizableEntity {
    /// Values depending on whether the animal care is feed.
    public let type: AnimalCareType
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DefaultItemTranslation>

    public init(type: AnimalCareType, src: PublicationRefs, translations: LocaleMap<DefaultItemTranslation>) {
        self.type = type
        self.src = src
        self.translations = translations
    }
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

    public init(cost: Cost, weight: Weight) {
        self.cost = cost
        self.weight = weight
    }
}

public struct AnimalFeed: EntitySubtype {
    /// The cost in silverthalers.
    public let cost: AnimalFeedCost

    public init(cost: AnimalFeedCost) {
        self.cost = cost
    }
}

@DiscriminatedEnum
public enum AnimalFeedCost: EntitySubtype {
    case perWeek(FixedCost)
}
