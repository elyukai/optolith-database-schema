//
//  PublicationPrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct PublicationPrerequisite: EntitySubtype {
    public let id: Int
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
