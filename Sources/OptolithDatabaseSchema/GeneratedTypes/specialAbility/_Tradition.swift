//
//  _Tradition.swift
//  OptolithDatabaseSchema
//

public struct SpecialRule: EntitySubtype {
    /// An optional label that is displayed and placed before the actual text.
    public let label: NonEmptyString?

    /// The text of a special rule.
    public let text: NonEmptyString

    public init(label: NonEmptyString? = nil, text: NonEmptyString) {
        self.label = label
        self.text = text
    }
}
