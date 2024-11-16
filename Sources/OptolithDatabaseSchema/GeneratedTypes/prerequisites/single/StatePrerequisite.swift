//
//  StatePrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Requires a specific state or one of a specific set of states.
public struct StatePrerequisite: EntitySubtype {
    public let id: StateIdentifier
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
