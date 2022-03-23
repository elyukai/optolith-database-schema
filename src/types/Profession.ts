/**
 * @main Profession
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage.js"
import { CombatTechniqueIdentifier, LiturgyIdentifier, MagicalActionIdentifier, RequirableSelectOptionIdentifier, SpecialAbilityIdentifier, SpellworkIdentifier } from "./_Identifier.js"
import { ProfessionPrerequisites } from "./_Prerequisite.js"

/**
 * @title Profession
 */
export type Profession = {
  /**
   * The profession's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The profession group.
   */
  group: Group

  /**
   * A list of professions representing the same profession but with (slightly)
   * different stats. For example, there may be a profession in a regional
   * sourcebook or in the core rules and a profession in an extension rulebook
   * like Magic of Aventuria, where the profession is basically called the same
   * and almost has the same values, but the version from Magic of Aventuria
   * features a spell style special ability that does not exist in the core
   * rules or regional sourcebook.
   *
   * The profession representation may feature different values for different
   * explicitly mentioned experience levels. In most cases, there is only one
   * stats package, which targets the experience level *Experienced*.
   * @minItems 1
   */
  representations: (
    | {
      tag: "Experienced"

      /**
       * The profession representation variant's identifier. An unique, increasing
       * integer.
       * @integer
       * @minimum 1
       */
      id: number

      package: ProfessionRepresentationVariant

      src: PublicationRefs
    }
    | {
      tag: "ByExperienceLevel"

      /**
       * The profession representation variant's identifier. An unique, increasing
       * integer.
       * @integer
       * @minimum 1
       */
      id: number

      packages: {
        /**
         * The experience level this profession targets. The experience level
         * must be unique for this representation.
         * @integer
         * @minimum 1
         * @maximum 7
         * @default 3
         */
        experience_level_id: number

        package: ProfessionRepresentationVariant
      }[]

      src: PublicationRefs
    }
  )[]
}

/**
 * @title Profession Representation Variant
 */
export type ProfessionRepresentationVariant = {
  /**
   * What does the professional package cost in adventure points?
   * @integer
   * @minimum 0
   */
  ap_value: number

  /**
   * Which prerequisites must be met to buy the stat block? For example, a
   * character might need the advantage Spellcaster or Blessed. Note: the AP
   * cost for a profession package does not include these prerequisites.
   */
  prerequisites?: ProfessionPrerequisites

  /**
   * @minProperties 1
   */
  options?: {
    skill_specialization?: SkillSpecializationOptions
    languages_scripts?: LanguagesScriptsOptions
    combat_techniques?: CombatTechniquesOptions
    cantrips?: CantripsOptions
    curses?: CursesOptions
    terrain_knowledge?: TerrainKnowledgeOptions
    skills?: SkillsOptions
  }

  /**
   * Any special abilities the profession receives from the package.
   */
  special_abilities?: SpecialAbility[]

  /**
   * Provides ratings for the combat techniques that the hero receives from the
   * package.
   */
  combat_techniques?: CombatTechnique[]

  /**
   * The skill ratings the package grants to the hero.
   */
  skills?: Skill[]

  /**
   * The skill ratings a magical profession receives for spells; these spells
   * are considered activated. Spells from an unfamiliar Tradition, if any, are
   * identified as such.
   */
  spells?: Spell[]

  /**
   * Clerical professions receive these liturgical chants at the listed skill
   * ratings. These liturgical chants are considered activated.
   */
  liturgical_chants?: LiturgicalChant[]

  /**
   * Typical advantages for the profession.
   * @minItems 1
   */
  suggested_advantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * Typical disadvantages for the profession.
   * @minItems 1
   */
  suggested_disadvantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * These advantages do not fit well with this profession; to be checked with
   * the GM before taking any of them.
   * @minItems 1
   */
  unsuitable_advantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * These disadvantages do not fit well with this profession; to be checked
   * with the GM before taking any of them.
   * @minItems 1
   */
  unsuitable_disadvantages?: CommonnessRatedAdvantageDisadvantage[]

  /**
   * Provides examples of variants for the profession, which may include changes
   * to AP values and additional or modified skill ratings, special abilities,
   * or combat techniques, as compared to the basic profession. Usually picking
   * a variant is optional, but there are some rare exceptions where picking a
   * variant is required.
   */
  variants?:
    | {
      tag: "Required"

      /**
       * @minItems 2
       */
      list: ProfessionVariant[]
    }
    | {
      tag: "Optional"

      /**
       * @minItems 1
       */
      list: ProfessionVariant[]
    }

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
       * Name of the basic profession.
       */
      name: Name

      /**
       * Typical advantages for the profession.
       * @minLength 1
       */
      suggested_advantages?: string

      /**
       * Typical disadvantages for the profession.
       * @minLength 1
       */
      suggested_disadvantages?: string

      /**
       * These advantages do not fit well with this profession; to be checked with
       * the GM before taking any of them.
       * @minLength 1
       */
      unsuitable_advantages?: string

      /**
       * These disadvantages do not fit well with this profession; to be checked
       * with the GM before taking any of them.
       * @minLength 1
       */
      unsuitable_disadvantages?: string

      errata?: Errata
    }
  }
}

