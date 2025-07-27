import FileDB

export const AffectedTargetCategories = TypeAlias(import.meta.url, {
  name: "AffectedTargetCategories",
  comment: `The target category – the kind of creature or object – the skill affects.

If no target categories are given, the skill applies to all target categories.`,
  type: () => Array(IncludeIdentifier(SpecificAffectedTargetCategory)),
})

@Embedded
public struct SpecificAffectedTargetCategory {
      id: Required({ type: IncludeIdentifier(SpecificAffectedTargetCategoryIdentifier) }),
      translations: NestedLocaleMap(
        Optional,
        "SpecificAffectedTargetCategoryTranslation",
        Object({
          note: Required({ type: String({ minLength: 1 }) }),
        })
      ),
  }

@ModelEnum
public enum SpecificAffectedTargetCategoryIdentifier {
    case Self
    case Zone
    case LiturgicalChantsAndCeremonies
    case Cantrips
    case Predefined(TargetCategoryIdentifier())
}
