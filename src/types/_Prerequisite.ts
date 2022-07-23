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
  /**
   * @minItems 2
   */
  list: T[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<NonEmptyString>
}

export type PrerequisiteSingleOrGroup<T> = T | { tag: "Group"; group: PrerequisiteGroup<T> }

/**
 * @minItems 1
 */
export type PlainPrerequisites<T> = PrerequisiteSingleOrGroup<T>[]

/**
 * @minItems 1
 */
export type PrerequisitesForLevels<T> = PrerequisitesForLevel<T>[]

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

export type SimplePrerequisites<T> =
  | { tag: "Plain"; plain: PlainPrerequisites<T> }

export type PrerequisitesByLevel<T> =
  | { tag: "Plain"; plain: PlainPrerequisites<T> }
  | { tag: "ByLevel"; by_level: PrerequisitesForLevels<T>[] }

export type DerivedCharacteristicPrerequisites = SimplePrerequisites<DerivedCharacteristicPrerequisiteGroup>

export type PublicationPrerequisites = SimplePrerequisites<PublicationPrerequisiteGroup>

/**
 * @title General Prerequisites
 */
export type GeneralPrerequisites = PrerequisitesByLevel<GeneralPrerequisiteGroup>

/**
 * @title Profession Prerequisites
 */
export type ProfessionPrerequisites = SimplePrerequisites<ProfessionPrerequisiteGroup>

/**
 * @title Advantage/Disadvantage Prerequisites
 */
export type AdvantageDisadvantagePrerequisites = PrerequisitesByLevel<AdvantageDisadvantagePrerequisiteGroup>

/**
 * @title Arcane Tradition Prerequisites
 */
export type ArcaneTraditionPrerequisites = SimplePrerequisites<ArcaneTraditionPrerequisiteGroup>

/**
 * @title Personality Trait Prerequisites
 */
export type PersonalityTraitPrerequisites = SimplePrerequisites<PersonalityTraitPrerequisiteGroup>

/**
 * @title Spellwork Prerequisites
 */
export type SpellworkPrerequisites = SimplePrerequisites<SpellworkPrerequisiteGroup>

/**
 * @title Liturgy Prerequisites
 */
export type LiturgyPrerequisites = SimplePrerequisites<LiturgyPrerequisiteGroup>

/**
 * @title Influence Prerequisites
 */
export type InfluencePrerequisites = SimplePrerequisites<InfluencePrerequisiteGroup>

/**
 * @title Language Prerequisites
 */
export type LanguagePrerequisites = PrerequisitesByLevel<LanguagePrerequisiteGroup>

/**
 * @title Animist Power Prerequisites
 */
export type AnimistPowerPrerequisites = SimplePrerequisites<AnimistPowerPrerequisiteGroup>

/**
 * @title Geode Ritual Prerequisites
 */
export type GeodeRitualPrerequisites = SimplePrerequisites<GeodeRitualPrerequisiteGroup>

/**
 * @title Enhancement Prerequisites
 */
export type EnhancementPrerequisites = SimplePrerequisites<EnhancementPrerequisiteGroup>
