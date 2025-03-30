//
//  _ActivatableSkillCost.swift
//  OptolithDatabaseSchema
//

public enum OneTimeCost: EntitySubtype {
    case single(SingleOneTimeCost)
    case conjunction(MultipleOneTimeCosts)
    case disjunction(MultipleOneTimeCosts)
    case map(CostMap)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case single = "single"
        case conjunction = "conjunction"
        case disjunction = "disjunction"
        case map = "map"
    }

    private enum Discriminator: String, Decodable {
        case single = "Single"
        case conjunction = "Conjunction"
        case disjunction = "Disjunction"
        case map = "Map"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .single:
            self = .single(try container.decode(SingleOneTimeCost.self, forKey: .single))
        case .conjunction:
            self = .conjunction(try container.decode(MultipleOneTimeCosts.self, forKey: .conjunction))
        case .disjunction:
            self = .disjunction(try container.decode(MultipleOneTimeCosts.self, forKey: .disjunction))
        case .map:
            self = .map(try container.decode(CostMap.self, forKey: .map))
        }
    }
}

public enum SingleOneTimeCost: EntitySubtype {
    case modifiable(ModifiableOneTimeCost)
    case nonModifiable(NonModifiableOneTimeCost)
    case indefinite(IndefiniteOneTimeCost)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case modifiable = "modifiable"
        case nonModifiable = "non_modifiable"
        case indefinite = "indefinite"
    }

    private enum Discriminator: String, Decodable {
        case modifiable = "Modifiable"
        case nonModifiable = "NonModifiable"
        case indefinite = "Indefinite"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .modifiable:
            self = .modifiable(try container.decode(ModifiableOneTimeCost.self, forKey: .modifiable))
        case .nonModifiable:
            self = .nonModifiable(try container.decode(NonModifiableOneTimeCost.self, forKey: .nonModifiable))
        case .indefinite:
            self = .indefinite(try container.decode(IndefiniteOneTimeCost.self, forKey: .indefinite))
        }
    }
}

public typealias MultipleOneTimeCosts = [SingleOneTimeCost]

public struct ModifiableOneTimeCost: EntitySubtype {
    /// The initial skill modification identifier/level.
    public let initialModificationLevel: Int

    /// The part of the cost value that has to be spent permanently.
    public let permanentValue: Int?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ModifiableOneTimeCostTranslation>?

    public init(initialModificationLevel: Int, permanentValue: Int? = nil, translations: LocaleMap<ModifiableOneTimeCostTranslation>? = nil) {
        self.initialModificationLevel = initialModificationLevel
        self.permanentValue = permanentValue
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case initialModificationLevel = "initial_modification_level"
        case permanentValue = "permanent_value"
        case translations = "translations"
    }
}

public struct ModifiableOneTimeCostTranslation: EntitySubtype {
    /// A replacement string.
    public let replacement: ResponsiveTextReplace

    public init(replacement: ResponsiveTextReplace) {
        self.replacement = replacement
    }
}

public struct NonModifiableOneTimeCost: EntitySubtype {
    /// If `true`, the non-modifiable value is a minimum value.
    public let isMinimum: Bool?

    /// The AE cost value.
    public let value: Int

    /// The part of the cost value that has to be spent permanently.
    public let permanentValue: Int?

    /// The cost have to be per a specific countable entity, e.g. `8 KP per person`.
    public let per: NonModifiableOneTimeCostPerCountable?

    /// All translations for the entry, identified by IETF language tag
    /// (BCP47).
    public let translations: LocaleMap<NonModifiableOneTimeCostTranslation>?

    public init(isMinimum: Bool? = nil, value: Int, permanentValue: Int? = nil, per: NonModifiableOneTimeCostPerCountable? = nil, translations: LocaleMap<NonModifiableOneTimeCostTranslation>? = nil) {
        self.isMinimum = isMinimum
        self.value = value
        self.permanentValue = permanentValue
        self.per = per
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case isMinimum = "is_minimum"
        case value = "value"
        case permanentValue = "permanent_value"
        case per = "per"
        case translations = "translations"
    }
}

public struct NonModifiableOneTimeCostPerCountable: EntitySubtype {
    /// If defined, the minimum total AE that have to be spent casting the skill.
    public let minimumTotal: Double?

    /// All translations for the entry, identified by IETF language tag
    /// (BCP47).
    public let translations: LocaleMap<NonModifiableOneTimeCostPerCountableTranslation>

    public init(minimumTotal: Double? = nil, translations: LocaleMap<NonModifiableOneTimeCostPerCountableTranslation>) {
        self.minimumTotal = minimumTotal
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case minimumTotal = "minimum_total"
        case translations = "translations"
    }
}

public struct NonModifiableOneTimeCostPerCountableTranslation: EntitySubtype {
    /// The countable entity name.
    public let countable: ResponsiveText

    public init(countable: ResponsiveText) {
        self.countable = countable
    }
}

public struct NonModifiableOneTimeCostTranslation: EntitySubtype {
    /// A note, appended to the generated string in parenthesis.
    public let note: ResponsiveTextOptional

    public init(note: ResponsiveTextOptional) {
        self.note = note
    }
}

public struct IndefiniteOneTimeCost: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteOneTimeCostTranslation>

    public init(translations: LocaleMap<IndefiniteOneTimeCostTranslation>) {
        self.translations = translations
    }
}

