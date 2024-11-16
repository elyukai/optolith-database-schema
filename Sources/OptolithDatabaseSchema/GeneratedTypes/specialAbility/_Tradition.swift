//
//  _Tradition.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct SpecialRule: EntitySubtype {
    /// An optional label that is displayed and placed before the actual
    /// text.
    public let label: NonEmptyString?
    
    /// The text of a special rule.
    public let text: NonEmptyString
}
