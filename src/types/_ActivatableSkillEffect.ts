import { NonEmptyMarkdown } from "./_NonEmptyString.js"

/**
 * The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
 */
export type ActivatableSkillEffect =
  | {
      tag: "Plain"
      plain: ActivatableSkillPlainEffect
    }
  | {
      tag: "ForEachQualityLevel"
      for_each_quality_level: ActivatableSkillEffectForEachQualityLevel
    }
  | {
      tag: "ForEachTwoQualityLevels"
      for_each_two_quality_levels: ActivatableSkillEffectForEachTwoQualityLevels
    }

export type ActivatableSkillPlainEffect = {
  /**
   * The effect description.
   */
  text: NonEmptyMarkdown
}

export type ActivatableSkillEffectForEachQualityLevel = {
  /**
   * The effect description before the list of effects for each quality level.
   */
  text_before: NonEmptyMarkdown

  /**
   * The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.
   * @minLength 6
   * @maxLength 6
   */
  quality_levels: NonEmptyMarkdown[]

  /**
   * The effect description after the list of effects for each quality level.
   */
  text_after?: NonEmptyMarkdown
}

export type ActivatableSkillEffectForEachTwoQualityLevels = {
  /**
   * The effect description before the list of effects for each quality level.
   */
  text_before: NonEmptyMarkdown

  /**
   * The list of effects for each two quality levels. The first element represents QL 1–2, the second element QL 3–4 and the third element QL 5–6.
   * @minLength 3
   * @maxLength 3
   */
  quality_levels: NonEmptyMarkdown[]

  /**
   * The effect description after the list of effects for each quality level.
   */
  text_after?: NonEmptyMarkdown
}
