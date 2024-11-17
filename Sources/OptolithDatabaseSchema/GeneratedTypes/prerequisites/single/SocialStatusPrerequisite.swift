//
//  SocialStatusPrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Requires a minimum social status.
public struct SocialStatusPrerequisite: EntitySubtype {
    /// The minimum social status' identifier.
    public let id: SocialStatusIdentifier

    public let displayOption: DisplayOption?

    public init(id: SocialStatusIdentifier, displayOption: DisplayOption? = nil) {
        self.id = id
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
