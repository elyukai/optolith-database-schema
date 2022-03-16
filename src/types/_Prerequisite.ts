/**
 * @title Prerequisites
 */

import { AdvantageDisadvantagePrerequisiteGroup, AnimistPowerPrerequisiteGroup, ArcaneTraditionPrerequisiteGroup, DerivedCharacteristicPrerequisiteGroup, EnhancementPrerequisiteGroup, GeneralPrerequisiteGroup, GeodeRitualPrerequisiteGroup, InfluencePrerequisiteGroup, LanguagePrerequisiteGroup, LiturgyPrerequisiteGroup, PersonalityTraitPrerequisiteGroup, ProfessionPrerequisiteGroup, PublicationPrerequisiteGroup, SpellworkPrerequisiteGroup } from "./prerequisites/PrerequisiteGroups.js"

/**
 * @title Prerequisite Collection Types
 */
namespace PrerequisiteCollection {
  /**
   * A prerequisite group has no influence on validation logic. It serves as a
   * single unit for displaying purposes, where the source uses a prerequisites
   * item that cannot be represented as a single prerequisite.
   */
  export type Group<T> = {
    tag: "Group"

    /**
     * @minItems 2
     */
    list: T[]

    /**
     * All translations for the entry, identified by IETF language tag (BCP47).
     * @minProperties 1
     */
    translations: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       * @minLength 1
       */
      [localeId: string]: string
    }
  }

  type SingleAndGrouped<T> = T | Group<T>

  export type Plain<T> = {
    tag: "Plain"

    /**
     * @minItems 1
     */
    list: SingleAndGrouped<T>[]
  }

  export type ByLevel<T> =
    | Plain<T>
    | {
      tag: "ByLevel"

      /**
       * @minItems 1
       */
      list: {
        /**
         * @integer
         * @minimum 1
         */
        level: number

        /**
         * @minItems 1
         */
        prerequisites: SingleAndGrouped<T>[]
      }[]
    }
}

export type DerivedCharacteristicPrerequisites = PrerequisiteCollection.Plain<DerivedCharacteristicPrerequisiteGroup>

export type PublicationPrerequisites = PrerequisiteCollection.Plain<PublicationPrerequisiteGroup>

/**
 * @title General Prerequisites
 */
export type GeneralPrerequisites = PrerequisiteCollection.ByLevel<GeneralPrerequisiteGroup>

/**
 * @title Profession Prerequisites
 */
export type ProfessionPrerequisites = PrerequisiteCollection.Plain<ProfessionPrerequisiteGroup>

/**
 * @title Advantage/Disadvantage Prerequisites
 */
export type AdvantageDisadvantagePrerequisites = PrerequisiteCollection.ByLevel<AdvantageDisadvantagePrerequisiteGroup>

/**
 * @title Arcane Tradition Prerequisites
 */
export type ArcaneTraditionPrerequisites = PrerequisiteCollection.Plain<ArcaneTraditionPrerequisiteGroup>

/**
 * @title Personality Trait Prerequisites
 */
export type PersonalityTraitPrerequisites = PrerequisiteCollection.Plain<PersonalityTraitPrerequisiteGroup>

/**
 * @title Spellwork Prerequisites
 */
export type SpellworkPrerequisites = PrerequisiteCollection.Plain<SpellworkPrerequisiteGroup>

/**
 * @title Liturgy Prerequisites
 */
export type LiturgyPrerequisites = PrerequisiteCollection.Plain<LiturgyPrerequisiteGroup>

/**
 * @title Influence Prerequisites
 */
export type InfluencePrerequisites = PrerequisiteCollection.Plain<InfluencePrerequisiteGroup>

/**
 * @title Language Prerequisites
 */
export type LanguagePrerequisites = PrerequisiteCollection.ByLevel<LanguagePrerequisiteGroup>

/**
 * @title Animist Power Prerequisites
 */
export type AnimistPowerPrerequisites = PrerequisiteCollection.Plain<AnimistPowerPrerequisiteGroup>

/**
 * @title Geode Ritual Prerequisites
 */
export type GeodeRitualPrerequisites = PrerequisiteCollection.Plain<GeodeRitualPrerequisiteGroup>

/**
 * @title Enhancement Prerequisites
 */
export type EnhancementPrerequisites = PrerequisiteCollection.Plain<EnhancementPrerequisiteGroup>
