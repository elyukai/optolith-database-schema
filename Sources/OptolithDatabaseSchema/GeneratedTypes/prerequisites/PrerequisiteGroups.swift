//
//  PrerequisiteGroups.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

@DiscriminatedEnum
public enum DerivedCharacteristicPrerequisiteGroup: EntitySubtype {
    case rule(RulePrerequisite)
}

@DiscriminatedEnum
public enum PublicationPrerequisiteGroup: EntitySubtype {
    case publication(PublicationPrerequisite)
}

@DiscriminatedEnum
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
}

@DiscriminatedEnum
public enum ProfessionPrerequisiteGroup: EntitySubtype {
    case sex(SexPrerequisite)
    case race(RacePrerequisite)
    case culture(CulturePrerequisite)
    case activatable(ActivatablePrerequisite)
    case rated(RatedPrerequisite)
}

@DiscriminatedEnum
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
}

@DiscriminatedEnum
public enum ArcaneTraditionPrerequisiteGroup: EntitySubtype {
    case sex(SexPrerequisite)
    case culture(CulturePrerequisite)
}

@DiscriminatedEnum
public enum PersonalityTraitPrerequisiteGroup: EntitySubtype {
    case culture(CulturePrerequisite)
    case text(TextPrerequisite)
}

@DiscriminatedEnum
public enum SpellworkPrerequisiteGroup: EntitySubtype {
    case rule(RulePrerequisite)
    case rated(RatedPrerequisite)
}

@DiscriminatedEnum
public enum LiturgyPrerequisiteGroup: EntitySubtype {
    case rule(RulePrerequisite)
}

@DiscriminatedEnum
public enum InfluencePrerequisiteGroup: EntitySubtype {
    case influence(InfluencePrerequisite)
    case text(TextPrerequisite)
}

@DiscriminatedEnum
public enum LanguagePrerequisiteGroup: EntitySubtype {
    case race(RacePrerequisite)
    case activatable(ActivatablePrerequisite)
    case text(TextPrerequisite)
}

@DiscriminatedEnum
public enum AnimistPowerPrerequisiteGroup: EntitySubtype {
    case animistPower(AnimistPowerPrerequisite)
}

@DiscriminatedEnum
public enum GeodeRitualPrerequisiteGroup: EntitySubtype {
    case influence(InfluencePrerequisite)
}

@DiscriminatedEnum
public enum EnhancementPrerequisiteGroup: EntitySubtype {
    case internalEnhancement(InternalEnhancementPrerequisite)
}

@DiscriminatedEnum
public enum PreconditionGroup: EntitySubtype {
    case publication(PublicationPrerequisite)
    case sexualCharacteristic(SexualCharacteristicPrerequisite)
}
