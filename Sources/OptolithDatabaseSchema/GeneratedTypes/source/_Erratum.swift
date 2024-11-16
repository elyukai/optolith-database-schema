//
//  _Erratum.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// A list of errata for the entry in the specific language.
public typealias Errata = [Erratum]

public struct Erratum: EntitySubtype {
    /// The date when the change was confirmed and applied to the entry.
    public let date: String
    
    /// A description of what changed.
    public let description: NonEmptyMarkdown
}
