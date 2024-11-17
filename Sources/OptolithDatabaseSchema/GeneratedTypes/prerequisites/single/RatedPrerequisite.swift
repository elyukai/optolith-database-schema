//
//  RatedPrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct RatedPrerequisite: EntitySubtype {
    /// The rated entry's identifier.
    public let id: RatedIdentifier
    
    /// The required minimum value.
    public let value: Int
    
    public let displayOption: DisplayOption?

    public init(id: RatedIdentifier, value: Int, displayOption: DisplayOption? = nil) {
        self.id = id
        self.value = value
        self.displayOption = displayOption
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case value = "value"
        case displayOption = "display_option"
    }
}
