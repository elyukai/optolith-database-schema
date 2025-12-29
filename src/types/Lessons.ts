import {
  Array,
  ChildEntities,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import {
  CurriculumIdentifier,
  ElementIdentifier,
  GuidelineIdentifier,
  MagicalTraditionIdentifier,
  PropertyIdentifier,
  SkillIdentifier,
} from "./_Identifier.js"
import { CombatTechniqueIdentifier, SpellworkIdentifier } from "./_IdentifierGroup.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Guideline = Entity(import.meta.url, {
  name: "Guideline",
  namePlural: "Guidelines",
  type: () =>
    Object({
      spellwork_changes_allowed: Required({
        comment: "Maximum number of spells that can be exchanged.",
        type: Integer({ minimum: 0 }),
      }),
      translations: NestedTranslationMap(
        Required,
        "Guideline",
        Object({
          name: Required({
            comment: "The guideline’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})

export const Curriculum = Entity(import.meta.url, {
  name: "Curriculum",
  namePlural: "Curricula",
  comment:
    "This is a curriculum of a specified or other institutions such as private teachers, containing the guideline, elective and restricted spellworks as well as the lesson packages of that academy. It is used with the focus rule *Lessons*.",
  type: () =>
    Object({
      guideline: Required({
        comment: "The institution’s guideline.",
        type: GuidelineIdentifier(),
      }),
      elective_spellworks: Optional({
        comment: "The institution’s elective spellworks package.",
        type: IncludeIdentifier(ElectiveSpellworks),
      }),
      restricted_spellworks: Optional({
        comment: "The institution’s restricted spellworks package.",
        type: IncludeIdentifier(RestrictedSpellworks),
      }),
      lesson_packages: Required({
        comment: "A list of available lesson packages.",
        type: ChildEntities(LessonPackage),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Curriculum",
        Object({
          name: Required({
            comment: "The institution’s name.",
            type: String({ minLength: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})

const ElectiveSpellworks = Enum(import.meta.url, {
  name: "ElectiveSpellworks",
  comment: "The institution’s elective spellworks package.",
  values: () => ({
    DefinedByGameMaster: EnumCase({ type: null }),
    Specific: EnumCase({ type: IncludeIdentifier(SpecificElectiveSpellworks) }),
  }),
})

const SpecificElectiveSpellworks = TypeAlias(import.meta.url, {
  name: "SpecificElectiveSpellworks",
  type: () =>
    Object({
      list: Required({
        type: Array(IncludeIdentifier(ElectiveSpellwork), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

const ElectiveSpellwork = TypeAlias(import.meta.url, {
  name: "ElectiveSpellwork",
  type: () =>
    Object({
      id: Required({
        type: IncludeIdentifier(SpellworkIdentifier),
      }),
      restriction: Optional({
        comment:
          "The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead.",
        type: IncludeIdentifier(ElectiveSpellworkRestriction),
      }),
    }),
})

const ElectiveSpellworkRestriction = Enum(import.meta.url, {
  name: "ElectiveSpellworkRestriction",
  comment:
    "The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead.",
  values: () => ({
    Element: EnumCase({ type: ElementIdentifier() }),
  }),
})

const RestrictedSpellworks = TypeAlias(import.meta.url, {
  name: "RestrictedSpellworks",
  comment: "The institution’s restricted spellworks package.",
  type: () => Array(IncludeIdentifier(RestrictedSpellwork), { minItems: 1, uniqueItems: true }),
})

const RestrictedSpellwork = Enum(import.meta.url, {
  name: "RestrictedSpellwork",
  values: () => ({
    Property: EnumCase({ type: IncludeIdentifier(RestrictedProperty) }),
    Spellwork: EnumCase({ type: IncludeIdentifier(SpellworkIdentifier) }),
    DemonSummoning: EnumCase({ type: null }),
    Borbaradian: EnumCase({ type: null }),
    DamageIntelligent: EnumCase({ type: null }),
  }),
})

const RestrictedProperty = TypeAlias(import.meta.url, {
  name: "RestrictedProperty",
  type: () =>
    Object({
      id: Required({
        comment: "The identifier of the property that spellworks are disallowed from.",
        type: PropertyIdentifier(),
      }),
      exclude: Optional({
        comment: "Exclude specific spellworks from the restriction.",
        type: Array(IncludeIdentifier(SpellworkIdentifier), { minItems: 1, uniqueItems: true }),
      }),
      maximum: Optional({
        comment:
          "Spellworks from this property up to a certain number are allowed. Spellworks excluded from this restriction definition using `exclude` do not contribute to the maximum.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

export const LessonPackage = Entity(import.meta.url, {
  name: "LessonPackage",
  namePlural: "LessonPackages",
  type: () =>
    Object(
      {
        curriculum: Required({
          comment: "The associated curriculum.",
          type: CurriculumIdentifier(),
        }),
        spellwork_changes: Optional({
          comment:
            "The spell values difference of the lesson package. This field reflects the changes (difference) to the field of the same name in the profession package. If a spell gets to SR 0 because of this, it will be removed completely.",
          type: Array(IncludeIdentifier(SpellworkChange), { minItems: 1, uniqueItems: true }),
        }),
        skills: Optional({
          type: Array(IncludeIdentifier(AbilityAdjustment), { minItems: 1, uniqueItems: true }),
        }),
        translations: NestedTranslationMap(
          Required,
          "LessonPackage",
          Object({
            name: Required({
              comment: "The lesson package’s name.",
              type: String({ minLength: 1 }),
            }),
            spellwork_changes: Optional({
              comment:
                "The spell values difference of the lesson package. Use this field to specify a text that is displayed instead of the generated `spellwork_changes` list. The field is displayed even if no list is present.",
              type: String({ minLength: 1 }),
            }),
          }),
        ),
      },
      { minProperties: 3 },
    ),
  parentReferenceKey: "curriculum",
  instanceDisplayName: {},
})

const SpellworkChange = TypeAlias(import.meta.url, {
  name: "SpellworkChange",
  type: () =>
    Object({
      base: Required({
        type: IncludeIdentifier(SpellworkAdjustment),
      }),
      replacement: Required({
        type: IncludeIdentifier(SpellworkAdjustment),
      }),
    }),
})

const AbilityAdjustment = Enum(import.meta.url, {
  name: "AbilityAdjustment",
  values: () => ({
    CombatTechnique: EnumCase({ type: IncludeIdentifier(CombatTechniqueAdjustment) }),
    Skill: EnumCase({ type: IncludeIdentifier(SkillAdjustment) }),
    Spellwork: EnumCase({ type: IncludeIdentifier(SpellworkAdjustment) }),
  }),
})

const CombatTechniqueAdjustment = TypeAlias(import.meta.url, {
  name: "CombatTechniqueAdjustment",
  type: () =>
    Object({
      id: Required({
        type: IncludeIdentifier(CombatTechniqueIdentifier),
      }),
      points: Required({
        comment:
          "The combat technique points that will be added to the current combat technique rating.",
        type: Integer({ minimum: -6, maximum: 6 }),
      }),
    }),
})

const SkillAdjustment = TypeAlias(import.meta.url, {
  name: "SkillAdjustment",
  type: () =>
    Object({
      id: Required({
        type: SkillIdentifier(),
      }),
      points: Required({
        comment: "The skill points that will be added to the current skill rating.",
        type: Integer({ minimum: -8, maximum: 8 }),
      }),
    }),
})

const SpellworkAdjustment = TypeAlias(import.meta.url, {
  name: "SpellworkAdjustment",
  type: () =>
    Object({
      id: Required({
        type: IncludeIdentifier(SpellworkIdentifier),
      }),
      points: Required({
        comment:
          "The skill points that will be added to the current skill rating. If a spell gets to a skill rating of 0 because of this, it will be removed completely.",
        type: Integer({ minimum: -10, maximum: 10 }),
      }),
      tradition: Optional({
        comment:
          "The target tradition. If the target spell is not from the Guild Mage tradition, specify the tradition identifier here.",
        type: MagicalTraditionIdentifier(),
      }),
    }),
})
