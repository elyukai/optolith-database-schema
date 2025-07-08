import {
  Array,
  Entity,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { FastPerformanceParameters, OldParameter } from "./_ActivatableSkill.js"
import { ActivatableSkillEffect } from "./_ActivatableSkillEffect.js"
import { AffectedTargetCategories } from "./_ActivatableSkillTargetCategory.js"
import { LiturgyTradition } from "./_Blessed.js"
import { Enhancements } from "./_Enhancements.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LiturgyPrerequisites } from "./_Prerequisite.js"
import { SkillCheck, SkillCheckPenalty } from "./_SkillCheck.js"
import { NestedLocaleMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const LiturgicalChant = Entity(import.meta.url, {
  name: "LiturgicalChant",
  namePlural: "LiturgicalChants",
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
        comment: "Measurable parameters of a liturgical chant.",
        type: IncludeIdentifier(FastPerformanceParameters),
      }),
      target: Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: IncludeIdentifier(AffectedTargetCategories),
      }),
      traditions: Required({
        comment:
          "The tradition(s) the liturgical chant is available for. Note that general aspects do not have an associated tradition and thus need to be defined in a special way.",
        type: Array(IncludeIdentifier(LiturgyTradition), { minItems: 1 }),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      prerequisites: Optional({
        comment: "The prerequisites for the liturgical chant.",
        type: IncludeIdentifier(LiturgyPrerequisites),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "LiturgicalChantTranslation",
        Object({
          name: Required({
            comment: "The liturgical chant’s name.",
            type: String({ minLength: 1 }),
          }),
          name_compressed: Optional({
            comment:
              "A compressed name of the liturgical chant for use in small areas (e.g. on character sheet). Should only be defined if the `name` does not fit on character sheet.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          casting_time: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          range: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          target: Optional({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
      enhancements: Optional({
        type: IncludeIdentifier(Enhancements),
      }),
    }),
  displayName: {},
})
