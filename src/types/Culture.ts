/**
 * @main Culture
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage.js"
import { AdvantageIdentifier, BlessedTraditionIdentifier, DisadvantageIdentifier, MagicalTraditionIdentifier, ProfessionIdentifier, SkillIdentifier } from "./_Identifier.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { BinarySex } from "./_Sex.js"
import { LanguageReference, ProfessionReference, ProfessionVariantReference, ScriptReference, SkillReference, SocialStatusReference } from "./_SimpleReferences.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

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
  language: LanguageReference[]

  /**
   * A list of native scripts (usually it is only one). If the culture does not
   * use any script, leave this field empty.
   * @minItems 1
   */
  script?: ScriptReference[]

  /**
   * If the area knowledge has a fixed value or can be adjusted.
   */
  area_knowledge: AreaKnowledge

  /**
   * A list of possible social status in the respective culture.
   * @minItems 1
   */
  social_status: SocialStatusReference[]

  /**
   * A list of professions that are typical for the culture, as well as
   * professions that are rarely practiced or encountered in the culture. The
   * list is either defined by group (as multiple lists) or plain (as a single
   * list).
   */
  common_professions: CommonProfessions

  /**
   * A list of common advantages.
   * @minItems 1
   */
  common_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * A list of common disadvantages.
   * @minItems 1
   */
  common_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

  /**
   * A list of uncommon advantages.
   * @minItems 1
   */
  uncommon_advantages?: CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>[]

  /**
   * A list of uncommon disadvantages.
   * @minItems 1
   */
  uncommon_disadvantages?: CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>[]

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
   */
  translations: LocaleMap<CultureTranslation>
}

/**
 * If the area knowledge has a fixed value or can be adjusted.
 */
export type AreaKnowledge = {
  /**
   * `true` if the area knowledge has a fixed value, `false` if it can be
   * adjusted.
   */
  is_fixed: boolean
}

/**
 * The "weight" difference compared to other professions or profession variants.
 * Some professions or profession variants are simply more common (Mostly), but
 * sometimes only specific elements are used (Only).
 */
export type Weight =
  | "Mostly"
  | "Only"

/**
 * Some professions or profession variants are more common than others. There
 * may be cultures where some professions or profession variants are not
 * represented at all.
 */
export type Weighted<ProfessionOrVariant> = {
  /**
   * The list of more common professions or profession variants.
   * @minItems 1
   */
  elements: ProfessionOrVariant[]

  /**
   * The "weight" difference compared to other professions or profession
   * variants. Some professions or profession variants are simply more common
   * (Mostly), but sometimes only specific elements are used (Only).
   */
  weight: Weight
}

/**
 * This defines how the list of constraints should be offset against the
 * list of all mundane professions: Either only the professions are kept
 * that intersect with the constraints (include) or only the professions
 * are kept that are different from the constraints (exclude).
 */
export type CommonProfessionConstraintsOperation =
  | "Intersection"
  | "Difference"

/**
 * A list of professions. The filter specifies how the list is applied to
 * all mundane professions.
 */
export type CommonProfessionConstraints<Constraint> = {
  /**
   * The list of constraints.
   * @minItems 1
   */
  constraints: Constraint[]

  /**
   * This defines how the list of constraints should be offset against the
   * list of all mundane professions: Either only the professions are kept
   * that intersect with the constraints (include) or only the professions
   * are kept that are different from the constraints (exclude).
   */
  operation: CommonProfessionConstraintsOperation
}

/**
 * Some professions may be found in a culture, but are not that common.
 */
export type Rarity =
  | "Rare"
  | "VeryRare"

export type ProfessionConstraint = {
  /**
   * The profession's identifier.
   */
  id: ProfessionIdentifier

  /**
   * Some profession variants are more common than others. There may be
   * cultures where some variants are not represented at all.
   */
  weighted_variants?: Weighted<ProfessionVariantReference>

  /**
   * Some professions may be found in a culture, but are not that
   * common.
   */
  rarity?: Rarity
}

