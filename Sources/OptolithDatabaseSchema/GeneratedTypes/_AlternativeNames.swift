//
//  _AlternativeNames.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct AlternativeName: EntitySubtype {
    /// An alternative name of the disease.
    public let name: NonEmptyString
    
    /// The region where this alternative name is used.
    public let region: NonEmptyString?

    public init(name: NonEmptyString, region: NonEmptyString? = nil) {
        self.name = name
        self.region = region
    }
}
