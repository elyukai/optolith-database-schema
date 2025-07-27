import FileDB

@Model
public struct PactGift {
      levels,
      select_options,
      maximum,
  /// This pact gift gives permanent levels of the condition *Demonic Consumption*.
  @Relationship(PactGiftPermanentDemonicConsumption)
  let permanent_demonic_consumption: PactGiftPermanentDemonicConsumption.ID?
  /// This pact gift has direct influence on the existence of other entries. It may add or remove entries.
  let automatic_entries: Array(IncludeIdentifier(AutomaticEntry), { minItems: 1 })?
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PactGiftTranslation
          name,
          name_in_library,
          rules,

        let errata: Errata?
    }
}

@ModelEnum
public enum PactGiftPermanentDemonicConsumption {
    case Fixed(IncludeIdentifier(FixedPactGiftPermanentDemonicConsumption))
    case PerLevel(IncludeIdentifier(PactGiftPermanentDemonicConsumptionPerLevel))
}

@Embedded
public struct FixedPactGiftPermanentDemonicConsumption {

  /// The levels of *Demonic Consumption* the pact gift causes.
  let levels: Integer({ minimum: 1, maximum: 4 })
  }

@Embedded
public struct PactGiftPermanentDemonicConsumptionPerLevel {

  /// The levels of *Demonic Consumption* the pact gift causes per activated level of the pact gift.
  let levels: Integer({ minimum: 1, maximum: 4 })
  }

@Embedded
public struct AutomaticEntry {

  /// What type of action is applied to the target entry?
  @Relationship(AutomaticEntryAction)
  let action: AutomaticEntryAction.ID

  /// If an entry is added or removed, does is cost or grant adventure points or is it free of charge?
  let apply_ap_value: Boolean()

  /// The entry that is to be added or removed. It can be a fixed entry or a selection where the player must choose one entry.
  @Relationship(AutomaticEntryTarget)
  let target: AutomaticEntryTarget.ID
  }

@ModelEnum
public enum AutomaticEntryAction {
    case Add
    case Remove
}

@ModelEnum
public enum AutomaticEntryTarget {
    case Selection(IncludeIdentifier(AutomaticEntryTargetSelection))
    case Fixed(IncludeIdentifier(FixedAutomaticEntryTarget))
}

@Embedded
public struct AutomaticEntryTargetSelection {
      list: Required({
        type: IncludeIdentifier(AutomaticEntryTargetSelectionList),
      }),
  }

@ModelEnum
public enum AutomaticEntryTargetSelectionList {
    case MagicalTraditions
    case MagicalDilettanteTraditions
}

@Embedded
public struct FixedAutomaticEntryTarget {
      is: Required({
        type: IncludeIdentifier(ActivatableIdentifier),
      }),
  }
