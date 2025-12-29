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
import { OldParameter } from "../_ActivatableSkill.js"
import { CheckResultBasedDuration, DurationUnit } from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { PropertyIdentifier, SkillModificationLevelIdentifier } from "../_Identifier.js"
import { ResponsiveText } from "../_ResponsiveText.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const DominationRitual = Entity(import.meta.url, {
  name: "DominationRitual",
  namePlural: "DominationRituals",
  type: () =>
    Object({
      check: Required({
        comment: "Lists the linked three attributes used to make a skill check.",
        type: IncludeIdentifier(SkillCheck),
      }),
      check_penalty: Optional({
        comment: "In some cases, the target's Spirit or Toughness is applied as a penalty.",
        type: IncludeIdentifier(SkillCheckPenalty),
      }),
      parameters: Required({
        comment: "Measurable parameters of a domination ritual.",
        type: IncludeIdentifier(DominationRitualPerformanceParameters),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "DominationRitual",
        Object({
          name: Required({
            comment: "The domination ritual’s name.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
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

const DominationRitualPerformanceParameters = TypeAlias(import.meta.url, {
  name: "DominationRitualPerformanceParameters",
  comment: "Measurable parameters of a domination ritual.",
  type: () =>
    Object({
      cost: Required({
        comment: "The AE cost.",
        type: IncludeIdentifier(DominationRitualCost),
      }),
      duration: Required({
        comment: "The duration.",
        type: IncludeIdentifier(DominationRitualDuration),
      }),
    }),
})

const DominationRitualCost = TypeAlias(import.meta.url, {
  name: "DominationRitualCost",
  type: () =>
    Object({
      initial_modification_level: Required({
        comment: "The initial skill modification identifier/level.",
        type: SkillModificationLevelIdentifier(),
      }),
      translations: NestedTranslationMap(
        Optional,
        "DominationRitualCost",
        Object({
          additional: Required({
            comment: "AE cost in addition to the normal AE cost.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})

const DominationRitualDuration = Enum(import.meta.url, {
  name: "DominationRitualDuration",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedDominationRitualDuration) }),
    CheckResultBased: EnumCase({ type: IncludeIdentifier(CheckResultBasedDuration) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteDominationRitualDuration) }),
  }),
})

const FixedDominationRitualDuration = TypeAlias(import.meta.url, {
  name: "FixedDominationRitualDuration",
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

const IndefiniteDominationRitualDuration = TypeAlias(import.meta.url, {
  name: "IndefiniteDominationRitualDuration",
  type: () =>
    Object({
      maximum: Optional({
        comment: "Specified if the duration has a maximum time span.",
        type: IncludeIdentifier(MaximumIndefiniteDominationRitualDuration),
      }),
      translations: NestedTranslationMap(
        Required,
        "IndefiniteDominationRitualDuration",
        Object({
          description: Required({
            comment: "A description of the duration.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})

const MaximumIndefiniteDominationRitualDuration = Enum(import.meta.url, {
  name: "MaximumIndefiniteDominationRitualDuration",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedDominationRitualDuration) }),
    CheckResultBased: EnumCase({ type: IncludeIdentifier(CheckResultBasedDuration) }),
  }),
})
