//
//  PrerequisiteGroups.swift
//  OptolithDatabaseSchema
//

public enum DerivedCharacteristicPrerequisiteGroup: EntitySubtype {
    case rule(RulePrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case rule = "rule"
    }

    private enum Discriminator: String, Decodable {
        case rule = "Rule"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .rule:
            self = .rule(try container.decode(RulePrerequisite.self, forKey: .rule))
        }
    }
}

public enum PublicationPrerequisiteGroup: EntitySubtype {
    case publication(PublicationPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case publication = "publication"
    }

    private enum Discriminator: String, Decodable {
        case publication = "Publication"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .publication:
            self = .publication(try container.decode(PublicationPrerequisite.self, forKey: .publication))
        }
    }
}

public enum GeneralPrerequisiteGroup: EntitySubtype {
    case sex(SexPrerequisite)
    case race(RacePrerequisite)
    case culture(CulturePrerequisite)
    case pact(PactPrerequisite)
    case socialStatus(SocialStatusPrerequisite)
    case state(StatePrerequisite)
    case rule(RulePrerequisite)
    case primaryAttribute(PrimaryAttributePrerequisite)
    case activatable(ActivatablePrerequisite)
    case blessedTradition(BlessedTraditionPrerequisite)
    case magicalTradition(MagicalTraditionPrerequisite)
    case rated(RatedPrerequisite)
    case ratedMinimumNumber(RatedMinimumNumberPrerequisite)
    case ratedSum(RatedSumPrerequisite)
    case externalEnhancement(ExternalEnhancementPrerequisite)
    case text(TextPrerequisite)
    case sexualCharacteristic(SexualCharacteristicPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case sex = "sex"
        case race = "race"
        case culture = "culture"
        case pact = "pact"
        case socialStatus = "social_status"
        case state = "state"
        case rule = "rule"
        case primaryAttribute = "primary_attribute"
        case activatable = "activatable"
        case blessedTradition = "blessed_tradition"
        case magicalTradition = "magical_tradition"
        case rated = "rated"
        case ratedMinimumNumber = "rated_minimum_number"
        case ratedSum = "rated_sum"
        case externalEnhancement = "external_enhancement"
        case text = "text"
        case sexualCharacteristic = "sexual_characteristic"
    }

    private enum Discriminator: String, Decodable {
        case sex = "Sex"
        case race = "Race"
        case culture = "Culture"
        case pact = "Pact"
        case socialStatus = "SocialStatus"
        case state = "State"
        case rule = "Rule"
        case primaryAttribute = "PrimaryAttribute"
        case activatable = "Activatable"
        case blessedTradition = "BlessedTradition"
        case magicalTradition = "MagicalTradition"
        case rated = "Rated"
        case ratedMinimumNumber = "RatedMinimumNumber"
        case ratedSum = "RatedSum"
        case externalEnhancement = "ExternalEnhancement"
        case text = "Text"
        case sexualCharacteristic = "SexualCharacteristic"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .sex:
            self = .sex(try container.decode(SexPrerequisite.self, forKey: .sex))
        case .race:
            self = .race(try container.decode(RacePrerequisite.self, forKey: .race))
        case .culture:
            self = .culture(try container.decode(CulturePrerequisite.self, forKey: .culture))
        case .pact:
            self = .pact(try container.decode(PactPrerequisite.self, forKey: .pact))
        case .socialStatus:
            self = .socialStatus(try container.decode(SocialStatusPrerequisite.self, forKey: .socialStatus))
        case .state:
            self = .state(try container.decode(StatePrerequisite.self, forKey: .state))
        case .rule:
            self = .rule(try container.decode(RulePrerequisite.self, forKey: .rule))
        case .primaryAttribute:
            self = .primaryAttribute(try container.decode(PrimaryAttributePrerequisite.self, forKey: .primaryAttribute))
        case .activatable:
            self = .activatable(try container.decode(ActivatablePrerequisite.self, forKey: .activatable))
        case .blessedTradition:
            self = .blessedTradition(try container.decode(BlessedTraditionPrerequisite.self, forKey: .blessedTradition))
        case .magicalTradition:
            self = .magicalTradition(try container.decode(MagicalTraditionPrerequisite.self, forKey: .magicalTradition))
        case .rated:
            self = .rated(try container.decode(RatedPrerequisite.self, forKey: .rated))
        case .ratedMinimumNumber:
            self = .ratedMinimumNumber(try container.decode(RatedMinimumNumberPrerequisite.self, forKey: .ratedMinimumNumber))
        case .ratedSum:
            self = .ratedSum(try container.decode(RatedSumPrerequisite.self, forKey: .ratedSum))
        case .externalEnhancement:
            self = .externalEnhancement(try container.decode(ExternalEnhancementPrerequisite.self, forKey: .externalEnhancement))
        case .text:
            self = .text(try container.decode(TextPrerequisite.self, forKey: .text))
        case .sexualCharacteristic:
            self = .sexualCharacteristic(try container.decode(SexualCharacteristicPrerequisite.self, forKey: .sexualCharacteristic))
        }
    }
}

