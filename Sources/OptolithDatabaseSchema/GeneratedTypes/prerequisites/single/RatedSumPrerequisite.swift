//
//  RatedSumPrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct RatedSumPrerequisite: EntitySubtype {
    /// The minimum required sum of the targets’ ratings.
    public let sum: Int

    /// The targets that are included in calculating the sum.
    public let targets: [SkillIdentifier]

    public let displayOption: DisplayOption?

    public init(sum: Int, targets: [SkillIdentifier], displayOption: DisplayOption? = nil) {
        self.sum = sum
        self.targets = targets
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case sum = "sum"
        case targets = "targets"
        case displayOption = "display_option"
    }
}
