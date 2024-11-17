//
//  RulePrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct RulePrerequisite: EntitySubtype {
    public let id: ExtensionRuleIdentifier

    public let displayOption: DisplayOption?

    public init(id: ExtensionRuleIdentifier, displayOption: DisplayOption? = nil) {
        self.id = id
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