public enum ProfessionPrerequisiteGroup: EntitySubtype {
    case sex(SexPrerequisite)
    case race(RacePrerequisite)
    case culture(CulturePrerequisite)
    case activatable(ActivatablePrerequisite)
    case rated(RatedPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case sex = "sex"
        case race = "race"
        case culture = "culture"
        case activatable = "activatable"
        case rated = "rated"
    }

    private enum Discriminator: String, Decodable {
        case sex = "Sex"
        case race = "Race"
        case culture = "Culture"
        case activatable = "Activatable"
        case rated = "Rated"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .sex:
            self = .sex(try container.decode(SexPrerequisite.self, forKey: .sex))
        case .race:
            self = .race(try container.decode(RacePrerequisite.self, forKey: .race))
        case .culture:
            self = .culture(try container.decode(CulturePrerequisite.self, forKey: .culture))
        case .activatable:
            self = .activatable(try container.decode(ActivatablePrerequisite.self, forKey: .activatable))
        case .rated:
            self = .rated(try container.decode(RatedPrerequisite.self, forKey: .rated))
        }
    }
}

public enum AdvantageDisadvantagePrerequisiteGroup: EntitySubtype {
    case commonSuggestedByRCP
    case sex(SexPrerequisite)
    case race(RacePrerequisite)
    case culture(CulturePrerequisite)
    case pact(PactPrerequisite)
    case socialStatus(SocialStatusPrerequisite)
    case state(StatePrerequisite)
    case rule(RulePrerequisite)
    case primaryAttribute(PrimaryAttributePrerequisite)
    case activatable(ActivatablePrerequisite)
    case blessedTradition(BlessedTraditionPrerequisite)
    case magicalTradition(MagicalTraditionPrerequisite)
    case rated(RatedPrerequisite)
    case ratedMinimumNumber(RatedMinimumNumberPrerequisite)
    case ratedSum(RatedSumPrerequisite)
    case externalEnhancement(ExternalEnhancementPrerequisite)
    case text(TextPrerequisite)
    case noOtherAncestorBloodAdvantage(AncestorBloodPrerequisite)
    case sexualCharacteristic(SexualCharacteristicPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case commonSuggestedByRCP = "common_suggested_by_rcp"
        case sex = "sex"
        case race = "race"
        case culture = "culture"
        case pact = "pact"
        case socialStatus = "social_status"
        case state = "state"
        case rule = "rule"
        case primaryAttribute = "primary_attribute"
        case activatable = "activatable"
        case blessedTradition = "blessed_tradition"
        case magicalTradition = "magical_tradition"
        case rated = "rated"
        case ratedMinimumNumber = "rated_minimum_number"
        case ratedSum = "rated_sum"
        case externalEnhancement = "external_enhancement"
        case text = "text"
        case noOtherAncestorBloodAdvantage = "no_other_ancestor_blood_advantage"
        case sexualCharacteristic = "sexual_characteristic"
    }

