/**
 * @main Profession
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage.js"
import { AdvantageIdentifier, DisadvantageIdentifier, SkillIdentifier } from "./_Identifier.js"
import {
  CombatTechniqueIdentifier,
  LiturgyIdentifier,
  MagicalActionIdentifier,
  RequirableSelectOptionIdentifier,
  SpecialAbilityIdentifier,
  SpellworkIdentifier,
} from "./_IdentifierGroup.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { ProfessionPrerequisites } from "./_Prerequisite.js"
import {
  CantripReference,
  CombatTechniqueReference,
  CurriculumReference,
  MagicalTraditionReference,
  SkillGroupReference,
  SkillReference,
} from "./_SimpleReferences.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

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
  group: ProfessionGroup

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
  versions: ProfessionVersion[]
}

export type ProfessionGroup =
  | { tag: "Mundane"; mundane: MundaneProfessionGroup }
  | { tag: "Magical"; magical: MagicalProfessionGroup }
  | { tag: "Blessed"; blessed: {} }

export type MundaneProfessionGroup = "Profane" | "Fighter" | "Religious"

export type MagicalProfessionGroup = {
  /**
   * The curriculum/academy associated with this magical profession, if any.
   */
  curriculum?: CurriculumReference
}

export type ProfessionVersion =
  | { tag: "Experienced"; experienced: ExperiencedProfessionPackage }
  | {
      tag: "ByExperienceLevel"
      by_experience_level: ProfessionPackagesForDifferentExperienceLevels
    }

export type ExperiencedProfessionPackage = {
  /**
   * The profession representation variant's identifier. An unique, increasing
   * integer.
   * @integer
   * @minimum 1
   */
  id: number

  package: ProfessionPackage

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ProfessionTranslation>
}

