/**
 * This file defines some shared types for different diseases and poisons.
 */

import {
  Array,
  Enum,
  EnumCase,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Param,
  Required,
  String,
  TypeAlias,
  TypeArgument,
} from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"
import { AlternativeName } from "./_AlternativeNames.js"
import { Errata } from "./source/_Erratum.js"

export const level = Required({
  comment: "The disease’s level.",
  type: Integer({ minimum: 1 }),
})

export const Resistance = Enum(import.meta.url, {
  name: "Resistance",
  comment:
    "Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty.",
  values: () => ({
    Spirit: EnumCase({ type: null }),
    Toughness: EnumCase({ type: null }),
    LowerOfSpiritAndToughness: EnumCase({ type: null }),
  }),
})

export const resistance = Required({
  comment:
    "Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty.",
  type: IncludeIdentifier(Resistance),
})

export const Cause = TypeAlias(import.meta.url, {
  name: "Cause",
  comment:
    "What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection.",
  type: () =>
    Object({
      chance: Optional({
        comment:
          "The chance to get infected by this cause, in percent. Some causes do not have a specific chance.",
        type: Integer({ minimum: 5, multipleOf: 5, maximum: 100 }),
      }),
      translations: NestedLocaleMap(
        Required,
        "CauseTranslation",
        Object({
          name: Required({
            comment: "The cause’s name.",
            type: String({ minLength: 1 }),
          }),
          chance: Optional({
            comment:
              "The chance to get infected by this cause. If present for this language, this overrides the universal `chance` field; they cannot be used at the same time.",
            type: String({ minLength: 1 }),
          }),
          note: Optional({
            comment: "An additional note about this cause.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
})

export const cause = Required({
  comment:
    "What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection.",
  type: Array(IncludeIdentifier(Cause), { minItems: 1 }),
})

export const Reduceable = GenTypeAlias(import.meta.url, {
  name: "Reduceable",
  comment: `An effect or other parameter that may be reduced by a failed disease check for lessening or a degraded poison.

This streamlines the wording for diseases and poison by using a unified wording for *lessened* (disease) and *degraded* (poison).`,
  parameters: [Param("Content")],
  type: Content =>
    Object({
      default: Required({
        comment: "The default value. In the source, it's the text before the slash.",
        type: TypeArgument(Content),
      }),
      reduced: Optional({
        comment:
          "The reduced value. In the source, it's the text after the slash. Some entries may not have a reduced value.",
        type: TypeArgument(Content),
      }),
    }),
})

export const DiseaseTranslation = Object({
  name: Required({
    comment: "The disease’s name.",
    type: String({ minLength: 1 }),
  }),
  alternative_names: Optional({
    comment: "A list of alternative names.",
    type: Array(IncludeIdentifier(AlternativeName), { minItems: 1 }),
  }),
  progress: Required({
    comment: "The disease’s progress, in detail.",
    type: String({ minLength: 1, isMarkdown: true }),
  }),
  incubation_time: Required({
    comment: "After infection, how much time passes before symptoms appear?",
    type: String({ minLength: 1 }),
  }),
  damage: Required({
    comment:
      "The damage caused by the disease. If the disease check fails, apply the lessened effects.",
    type: GenIncludeIdentifier(Reduceable, [String({ minLength: 1, isMarkdown: true })]),
  }),
  duration: Required({
    comment: "The duration of the disease. If the disease check fails, use the lessened duration.",
    type: GenIncludeIdentifier(Reduceable, [String({ minLength: 1, isMarkdown: true })]),
  }),
  special: Optional({
    comment: "Special information about the disease.",
    type: String({ minLength: 1, isMarkdown: true }),
  }),
  treatment: Required({
    comment: "Methods known to lessen the disease’s progress or relieve symptoms.",
    type: String({ minLength: 1, isMarkdown: true }),
  }),
  cure: Required({
    comment: "Known remedies for the disease.",
    type: String({ minLength: 1, isMarkdown: true }),
  }),
  errata: Optional({
    type: IncludeIdentifier(Errata),
  }),
})
