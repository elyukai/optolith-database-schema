//
//  PactPrerequisite.swift
//  OptolithDatabaseSchema
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

    public init(category: PactCategoryReference, domainId: [PactDomainReference]? = nil, level: Int? = nil, displayOption: DisplayOption? = nil) {
        self.category = category
        self.domainId = domainId
        self.level = level
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case category = "category"
        case domainId = "domain_id"
        case level = "level"
        case displayOption = "display_option"
    }
}
