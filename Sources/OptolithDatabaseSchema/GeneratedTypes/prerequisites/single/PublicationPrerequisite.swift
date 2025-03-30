//
//  PublicationPrerequisite.swift
//  OptolithDatabaseSchema
//

public struct PublicationPrerequisite: EntitySubtype {
    public let id: PublicationIdentifier

    public let displayOption: DisplayOption?

    public init(id: PublicationIdentifier, displayOption: DisplayOption? = nil) {
        self.id = id
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
