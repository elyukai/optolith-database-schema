/**
 * @main Skill
 */

import { Errata } from "./source/_Erratum"
import { PublicationRefs } from "./source/_PublicationRef"
import { ImprovementCost } from "./_ImprovementCost"
import { SkillCheck } from "./_SkillCheck"

/**
 * @title Skill
 */
export type Skill = {
  /**
   * The skill's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * Lists applications for the skill, if any. This does not necessarily include
   * all possible applications. There may also be new applications that could be
   * purchased via certain advantages or special abilities.
   */
  applications: Applications

  /**
   * Indicates whether encumbrance gives a penalty for checks with the skill.
   */
  encumbrance: Encumbrance

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  /**
   * The identifier of the skill group this skill belongs to.
   */
  group_id: number

  src: PublicationRefs

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
       * The name of the skill.
       * @minLength 1
       */
      name: string

      /**
       * If there are options available that can not be put into a selection
       * list (like different cults), provide the label text for the input
       * element here. Otherwise leave empty.
       * @minLength 1
       */
      applications_input_label?: string

      /**
       * The text listing the certain circumstances in which the encumbrance may
       * count. This text must be used if `encumbrance` is set to `"Maybe"`,
       * otherwise it is ignored if defined.
       * @minLength 1
       */
      encumbrance_description?: string

      /**
       * Mentions any tools from the equipment list that are necessary to employ
       * the skill.
       * @markdown
       * @minLength 1
       */
      tools?: string

      /**
       * Gives examples of the effects that various QL might provide.
       * @markdown
       * @minLength 1
       */
      quality: string

      /**
       * Lists examples of results for a failed check.
       * @markdown
       * @minLength 1
       */
      failed: string

      /**
       * Lists examples of results for a critical success.
       * @markdown
       * @minLength 1
       */
      critical: string

      /**
       * Lists examples of results for botches.
       * @markdown
       * @minLength 1
       */
      botch: string

      errata?: Errata
    }
  }
}

/**
 * A category. All available entries from the specified category will be
 * included as separate applications.
 */
type ApplicationCategory =
  | { tag: "BlessedTraditions" }
  | { tag: "Diseases" }
  | { tag: "Regions" }

/**
 * The skill's applications.
 */
type Applications =
  | {
    tag: "Derived"

    /**
     * A category. All available entries from the specified category will be
     * included as separate applications.
     */
    category: ApplicationCategory
  }
  | {
    tag: "Explicit"

    /**
     * A list of explicit applications.
     */
    list: Application[]
  }

/**
 * An explicit skill application.
 */
type Application = {
  /**
   * The skill application's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

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
       * The skill application's name.
       * @minLength 1
       */
      name: string
    }
  }
}

/**
 * Indicates whether encumbrance gives a penalty for checks with the skill.
 */
type Encumbrance =
  | { tag: "True" }
  | { tag: "False" }
  | { tag: "Maybe" }
