//
//  PrimaryAttributePrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct PrimaryAttributePrerequisite: EntitySubtype {
    /// Is the required primary attribute for spellcasters or blessed ones?
    public let category: PrimaryAttributeCategory

    /// Required value of the attribute
    public let value: Int

    public let displayOption: DisplayOption?

    public init(category: PrimaryAttributeCategory, value: Int, displayOption: DisplayOption? = nil) {
        self.category = category
        self.value = value
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case category = "category"
        case value = "value"
        case displayOption = "display_option"
    }
}

public enum PrimaryAttributeCategory: String, EntitySubtype {
    case blessed = "Blessed"
    case magical = "Magical"
}
