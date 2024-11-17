//
//  AnimalShapeSize.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct AnimalShapeSize: LocalizableEntity {
    /// The animal shape's identifier. An unique, increasing integer.
    public let id: Int

    /// The volume points the animal shape needs.
    public let volume: Int

    /// The adventure point value of the animal shape.
    public let apValue: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimalShapeSizeTranslation>

    public init(id: Int, volume: Int, apValue: Int, translations: LocaleMap<AnimalShapeSizeTranslation>) {
        self.id = id
        self.volume = volume
        self.apValue = apValue
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case volume = "volume"
        case apValue = "ap_value"
        case translations = "translations"
    }
}

public struct AnimalShapeSizeTranslation: EntitySubtype {
    /// The animal shape size name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
