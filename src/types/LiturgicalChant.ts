import * as DB from "tsondb/schema/dsl"
import { FastPerformanceParameters, OldParameter } from "./_ActivatableSkill.js"
import { ActivatableSkillEffect } from "./_ActivatableSkillEffect.js"
import { AffectedTargetCategories } from "./_ActivatableSkillTargetCategory.js"
import { LiturgyTradition } from "./_Blessed.js"
import { Enhancement } from "./_Enhancements.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LiturgyPrerequisites } from "./_Prerequisite.js"
import { SkillCheck, SkillCheckPenalty } from "./_SkillCheck.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const LiturgicalChant = DB.Entity(import.meta.url, {
  name: "LiturgicalChant",
  namePlural: "LiturgicalChants",
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
      parameters: DB.Required({
        comment: "Measurable parameters of a liturgical chant.",
        type: DB.IncludeIdentifier(FastPerformanceParameters),
      }),
      target: DB.Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: DB.IncludeIdentifier(AffectedTargetCategories),
      }),
      traditions: DB.Required({
        comment:
          "The tradition(s) the liturgical chant is available for. Note that general aspects do not have an associated tradition and thus need to be defined in a special way.",
        type: DB.Array(DB.IncludeIdentifier(LiturgyTradition), { minItems: 1 }),
      }),
      improvement_cost: DB.Required({
        comment: "States which column is used to improve the skill.",
        type: DB.IncludeIdentifier(ImprovementCost),
      }),
      prerequisites: DB.Optional({
        comment: "The prerequisites for the liturgical chant.",
        type: DB.IncludeIdentifier(LiturgyPrerequisites),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "LiturgicalChant",
        DB.Object({
          name: DB.Required({
            comment: "The liturgical chant’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          name_compressed: DB.Optional({
            comment:
              "A compressed name of the liturgical chant for use in small areas (e.g. on character sheet). Should only be defined if the `name` does not fit on character sheet.",
            type: DB.String({ minLength: 1 }),
          }),
          effect: DB.Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: DB.IncludeIdentifier(ActivatableSkillEffect),
          }),
          casting_time: DB.Optional({
            isDeprecated: true,
            type: DB.IncludeIdentifier(OldParameter),
          }),
          cost: DB.Optional({
            isDeprecated: true,
            type: DB.IncludeIdentifier(OldParameter),
          }),
          range: DB.Optional({
            isDeprecated: true,
            type: DB.IncludeIdentifier(OldParameter),
          }),
          duration: DB.Optional({
            isDeprecated: true,
            type: DB.IncludeIdentifier(OldParameter),
          }),
          target: DB.Optional({
            isDeprecated: true,
            type: DB.String({ minLength: 1 }),
          }),
          errata: DB.Optional({
            type: DB.IncludeIdentifier(Errata),
          }),
        }),
      ),
      enhancements: DB.Required({
        type: DB.ChildEntities(Enhancement),
      }),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
