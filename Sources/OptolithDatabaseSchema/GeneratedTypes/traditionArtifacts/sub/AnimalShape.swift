//
//  AnimalShape.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct AnimalShape: LocalizableEntity {
    /// The animal shape's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The animal shape's path.
    public let path: AnimalShapePathReference
    
    /// The animal shape's size.
    public let size: AnimalShapeSizeReference
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimalShapeTranslation>
}

public struct AnimalShapePathReference: EntitySubtype {
    /// The identifier of the animal shape's path.
    public let id: Int
}

public struct AnimalShapeSizeReference: EntitySubtype {
    /// The identifier of the animal shape's size.
    public let id: Int
}

public struct AnimalShapeTranslation: EntitySubtype {
    /// The animal shape name.
    public let name: NonEmptyString
}
