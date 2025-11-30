import {
  Array,
  Boolean,
  ChildEntities,
  Entity,
  Enum,
  EnumCase,
  GenEnum,
  GenIncludeIdentifier,
  IncludeIdentifier,
  Integer,
  ObjectType,
  Optional,
  Param,
  Required,
  String,
  TypeAlias,
  TypeArgument,
} from "tsondb/schema/def"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage.js"
import {
  AdvantageIdentifier,
  CantripIdentifier,
  CurriculumIdentifier,
  DisadvantageIdentifier,
  ExperienceLevelIdentifier,
  GeneralSelectOptionIdentifier,
  MagicalTraditionIdentifier,
  ProfessionIdentifier,
  ProfessionPackageIdentifier,
  ProfessionVersionIdentifier,
  SkillGroupIdentifier,
  SkillIdentifier,
} from "./_Identifier.js"
import {
  CombatTechniqueIdentifier,
  LiturgyIdentifier,
  MagicalActionIdentifier,
  RequirableSelectOptionIdentifier,
  SpecialAbilityIdentifier,
  SpellworkIdentifier,
} from "./_IdentifierGroup.js"
import { ProfessionPrerequisites } from "./_Prerequisite.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Profession = Entity(import.meta.url, {
  name: "Profession",
  namePlural: "Professions",
  type: () =>
    ObjectType({
      group: Required({
        comment: "The profession group.",
        type: IncludeIdentifier(ProfessionGroup),
      }),
      versions: Required({
        comment: `A list of professions representing the same profession but with (slightly) different stats. For example, there may be a profession in a regional sourcebook or in the core rules and a profession in an extension rulebook like Magic of Aventuria, where the profession is basically called the same and almost has the same values, but the version from Magic of Aventuria features a spell style special ability that does not exist in the core rules or regional sourcebook.

      The profession representation may feature different values for different explicitly mentioned experience levels. In most cases, there is only one stats package, which targets the experience level *Experienced*.`,
        type: ChildEntities(ProfessionVersion),
      }),
    }),
  displayName: null,
  displayNameCustomizer: ({
    instanceId,
    getDisplayNameForInstanceId,
    getChildInstancesForInstanceId,
  }) => {
    const [firstProfessionVersion, ...otherProfessionVersions] = getChildInstancesForInstanceId(
      Profession.name,
      instanceId,
      ProfessionVersion.name,
    )

    if (!firstProfessionVersion) {
      return { name: "(Profession with no version)" }
    }

    const displayName = getDisplayNameForInstanceId(firstProfessionVersion.id) ?? {
      name: firstProfessionVersion.id,
    }

    if (otherProfessionVersions.length === 0) {
      return displayName
    }

    return {
      ...displayName,
      name: `${displayName.name} (+${otherProfessionVersions.length.toString()} version${
        otherProfessionVersions.length > 1 ? "s" : ""
      })`,
    }
  },
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
    ObjectType({
      curriculum: Optional({
        comment: "The curriculum/academy associated with this magical profession, if any.",
        type: CurriculumIdentifier(),
      }),
    }),
})

export const ProfessionVersion = Entity(import.meta.url, {
  name: "ProfessionVersion",
  namePlural: "ProfessionVersions",
  type: () =>
    ObjectType({
      profession: Required({
        comment: "The associated profession.",
        type: ProfessionIdentifier(),
      }),
      prerequisites: Optional({
        comment:
          "Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites.",
        type: IncludeIdentifier(ProfessionPrerequisites),
      }),
      package: Required({
        comment:
          "A list of available race variants where one has to be selected. If no variants are to be selected, a single variant with no name has to be provided which will be used as the missing values for the base race.",
        type: ChildEntities(ProfessionPackage),
      }),
      suggested_advantages: Optional({
        comment: "A list of typical advantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier()]),
          { minItems: 1 },
        ),
      }),
      suggested_disadvantages: Optional({
        comment: "A list of typical disadvantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier()]),
          { minItems: 1 },
        ),
      }),
      unsuitable_advantages: Optional({
        comment:
          "A list of advantages that do not fit well with this profession; to be checked with the GM before taking any of them.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier()]),
          { minItems: 1 },
        ),
      }),
      unsuitable_disadvantages: Optional({
        comment:
          "A list of disadvantages that do not fit well with this profession; to be checked with the GM before taking any of them.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier()]),
          { minItems: 1 },
        ),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "ProfessionVersion",
        ObjectType({
          name: Required({
            comment: "The basic profession’s name.",
            type: IncludeIdentifier(ProfessionName),
          }),
          specification: Optional({
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
        }),
      ),
    }),
  parentReferenceKey: "profession",
  displayName: {
    pathToLocaleMap: "translations",
    pathInLocaleMap: "name.default",
  },
  displayNameCustomizer: ({ instance, instanceId, locales }) => {
    const translations = Object.entries(instance.translations)
    for (const locale of locales) {
      const translation = translations.find(([key]) => key === locale)
      if (translation) {
        const [, value] = translation
        return {
          name:
            value.name.default + (value.specification ? ` (${value.specification.default})` : ""),
          localeId: locale,
        }
      }
    }

    return {
      name: instanceId,
    }
  },
})

