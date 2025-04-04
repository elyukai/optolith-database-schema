//
//  PersonalityTrait.swift
//  OptolithDatabaseSchema
//

/// A personality trait describes character aspects of a person from a certain region. Higher trait levels only cover a part of the region covered by lower-level traits.
public struct PersonalityTrait: LocalizableEntity {
    /// The personality trait's identifier. An unique, increasing integer.
    public let id: Int

    /// The personality trait's level.
    public let level: Int

    public let prerequisites: PersonalityTraitPrerequisites?

    /// The lower-level personality trait(s) this trait can be combined with.
    public let combinationOptions: [PersonalityTraitReference]?

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PersonalityTraitTranslation>

    public init(id: Int, level: Int, prerequisites: PersonalityTraitPrerequisites? = nil, combinationOptions: [PersonalityTraitReference]? = nil, src: PublicationRefs, translations: LocaleMap<PersonalityTraitTranslation>) {
        self.id = id
        self.level = level
        self.prerequisites = prerequisites
        self.combinationOptions = combinationOptions
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case level = "level"
        case prerequisites = "prerequisites"
        case combinationOptions = "combination_options"
        case src = "src"
        case translations = "translations"
    }
}

public struct PersonalityTraitTranslation: EntitySubtype {
    /// The name of the personality trait.
    public let name: NonEmptyString

    /// The effects of the personality trait. They should be sorted like they are in the book.
    public let effects: [PersonalityTraitEffect]

    public let errata: Errata?

    public init(name: NonEmptyString, effects: [PersonalityTraitEffect], errata: Errata? = nil) {
        self.name = name
        self.effects = effects
        self.errata = errata
    }
}

public struct PersonalityTraitEffect: EntitySubtype {
    /// A label that is displayed and placed before the actual text.
    public let label: NonEmptyString?

    /// The effect text.
    public let text: NonEmptyString

    public init(label: NonEmptyString? = nil, text: NonEmptyString) {
        self.label = label
        self.text = text
    }
}
