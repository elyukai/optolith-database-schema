import FileDB

@ModelEnum
public enum DerivedCharacteristicPrerequisiteGroup {
    case Rule(IncludeIdentifier(RulePrerequisite))
}

@ModelEnum
public enum PublicationPrerequisiteGroup {
    case Publication(IncludeIdentifier(PublicationPrerequisite))
}

@ModelEnum
public enum GeneralPrerequisiteGroup {
    case Sex(IncludeIdentifier(SexPrerequisite))
    case Race(IncludeIdentifier(RacePrerequisite))
    case Culture(IncludeIdentifier(CulturePrerequisite))
    case Pact(IncludeIdentifier(PactPrerequisite))
    case SocialStatus(IncludeIdentifier(SocialStatusPrerequisite))
    case State(IncludeIdentifier(StatePrerequisite))
    case Rule(IncludeIdentifier(RulePrerequisite))
    case PrimaryAttribute(IncludeIdentifier(PrimaryAttributePrerequisite))
    case Activatable(IncludeIdentifier(ActivatablePrerequisite))
    case BlessedTradition(IncludeIdentifier(BlessedTraditionPrerequisite))
    case MagicalTradition(IncludeIdentifier(MagicalTraditionPrerequisite))
    case Rated(IncludeIdentifier(RatedPrerequisite))
    case RatedMinimumNumber(IncludeIdentifier(RatedMinimumNumberPrerequisite))
    case RatedSum(IncludeIdentifier(RatedSumPrerequisite))
    case Enhancement(IncludeIdentifier(EnhancementPrerequisite))
    case Text(IncludeIdentifier(TextPrerequisite))
    case SexualCharacteristic(IncludeIdentifier(SexualCharacteristicPrerequisite))
}

@ModelEnum
public enum ProfessionPrerequisiteGroup {
    case Sex(IncludeIdentifier(SexPrerequisite))
    case Race(IncludeIdentifier(RacePrerequisite))
    case Culture(IncludeIdentifier(CulturePrerequisite))
    case Activatable(IncludeIdentifier(ActivatablePrerequisite))
    case Rated(IncludeIdentifier(RatedPrerequisite))
}

export const AdvantageDisadvantagePrerequisiteGroup = Enum(import.meta.url, {
  name: "AdvantageDisadvantagePrerequisiteGroup",
  values: () => {
    return {
      case CommonSuggestedByRCP
      case Sex(IncludeIdentifier(SexPrerequisite))
      case Race(IncludeIdentifier(RacePrerequisite))
      case Culture(IncludeIdentifier(CulturePrerequisite))
      case Pact(IncludeIdentifier(PactPrerequisite))
      case SocialStatus(IncludeIdentifier(SocialStatusPrerequisite))
      case State(IncludeIdentifier(StatePrerequisite))
      case Rule(IncludeIdentifier(RulePrerequisite))
      case PrimaryAttribute(IncludeIdentifier(PrimaryAttributePrerequisite))
      case Activatable(IncludeIdentifier(ActivatablePrerequisite))
      case BlessedTradition(IncludeIdentifier(BlessedTraditionPrerequisite))
      case MagicalTradition(IncludeIdentifier(MagicalTraditionPrerequisite))
      case Rated(IncludeIdentifier(RatedPrerequisite))
      case RatedMinimumNumber(IncludeIdentifier(RatedMinimumNumberPrerequisite))
      case RatedSum(IncludeIdentifier(RatedSumPrerequisite))
      case Enhancement(IncludeIdentifier(EnhancementPrerequisite))
      case Text(IncludeIdentifier(TextPrerequisite))
      NoOtherAncestorBloodAdvantage: EnumCase({
        type: AncestorBloodPrerequisite,
      }),
      case SexualCharacteristic(IncludeIdentifier(SexualCharacteristicPrerequisite))
    }
  },
})

@ModelEnum
public enum ArcaneTraditionPrerequisiteGroup {
    case Sex(IncludeIdentifier(SexPrerequisite))
    case Culture(IncludeIdentifier(CulturePrerequisite))
}

@ModelEnum
public enum PersonalityTraitPrerequisiteGroup {
    case Culture(IncludeIdentifier(CulturePrerequisite))
    case Text(IncludeIdentifier(TextPrerequisite))
}

@ModelEnum
public enum SpellworkPrerequisiteGroup {
    case Rule(IncludeIdentifier(RulePrerequisite))
    case Rated(IncludeIdentifier(RatedPrerequisite))
}

@ModelEnum
public enum LiturgyPrerequisiteGroup {
    case Rule(IncludeIdentifier(RulePrerequisite))
}

@ModelEnum
public enum InfluencePrerequisiteGroup {
    case Influence(IncludeIdentifier(InfluencePrerequisite))
    case Text(IncludeIdentifier(TextPrerequisite))
}

@ModelEnum
public enum LanguagePrerequisiteGroup {
    case Race(IncludeIdentifier(RacePrerequisite))
    case Activatable(IncludeIdentifier(ActivatablePrerequisite))
    case Text(IncludeIdentifier(TextPrerequisite))
}

@ModelEnum
public enum AnimistPowerPrerequisiteGroup {
    case AnimistPower(IncludeIdentifier(AnimistPowerPrerequisite))
}

@ModelEnum
public enum GeodeRitualPrerequisiteGroup {
    case Influence(IncludeIdentifier(InfluencePrerequisite))
}

@ModelEnum
public enum EnhancementPrerequisiteGroup {
    case Enhancement(IncludeIdentifier(EnhancementPrerequisite))
}

@ModelEnum
public enum PreconditionGroup {
    case Publication(IncludeIdentifier(PublicationPrerequisite))
    case SexualCharacteristic(IncludeIdentifier(SexualCharacteristicPrerequisite))
}
