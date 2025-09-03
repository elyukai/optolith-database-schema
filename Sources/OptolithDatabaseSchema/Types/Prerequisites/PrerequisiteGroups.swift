import FileDB

@ModelEnum
public enum DerivedCharacteristicPrerequisiteGroup {
    case rule(RulePrerequisite)
}

@ModelEnum
public enum PublicationPrerequisiteGroup {
    case publication(PublicationPrerequisite)
}

@ModelEnum
public enum GeneralPrerequisiteGroup {
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
    case enhancement(EnhancementPrerequisite)
    case text(TextPrerequisite)
    case sexualCharacteristic(SexualCharacteristicPrerequisite)
}

@ModelEnum
public enum ProfessionPrerequisiteGroup {
    case sex(SexPrerequisite)
    case race(RacePrerequisite)
    case culture(CulturePrerequisite)
    case activatable(ActivatablePrerequisite)
    case rated(RatedPrerequisite)
}

@ModelEnum
public enum AdvantageDisadvantagePrerequisiteGroup {
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
    case enhancement(EnhancementPrerequisite)
    case text(TextPrerequisite)
    /// Requires that no other Ancestor Blood advantage is active.
    case noOtherAncestorBloodAdvantage
    case sexualCharacteristic(SexualCharacteristicPrerequisite)
}

@ModelEnum
public enum ArcaneTraditionPrerequisiteGroup {
    case sex(SexPrerequisite)
    case culture(CulturePrerequisite)
}

@ModelEnum
public enum PersonalityTraitPrerequisiteGroup {
    case culture(CulturePrerequisite)
    case text(TextPrerequisite)
}

@ModelEnum
public enum SpellworkPrerequisiteGroup {
    case rule(RulePrerequisite)
    case rated(RatedPrerequisite)
}

@ModelEnum
public enum LiturgyPrerequisiteGroup {
    case rule(RulePrerequisite)
}

@ModelEnum
public enum InfluencePrerequisiteGroup {
    case influence(InfluencePrerequisite)
    case text(TextPrerequisite)
}

@ModelEnum
public enum LanguagePrerequisiteGroup {
    case race(RacePrerequisite)
    case activatable(ActivatablePrerequisite)
    case text(TextPrerequisite)
}

@ModelEnum
public enum AnimistPowerPrerequisiteGroup {
    case animistPower(AnimistPowerPrerequisite)
}

@ModelEnum
public enum GeodeRitualPrerequisiteGroup {
    case influence(InfluencePrerequisite)
}

@ModelEnum
public enum EnhancementPrerequisiteGroup {
    case enhancement(EnhancementPrerequisite)
}

@ModelEnum
public enum PreconditionGroup {
    case publication(PublicationPrerequisite)
    case sexualCharacteristic(SexualCharacteristicPrerequisite)
}
