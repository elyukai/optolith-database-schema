import FileDB

@ModelEnum
public enum DerivedCharacteristicPrerequisiteGroup {
    case Rule(RulePrerequisite)
}

@ModelEnum
public enum PublicationPrerequisiteGroup {
    case Publication(PublicationPrerequisite)
}

@ModelEnum
public enum GeneralPrerequisiteGroup {
    case Sex(SexPrerequisite)
    case Race(RacePrerequisite)
    case Culture(CulturePrerequisite)
    case Pact(PactPrerequisite)
    case SocialStatus(SocialStatusPrerequisite)
    case State(StatePrerequisite)
    case Rule(RulePrerequisite)
    case PrimaryAttribute(PrimaryAttributePrerequisite)
    case Activatable(ActivatablePrerequisite)
    case BlessedTradition(BlessedTraditionPrerequisite)
    case MagicalTradition(MagicalTraditionPrerequisite)
    case Rated(RatedPrerequisite)
    case RatedMinimumNumber(RatedMinimumNumberPrerequisite)
    case RatedSum(RatedSumPrerequisite)
    case Enhancement(EnhancementPrerequisite)
    case Text(TextPrerequisite)
    case SexualCharacteristic(SexualCharacteristicPrerequisite)
}

@ModelEnum
public enum ProfessionPrerequisiteGroup {
    case Sex(SexPrerequisite)
    case Race(RacePrerequisite)
    case Culture(CulturePrerequisite)
    case Activatable(ActivatablePrerequisite)
    case Rated(RatedPrerequisite)
}

@ModelEnum
public enum AdvantageDisadvantagePrerequisiteGroup {
    case CommonSuggestedByRCP
    case Sex(SexPrerequisite)
    case Race(RacePrerequisite)
    case Culture(CulturePrerequisite)
    case Pact(PactPrerequisite)
    case SocialStatus(SocialStatusPrerequisite)
    case State(StatePrerequisite)
    case Rule(RulePrerequisite)
    case PrimaryAttribute(PrimaryAttributePrerequisite)
    case Activatable(ActivatablePrerequisite)
    case BlessedTradition(BlessedTraditionPrerequisite)
    case MagicalTradition(MagicalTraditionPrerequisite)
    case Rated(RatedPrerequisite)
    case RatedMinimumNumber(RatedMinimumNumberPrerequisite)
    case RatedSum(RatedSumPrerequisite)
    case Enhancement(EnhancementPrerequisite)
    case Text(TextPrerequisite)
    /// Requires that no other Ancestor Blood advantage is active.
    case NoOtherAncestorBloodAdvantage
    case SexualCharacteristic(SexualCharacteristicPrerequisite)
}

@ModelEnum
public enum ArcaneTraditionPrerequisiteGroup {
    case Sex(SexPrerequisite)
    case Culture(CulturePrerequisite)
}

@ModelEnum
public enum PersonalityTraitPrerequisiteGroup {
    case Culture(CulturePrerequisite)
    case Text(TextPrerequisite)
}

@ModelEnum
public enum SpellworkPrerequisiteGroup {
    case Rule(RulePrerequisite)
    case Rated(RatedPrerequisite)
}

@ModelEnum
public enum LiturgyPrerequisiteGroup {
    case Rule(RulePrerequisite)
}

@ModelEnum
public enum InfluencePrerequisiteGroup {
    case Influence(InfluencePrerequisite)
    case Text(TextPrerequisite)
}

@ModelEnum
public enum LanguagePrerequisiteGroup {
    case Race(RacePrerequisite)
    case Activatable(ActivatablePrerequisite)
    case Text(TextPrerequisite)
}

@ModelEnum
public enum AnimistPowerPrerequisiteGroup {
    case AnimistPower(AnimistPowerPrerequisite)
}

@ModelEnum
public enum GeodeRitualPrerequisiteGroup {
    case Influence(InfluencePrerequisite)
}

@ModelEnum
public enum EnhancementPrerequisiteGroup {
    case Enhancement(EnhancementPrerequisite)
}

@ModelEnum
public enum PreconditionGroup {
    case Publication(PublicationPrerequisite)
    case SexualCharacteristic(SexualCharacteristicPrerequisite)
}
