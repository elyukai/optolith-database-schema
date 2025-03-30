//
//  SkillGroup.swift
//  OptolithDatabaseSchema
//

public struct SkillGroup: LocalizableEntity {
    /// The skill group's identifier. An unique, increasing integer.
    public let id: Int

    /// The skill group check's attributes.
    public let check: SkillCheck

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SkillGroupTranslation>

    public init(id: Int, check: SkillCheck, translations: LocaleMap<SkillGroupTranslation>) {
        self.id = id
        self.check = check
        self.translations = translations
    }
}

public struct SkillGroupTranslation: EntitySubtype {
    /// The skill group's name.
    public let name: NonEmptyString

    /// The skill group's long name.
    public let longName: NonEmptyString

    public init(name: NonEmptyString, longName: NonEmptyString) {
        self.name = name
        self.longName = longName
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case longName = "long_name"
    }
}