export type ProfessionPackagesForDifferentExperienceLevels = {
  /**
   * The profession representation variant's identifier. An unique, increasing
   * integer.
   * @integer
   * @minimum 1
   */
  id: number

  packages_map: ExperienceLevelDynamicProfessionPackage[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ProfessionTranslation>
}

export type ExperienceLevelDynamicProfessionPackage = {
  /**
   * The experience level this profession targets. The experience level
   * must be unique for this representation.
   * @integer
   * @minimum 1
   * @maximum 7
   * @default 3
   */
  experience_level_id: number

  package: ProfessionPackage
}

/**
 * @title Profession Representation Variant
 */
export type ProfessionPackage = {
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
   * In some areas, the profession package grants a loose set of stats where the
   * player must choose between different options for the profession package.
   */
  options?: ProfessionPackageOptions

  /**
   * Any special abilities the profession receives from the package.
   */
  special_abilities?: ProfessionSpecialAbility[]

  /**
   * Provides ratings for the combat techniques that the hero receives from the
   * package.
   */
  combat_techniques?: CombatTechniqueRating[]

  /**
   * The skill ratings the package grants to the hero.
   */
  skills?: SkillRating[]

  /**
   * The skill ratings a magical profession receives for spells; these spells
   * are considered activated. Spells from an unfamiliar Tradition, if any, are
   * identified as such.
   */
  spells?: SpellRating[]

  /**
   * Clerical professions receive these liturgical chants at the listed skill
   * ratings. These liturgical chants are considered activated.
   */
  liturgical_chants?: LiturgicalChantRating[]

  /**
   * Typical advantages for the profession.
   * @minItems 1
   */
  suggested_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * Typical disadvantages for the profession.
   * @minItems 1
   */
  suggested_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * These advantages do not fit well with this profession; to be checked with
   * the GM before taking any of them.
   * @minItems 1
   */
  unsuitable_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * These disadvantages do not fit well with this profession; to be checked
   * with the GM before taking any of them.
   * @minItems 1
   */
  unsuitable_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * Provides examples of variants for the profession, which may include changes
   * to AP values and additional or modified skill ratings, special abilities,
   * or combat techniques, as compared to the basic profession. Usually picking
   * a variant is optional, but there are some rare exceptions where picking a
   * variant is required.
   */
  variants?: ProfessionVariants
}

export type ProfessionTranslation = {
  /**
   * Name of the basic profession.
   */
  name: ProfessionName

  /**
   * A name addition of the profession. This will contain texts like name of
   * the academy or the witch circle. It is enclosed in parenthesis, but the
   * database entry must not contain parenthesis.
   */
  specification?: ProfessionName

  /**
   * Typical advantages for the profession.
   */
  suggested_advantages?: NonEmptyString

  /**
   * Typical disadvantages for the profession.
   */
  suggested_disadvantages?: NonEmptyString

  /**
   * These advantages do not fit well with this profession; to be checked with
   * the GM before taking any of them.
   */
  unsuitable_advantages?: NonEmptyString

  /**
   * These disadvantages do not fit well with this profession; to be checked
   * with the GM before taking any of them.
   */
  unsuitable_disadvantages?: NonEmptyString

  errata?: Errata
}

/**
 * Provides examples of variants for the profession, which may include changes
 * to AP values and additional or modified skill ratings, special abilities, or
 * combat techniques, as compared to the basic profession. Usually picking a
 * variant is optional, but there are some rare exceptions where picking a
 * variant is required.
 */
export type ProfessionVariants = {
  /**
   * If the selection of a profession variant is required.
   */
  is_selection_required: boolean

  /**
   * The list of profession variants.
   * @minItems 1
   */
  list: ProfessionVariant[]
}

/**
 * @title Profession Variant
 */
export type ProfessionVariant = {
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
   *
   */
  options?: ProfessionVariantPackageOptions

  /**
   * Any special abilities the profession receives from the package variant.
   */
  special_abilities?: VariantSpecialAbility[]

  /**
   * Provides ratings for the combat techniques that the hero receives from the
   * package variant.
   */
  combat_techniques?: CombatTechniqueRating[]

  /**
   * The skill ratings the package variant grants to the hero.
   */
  skills?: SkillRating[]

  /**
   * The skill ratings a magical profession variant receives for spells; these
   * spells are considered activated. Spells from an unfamiliar Tradition, if
   * any, are identified as such.
   */
  spells?: SpellRating[]

  /**
   * Clerical professions receive these liturgical chants at the listed skill
   * ratings. These liturgical chants are considered activated.
   */
  liturgical_chants?: LiturgicalChantRating[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ProfessionVariantTranslation>
}

export type ProfessionVariantTranslation = {
  /**
   * Name of the profession variant.
   */
  name: ProfessionName

  /**
   * A text that replaces the generated text for the profession variant.
   */
  full_text?: NonEmptyString

  /**
   * A text that is appended to the generated text for the profession variant.
   *
   * Has no effect when `full_text` is set.
   */
  concluding_text?: NonEmptyString
}

export type ProfessionSpecialAbility =
  | { tag: "Fixed"; fixed: FixedSpecialAbility }
  | { tag: "Selection"; selection: SpecialAbilitySelection }

export type FixedSpecialAbility = SpecialAbilityDefinition

export type SpecialAbilitySelection = {
  /**
   * @minItems 2
   */
  options: SpecialAbilityDefinition[]
}

export type SpecialAbilityDefinition = {
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

export type VariantSpecialAbility =
  | { tag: "Fixed"; fixed: FixedVariantSpecialAbility }
  | { tag: "Selection"; selection: VariantSpecialAbilitySelection }

export type FixedVariantSpecialAbility = {
  /**
   * The identifier of the combat technique to provide the rating for.
   */
  id: SpecialAbilityIdentifier

  /**
   * if set to `false`, if the selection is granted by the basic package, it
   * is removed.
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

export type VariantSpecialAbilitySelection = {
  /**
   * if set to `false`, if the selection is granted by the basic package, it
   * is removed.
   */
  active?: false

  /**
   * @minItems 2
   */
  options: SpecialAbilityDefinition[]
}

export type CombatTechniqueRating = {
  /**
   * The identifier of the combat technique to provide the rating for.
   */
  id: CombatTechniqueIdentifier

  /**
   * The rating bonus provided for the combat technique. If used in a profession
   * variant, it can also be used to lower the bonus of the base profession.
   *
   * **Note:** This is a rating *bonus*, so it will be *added* to the default
   * value of 6.
   * @integer
   * @minimum -6
   * @maximum 6
   */
  rating: number
}

export type SkillRating = {
  /**
   * The identifier of the skill to provide the rating for.
   * @integer
   * @minimum 1
   * @maximum 59
   */
  id: SkillIdentifier

  /**
   * The rating bonus provided for the skill. If used in a profession variant,
   * it can also be used to lower the bonus of the base profession
   * @integer
   * @minimum -8
   * @maximum 8
   */
  rating: number
}

export type SpellRating = {
  /**
   * The identifier(s) of the spell(s) to choose from to provide the rating for.
   * If multiple spells are provided, they must all have the same improvement
   * cost.
   * @minItems 1
   */
  id: ProfessionSpellIdentifier[]

  /**
   * The rating bonus provided for the (selected) spell. If used in a profession
   * variant, it can also be used to lower the bonus of the base profession.
   * @integer
   * @minimum -10
   * @maximum 10
   */
  rating: number
}

export type ProfessionSpellIdentifier =
  | { tag: "Spellwork"; spellwork: ProfessionSpellworkIdentifier }
  | { tag: "MagicalAction"; magical_action: ProfessionMagicalActionIdentifier }

export type ProfessionSpellworkIdentifier = {
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
  tradition?: MagicalTraditionReference
}

export type ProfessionMagicalActionIdentifier = {
  /**
   * The identifier of the magical action to provide the rating for.
   */
  id: MagicalActionIdentifier
}

export type LiturgicalChantRating = {
  /**
   * The identifier(s) of the liturgical chant(s) to choose from to provide
   * the rating for. If multiple liturgical chants are provided, they must all
   * have the same improvement cost.
   * @minItems 1
   */
  id: LiturgyIdentifier[]

  /**
   * The rating bonus provided for the selected liturgical chant. If used in a
   * profession variant, it can also be used to lower the bonus of the base
   * profession.
   * @integer
   * @minimum -10
   * @maximum 10
   */
  rating: number
}

/**
 * In some areas, the profession package grants a loose set of stats where the
 * player must choose between different options for the profession package.
 * @minProperties 1
 */
export type ProfessionPackageOptions = {
  skill_specialization?: SkillSpecializationOptions
  languages_scripts?: LanguagesScriptsOptions
  combat_techniques?: CombatTechniquesOptions
  cantrips?: CantripsOptions
  curses?: CursesOptions
  terrain_knowledge?: TerrainKnowledgeOptions
  skills?: SkillsOptions
}

/**
 * In some areas, the profession package grants a loose set of stats where the
 * player must choose between different options for the profession package. The
 * variant may override or remove those options.
 * @minProperties 1
 */
export type ProfessionVariantPackageOptions = {
  skill_specialization?: VariantOptionAction<SkillSpecializationOptions>
  languages_scripts?: VariantOptionAction<LanguagesScriptsOptions>
  combat_techniques?: VariantOptionAction<CombatTechniquesOptions>
  cantrips?: VariantOptionAction<CantripsOptions>
  curses?: VariantOptionAction<CursesOptions>
  terrain_knowledge?: VariantOptionAction<TerrainKnowledgeOptions>
  skills?: VariantOptionAction<SkillsOptions>
}

export type VariantOptionAction<T> =
  | { tag: "Remove"; remove: {} }
  | { tag: "Override"; override: T }

/**
 * Select an application from a skill or from one of a list of skills where you
 * get a skill specialization for. You can also specify a skill groups from
 * which you can choose a skill.
 */
export type SkillSpecializationOptions =
  | { tag: "Single"; single: SingleSkillSpecializationOption }
  | { tag: "Group"; group: SkillGroupSkillSpecializationOption }

export type SingleSkillSpecializationOption = {
  /**
   * Possible skills to get a skill specialization for.
   * @minItems 1
   * @uniqueItems
   */
  options: SkillReference[]
}

export type SkillGroupSkillSpecializationOption = SkillGroupReference

/**
 * Buy languages and scripts for a specific amount of AP.
 */
export type LanguagesScriptsOptions = {
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
export type CombatTechniquesOptions = {
  /**
   * Specify the number of combat techniques that can be selected so that they
   * get increased to a specific CtR. There can be multiple selections with
   * different CtRs.
   * @minItems 1
   */
  fixed: RatingForCombatTechniquesNumber[]

  /**
   * Define if after the fixed selections the remaining unselected combat
   * techniques will receive a certain rating bonus as well.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  rest_rating?: number

  /**
   * The list of combat techniques to choose from.
   * @minItems 2
   */
  options: CombatTechniqueReference[]
}

export type RatingForCombatTechniquesNumber = {
  /**
   * The number of selectable combat techniques.
   * @integer
   * @minimum 1
   */
  number: number

  /**
   * The rating bonus provided for the selected combat technique(s).
   *
   * **Note:** This is a rating *bonus*, so it will be *added* to the default
   * value of 6.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  rating: number
}

/**
 * Select one or more cantrips you receive.
 */
export type CantripsOptions = {
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
  options: CantripReference[]
}

/**
 * Buy curses for a specific amount of AP.
 */
export type CursesOptions = {
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
export type TerrainKnowledgeOptions = {
  /**
   * The list of possible terrain knowledges.
   * @minItems 2
   */
  options: TerrainKnowledgeOptionReference[]
}

export type TerrainKnowledgeOptionReference = {
  /**
   * The terrain knowledge option's identifier.
   * @integer
   * @minimum 1
   * @maximum 10
   */
  id: number
}

/**
 * Buy skills for a specific amount of AP.
 */
export type SkillsOptions = {
  /**
   * If specified, you may only choose from skills of the specified group.
   */
  group?: SkillGroupReference

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
export type ProfessionName = SimpleProfessionName | ProfessionNameBySex

export type SimpleProfessionName = NonEmptyString

export type ProfessionNameBySex = {
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

export const config: TypeConfig<Profession, Profession["id"], "Profession"> = {
  name: "Profession",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Profession"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