    private enum Discriminator: String, Decodable {
        case commonSuggestedByRCP = "CommonSuggestedByRCP"
        case sex = "Sex"
        case race = "Race"
        case culture = "Culture"
        case pact = "Pact"
        case socialStatus = "SocialStatus"
        case state = "State"
        case rule = "Rule"
        case primaryAttribute = "PrimaryAttribute"
        case activatable = "Activatable"
        case blessedTradition = "BlessedTradition"
        case magicalTradition = "MagicalTradition"
        case rated = "Rated"
        case ratedMinimumNumber = "RatedMinimumNumber"
        case ratedSum = "RatedSum"
        case externalEnhancement = "ExternalEnhancement"
        case text = "Text"
        case noOtherAncestorBloodAdvantage = "NoOtherAncestorBloodAdvantage"
        case sexualCharacteristic = "SexualCharacteristic"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .commonSuggestedByRCP:
            self = .commonSuggestedByRCP
        case .sex:
            self = .sex(try container.decode(SexPrerequisite.self, forKey: .sex))
        case .race:
            self = .race(try container.decode(RacePrerequisite.self, forKey: .race))
        case .culture:
            self = .culture(try container.decode(CulturePrerequisite.self, forKey: .culture))
        case .pact:
            self = .pact(try container.decode(PactPrerequisite.self, forKey: .pact))
        case .socialStatus:
            self = .socialStatus(try container.decode(SocialStatusPrerequisite.self, forKey: .socialStatus))
        case .state:
            self = .state(try container.decode(StatePrerequisite.self, forKey: .state))
        case .rule:
            self = .rule(try container.decode(RulePrerequisite.self, forKey: .rule))
        case .primaryAttribute:
            self = .primaryAttribute(try container.decode(PrimaryAttributePrerequisite.self, forKey: .primaryAttribute))
        case .activatable:
            self = .activatable(try container.decode(ActivatablePrerequisite.self, forKey: .activatable))
        case .blessedTradition:
            self = .blessedTradition(try container.decode(BlessedTraditionPrerequisite.self, forKey: .blessedTradition))
        case .magicalTradition:
            self = .magicalTradition(try container.decode(MagicalTraditionPrerequisite.self, forKey: .magicalTradition))
        case .rated:
            self = .rated(try container.decode(RatedPrerequisite.self, forKey: .rated))
        case .ratedMinimumNumber:
            self = .ratedMinimumNumber(try container.decode(RatedMinimumNumberPrerequisite.self, forKey: .ratedMinimumNumber))
        case .ratedSum:
            self = .ratedSum(try container.decode(RatedSumPrerequisite.self, forKey: .ratedSum))
        case .externalEnhancement:
            self = .externalEnhancement(try container.decode(ExternalEnhancementPrerequisite.self, forKey: .externalEnhancement))
        case .text:
            self = .text(try container.decode(TextPrerequisite.self, forKey: .text))
        case .noOtherAncestorBloodAdvantage:
            self = .noOtherAncestorBloodAdvantage(try container.decode(AncestorBloodPrerequisite.self, forKey: .noOtherAncestorBloodAdvantage))
        case .sexualCharacteristic:
            self = .sexualCharacteristic(try container.decode(SexualCharacteristicPrerequisite.self, forKey: .sexualCharacteristic))
        }
    }
}

public enum ArcaneTraditionPrerequisiteGroup: EntitySubtype {
    case sex(SexPrerequisite)
    case culture(CulturePrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case sex = "sex"
        case culture = "culture"
    }

    private enum Discriminator: String, Decodable {
        case sex = "Sex"
        case culture = "Culture"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .sex:
            self = .sex(try container.decode(SexPrerequisite.self, forKey: .sex))
        case .culture:
            self = .culture(try container.decode(CulturePrerequisite.self, forKey: .culture))
        }
    }
}

public enum PersonalityTraitPrerequisiteGroup: EntitySubtype {
    case culture(CulturePrerequisite)
    case text(TextPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case culture = "culture"
        case text = "text"
    }

