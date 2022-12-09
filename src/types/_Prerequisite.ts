/**
 * @title Prerequisites
 */

import { DisplayOption } from "./prerequisites/DisplayOption.js"
import { AdvantageDisadvantagePrerequisiteGroup, AnimistPowerPrerequisiteGroup, ArcaneTraditionPrerequisiteGroup, DerivedCharacteristicPrerequisiteGroup, EnhancementPrerequisiteGroup, GeneralPrerequisiteGroup, GeodeRitualPrerequisiteGroup, InfluencePrerequisiteGroup, LanguagePrerequisiteGroup, LiturgyPrerequisiteGroup, PersonalityTraitPrerequisiteGroup, ProfessionPrerequisiteGroup, PublicationPrerequisiteGroup, SpellworkPrerequisiteGroup } from "./prerequisites/PrerequisiteGroups.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * A prerequisite group has no influence on validation logic. It serves as a
 * single unit for displaying purposes, where the source uses a prerequisites
 * item that cannot be represented as a single prerequisite.
 */
export type PrerequisiteGroup<T> = {
  /**
   * @minItems 2
   */
  list: T[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<NonEmptyString>
}

export type PrerequisitesDisjunction<T> = {
  /**
   * @minItems 2
   */
  list: T[]

  display_option?: DisplayOption
}

export type PrerequisitesElement<T> =
  | { tag: "Single"; single: T }
  | { tag: "Disjunction"; disjunction: PrerequisitesDisjunction<T> }
  | { tag: "Group"; group: PrerequisiteGroup<T> }

/**
 * @minItems 1
 */
export type PlainPrerequisites<T> = PrerequisitesElement<T>[]

export type PrerequisiteForLevel<T> = {
  /**
   * @integer
   * @minimum 1
   */
  level: number

  prerequisite: PrerequisitesElement<T>
}

/**
 * @minItems 1
 */
export type PrerequisitesForLevels<T> = PrerequisiteForLevel<T>[]

export type DerivedCharacteristicPrerequisites = PlainPrerequisites<DerivedCharacteristicPrerequisiteGroup>

export type PublicationPrerequisites = PlainPrerequisites<PublicationPrerequisiteGroup>

/**
 * @title Plain General Prerequisites
 */
export type PlainGeneralPrerequisites = PlainPrerequisites<GeneralPrerequisiteGroup>

/**
 * @title General Prerequisites
 */
export type GeneralPrerequisites = PrerequisitesForLevels<GeneralPrerequisiteGroup>

/**
 * @title Profession Prerequisites
 */
export type ProfessionPrerequisites = PlainPrerequisites<ProfessionPrerequisiteGroup>

/**
 * @title Advantage/Disadvantage Prerequisites
 */
export type AdvantageDisadvantagePrerequisites = PrerequisitesForLevels<AdvantageDisadvantagePrerequisiteGroup>

/**
 * @title Arcane Tradition Prerequisites
 */
export type ArcaneTraditionPrerequisites = PlainPrerequisites<ArcaneTraditionPrerequisiteGroup>

/**
 * @title Personality Trait Prerequisites
 */
export type PersonalityTraitPrerequisites = PlainPrerequisites<PersonalityTraitPrerequisiteGroup>

/**
 * @title Spellwork Prerequisites
 */
export type SpellworkPrerequisites = PlainPrerequisites<SpellworkPrerequisiteGroup>

/**
 * @title Liturgy Prerequisites
 */
export type LiturgyPrerequisites = PlainPrerequisites<LiturgyPrerequisiteGroup>

/**
 * @title Influence Prerequisites
 */
export type InfluencePrerequisites = PlainPrerequisites<InfluencePrerequisiteGroup>

/**
 * @title Language Prerequisites
 */
export type LanguagePrerequisites = PrerequisitesForLevels<LanguagePrerequisiteGroup>

/**
 * @title Animist Power Prerequisites
 */
export type AnimistPowerPrerequisites = PlainPrerequisites<AnimistPowerPrerequisiteGroup>

/**
 * @title Geode Ritual Prerequisites
 */
export type GeodeRitualPrerequisites = PlainPrerequisites<GeodeRitualPrerequisiteGroup>

/**
 * @title Enhancement Prerequisites
 */
export type EnhancementPrerequisites = PlainPrerequisites<EnhancementPrerequisiteGroup>
