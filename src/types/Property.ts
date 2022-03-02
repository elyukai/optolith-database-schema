/**
 * @main Property
 */

import { SkillCheck } from "./_SkillCheck"

/**
 * @title Property
 */
export type Property = {
  /**
   * The property's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The property check's attributes. Only the properties from the Core Rules
   * have defined property checks.
   */
  check?: SkillCheck

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
       * The property's name.
       * @minLength 1
       */
      name: string
    }
  }
}
