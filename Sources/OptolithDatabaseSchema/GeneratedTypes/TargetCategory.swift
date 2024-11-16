//
//  TargetCategory.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct TargetCategory: LocalizableEntity {
    /// The target category's identifier. An unique, increasing integer.
    public let id: Int
    
    /// A superordinate target category, if present.
    public let parent: TargetCategoryParent?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<TargetCategoryTranslation>
}

/// A superordinate target category, if present.
public struct TargetCategoryParent: EntitySubtype {
    /// The identifier of the superordinate target category.
    public let id: TargetCategoryIdentifier
}

public struct TargetCategoryTranslation: EntitySubtype {
    /// The target category name.
    public let name: NonEmptyString
}