/**
 * Some professions may be found in a culture, but are not that common.
 */
export type MundaneProfessionSubgroupConstraint =
  | "Profane"
  | "Fighter"
  | "Religious"

export type MagicalTraditionConstraint = {
  /**
   * The magical tradition's identifier.
   */
  id: MagicalTraditionIdentifier

  /**
   * Some professions are more common than others. There may be cultures
   * where some professions are not represented at all.
   */
  weighted_professions?: Weighted<ProfessionReference>

  /**
   * Some traditions may be found in a culture, but are not that common.
   */
  rarity?: Rarity
}

export type BlessedTraditionConstraint = {
  /**
   * The magical tradition's identifier.
   */
  id: BlessedTraditionIdentifier

  /**
   * Some professions are more common than others. There may be cultures
   * where some professions are not represented at all.
   */
  weighted_professions?: Weighted<ProfessionReference>

  /**
   * Some traditions may be found in a culture, but are not that common.
   */
  rarity?: Rarity
}

export type MundaneCommonProfessionConstraint =
  | { tag: "Profession"; profession: ProfessionConstraint }
  | { tag: "ProfessionSubgroup"; profession_subgroup: MundaneProfessionSubgroupConstraint }

export type MagicCommonProfessionConstraint =
  | { tag: "Tradition"; tradition: MagicalTraditionConstraint }
  | { tag: "MagicDilettante"; magic_dilettante: {} }
  | { tag: "Profession"; profession: ProfessionConstraint }

export type BlessedCommonProfessionConstraint =
  | { tag: "Tradition"; tradition: BlessedTraditionConstraint }

export type PlainCommonProfessions = CommonProfessionConstraints<ProfessionReference>

/**
 * Lists of professions by group.
 * @minProperties 1
 */
export type GroupedCommonProfessions = {
  mundane?: CommonProfessionConstraints<MundaneCommonProfessionConstraint>
  magic?: CommonProfessionConstraints<MagicCommonProfessionConstraint>
  blessed?: CommonProfessionConstraints<BlessedCommonProfessionConstraint>
}

/**
 * A list of professions that are typical for the culture, as well as
 * professions that are rarely practiced or encountered in the culture. The
 * list is either defined by group (as multiple lists) or plain (as a single
 * list).
 */
export type CommonProfessions =
  | { tag: "Plain"; plain: PlainCommonProfessions }
  | { tag: "Grouped"; grouped: GroupedCommonProfessions }

export type CommonnessRatedSkill = SkillReference

export type CulturalPackageItem = {
  /**
   * The skill's identifier.
   * @integer
   * @minimum 1
   */
  id: SkillIdentifier

  /**
   * The skill points for the respective skill you get for buying the cultural
   * package.
   * @integer
   * @minimum 1
   * @maximum 2
   */
  points: number
}

export type CultureTranslation = {
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
   */
  common_advantages?: NonEmptyString

  /**
   * The respective common disadvantages text from the source book.
   */
  common_disadvantages?: NonEmptyString

  /**
   * The respective uncommon advantages text from the source book.
   */
  uncommon_advantages?: NonEmptyString

  /**
   * The respective uncommon disadvantages text from the source book.
   */
  uncommon_disadvantages?: NonEmptyString

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

export type AreaKnowledgeExample = {
  /**
   * @minLength 1
   */
  area: string
}

/**
 * Structured description of common names.
 * @minProperties 1
 */
export type CommonNames = {
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
   */
  naming_rules?: NonEmptyString
}

export type NameGroup = {
  /**
   * The group label.
   */
  label: NonEmptyString

  /**
   * The binary sex if the group is only for a certain binary sex.
   */
  sex?: BinarySex

  /**
   * The names from the group.
   * @minItems 1
   */
  names: Name[]
}

export type Name = {
  name: NonEmptyString

  /**
   * Additional information about the name, appended in parenthesis.
   */
  note?: NonEmptyString
}

export const config: TypeConfig<Culture> = {
  name: "Culture",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Culture"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
