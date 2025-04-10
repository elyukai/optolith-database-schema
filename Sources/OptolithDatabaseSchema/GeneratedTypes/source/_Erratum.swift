//
//  _Erratum.swift
//  OptolithDatabaseSchema
//

/// A list of errata for the entry in the specific language.
public typealias Errata = [Erratum]

public struct Erratum: EntitySubtype {
    /// The date when the change was confirmed and applied to the entry.
    public let date: String

    /// A description of what changed.
    public let description: NonEmptyMarkdown

    public init(date: String, description: NonEmptyMarkdown) {
        self.date = date
        self.description = description
    }
}
