import { ActivatableOptionSetPrerequisite, ActivatablePrerequisite, ActivatableSetPrerequisite } from "./single/ActivatablePrerequisite"
import { AnimistPowerPrerequisite } from "./single/AnimistPowerPrerequisite"
import { CommonSuggestedByRCPPrerequisite } from "./single/CommonSuggestedByRCPPrerequisite"
import { CulturePrerequisite } from "./single/CulturePrerequisite"
import { ExternalEnhancementPrerequisite, InternalEnhancementPrerequisite } from "./single/EnhancementPrerequisite"
import { InfluencePrerequisite } from "./single/InfluencePrerequisite"
import { PactPrerequisite } from "./single/PactPrerequisite"
import { PrimaryAttributePrerequisite } from "./single/PrimaryAttributePrerequisite"
import { PublicationPrerequisite } from "./single/PublicationPrerequisite"
import { RacePrerequisite } from "./single/RacePrerequisite"
import { RatedMinimumNumberPrerequisite, RatedPrerequisite, RatedSetPrerequisite } from "./single/RatedPrerequisite"
import { RulePrerequisite } from "./single/RulePrerequisite"
import { SexPrerequisite } from "./single/SexPrerequisite"
import { SocialStatusPrerequisite } from "./single/SocialStatusPrerequisite"
import { StatePrerequisite } from "./single/StatePrerequisite"
import { TextPrerequisite } from "./single/TextPrerequisite"
import { BlessedTraditionPrerequisite, MagicalTraditionPrerequisite } from "./single/TraditionPrerequisite"

export type DerivedCharacteristicPrerequisiteGroup =
  | RulePrerequisite

export type PublicationPrerequisiteGroup =
  | PublicationPrerequisite

export type GeneralPrerequisiteGroup =
  | SexPrerequisite
  | RacePrerequisite
  | CulturePrerequisite
  | PactPrerequisite
  | SocialStatusPrerequisite
  | StatePrerequisite
  | RulePrerequisite
  | PrimaryAttributePrerequisite
  | ActivatablePrerequisite
  | ActivatableSetPrerequisite
  | ActivatableOptionSetPrerequisite
  | BlessedTraditionPrerequisite
  | MagicalTraditionPrerequisite
  | RatedPrerequisite
  | RatedSetPrerequisite
  | RatedMinimumNumberPrerequisite
  | ExternalEnhancementPrerequisite
  | TextPrerequisite

export type ProfessionPrerequisiteGroup =
  | SexPrerequisite
  | RacePrerequisite
  | CulturePrerequisite
  | ActivatablePrerequisite
  | RatedPrerequisite

export type AdvantageDisadvantagePrerequisiteGroup =
  | CommonSuggestedByRCPPrerequisite
  | SexPrerequisite
  | RacePrerequisite
  | CulturePrerequisite
  | PactPrerequisite
  | SocialStatusPrerequisite
  | StatePrerequisite
  | RulePrerequisite
  | PrimaryAttributePrerequisite
  | ActivatablePrerequisite
  | ActivatableSetPrerequisite
  | ActivatableOptionSetPrerequisite
  | BlessedTraditionPrerequisite
  | MagicalTraditionPrerequisite
  | RatedPrerequisite
  | RatedSetPrerequisite
  | RatedMinimumNumberPrerequisite
  | ExternalEnhancementPrerequisite
  | TextPrerequisite

export type ArcaneTraditionPrerequisiteGroup =
  | SexPrerequisite
  | CulturePrerequisite

export type PersonalityTraitPrerequisiteGroup =
  | CulturePrerequisite
  | TextPrerequisite

export type SpellworkPrerequisiteGroup =
  | RulePrerequisite
  | RatedPrerequisite

export type LiturgyPrerequisiteGroup =
  | RulePrerequisite

export type InfluencePrerequisiteGroup =
  | InfluencePrerequisite
  | TextPrerequisite

export type LanguagePrerequisiteGroup =
  | RacePrerequisite
  | ActivatablePrerequisite
  | TextPrerequisite

export type AnimistPowerPrerequisiteGroup =
  | AnimistPowerPrerequisite

export type GeodeRitualPrerequisiteGroup =
  | InfluencePrerequisite

export type EnhancementPrerequisiteGroup =
  | InternalEnhancementPrerequisite

export type PreconditionGroup =
  | PublicationPrerequisite
