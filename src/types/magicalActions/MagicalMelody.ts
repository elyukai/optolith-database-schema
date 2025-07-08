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
} from "tsondb/schema/def"
import { OldParameter } from "../_ActivatableSkill.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import {
  ArcaneBardTraditionIdentifier,
  PropertyIdentifier,
  SkillIdentifier,
} from "../_Identifier.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"
import { MusicDuration, MusicTraditionReference } from "./_MusicTradition.js"

export const MagicalMelody = Entity(import.meta.url, {
  name: "MagicalMelody",
  namePlural: "MagicalMelodies",
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
      skill: Required({
        comment:
          "To enhance their songs, elves can make a check on either *Singing (Two-Voiced Singing)* or *Music (appropriate application)* (or both) before making the check for the song.",
        type: Array(SkillIdentifier, {
          minItems: 1,
          maxItems: 2,
          uniqueItems: true,
        }),
      }),
      parameters: Required({
        comment: "Measurable parameters of a magical melody.",
        type: IncludeIdentifier(MagicalMelodyPerformanceParameters),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier,
      }),
      music_tradition: Required({
        comment:
          "The music tradition(s) the magical melody is available for. This also defines the different names in each music tradition.",
        type: Array(IncludeIdentifier(MusicTraditionReference(ArcaneBardTraditionIdentifier)), {
          minItems: 1,
        }),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "MagicalMelodyTranslation",
        Object({
          name: Required({
            comment: "The magical melody’s name.",
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
        })
      ),
    }),
  displayName: {},
})

const MagicalMelodyPerformanceParameters = TypeAlias(import.meta.url, {
  name: "MagicalMelodyPerformanceParameters",
  comment: "Measurable parameters of a magical melody.",
  type: () =>
    Object({
      duration: Required({
        comment: "The duration.",
        type: IncludeIdentifier(MusicDuration),
      }),
      cost: Required({
        comment: "The AE cost.",
        type: IncludeIdentifier(MagicalMelodyCost),
      }),
    }),
})

const MagicalMelodyCost = Enum(import.meta.url, {
  name: "MagicalMelodyCost",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedMagicalMelodyCost) }),
    FirstPerson: EnumCase({ type: IncludeIdentifier(FirstPersonMagicalMelodyCost) }),
  }),
})

const FixedMagicalMelodyCost = TypeAlias(import.meta.url, {
  name: "FixedMagicalMelodyCost",
  type: () =>
    Object({
      value: Required({
        comment: "The (temporary) AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const FirstPersonMagicalMelodyCost = TypeAlias(import.meta.url, {
  name: "FirstPersonMagicalMelodyCost",
  type: () =>
    Object({
      value: Required({
        comment:
          "The (temporary) AE cost value for the first targeted person. The AE cost for each additional person is half this value.",
        type: Integer({ minimum: 1, multipleOf: 2 }),
      }),
    }),
})
