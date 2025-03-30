//
//  Aspect.swift
//  OptolithDatabaseSchema
//

public struct Aspect: LocalizableEntity {
    /// The aspect's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AspectTranslation>

    public init(id: Int, translations: LocaleMap<AspectTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct AspectTranslation: EntitySubtype {
    /// The aspect name.
    public let name: NonEmptyString

    /// The aspect's name appended to the simple name (not `name_in_library`) of the special ability *Master of (Aspect)*.
    public let masterOfAspectSuffix: NonEmptyString?

    public init(name: NonEmptyString, masterOfAspectSuffix: NonEmptyString? = nil) {
        self.name = name
        self.masterOfAspectSuffix = masterOfAspectSuffix
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case masterOfAspectSuffix = "master_of_aspect_suffix"
    }
}
