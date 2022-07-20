import { NonEmptyMarkdown } from "./_NonEmptyString.js"

/**
 * The effect description may be either a plain text or a text that is divided
 * by a list of effects for each quality level. It may also be a list for each
 * two quality levels.
 */
export type Effect =
  | {
    tag: "Plain"
    plain: PlainEffect
  }
  | {
    tag: "ForEachQualityLevel"
    for_each_quality_level: EffectForEachQualityLevel
  }
  | {
    tag: "ForEachTwoQualityLevels"
    for_each_two_quality_levels: EffectForEachTwoQualityLevels
  }

export type PlainEffect = {
  /**
   * The effect description.
   */
  text: NonEmptyMarkdown
}

export type EffectForEachQualityLevel = {
  /**
   * The effect description before the list of effects for each quality
   * level.
   */
  text_before: NonEmptyMarkdown

  /**
   * The list of effects for each quality level. The first element
   * represents QL 1, the second element QL 2, and so on.
   */
  quality_levels: [
    NonEmptyMarkdown,
    NonEmptyMarkdown,
    NonEmptyMarkdown,
    NonEmptyMarkdown,
    NonEmptyMarkdown,
    NonEmptyMarkdown,
  ]

  /**
   * The effect description after the list of effects for each quality
   * level.
   */
  text_after?: NonEmptyMarkdown
}

export type EffectForEachTwoQualityLevels = {
  /**
   * The effect description before the list of effects for each quality
   * level.
   */
  text_before: NonEmptyMarkdown

  /**
   * The list of effects for each two quality levels. The first element
   * represents QL 1–2, the second element QL 3–4 and the third element QL
   * 5–6.
   */
  quality_levels: [
    NonEmptyMarkdown,
    NonEmptyMarkdown,
    NonEmptyMarkdown,
  ]

  /**
   * The effect description after the list of effects for each quality
   * level.
   */
  text_after?: NonEmptyMarkdown
}