export const ProfessionPackage = Entity(import.meta.url, {
  name: "ProfessionPackage",
  namePlural: "ProfessionPackages",
  type: () =>
    ObjectType({
      profession_version: Required({
        comment: "The associated profession version.",
        type: ProfessionVersionIdentifier(),
      }),
      experience_level: Optional({
        comment:
          "The associated experience level. By default, profession packages are associated with the experience level *Experienced*.",
        type: ExperienceLevelIdentifier(),
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
        type: Array(IncludeIdentifier(ProfessionSpecialAbility), { minItems: 1 }),
      }),
      combat_techniques: Optional({
        comment:
          "Provides ratings for the combat techniques that the hero receives from the package.",
        type: Array(IncludeIdentifier(CombatTechniqueRating), { minItems: 1 }),
      }),
      skills: Optional({
        comment: "The skill ratings the package grants to the hero.",
        type: Array(IncludeIdentifier(SkillRating), { minItems: 1 }),
      }),
      spells: Optional({
        comment:
          "The skill ratings a magical profession receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such.",
        type: Array(IncludeIdentifier(MagicalSkillRating), { minItems: 1 }),
      }),
      liturgical_chants: Optional({
        comment:
          "Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated.",
        type: Array(IncludeIdentifier(LiturgicalChantRating), { minItems: 1 }),
      }),
      is_variant_selection_required: Required({
        comment: "If the selection of a profession variant is required.",
        type: Boolean(),
      }),
      variants: Optional({
        comment:
          "Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required.",
        type: ChildEntities(ProfessionVariant),
      }),
    }),
  parentReferenceKey: "profession_version",
  displayName: null,
  displayNameCustomizer: ({ instance, getDisplayNameForInstanceId }) => {
    const baseName = getDisplayNameForInstanceId(instance.profession_version)

    if (!baseName) {
      return { name: "(Profession Package with no Profession Version)" }
    }

    if (instance.experience_level) {
      const experienceLevelName = getDisplayNameForInstanceId(instance.profession_version)
      return {
        ...baseName,
        name: `${baseName.name} [${experienceLevelName?.name ?? instance.experience_level}]`,
      }
    }

    return baseName
  },
})

