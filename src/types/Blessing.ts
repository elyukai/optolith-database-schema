import * as DB from "tsondb/schema/dsl"
import { DurationUnit } from "./_ActivatableSkillDuration.js"
import { FixedRange } from "./_ActivatableSkillRange.js"
import { AffectedTargetCategories } from "./_ActivatableSkillTargetCategory.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Blessing = DB.Entity(import.meta.url, {
  name: "Blessing",
  namePlural: "Blessings",
  type: () =>
    DB.Object({
      parameters: DB.Required({
        comment: "Measurable parameters of a blessing.",
        type: DB.IncludeIdentifier(BlessingPerformanceParameters),
      }),
      target: DB.Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: DB.IncludeIdentifier(AffectedTargetCategories),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "Blessing",
        DB.Object({
          name: DB.Required({
            comment: "The blessing’s name.",
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

const BlessingPerformanceParameters = DB.TypeAlias(import.meta.url, {
  name: "BlessingPerformanceParameters",
  comment: "Measurable parameters of a blessing.",
  type: () =>
    DB.Object({
      range: DB.Required({ type: DB.IncludeIdentifier(BlessingRange) }),
      duration: DB.Required({ type: DB.IncludeIdentifier(BlessingDuration) }),
    }),
})

const BlessingRange = DB.Enum(import.meta.url, {
  name: "BlessingRange",
  values: () => ({
    Self: DB.EnumCase({ type: null }),
    Touch: DB.EnumCase({ type: null }),
    Fixed: DB.EnumCase({ type: DB.IncludeIdentifier(FixedRange) }),
  }),
})

const BlessingDuration = DB.Enum(import.meta.url, {
  name: "BlessingDuration",
  values: () => ({
    Immediate: DB.EnumCase({ type: null }),
    Fixed: DB.EnumCase({ type: DB.IncludeIdentifier(FixedBlessingDuration) }),
    Indefinite: DB.EnumCase({ type: DB.IncludeIdentifier(IndefiniteBlessingDuration) }),
  }),
})

const FixedBlessingDuration = DB.TypeAlias(import.meta.url, {
  name: "FixedBlessingDuration",
  type: () =>
    DB.Object({
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

const IndefiniteBlessingDuration = DB.TypeAlias(import.meta.url, {
  name: "IndefiniteBlessingDuration",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "IndefiniteBlessingDuration",
        DB.Object({
          description: DB.Required({
            comment: "A description of the duration.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
})
