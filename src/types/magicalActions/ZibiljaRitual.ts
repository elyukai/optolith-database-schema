import {
  Entity,
  GenIncludeIdentifier,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { OldParameter, OneTimePerformanceParameters } from "../_ActivatableSkill.js"
import { CastingTime, SlowSkillNonModifiableCastingTime } from "../_ActivatableSkillCastingTime.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { AffectedTargetCategories } from "../_ActivatableSkillTargetCategory.js"
import { PropertyIdentifier } from "../_Identifier.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const ZibiljaRitual = Entity(import.meta.url, {
  name: "ZibiljaRitual",
  namePlural: "ZibiljaRituals",
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
        comment: "Measurable parameters of a zibilja ritual.",
        type: IncludeIdentifier(ZibiljaRitualPerformanceParameters),
      }),
      target: Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: IncludeIdentifier(AffectedTargetCategories),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier,
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "ZibiljaRitualTranslation",
        Object({
          name: Required({
            comment: "The zibilja ritual’s name.",
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
    }),
  displayName: {},
})

const ZibiljaRitualPerformanceParameters = TypeAlias(import.meta.url, {
  name: "ZibiljaRitualPerformanceParameters",
  type: () =>
    GenIncludeIdentifier(OneTimePerformanceParameters, [
      GenIncludeIdentifier(CastingTime, [IncludeIdentifier(SlowSkillNonModifiableCastingTime)]),
    ]),
})
