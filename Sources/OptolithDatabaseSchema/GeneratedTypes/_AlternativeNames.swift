//
//  _AlternativeNames.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct AlternativeName: EntitySubtype {
    /// An alternative name of the disease.
    public let name: NonEmptyString
    
    /// The region where this alternative name is used.
    public let region: NonEmptyString?
}
