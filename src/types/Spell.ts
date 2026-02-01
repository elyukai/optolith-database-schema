import {
  ChildEntities,
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
import { Enhancement } from "./_Enhancements.js"
import { PropertyIdentifier } from "./_Identifier.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { SpellworkPrerequisites } from "./_Prerequisite.js"
import { SkillCheck, SkillCheckPenalty } from "./_SkillCheck.js"
import { reversalis, SpellworkTraditions } from "./_Spellwork.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Spell = Entity(import.meta.url, {
  name: "Spell",
  namePlural: "Spells",
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
        comment: "Measurable parameters of a spell.",
        type: IncludeIdentifier(FastPerformanceParameters),
      }),
      target: Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: IncludeIdentifier(AffectedTargetCategories),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      traditions: Required({
        comment:
          "The tradition(s) the spell is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.",
        type: IncludeIdentifier(SpellworkTraditions),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      prerequisites: Optional({
        comment: "The prerequisites for the spell.",
        type: IncludeIdentifier(SpellworkPrerequisites),
      }),
      reversalis,
      src,
      translations: NestedTranslationMap(
        Required,
        "Spell",
        Object({
          name: Required({
            comment: "The spell’s name.",
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
        }),
      ),
      enhancements: Required({
        type: ChildEntities(Enhancement),
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
