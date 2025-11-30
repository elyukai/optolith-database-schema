import {
  Array,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { OldParameter } from "../_ActivatableSkill.js"
import { DurationUnitValue } from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { PropertyIdentifier, SkillIdentifier } from "../_Identifier.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { ResponsiveText, ResponsiveTextReplace } from "../_ResponsiveText.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const ElvenMagicalSong = Entity(import.meta.url, {
  name: "ElvenMagicalSong",
  namePlural: "ElvenMagicalSongs",
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
        comment: "Measurable parameters of an Elven magical song.",
        type: IncludeIdentifier(ElvenMagicalSongPerformanceParameters),
      }),
      skill: Required({
        comment:
          "To enhance their songs, elves can make a check on either *Singing (Two-Voiced Singing)* or *Music (appropriate application)* (or both) before making the check for the song.",
        type: Array(SkillIdentifier(), {
          minItems: 1,
          maxItems: 2,
          uniqueItems: true,
        }),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "ElvenMagicalSong",
        Object({
          name: Required({
            comment: "The Elven magical song’s name.",
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
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
})

const ElvenMagicalSongPerformanceParameters = TypeAlias(import.meta.url, {
  name: "ElvenMagicalSongPerformanceParameters",
  comment: "Measurable parameters of an Elven magical song.",
  type: () =>
    Object({
      cost: Required({
        comment: "The AE cost.",
        type: IncludeIdentifier(ElvenMagicalSongCost),
      }),
    }),
})

const ElvenMagicalSongCost = TypeAlias(import.meta.url, {
  name: "ElvenMagicalSongCost",
  type: () =>
    Object({
      value: Required({
        comment: "The (temporary) AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      interval: Optional({
        comment: "Specified if the AE cost `value` has to be paid for each time interval.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
      permanent: Optional({
        comment: "A permanent AE cost, independent from a possible interval.",
        type: IncludeIdentifier(ElvenMagicalSongPermanentCost),
      }),
      translations: NestedTranslationMap(
        Optional,
        "ElvenMagicalSongCost",
        Object({
          per: Required({
            comment: "The cost have to be per a specific countable entity, e.g. `8 AE per person`.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})

const ElvenMagicalSongPermanentCost = TypeAlias(import.meta.url, {
  name: "ElvenMagicalSongPermanentCost",
  type: () =>
    Object({
      value: Required({
        comment: "The permanent AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "ElvenMagicalSongPermanentCost",
        Object({
          replacement: Required({
            comment: "A replacement string for the permanent cost.",
            type: IncludeIdentifier(ResponsiveTextReplace),
          }),
        }),
      ),
    }),
})
