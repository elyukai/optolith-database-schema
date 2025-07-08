import { Enum, EnumCase, IncludeIdentifier } from "tsondb/schema/def"
import { ActivatablePrerequisite } from "./single/ActivatablePrerequisite.js"
import { AncestorBloodPrerequisite } from "./single/AncestorBloodPrerequisite.js"
import { AnimistPowerPrerequisite } from "./single/AnimistPowerPrerequisite.js"
import { CulturePrerequisite } from "./single/CulturePrerequisite.js"
import { EnhancementPrerequisite } from "./single/EnhancementPrerequisite.js"
import { InfluencePrerequisite } from "./single/InfluencePrerequisite.js"
import { PactPrerequisite } from "./single/PactPrerequisite.js"
import { PrimaryAttributePrerequisite } from "./single/PrimaryAttributePrerequisite.js"
import { PublicationPrerequisite } from "./single/PublicationPrerequisite.js"
import { RacePrerequisite } from "./single/RacePrerequisite.js"
import { RatedMinimumNumberPrerequisite } from "./single/RatedMinimumNumberPrerequisite.js"
import { RatedPrerequisite } from "./single/RatedPrerequisite.js"
import { RatedSumPrerequisite } from "./single/RatedSumPrerequisite.js"
import { RulePrerequisite } from "./single/RulePrerequisite.js"
import { SexPrerequisite } from "./single/SexPrerequisite.js"
import { SexualCharacteristicPrerequisite } from "./single/SexualCharacteristicPrerequisite.js"
import { SocialStatusPrerequisite } from "./single/SocialStatusPrerequisite.js"
import { StatePrerequisite } from "./single/StatePrerequisite.js"
import { TextPrerequisite } from "./single/TextPrerequisite.js"
import {
  BlessedTraditionPrerequisite,
  MagicalTraditionPrerequisite,
} from "./single/TraditionPrerequisite.js"

export const DerivedCharacteristicPrerequisiteGroup = Enum(import.meta.url, {
  name: "DerivedCharacteristicPrerequisiteGroup",
  values: () => ({
    Rule: EnumCase({ type: IncludeIdentifier(RulePrerequisite) }),
  }),
})

export const PublicationPrerequisiteGroup = Enum(import.meta.url, {
  name: "PublicationPrerequisiteGroup",
  values: () => ({
    Publication: EnumCase({ type: IncludeIdentifier(PublicationPrerequisite) }),
  }),
})

export const GeneralPrerequisiteGroup = Enum(import.meta.url, {
  name: "GeneralPrerequisiteGroup",
  values: () => ({
    Sex: EnumCase({ type: IncludeIdentifier(SexPrerequisite) }),
    Race: EnumCase({ type: IncludeIdentifier(RacePrerequisite) }),
    Culture: EnumCase({ type: IncludeIdentifier(CulturePrerequisite) }),
    Pact: EnumCase({ type: IncludeIdentifier(PactPrerequisite) }),
    SocialStatus: EnumCase({ type: IncludeIdentifier(SocialStatusPrerequisite) }),
    State: EnumCase({ type: IncludeIdentifier(StatePrerequisite) }),
    Rule: EnumCase({ type: IncludeIdentifier(RulePrerequisite) }),
    PrimaryAttribute: EnumCase({ type: IncludeIdentifier(PrimaryAttributePrerequisite) }),
    Activatable: EnumCase({ type: IncludeIdentifier(ActivatablePrerequisite) }),
    BlessedTradition: EnumCase({ type: IncludeIdentifier(BlessedTraditionPrerequisite) }),
    MagicalTradition: EnumCase({ type: IncludeIdentifier(MagicalTraditionPrerequisite) }),
    Rated: EnumCase({ type: IncludeIdentifier(RatedPrerequisite) }),
    RatedMinimumNumber: EnumCase({ type: IncludeIdentifier(RatedMinimumNumberPrerequisite) }),
    RatedSum: EnumCase({ type: IncludeIdentifier(RatedSumPrerequisite) }),
    Enhancement: EnumCase({ type: IncludeIdentifier(EnhancementPrerequisite) }),
    Text: EnumCase({ type: IncludeIdentifier(TextPrerequisite) }),
    SexualCharacteristic: EnumCase({ type: IncludeIdentifier(SexualCharacteristicPrerequisite) }),
  }),
})

export const ProfessionPrerequisiteGroup = Enum(import.meta.url, {
  name: "ProfessionPrerequisiteGroup",
  values: () => ({
    Sex: EnumCase({ type: IncludeIdentifier(SexPrerequisite) }),
    Race: EnumCase({ type: IncludeIdentifier(RacePrerequisite) }),
    Culture: EnumCase({ type: IncludeIdentifier(CulturePrerequisite) }),
    Activatable: EnumCase({ type: IncludeIdentifier(ActivatablePrerequisite) }),
    Rated: EnumCase({ type: IncludeIdentifier(RatedPrerequisite) }),
  }),
})

