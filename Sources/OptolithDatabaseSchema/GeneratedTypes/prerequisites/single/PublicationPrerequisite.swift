//
//  PublicationPrerequisite.swift
//  OptolithDatabaseSchema
//

public struct PublicationPrerequisite: EntitySubtype {
    public let id: Int

    public let displayOption: DisplayOption?

    public init(id: Int, displayOption: DisplayOption? = nil) {
        self.id = id
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
