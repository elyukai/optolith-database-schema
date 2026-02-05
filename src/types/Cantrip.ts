import * as DB from "tsondb/schema/dsl"
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

export const Cantrip = DB.Entity(import.meta.url, {
  name: "Cantrip",
  namePlural: "Cantrips",
  type: () =>
    DB.Object({
      parameters: DB.Required({
        comment: "Measurable parameters of a cantrip.",
        type: DB.IncludeIdentifier(CantripPerformanceParameters),
      }),
      target: DB.Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: DB.IncludeIdentifier(AffectedTargetCategories),
      }),
      property: DB.Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      note: DB.Optional({
        comment:
          "A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.",
        type: DB.IncludeIdentifier(CantripNote),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "Cantrip",
        DB.Object({
          name: DB.Required({
            comment: "The cantrip’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          effect: DB.Required({
            comment: "The effect description.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
          range: DB.Required({
            isDeprecated: true,
            type: DB.String({ minLength: 1 }),
          }),
          duration: DB.Required({
            isDeprecated: true,
            type: DB.String({ minLength: 1 }),
          }),
          target: DB.Required({
            isDeprecated: true,
            type: DB.String({ minLength: 1 }),
          }),
          errata: DB.Optional({
            type: DB.IncludeIdentifier(Errata),
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

const CantripNote = DB.Enum(import.meta.url, {
  name: "CantripNote",
  comment:
    "A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.",
  values: () => ({
    Exclusive: DB.EnumCase({ type: DB.IncludeIdentifier(ExclusiveCantripNote) }),
    Common: DB.EnumCase({ type: DB.IncludeIdentifier(CommonCantripNotes) }),
  }),
})

const ExclusiveCantripNote = DB.TypeAlias(import.meta.url, {
  name: "ExclusiveCantripNote",
  type: () =>
    DB.Object({
      traditions: DB.Required({
        comment: "The traditions the cantrip is exclusively available to.",
        type: DB.Array(MagicalTraditionIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

const CommonCantripNotes = DB.TypeAlias(import.meta.url, {
  name: "CommonCantripNotes",
  type: () =>
    DB.Object({
      list: DB.Required({
        comment: "The academies and traditions the cantrip is commonly teached in.",
        type: DB.Array(DB.IncludeIdentifier(CommonCantripNote), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

const CommonCantripNote = DB.Enum(import.meta.url, {
  name: "CommonCantripNote",
  values: () => ({
    Academy: DB.EnumCase({ type: CurriculumIdentifier() }),
    Tradition: DB.EnumCase({ type: DB.IncludeIdentifier(CommonCantripTraditionNote) }),
  }),
})

const CommonCantripTraditionNote = DB.TypeAlias(import.meta.url, {
  name: "CommonCantripTraditionNote",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The magical tradition’s identifier.",
        type: MagicalTraditionIdentifier(),
      }),
      translations: NestedTranslationMap(
        DB.Optional,
        "CommonCantripTraditionNote",
        DB.Object({
          note: DB.Required({
            comment: "A note, appended to the generated string in parenthesis.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
})

const CantripPerformanceParameters = DB.TypeAlias(import.meta.url, {
  name: "CantripPerformanceParameters",
  comment: "Measurable parameters of a cantrip.",
  type: () =>
    DB.Object({
      range: DB.Required({ type: DB.IncludeIdentifier(CantripRange) }),
      duration: DB.Required({ type: DB.IncludeIdentifier(CantripDuration) }),
    }),
})

const CantripRange = DB.Enum(import.meta.url, {
  name: "CantripRange",
  values: () => ({
    Self: DB.EnumCase({ type: null }),
    Touch: DB.EnumCase({ type: null }),
    Fixed: DB.EnumCase({ type: DB.IncludeIdentifier(FixedRange) }),
  }),
})

const CantripDuration = DB.Enum(import.meta.url, {
  name: "CantripDuration",
  values: () => ({
    Immediate: DB.EnumCase({ type: null }),
    Fixed: DB.EnumCase({ type: DB.IncludeIdentifier(FixedCantripDuration) }),
    DuringLovemaking: DB.EnumCase({ type: DB.IncludeIdentifier(CastingTimeDuringLovemaking) }),
    Indefinite: DB.EnumCase({ type: DB.IncludeIdentifier(IndefiniteCantripDuration) }),
  }),
})

const FixedCantripDuration = DB.TypeAlias(import.meta.url, {
  name: "FixedCantripDuration",
  type: () =>
    DB.Object({
      is_maximum: DB.Optional({
        comment: "If the duration is the maximum duration, so it may end earlier.",
        type: DB.Boolean(),
      }),
      value: DB.Required({
        comment: "The (unitless) duration.",
        type: DB.Integer({ minimum: 1 }),
      }),
      unit: DB.Required({
        comment: "The duration unit.",
        type: DB.IncludeIdentifier(DurationUnit),
      }),
    }),
})

const IndefiniteCantripDuration = DB.TypeAlias(import.meta.url, {
  name: "IndefiniteCantripDuration",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "IndefiniteCantripDuration",
        DB.Object({
          description: DB.Required({
            comment: "A description of the duration.",
            type: DB.IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})
