import {
  Array,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"

export const ActivatableSkillEffect = Enum(import.meta.url, {
  name: "ActivatableSkillEffect",
  comment:
    "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
  values: () => ({
    Plain: EnumCase({
      type: IncludeIdentifier(ActivatableSkillPlainEffect),
    }),
    ForEachQualityLevel: EnumCase({
      type: IncludeIdentifier(ActivatableSkillEffectForEachQualityLevel),
    }),
    ForEachTwoQualityLevels: EnumCase({
      type: IncludeIdentifier(ActivatableSkillEffectForEachTwoQualityLevels),
    }),
  }),
})

const ActivatableSkillPlainEffect = TypeAlias(import.meta.url, {
  name: "ActivatableSkillPlainEffect",
  type: () =>
    Object({
      text: Required({
        comment: "The effect description.",
        type: String({ minLength: 1, isMarkdown: true }),
      }),
    }),
})

const ActivatableSkillEffectForEachQualityLevel = TypeAlias(import.meta.url, {
  name: "ActivatableSkillEffectForEachQualityLevel",
  type: () =>
    Object({
      text_before: Required({
        comment: "The effect description before the list of effects for each quality level.",
        type: String({ minLength: 1, isMarkdown: true }),
      }),
      quality_levels: Required({
        comment:
          "The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.",
        type: Array(String({ minLength: 1, isMarkdown: true }), {
          minItems: 6,
          maxItems: 6,
        }),
      }),
      text_after: Optional({
        comment: "The effect description after the list of effects for each quality level.",
        type: String({ minLength: 1, isMarkdown: true }),
      }),
    }),
})

const ActivatableSkillEffectForEachTwoQualityLevels = TypeAlias(import.meta.url, {
  name: "ActivatableSkillEffectForEachTwoQualityLevels",
  type: () =>
    Object({
      text_before: Required({
        comment: "The effect description before the list of effects for each quality level.",
        type: String({ minLength: 1, isMarkdown: true }),
      }),
      quality_levels: Required({
        comment:
          "The list of effects for each two quality levels. The first element represents QL 1–2, the second element QL 3–4 and the third element QL 5–6.",
        type: Array(String({ minLength: 1, isMarkdown: true }), {
          minItems: 3,
          maxItems: 3,
        }),
      }),
      text_after: Optional({
        comment: "The effect description after the list of effects for each quality level.",
        type: String({ minLength: 1, isMarkdown: true }),
      }),
    }),
})