export const AdvantageDisadvantagePrerequisiteGroup = Enum(import.meta.url, {
  name: "AdvantageDisadvantagePrerequisiteGroup",
  values: () => {
    return {
      CommonSuggestedByRCP: EnumCase({ type: null }),
      Sex: EnumCase({ type: IncludeIdentifier(SexPrerequisite) }),
      Race: EnumCase({ type: IncludeIdentifier(RacePrerequisite) }),
      Culture: EnumCase({ type: IncludeIdentifier(CulturePrerequisite) }),
      Pact: EnumCase({ type: IncludeIdentifier(PactPrerequisite) }),
      SocialStatus: EnumCase({ type: IncludeIdentifier(SocialStatusPrerequisite) }),
      State: EnumCase({ type: IncludeIdentifier(StatePrerequisite) }),
      Rule: EnumCase({ type: IncludeIdentifier(RulePrerequisite) }),
      PrimaryAttribute: EnumCase({ type: IncludeIdentifier(PrimaryAttributePrerequisite) }),
      Activatable: EnumCase({ type: IncludeIdentifier(ActivatablePrerequisite) }),
      BlessedTradition: EnumCase({ type: IncludeIdentifier(BlessedTraditionPrerequisite) }),
      MagicalTradition: EnumCase({ type: IncludeIdentifier(MagicalTraditionPrerequisite) }),
      Rated: EnumCase({ type: IncludeIdentifier(RatedPrerequisite) }),
      RatedMinimumNumber: EnumCase({ type: IncludeIdentifier(RatedMinimumNumberPrerequisite) }),
      RatedSum: EnumCase({ type: IncludeIdentifier(RatedSumPrerequisite) }),
      Enhancement: EnumCase({ type: IncludeIdentifier(EnhancementPrerequisite) }),
      Text: EnumCase({ type: IncludeIdentifier(TextPrerequisite) }),
      NoOtherAncestorBloodAdvantage: EnumCase({
        type: AncestorBloodPrerequisite,
      }),
      SexualCharacteristic: EnumCase({ type: IncludeIdentifier(SexualCharacteristicPrerequisite) }),
    }
  },
})

export const ArcaneTraditionPrerequisiteGroup = Enum(import.meta.url, {
  name: "ArcaneTraditionPrerequisiteGroup",
  values: () => ({
    Sex: EnumCase({ type: IncludeIdentifier(SexPrerequisite) }),
    Culture: EnumCase({ type: IncludeIdentifier(CulturePrerequisite) }),
  }),
})

export const PersonalityTraitPrerequisiteGroup = Enum(import.meta.url, {
  name: "PersonalityTraitPrerequisiteGroup",
  values: () => ({
    Culture: EnumCase({ type: IncludeIdentifier(CulturePrerequisite) }),
    Text: EnumCase({ type: IncludeIdentifier(TextPrerequisite) }),
  }),
})

export const SpellworkPrerequisiteGroup = Enum(import.meta.url, {
  name: "SpellworkPrerequisiteGroup",
  values: () => ({
    Rule: EnumCase({ type: IncludeIdentifier(RulePrerequisite) }),
    Rated: EnumCase({ type: IncludeIdentifier(RatedPrerequisite) }),
  }),
})

export const LiturgyPrerequisiteGroup = Enum(import.meta.url, {
  name: "LiturgyPrerequisiteGroup",
  values: () => ({
    Rule: EnumCase({ type: IncludeIdentifier(RulePrerequisite) }),
  }),
})

export const InfluencePrerequisiteGroup = Enum(import.meta.url, {
  name: "InfluencePrerequisiteGroup",
  values: () => ({
    Influence: EnumCase({ type: IncludeIdentifier(InfluencePrerequisite) }),
    Text: EnumCase({ type: IncludeIdentifier(TextPrerequisite) }),
  }),
})

export const LanguagePrerequisiteGroup = Enum(import.meta.url, {
  name: "LanguagePrerequisiteGroup",
  values: () => ({
    Race: EnumCase({ type: IncludeIdentifier(RacePrerequisite) }),
    Activatable: EnumCase({ type: IncludeIdentifier(ActivatablePrerequisite) }),
    Text: EnumCase({ type: IncludeIdentifier(TextPrerequisite) }),
  }),
})

export const AnimistPowerPrerequisiteGroup = Enum(import.meta.url, {
  name: "AnimistPowerPrerequisiteGroup",
  values: () => ({
    AnimistPower: EnumCase({ type: IncludeIdentifier(AnimistPowerPrerequisite) }),
  }),
})

export const GeodeRitualPrerequisiteGroup = Enum(import.meta.url, {
  name: "GeodeRitualPrerequisiteGroup",
  values: () => ({
    Influence: EnumCase({ type: IncludeIdentifier(InfluencePrerequisite) }),
  }),
})

export const EnhancementPrerequisiteGroup = Enum(import.meta.url, {
  name: "EnhancementPrerequisiteGroup",
  values: () => ({
    Enhancement: EnumCase({ type: IncludeIdentifier(EnhancementPrerequisite) }),
  }),
})

export const PreconditionGroup = Enum(import.meta.url, {
  name: "PreconditionGroup",
  values: () => ({
    Publication: EnumCase({ type: IncludeIdentifier(PublicationPrerequisite) }),
    SexualCharacteristic: EnumCase({ type: IncludeIdentifier(SexualCharacteristicPrerequisite) }),
  }),
})