/**
 * @title Profession Variant
 */
type ProfessionVariant = {
  /**
   * The profession variant's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The AP value you have to pay for the package variant.
   * @integer
   */
  ap_value: number

  /**
   * Which prerequisites must be met to buy the stat block? For example, a
   * character might need the advantage Spellcaster or Blessed. Note: the AP
   * cost for a profession package does not include these prerequisites.
   */
  prerequisites?: ProfessionPrerequisites

  /**
   * @minProperties 1
   */
  options?: {
    skill_specialization?: VariantOptionAction<SkillSpecializationOptions>
    languages_scripts?: VariantOptionAction<LanguagesScriptsOptions>
    combat_techniques?: VariantOptionAction<CombatTechniquesOptions>
    cantrips?: VariantOptionAction<CantripsOptions>
    curses?: VariantOptionAction<CursesOptions>
    terrain_knowledge?: VariantOptionAction<TerrainKnowledgeOptions>
    skills?: VariantOptionAction<SkillsOptions>
  }

  /**
   * Any special abilities the profession receives from the package variant.
   */
  special_abilities?: VariantSpecialAbility[]

  /**
   * Provides ratings for the combat techniques that the hero receives from the
   * package variant.
   */
  combat_techniques?: VariantCombatTechnique[]

  /**
   * The skill ratings the package variant grants to the hero.
   */
  skills?: VariantSkill[]

  /**
   * The skill ratings a magical profession variant receives for spells; these
   * spells are considered activated. Spells from an unfamiliar Tradition, if
   * any, are identified as such.
   */
  spells?: VariantSpell[]

  /**
   * Clerical professions receive these liturgical chants at the listed skill
   * ratings. These liturgical chants are considered activated.
   */
  liturgical_chants?: VariantLiturgicalChant[]

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
       * Name of the profession variant.
       * @minLength 1
       */
      name: string
    }
  }
}

type SpecialAbility =
  | {
    tag: "Fixed"

    /**
     * The identifier of the combat technique to provide the rating for.
     */
    id: SpecialAbilityIdentifier

    /**
     * The level of the received special ability.
     * @integer
     * @minimum 1
     */
    level?: number

    /**
     * Received select options. Order is important. Typically, you only need the
     * first array index, though.
     * @minItems 1
     */
    options?: RequirableSelectOptionIdentifier[]
  }
  | {
    tag: "Selection"

    /**
     * @minItems 2
     */
    options: {
      /**
       * The identifier of the combat technique to provide the rating for.
       */
      id: SpecialAbilityIdentifier

      /**
       * The level of the received special ability.
       * @integer
       * @minimum 1
       */
      level?: number

      /**
       * Received select options. Order is important. Typically, you only need the
       * first array index, though.
       * @minItems 1
       */
      options?: RequirableSelectOptionIdentifier[]
    }[]
  }

type VariantSpecialAbility =
  | {
    tag: "Fixed"

    /**
     * The identifier of the combat technique to provide the rating for.
     */
    id: SpecialAbilityIdentifier

    /**
     * if set to `false`, if the entry is granted by the basic package, it is
     * removed.
     */
    active?: false

    /**
     * The level of the received special ability.
     * @integer
     * @minimum 1
     */
    level?: number

    /**
     * Received select options. Order is important. Typically, you only need the
     * first array index, though.
     * @minItems 1
     */
    options?: RequirableSelectOptionIdentifier[]
  }
  | {
    tag: "Selection"

    /**
     * if set to `false`, if the selection is granted by the basic package, it
     * is removed.
     */
    active?: false

    /**
     * @minItems 2
     */
    options: {
      /**
       * The identifier of the combat technique to provide the rating for.
       */
      id: SpecialAbilityIdentifier

      /**
       * The level of the received special ability.
       * @integer
       * @minimum 1
       */
      level?: number

      /**
       * Received select options. Order is important. Typically, you only need the
       * first array index, though.
       * @minItems 1
       */
      options?: RequirableSelectOptionIdentifier[]
    }[]
  }

