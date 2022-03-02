/**
 * @main Culture
 */

import { Errata } from "./source/_Erratum"
import { PublicationRefs } from "./source/_PublicationRef"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage"
import { BinarySex } from "./_Sex"

/**
 * @title Culture
 */
export type Culture = {
  /**
   * An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * A list of native languages (usually it is only one).
   * @minItems 1
   */
  language: Language[]

  /**
   * A list of native scripts (usually it is only one). If the culture does not
   * use any script, leave this field empty.
   * @minItems 1
   */
  script?: Script[]

  /**
   * If the area knowledge has a fixed value or can be adjusted.
   */
  area_knowledge: AreaKnowledge

  /**
   * A list of possible social status in the respective culture.
   * @minItems 1
   */
  social_status: SocialStatus[]

  /**
   * A list of professions that are typical for the culture, as well as
   * professions that are rarely practiced or encountered in the culture. The
   * list is either defined by group (as multiple lists) or plain (as a single
   * list).
   */
  common_professions: CommonProfessions.Config

  /**
   * A list of common advantages.
   * @minItems 1
   */
  common_advantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of common disadvantages.
   * @minItems 1
   */
  common_disadvantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of uncommon advantages.
   * @minItems 1
   */
  uncommon_advantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of uncommon disadvantages.
   * @minItems 1
   */
  uncommon_disadvantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * A list of common skills.
   * @minItems 1
   */
  common_skills: CommonnessRatedSkill[]

  /**
   * A list of uncommon skills.
   * @minItems 1
   */
  uncommon_skills?: CommonnessRatedSkill[]

  /**
   * The skill points you get for buying the culture package.
   * @minItems 1
   */
  cultural_package: CulturalPackageItem[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: Translation
  }
}

