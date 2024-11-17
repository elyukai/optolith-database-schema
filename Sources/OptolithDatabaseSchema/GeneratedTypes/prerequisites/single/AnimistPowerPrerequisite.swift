//
//  AnimistPowerPrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Requires a specific animist power to be on a minimum value.
public struct AnimistPowerPrerequisite: EntitySubtype {
    /// The animist power's identifier.
    public let id: AnimistPowerIdentifier

    /// The level to which the minimum value applies.
    public let level: Int?

    /// The required minimum value.
    public let value: Int

    public let displayOption: DisplayOption?

    public init(id: AnimistPowerIdentifier, level: Int? = nil, value: Int, displayOption: DisplayOption? = nil) {
        self.id = id
        self.level = level
        self.value = value
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case level = "level"
        case value = "value"
        case displayOption = "display_option"
    }
}
