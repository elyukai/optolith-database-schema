//
//  RulePrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct RulePrerequisite: EntitySubtype {
    public let id: ExtensionRuleIdentifier
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
