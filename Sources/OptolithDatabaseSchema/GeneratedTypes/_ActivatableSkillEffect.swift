//
//  _ActivatableSkillEffect.swift
//  OptolithDatabaseSchema
//

/// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
public enum ActivatableSkillEffect: EntitySubtype {
    case plain(ActivatableSkillPlainEffect)
    case forEachQualityLevel(ActivatableSkillEffectForEachQualityLevel)
    case forEachTwoQualityLevels(ActivatableSkillEffectForEachTwoQualityLevels)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case plain = "plain"
        case forEachQualityLevel = "for_each_quality_level"
        case forEachTwoQualityLevels = "for_each_two_quality_levels"
    }

    private enum Discriminator: String, Decodable {
        case plain = "Plain"
        case forEachQualityLevel = "ForEachQualityLevel"
        case forEachTwoQualityLevels = "ForEachTwoQualityLevels"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .plain:
            self = .plain(try container.decode(ActivatableSkillPlainEffect.self, forKey: .plain))
        case .forEachQualityLevel:
            self = .forEachQualityLevel(try container.decode(ActivatableSkillEffectForEachQualityLevel.self, forKey: .forEachQualityLevel))
        case .forEachTwoQualityLevels:
            self = .forEachTwoQualityLevels(try container.decode(ActivatableSkillEffectForEachTwoQualityLevels.self, forKey: .forEachTwoQualityLevels))
        }
    }
}

public struct ActivatableSkillPlainEffect: EntitySubtype {
    /// The effect description.
    public let text: NonEmptyMarkdown

    public init(text: NonEmptyMarkdown) {
        self.text = text
    }
}

public struct ActivatableSkillEffectForEachQualityLevel: EntitySubtype {
    /// The effect description before the list of effects for each quality level.
    public let textBefore: NonEmptyMarkdown

    /// The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.
    public let qualityLevels: [NonEmptyMarkdown]

    /// The effect description after the list of effects for each quality level.
    public let textAfter: NonEmptyMarkdown?

    public init(textBefore: NonEmptyMarkdown, qualityLevels: [NonEmptyMarkdown], textAfter: NonEmptyMarkdown? = nil) {
        self.textBefore = textBefore
        self.qualityLevels = qualityLevels
        self.textAfter = textAfter
    }

    private enum CodingKeys: String, CodingKey {
        case textBefore = "text_before"
        case qualityLevels = "quality_levels"
        case textAfter = "text_after"
    }
}

public struct ActivatableSkillEffectForEachTwoQualityLevels: EntitySubtype {
    /// The effect description before the list of effects for each quality level.
    public let textBefore: NonEmptyMarkdown

    /// The list of effects for each two quality levels. The first element represents QL 1–2, the second element QL 3–4 and the third element QL 5–6.
    public let qualityLevels: [NonEmptyMarkdown]

    /// The effect description after the list of effects for each quality level.
    public let textAfter: NonEmptyMarkdown?

    public init(textBefore: NonEmptyMarkdown, qualityLevels: [NonEmptyMarkdown], textAfter: NonEmptyMarkdown? = nil) {
        self.textBefore = textBefore
        self.qualityLevels = qualityLevels
        self.textAfter = textAfter
    }

    private enum CodingKeys: String, CodingKey {
        case textBefore = "text_before"
        case qualityLevels = "quality_levels"
        case textAfter = "text_after"
    }
}
