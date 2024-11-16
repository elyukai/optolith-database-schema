//
//  RatedSumPrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct RatedSumPrerequisite: EntitySubtype {
    /// The minimum required sum of the targets’ ratings.
    public let sum: Int
    
    /// The targets that are included in calculating the sum.
    public let targets: [SkillIdentifier]
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case sum = "sum"
        case targets = "targets"
        case displayOption = "display_option"
    }
}
