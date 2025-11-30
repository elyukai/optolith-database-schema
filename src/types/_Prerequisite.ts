/**
 * @title Prerequisites
 */

import {
  Array,
  EnumCase,
  GenEnum,
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
  TypeArgument,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { DisplayOption } from "./prerequisites/DisplayOption.js"
import {
  AdvantageDisadvantagePrerequisiteGroup,
  AnimistPowerPrerequisiteGroup,
  ArcaneTraditionPrerequisiteGroup,
  DerivedCharacteristicPrerequisiteGroup,
  EnhancementPrerequisiteGroup,
  GeneralPrerequisiteGroup,
  GeodeRitualPrerequisiteGroup,
  InfluencePrerequisiteGroup,
  LanguagePrerequisiteGroup,
  LiturgyPrerequisiteGroup,
  PersonalityTraitPrerequisiteGroup,
  ProfessionPrerequisiteGroup,
  PublicationPrerequisiteGroup,
  RulePrerequisiteGroup,
  SpellworkPrerequisiteGroup,
  TribePrerequisiteGroup,
} from "./prerequisites/PrerequisiteGroups.js"

const PrerequisiteGroup = GenTypeAlias(import.meta.url, {
  name: "PrerequisiteGroup",
  comment:
    "A prerequisite group has no influence on validation logic. It serves as a single unit for displaying purposes, where the source uses a prerequisites item that cannot be represented as a single prerequisite.",
  parameters: [Param("T")],
  type: T =>
    Object({
      list: Required({
        type: Array(TypeArgument(T), { minItems: 2 }),
      }),
      translations: NestedTranslationMap(
        Required,
        "PrerequisiteGroup",
        Object({
          text: Required({
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
})

const PrerequisitesDisjunction = GenTypeAlias(import.meta.url, {
  name: "PrerequisitesDisjunction",
  parameters: [Param("T")],
  type: T =>
    Object({
      list: Required({
        type: Array(TypeArgument(T), { minItems: 2 }),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})

const PrerequisitesElement = GenEnum(import.meta.url, {
  name: "PrerequisitesElement",
  parameters: [Param("T")],
  values: T => ({
    Single: EnumCase({ type: TypeArgument(T) }),
    Disjunction: EnumCase({
      type: GenIncludeIdentifier(PrerequisitesDisjunction, [TypeArgument(T)]),
    }),
    Group: EnumCase({
      type: GenIncludeIdentifier(PrerequisiteGroup, [TypeArgument(T)]),
    }),
  }),
})

const PlainPrerequisites = GenTypeAlias(import.meta.url, {
  name: "PlainPrerequisites",
  parameters: [Param("T")],
  type: T => Array(GenIncludeIdentifier(PrerequisitesElement, [TypeArgument(T)]), { minItems: 1 }),
})

const PrerequisiteForLevel = GenTypeAlias(import.meta.url, {
  name: "PrerequisiteForLevel",
  parameters: [Param("T")],
  type: T =>
    Object({
      level: Required({
        comment: "The level to which the prerequisite applies.",
        type: Integer({ minimum: 1 }),
      }),
      prerequisite: Required({
        comment: "The prerequisite.",
        type: GenIncludeIdentifier(PrerequisitesElement, [TypeArgument(T)]),
      }),
    }),
})

const PrerequisitesForLevels = GenTypeAlias(import.meta.url, {
  name: "PrerequisitesForLevels",
  parameters: [Param("T")],
  type: T =>
    Array(GenIncludeIdentifier(PrerequisiteForLevel, [TypeArgument(T)]), {
      minItems: 1,
    }),
})

export const RulePrerequisites = TypeAlias(import.meta.url, {
  name: "RulePrerequisites",
  type: () => GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(RulePrerequisiteGroup)]),
})

export const DerivedCharacteristicPrerequisites = TypeAlias(import.meta.url, {
  name: "DerivedCharacteristicPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [
      IncludeIdentifier(DerivedCharacteristicPrerequisiteGroup),
    ]),
})

export const PublicationPrerequisites = TypeAlias(import.meta.url, {
  name: "PublicationPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(PublicationPrerequisiteGroup)]),
})

export const PlainGeneralPrerequisites = TypeAlias(import.meta.url, {
  name: "PlainGeneralPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(GeneralPrerequisiteGroup)]),
})

export const GeneralPrerequisites = TypeAlias(import.meta.url, {
  name: "GeneralPrerequisites",
  type: () =>
    GenIncludeIdentifier(PrerequisitesForLevels, [IncludeIdentifier(GeneralPrerequisiteGroup)]),
})

export const ProfessionPrerequisites = TypeAlias(import.meta.url, {
  name: "ProfessionPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(ProfessionPrerequisiteGroup)]),
})

export const AdvantageDisadvantagePrerequisites = TypeAlias(import.meta.url, {
  name: "AdvantageDisadvantagePrerequisites",
  type: () =>
    GenIncludeIdentifier(PrerequisitesForLevels, [
      IncludeIdentifier(AdvantageDisadvantagePrerequisiteGroup),
    ]),
})

export const ArcaneTraditionPrerequisites = TypeAlias(import.meta.url, {
  name: "ArcaneTraditionPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(ArcaneTraditionPrerequisiteGroup)]),
})

export const PersonalityTraitPrerequisites = TypeAlias(import.meta.url, {
  name: "PersonalityTraitPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [
      IncludeIdentifier(PersonalityTraitPrerequisiteGroup),
    ]),
})

export const SpellworkPrerequisites = TypeAlias(import.meta.url, {
  name: "SpellworkPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(SpellworkPrerequisiteGroup)]),
})

export const LiturgyPrerequisites = TypeAlias(import.meta.url, {
  name: "LiturgyPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(LiturgyPrerequisiteGroup)]),
})

export const InfluencePrerequisites = TypeAlias(import.meta.url, {
  name: "InfluencePrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(InfluencePrerequisiteGroup)]),
})

export const LanguagePrerequisites = TypeAlias(import.meta.url, {
  name: "LanguagePrerequisites",
  type: () =>
    GenIncludeIdentifier(PrerequisitesForLevels, [IncludeIdentifier(LanguagePrerequisiteGroup)]),
})

export const AnimistPowerPrerequisites = TypeAlias(import.meta.url, {
  name: "AnimistPowerPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(AnimistPowerPrerequisiteGroup)]),
})

export const TribePrerequisites = TypeAlias(import.meta.url, {
  name: "TribePrerequisites",
  type: () => GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(TribePrerequisiteGroup)]),
})

export const GeodeRitualPrerequisites = TypeAlias(import.meta.url, {
  name: "GeodeRitualPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(GeodeRitualPrerequisiteGroup)]),
})

export const EnhancementPrerequisites = TypeAlias(import.meta.url, {
  name: "EnhancementPrerequisites",
  type: () =>
    GenIncludeIdentifier(PlainPrerequisites, [IncludeIdentifier(EnhancementPrerequisiteGroup)]),
})
