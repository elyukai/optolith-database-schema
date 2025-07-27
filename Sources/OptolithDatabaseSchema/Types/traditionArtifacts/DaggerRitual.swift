import FileDB

@Model
public struct DaggerRitual {
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      volume,
      cost: Optional({
        type: IncludeIdentifier(DaggerRitualCost),
      }),
      property,
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // DaggerRitualTranslation
          name,
          name_in_library,
          effect,

        let errata: Errata?
    }
}

@ModelEnum
public enum DaggerRitualCost {
    case ArcaneEnergyCost(IncludeIdentifier(DaggerRitualArcaneEnergyCost))
    case BindingCost(IncludeIdentifier(BindingCost))
}

@Embedded
public struct DaggerRitualArcaneEnergyCost {
      ae_cost: Required({
        type: IncludeIdentifier(ArcaneEnergyCost),
      }),
      lp_cost: Optional({
        type: IncludeIdentifier(LifePointsCost),
      }),
  }

@ModelEnum
public enum LifePointsCost {
    case Fixed(IncludeIdentifier(FixedLifePointsCost))
}

@Embedded
public struct FixedLifePointsCost {

  /// The LP cost value.
  let value: Integer({ minimum: 1 })
  }
