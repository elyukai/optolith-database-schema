//
//  AnimalCare.swift
//  OptolithDatabaseSchema
//

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
public enum AnimalCareType: EntitySubtype {
    case general(GeneralAnimalCare)
    case feed(AnimalFeed)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case general = "general"
        case feed = "feed"
    }

    private enum Discriminator: String, Decodable {
        case general = "General"
        case feed = "Feed"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .general:
            self = .general(try container.decode(GeneralAnimalCare.self, forKey: .general))
        case .feed:
            self = .feed(try container.decode(AnimalFeed.self, forKey: .feed))
        }
    }
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

public enum AnimalFeedCost: EntitySubtype {
    case perWeek(FixedCost)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case perWeek = "per_week"
    }

    private enum Discriminator: String, Decodable {
        case perWeek = "PerWeek"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .perWeek:
            self = .perWeek(try container.decode(FixedCost.self, forKey: .perWeek))
        }
    }
}
