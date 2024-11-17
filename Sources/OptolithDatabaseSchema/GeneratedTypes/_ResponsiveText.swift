//
//  _ResponsiveText.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// A text from the source that can be also displayed in small areas using a compressed version.
public struct ResponsiveText: EntitySubtype {
    /// The full text from the source.
    public let full: NonEmptyString

    /// A compressed text for use in small areas (e.g. on character sheet).
    public let compressed: NonEmptyString

    public init(full: NonEmptyString, compressed: NonEmptyString) {
        self.full = full
        self.compressed = compressed
    }
}

/// A text from the source that can be also displayed in small areas using a compressed version. It is used as a replacement for a generated text while the generated text is still provided and should be used.
public struct ResponsiveTextReplace: EntitySubtype {
    /// The full replacement string. It must contain `$1`, which is going to be replaced with the generated string, so additional information can be provided without duplicating concrete numeric values.
    public let full: String

    /// A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated string, so additional information can be provided without duplicating concrete numeric values.
    public let compressed: String

    public init(full: String, compressed: String) {
        self.full = full
        self.compressed = compressed
    }
}

/// A text from the source that can be also displayed in small areas using a compressed version, if available.
public struct ResponsiveTextOptional: EntitySubtype {
    /// The full text from the source.
    public let full: NonEmptyString

    /// A compressed text for use in small areas (e.g. on character sheet). If this is not present, it should not appear in those areas.
    public let compressed: NonEmptyString?

    public init(full: NonEmptyString, compressed: NonEmptyString? = nil) {
        self.full = full
        self.compressed = compressed
    }
}