type Language = {
  /**
   * The language's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

type Script = {
  /**
   * The script's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

/**
 * If the area knowledge has a fixed value or can be adjusted.
 */
type AreaKnowledge =
  | { tag: "Fixed" }
  | { tag: "Adjustable" }

type SocialStatus = {
  /**
   * The social status's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

/**
 * @title Common Professions
 */
namespace CommonProfessions {
  export type Profession = {
    /**
     * The profession's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }

  export type ProfessionVariant = {
    /**
     * The profession variant's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }

  export namespace Plain {
    type Constraint = {
      tag: "Profession"

      /**
       * The profession's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }

    /**
     * A plain list of professions.
     */
    export type T = {
      tag: "Plain"

      /**
       * The list of professions.
       * @minItems 1
       */
      constraints: Constraint[]
    }
  }

  export namespace Grouped {
    export namespace Constraints {
      /**
       * Some profession variants are more common than others. There may be
       * cultures where some variants are not represented at all.
       */
      export type WeightedVariants = {
        /**
         * The list of more common variants.
         * @minItems 1
         */
        variants: ProfessionVariant[]

        /**
         * The "weight" difference compared to other variants. Some variants are
         * simply more common (Mostly), but sometimes only specific variants are
         * used (Only).
         */
        weight: Weight
      }

      export type Profession = {
        tag: "Profession"

        /**
         * The profession's identifier.
         * @integer
         * @minimum 1
         */
        id: number

        /**
         * Some profession variants are more common than others. There may be
         * cultures where some variants are not represented at all.
         */
        weighted_variants?: WeightedVariants

        /**
         * Some professions may be found in a culture, but are not that
         * common.
         */
        rarity?: Rarity
      }
    }

    /**
     * The "weight" difference compared to other variants. Some variants are
     * simply more common (Mostly), but sometimes only specific variants are
     * used (Only).
     */
    export type Weight =
      | { tag: "Mostly" }
      | { tag: "Only" }

    /**
     * Some professions may be found in a culture, but are not that common.
     */
    export type Rarity =
      | { tag: "Rare" }
      | { tag: "VeryRare" }

    export namespace Mundane {
      /**
       * Some professions may be found in a culture, but are not that common.
       */
      export type ProfessionSubgroup =
        | { tag: "Profane" }
        | { tag: "Fighter" }
        | { tag: "Religious" }

      export type Constraint =
        | Constraints.Profession
        | {
          tag: "ProfessionSubgroup"
          subgroup: ProfessionSubgroup
        }

      /**
       * This defines how the list of constraints should be offset against the
       * list of all mundane professions: Either only the professions are kept
       * that intersect with the constraints (include) or only the professions
       * are kept that are different from the constraints (exclude).
       */
      export type Operation =
        | { tag: "Intersection" }
        | { tag: "Difference" }

      /**
       * A list of professions. The filter specifies how the list is applied to
       * all mundane professions.
       */
      export type T = {
        /**
         * The list of professions.
         * @minItems 1
         */
        constraints: Constraint[]

        /**
         * This defines how the list of constraints should be offset against the
         * list of all mundane professions: Either only the professions are kept
         * that intersect with the constraints (include) or only the professions
         * are kept that are different from the constraints (exclude).
         */
        operation: Operation
      }
    }

    export namespace Magic {
      /**
       * Some professions are more common than others. There may be cultures
       * where some professions are not represented at all.
       */
      export type WeightedProfessions = {
        /**
         * The list of more common variants.
         * @minItems 1
         */
        professions: Profession[]

        /**
         * The "weight" difference compared to other professions. Some
         * professions are simply more common (Mostly), but sometimes only
         * specific professions are used (Only).
         */
        weight: Weight
      }

      export type Constraint =
        | {
          tag: "Tradition"

          /**
           * The magical tradition's identifier.
           * @integer
           * @minimum 1
           */
          id: number

          /**
           * Some professions are more common than others. There may be cultures
           * where some professions are not represented at all.
           */
          weighted_professions?: WeightedProfessions

          /**
           * Some traditions may be found in a culture, but are not that common.
           */
          rarity?: Rarity
        }
        | { tag: "MagicDilettante" }
        | Constraints.Profession

      export type T = {
        /**
         * The list of professions.
         * @minItems 1
         */
        constraints: Constraint[]
      }
    }

    export namespace Blessed {
      export type Constraint = {
        tag: "Tradition"

        /**
         * The blessed tradition's identifier.
         * @integer
         * @minimum 1
         */
        id: number

        /**
         * Some traditions may be found in a culture, but are not that common.
         */
        rarity?: Rarity
      }

      export type T = {
        /**
         * The list of professions.
         * @minItems 1
         */
        constraints: Constraint[]
      }
    }

    /**
     * Lists of professions by group.
     * @minProperties 2
     */
    export type T = {
      tag: "Grouped"

      /**
       * A list of professions. The filter specifies how the list is applied to
       * all mundane professions.
       */
      mundane?: Mundane.T
      magic?: Magic.T
      blessed?: Blessed.T
    }
  }

  /**
   * A list of professions that are typical for the culture, as well as
   * professions that are rarely practiced or encountered in the culture. The
   * list is either defined by group (as multiple lists) or plain (as a single
   * list).
   */
  export type Config = Plain.T | Grouped.T
}

type CommonnessRatedSkill = {
  /**
   * The skill's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

type CulturalPackageItem = {
  /**
   * The skill's identifier.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill points for the respective skill you get for buying the cultural
   * package.
   * @integer
   * @minimum 1
   * @maximum 2
   */
  points: number
}

type Translation = {
  /**
   * The name of the state.
   * @minLength 1
   */
  name: string

  /**
   * The description of the area knowledge.
   */
  area_knowledge: AreaKnowledgeTranslation

  /**
   * The respective common advantages text from the source book.
   * @minLength 1
   */
  common_advantages?: string

  /**
   * The respective common disadvantages text from the source book.
   * @minLength 1
   */
  common_disadvantages?: string

  /**
   * The respective uncommon advantages text from the source book.
   * @minLength 1
   */
  uncommon_advantages?: string

  /**
   * The respective uncommon disadvantages text from the source book.
   * @minLength 1
   */
  uncommon_disadvantages?: string

  /**
   * Structured description of common names.
   */
  common_names: CommonNames

  errata?: Errata
}

/**
 * Description and examples of the area knowledge.
 */
type AreaKnowledgeTranslation = {
  /**
   * The full description without examples in parenthesis.
   * @minLength 1
   */
  description: string

  /**
   * A shorter version of the description, used in input fields and other UI
   * elements where the space might be to small to use the full description.
   * @minLength 1
   */
  abbreviated: string

  /**
   * Examples of areas, if applicable.
   * @minItems 1
   */
  examples?: AreaKnowledgeExample[]
}

/**
 * @minLength 1
 */
type AreaKnowledgeExample = string

/**
 * Structured description of common names.
 * @minProperties 1
 */
type CommonNames = {
  /**
   * First names can be gender-neutral, but they can also be for a specific
   * binary sex. They are sorted into groups.
   * @minItems 1
   */
  first_name_groups?: NameGroup[]

  /**
   * Last names can be gender-neutral, like family names, but they can also be
   * for a specific binary sex. They are sorted into groups.
   * @minItems 1
   */
  last_name_groups?: NameGroup[]

  /**
   * Special naming rules.
   * @minLength 1
   */
  naming_rules?: string
}

type NameGroup = {
  /**
   * The group label.
   * @minLength 1
   */
  label: string

  /**
   * The binary sex if the group is only for a certain binary sex.
   */
  sex: BinarySex

  /**
   * The names from the group.
   * @minItems 1
   */
  names: Name[]
}

type Name = {
  /**
   * @minLength 1
   */
  name: string

  /**
   * Additional information about the name, appended in parenthesis.
   * @minLength 1
   */
  note?: string
}
