//
//  SexPrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Requires a specific sex.
public struct SexPrerequisite: EntitySubtype {
    public let id: BinarySex

    public let displayOption: DisplayOption?

    public init(id: BinarySex, displayOption: DisplayOption? = nil) {
        self.id = id
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
