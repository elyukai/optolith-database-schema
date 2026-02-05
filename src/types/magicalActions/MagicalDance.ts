import {
  Array,
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
import { OldParameter } from "../_ActivatableSkill.js"
import { CheckResultBasedModifier } from "../_ActivatableSkillCheckResultBased.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { ArcaneDancerTraditionIdentifier, PropertyIdentifier } from "../_Identifier.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { ResponsiveText, ResponsiveTextOptional } from "../_ResponsiveText.js"
import { SkillCheck } from "../_SkillCheck.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"
import { MusicDuration, MusicTraditionReference } from "./_MusicTradition.js"

export const MagicalDance = Entity(import.meta.url, {
  name: "MagicalDance",
  namePlural: "MagicalDances",
  type: () =>
    Object({
      check: Required({
        comment: "Lists the linked three attributes used to make a skill check.",
        type: IncludeIdentifier(SkillCheck),
      }),
      parameters: Required({
        comment: "Measurable parameters of a magical dance.",
        type: IncludeIdentifier(MagicalDancePerformanceParameters),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      music_tradition: Required({
        comment:
          "The music tradition(s) the magical dance is available for. This also defines the different names in each music tradition.",
        type: Array(IncludeIdentifier(MusicTraditionReference(ArcaneDancerTraditionIdentifier())), {
          minItems: 1,
        }),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "MagicalDance",
        Object({
          name: Required({
            comment: "The magical dance’s name.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          cost: Optional({
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

const MagicalDancePerformanceParameters = TypeAlias(import.meta.url, {
  name: "MagicalDancePerformanceParameters",
  comment: "Measurable parameters of a magical dance.",
  type: () =>
    Object({
      duration: Required({
        comment: "The duration.",
        type: IncludeIdentifier(MusicDuration),
      }),
      cost: Required({
        comment: "The AE cost.",
        type: IncludeIdentifier(MagicalDanceCost),
      }),
    }),
})

const MagicalDanceCost = Enum(import.meta.url, {
  name: "MagicalDanceCost",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedMagicalDanceCost) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteMagicalDanceCost) }),
  }),
})

const FixedMagicalDanceCost = TypeAlias(import.meta.url, {
  name: "FixedMagicalDanceCost",
  type: () =>
    Object({
      value: Required({
        comment: "The (temporary) AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "FixedMagicalDanceCost",
        Object(
          {
            per: Optional({
              comment:
                "The cost have to be per a specific countable entity, e.g. `8 KP per person`.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const IndefiniteMagicalDanceCost = TypeAlias(import.meta.url, {
  name: "IndefiniteMagicalDanceCost",
  type: () =>
    Object({
      maximum: Optional({
        comment:
          "Specified if the indefinite description's result value is to be modified by a certain number.",
        type: IncludeIdentifier(CheckResultBasedModifier),
      }),
      translations: NestedTranslationMap(
        Required,
        "IndefiniteMagicalDanceCost",
        Object({
          description: Required({
            comment: "A description of where the cost come from.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})
