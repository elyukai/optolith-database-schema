//
//  AnimalShape.swift
//  OptolithDatabaseSchema
//

public struct AnimalShape: LocalizableEntity {
    /// The animal shape's identifier. An unique, increasing integer.
    public let id: Int

    /// The animal shape's path.
    public let path: AnimalShapePathReference

    /// The animal shape's size.
    public let size: AnimalShapeSizeReference

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimalShapeTranslation>

    public init(id: Int, path: AnimalShapePathReference, size: AnimalShapeSizeReference, translations: LocaleMap<AnimalShapeTranslation>) {
        self.id = id
        self.path = path
        self.size = size
        self.translations = translations
    }
}

public struct AnimalShapePathReference: EntitySubtype {
    /// The identifier of the animal shape's path.
    public let id: Int

    public init(id: Int) {
        self.id = id
    }
}

public struct AnimalShapeSizeReference: EntitySubtype {
    /// The identifier of the animal shape's size.
    public let id: Int

    public init(id: Int) {
        self.id = id
    }
}

public struct AnimalShapeTranslation: EntitySubtype {
    /// The animal shape name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