public struct IndefiniteOneTimeCostTranslation: EntitySubtype {
    /// A description of where the cost come from.
    public let description: ResponsiveText

    public init(description: ResponsiveText) {
        self.description = description
    }
}

/// A content that is `2/4/8/16 AE for an item the size of a cup/chest/door/castle gate` may be respresented as the following map:
/// 
/// ```yaml
/// options:
///   - value: 2
///     label: "cup"
///   - value: 4
///     label: "chest"
///   - value: 8
///     label: "door"
///   - value: 16
///     label: "castle gate"
/// for_append: "an item the size of a"
/// ```
/// 
/// This will generate the exact same string as seen above – given it is set for a spellwork and thus `AE` is used.
public struct CostMap: EntitySubtype {
    /// The possible costs and associated labels.
    public let options: [CostMapOption]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CostMapTranslation>?

    public init(options: [CostMapOption], translations: LocaleMap<CostMapTranslation>? = nil) {
        self.options = options
        self.translations = translations
    }
}

public struct CostMapOption: EntitySubtype {
    /// The full cost value for this option.
    public let value: Int

    /// The part of the `value` that has to be paid permanently.
    public let permanentValue: Int?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CostMapOptionTranslation>?

    public init(value: Int, permanentValue: Int? = nil, translations: LocaleMap<CostMapOptionTranslation>? = nil) {
        self.value = value
        self.permanentValue = permanentValue
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case value = "value"
        case permanentValue = "permanent_value"
        case translations = "translations"
    }
}

public struct CostMapOptionTranslation: EntitySubtype {
    /// The description of the option for cost string generation.
    public let label: NonEmptyString

    /// The description of the option if used standalone. Only used if different from `label`.
    public let labelStandalone: NonEmptyString?

    public init(label: NonEmptyString, labelStandalone: NonEmptyString? = nil) {
        self.label = label
        self.labelStandalone = labelStandalone
    }

    private enum CodingKeys: String, CodingKey {
        case label = "label"
        case labelStandalone = "label_standalone"
    }
}

public struct CostMapTranslation: EntitySubtype {
    /// Place a string between the `for` and the grouped map option labels.
    public let listPrepend: NonEmptyString?

    /// Place a string after the grouped map option labels.
    public let listAppend: NonEmptyString?

    /// If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.
    public let replacement: NonEmptyString?

    public init(listPrepend: NonEmptyString? = nil, listAppend: NonEmptyString? = nil, replacement: NonEmptyString? = nil) {
        self.listPrepend = listPrepend
        self.listAppend = listAppend
        self.replacement = replacement
    }

    private enum CodingKeys: String, CodingKey {
        case listPrepend = "list_prepend"
        case listAppend = "list_append"
        case replacement = "replacement"
    }
}

public enum SustainedCost: EntitySubtype {
    case modifiable(ModifiableSustainedCost)
    case nonModifiable(NonModifiableSustainedCost)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case modifiable = "modifiable"
        case nonModifiable = "non_modifiable"
    }

    private enum Discriminator: String, Decodable {
        case modifiable = "Modifiable"
        case nonModifiable = "NonModifiable"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .modifiable:
            self = .modifiable(try container.decode(ModifiableSustainedCost.self, forKey: .modifiable))
        case .nonModifiable:
            self = .nonModifiable(try container.decode(NonModifiableSustainedCost.self, forKey: .nonModifiable))
        }
    }
}

public struct ModifiableSustainedCost: EntitySubtype {
    /// The initial skill modification identifier/level.
    public let initialModificationLevel: Int

    /// The sustain interval.
    public let interval: DurationUnitValue

    public init(initialModificationLevel: Int, interval: DurationUnitValue) {
        self.initialModificationLevel = initialModificationLevel
        self.interval = interval
    }

    private enum CodingKeys: String, CodingKey {
        case initialModificationLevel = "initial_modification_level"
        case interval = "interval"
    }
}

public struct NonModifiableSustainedCost: EntitySubtype {
    /// If `true`, the non-modifiable value is a minimum value.
    public let isMinimum: Bool?

    /// The AE cost value.
    public let value: Int

    /// The cost have to be per a specific countable entity, e.g. `8 KP per person per 5 minutes`.
    public let per: NonModifiableSustainedCostPerCountable?

    /// The sustain interval.
    public let interval: DurationUnitValue

    public init(isMinimum: Bool? = nil, value: Int, per: NonModifiableSustainedCostPerCountable? = nil, interval: DurationUnitValue) {
        self.isMinimum = isMinimum
        self.value = value
        self.per = per
        self.interval = interval
    }

    private enum CodingKeys: String, CodingKey {
        case isMinimum = "is_minimum"
        case value = "value"
        case per = "per"
        case interval = "interval"
    }
}

public struct NonModifiableSustainedCostPerCountable: EntitySubtype {
    /// If defined, the minimum total AE that have to be spent casting the skill.
    public let minimumTotal: Double?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<NonModifiableSustainedCostPerCountableTranslation>

    public init(minimumTotal: Double? = nil, translations: LocaleMap<NonModifiableSustainedCostPerCountableTranslation>) {
        self.minimumTotal = minimumTotal
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case minimumTotal = "minimum_total"
        case translations = "translations"
    }
}

public struct NonModifiableSustainedCostPerCountableTranslation: EntitySubtype {
    /// The countable entity name.
    public let countable: ResponsiveText

    public init(countable: ResponsiveText) {
        self.countable = countable
    }
}
