import { ActivatablePrerequisite } from "./single/ActivatablePrerequisite.js"
import { AncestorBloodPrerequisite } from "./single/AncestorBloodPrerequisite.js"
import { AnimistPowerPrerequisite } from "./single/AnimistPowerPrerequisite.js"
import { CulturePrerequisite } from "./single/CulturePrerequisite.js"
import { ExternalEnhancementPrerequisite, InternalEnhancementPrerequisite } from "./single/EnhancementPrerequisite.js"
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
import { BlessedTraditionPrerequisite, MagicalTraditionPrerequisite } from "./single/TraditionPrerequisite.js"

export type DerivedCharacteristicPrerequisiteGroup =
  | { tag: "Rule"; rule: RulePrerequisite }

export type PublicationPrerequisiteGroup =
  | { tag: "Publication"; publication: PublicationPrerequisite }

export type GeneralPrerequisiteGroup =
  | { tag: "Sex"; sex: SexPrerequisite }
  | { tag: "Race"; race: RacePrerequisite }
  | { tag: "Culture"; culture: CulturePrerequisite }
  | { tag: "Pact"; pact: PactPrerequisite }
  | { tag: "SocialStatus"; social_status: SocialStatusPrerequisite }
  | { tag: "State"; state: StatePrerequisite }
  | { tag: "Rule"; rule: RulePrerequisite }
  | { tag: "PrimaryAttribute"; primary_attribute: PrimaryAttributePrerequisite }
  | { tag: "Activatable"; activatable: ActivatablePrerequisite }
  | { tag: "BlessedTradition"; blessed_tradition: BlessedTraditionPrerequisite }
  | { tag: "MagicalTradition"; magical_tradition: MagicalTraditionPrerequisite }
  | { tag: "Rated"; rated: RatedPrerequisite }
  | { tag: "RatedMinimumNumber"; rated_minimum_number: RatedMinimumNumberPrerequisite }
  | { tag: "RatedSum"; rated_sum: RatedSumPrerequisite }
  | { tag: "ExternalEnhancement"; external_enhancement: ExternalEnhancementPrerequisite }
  | { tag: "Text"; text: TextPrerequisite }
  | { tag: "SexualCharacteristic"; sexual_characteristic: SexualCharacteristicPrerequisite }

export type ProfessionPrerequisiteGroup =
  | { tag: "Sex"; sex: SexPrerequisite }
  | { tag: "Race"; race: RacePrerequisite }
  | { tag: "Culture"; culture: CulturePrerequisite }
  | { tag: "Activatable"; activatable: ActivatablePrerequisite }
  | { tag: "Rated"; rated: RatedPrerequisite }

export type AdvantageDisadvantagePrerequisiteGroup =
  | { tag: "CommonSuggestedByRCP"; common_suggested_by_rcp: {} }
  | { tag: "Sex"; sex: SexPrerequisite }
  | { tag: "Race"; race: RacePrerequisite }
  | { tag: "Culture"; culture: CulturePrerequisite }
  | { tag: "Pact"; pact: PactPrerequisite }
  | { tag: "SocialStatus"; social_status: SocialStatusPrerequisite }
  | { tag: "State"; state: StatePrerequisite }
  | { tag: "Rule"; rule: RulePrerequisite }
  | { tag: "PrimaryAttribute"; primary_attribute: PrimaryAttributePrerequisite }
  | { tag: "Activatable"; activatable: ActivatablePrerequisite }
  | { tag: "BlessedTradition"; blessed_tradition: BlessedTraditionPrerequisite }
  | { tag: "MagicalTradition"; magical_tradition: MagicalTraditionPrerequisite }
  | { tag: "Rated"; rated: RatedPrerequisite }
  | { tag: "RatedMinimumNumber"; rated_minimum_number: RatedMinimumNumberPrerequisite }
  | { tag: "RatedSum"; rated_sum: RatedSumPrerequisite }
  | { tag: "ExternalEnhancement"; external_enhancement: ExternalEnhancementPrerequisite }
  | { tag: "Text"; text: TextPrerequisite }
  | { tag: "NoOtherAncestorBloodAdvantage"; no_other_ancestor_blood_advantage: AncestorBloodPrerequisite }
  | { tag: "SexualCharacteristic"; sexual_characteristic: SexualCharacteristicPrerequisite }

export type ArcaneTraditionPrerequisiteGroup =
  | { tag: "Sex"; sex: SexPrerequisite }
  | { tag: "Culture"; culture: CulturePrerequisite }

export type PersonalityTraitPrerequisiteGroup =
  | { tag: "Culture"; culture: CulturePrerequisite }
  | { tag: "Text"; text: TextPrerequisite }

export type SpellworkPrerequisiteGroup =
  | { tag: "Rule"; rule: RulePrerequisite }
  | { tag: "Rated"; rated: RatedPrerequisite }

export type LiturgyPrerequisiteGroup =
  | { tag: "Rule"; rule: RulePrerequisite }

export type InfluencePrerequisiteGroup =
  | { tag: "Influence"; influence: InfluencePrerequisite }
  | { tag: "Text"; text: TextPrerequisite }

export type LanguagePrerequisiteGroup =
  | { tag: "Race"; race: RacePrerequisite }
  | { tag: "Activatable"; activatable: ActivatablePrerequisite }
  | { tag: "Text"; text: TextPrerequisite }

export type AnimistPowerPrerequisiteGroup =
  | { tag: "AnimistPower"; animist_power: AnimistPowerPrerequisite }

export type GeodeRitualPrerequisiteGroup =
  | { tag: "Influence"; influence: InfluencePrerequisite }

export type EnhancementPrerequisiteGroup =
  | { tag: "InternalEnhancement"; internal_enhancement: InternalEnhancementPrerequisite }

export type PreconditionGroup =
  | { tag: "Publication"; publication: PublicationPrerequisite }
  | { tag: "SexualCharacteristic"; sexual_characteristic: SexualCharacteristicPrerequisite }
