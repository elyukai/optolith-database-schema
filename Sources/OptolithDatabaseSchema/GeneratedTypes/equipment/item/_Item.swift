//
//  _Item.swift
//  OptolithDatabaseSchema
//

public struct DefaultItem: EntitySubtype {
    /// The cost in silverthalers.
    public let cost: Cost

    /// The weight in kg.
    public let weight: Weight

    /// The complexity of crafting the item.
    public let complexity: Complexity?

    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    public let structurePoints: StructurePoints

    /// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
    public let combatUse: CombatUse?

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DefaultItemTranslation>

    public init(cost: Cost, weight: Weight, complexity: Complexity? = nil, structurePoints: StructurePoints, combatUse: CombatUse? = nil, src: PublicationRefs, translations: LocaleMap<DefaultItemTranslation>) {
        self.cost = cost
        self.weight = weight
        self.complexity = complexity
        self.structurePoints = structurePoints
        self.combatUse = combatUse
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case weight = "weight"
        case complexity = "complexity"
        case structurePoints = "structure_points"
        case combatUse = "combat_use"
        case src = "src"
        case translations = "translations"
    }
}

/// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
public enum CombatUse: EntitySubtype {
    case weapon(SecondaryWeapon)
    case armor(SecondaryArmor)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case weapon = "weapon"
        case armor = "armor"
    }

    private enum Discriminator: String, Decodable {
        case weapon = "Weapon"
        case armor = "Armor"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .weapon:
            self = .weapon(try container.decode(SecondaryWeapon.self, forKey: .weapon))
        case .armor:
            self = .armor(try container.decode(SecondaryArmor.self, forKey: .armor))
        }
    }
}

public struct DefaultItemTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString

    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?

    /// Note text.
    public let note: NonEmptyMarkdown?

    /// Special rules text.
    public let rules: NonEmptyMarkdown?

    public let errata: Errata?

    public init(name: NonEmptyString, secondaryName: NonEmptyString? = nil, note: NonEmptyMarkdown? = nil, rules: NonEmptyMarkdown? = nil, errata: Errata? = nil) {
        self.name = name
        self.secondaryName = secondaryName
        self.note = note
        self.rules = rules
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case secondaryName = "secondary_name"
        case note = "note"
        case rules = "rules"
        case errata = "errata"
    }
}

/// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
public typealias StructurePoints = [StructurePointsComponent]

public struct StructurePointsComponent: EntitySubtype {
    /// The structure points.
    public let points: Int

    public init(points: Int) {
        self.points = points
    }
}

/// The cost in silverthalers.
public enum Cost: EntitySubtype {
    case free
    case various
    case invaluable
    case fixed(FixedCost)
    case range(CostRange)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case free = "free"
        case various = "various"
        case invaluable = "invaluable"
        case fixed = "fixed"
        case range = "range"
    }

    private enum Discriminator: String, Decodable {
        case free = "Free"
        case various = "Various"
        case invaluable = "Invaluable"
        case fixed = "Fixed"
        case range = "Range"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .free:
            self = .free
        case .various:
            self = .various
        case .invaluable:
            self = .invaluable
        case .fixed:
            self = .fixed(try container.decode(FixedCost.self, forKey: .fixed))
        case .range:
            self = .range(try container.decode(CostRange.self, forKey: .range))
        }
    }
}

public struct FixedCost: EntitySubtype {
    /// The cost in silverthalers.
    public let value: Double

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CostTranslation>?

    public init(value: Double, translations: LocaleMap<CostTranslation>? = nil) {
        self.value = value
        self.translations = translations
    }
}

public struct CostRange: EntitySubtype {
    /// The lower bound of the cost in silverthalers.
    public let from: Double

    /// The upper bound of the cost in silverthalers.
    public let to: Double

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CostTranslation>?

    public init(from: Double, to: Double, translations: LocaleMap<CostTranslation>? = nil) {
        self.from = from
        self.to = to
        self.translations = translations
    }
}

public struct CostTranslation: EntitySubtype {
    /// The cost get wrapped by this text using a placeholder in the text.
    public let wrapInText: String

    public init(wrapInText: String) {
        self.wrapInText = wrapInText
    }

    private enum CodingKeys: String, CodingKey {
        case wrapInText = "wrap_in_text"
    }
}

/// The weight in kg.
public typealias Weight = Double

/// The complexity of crafting the item.
public enum Complexity: EntitySubtype {
    case primitive
    case simple
    case complex(ComplexComplexity)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case primitive = "primitive"
        case simple = "simple"
        case complex = "complex"
    }

    private enum Discriminator: String, Decodable {
        case primitive = "Primitive"
        case simple = "Simple"
        case complex = "Complex"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .primitive:
            self = .primitive
        case .simple:
            self = .simple
        case .complex:
            self = .complex(try container.decode(ComplexComplexity.self, forKey: .complex))
        }
    }
}

public struct ComplexComplexity: EntitySubtype {
    /// The AP value for the trade secret.
    public let apValue: Int

    public init(apValue: Int) {
        self.apValue = apValue
    }

    private enum CodingKeys: String, CodingKey {
        case apValue = "ap_value"
    }
}
