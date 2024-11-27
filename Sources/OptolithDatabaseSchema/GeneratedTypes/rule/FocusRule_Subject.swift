//
//  FocusRule_Subject.swift
//  OptolithDatabaseSchema
//

/// Subjects or Subject Areas are the categories of Focus Rules.
public struct Subject: LocalizableEntity {
    /// The subject's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SubjectTranslation>

    public init(id: Int, translations: LocaleMap<SubjectTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct SubjectTranslation: EntitySubtype {
    /// The subject.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