export const ProfessionVariant = Entity(import.meta.url, {
  name: "ProfessionVariant",
  namePlural: "ProfessionVariants",
  type: () =>
    ObjectType({
      profession_package: Required({
        comment: "The associated profession package.",
        type: ProfessionPackageIdentifier(),
      }),
      ap_value: Optional({
        comment:
          "The AP value you have to pay for the package variant. Some variants may reduce the AP value of the base package.",
        type: Integer(),
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
        type: Array(IncludeIdentifier(ProfessionVariantSpecialAbility), { minItems: 1 }),
      }),
      combat_techniques: Optional({
        comment:
          "Provides ratings for the combat techniques that the hero receives from the package variant.",
        type: Array(IncludeIdentifier(CombatTechniqueRating), { minItems: 1 }),
      }),
      skills: Optional({
        comment: "The skill ratings the package variant grants to the hero.",
        type: Array(IncludeIdentifier(SkillRating), { minItems: 1 }),
      }),
      spells: Optional({
        comment:
          "The skill ratings a magical profession variant receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such.",
        type: Array(IncludeIdentifier(MagicalSkillRating), { minItems: 1 }),
      }),
      liturgical_chants: Optional({
        comment:
          "Clerical profession variants receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated.",
        type: Array(IncludeIdentifier(LiturgicalChantRating), { minItems: 1 }),
      }),
      translations: NestedTranslationMap(
        Required,
        "ProfessionVariant",
        ObjectType({
          name: Required({
            comment: "The profession variant’s name.",
            type: IncludeIdentifier(ProfessionName),
          }),
          full_text: Optional({
            comment: "A text that replaces the generated text for the profession variant.",
            type: String({ minLength: 1 }),
          }),
          concluding_text: Optional({
            comment: `A text that is appended to the generated text for the profession variant.`,
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  parentReferenceKey: "profession_package",
  displayName: {
    pathToLocaleMap: "translations",
    pathInLocaleMap: "name.default",
  },
})

const VariantSpecialAbilityAction = Enum(import.meta.url, {
  name: "VariantSpecialAbilityAction",
  values: () => ({
    Remove: EnumCase({ type: null }),
    Override: EnumCase({ type: null }),
  }),
})

const ProfessionSpecialAbility = Enum(import.meta.url, {
  name: "ProfessionSpecialAbility",
  values: () => ({
    Constant: EnumCase({ type: IncludeIdentifier(ConstantProfessionSpecialAbility) }),
    Selection: EnumCase({ type: IncludeIdentifier(ProfessionSpecialAbilitySelection) }),
  }),
})

const ConstantProfessionSpecialAbility = TypeAlias(import.meta.url, {
  name: "ConstantProfessionSpecialAbility",
  type: () =>
    ObjectType({
      id: Required({
        comment: "The identifier of the special ability to grant.",
        type: IncludeIdentifier(SpecialAbilityIdentifier),
      }),
      level: Optional({
        comment:
          "The level of the received special ability. If not specified and the special ability has levels, level 1 is used automatically.",
        type: Integer({ minimum: 1 }),
      }),
      options: Optional({
        comment:
          "Received select options. Order is important. Typically, you only need the first array index, though.",
        type: Array(IncludeIdentifier(RequirableSelectOptionIdentifier), { minItems: 1 }),
      }),
    }),
})

const ProfessionSpecialAbilitySelection = TypeAlias(import.meta.url, {
  name: "ProfessionSpecialAbilitySelection",
  type: () =>
    ObjectType({
      options: Required({
        comment: `The list of special abilities to choose from. Must contain at least two entries.`,
        type: Array(IncludeIdentifier(ConstantProfessionSpecialAbility), { minItems: 2 }),
      }),
    }),
})

const ProfessionVariantSpecialAbility = TypeAlias(import.meta.url, {
  name: "ProfessionVariantSpecialAbility",
  type: () =>
    ObjectType({
      action: Required({
        comment:
          "If the selection is added to the base profession or if it removes a selection from the base profession with the same values.",
        type: IncludeIdentifier(VariantSpecialAbilityAction),
      }),
      value: Required({
        comment: "The special ability to add or remove.",
        type: IncludeIdentifier(ProfessionSpecialAbility),
      }),
    }),
})

const CombatTechniqueRating = TypeAlias(import.meta.url, {
  name: "CombatTechniqueRating",
  type: () =>
    ObjectType({
      id: Required({
        comment: "The identifier of the combat technique to provide the rating for.",
        type: IncludeIdentifier(CombatTechniqueIdentifier),
      }),
      rating_modifier: Required({
        comment:
          "The rating bonus provided for the combat technique. If used in a profession variant, it can also be used to lower the bonus of the base profession.\n\n**Note:** This is a rating *bonus*, so it will be *added* to the default value of 6.",
        type: Integer(),
      }),
    }),
})

export const SkillRating = TypeAlias(import.meta.url, {
  name: "SkillRating",
  type: () =>
    ObjectType({
      id: Required({
        comment: "The identifier of the skill to provide the rating for.",
        type: SkillIdentifier(),
      }),
      rating_modifier: Required({
        comment:
          "The rating bonus provided for the skill. If used in a profession variant, it can also be used to lower the bonus of the base profession",
        type: Integer(),
      }),
    }),
})

const MagicalSkillRating = TypeAlias(import.meta.url, {
  name: "MagicalSkillRating",
  type: () =>
    ObjectType({
      id: Required({
        comment:
          "The identifier(s) of the spell(s) to choose from to provide the rating for. If multiple spells are provided, they must all have the same improvement cost.",
        type: Array(IncludeIdentifier(ProfessionMagicalSkillIdentifier), { minItems: 1 }),
      }),
      rating_modifier: Required({
        comment:
          "The rating bonus provided for the (selected) magical skill. If used in a profession variant, it can also be used to lower the bonus of the base profession.\n\n**Note:** This is a rating *bonus*, so it will be *added* to the default value of 6.",
        type: Integer(),
      }),
    }),
})

const ProfessionMagicalSkillIdentifier = Enum(import.meta.url, {
  name: "ProfessionMagicalSkillIdentifier",
  values: () => ({
    Spellwork: EnumCase({ type: IncludeIdentifier(ProfessionSpellworkIdentifier) }),
    MagicalAction: EnumCase({ type: IncludeIdentifier(ProfessionMagicalActionIdentifier) }),
  }),
})

const ProfessionSpellworkIdentifier = TypeAlias(import.meta.url, {
  name: "ProfessionSpellworkIdentifier",
  type: () =>
    ObjectType({
      id: Required({
        comment: "The identifier of the spell to provide the rating for.",
        type: IncludeIdentifier(SpellworkIdentifier),
      }),
      tradition: Optional({
        comment:
          "If the spell is not part of the magical tradition required by the package, this references the magical tradition it is part of. It can also be used to define the target magical tradition of a spell if multiple magical traditions are required and the spell is available to multiple of them.",
        type: MagicalTraditionIdentifier(),
      }),
    }),
})

const ProfessionMagicalActionIdentifier = TypeAlias(import.meta.url, {
  name: "ProfessionMagicalActionIdentifier",
  type: () =>
    ObjectType({
      id: Required({
        comment: "The identifier of the magical action to provide the rating for.",
        type: IncludeIdentifier(MagicalActionIdentifier),
      }),
    }),
})

const LiturgicalChantRating = TypeAlias(import.meta.url, {
  name: "LiturgicalChantRating",
  type: () =>
    ObjectType({
      id: Required({
        comment:
          "The identifier(s) of the liturgical chant(s) to choose from to provide the rating for. If multiple liturgical chants are provided, they must all have the same improvement cost.",
        type: Array(IncludeIdentifier(LiturgyIdentifier), { minItems: 1 }),
      }),
      rating_modifier: Required({
        comment:
          "The rating bonus provided for the selected liturgical chant. If used in a profession variant, it can also be used to lower the bonus of the base profession.\n\n**Note:** This is a rating *bonus*, so it will be *added* to the default value of 6.",
        type: Integer(),
      }),
    }),
})

const ProfessionPackageOptions = TypeAlias(import.meta.url, {
  name: "ProfessionPackageOptions",
  comment:
    "In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package.",
  type: () =>
    ObjectType(
      {
        skill_specialization: Optional({
          type: IncludeIdentifier(SkillSpecializationOptions),
        }),
        languages_scripts: Optional({
          type: IncludeIdentifier(LanguagesScriptsOptions),
        }),
        combat_techniques: Optional({
          type: IncludeIdentifier(CombatTechniquesOptions),
        }),
        cantrips: Optional({
          type: IncludeIdentifier(CantripsOptions),
        }),
        curses: Optional({
          type: IncludeIdentifier(CursesOptions),
        }),
        terrain_knowledge: Optional({
          type: IncludeIdentifier(TerrainKnowledgeOptions),
        }),
        skills: Optional({
          type: IncludeIdentifier(SkillsOptions),
        }),
      },
      { minProperties: 1 },
    ),
})

const ProfessionVariantPackageOptions = TypeAlias(import.meta.url, {
  name: "ProfessionVariantPackageOptions",
  comment:
    "In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package. The variant may override or remove those options.",
  type: () =>
    ObjectType(
      {
        skill_specialization: Optional({
          type: GenIncludeIdentifier(VariantOptionAction, [
            IncludeIdentifier(SkillSpecializationOptions),
          ]),
        }),
        languages_scripts: Optional({
          type: GenIncludeIdentifier(VariantOptionAction, [
            IncludeIdentifier(LanguagesScriptsOptions),
          ]),
        }),
        combat_techniques: Optional({
          type: GenIncludeIdentifier(VariantOptionAction, [
            IncludeIdentifier(CombatTechniquesOptions),
          ]),
        }),
        cantrips: Optional({
          type: GenIncludeIdentifier(VariantOptionAction, [IncludeIdentifier(CantripsOptions)]),
        }),
        curses: Optional({
          type: GenIncludeIdentifier(VariantOptionAction, [IncludeIdentifier(CursesOptions)]),
        }),
        terrain_knowledge: Optional({
          type: GenIncludeIdentifier(VariantOptionAction, [
            IncludeIdentifier(TerrainKnowledgeOptions),
          ]),
        }),
        skills: Optional({
          type: GenIncludeIdentifier(VariantOptionAction, [IncludeIdentifier(SkillsOptions)]),
        }),
      },
      { minProperties: 1 },
    ),
})

const VariantOptionAction = GenEnum(import.meta.url, {
  name: "VariantOptionAction",
  parameters: [Param("T")],
  values: T => ({
    Remove: EnumCase({ type: null }),
    Override: EnumCase({ type: TypeArgument(T) }),
  }),
})

const SkillSpecializationOptions = Enum(import.meta.url, {
  name: "SkillSpecializationOptions",
  comment: `Select an application from a skill or from one of a list of skills where you get a skill specialization for. You can also specify a skill group from which you can choose a skill.`,
  values: () => ({
    Specific: EnumCase({ type: IncludeIdentifier(SpecificSkillSpecializationOptions) }),
    Group: EnumCase({ type: SkillGroupIdentifier() }),
  }),
})

const SpecificSkillSpecializationOptions = TypeAlias(import.meta.url, {
  name: "SpecificSkillSpecializationOptions",
  comment: `Select an application from a skill or from one of a list of skills where you get a skill specialization for.`,
  type: () =>
    ObjectType({
      options: Required({
        comment: `Possible skill(s) to get a skill specialization for.`,
        type: Array(SkillIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

const LanguagesScriptsOptions = TypeAlias(import.meta.url, {
  name: "LanguagesScriptsOptions",
  comment: `Buy languages and scripts for a specific amount of AP.`,
  type: () =>
    ObjectType({
      ap_value: Required({
        comment: "The AP value you can buy languages and scripts for.",
        type: Integer({ minimum: 2 }),
      }),
    }),
})

const CombatTechniquesOptions = TypeAlias(import.meta.url, {
  name: "CombatTechniquesOptions",
  comment: `Select one or more combat techniques you get a CtR bonus for.`,
  type: () =>
    ObjectType({
      fixed: Required({
        comment: `Specify the number of combat techniques that can be selected so that they get increased to a specific CtR. There can be multiple selections with different CtRs.`,
        type: Array(IncludeIdentifier(RatingForCombatTechniquesNumber), { minItems: 1 }),
      }),
      rest_rating_modifier: Optional({
        comment: `Define if after the fixed selections the remaining unselected combat techniques will receive a certain rating bonus as well.`,
        type: Integer({ minimum: 1 }),
      }),
      options: Required({
        comment: "The list of combat techniques to choose from.",
        type: Array(IncludeIdentifier(CombatTechniqueIdentifier), { minItems: 2 }),
      }),
    }),
})

const RatingForCombatTechniquesNumber = TypeAlias(import.meta.url, {
  name: "RatingForCombatTechniquesNumber",
  type: () =>
    ObjectType({
      number: Required({
        comment: "The number of selectable combat techniques.",
        type: Integer({ minimum: 1 }),
      }),
      rating_modifier: Required({
        comment: `The rating bonus provided for the selected combat technique(s).

**Note:** This is a rating *bonus*, so it will be *added* to the default value of 6.`,
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const CantripsOptions = TypeAlias(import.meta.url, {
  name: "CantripsOptions",
  comment: `Select one or more cantrips you receive.`,
  type: () =>
    ObjectType({
      number: Required({
        comment: "The number of selectable cantrips.",
        type: Integer({ minimum: 1 }),
      }),
      options: Required({
        comment: "The list of cantrips to choose from.",
        type: Array(CantripIdentifier(), { minItems: 2 }),
      }),
    }),
})

const CursesOptions = TypeAlias(import.meta.url, {
  name: "CursesOptions",
  comment: `Buy curses for a specific amount of AP.`,
  type: () =>
    ObjectType({
      ap_value: Required({
        comment: "The AP value you can buy curses for.",
        type: Integer({ minimum: 2 }),
      }),
    }),
})

const TerrainKnowledgeOptions = TypeAlias(import.meta.url, {
  name: "TerrainKnowledgeOptions",
  comment: `Select one of a list of possible terrain knowledges`,
  type: () =>
    ObjectType({
      options: Required({
        comment: "The list of possible terrain knowledges.",
        type: Array(GeneralSelectOptionIdentifier(), { minItems: 2 }),
      }),
    }),
})

const SkillsOptions = TypeAlias(import.meta.url, {
  name: "SkillsOptions",
  comment: `Buy skills for a specific amount of AP.`,
  type: () =>
    ObjectType({
      group: Optional({
        comment: "If specified, you may only choose from skills of the specified group.",
        type: SkillGroupIdentifier(),
      }),
      ap_value: Required({
        comment: "The AP value you can buy skills for.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const ProfessionName = TypeAlias(import.meta.url, {
  name: "ProfessionName",
  comment:
    "The name of the profession that may have sex-specific names. Useful if the term in generell is different (i.e. actor/actress) or if the language uses gendered nouns. The default name is also used in case neither the male nor female name strictly applies.",
  type: () =>
    ObjectType({
      default: Required({
        comment:
          "The name from the source publication. This is also used if a character has no specified gender or is neither male nor female.",
        type: String({ minLength: 1 }),
      }),
      male: Optional({
        comment: "The male name, if different from the default name.",
        type: String({ minLength: 1 }),
      }),
      female: Optional({
        comment: "The female name, if different from the default name.",
        type: String({ minLength: 1 }),
      }),
    }),
})
