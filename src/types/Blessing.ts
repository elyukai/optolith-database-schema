import {
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
import { DurationUnit } from "./_ActivatableSkillDuration.js"
import { AffectedTargetCategories } from "./_ActivatableSkillTargetCategory.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Blessing = Entity(import.meta.url, {
  name: "Blessing",
  namePlural: "Blessings",
  type: () =>
    Object({
      parameters: Required({
        comment: "Measurable parameters of a blessing.",
        type: IncludeIdentifier(BlessingPerformanceParameters),
      }),
      target: Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: IncludeIdentifier(AffectedTargetCategories),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Blessing",
        Object({
          name: Required({
            comment: "The blessing’s name.",
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
  displayName: {},
})

const BlessingPerformanceParameters = TypeAlias(import.meta.url, {
  name: "BlessingPerformanceParameters",
  comment: "Measurable parameters of a blessing.",
  type: () =>
    Object({
      range: Required({ type: IncludeIdentifier(BlessingRange) }),
      duration: Required({ type: IncludeIdentifier(BlessingDuration) }),
    }),
})

const BlessingRange = Enum(import.meta.url, {
  name: "BlessingRange",
  values: () => ({
    Self: EnumCase({ type: null }),
    Touch: EnumCase({ type: null }),
    Fixed: EnumCase({ type: null }),
  }),
})

const BlessingDuration = Enum(import.meta.url, {
  name: "BlessingDuration",
  values: () => ({
    Immediate: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedBlessingDuration) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteBlessingDuration) }),
  }),
})

const FixedBlessingDuration = TypeAlias(import.meta.url, {
  name: "FixedBlessingDuration",
  type: () =>
    Object({
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

const IndefiniteBlessingDuration = TypeAlias(import.meta.url, {
  name: "IndefiniteBlessingDuration",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "IndefiniteBlessingDuration",
        Object({
          description: Required({
            comment: "A description of the duration.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
})
