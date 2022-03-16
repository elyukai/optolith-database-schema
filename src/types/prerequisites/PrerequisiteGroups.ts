import { ActivatableOptionSetPrerequisite, ActivatablePrerequisite, ActivatableSetPrerequisite } from "./single/ActivatablePrerequisite.js"
import { AnimistPowerPrerequisite } from "./single/AnimistPowerPrerequisite.js"
import { CommonSuggestedByRCPPrerequisite } from "./single/CommonSuggestedByRCPPrerequisite.js"
import { CulturePrerequisite } from "./single/CulturePrerequisite.js"
import { ExternalEnhancementPrerequisite, InternalEnhancementPrerequisite } from "./single/EnhancementPrerequisite.js"
import { InfluencePrerequisite } from "./single/InfluencePrerequisite.js"
import { PactPrerequisite } from "./single/PactPrerequisite.js"
import { PrimaryAttributePrerequisite } from "./single/PrimaryAttributePrerequisite.js"
import { PublicationPrerequisite } from "./single/PublicationPrerequisite.js"
import { RacePrerequisite } from "./single/RacePrerequisite.js"
import { RatedMinimumNumberPrerequisite, RatedPrerequisite, RatedSetPrerequisite } from "./single/RatedPrerequisite.js"
import { RulePrerequisite } from "./single/RulePrerequisite.js"
import { SexPrerequisite } from "./single/SexPrerequisite.js"
import { SocialStatusPrerequisite } from "./single/SocialStatusPrerequisite.js"
import { StatePrerequisite } from "./single/StatePrerequisite.js"
import { TextPrerequisite } from "./single/TextPrerequisite.js"
import { BlessedTraditionPrerequisite, MagicalTraditionPrerequisite } from "./single/TraditionPrerequisite.js"

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
