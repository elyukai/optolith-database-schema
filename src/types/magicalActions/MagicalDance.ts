import * as DB from "tsondb/schema/dsl"
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

export const MagicalDance = DB.Entity(import.meta.url, {
  name: "MagicalDance",
  namePlural: "MagicalDances",
  type: () =>
    DB.Object({
      check: DB.Required({
        comment: "Lists the linked three attributes used to make a skill check.",
        type: DB.IncludeIdentifier(SkillCheck),
      }),
      parameters: DB.Required({
        comment: "Measurable parameters of a magical dance.",
        type: DB.IncludeIdentifier(MagicalDancePerformanceParameters),
      }),
      property: DB.Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      music_tradition: DB.Required({
        comment:
          "The music tradition(s) the magical dance is available for. This also defines the different names in each music tradition.",
        type: DB.Array(
          DB.IncludeIdentifier(MusicTraditionReference(ArcaneDancerTraditionIdentifier())),
          {
            minItems: 1,
          },
        ),
      }),
      improvement_cost: DB.Required({
        comment: "States which column is used to improve the skill.",
        type: DB.IncludeIdentifier(ImprovementCost),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "MagicalDance",
        DB.Object({
          name: DB.Required({
            comment: "The magical dance’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          effect: DB.Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: DB.IncludeIdentifier(ActivatableSkillEffect),
          }),
          duration: DB.Optional({
            isDeprecated: true,
            type: DB.IncludeIdentifier(OldParameter),
          }),
          cost: DB.Optional({
            isDeprecated: true,
            type: DB.IncludeIdentifier(OldParameter),
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

const MagicalDancePerformanceParameters = DB.TypeAlias(import.meta.url, {
  name: "MagicalDancePerformanceParameters",
  comment: "Measurable parameters of a magical dance.",
  type: () =>
    DB.Object({
      duration: DB.Required({
        comment: "The duration.",
        type: DB.IncludeIdentifier(MusicDuration),
      }),
      cost: DB.Required({
        comment: "The AE cost.",
        type: DB.IncludeIdentifier(MagicalDanceCost),
      }),
    }),
})

const MagicalDanceCost = DB.Enum(import.meta.url, {
  name: "MagicalDanceCost",
  values: () => ({
    Fixed: DB.EnumCase({ type: DB.IncludeIdentifier(FixedMagicalDanceCost) }),
    Indefinite: DB.EnumCase({ type: DB.IncludeIdentifier(IndefiniteMagicalDanceCost) }),
  }),
})

const FixedMagicalDanceCost = DB.TypeAlias(import.meta.url, {
  name: "FixedMagicalDanceCost",
  type: () =>
    DB.Object({
      value: DB.Required({
        comment: "The (temporary) AE cost value.",
        type: DB.Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        DB.Optional,
        "FixedMagicalDanceCost",
        DB.Object(
          {
            per: DB.Optional({
              comment:
                "The cost have to be per a specific countable entity, e.g. `8 KP per person`.",
              type: DB.IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const IndefiniteMagicalDanceCost = DB.TypeAlias(import.meta.url, {
  name: "IndefiniteMagicalDanceCost",
  type: () =>
    DB.Object({
      maximum: DB.Optional({
        comment:
          "Specified if the indefinite description's result value is to be modified by a certain number.",
        type: DB.IncludeIdentifier(CheckResultBasedModifier),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "IndefiniteMagicalDanceCost",
        DB.Object({
          description: DB.Required({
            comment: "A description of where the cost come from.",
            type: DB.IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})
