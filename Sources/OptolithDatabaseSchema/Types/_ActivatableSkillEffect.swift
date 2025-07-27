import FileDB

/// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
@ModelEnum
public enum ActivatableSkillEffect {
    case Plain(IncludeIdentifier(ActivatableSkillPlainEffect))
    case ForEachQualityLevel(IncludeIdentifier(ActivatableSkillEffectForEachQualityLevel))
    case ForEachTwoQualityLevels(IncludeIdentifier(ActivatableSkillEffectForEachTwoQualityLevels))
}

@Embedded
public struct ActivatableSkillPlainEffect {

  /// The effect description.
  let text: String({ minLength: 1, isMarkdown: true })
  }

@Embedded
public struct ActivatableSkillEffectForEachQualityLevel {

  /// The effect description before the list of effects for each quality level.
  let text_before: String({ minLength: 1, isMarkdown: true })
      quality_levels: Required({
        comment:
          "The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.",
        type: Array(String({ minLength: 1, isMarkdown: true }), {
          minItems: 6,
          maxItems: 6,
        }),
      }),
  /// The effect description after the list of effects for each quality level.
  let text_after: String({ minLength: 1, isMarkdown: true })?
  }

@Embedded
public struct ActivatableSkillEffectForEachTwoQualityLevels {

  /// The effect description before the list of effects for each quality level.
  let text_before: String({ minLength: 1, isMarkdown: true })
      quality_levels: Required({
        comment:
          "The list of effects for each two quality levels. The first element represents QL 1–2, the second element QL 3–4 and the third element QL 5–6.",
        type: Array(String({ minLength: 1, isMarkdown: true }), {
          minItems: 3,
          maxItems: 3,
        }),
      }),
  /// The effect description after the list of effects for each quality level.
  let text_after: String({ minLength: 1, isMarkdown: true })?
  }
