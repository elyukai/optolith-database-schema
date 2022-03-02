/**
 * @main SkillGroup
 */

import { SkillCheck } from "./_SkillCheck"

/**
 * @title Skill Group
 */
 export type SkillGroup = {
  /**
   * The skill group's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill group check's attributes.
   */
  check: SkillCheck

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
       * The skill group's name.
       * @minLength 1
       */
      name: string

      /**
       * The skill group's full name.
       * @minLength 1
       */
      full_name: string
    }
  }
}
