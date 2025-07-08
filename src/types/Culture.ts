import {
  Array,
  Boolean,
  Entity,
  Enum,
  EnumCase,
  GenericArgumentIdentifier,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Param,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { CommonnessRatedAdvantageDisadvantage } from "./_CommonnessRatedAdvantageDisadvantage.js"
import {
  AdvantageIdentifier,
  BlessedTraditionIdentifier,
  DisadvantageIdentifier,
  LanguageIdentifier,
  MagicalTraditionIdentifier,
  ProfessionIdentifier,
  ProfessionVariantIdentifier,
  ScriptIdentifier,
  SkillIdentifier,
  SocialStatusIdentifier,
} from "./_Identifier.js"
import { BinarySex } from "./_Sex.js"
import { NestedLocaleMap } from "./Locale.js"
import { MundaneProfessionGroup } from "./Profession.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Culture = Entity(import.meta.url, {
  name: "Culture",
  namePlural: "Cultures",
  type: () =>
    Object({
      language: Required({
        comment: "A list of native languages (usually it is only one).",
        type: Array(LanguageIdentifier, { minItems: 1, uniqueItems: true }),
      }),
      script: Optional({
        comment:
          "A list of native scripts (usually it is only one). If the culture does not use any script, leave this array empty.",
        type: Array(ScriptIdentifier, { minItems: 1, uniqueItems: true }),
      }),
      area_knowledge: Required({
        comment: "If the area knowledge has a fixed value or can be adjusted.",
        type: IncludeIdentifier(AreaKnowledge),
      }),
      social_status: Required({
        comment: "A list of possible social status in the respective culture.",
        type: Array(SocialStatusIdentifier, { minItems: 1, uniqueItems: true }),
      }),
      common_professions: Required({
        comment:
          "A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).",
        type: IncludeIdentifier(CommonProfessions),
      }),
      common_advantages: Optional({
        comment: "A list of common advantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier]),
          { minItems: 1 }
        ),
      }),
      common_disadvantages: Optional({
        comment: "A list of common disadvantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier]),
          { minItems: 1 }
        ),
      }),
      uncommon_advantages: Optional({
        comment: "A list of uncommon advantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier]),
          { minItems: 1 }
        ),
      }),
      uncommon_disadvantages: Optional({
        comment: "A list of uncommon disadvantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier]),
          { minItems: 1 }
        ),
      }),
      common_skills: Required({
        comment: "A list of common skills.",
        type: Array(IncludeIdentifier(CommonnessRatedSkill), { minItems: 1 }),
      }),
      uncommon_skills: Optional({
        comment: "A list of uncommon skills.",
        type: Array(IncludeIdentifier(CommonnessRatedSkill), { minItems: 1 }),
      }),
      cultural_package: Required({
        comment: "The skill points you get for buying the culture package.",
        type: Array(IncludeIdentifier(CulturalPackageItem), { minItems: 1 }),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "CultureTranslation",
        Object({
          name: Required({
            comment: "The race’s name.",
            type: String({ minLength: 1 }),
          }),
          area_knowledge: Required({
            comment: "The description of the area knowledge.",
            type: IncludeIdentifier(AreaKnowledgeTranslation),
          }),
          common_advantages: Optional({
            comment: "The respective common advantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          common_disadvantages: Optional({
            comment: "The respective common disadvantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          uncommon_advantages: Optional({
            comment: "The respective uncommon advantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          uncommon_disadvantages: Optional({
            comment: "The respective uncommon disadvantages text from the source book.",
            type: String({ minLength: 1 }),
          }),
          common_names: Required({
            comment: "Structured description of common names.",
            type: IncludeIdentifier(CommonNames),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const AreaKnowledge = TypeAlias(import.meta.url, {
  name: "AreaKnowledge",
  comment: "If the area knowledge has a fixed value or can be adjusted.",
  type: () =>
    Object({
      is_fixed: Required({
        comment: "`true` if the area knowledge has a fixed value, `false` if it can be adjusted.",
        type: Boolean(),
      }),
    }),
})

const CommonnessWeight = Enum(import.meta.url, {
  name: "CommonnessWeight",
  comment:
    "The “weight” difference compared to other professions or profession variants. Some professions or profession variants are simply more common (`Mostly`), but sometimes only specific elements are used (`Only`).",
  values: () => ({
    Mostly: EnumCase({ type: null }),
    Only: EnumCase({ type: null }),
  }),
})

const Weighted = GenTypeAlias(import.meta.url, {
  name: "Weighted",
  comment:
    "Some professions or profession variants are more common than others. There may be cultures where some professions or profession variants are not represented at all.",
  parameters: [Param("ProfessionOrVariant")],
  type: ProfessionOrVariant =>
    Object({
      elements: Required({
        comment: "The list of more common professions or profession variants.",
        type: Array(GenericArgumentIdentifier(ProfessionOrVariant), { minItems: 1 }),
      }),
      weight: Required({
        comment: "The list of more common professions or profession variants.",
        type: IncludeIdentifier(CommonnessWeight),
      }),
    }),
})

const CommonProfessionConstraintsOperation = Enum(import.meta.url, {
  name: "CommonProfessionConstraintsOperation",
  comment:
    "This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints or only the professions are kept that are different from the constraints.",
  values: () => ({
    Intersection: EnumCase({ type: null }),
    Difference: EnumCase({ type: null }),
  }),
})

const CommonProfessionConstraints = GenTypeAlias(import.meta.url, {
  name: "CommonProfessionConstraints",
  comment:
    "A list of professions. The filter specifies how the list is applied to all mundane professions.",
  parameters: [Param("Constraint")],
  type: Constraint =>
    Object({
      constraints: Required({
        comment: "The list of constraints.",
        type: Array(GenericArgumentIdentifier(Constraint), { minItems: 1 }),
      }),
      operation: Required({
        comment:
          "This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints or only the professions are kept that are different from the constraints.",
        type: IncludeIdentifier(CommonProfessionConstraintsOperation),
      }),
    }),
})

const Rarity = Enum(import.meta.url, {
  name: "Rarity",
  comment: "Some professions may be found in a culture, but are not that common.",
  values: () => ({
    Rare: EnumCase({ type: null }),
    VeryRare: EnumCase({ type: null }),
  }),
})

const ProfessionConstraint = TypeAlias(import.meta.url, {
  name: "ProfessionConstraint",
  type: () =>
    Object({
      id: Required({
        comment: "The profession’s identifier.",
        type: ProfessionIdentifier,
      }),
      weighted_variants: Optional({
        comment:
          "Some profession variants are more common than others. There may be cultures where some variants are not represented at all.",
        type: GenIncludeIdentifier(Weighted, [ProfessionVariantIdentifier]),
      }),
      rarity: Optional({
        comment: "Some professions may be found in a culture, but are not that common.",
        type: IncludeIdentifier(Rarity),
      }),
    }),
})

const MagicalTraditionConstraint = TypeAlias(import.meta.url, {
  name: "MagicalTraditionConstraint",
  type: () =>
    Object({
      id: Required({
        comment: "The magical tradition’s identifier.",
        type: MagicalTraditionIdentifier,
      }),
      weighted_professions: Optional({
        comment:
          "Some professions are more common than others. There may be cultures where some professions are not represented at all.",
        type: GenIncludeIdentifier(Weighted, [ProfessionIdentifier]),
      }),
      rarity: Optional({
        comment: "Some traditions may be found in a culture, but are not that common.",
        type: IncludeIdentifier(Rarity),
      }),
    }),
})

const BlessedTraditionConstraint = TypeAlias(import.meta.url, {
  name: "BlessedTraditionConstraint",
  type: () =>
    Object({
      id: Required({
        comment: "The blessed tradition’s identifier.",
        type: BlessedTraditionIdentifier,
      }),
      weighted_professions: Optional({
        comment:
          "Some professions are more common than others. There may be cultures where some professions are not represented at all.",
        type: GenIncludeIdentifier(Weighted, [ProfessionIdentifier]),
      }),
      rarity: Optional({
        comment: "Some traditions may be found in a culture, but are not that common.",
        type: IncludeIdentifier(Rarity),
      }),
    }),
})

const MundaneCommonProfessionConstraint = Enum(import.meta.url, {
  name: "MundaneCommonProfessionConstraint",
  values: () => ({
    Profession: EnumCase({ type: IncludeIdentifier(ProfessionConstraint) }),
    ProfessionSubgroup: EnumCase({ type: IncludeIdentifier(MundaneProfessionGroup) }),
  }),
})

const MagicCommonProfessionConstraint = Enum(import.meta.url, {
  name: "MagicCommonProfessionConstraint",
  values: () => ({
    Tradition: EnumCase({ type: IncludeIdentifier(MagicalTraditionConstraint) }),
    MagicDilettante: EnumCase({ type: null }),
    Profession: EnumCase({ type: IncludeIdentifier(ProfessionConstraint) }),
  }),
})

const BlessedCommonProfessionConstraint = Enum(import.meta.url, {
  name: "BlessedCommonProfessionConstraint",
  values: () => ({
    Tradition: EnumCase({ type: IncludeIdentifier(BlessedTraditionConstraint) }),
  }),
})

const PlainCommonProfessions = TypeAlias(import.meta.url, {
  name: "PlainCommonProfessions",
  type: () => GenIncludeIdentifier(CommonProfessionConstraints, [ProfessionIdentifier]),
})

const GroupedCommonProfessions = TypeAlias(import.meta.url, {
  name: "GroupedCommonProfessions",
  comment: "Lists of professions by group.",
  type: () =>
    Object(
      {
        mundane: Optional({
          type: GenIncludeIdentifier(CommonProfessionConstraints, [
            IncludeIdentifier(MundaneCommonProfessionConstraint),
          ]),
        }),
        magic: Optional({
          type: GenIncludeIdentifier(CommonProfessionConstraints, [
            IncludeIdentifier(MagicCommonProfessionConstraint),
          ]),
        }),
        blessed: Optional({
          type: GenIncludeIdentifier(CommonProfessionConstraints, [
            IncludeIdentifier(BlessedCommonProfessionConstraint),
          ]),
        }),
      },
      { minProperties: 1 }
    ),
})

const CommonProfessions = Enum(import.meta.url, {
  name: "CommonProfessions",
  comment:
    "A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).",
  values: () => ({
    Plain: EnumCase({ type: IncludeIdentifier(PlainCommonProfessions) }),
    Grouped: EnumCase({ type: IncludeIdentifier(GroupedCommonProfessions) }),
  }),
})

const CommonnessRatedSkill = TypeAlias(import.meta.url, {
  name: "CommonnessRatedSkill",
  type: () => SkillIdentifier,
})

const CulturalPackageItem = TypeAlias(import.meta.url, {
  name: "CulturalPackageItem",
  type: () =>
    Object({
      id: Required({
        comment: "The skill’s identifier.",
        type: SkillIdentifier,
      }),
      points: Required({
        comment:
          "The skill points for the respective skill you get for buying the cultural package.",
        type: Integer({ minimum: 1, maximum: 2 }),
      }),
    }),
})

const AreaKnowledgeTranslation = TypeAlias(import.meta.url, {
  name: "AreaKnowledgeTranslation",
  comment: "Description and examples of the area knowledge.",
  type: () =>
    Object({
      description: Required({
        comment: "The full description without examples in parenthesis.",
        type: String({ minLength: 1 }),
      }),
      abbreviated: Required({
        comment:
          "A shorter version of the description, used in input fields and other UI elements where the space might be to small to use the full description.",
        type: String({ minLength: 1 }),
      }),
      examples: Optional({
        comment: "Examples of areas, if applicable.",
        type: Array(IncludeIdentifier(AreaKnowledgeExample), { minItems: 1 }),
      }),
    }),
})

const AreaKnowledgeExample = TypeAlias(import.meta.url, {
  name: "AreaKnowledgeExample",
  type: () =>
    Object({
      area: Required({
        type: String({ minLength: 1 }),
      }),
    }),
})

const CommonNames = TypeAlias(import.meta.url, {
  name: "CommonNames",
  comment: "Structured description of common names.",
  type: () =>
    Object(
      {
        first_name_groups: Optional({
          comment:
            "First names can be gender-neutral, but they can also be for a specific binary sex. They are sorted into groups.",
          type: Array(IncludeIdentifier(CommonNameGroup), { minItems: 1 }),
        }),
        last_name_groups: Optional({
          comment:
            "Last names can be gender-neutral, like family names, but they can also be for a specific binary sex. They are sorted into groups.",
          type: Array(IncludeIdentifier(CommonNameGroup), { minItems: 1 }),
        }),
        naming_rules: Optional({
          comment: "Special naming rules.",
          type: String({ minLength: 1 }),
        }),
      },
      { minProperties: 1 }
    ),
})

const CommonNameGroup = TypeAlias(import.meta.url, {
  name: "CommonNameGroup",
  type: () =>
    Object(
      {
        label: Required({
          comment: "The group label.",
          type: String({ minLength: 1 }),
        }),
        sex: Optional({
          comment: "The binary sex if the group is only for a certain binary sex.",
          type: IncludeIdentifier(BinarySex),
        }),
        names: Required({
          comment: "The names from the group.",
          type: Array(IncludeIdentifier(CommonName), { minItems: 1 }),
        }),
      },
      { minProperties: 1 }
    ),
})

const CommonName = TypeAlias(import.meta.url, {
  name: "CommonName",
  type: () =>
    Object(
      {
        name: Required({
          type: String({ minLength: 1 }),
        }),
        names: Optional({
          comment: "Additional information about the name, appended in parenthesis.",
          type: String({ minLength: 1 }),
        }),
      },
      { minProperties: 1 }
    ),
})
