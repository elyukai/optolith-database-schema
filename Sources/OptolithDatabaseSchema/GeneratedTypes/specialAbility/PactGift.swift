//
//  PactGift.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct PactGift: LocalizableEntity {
    public let id: Id
    
    public let levels: Levels?
    
    public let selectOptions: SelectOptions?
    
    public let maximum: Maximum?
    
    public let permanentDemonicConsumption: PactGiftPermanentDemonicConsumption?
    
    /// This pact gift has direct influence on the existence of other entries. It may add or remove entries.
    public let automaticEntries: [AutomaticEntry]?
    
    public let prerequisites: GeneralPrerequisites?
    
    public let apValue: AdventurePointsValue
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PactGiftTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case maximum = "maximum"
        case permanentDemonicConsumption = "permanent_demonic_consumption"
        case automaticEntries = "automatic_entries"
        case prerequisites = "prerequisites"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

@DiscriminatedEnum
public enum PactGiftPermanentDemonicConsumption: EntitySubtype {
    case fixed(FixedPactGiftPermanentDemonicConsumption)
    case perLevel(PactGiftPermanentDemonicConsumptionPerLevel)
}

public struct FixedPactGiftPermanentDemonicConsumption: EntitySubtype {
    /// The levels of *Demonic Consumption* the pact gift causes.
    public let levels: Int
}

public struct PactGiftPermanentDemonicConsumptionPerLevel: EntitySubtype {
    /// The levels of *Demonic Consumption* the pact gift causes per activated level of the pact gift.
    public let levels: Int
}

public struct AutomaticEntry: EntitySubtype {
    /// What type of action is applied to the target entry?
    public let action: AutomaticEntryAction
    
    /// If an entry is added or removed, does is cost or grant adventure points or is it free of charge?
    public let applyApValue: Bool
    
    /// The entry that is to be added or removed. It can be a fixed entry or a selection where the player must choose one entry.
    public let target: AutomaticEntryTarget    
    
    private enum CodingKeys: String, CodingKey {
        case action = "action"
        case applyApValue = "apply_ap_value"
        case target = "target"
    }
}

public enum AutomaticEntryAction: String, EntitySubtype {
    case add = "Add"
    case remove = "Remove"
}

@DiscriminatedEnum
public enum AutomaticEntryTarget: EntitySubtype {
    case selection(AutomaticEntryTargetSelection)
    case fixed(FixedAutomaticEntryTarget)
}

public struct AutomaticEntryTargetSelection: EntitySubtype {
    public let list: AutomaticEntryTargetSelectionList
}

public enum AutomaticEntryTargetSelectionList: String, EntitySubtype {
    case magicalTraditions = "MagicalTraditions"
    case magicalDilettanteTraditions = "MagicalDilettanteTraditions"
}

public struct FixedAutomaticEntryTarget: EntitySubtype {
    public let id: ActivatableIdentifier
}

public struct PactGiftTranslation: EntitySubtype {
    public let name: Name
    
    public let nameInLibrary: NameInLibrary?
    
    public let effect: Effect
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case effect = "effect"
        case errata = "errata"
    }
}
