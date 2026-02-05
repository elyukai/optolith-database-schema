import * as DB from "tsondb/schema/dsl"

export const ActivatableSkillEffect = DB.Enum(import.meta.url, {
  name: "ActivatableSkillEffect",
  comment:
    "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
  values: () => ({
    Plain: DB.EnumCase({
      type: DB.IncludeIdentifier(ActivatableSkillPlainEffect),
    }),
    ForEachQualityLevel: DB.EnumCase({
      type: DB.IncludeIdentifier(ActivatableSkillEffectForEachQualityLevel),
    }),
    ForEachTwoQualityLevels: DB.EnumCase({
      type: DB.IncludeIdentifier(ActivatableSkillEffectForEachTwoQualityLevels),
    }),
  }),
})

const ActivatableSkillPlainEffect = DB.TypeAlias(import.meta.url, {
  name: "ActivatableSkillPlainEffect",
  type: () =>
    DB.Object({
      text: DB.Required({
        comment: "The effect description.",
        type: DB.String({ minLength: 1, isMarkdown: true }),
      }),
    }),
})

const ActivatableSkillEffectForEachQualityLevel = DB.TypeAlias(import.meta.url, {
  name: "ActivatableSkillEffectForEachQualityLevel",
  type: () =>
    DB.Object({
      text_before: DB.Required({
        comment: "The effect description before the list of effects for each quality level.",
        type: DB.String({ minLength: 1, isMarkdown: true }),
      }),
      quality_levels: DB.Required({
        comment:
          "The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.",
        type: DB.Array(DB.String({ minLength: 1, isMarkdown: true }), {
          minItems: 6,
          maxItems: 6,
        }),
      }),
      text_after: DB.Optional({
        comment: "The effect description after the list of effects for each quality level.",
        type: DB.String({ minLength: 1, isMarkdown: true }),
      }),
    }),
})

const ActivatableSkillEffectForEachTwoQualityLevels = DB.TypeAlias(import.meta.url, {
  name: "ActivatableSkillEffectForEachTwoQualityLevels",
  type: () =>
    DB.Object({
      text_before: DB.Required({
        comment: "The effect description before the list of effects for each quality level.",
        type: DB.String({ minLength: 1, isMarkdown: true }),
      }),
      quality_levels: DB.Required({
        comment:
          "The list of effects for each two quality levels. The first element represents QL 1–2, the second element QL 3–4 and the third element QL 5–6.",
        type: DB.Array(DB.String({ minLength: 1, isMarkdown: true }), {
          minItems: 3,
          maxItems: 3,
        }),
      }),
      text_after: DB.Optional({
        comment: "The effect description after the list of effects for each quality level.",
        type: DB.String({ minLength: 1, isMarkdown: true }),
      }),
    }),
})
