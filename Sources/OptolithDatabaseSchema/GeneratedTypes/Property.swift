//
//  Property.swift
//  OptolithDatabaseSchema
//

public struct Property: LocalizableEntity {
    /// The property's identifier. An unique, increasing integer.
    public let id: Int

    /// The property check's attributes. Only the properties from the Core Rules have defined property checks.
    public let check: SkillCheck?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PropertyTranslation>

    public init(id: Int, check: SkillCheck? = nil, translations: LocaleMap<PropertyTranslation>) {
        self.id = id
        self.check = check
        self.translations = translations
    }
}

public struct PropertyTranslation: EntitySubtype {
    /// The property's name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
