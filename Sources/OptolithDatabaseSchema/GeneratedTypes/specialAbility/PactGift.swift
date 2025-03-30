//
//  PactGift.swift
//  OptolithDatabaseSchema
//

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

    public init(id: Id, levels: Levels? = nil, selectOptions: SelectOptions? = nil, maximum: Maximum? = nil, permanentDemonicConsumption: PactGiftPermanentDemonicConsumption? = nil, automaticEntries: [AutomaticEntry]? = nil, prerequisites: GeneralPrerequisites? = nil, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<PactGiftTranslation>) {
        self.id = id
        self.levels = levels
        self.selectOptions = selectOptions
        self.maximum = maximum
        self.permanentDemonicConsumption = permanentDemonicConsumption
        self.automaticEntries = automaticEntries
        self.prerequisites = prerequisites
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }

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

public enum PactGiftPermanentDemonicConsumption: EntitySubtype {
    case fixed(FixedPactGiftPermanentDemonicConsumption)
    case perLevel(PactGiftPermanentDemonicConsumptionPerLevel)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case fixed = "fixed"
        case perLevel = "per_level"
    }

    private enum Discriminator: String, Decodable {
        case fixed = "Fixed"
        case perLevel = "PerLevel"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .fixed:
            self = .fixed(try container.decode(FixedPactGiftPermanentDemonicConsumption.self, forKey: .fixed))
        case .perLevel:
            self = .perLevel(try container.decode(PactGiftPermanentDemonicConsumptionPerLevel.self, forKey: .perLevel))
        }
    }
}

public struct FixedPactGiftPermanentDemonicConsumption: EntitySubtype {
    /// The levels of *Demonic Consumption* the pact gift causes.
    public let levels: Int

    public init(levels: Int) {
        self.levels = levels
    }
}

public struct PactGiftPermanentDemonicConsumptionPerLevel: EntitySubtype {
    /// The levels of *Demonic Consumption* the pact gift causes per activated level of the pact gift.
    public let levels: Int

    public init(levels: Int) {
        self.levels = levels
    }
}

public struct AutomaticEntry: EntitySubtype {
    /// What type of action is applied to the target entry?
    public let action: AutomaticEntryAction

    /// If an entry is added or removed, does is cost or grant adventure points or is it free of charge?
    public let applyApValue: Bool

    /// The entry that is to be added or removed. It can be a fixed entry or a selection where the player must choose one entry.
    public let `target`: AutomaticEntryTarget

    public init(action: AutomaticEntryAction, applyApValue: Bool, `target`: AutomaticEntryTarget) {
        self.action = action
        self.applyApValue = applyApValue
        self.`target` = `target`
    }

    private enum CodingKeys: String, CodingKey {
        case action = "action"
        case applyApValue = "apply_ap_value"
        case `target` = "target"
    }
}

public enum AutomaticEntryAction: String, EntitySubtype {
    case add = "Add"
    case remove = "Remove"
}

public enum AutomaticEntryTarget: EntitySubtype {
    case selection(AutomaticEntryTargetSelection)
    case fixed(FixedAutomaticEntryTarget)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case selection = "selection"
        case fixed = "fixed"
    }

    private enum Discriminator: String, Decodable {
        case selection = "Selection"
        case fixed = "Fixed"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .selection:
            self = .selection(try container.decode(AutomaticEntryTargetSelection.self, forKey: .selection))
        case .fixed:
            self = .fixed(try container.decode(FixedAutomaticEntryTarget.self, forKey: .fixed))
        }
    }
}

public struct AutomaticEntryTargetSelection: EntitySubtype {
    public let list: AutomaticEntryTargetSelectionList

    public init(list: AutomaticEntryTargetSelectionList) {
        self.list = list
    }
}

public enum AutomaticEntryTargetSelectionList: String, EntitySubtype {
    case magicalTraditions = "MagicalTraditions"
    case magicalDilettanteTraditions = "MagicalDilettanteTraditions"
}

public struct FixedAutomaticEntryTarget: EntitySubtype {
    public let id: ActivatableIdentifier

    public init(id: ActivatableIdentifier) {
        self.id = id
    }
}

public struct PactGiftTranslation: EntitySubtype {
    public let name: Name

    public let nameInLibrary: NameInLibrary?

    public let effect: Effect

    public let errata: Errata?

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, effect: Effect, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.effect = effect
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case effect = "effect"
        case errata = "errata"
    }
}
