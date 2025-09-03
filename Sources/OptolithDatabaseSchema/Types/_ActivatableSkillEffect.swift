import FileDB

/// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
@ModelEnum
public enum ActivatableSkillEffect {
    case plain(ActivatableSkillPlainEffect)
    case forEachQualityLevel(ActivatableSkillEffectForEachQualityLevel)
    case forEachTwoQualityLevels(ActivatableSkillEffectForEachTwoQualityLevels)
}

@Embedded
public struct ActivatableSkillPlainEffect {
    /// The effect description.
    @MinLength(1)
    @Markdown
    let text: String
}

@Embedded
public struct ActivatableSkillEffectForEachQualityLevel {
    /// The effect description before the list of effects for each quality level.
    @MinLength(1)
    @Markdown
    let text_before: String

    /// The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.
    @MinItems(6)
    @MaxItems(6)
    let quality_levels: [ActivatableSkillEffectPerQualityLevel]?

    /// The effect description after the list of effects for each quality level.
    @MinLength(1)
    @Markdown
    let text_after: String?
}

@Embedded
public struct ActivatableSkillEffectForEachTwoQualityLevels {
    /// The effect description before the list of effects for each quality level.
    @MinLength(1)
    @Markdown
    let text_before: String

    /// The list of effects for each two quality levels. The first element represents QL 1–2, the second element QL 3–4 and the third element QL 5–6.
    @MinItems(3)
    @MaxItems(3)
    let quality_levels: [ActivatableSkillEffectPerQualityLevel]?

    /// The effect description after the list of effects for each quality level.
    @MinLength(1)
    @Markdown
    let text_after: String?
}

@TypeAlias
public struct ActivatableSkillEffectPerQualityLevel {
    /// The effect description for a single quality level.
    @MinLength(1)
    @Markdown
    let text: String
}
