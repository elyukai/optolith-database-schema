/**
 * @main Publication
 */

import { PublicationPrerequisites } from "../_Prerequisite"

/**
 * @title Publication
 */
type Publication = {
  /**
   * The publication's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The publication category.
   */
  category: Category

  /**
   * The age the content is restricted to.
   */
  age_restriction: AgeRestriction

  /**
   * The publication is not (fully) implemented and thus needs to be excluded
   * from * stable releases.
   */
  is_missing_implementation?: boolean

  /**
   * The specific other publications this publication depends on data from.
   */
  prerequisites?: PublicationPrerequisites

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The publisher's publication identifier.
       * @minLength 1
       * @example US25001
       */
      id?: string

      /**
       * The publication's name.
       * @minLength 1
       */
      name: string

      /**
       * The publication's abbreviation.
       * @minLength 1
       */
      abbreviation: string

      /**
       * The publication's release date.
       * @format date
       */
      release_date?: string

      /**
       * This publication translation is not (fully) implemented and thus needs to
       * be excluded from stable releases.
       */
      is_missing_implementation?: boolean
    }
  }
}

/**
 * The publication category.
 */
type Category =
  | { tag: "CoreRules" }
  | { tag: "ExpansionRules" }
  | { tag: "Sourcebook" }
  | { tag: "RegionalSourcebook" }

/**
 * The age the content is restricted to.
 */
type AgeRestriction =
  | { tag: "Adult" }
  | { tag: "None" }
