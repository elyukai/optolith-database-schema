import FileDB

/// The target category – the kind of creature or object – the skill affects.
///
/// If no target categories are given, the skill applies to all target categories.
typealias AffectedTargetCategories = [SpecificAffectedTargetCategory]

@Embedded
public struct SpecificAffectedTargetCategory {
    let id: SpecificAffectedTargetCategoryIdentifier
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation {  // SpecificAffectedTargetCategoryTranslation
        @MinLength(1)
        let note: String
    }
}

@ModelEnum
public enum SpecificAffectedTargetCategoryIdentifier {
    case `self`
    case zone
    case liturgicalChantsAndCeremonies
    case cantrips
    case predefined(TargetCategoryIdentifierObject)
}
