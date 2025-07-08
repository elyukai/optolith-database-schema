import {
  Array,
  Entity,
  Enum,
  EnumCase,
  GenIncludeIdentifier,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage.js"
import {
  AdvantageIdentifier,
  CurriculumIdentifier,
  DisadvantageIdentifier,
  ProfessionIdentifier,
  ProfessionPackageIdentifier,
  ProfessionVersionIdentifier,
} from "./_Identifier.js"
import { ProfessionPrerequisites } from "./_Prerequisite.js"
import { NestedLocaleMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Profession = Entity(import.meta.url, {
  name: "Profession",
  namePlural: "Professions",
  type: () =>
    Object({
      group: Required({
        comment: "The profession group.",
        type: IncludeIdentifier(ProfessionGroup),
      }),
      versions: Required({
        comment: `A list of professions representing the same profession but with (slightly) different stats. For example, there may be a profession in a regional sourcebook or in the core rules and a profession in an extension rulebook like Magic of Aventuria, where the profession is basically called the same and almost has the same values, but the version from Magic of Aventuria features a spell style special ability that does not exist in the core rules or regional sourcebook.

The profession representation may feature different values for different explicitly mentioned experience levels. In most cases, there is only one stats package, which targets the experience level *Experienced*.`,
        type: Array(ProfessionVersionIdentifier, { minItems: 1 }),
        isTransient: true,
      }),
    }),
  displayName: {},
})

const ProfessionGroup = Enum(import.meta.url, {
  name: "ProfessionGroup",
  values: () => ({
    Mundane: EnumCase({ type: IncludeIdentifier(MundaneProfessionGroup) }),
    Magical: EnumCase({ type: IncludeIdentifier(MagicalProfessionGroup) }),
    Blessed: EnumCase({ type: null }),
  }),
})

export const MundaneProfessionGroup = Enum(import.meta.url, {
  name: "MundaneProfessionGroup",
  values: () => ({
    Profane: EnumCase({ type: null }),
    Fighter: EnumCase({ type: null }),
    Religious: EnumCase({ type: null }),
  }),
})

const MagicalProfessionGroup = TypeAlias(import.meta.url, {
  name: "MagicalProfessionGroup",
  type: () =>
    Object({
      curriculum: Optional({
        comment: "The curriculum/academy associated with this magical profession, if any.",
        type: CurriculumIdentifier,
      }),
    }),
})

export const ProfessionVersion = Entity(import.meta.url, {
  name: "ProfessionVersion",
  namePlural: "ProfessionVersions",
  type: () =>
    Object({
      profession: Required({
        comment: "The associated profession.",
        type: ProfessionIdentifier,
      }),
      prerequisites: Optional({
        comment:
          "Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites.",
        type: IncludeIdentifier(ProfessionPrerequisites),
      }),
      package: Required({
        comment:
          "A list of available race variants where one has to be selected. If no variants are to be selected, a single variant with no name has to be provided which will be used as the missing values for the base race.",
        type: Array(ProfessionPackageIdentifier, { minItems: 1 }),
        isTransient: true,
      }),
      suggested_advantages: Optional({
        comment: "A list of typical advantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier]),
          { minItems: 1 }
        ),
      }),
      suggested_disadvantages: Optional({
        comment: "A list of typical disadvantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier]),
          { minItems: 1 }
        ),
      }),
      unsuitable_advantages: Optional({
        comment:
          "A list of advantages that do not fit well with this profession; to be checked with the GM before taking any of them.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier]),
          { minItems: 1 }
        ),
      }),
      unsuitable_disadvantages: Optional({
        comment:
          "A list of disadvantages that do not fit well with this profession; to be checked with the GM before taking any of them.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier]),
          { minItems: 1 }
        ),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "ProfessionVersionTranslation",
        Object({
          name: Required({
            comment: "The basic profession’s name.",
            type: String({ minLength: 1 }),
          }),
          specification: Required({
            comment:
              "A name addition of the profession. This will contain texts like name of the academy or the witch circle. It is enclosed in parenthesis, but the database entry must not contain parenthesis.",
            type: IncludeIdentifier(ProfessionName),
          }),
          suggested_advantages: Optional({
            comment: "A list of typical advantages.",
            type: String({ minLength: 1 }),
          }),
          suggested_disadvantages: Optional({
            comment: "A list of typical disadvantages.",
            type: String({ minLength: 1 }),
          }),
          unsuitable_advantages: Optional({
            comment:
              "A list of advantages that do not fit well with this profession; to be checked with the GM before taking any of them.",
            type: String({ minLength: 1 }),
          }),
          unsuitable_disadvantages: Optional({
            comment:
              "A list of disadvantages that do not fit well with this profession; to be checked with the GM before taking any of them.",
            type: String({ minLength: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

export const ProfessionPackage = Entity(import.meta.url, {
  name: "ProfessionPackage",
  namePlural: "ProfessionPackages",
  type: () =>
    Object({
      profession_version: Required({
        comment: "The associated profession version.",
        type: ProfessionVersionIdentifier,
      }),
      experience_level: Optional({
        comment:
          "The associated experience level. By default, profession packages are associated with the experience level *Experienced*.",
        type: ProfessionVersionIdentifier,
      }),
      ap_value: Required({
        comment: "What does the professional package cost in adventure points?",
        type: Integer({ minimum: 0 }),
      }),
      options: Optional({
        comment:
          "In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package.",
        type: IncludeIdentifier(ProfessionPackageOptions),
      }),
      special_abilities: Optional({
        comment: "Any special abilities the profession receives from the package.",
        type: Array(ProfessionSpecialAbility, { minItems: 1 }),
      }),
      combat_techniques: Optional({
        comment:
          "Provides ratings for the combat techniques that the hero receives from the package.",
        type: Array(CombatTechniqueRating, { minItems: 1 }),
      }),
      skills: Optional({
        comment: "The skill ratings the package grants to the hero.",
        type: Array(SkillRating, { minItems: 1 }),
      }),
      spells: Optional({
        comment:
          "The skill ratings a magical profession receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such.",
        type: Array(SpellRating, { minItems: 1 }),
      }),
      liturgical_chants: Optional({
        comment:
          "Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated.",
        type: Array(LiturgicalChantRating, { minItems: 1 }),
      }),
      variants: Optional({
        comment:
          "Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required.",
        type: IncludeIdentifier(ProfessionVariants),
        isTransient: true,
      }),
    }),
  displayName: {},
})

/**
 * Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required.
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

export const ProfessionVariant = Entity(import.meta.url, {
  name: "ProfessionVariant",
  namePlural: "ProfessionVariants",
  type: () =>
    Object({
      profession_package: Required({
        comment: "The associated profession package.",
        type: ProfessionPackageIdentifier,
      }),
      ap_value: Optional({
        comment: "The AP value you have to pay for the package variant.",
        type: IncludeIdentifier(ProfessionPrerequisites),
      }),
      prerequisites: Optional({
        comment:
          "Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites.",
        type: IncludeIdentifier(ProfessionPrerequisites),
      }),
      options: Optional({
        comment:
          "In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package. The variant may override or remove those options.",
        type: IncludeIdentifier(ProfessionVariantPackageOptions),
      }),
      special_abilities: Optional({
        comment: "Any special abilities the profession receives from the package variant.",
        type: Array(ProfessionVariantSpecialAbility, { minItems: 1 }),
      }),
      combat_techniques: Optional({
        comment:
          "Provides ratings for the combat techniques that the hero receives from the package variant.",
        type: Array(CombatTechniqueRating, { minItems: 1 }),
      }),
      skills: Optional({
        comment: "The skill ratings the package variant grants to the hero.",
        type: Array(SkillRating, { minItems: 1 }),
      }),
      spells: Optional({
        comment:
          "The skill ratings a magical profession variant receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such.",
        type: Array(SpellRating, { minItems: 1 }),
      }),
      liturgical_chants: Optional({
        comment:
          "Clerical profession variants receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated.",
        type: Array(LiturgicalChantRating, { minItems: 1 }),
      }),
      translations: NestedLocaleMap(
        Required,
        "ProfessionVariantTranslation",
        Object({
          name: Required({
            comment: "The profession variant’s name.",
            type: String({ minLength: 1 }),
          }),
          full_text: Optional({
            comment: "A text that replaces the generated text for the profession variant.",
            type: String({ minLength: 1 }),
          }),
          concluding_text: Optional({
            comment: `A text that is appended to the generated text for the profession variant.

Has no effect when \`full_text\` is set.`,
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})

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
   * Received select options. Order is important. Typically, you only need the first array index, though.
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
   * if set to `false`, if the selection is granted by the basic package, it is removed.
   */
  active?: false

  /**
   * The level of the received special ability.
   * @integer
   * @minimum 1
   */
  level?: number

  /**
   * Received select options. Order is important. Typically, you only need the first array index, though.
   * @minItems 1
   */
  options?: RequirableSelectOptionIdentifier[]
}

export type VariantSpecialAbilitySelection = {
  /**
   * if set to `false`, if the selection is granted by the basic package, it is removed.
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
   * The rating bonus provided for the combat technique. If used in a profession variant, it can also be used to lower the bonus of the base profession.
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
   * The rating bonus provided for the skill. If used in a profession variant, it can also be used to lower the bonus of the base profession
   * @integer
   * @minimum -8
   * @maximum 8
   */
  rating: number
}

export type SpellRating = {
  /**
   * The identifier(s) of the spell(s) to choose from to provide the rating for. If multiple spells are provided, they must all have the same improvement cost.
   * @minItems 1
   */
  id: ProfessionSpellIdentifier[]

  /**
   * The rating bonus provided for the (selected) spell. If used in a profession variant, it can also be used to lower the bonus of the base profession.
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
   * If the spell is not part of the magical tradition required by the package, this references the magical tradition it is part of. It can also be used to define the target magical tradition of a spell if multiple magical traditions are required and the spell is available to multiple of them.
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
   * The identifier(s) of the liturgical chant(s) to choose from to provide the rating for. If multiple liturgical chants are provided, they must all have the same improvement cost.
   * @minItems 1
   */
  id: LiturgyIdentifier[]

  /**
   * The rating bonus provided for the selected liturgical chant. If used in a profession variant, it can also be used to lower the bonus of the base profession.
   * @integer
   * @minimum -10
   * @maximum 10
   */
  rating: number
}

/**
 * In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package.
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
 * In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package. The variant may override or remove those options.
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
 * Select an application from a skill or from one of a list of skills where you get a skill specialization for. You can also specify a skill groups from which you can choose a skill.
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
   * Specify the number of combat techniques that can be selected so that they get increased to a specific CtR. There can be multiple selections with different CtRs.
   * @minItems 1
   */
  fixed: RatingForCombatTechniquesNumber[]

  /**
   * Define if after the fixed selections the remaining unselected combat techniques will receive a certain rating bonus as well.
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