type CombatTechnique = {
  /**
   * The identifier of the combat technique to provide the rating for.
   */
  id: CombatTechniqueIdentifier

  /**
   * The rating provided for the combat technique.
   * @integer
   * @minimum 7
   */
  rating: number
}

type VariantCombatTechnique = {
  /**
   * The identifier of the combat technique to provide the rating for.
   */
  id: CombatTechniqueIdentifier

  /**
   * The rating provided for the combat technique. It overrides the basic
   * package's rating.
   * @integer
   * @minimum 6
   */
  rating: number
}

type Skill = {
  /**
   * The identifier of the skill to provide the rating for.
   * @integer
   * @minimum 1
   * @maximum 59
   */
  id: number

  /**
   * The rating provided for the skill.
   * @integer
   * @minimum 1
   */
  rating: number
}

type VariantSkill = {
  /**
   * The identifier of the skill to provide the rating for.
   * @integer
   * @minimum 1
   * @maximum 59
   */
  id: number

  /**
   * The rating provided for the skill. It overrides the basic package's rating.
   * @integer
   * @minimum 0
   */
  rating: number
}

type Spell =
  | {
    tag: "Fixed"

    /**
     * The identifier of the spell to provide the rating for.
     */
    id: SpellIdentifier

    /**
     * The rating provided for the spell.
     * @integer
     * @minimum 1
     */
    rating: number
  }
  | {
    tag: "Selection"

    /**
     * The identifiers of the spells to choose from to provide the rating for.
     * @minItems 2
     */
    id: SpellIdentifier[]

    /**
     * The rating provided for the selected spell.
     * @integer
     * @minimum 1
     */
    rating: number
  }

type VariantSpell =
  | {
    tag: "Fixed"

    /**
     * The identifier of the spell to provide the rating for.
     */
    id: SpellIdentifier

    /**
     * The rating provided for the spell. It overrides the basic package's
     * rating.
     * @integer
     * @minimum 0
     */
    rating: number
  }
  | {
    tag: "Selection"

    /**
     * The identifiers of the spells to choose from to provide the rating for.
     * @minItems 2
     */
    id: SpellIdentifier[]

    /**
     * The rating provided for the selected spell. It overrides the basic
     * package's rating.
     * @integer
     * @minimum 0
     */
    rating: number
  }

type SpellIdentifier =
  | {
    tag: "Spellwork"

    /**
     * The identifier of the spell to provide the rating for.
     */
    id: SpellworkIdentifier

    /**
     * If the spell is not part of the magical tradition required by the
     * package, this references the magical tradition it is part of. It can also
     * be used to define the target magical tradition of a spell if multiple
     * magical traditions are required and the spell is available to multiple
     * of them.
     */
    tradition?: {
      /**
       * The unfamiliar or ambiguous magical tradition's identifier.
       */
      id: number
    }
  }
  | {
    tag: "MagicalAction"

    /**
     * The identifier of the magical action to provide the rating for.
     */
    id: MagicalActionIdentifier
  }

type LiturgicalChant =
  | {
    tag: "Fixed"

    /**
     * The identifier of the liturgical chant to provide the rating for.
     */
    id: LiturgyIdentifier

    /**
     * The rating provided for the liturgical chant.
     * @integer
     * @minimum 1
     */
    rating: number
  }
  | {
    tag: "Selection"

    /**
     * The identifiers of the liturgical chants to choose from to provide the
     * rating for.
     * @minItems 2
     */
    id: LiturgyIdentifier[]

    /**
     * The rating provided for the selected liturgical chant.
     * @integer
     * @minimum 1
     */
    rating: number
  }

