import {
  Array,
  Boolean,
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
} from "tsondb/schema/dsl"
import { CastingTimeDuringLovemaking } from "./_ActivatableSkillCastingTime.js"
import { DurationUnit } from "./_ActivatableSkillDuration.js"
import { FixedRange } from "./_ActivatableSkillRange.js"
import { AffectedTargetCategories } from "./_ActivatableSkillTargetCategory.js"
import {
  CurriculumIdentifier,
  MagicalTraditionIdentifier,
  PropertyIdentifier,
} from "./_Identifier.js"
import { ResponsiveText } from "./_ResponsiveText.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Cantrip = Entity(import.meta.url, {
  name: "Cantrip",
  namePlural: "Cantrips",
  type: () =>
    Object({
      parameters: Required({
        comment: "Measurable parameters of a cantrip.",
        type: IncludeIdentifier(CantripPerformanceParameters),
      }),
      target: Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: IncludeIdentifier(AffectedTargetCategories),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      note: Optional({
        comment:
          "A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.",
        type: IncludeIdentifier(CantripNote),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Cantrip",
        Object({
          name: Required({
            comment: "The cantrip’s name.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment: "The effect description.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          range: Required({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),
          duration: Required({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),
          target: Required({
            isDeprecated: true,
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

const CantripNote = Enum(import.meta.url, {
  name: "CantripNote",
  comment:
    "A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.",
  values: () => ({
    Exclusive: EnumCase({ type: IncludeIdentifier(ExclusiveCantripNote) }),
    Common: EnumCase({ type: IncludeIdentifier(CommonCantripNotes) }),
  }),
})

const ExclusiveCantripNote = TypeAlias(import.meta.url, {
  name: "ExclusiveCantripNote",
  type: () =>
    Object({
      traditions: Required({
        comment: "The traditions the cantrip is exclusively available to.",
        type: Array(MagicalTraditionIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

const CommonCantripNotes = TypeAlias(import.meta.url, {
  name: "CommonCantripNotes",
  type: () =>
    Object({
      list: Required({
        comment: "The academies and traditions the cantrip is commonly teached in.",
        type: Array(IncludeIdentifier(CommonCantripNote), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

const CommonCantripNote = Enum(import.meta.url, {
  name: "CommonCantripNote",
  values: () => ({
    Academy: EnumCase({ type: CurriculumIdentifier() }),
    Tradition: EnumCase({ type: IncludeIdentifier(CommonCantripTraditionNote) }),
  }),
})

const CommonCantripTraditionNote = TypeAlias(import.meta.url, {
  name: "CommonCantripTraditionNote",
  type: () =>
    Object({
      id: Required({
        comment: "The magical tradition’s identifier.",
        type: MagicalTraditionIdentifier(),
      }),
      translations: NestedTranslationMap(
        Optional,
        "CommonCantripTraditionNote",
        Object({
          note: Required({
            comment: "A note, appended to the generated string in parenthesis.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
})

const CantripPerformanceParameters = TypeAlias(import.meta.url, {
  name: "CantripPerformanceParameters",
  comment: "Measurable parameters of a cantrip.",
  type: () =>
    Object({
      range: Required({ type: IncludeIdentifier(CantripRange) }),
      duration: Required({ type: IncludeIdentifier(CantripDuration) }),
    }),
})

const CantripRange = Enum(import.meta.url, {
  name: "CantripRange",
  values: () => ({
    Self: EnumCase({ type: null }),
    Touch: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedRange) }),
  }),
})

const CantripDuration = Enum(import.meta.url, {
  name: "CantripDuration",
  values: () => ({
    Immediate: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedCantripDuration) }),
    DuringLovemaking: EnumCase({ type: IncludeIdentifier(CastingTimeDuringLovemaking) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteCantripDuration) }),
  }),
})

const FixedCantripDuration = TypeAlias(import.meta.url, {
  name: "FixedCantripDuration",
  type: () =>
    Object({
      is_maximum: Optional({
        comment: "If the duration is the maximum duration, so it may end earlier.",
        type: Boolean(),
      }),
      value: Required({
        comment: "The (unitless) duration.",
        type: Integer({ minimum: 1 }),
      }),
      unit: Required({
        comment: "The duration unit.",
        type: IncludeIdentifier(DurationUnit),
      }),
    }),
})

const IndefiniteCantripDuration = TypeAlias(import.meta.url, {
  name: "IndefiniteCantripDuration",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "IndefiniteCantripDuration",
        Object({
          description: Required({
            comment: "A description of the duration.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})
