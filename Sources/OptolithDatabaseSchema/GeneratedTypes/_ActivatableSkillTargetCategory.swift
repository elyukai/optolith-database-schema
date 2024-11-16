//
//  _ActivatableSkillTargetCategory.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// The target category – the kind of creature or object – the skill affects.
/// 
/// If no target categories are given, the skill applies to all target categories.
public typealias AffectedTargetCategories = [SpecificAffectedTargetCategory]

public struct SpecificAffectedTargetCategory: EntitySubtype {
    public let id: SpecificAffectedTargetCategoryIdentifier
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SpecificAffectedTargetCategoryTranslation>?
}

public struct SpecificAffectedTargetCategoryTranslation: EntitySubtype {
    /// A note, appended to the generated string in parenthesis.
    public let note: NonEmptyString
}

@DiscriminatedEnum
public enum SpecificAffectedTargetCategoryIdentifier: EntitySubtype {
    case `self`
    case zone
    case liturgicalChantsAndCeremonies
    case cantrips
    case predefined(TargetCategoryReference)
}