type VariantLiturgicalChant =
  | {
    tag: "Fixed"

    /**
     * The identifier of the liturgical chant to provide the rating for.
     */
    id: LiturgyIdentifier

    /**
     * The rating provided for the liturgical chant. It overrides the basic
     * package's rating.
     * @integer
     * @minimum 0
     */
    rating: number
  }
  | {
    tag: "Selection"

    /**
     * The identifiers of the liturgical chants to choose from to provide the
     * rating for.
     * @minItems 2
     */
    id: LiturgyIdentifier[]

    /**
     * The rating provided for the selected liturgical chant. It overrides the
     * basic package's rating.
     * @integer
     * @minimum 0
     */
    rating: number
  }

type VariantOptionAction<T> =
  | { tag: "Remove" }
  | {
    tag: "Override"

    value: T
  }

/**
 * Select an application from a skill or from one of a list of skills where you
 * get a skill specialization for. You can also specify a skill groups from
 * which you can choose a skill.
 */
type SkillSpecializationOptions =
  | {
    tag: "Single"

    /**
     * The referenced skill's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "Selection"

    /**
     * Possible skills to get a skill specialization for.
     * @minItems 2
     */
    options: {
      /**
       * The referenced skill's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]
  }
  | {
    tag: "Group"

    /**
     * The referenced skill group's identifier.
     * @integer
     * @minimum 1
     * @maximum 5
     */
    id: number
  }

/**
 * Buy languages and scripts for a specific amount of AP.
 */
type LanguagesScriptsOptions = {
  /**
   * The AP value you can buy languages and scripts for.
   * @integer
   * @minimum 2
   * @multipleOf 2
   */
  ap_value: number
}

/**
 * Select one or more combat techniques you get a CtR bonus for.
 */
type CombatTechniquesOptions = {
  /**
   * Specify the number of combat techniques that can be selected so that they
   * get increased to a specific CtR. There can be multiple selections with
   * different CtRs.
   * @minItems 1
   */
  fixed: {
    /**
     * The number of selectable combat techniques.
     * @integer
     * @minimum 1
     */
    number: number

    /**
     * The rating provided for the selected combat technique(s).
     * @integer
     * @minimum 7
     */
    rating: number
  }[]

  /**
   * Define if after the fixed selections the remaining unselected combat
   * techniques will receive a certain rating as well.
   * @integer
   * @minimum 7
   */
  rest_rating?: number

  /**
   * The list of combat techniques to choose from.
   * @minItems 2
   */
  options: {
    /**
     * The combat technique's identifier.
     */
    id: CombatTechniqueIdentifier
  }[]
}

/**
 * Select one or more cantrips you receive.
 */
type CantripsOptions = {
  /**
   * The number of selectable cantrips.
   * @integer
   * @minimum 1
   */
  number: number

  /**
   * The list of cantrips to choose from.
   * @minItems 2
   */
  options: {
    /**
     * The cantrip's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }[]
}

/**
 * Buy curses for a specific amount of AP.
 */
type CursesOptions = {
  /**
   * The AP value you can buy curses for.
   * @integer
   * @minimum 2
   * @multipleOf 2
   */
  ap_value: number
}

/**
 * Select one of a list of possible terrain knowledges
 */
type TerrainKnowledgeOptions = {
  /**
   * The list of possible terrain knowledges.
   * @minItems 2
   */
  options: {
    /**
     * The terrain knowledge option's identifier.
     * @integer
     * @minimum 1
     * @maximum 10
     */
    id: number
  }[]
}

/**
 * Buy skills for a specific amount of AP.
 */
type SkillsOptions = {
  /**
   * If specified, you may only choose from skills of the specified group.
   * @integer
   * @minimum 1
   * @maximum 1
   */
  group_id?: number

  /**
   * The AP value you can buy skills for.
   * @integer
   * @minimum 1
   */
  ap_value: number
}

/**
 * The name of the profession that may have sex-specific names.
 */
type Name =
  NonEmptyString
  | {
    /**
     * The name from the source publication.
     */
    default: NonEmptyString

    /**
     * The male name.
     */
    male: NonEmptyString

    /**
     * The female name.
     */
    female: NonEmptyString
  }

type Group =
  | {
    tag: "Mundane"

    sub:
      | { tag: "Profane" }
      | { tag: "Fighter" }
      | { tag: "Religious" }
  }
  | { tag: "Magical" }
  | { tag: "Blessed" }

/**
 * @minLength 1
 */
type NonEmptyString = string

export const validateSchema = validateSchemaCreator<Profession>(import.meta.url)