    private enum Discriminator: String, Decodable {
        case culture = "Culture"
        case text = "Text"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .culture:
            self = .culture(try container.decode(CulturePrerequisite.self, forKey: .culture))
        case .text:
            self = .text(try container.decode(TextPrerequisite.self, forKey: .text))
        }
    }
}

public enum SpellworkPrerequisiteGroup: EntitySubtype {
    case rule(RulePrerequisite)
    case rated(RatedPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case rule = "rule"
        case rated = "rated"
    }

    private enum Discriminator: String, Decodable {
        case rule = "Rule"
        case rated = "Rated"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .rule:
            self = .rule(try container.decode(RulePrerequisite.self, forKey: .rule))
        case .rated:
            self = .rated(try container.decode(RatedPrerequisite.self, forKey: .rated))
        }
    }
}

public enum LiturgyPrerequisiteGroup: EntitySubtype {
    case rule(RulePrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case rule = "rule"
    }

    private enum Discriminator: String, Decodable {
        case rule = "Rule"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .rule:
            self = .rule(try container.decode(RulePrerequisite.self, forKey: .rule))
        }
    }
}

public enum InfluencePrerequisiteGroup: EntitySubtype {
    case influence(InfluencePrerequisite)
    case text(TextPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case influence = "influence"
        case text = "text"
    }

    private enum Discriminator: String, Decodable {
        case influence = "Influence"
        case text = "Text"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .influence:
            self = .influence(try container.decode(InfluencePrerequisite.self, forKey: .influence))
        case .text:
            self = .text(try container.decode(TextPrerequisite.self, forKey: .text))
        }
    }
}

public enum LanguagePrerequisiteGroup: EntitySubtype {
    case race(RacePrerequisite)
    case activatable(ActivatablePrerequisite)
    case text(TextPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case race = "race"
        case activatable = "activatable"
        case text = "text"
    }

    private enum Discriminator: String, Decodable {
        case race = "Race"
        case activatable = "Activatable"
        case text = "Text"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .race:
            self = .race(try container.decode(RacePrerequisite.self, forKey: .race))
        case .activatable:
            self = .activatable(try container.decode(ActivatablePrerequisite.self, forKey: .activatable))
        case .text:
            self = .text(try container.decode(TextPrerequisite.self, forKey: .text))
        }
    }
}

public enum AnimistPowerPrerequisiteGroup: EntitySubtype {
    case animistPower(AnimistPowerPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case animistPower = "animist_power"
    }

    private enum Discriminator: String, Decodable {
        case animistPower = "AnimistPower"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .animistPower:
            self = .animistPower(try container.decode(AnimistPowerPrerequisite.self, forKey: .animistPower))
        }
    }
}

public enum GeodeRitualPrerequisiteGroup: EntitySubtype {
    case influence(InfluencePrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case influence = "influence"
    }

    private enum Discriminator: String, Decodable {
        case influence = "Influence"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .influence:
            self = .influence(try container.decode(InfluencePrerequisite.self, forKey: .influence))
        }
    }
}

public enum EnhancementPrerequisiteGroup: EntitySubtype {
    case internalEnhancement(InternalEnhancementPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case internalEnhancement = "internal_enhancement"
    }

    private enum Discriminator: String, Decodable {
        case internalEnhancement = "InternalEnhancement"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .internalEnhancement:
            self = .internalEnhancement(try container.decode(InternalEnhancementPrerequisite.self, forKey: .internalEnhancement))
        }
    }
}

public enum PreconditionGroup: EntitySubtype {
    case publication(PublicationPrerequisite)
    case sexualCharacteristic(SexualCharacteristicPrerequisite)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case publication = "publication"
        case sexualCharacteristic = "sexual_characteristic"
    }

    private enum Discriminator: String, Decodable {
        case publication = "Publication"
        case sexualCharacteristic = "SexualCharacteristic"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .publication:
            self = .publication(try container.decode(PublicationPrerequisite.self, forKey: .publication))
        case .sexualCharacteristic:
            self = .sexualCharacteristic(try container.decode(SexualCharacteristicPrerequisite.self, forKey: .sexualCharacteristic))
        }
    }
}
