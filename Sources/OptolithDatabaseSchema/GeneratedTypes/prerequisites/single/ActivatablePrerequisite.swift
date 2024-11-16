//
//  ActivatablePrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Requires a specific advantage, disadvantage or special ability.
public struct ActivatablePrerequisite: EntitySubtype {
    /// The activatable entry's identifier.
    public let id: ActivatableIdentifier
    
    /// If the required entry should be required to be active or inactive.
    public let active: Bool
    
    /// The required minimum level of the entry.
    public let level: Int?
    
    /// Required select options. Order is important. Typically, you only need the
    /// first array index, though.
    public let options: [RequirableSelectOptionIdentifier]?
    
    public let displayOption: DisplayOption?
    
    public let when: Preconditions?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case active = "active"
        case level = "level"
        case options = "options"
        case displayOption = "display_option"
        case when = "when"
    }
}
