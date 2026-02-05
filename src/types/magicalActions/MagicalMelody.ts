import * as DB from "tsondb/schema/dsl"
import { OldParameter } from "../_ActivatableSkill.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import {
  ArcaneBardTraditionIdentifier,
  PropertyIdentifier,
  SkillIdentifier,
} from "../_Identifier.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"
import { MusicDuration, MusicTraditionReference } from "./_MusicTradition.js"

export const MagicalMelody = DB.Entity(import.meta.url, {
  name: "MagicalMelody",
  namePlural: "MagicalMelodies",
  type: () =>
    DB.Object({
      check: DB.Required({
        comment: "Lists the linked three attributes used to make a skill check.",
        type: DB.IncludeIdentifier(SkillCheck),
      }),
      check_penalty: DB.Optional({
        comment: "In some cases, the target's Spirit or Toughness is applied as a penalty.",
        type: DB.IncludeIdentifier(SkillCheckPenalty),
      }),
      skill: DB.Required({
        comment:
          "To enhance their songs, elves can make a check on either *Singing (Two-Voiced Singing)* or *Music (appropriate application)* (or both) before making the check for the song.",
        type: DB.Array(SkillIdentifier(), {
          minItems: 1,
          maxItems: 2,
          uniqueItems: true,
        }),
      }),
      parameters: DB.Required({
        comment: "Measurable parameters of a magical melody.",
        type: DB.IncludeIdentifier(MagicalMelodyPerformanceParameters),
      }),
      property: DB.Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      music_tradition: DB.Required({
        comment:
          "The music tradition(s) the magical melody is available for. This also defines the different names in each music tradition.",
        type: DB.Array(
          DB.IncludeIdentifier(MusicTraditionReference(ArcaneBardTraditionIdentifier())),
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
        "MagicalMelody",
        DB.Object({
          name: DB.Required({
            comment: "The magical melody’s name.",
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

const MagicalMelodyPerformanceParameters = DB.TypeAlias(import.meta.url, {
  name: "MagicalMelodyPerformanceParameters",
  comment: "Measurable parameters of a magical melody.",
  type: () =>
    DB.Object({
      duration: DB.Required({
        comment: "The duration.",
        type: DB.IncludeIdentifier(MusicDuration),
      }),
      cost: DB.Required({
        comment: "The AE cost.",
        type: DB.IncludeIdentifier(MagicalMelodyCost),
      }),
    }),
})

const MagicalMelodyCost = DB.Enum(import.meta.url, {
  name: "MagicalMelodyCost",
  values: () => ({
    Fixed: DB.EnumCase({ type: DB.IncludeIdentifier(FixedMagicalMelodyCost) }),
    FirstPerson: DB.EnumCase({ type: DB.IncludeIdentifier(FirstPersonMagicalMelodyCost) }),
  }),
})

const FixedMagicalMelodyCost = DB.TypeAlias(import.meta.url, {
  name: "FixedMagicalMelodyCost",
  type: () =>
    DB.Object({
      value: DB.Required({
        comment: "The (temporary) AE cost value.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

const FirstPersonMagicalMelodyCost = DB.TypeAlias(import.meta.url, {
  name: "FirstPersonMagicalMelodyCost",
  type: () =>
    DB.Object({
      value: DB.Required({
        comment:
          "The (temporary) AE cost value for the first targeted person. The AE cost for each additional person is half this value.",
        type: DB.Integer({ minimum: 1, multipleOf: 2 }),
      }),
    }),
})
