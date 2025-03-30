//
//  TargetCategory.swift
//  OptolithDatabaseSchema
//

public struct TargetCategory: LocalizableEntity {
    /// The target category's identifier. An unique, increasing integer.
    public let id: Int

    /// A superordinate target category, if present.
    public let parent: TargetCategoryParent?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<TargetCategoryTranslation>

    public init(id: Int, parent: TargetCategoryParent? = nil, translations: LocaleMap<TargetCategoryTranslation>) {
        self.id = id
        self.parent = parent
        self.translations = translations
    }
}

/// A superordinate target category, if present.
public struct TargetCategoryParent: EntitySubtype {
    /// The identifier of the superordinate target category.
    public let id: TargetCategoryIdentifier

    public init(id: TargetCategoryIdentifier) {
        self.id = id
    }
}

public struct TargetCategoryTranslation: EntitySubtype {
    /// The target category name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
