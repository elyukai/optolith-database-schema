/**
 * @title Prerequisites
 */

import { AdvantageDisadvantagePrerequisiteGroup, AnimistPowerPrerequisiteGroup, ArcaneTraditionPrerequisiteGroup, DerivedCharacteristicPrerequisiteGroup, EnhancementPrerequisiteGroup, GeneralPrerequisiteGroup, GeodeRitualPrerequisiteGroup, InfluencePrerequisiteGroup, LanguagePrerequisiteGroup, LiturgyPrerequisiteGroup, PersonalityTraitPrerequisiteGroup, ProfessionPrerequisiteGroup, PublicationPrerequisiteGroup, SpellworkPrerequisiteGroup } from "./prerequisites/PrerequisiteGroups.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * A prerequisite group has no influence on validation logic. It serves as a
 * single unit for displaying purposes, where the source uses a prerequisites
 * item that cannot be represented as a single prerequisite.
 */
export type PrerequisiteGroup<T> = {
  tag: "Group"

  /**
   * @minItems 2
   */
  list: T[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<NonEmptyString>
}

export type PrerequisiteSingleOrGroup<T> = T | PrerequisiteGroup<T>

export type PlainPrerequisites<T> = {
  tag: "Plain"

  /**
   * @minItems 1
   */
  plain: PrerequisiteSingleOrGroup<T>[]
}

export type PrerequisitesByLevel<T> =
  | PlainPrerequisites<T>
  | {
    tag: "ByLevel"

    /**
     * @minItems 1
     */
    by_level: PrerequisitesForLevel<T>[]
  }

export type PrerequisitesForLevel<T> = {
  /**
   * @integer
   * @minimum 1
   */
  level: number

  /**
   * @minItems 1
   */
  prerequisites: PrerequisiteSingleOrGroup<T>[]
}

export type DerivedCharacteristicPrerequisites = PlainPrerequisites<DerivedCharacteristicPrerequisiteGroup>

export type PublicationPrerequisites = PlainPrerequisites<PublicationPrerequisiteGroup>

/**
 * @title General Prerequisites
 */
export type GeneralPrerequisites = PrerequisitesByLevel<GeneralPrerequisiteGroup>

/**
 * @title Profession Prerequisites
 */
export type ProfessionPrerequisites = PlainPrerequisites<ProfessionPrerequisiteGroup>

/**
 * @title Advantage/Disadvantage Prerequisites
 */
export type AdvantageDisadvantagePrerequisites = PrerequisitesByLevel<AdvantageDisadvantagePrerequisiteGroup>

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
export type LanguagePrerequisites = PrerequisitesByLevel<LanguagePrerequisiteGroup>

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
