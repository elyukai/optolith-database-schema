//
//  PactPrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Requires a specific pact.
public struct PactPrerequisite: EntitySubtype {
    /// The required pact category.
    public let category: PactCategoryReference
    
    /// The required domain(s).
    public let domainId: [PactDomainReference]?
    
    /// The required pact level.
    public let level: Int?
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case category = "category"
        case domainId = "domain_id"
        case level = "level"
        case displayOption = "display_option"
    }
}
